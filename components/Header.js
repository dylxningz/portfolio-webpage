import Link from 'next/link';

function Header() {
  return (
    <header>
      {/* Ensure there's visible content here */}
      <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <Link className="navbar-brand"href="/">Jeffrey Dylan Greene</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
  <li className="nav-item nav-item-spacing">
    <Link href="/about">About Me</Link>
  </li>
  <li className="nav-item nav-item-spacing">
    <Link href="/projects">Academic Projects</Link>
  </li>
  <li className="nav-item nav-item-spacing">
    <Link href="/personal-projects">Personal Projects</Link>
  </li>
  <li className="nav-item">
    <Link href="/contact">Contact Me</Link>
  </li>
</ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Header;