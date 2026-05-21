import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">🎮 Game Hub</NavLink>
      <NavLink to="/enj" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        💎 ENJ Excavators
      </NavLink>
      <NavLink to="/p5x" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        🃏 P5X Build
      </NavLink>
    </nav>
  )
}
