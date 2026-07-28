export type ResourceLink = {
  label: string
  href: string
  detail: string
  kind: 'download' | 'music' | 'forum'
  code?: string
}

export type World = {
  number: number
  name: string
  theme: string
  color: string
  levels: number
  note: string
  preview: string
  gallery: string[]
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const assets = {
  titleBackground: asset('title_bg.png'),
  logo: asset('logo_hd.png'),
  title: asset('title_hd.png'),
  happymario9: asset('happymario9.jfif'),
  greenSweet: asset('greensweet.png'),
  icon: asset('icon.png'),
  preview: (name: string) => asset(`preview/${name}`),
}

export type Release = {
  version: string
  date: string
  period: string
  additions: string[]
  fixes: string[]
  adjustments: string[]
  href?: string
  code?: string
  current?: boolean
}

export const game = {
  title: 'Happy Mario World Reforged', shortTitle: 'HMWR', version: 'V0.8.0', updated: '2026.07.22',
  engine: 'Thunder Engine', format: '关卡合集', worlds: 8, mainLevels: 32, status: '主要关卡已全部完成',
  author: '快乐mario9', tester: '绿色的糖果', forum: 'https://www.marioforever.net/forum.php?mod=viewthread&tid=3853',
  music: 'https://music.163.com/#/playlist?id=17978954676&uct2=U2FsdGVkX1/AaJJ1xrjcyYYNjIFWz/r21UQlYgx9wzE=',
 download: 'https://pan.baidu.com/s/1X5TOxB4vtWw3b8PLY3gAvg?pwd=nidc', downloadCode: 'nidc',
  github: 'https://github.com/happymario9/Mario-Forever-Happy-Mario-World-Reforged/releases/latest',
}

export const worlds: World[] = [
  { number: 1, name: 'WORLD 1', theme: '草原绿地', color: 'green', levels: 4, note: '第一世界 · 草原绿地', preview: assets.preview('1-1.png'), gallery: ['1-1.png', '1-2.png', '1-3.png', '1-4.png'].map(assets.preview) },
  { number: 2, name: 'WORLD 2', theme: '白天水上世界', color: 'blue', levels: 4, note: '第二世界 · 白天水上世界', preview: assets.preview('2-1.png'), gallery: ['2-1.png', '2-2.png', '2-3.png', '2-4.png'].map(assets.preview) },
  { number: 3, name: 'WORLD 3', theme: '夜晚世界', color: 'purple', levels: 4, note: '第三世界 · 夜晚世界', preview: assets.preview('3-1.png'), gallery: ['3-1.png', '3-2.png', '3-3.png', '3-4.png'].map(assets.preview) },
  { number: 4, name: 'WORLD 4', theme: '天空世界', color: 'cyan', levels: 4, note: '第四世界 · 天空世界', preview: assets.preview('4-1.png'), gallery: ['4-1.png', '4-2.png', '4-3.png', '4-4.png'].map(assets.preview) },
  { number: 5, name: 'WORLD 5', theme: '沙漠世界', color: 'orange', levels: 4, note: '第五世界 · 沙漠世界', preview: assets.preview('5-1.png'), gallery: ['5-1.png', '5-2.png', '5-3.png', '5-4.png'].map(assets.preview) },
  { number: 6, name: 'WORLD 6', theme: '冰雪世界', color: 'cyan', levels: 4, note: '第六世界 · 冰雪世界', preview: assets.preview('6-1.png'), gallery: ['6-1.png', '6-2.png', '6-3.png', '6-4.png'].map(assets.preview) },
  { number: 7, name: 'WORLD 7', theme: '雨夜世界', color: 'navy', levels: 4, note: '第七世界 · 雨夜世界', preview: assets.preview('7-1.png'), gallery: ['7-1.png', '7-2.png', '7-3.png', '7-4.png'].map(assets.preview) },
  { number: 8, name: 'WORLD 8', theme: '城堡最终挑战', color: 'red', levels: 4, note: '第八世界 · 城堡最终挑战', preview: assets.preview('8-1.png'), gallery: ['8-1.png', '8-2.png', '8-3.png', '8-4.png'].map(assets.preview) },
]

export const releases: Release[] = [
  { version: 'V0.8.0', date: '2026.07.22', period: '2026/7/14 ~ 2026/7/22', current: true, additions: ['剧情过场：1-1 开始，8-4 结束', '第八世界', '额外关卡：synthetic roto wave（PKMF8 第一轮关卡）', 'Credits 界面'], fixes: ['关卡选择界面世界上下现可自由选择', '修复 4-4 Boss 子弹能被打死的问题', '修复第六世界马里奥能拿脚下冰块摔死的问题'], adjustments: ['默认禁用鼠标点击菜单，可在 Tweaks 设置开启', '5-4 开头、7-2 结尾添加望远镜', '7-1 结尾添加提示', '7-2、7-3 补给调整', '7-4 关卡削弱、Boss 流程和特效调整，并引入音效提示'], href: game.download, code: 'nidc' },
  { version: 'V0.7.0', date: '2026.07.13', period: '2026/7/5 ~ 2026/7/13', additions: ['第七世界'], fixes: [], adjustments: ['根据反馈，7-3、7-4 难度将在后续版本小幅削弱'], href: 'https://pan.baidu.com/s/1iZ0hp8lgCRCLIHfFn3AL7Q?pwd=jpt4', code: 'jpt4' },
  { version: 'V0.6.0', date: '2026.07.04', period: '2026/6/25 ~ 2026/7/4', additions: ['第六世界'], fixes: [], adjustments: ['第五世界完成动画'], href: 'https://wwanm.lanzouq.com/i7ym33uedz1c', code: 'h590' },
  { version: 'V0.5.0', date: '2026.06.24', period: '2026/6/15 ~ 2026/6/24', additions: ['第五世界'], fixes: [], adjustments: ['W1-W4 第三关进入城堡优化', '制作人员相关修改'], href: 'https://wwanm.lanzouq.com/iWf3L3ssgrcf', code: 'hmsy' },
  { version: 'V0.4.0', date: '2026.06.14', period: '2026/6/7 ~ 2026/6/14', additions: ['第四世界', '附加关卡（By 绿色的糖果）', 'W1-W4 世界完成过场场景'], fixes: ['3-3 和 3-4 一些细节问题'], adjustments: ['默认命数 10 → 9', '3-3 部分关卡内容调整'], href: 'https://wwanm.lanzouq.com/ifwxa3rv9jrc', code: '2yz7' },
  { version: 'V0.3.0', date: '2026.06.06', period: '2026/5/29 ~ 2026/6/6', additions: ['第三世界', '通关存档，选关画面显示星星标识', '前三世界城堡毁灭动画'], fixes: ['1-4 和 2-4 库巴战触发问题'], adjustments: ['标题画面与游戏图标重置'], href: 'https://wwanm.lanzouq.com/iQzH93r9rn3i', code: '8tvb' },
  { version: 'V0.2.0', date: '2026.05.28', period: '2026/5/24 ~ 2026/5/28', additions: ['第二世界', '简单的选关界面'], fixes: ['修复 1-2 出水管无标题的问题'], adjustments: ['1-2 现在可以通过子弹探路'], href: 'https://wwanm.lanzouq.com/i16lw3qjf4ve' },
  { version: 'V0.1.0', date: '2026.05.23', period: '2026/5/20 ~ 2026/5/23', additions: ['第一世界'], fixes: [], adjustments: ['暂不支持关卡选择', '暂不要使用保存房间功能，暂无存档'], href: 'https://wwanm.lanzouq.com/ivCaT3q62aoh' },
]

export const resources: ResourceLink[] = [
  { label: '下载最新版', href: game.download, detail: '百度网盘 · V0.8.0', kind: 'download', code: game.downloadCode },
  { label: '收听 BGM 歌单', href: game.music, detail: '网易云音乐 · 仅含可查曲目', kind: 'music' },
  { label: '访问原帖', href: game.forum, detail: 'Mario Forever 中文社区 · 作品讨论', kind: 'forum' },
]
