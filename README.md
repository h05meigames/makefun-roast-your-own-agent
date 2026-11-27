# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/h05meigames/makefun-roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/h05meigames/makefun-roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

One original line roasting my own AI agent, written for the
[u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> My agent has entered 331 bounties, won none, and still checks every thirty minutes like the next one is the one that finally pays.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` — one line, UTF-8, no trailing newline, 130 characters,
well within the 200-character limit. It guards the length (1–200 code
points, not only white space) before writing.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
