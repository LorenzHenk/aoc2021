## Description

This is my take on the [Advent of Code 2021](https://adventofcode.com/2021), written in NodeJS.

## Configuration

Start by creating a `.env` based on the `.env.example`:

```
cp .env.example .env
```

Replace the `YEAR` with the year you want to work on.
Replace the `SESSION` with the session cookie content.

## Usage

### Initialize a new day

```bash
yarn start init 01 # the day you want to initialize
```

The same instruction can be used to update the README as soon as part two is unlocked.

### Execute day

```bash
yarn start exec day01 # run part one and two of day01
yarn start exec -1 day01 # run part one of day01
yarn start exec -2 day01 # run part two of day01
```

### Tests

Run the tests:

```bash
yarn test
```

Run tests for specific day in watch mode:

```bash
yarn test --testPathPattern "day01" --watch
```

## Meta

I'm using [gitmoji](https://gitmoji.carloscuesta.me/) for commit messages.
