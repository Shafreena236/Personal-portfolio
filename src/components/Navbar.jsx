import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = ['About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Activities', 'Contact'];

  return (
    <nav className="site-nav">
      <div className="site-nav__inner shell">
        <button type="button" className="brand" onClick={() => scrollToSection('about')}>
          <span className="brand__mark">SA</span>
          <span className="brand__text">Shafreena Ahmed</span>
        </button>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="site-nav__link"
            >
              {item}
            </button>
          ))}
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="site-nav__toggle" aria-label="Toggle navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="site-nav__mobile shell">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="site-nav__mobile-link"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
