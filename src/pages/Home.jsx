import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">🎮 Game Hub</h1>
      <p className="home-sub">Tools &amp; Calculators สำหรับเกมที่คุณเล่น</p>
      <div className="game-cards">
        <Link to="/enj" className="game-card">
          <div className="game-card-icon">💎</div>
          <div className="game-card-name">ENJ Excavators</div>
          <div className="game-card-desc">
            คำนวณความคุ้มค่าของการ +ตัว vs +% สำหรับทุก Goblin
            พร้อม Countdown Season และ Quick Actions
          </div>
          <span className="game-card-tag">💰 Idle Game Calculator</span>
        </Link>
        <Link to="/p5x" className="game-card p5x">
          <div className="game-card-icon">🃏</div>
          <div className="game-card-name">P5X Build Optimizer</div>
          <div className="game-card-desc">
            Build Reference และ Stat Calculator สำหรับ
            Persona 5: The Phantom X (Global)
          </div>
          <span className="game-card-tag">⚔️ Build Tool</span>
        </Link>
      </div>
    </div>
  )
}
