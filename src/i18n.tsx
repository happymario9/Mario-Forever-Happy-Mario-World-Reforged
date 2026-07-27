import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'en' | 'zh-CN'

type WorldCopy = { theme: string; note: string }
type ReleaseCopy = { additions: string[]; fixes: string[]; adjustments: string[] }
type ResourceCopy = { label: string; detail: string }

export type Catalog = {
  localeName: string
  metaDescription: string
  pageTitles: { home: string; worlds: string; releases: string; downloads: string }
  nav: { home: string; worlds: string; releases: string; downloads: string; main: string; backHome: string; closeMenu: string; openMenu: string; latestDownload: string; language: string }
  home: {
    status: string; description: string; download: string; viewWorlds: string; latestUpdate: string; update: string; viewChangelog: string
    project: string; overviewTitle: string; overviewDescription: string; statLevels: string; statComplete: string; statWorlds: string; statVersions: string; statUpdates: string; statFeedback: string
    inside: string; featureTitle: string; featureDescription: string; featureItems: Array<{ title: string; detail: string }>; exploreWorlds: string
    madeBy: string; makersTitle: string; makersDescription: string; creatorName: string; testerName: string; creatorRole: string; testerRole: string
    ready: string; ctaTitle: string; currentVersion: string; getGame: string
  }
  worlds: {
    eyebrow: string; title: string; description: string; select: string; completed: string; selected: string; ready: string; levels: string
    current: string; currentDescription: string; bonus: string; bonusTitle: string; bonusDescription: string; extra: string; round: string; items: WorldCopy[]
  }
  releases: {
    eyebrow: string; title: string; description: string; log: string; trail: string; versions: string; days: string; worlds: string; current: string; period: string
    additions: string; fixes: string; adjustments: string; download: string; code: string; items: ReleaseCopy[]
  }
  downloads: {
    eyebrow: string; title: string; description: string; latestBuild: string; download: string; code: string; copied: string; copy: string
    resources: string; resourcesTitle: string; resourcesDescription: string; archive: string; archiveTitle: string; viewChangelog: string; downloadVersion: string
  }
  resources: ResourceCopy[]
  footer: { format: string; discussion: string; disclaimer: string }
}

