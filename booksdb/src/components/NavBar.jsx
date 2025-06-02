import Logo from './Logo'
import Search from './Search'
import NumResults from './NumResults'

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      {children}
    </nav>
  )
}
