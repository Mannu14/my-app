// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Manishji</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#about">About</Link></li>
      </ul>
    </nav>
  );
}
