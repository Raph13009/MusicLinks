
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, Users, Music } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-ml-white border-b border-ml-light-gray/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/logo-on-white.png" 
              alt="MusicLinks" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/providers" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/providers') ? 'text-ml-teal' : 'text-ml-charcoal'
              }`}
            >
              Prestataires
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/projects') ? 'text-ml-teal' : 'text-ml-charcoal'
              }`}
            >
              Projets
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/how-it-works') ? 'text-ml-teal' : 'text-ml-charcoal'
              }`}
            >
              Comment ça marche
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-ml-charcoal hover:text-ml-teal">
                Connexion
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-ml-teal hover:bg-ml-navy text-white">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-ml-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-ml-charcoal" />
            )}
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/providers" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Prestataires
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Connexion
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-ml-teal hover:bg-ml-navy">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
