
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ml-charcoal text-ml-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/logo-on-dark.png" 
              alt="MusicLinks" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-ml-light-gray text-sm leading-relaxed mb-6">
              MusicLinks connecte les artistes avec les meilleurs prestataires musicaux. 
              Trouvez votre ingénieur son, clipmaker ou coach musical de confiance.
            </p>
            <div className="text-sm text-ml-light-gray">
              <p>Projet porté par Nicolas Bohbot</p>
              <p>Email : musiclinksplatform@gmail.com</p>
              <p>Hébergement : Vercel</p>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-semibold mb-4">Plateforme</h3>
            <div className="space-y-2">
              <Link 
                to="/providers" 
                className="block text-ml-light-gray hover:text-ml-white text-sm transition-colors"
              >
                Prestataires
              </Link>
              <Link 
                to="/projects" 
                className="block text-ml-light-gray hover:text-ml-white text-sm transition-colors"
              >
                Projets
              </Link>
              <Link 
                to="/how-it-works" 
                className="block text-ml-light-gray hover:text-ml-white text-sm transition-colors"
              >
                Comment ça marche
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link 
                to="/legal" 
                className="block text-ml-light-gray hover:text-ml-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <a 
                href="mailto:musiclinksplatform@gmail.com" 
                className="block text-ml-light-gray hover:text-ml-white text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ml-navy mt-8 pt-8 text-center">
          <p className="text-ml-light-gray text-sm">
            © 2024 MusicLinks. RGPD : les utilisateurs peuvent demander la suppression de leurs données à tout moment. 
            Les cookies sont utilisés pour le fonctionnement du site. En utilisant ce site, vous acceptez les CGU.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
