import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "fs";

import { copy } from "fs-extra";

import { join } from "path";

import axios from "axios";
import { JSDOM } from "jsdom";
import turndown from "turndown";

import { log } from "./logging";
import { __basepath } from ".";

const turner = new turndown({
  fence: "```",
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "**" as any, // format italic as bold too
});

export default async (day: string) => {
  const value = (day.match(/day(\d+)/) ?? day.match(/(\d+)/))?.[1];
  if (!value) {
    log.error(`Invalid input "${day}"`);
    return;
  }

  if (!process.env.SESSION) {
    log.error(
      "SESSION not set, could not retrieve input data. Did you forget to setup the .env file?",
    );
    return;
  }

  const parsedDay = parseInt(value);

  const directoryName = `day${parsedDay.toString().padStart(2, "0")}`;
  const basePath = join(__dirname, "days", directoryName);

  log.verbose("Check if day already exists");
  if (existsSync(basePath)) {
    log.info("Day already exists, will gather README for Part Two");

    await saveReadme(basePath, parsedDay, 2);

    return;
  }

  log.info("Creating directory");

  console.log(__basepath);
  copy(join(__basepath, "template"), basePath);

  log.info("Directory created");

  await saveReadme(basePath, parsedDay, 1);

  log.info("Retrieve input data");

  const inputFileContent = await fetch(
    `https://adventofcode.com/${process.env.YEAR}/day/${parsedDay}/input`,
  );

  writeFileSync(
    join(basePath, "input.ts"),
    `export default \`${inputFileContent.substr(
      0,
      inputFileContent.length - 1,
    )}\``,
  );
  log.log("success", "Saved input file");
};

const saveReadme = async (basePath: string, day: any, part: 1 | 2) => {
  log.info("Fetching README");
  // retrieve README for that day
  const readmeData = await fetch(
    `https://adventofcode.com/${process.env.YEAR}/day/${day}`,
  );

  log.verbose("Transforming README");
  const dom = new JSDOM(readmeData);

  const article = dom.window.document.getElementsByClassName("day-desc")[
    part - 1
  ];
  if (!article) {
    log.error("Part does not exist");
    return;
  }

  const markdown =
    (part === 2 ? "\n\n" : "") + turner.turndown(article.innerHTML) + "\n";

  writeFileSync(join(basePath, "README.md"), markdown, { flag: "as" });
  log.log("success", "Saved instructions in README.md");
};

const fetch = async (url: string) =>
  (
    await axios.get(url, {
      responseType: "text",
      transformResponse: (data) => data,
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
    })
  ).data;
