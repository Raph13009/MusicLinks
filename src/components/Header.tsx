
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-ml-white/80 backdrop-blur-md border-b border-ml-light-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/952112ae-fc5d-48cc-ade8-53267f24bc4d.png" 
              alt="MusicLinks" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/providers" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/providers') ? 'text-ml-teal' : 'text-ml-charcoal/70'
              }`}
            >
              Prestataires
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/projects') ? 'text-ml-teal' : 'text-ml-charcoal/70'
              }`}
            >
              Projets
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium transition-colors hover:text-ml-teal ${
                isActive('/how-it-works') ? 'text-ml-teal' : 'text-ml-charcoal/70'
              }`}
            >
              Comment ça marche
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-ml-charcoal/70 hover:text-ml-teal font-medium">
                Connexion
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-ml-teal hover:bg-ml-navy text-white font-medium rounded-full px-6">
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
          <div className="md:hidden py-4 space-y-4 bg-ml-white/95 backdrop-blur-md">
            <Link 
              to="/providers" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Prestataires
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-ml-charcoal hover:text-ml-teal transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <div className="pt-4 space-y-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-full border-ml-light-gray/50">
                  Connexion
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-ml-teal hover:bg-ml-navy rounded-full">
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
