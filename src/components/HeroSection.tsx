
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-ml-white to-ml-light-gray/20 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-ml-charcoal">
          Connectez votre
          <span className="block bg-gradient-to-r from-ml-teal to-ml-navy bg-clip-text text-transparent">
            univers musical
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-ml-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          La plateforme qui réunit artistes et prestataires de confiance. 
          Trouvez votre ingénieur son, clipmaker ou coach musical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/providers">
            <Button size="lg" className="bg-ml-teal hover:bg-ml-navy text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Search className="mr-2 h-5 w-5" />
              Trouver un prestataire
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="lg" variant="outline" className="border-2 border-ml-charcoal/20 text-ml-charcoal hover:bg-ml-charcoal hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
              <Users className="mr-2 h-5 w-5" />
              Rejoindre MusicLinks
            </Button>
          </Link>
        </div>

        {/* Stats modernisées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="text-4xl font-bold mb-3 text-ml-teal group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-ml-charcoal/60 font-medium">Prestataires vérifiés</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold mb-3 text-ml-teal group-hover:scale-110 transition-transform duration-300">1200+</div>
            <div className="text-ml-charcoal/60 font-medium">Projets réalisés</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold mb-3 text-ml-teal group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-ml-charcoal/60 font-medium">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
