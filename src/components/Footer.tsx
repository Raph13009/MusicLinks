
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ml-charcoal text-ml-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/d0150788-e222-4864-8f33-659fe58eafee.png" 
              alt="MusicLinks" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-ml-light-gray/80 text-sm leading-relaxed mb-8 max-w-md">
              MusicLinks connecte les artistes avec les meilleurs prestataires musicaux. 
              Trouvez votre ingénieur son, clipmaker ou coach musical de confiance.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-semibold mb-6 text-ml-white">Plateforme</h3>
            <div className="space-y-4">
              <Link 
                to="/providers" 
                className="block text-ml-light-gray/80 hover:text-ml-white text-sm transition-colors"
              >
                Prestataires
              </Link>
              <Link 
                to="/projects" 
                className="block text-ml-light-gray/80 hover:text-ml-white text-sm transition-colors"
              >
                Projets
              </Link>
              <Link 
                to="/how-it-works" 
                className="block text-ml-light-gray/80 hover:text-ml-white text-sm transition-colors"
              >
                Comment ça marche
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-6 text-ml-white">Support</h3>
            <div className="space-y-4">
              <Link 
                to="/legal" 
                className="block text-ml-light-gray/80 hover:text-ml-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <a 
                href="mailto:musiclinksplatform@gmail.com" 
                className="block text-ml-light-gray/80 hover:text-ml-white text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ml-navy/50 mt-12 pt-8">
          <p className="text-ml-light-gray/60 text-sm text-center">
            © 2025 MusicLinks. RGPD : les utilisateurs peuvent demander la suppression de leurs données à tout moment. 
            Les cookies sont utilisés pour le fonctionnement du site. En utilisant ce site, vous acceptez les CGU.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
