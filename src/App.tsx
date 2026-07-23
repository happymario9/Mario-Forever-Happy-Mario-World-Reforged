import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowRight, BookOpen, Box, Check, ChevronDown, ChevronUp, Clipboard, Download, ExternalLink, Gamepad2, History, Menu, Music2, Sparkles, Trophy, X } from 'lucide-react'
import { game, releases, resources, worlds, type Release } from './data'

const linkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? 'active' : ''}`

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); document.title = `${location.pathname === '/' ? game.title : pageTitle(location.pathname)} · HMWR` }, [location.pathname])
  return <div className="app-shell">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main><Routes>
      <Route path="/" element={<Home />} /><Route path="/worlds" element={<Worlds />} />
      <Route path="/releases" element={<Releases />} /><Route path="/downloads" element={<Downloads />} />
      <Route path="*" element={<Home />} />
    </Routes></main>
    <Footer />
  </div>
}

function pageTitle(path: string) { return path.includes('worlds') ? '关卡档案' : path.includes('releases') ? '版本日志' : '下载与资料' }

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="返回首页"><span className="brand-mark">H</span><span><b>HMWR</b><small>HAPPY MARIO WORLD REFORGED</small></span></Link>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="主导航">
      <NavLink to="/" className={linkClass} end><Gamepad2 size={16} /> 作品首页</NavLink>
      <NavLink to="/worlds" className={linkClass}><Box size={16} /> 关卡档案</NavLink>
      <NavLink to="/releases" className={linkClass}><History size={16} /> 版本日志</NavLink>
      <NavLink to="/downloads" className={linkClass}><Download size={16} /> 下载资料</NavLink>
    </nav>
    <Link to="/downloads" className="header-download"><Download size={16} /> <span>下载 V0.8.0</span></Link>
  </div></header>
}

function PageIntro({ eyebrow, title, description, icon }: { eyebrow: string; title: string; description: string; icon: ReactNode }) {
  return <section className="page-intro"><div className="container intro-content"><div className="eyebrow"><span className="eyebrow-icon">{icon}</span>{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>
}

function PixelScene() {
  return <div className="pixel-scene" aria-label="像素化草原关卡场景"><div className="scene-sun" /><div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="scene-bush bush-a" /><div className="scene-bush bush-b" /><div className="pipe"><span /></div><div className="question-block">?</div><div className="brick brick-one" /><div className="brick brick-two" /><div className="scene-ground" /><div className="scene-grid" /></div>
}

function Home() {
  return <>
    <section className="hero"><PixelScene /><div className="hero-overlay"><div className="container hero-content"><div className="hero-copy"><div className="status-line"><span className="live-dot" /> 现在可玩 · BUILD 0.8.0</div><h1>Happy Mario<br /><em>World Reforged</em></h1><p>以 Happy Mario World 为模板重新打磨的 Mario Forever 同人关卡合集。八个世界，三十二个主要关卡，持续更新中。</p><div className="hero-actions"><a className="pixel-button primary" href={game.download} target="_blank" rel="noreferrer"><Download size={18} /> 下载最新版 <ExternalLink size={14} /></a><Link className="pixel-button ghost" to="/worlds"><span className="map-icon">▦</span> 查看关卡档案 <ArrowRight size={15} /></Link></div></div><div className="hero-hud"><span className="hud-label">WORLD</span><strong>01 — 08</strong><div className="hud-divider" /><span className="hud-label">LEVELS</span><strong>32 / 32 <small>READY</small></strong></div></div></div></section>
    <section className="ticker"><div className="ticker-inner"><span className="ticker-label"><Sparkles size={14} /> LATEST UPDATE</span><span>V0.8.0 · 第八世界与剧情过场已上线</span><Link to="/releases">查看完整更新日志 <ArrowRight size={14} /></Link></div></section>
    <section className="section overview-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">THE PROJECT</span><h2>一份正在长大的关卡合集</h2></div><p>第一次使用 Thunder Engine 制作 MF 的试水之作。关卡名对应原版 HMW 模板，但难度不会循序渐进。</p></div><div className="overview-grid"><StatBlock icon={<Trophy />} value="32" label="主要关卡" note="全部完成" accent="yellow" /><StatBlock icon={<Box />} value="08" label="完整世界" note="V0.8.0" accent="blue" /><StatBlock icon={<History />} value="08" label="公开版本" note="2026.05 — 2026.07" accent="red" /><StatBlock icon={<Gamepad2 />} value="∞" label="继续更新" note="欢迎体验反馈" accent="green" /></div></div></section>
    <section className="section feature-section"><div className="container feature-layout"><div className="feature-art"><div className="mini-map"><span className="map-cloud" /><span className="map-mountain" /><div className="map-path"><i /><i /><i /><i /><i /><i /></div><div className="map-castle">◆</div><div className="map-mario">M</div></div><div className="art-caption">WORLD SELECT / 08 WORLDS</div></div><div className="feature-copy"><span className="section-kicker">WHAT'S INSIDE</span><h2>熟悉的模板，<br /><span>重新整理的旅途。</span></h2><p>每个世界都保留 Happy Mario World 的关卡对应关系，同时补进细节调整、过场动画、通关存档和更多探索提示。</p><ul className="feature-list"><li><Check size={17} /><span><b>从 1-1 到 8-4</b><small>新增剧情过场，串起完整旅程</small></span></li><li><Check size={17} /><span><b>世界选择自由切换</b><small>选关界面支持上下世界浏览</small></span></li><li><Check size={17} /><span><b>持续接受玩家反馈</b><small>难度与关卡细节会持续调整</small></span></li></ul><Link to="/worlds" className="text-link">探索八个世界 <ArrowRight size={16} /></Link></div></div></section>
    <section className="section makers-section"><div className="container makers-grid"><div><span className="section-kicker">MADE BY</span><h2>小团队，认真做关卡</h2><p>本作由快乐mario9 首次使用 Thunder Engine 制作，绿色的糖果参与关卡制作与测试。</p></div><div className="maker-sign"><div className="avatar avatar-red">M9</div><div><strong>快乐mario9</strong><span>关卡作者 · 制作人</span></div><div className="avatar avatar-green">GC</div><div><strong>绿色的糖果</strong><span>关卡作者 · 测试</span></div></div></div></section>
    <section className="cta-section"><div className="container cta-content"><div><span className="section-kicker">READY PLAYER?</span><h2>开始你的 Reforged 旅途</h2><p>当前版本 V0.8.0 · 2026.07.22 更新</p></div><Link to="/downloads" className="pixel-button primary large"><Download size={19} /> 获取游戏 <ArrowRight size={17} /></Link></div></section>
  </>
}

function StatBlock({ icon, value, label, note, accent }: { icon: ReactNode; value: string; label: string; note: string; accent: string }) { return <div className={`stat-block ${accent}`}><div className="stat-icon">{icon}</div><div><strong>{value}</strong><b>{label}</b><small>{note}</small></div></div> }

function Worlds() {
  const [selected, setSelected] = useState(8)
  return <><PageIntro eyebrow="LEVEL ARCHIVE / 01" title="八个世界，三十二个落点" description="关卡名对应原版 HMW 模板。难度并非循序渐进，请按照自己的节奏探索每个世界。" icon={<Box size={18} />} /><section className="section worlds-section"><div className="container"><div className="worlds-toolbar"><div><span className="section-kicker">WORLD SELECT</span><h2>选择一个世界</h2></div><span className="completion-badge"><Check size={14} /> 32 / 32 已完成</span></div><div className="world-grid">{worlds.map(world => <button key={world.number} className={`world-card ${world.color} ${selected === world.number ? 'selected' : ''}`} onClick={() => setSelected(world.number)}><div className="world-card-top"><span className="world-number">0{world.number}</span><span className="world-status">{selected === world.number ? 'SELECTED' : 'READY'}</span></div><div className="world-thumb"><div className="thumb-sun" /><div className="thumb-hill" /><div className="thumb-ground" /><span className="thumb-pipe" /></div><div className="world-card-bottom"><div><strong>{world.name}</strong><span>{world.theme}</span></div><div className="level-count">{world.levels}<small> LEVELS</small></div></div><p>{world.note}</p></button>)}</div><div className="selected-world"><div className="selected-marker">WORLD 0{selected}</div><div><span className="section-kicker">CURRENTLY SELECTED</span><h3>{worlds[selected - 1].theme}</h3><p>包含 {worlds[selected - 1].levels} 个主要关卡。实际关卡难度与世界编号不完全对应，准备好后即可进入挑战。</p></div><span className="selected-arrow"><ArrowRight size={22} /></span></div></div></section><section className="section extra-section"><div className="container extra-layout"><div><span className="section-kicker">BONUS STAGE</span><h2>还有一条隐藏路线</h2><p>V0.8.0 新增额外关卡 <b>synthetic roto wave</b>，即 PKMF8 第一轮关卡。它独立于八个主要世界之外。</p></div><div className="bonus-tile"><span>EXTRA</span><strong>SYNTHETIC<br />ROTO WAVE</strong><i>PKMF8 / ROUND 01</i></div></div></section></>
}

function Releases() { return <><PageIntro eyebrow="PATCH NOTES / 02" title="一路更新到 V0.8.0" description="从第一世界的试水版本，到八个世界全部完成。这里记录每一次新增、修复和调整。" icon={<History size={18} />} /><section className="section releases-section"><div className="container"><div className="release-summary"><div><span className="section-kicker">DEVELOPMENT LOG</span><h2>更新轨迹</h2></div><div className="release-summary-stats"><span><b>08</b>版本</span><span><b>64</b>天制作</span><span><b>08</b>世界</span></div></div><div className="timeline">{releases.map((release, index) => <ReleaseItem key={release.version} release={release} first={index === 0} />)}</div></div></section></> }

function ReleaseItem({ release, first }: { release: Release; first: boolean }) {
  const [open, setOpen] = useState(first)
  return <article className={`release-item ${release.current ? 'current' : ''}`}><div className="timeline-pin"><span>{release.version.replace('V', '')}</span></div><div className="release-content"><button className="release-header" onClick={() => setOpen(!open)} aria-expanded={open}><div><div className="release-title-row"><h3>{release.version}</h3>{release.current && <span className="current-tag">CURRENT</span>}</div><p>{release.date} <i /> 制作周期：{release.period}</p></div><span className="expand-icon">{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span></button>{open && <div className="release-details"><ReleaseColumn title="新增" items={release.additions} icon={<Sparkles size={15} />} /><ReleaseColumn title="修复" items={release.fixes} icon={<Check size={15} />} /><ReleaseColumn title="调整" items={release.adjustments} icon={<ArrowRight size={15} />} />{release.href && <a className="release-download" href={release.href} target="_blank" rel="noreferrer"><Download size={15} /> 下载此版本 {release.code && <span>提取码 / {release.code}</span>} <ExternalLink size={13} /></a>}</div>}</div></article>
}

function ReleaseColumn({ title, items, icon }: { title: string; items: string[]; icon: ReactNode }) { if (!items.length) return null; return <div className="release-column"><h4>{icon} {title}</h4><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div> }

function Downloads() {
  return <><PageIntro eyebrow="GET THE GAME / 03" title="下载、聆听、加入讨论" description="最新版已经公开。下载前请留意版本号与提取码，也欢迎回到原帖留下你的体验反馈。" icon={<Download size={18} />} /><section className="section download-section"><div className="container download-layout"><div className="download-main"><div className="download-flag"><span className="live-dot" /> LATEST BUILD</div><h2>Happy Mario<br /><em>World Reforged</em></h2><p className="download-version">V0.8.0 <span>·</span> 2026.07.22</p><p>第八世界、剧情过场、额外关卡和多项关卡调整已加入。</p><a className="pixel-button primary large" href={game.download} target="_blank" rel="noreferrer"><Download size={19} /> 百度网盘下载 <ExternalLink size={14} /></a><div className="code-row"><span>提取码</span><strong>{game.downloadCode}</strong><CopyCode code={game.downloadCode} /></div></div><div className="download-poster"><div className="poster-top">HMWR <span>0.8.0</span></div><div className="poster-sky"><div className="poster-cloud" /><div className="poster-cloud second" /><div className="poster-hill" /><div className="poster-character">M</div></div><div className="poster-ground" /><div className="poster-bottom"><span>8 WORLDS</span><span>32 LEVELS</span></div></div></div></section><section className="section resources-section"><div className="container"><div className="section-heading compact"><div><span className="section-kicker">MORE RESOURCES</span><h2>一起把作品玩完整</h2></div><p>下载游戏，也可以收听本作 BGM 或加入原帖讨论。</p></div><div className="resource-grid">{resources.slice(1).map(resource => <a className={`resource-card ${resource.kind}`} href={resource.href} target="_blank" rel="noreferrer" key={resource.label}><span className="resource-icon">{resource.kind === 'music' ? <Music2 /> : <BookOpen />}</span><span><b>{resource.label}</b><small>{resource.detail}</small></span><ExternalLink size={16} /></a>)}</div></div></section><section className="section history-downloads"><div className="container"><div className="section-heading compact"><div><span className="section-kicker">ARCHIVE</span><h2>历史版本</h2></div><Link to="/releases" className="text-link">查看更新日志 <ArrowRight size={16} /></Link></div><div className="archive-list">{releases.slice(1, 5).map(release => <div className="archive-row" key={release.version}><span className="archive-version">{release.version}</span><span>{release.date}</span><span className="archive-add">{release.additions[0] || release.adjustments[0]}</span>{release.href && <a href={release.href} target="_blank" rel="noreferrer" aria-label={`下载 ${release.version}`}><Download size={16} /></a>}</div>)}</div></div></section></>
}

function CopyCode({ code }: { code: string }) { const [copied, setCopied] = useState(false); const copy = async () => { try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1600) } catch { setCopied(false) } }; return <button className="copy-button" onClick={copy} aria-label="复制提取码">{copied ? <Check size={14} /> : <Clipboard size={14} />} {copied ? '已复制' : '复制'}</button> }

function Footer() { return <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark">H</span><div><b>Happy Mario World Reforged</b><small>Mario Forever 同人关卡合集 · V0.8.0</small></div></div><div className="footer-meta"><span>ENGINE <b>THUNDER ENGINE</b></span><span>BY <b>快乐mario9 · 绿色的糖果</b></span></div><a href={game.forum} target="_blank" rel="noreferrer" className="footer-link">原帖讨论 <ExternalLink size={14} /></a></div><div className="container footer-bottom"><span>本项目为非商业同人作品，与 Nintendo / Mario Forever 官方无关。</span><span>UPDATED 2026.07.22</span></div></footer> }

export default App