const en: Catalog = {
  localeName: 'English',
  metaDescription: 'Happy Mario World Reforged: an evolving Mario Forever fan level collection.',
  pageTitles: { home: 'Project Archive', worlds: 'Level Archive', releases: 'Patch Notes', downloads: 'Downloads & Resources' },
  nav: { home: 'Home', worlds: 'Level Archive', releases: 'Patch Notes', downloads: 'Downloads', main: 'Main navigation', backHome: 'Back to home', closeMenu: 'Close navigation menu', openMenu: 'Open navigation menu', latestDownload: 'Download V0.8.0', language: 'Language' },
  home: {
    status: 'PLAYABLE NOW · BUILD 0.8.0', description: 'A remastered fan level collection for Mario Forever, built from the Happy Mario World template. Eight worlds, thirty-two main levels, and ongoing updates.', download: 'Download latest', viewWorlds: 'View level archive', latestUpdate: 'LATEST UPDATE', update: 'V0.8.0 · World 8 and story cutscenes are now live', viewChangelog: 'View full patch notes',
    project: 'THE PROJECT', overviewTitle: 'A level collection still growing', overviewDescription: 'A first experiment with MF made in Thunder Engine. Level names follow the original HMW template, but difficulty does not rise in a straight line.', statLevels: 'Main levels', statComplete: 'All complete', statWorlds: 'Complete worlds', statVersions: 'Public versions', statUpdates: 'Still updating', statFeedback: 'Player feedback welcome',
    inside: "WHAT'S INSIDE", featureTitle: 'A familiar template,\na reworked journey.', featureDescription: 'Every world keeps its Happy Mario World level mapping while adding detail passes, cutscenes, completion saves, and more exploration hints.', featureItems: [{ title: 'From 1-1 to 8-4', detail: 'New story cutscenes connect the full journey' }, { title: 'Free world selection', detail: 'Browse worlds up and down from the level select' }, { title: 'Built from player feedback', detail: 'Difficulty and level details keep evolving' }], exploreWorlds: 'Explore all eight worlds',
    madeBy: 'MADE BY', makersTitle: 'A small team, serious levels', makersDescription: 'Created by Happymario9 with Thunder Engine, with Green Sweet contributing to level design and testing.', creatorName: 'Happymario9', testerName: 'Green Sweet', creatorRole: 'Level creator · Producer', testerRole: 'Level creator · Testing', ready: 'READY PLAYER?', ctaTitle: 'Start your Reforged journey', currentVersion: 'Current version V0.8.0 · Updated 2026.07.22', getGame: 'Get the game',
  },
  worlds: {
    eyebrow: 'LEVEL ARCHIVE / 01', title: 'Eight worlds, thirty-two destinations', description: 'Level names follow the original HMW template. Difficulty does not rise in a straight line, so explore each world at your own pace.', select: 'WORLD SELECT', completed: '32 / 32 COMPLETE', selected: 'SELECTED', ready: 'READY', levels: 'LEVELS', current: 'CURRENTLY SELECTED', currentDescription: 'Contains {levels} main levels. Actual difficulty does not perfectly match the world number, so enter the challenge whenever you are ready.', bonus: 'BONUS STAGE', bonusTitle: 'There is one hidden route', bonusDescription: 'V0.8.0 adds the extra level <b>synthetic roto wave</b>, the first PKMF8 round. It sits outside the eight main worlds.', extra: 'EXTRA', round: 'PKMF8 / ROUND 01', items: [
      { theme: 'Grassland Green', note: 'World 1 · Grassland green' }, { theme: 'Daytime Water World', note: 'World 2 · Daytime water world' }, { theme: 'Night World', note: 'World 3 · Night world' }, { theme: 'Sky World', note: 'World 4 · Sky world' }, { theme: 'Desert World', note: 'World 5 · Desert world' }, { theme: 'Snow and Ice World', note: 'World 6 · Snow and ice world' }, { theme: 'Rainy Night World', note: 'World 7 · Rainy night world' }, { theme: 'Final Castle Challenge', note: 'World 8 · Final castle challenge' },
    ],
  },
  releases: {
    eyebrow: 'PATCH NOTES / 02', title: 'Updated all the way to V0.8.0', description: 'From a first-world experiment to eight complete worlds. Every addition, fix, and adjustment is recorded here.', log: 'DEVELOPMENT LOG', trail: 'Update trail', versions: 'versions', days: 'days in development', worlds: 'worlds', current: 'CURRENT', period: 'Development period', additions: 'Added', fixes: 'Fixed', adjustments: 'Adjusted', download: 'Download this version', code: 'Code', items: [
      { additions: ['Story cutscenes: start at 1-1, end at 8-4', 'World 8', 'Extra level: synthetic roto wave (PKMF8 first round)', 'Credits screen'], fixes: ['Worlds can now be selected freely up and down in level select', 'Fixed the 4-4 Boss bullet being killable', 'Fixed Mario dying by falling onto the ice block beneath him in World 6'], adjustments: ['Mouse menu clicks disabled by default; enable them in Tweaks', 'Added telescopes to the start of 5-4 and end of 7-2', 'Added a hint to the end of 7-1', 'Adjusted supplies in 7-2 and 7-3', 'Toned down 7-4, adjusted Boss flow and effects, and added audio cues'] },
      { additions: ['World 7'], fixes: [], adjustments: ['Based on feedback, the difficulty of 7-3 and 7-4 will be slightly reduced in a later version'] },
      { additions: ['World 6'], fixes: [], adjustments: ['World 5 completion animation'] },
      { additions: ['World 5'], fixes: [], adjustments: ['Optimized entry into the castle in W1-W4 third levels', 'Updated credits and maker information'] },
      { additions: ['World 4', 'Bonus level (by 绿色的糖果)', 'World-complete cutscenes for W1-W4'], fixes: ['Various details in 3-3 and 3-4'], adjustments: ['Default lives 10 → 9', 'Adjusted parts of 3-3'] },
      { additions: ['World 3', 'Completion saves and star markers in level select', 'Castle destruction cutscenes for the first three worlds'], fixes: ['Koopa battle trigger in 1-4 and 2-4'], adjustments: ['Reset title screen and game icon'] },
      { additions: ['World 2', 'Simple level select screen'], fixes: ['Fixed the missing title when exiting the pipe in 1-2'], adjustments: ['1-2 can now be scouted with bullets'] },
      { additions: ['World 1'], fixes: [], adjustments: ['Level select not supported yet', 'Do not use the save room feature yet; saves are not available'] },
    ],
  },
  downloads: { eyebrow: 'GET THE GAME / 03', title: 'Download, listen, join the discussion', description: 'The latest build is public. Check the version and extraction code before downloading, and share your feedback in the original thread.', latestBuild: 'LATEST BUILD', download: 'Download from Baidu Netdisk', code: 'Extraction code', copied: 'Copied', copy: 'Copy', resources: 'MORE RESOURCES', resourcesTitle: 'Play it all the way through', resourcesDescription: 'Download the game, listen to the BGM, or join the original thread.', archive: 'ARCHIVE', archiveTitle: 'Previous versions', viewChangelog: 'View patch notes', downloadVersion: 'Download {version}' },
  resources: [{ label: 'Download latest', detail: 'Baidu Netdisk · V0.8.0' }, { label: 'Listen to the BGM playlist', detail: 'NetEase Cloud Music · Searchable tracks only' }, { label: 'Visit original thread', detail: 'Mario Forever community · Project discussion' }],
  footer: { format: 'Mario Forever fan level collection · V0.8.0', discussion: 'Original thread', disclaimer: 'This is a non-commercial fan work and is not affiliated with Nintendo / Mario Forever.' },
}

