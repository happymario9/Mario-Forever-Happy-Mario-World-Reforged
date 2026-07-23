import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowRight, BookOpen, Box, Check, ChevronDown, ChevronUp, Clipboard, Download, ExternalLink, Gamepad2, History, Menu, Music2, Sparkles, Trophy, X } from 'lucide-react'
import { game, releases, resources, worlds, type Release } from './data'
import { useI18n, type Catalog } from './i18n'

const linkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? 'active' : ''}`

function App() {
  const location = useLocation()
  const { catalog } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = `${location.pathname === '/' ? game.title : pageTitle(location.pathname, catalog)} · HMWR`
  }, [catalog, location.pathname])
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

function pageTitle(path: string, catalog: Catalog) { return path.includes('worlds') ? catalog.pageTitles.worlds : path.includes('releases') ? catalog.pageTitles.releases : catalog.pageTitles.downloads }

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  const { catalog, locale, setLocale } = useI18n()
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label={catalog.nav.backHome}><span className="brand-mark">H</span><span><b>HMWR</b><small>HAPPY MARIO WORLD REFORGED</small></span></Link>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? catalog.nav.closeMenu : catalog.nav.openMenu}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label={catalog.nav.main}>
      <NavLink to="/" className={linkClass} end><Gamepad2 size={16} /> {catalog.nav.home}</NavLink>
      <NavLink to="/worlds" className={linkClass}><Box size={16} /> {catalog.nav.worlds}</NavLink>
      <NavLink to="/releases" className={linkClass}><History size={16} /> {catalog.nav.releases}</NavLink>
      <NavLink to="/downloads" className={linkClass}><Download size={16} /> {catalog.nav.downloads}</NavLink>
    </nav>
    <div className="header-tools">
      <div className="language-switch" role="group" aria-label={catalog.nav.language}>
        <button type="button" className={locale === 'en' ? 'active' : ''} aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>EN</button>
        <button type="button" className={locale === 'zh-CN' ? 'active' : ''} aria-pressed={locale === 'zh-CN'} onClick={() => setLocale('zh-CN')}>中文</button>
      </div>
      <Link to="/downloads" className="header-download"><Download size={16} /> <span>{catalog.nav.latestDownload}</span></Link>
    </div>
  </div></header>
}

function PageIntro({ eyebrow, title, description, icon }: { eyebrow: string; title: string; description: string; icon: ReactNode }) {
  return <section className="page-intro"><div className="container intro-content"><div className="eyebrow"><span className="eyebrow-icon">{icon}</span>{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>
}

function PixelScene() {
  return <div className="pixel-scene" aria-label="Pixel grassland level scene"><div className="scene-sun" /><div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="scene-bush bush-a" /><div className="scene-bush bush-b" /><div className="pipe"><span /></div><div className="question-block">?</div><div className="brick brick-one" /><div className="brick brick-two" /><div className="scene-ground" /><div className="scene-grid" /></div>
}

function Home() {
  const { catalog } = useI18n()
  const t = catalog.home
  return <>
    <section className="hero"><PixelScene /><div className="hero-overlay"><div className="container hero-content"><div className="hero-copy"><div className="status-line"><span className="live-dot" /> {t.status}</div><h1>Happy Mario<br /><em>World Reforged</em></h1><p>{t.description}</p><div className="hero-actions"><a className="pixel-button primary" href={game.download} target="_blank" rel="noreferrer"><Download size={18} /> {t.download} <ExternalLink size={14} /></a><Link className="pixel-button ghost" to="/worlds"><span className="map-icon">▦</span> {t.viewWorlds} <ArrowRight size={15} /></Link></div></div><div className="hero-hud"><span className="hud-label">WORLD</span><strong>01 — 08</strong><div className="hud-divider" /><span className="hud-label">LEVELS</span><strong>32 / 32 <small>READY</small></strong></div></div></div></section>
    <section className="ticker"><div className="ticker-inner"><span className="ticker-label"><Sparkles size={14} /> {t.latestUpdate}</span><span>{t.update}</span><Link to="/releases">{t.viewChangelog} <ArrowRight size={14} /></Link></div></section>
    <section className="section overview-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">{t.project}</span><h2>{t.overviewTitle}</h2></div><p>{t.overviewDescription}</p></div><div className="overview-grid"><StatBlock icon={<Trophy />} value="32" label={t.statLevels} note={t.statComplete} accent="yellow" /><StatBlock icon={<Box />} value="08" label={t.statWorlds} note={game.version} accent="blue" /><StatBlock icon={<History />} value="08" label={t.statVersions} note="2026.05 — 2026.07" accent="red" /><StatBlock icon={<Gamepad2 />} value="∞" label={t.statUpdates} note={t.statFeedback} accent="green" /></div></div></section>
    <section className="section feature-section"><div className="container feature-layout"><div className="feature-art"><div className="mini-map"><span className="map-cloud" /><span className="map-mountain" /><div className="map-path"><i /><i /><i /><i /><i /><i /></div><div className="map-castle">◆</div><div className="map-mario">M</div></div><div className="art-caption">WORLD SELECT / 08 WORLDS</div></div><div className="feature-copy"><span className="section-kicker">{t.inside}</span><h2>{t.featureTitle.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{index === 1 ? <span>{line}</span> : line}</span>)}</h2><p>{t.featureDescription}</p><ul className="feature-list">{t.featureItems.map(item => <li key={item.title}><Check size={17} /><span><b>{item.title}</b><small>{item.detail}</small></span></li>)}</ul><Link to="/worlds" className="text-link">{t.exploreWorlds} <ArrowRight size={16} /></Link></div></div></section>
    <section className="section makers-section"><div className="container makers-grid"><div><span className="section-kicker">{t.madeBy}</span><h2>{t.makersTitle}</h2><p>{t.makersDescription}</p></div><div className="maker-sign"><div className="avatar avatar-red">M9</div><div><strong>快乐mario9</strong><span>{t.creatorRole}</span></div><div className="avatar avatar-green">GC</div><div><strong>绿色的糖果</strong><span>{t.testerRole}</span></div></div></div></section>
    <section className="cta-section"><div className="container cta-content"><div><span className="section-kicker">{t.ready}</span><h2>{t.ctaTitle}</h2><p>{t.currentVersion}</p></div><Link to="/downloads" className="pixel-button primary large"><Download size={19} /> {t.getGame} <ArrowRight size={17} /></Link></div></section>
  </>
}

function StatBlock({ icon, value, label, note, accent }: { icon: ReactNode; value: string; label: string; note: string; accent: string }) { return <div className={`stat-block ${accent}`}><div className="stat-icon">{icon}</div><div><strong>{value}</strong><b>{label}</b><small>{note}</small></div></div> }

function Worlds() {
  const { catalog } = useI18n()
  const t = catalog.worlds
  const [selected, setSelected] = useState(8)
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} description={t.description} icon={<Box size={18} />} /><section className="section worlds-section"><div className="container"><div className="worlds-toolbar"><div><span className="section-kicker">{t.select}</span><h2>{t.title.split(',')[0]}</h2></div><span className="completion-badge"><Check size={14} /> {t.completed}</span></div><div className="world-grid">{worlds.map((world, index) => <button key={world.number} className={`world-card ${world.color} ${selected === world.number ? 'selected' : ''}`} onClick={() => setSelected(world.number)}><div className="world-card-top"><span className="world-number">0{world.number}</span><span className="world-status">{selected === world.number ? t.selected : t.ready}</span></div><div className="world-thumb"><div className="thumb-sun" /><div className="thumb-hill" /><div className="thumb-ground" /><span className="thumb-pipe" /></div><div className="world-card-bottom"><div><strong>{world.name}</strong><span>{t.items[index].theme}</span></div><div className="level-count">{world.levels}<small> {t.levels}</small></div></div><p>{t.items[index].note}</p></button>)}</div><div className="selected-world"><div className="selected-marker">WORLD 0{selected}</div><div><span className="section-kicker">{t.current}</span><h3>{t.items[selected - 1].theme}</h3><p>{t.currentDescription.replace('{levels}', String(worlds[selected - 1].levels))}</p></div><span className="selected-arrow"><ArrowRight size={22} /></span></div></div></section><section className="section extra-section"><div className="container extra-layout"><div><span className="section-kicker">{t.bonus}</span><h2>{t.bonusTitle}</h2><p>{t.bonusDescription.replace('<b>', '').replace('</b>', '')}</p></div><div className="bonus-tile"><span>{t.extra}</span><strong>SYNTHETIC<br />ROTO WAVE</strong><i>{t.round}</i></div></div></section></>
}

function Releases() {
  const { catalog } = useI18n()
  const t = catalog.releases
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} description={t.description} icon={<History size={18} />} /><section className="section releases-section"><div className="container"><div className="release-summary"><div><span className="section-kicker">{t.log}</span><h2>{t.trail}</h2></div><div className="release-summary-stats"><span><b>08</b>{t.versions}</span><span><b>64</b>{t.days}</span><span><b>08</b>{t.worlds}</span></div></div><div className="timeline">{releases.map((release, index) => <ReleaseItem key={release.version} release={release} copy={t.items[index]} first={index === 0} catalog={catalog} />)}</div></div></section></>
}

function ReleaseItem({ release, copy, first, catalog }: { release: Release; copy: Catalog['releases']['items'][number]; first: boolean; catalog: Catalog }) {
  const [open, setOpen] = useState(first)
  const t = catalog.releases
  return <article className={`release-item ${release.current ? 'current' : ''}`}><div className="timeline-pin"><span>{release.version.replace('V', '')}</span></div><div className="release-content"><button className="release-header" onClick={() => setOpen(!open)} aria-expanded={open}><div><div className="release-title-row"><h3>{release.version}</h3>{release.current && <span className="current-tag">{t.current}</span>}</div><p>{release.date} <i /> {t.period}: {release.period}</p></div><span className="expand-icon">{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span></button>{open && <div className="release-details"><ReleaseColumn title={t.additions} items={copy.additions} icon={<Sparkles size={15} />} /><ReleaseColumn title={t.fixes} items={copy.fixes} icon={<Check size={15} />} /><ReleaseColumn title={t.adjustments} items={copy.adjustments} icon={<ArrowRight size={15} />} />{release.href && <a className="release-download" href={release.href} target="_blank" rel="noreferrer"><Download size={15} /> {t.download} {release.code && <span>{t.code} / {release.code}</span>} <ExternalLink size={13} /></a>}</div>}</div></article>
}

function ReleaseColumn({ title, items, icon }: { title: string; items: string[]; icon: ReactNode }) { if (!items.length) return null; return <div className="release-column"><h4>{icon} {title}</h4><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div> }

function Downloads() {
  const { catalog } = useI18n()
  const t = catalog.downloads
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} description={t.description} icon={<Download size={18} />} /><section className="section download-section"><div className="container download-layout"><div className="download-main"><div className="download-flag"><span className="live-dot" /> {t.latestBuild}</div><h2>Happy Mario<br /><em>World Reforged</em></h2><p className="download-version">V0.8.0 <span>·</span> 2026.07.22</p><p>{catalog.home.update}</p><a className="pixel-button primary large" href={game.download} target="_blank" rel="noreferrer"><Download size={19} /> {t.download} <ExternalLink size={14} /></a><div className="code-row"><span>{t.code}</span><strong>{game.downloadCode}</strong><CopyCode code={game.downloadCode} /></div></div><div className="download-poster"><div className="poster-top">HMWR <span>0.8.0</span></div><div className="poster-sky"><div className="poster-cloud" /><div className="poster-cloud second" /><div className="poster-hill" /><div className="poster-character">M</div></div><div className="poster-ground" /><div className="poster-bottom"><span>8 WORLDS</span><span>32 LEVELS</span></div></div></div></section><section className="section resources-section"><div className="container"><div className="section-heading compact"><div><span className="section-kicker">{t.resources}</span><h2>{t.resourcesTitle}</h2></div><p>{t.resourcesDescription}</p></div><div className="resource-grid">{resources.slice(1).map((resource, index) => <a className={`resource-card ${resource.kind}`} href={resource.href} target="_blank" rel="noreferrer" key={resource.label}><span className="resource-icon">{resource.kind === 'music' ? <Music2 /> : <BookOpen />}</span><span><b>{catalog.resources[index + 1].label}</b><small>{catalog.resources[index + 1].detail}</small></span><ExternalLink size={16} /></a>)}</div></div></section><section className="section history-downloads"><div className="container"><div className="section-heading compact"><div><span className="section-kicker">{t.archive}</span><h2>{t.archiveTitle}</h2></div><Link to="/releases" className="text-link">{t.viewChangelog} <ArrowRight size={16} /></Link></div><div className="archive-list">{releases.slice(1, 5).map((release, index) => <div className="archive-row" key={release.version}><span className="archive-version">{release.version}</span><span>{release.date}</span><span className="archive-add">{catalog.releases.items[index + 1].additions[0] || catalog.releases.items[index + 1].adjustments[0]}</span>{release.href && <a href={release.href} target="_blank" rel="noreferrer" aria-label={t.downloadVersion.replace('{version}', release.version)}><Download size={16} /></a>}</div>)}</div></div></section></>
}

function CopyCode({ code }: { code: string }) {
  const { catalog } = useI18n()
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1600) } catch { setCopied(false) } }
  return <button className="copy-button" onClick={copy} aria-label={`${catalog.downloads.copy} ${catalog.downloads.code}`}>{copied ? <Check size={14} /> : <Clipboard size={14} />} {copied ? catalog.downloads.copied : catalog.downloads.copy}</button>
}

function Footer() {
  const { catalog } = useI18n()
  return <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark">H</span><div><b>Happy Mario World Reforged</b><small>{catalog.footer.format}</small></div></div><div className="footer-meta"><span>ENGINE <b>THUNDER ENGINE</b></span><span>BY <b>快乐mario9 · 绿色的糖果</b></span></div><a href={game.forum} target="_blank" rel="noreferrer" className="footer-link">{catalog.footer.discussion} <ExternalLink size={14} /></a></div><div className="container footer-bottom"><span>{catalog.footer.disclaimer}</span><span>UPDATED 2026.07.22</span></div></footer>
}

export default App
