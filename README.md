# Happy Mario World Reforged

> A remastered fan level collection for *Mario Forever*, built from the Happy Mario World template in **Thunder Engine**. Eight worlds, a cutscene-connected journey, and ongoing updates driven by player feedback.

[简体中文](./README_ZH.md) · [View the web archive](https://happymario9.github.io/Mario-Forever-Happy-Mario-World-Reforged/) · [Download latest](https://github.com/happymario9/Mario-Forever-Happy-Mario-World-Reforged/releases/latest)

## Snapshot

| | |
|---|---|
| Current version | **V0.8.0** |
| Last updated | 2026.07.22 |
| Engine | Thunder Engine |
| Worlds / Main levels | 8 / 32 (all main levels complete) |
| Format | Mario Forever fan level collection |
| Created by | Happymario9 (快乐mario9) |
| Level design & testing | Green Sweet (绿色的糖果) |

## Quick links

| Resource | Address |
|---|---|
| Web archive (this site) | <https://happymario9.github.io/Mario-Forever-Happy-Mario-World-Reforged/> |
| Latest download · GitHub Releases | <https://github.com/happymario9/Mario-Forever-Happy-Mario-World-Reforged/releases/latest> |
| Mario Forever forum thread (original post) | <https://www.marioforever.net/forum.php?mod=viewthread&tid=3853> |
| Baidu Netdisk mirror · V0.8.0 (code `nidc`) | <https://pan.baidu.com/s/1X5TOxB4vtWw3b8PLY3gAvg?pwd=nidc> |
| BGM playlist · NetEase Cloud Music | <https://music.163.com/#/playlist?id=17978954676&uct2=U2FsdGVkX1/AaJJ1xrjcyYYNjIFWz/r21UQlYgx9wzE=> |

The latest build is published on GitHub Releases. A Baidu Netdisk mirror is also provided above; mind the extraction code if you use it. Share your feedback in the original forum thread.

## About

This is a first experiment with Mario Forever made in Thunder Engine. Level names follow the original Happy Mario World (HMW) template, but difficulty does not rise in a straight line, so each world can be explored at your own pace. Every world keeps its HMW level mapping while adding detail passes, story cutscenes, completion saves, and more exploration hints.

## The eight worlds

| World | Theme |
|---|---|
| World 1 | Grassland Green |
| World 2 | Daytime Water World |
| World 3 | Night World |
| World 4 | Sky World |
| World 5 | Desert World |
| World 6 | Snow and Ice World |
| World 7 | Rainy Night World |
| World 8 | Final Castle Challenge |

V0.8.0 also adds the extra level **synthetic roto wave**, the first PKMF8 round, which sits outside the eight main worlds.

## Release history

| Version | Date | Highlights | Download |
|---|---|---|---|
| **V0.8.0** (current) | 2026.07.22 | World 8; story cutscenes 1-1 → 8-4; extra level *synthetic roto wave* (PKMF8 round 1); Credits screen; free up/down world selection; fixes to 4-4 Boss and World 6 ice block | [Baidu Netdisk](https://pan.baidu.com/s/1X5TOxB4vtWw3b8PLY3gAvg?pwd=nidc) (code `nidc`) |
| V0.7.0 | 2026.07.13 | World 7; 7-3 / 7-4 difficulty to be reduced in a later version | [Baidu Netdisk](https://pan.baidu.com/s/1iZ0hp8lgCRCLIHfFn3AL7Q?pwd=jpt4) (code `jpt4`) |
| V0.6.0 | 2026.07.04 | World 6; World 5 completion animation | [LanZou](https://wwanm.lanzouq.com/i7ym33uedz1c) (code `h590`) |
| V0.5.0 | 2026.06.24 | World 5; optimized W1-W4 castle entry; maker info updates | [LanZou](https://wwanm.lanzouq.com/iWf3L3ssgrcf) (code `hmsy`) |
| V0.4.0 | 2026.06.14 | World 4; bonus level (by Green Sweet); W1-W4 world-complete cutscenes; fixes in 3-3 / 3-4 | [LanZou](https://wwanm.lanzouq.com/ifwxa3rv9jrc) (code `2yz7`) |
| V0.3.0 | 2026.06.06 | World 3; completion saves and star markers; castle destruction cutscenes; fixed Koopa battle trigger in 1-4 / 2-4 | [LanZou](https://wwanm.lanzouq.com/iQzH93r9rn3i) (code `8tvb`) |
| V0.2.0 | 2026.05.28 | World 2; simple level select; fixed 1-2 pipe title | [LanZou](https://wwanm.lanzouq.com/i16lw3qjf4ve) |
| V0.1.0 | 2026.05.23 | World 1; initial release | [LanZou](https://wwanm.lanzouq.com/ivCaT3q62aoh) |

Older versions are mirrored above; the full set is also available on the [GitHub Releases](https://github.com/happymario9/Mario-Forever-Happy-Mario-World-Reforged/releases) page.

## This repository

This repo is the official **project archive website** for Happy Mario World Reforged. It is a Vite + React + TypeScript single-page app deployed to GitHub Pages; the release artifacts are hosted here as GitHub Releases.

The deployed site above renders the live level archive, patch notes, and download pages you can browse without cloning anything.

### Local development

Requires Node.js and [pnpm](https://pnpm.io) (pinned to `pnpm@11.0.8`).

```bash
pnpm install
pnpm dev        # start the dev server
pnpm build      # type-check + production build to dist/
pnpm preview    # preview the production build
```

Pushing to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds with the Pages base path and publishes `dist` to GitHub Pages.

## Credits

- Level creator & producer: 快乐mario9 (Happymario9)
- Level design & testing: 绿色的糖果 (Green Sweet)

## Disclaimer

Happy Mario World Reforged is a non-commercial fan work and is not affiliated with Nintendo or the Mario Forever project. Mario and all related characters are trademarks of Nintendo. Please support the official works.