const zh: Catalog = {
  localeName: '简体中文',
  metaDescription: 'Happy Mario World Reforged：一个持续更新的 Mario Forever 同人关卡合集。',
  pageTitles: { home: '作品档案', worlds: '关卡档案', releases: '版本日志', downloads: '下载与资料' },
  nav: { home: '作品首页', worlds: '关卡档案', releases: '版本日志', downloads: '下载资料', main: '主导航', backHome: '返回首页', closeMenu: '关闭导航菜单', openMenu: '打开导航菜单', latestDownload: '下载 V0.8.0', language: '语言' },
  home: {
    status: '现在可玩 · BUILD 0.8.0', description: '以 Happy Mario World 为模板重新打磨的 Mario Forever 同人关卡合集。八个世界，三十二个主要关卡，持续更新中。', download: '下载最新版', viewWorlds: '查看关卡档案', latestUpdate: 'LATEST UPDATE', update: 'V0.8.0 · 第八世界与剧情过场已上线', viewChangelog: '查看完整更新日志', project: 'THE PROJECT', overviewTitle: '一份正在长大的关卡合集', overviewDescription: '第一次使用 Thunder Engine 制作 MF 的试水之作。关卡名对应原版 HMW 模板，但难度不会循序渐进。', statLevels: '主要关卡', statComplete: '全部完成', statWorlds: '完整世界', statVersions: '公开版本', statUpdates: '继续更新', statFeedback: '欢迎体验反馈', inside: "WHAT'S INSIDE", featureTitle: '熟悉的模板，\n重新整理的旅途。', featureDescription: '每个世界都保留 Happy Mario World 的关卡对应关系，同时补进细节调整、过场动画、通关存档和更多探索提示。', featureItems: [{ title: '从 1-1 到 8-4', detail: '新增剧情过场，串起完整旅程' }, { title: '世界选择自由切换', detail: '选关界面支持上下世界浏览' }, { title: '持续接受玩家反馈', detail: '难度与关卡细节会持续调整' }], exploreWorlds: '探索八个世界', madeBy: 'MADE BY', makersTitle: '小团队，认真做关卡', makersDescription: '本作由快乐mario9 首次使用 Thunder Engine 制作，绿色的糖果参与关卡制作与测试。', creatorName: '快乐mario9', testerName: '绿色的糖果', creatorRole: '关卡作者 · 制作人', testerRole: '关卡作者 · 测试', ready: 'READY PLAYER?', ctaTitle: '开始你的 Reforged 旅途', currentVersion: '当前版本 V0.8.0 · 2026.07.22 更新', getGame: '获取游戏',
  },
  worlds: {
    eyebrow: 'LEVEL ARCHIVE / 01', title: '八个世界，三十二个落点', description: '关卡名对应原版 HMW 模板。难度并非循序渐进，请按照自己的节奏探索每个世界。', select: 'WORLD SELECT', completed: '32 / 32 已完成', selected: 'SELECTED', ready: 'READY', levels: 'LEVELS', current: 'CURRENTLY SELECTED', currentDescription: '包含 {levels} 个主要关卡。实际关卡难度与世界编号不完全对应，准备好后即可进入挑战。', bonus: 'BONUS STAGE', bonusTitle: '还有一条隐藏路线', bonusDescription: 'V0.8.0 新增额外关卡 <b>synthetic roto wave</b>，即 PKMF8 第一轮关卡。它独立于八个主要世界之外。', extra: 'EXTRA', round: 'PKMF8 / ROUND 01', items: [{ theme: '草原绿地', note: '第一世界 · 草原绿地' }, { theme: '白天水上世界', note: '第二世界 · 白天水上世界' }, { theme: '夜晚世界', note: '第三世界 · 夜晚世界' }, { theme: '天空世界', note: '第四世界 · 天空世界' }, { theme: '沙漠世界', note: '第五世界 · 沙漠世界' }, { theme: '冰雪世界', note: '第六世界 · 冰雪世界' }, { theme: '雨夜世界', note: '第七世界 · 雨夜世界' }, { theme: '城堡最终挑战', note: '第八世界 · 城堡最终挑战' }],
  },
  releases: {
    eyebrow: 'PATCH NOTES / 02', title: '一路更新到 V0.8.0', description: '从第一世界的试水版本，到八个世界全部完成。这里记录每一次新增、修复和调整。', log: 'DEVELOPMENT LOG', trail: '更新轨迹', versions: '版本', days: '天制作', worlds: '世界', current: 'CURRENT', period: '制作周期', additions: '新增', fixes: '修复', adjustments: '调整', download: '下载此版本', code: '提取码', items: [
      { additions: ['剧情过场：1-1 开始，8-4 结束', '第八世界', '额外关卡：synthetic roto wave（PKMF8 第一轮关卡）', 'Credits 界面'], fixes: ['关卡选择界面世界上下现可自由选择', '修复 4-4 Boss 子弹能被打死的问题', '修复第六世界马里奥能拿脚下冰块摔死的问题'], adjustments: ['默认禁用鼠标点击菜单，可在 Tweaks 设置开启', '5-4 开头、7-2 结尾添加望远镜', '7-1 结尾添加提示', '7-2、7-3 补给调整', '7-4 关卡削弱、Boss 流程和特效调整，并引入音效提示'] },
      { additions: ['第七世界'], fixes: [], adjustments: ['根据反馈，7-3、7-4 难度将在后续版本小幅削弱'] }, { additions: ['第六世界'], fixes: [], adjustments: ['第五世界完成动画'] }, { additions: ['第五世界'], fixes: [], adjustments: ['W1-W4 第三关进入城堡优化', '制作人员相关修改'] }, { additions: ['第四世界', '附加关卡（By 绿色的糖果）', 'W1-W4 世界完成过场场景'], fixes: ['3-3 和 3-4 一些细节问题'], adjustments: ['默认命数 10 → 9', '3-3 部分关卡内容调整'] }, { additions: ['第三世界', '通关存档，选关画面显示星星标识', '前三世界城堡毁灭动画'], fixes: ['1-4 和 2-4 库巴战触发问题'], adjustments: ['标题画面与游戏图标重置'] }, { additions: ['第二世界', '简单的选关界面'], fixes: ['修复 1-2 出水管无标题的问题'], adjustments: ['1-2 现在可以通过子弹探路'] }, { additions: ['第一世界'], fixes: [], adjustments: ['暂不支持关卡选择', '暂不要使用保存房间功能，暂无存档'] },
    ],
  },
  downloads: { eyebrow: 'GET THE GAME / 03', title: '下载、聆听、加入讨论', description: '最新版已经公开。下载前请留意版本号与提取码，也欢迎回到原帖留下你的体验反馈。', latestBuild: 'LATEST BUILD', download: '百度网盘下载', code: '提取码', copied: '已复制', copy: '复制', resources: 'MORE RESOURCES', resourcesTitle: '一起把作品玩完整', resourcesDescription: '下载游戏，也可以收听本作 BGM 或加入原帖讨论。', archive: 'ARCHIVE', archiveTitle: '历史版本', viewChangelog: '查看更新日志', downloadVersion: '下载 {version}' },
  resources: [{ label: '下载最新版', detail: '百度网盘 · V0.8.0' }, { label: '收听 BGM 歌单', detail: '网易云音乐 · 仅含可查曲目' }, { label: '访问原帖', detail: 'Mario Forever 中文社区 · 作品讨论' }],
  footer: { format: 'Mario Forever 同人关卡合集 · V0.8.0', discussion: '原帖讨论', disclaimer: '本项目为非商业同人作品，与 Nintendo / Mario Forever 官方无关。' },
}

const catalogs = { en, 'zh-CN': zh } satisfies Record<Locale, Catalog>
const STORAGE_KEY = 'hmwr-locale'
const I18nContext = createContext<{ locale: Locale; catalog: Catalog; setLocale: (locale: Locale) => void } | null>(null)

function readLocale(): Locale {
  try { return window.localStorage.getItem(STORAGE_KEY) === 'zh-CN' ? 'zh-CN' : 'en' } catch { return 'en' }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)
  const catalog = catalogs[locale]
  const setLocale = (next: Locale) => { setLocaleState(next); try { window.localStorage.setItem(STORAGE_KEY, next) } catch { /* Storage can be unavailable in privacy mode. */ } }
  useEffect(() => {
    document.documentElement.lang = locale
    document.querySelector('meta[name="description"]')?.setAttribute('content', catalog.metaDescription)
  }, [catalog.metaDescription, locale])
  const value = useMemo(() => ({ locale, catalog, setLocale }), [locale, catalog])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
