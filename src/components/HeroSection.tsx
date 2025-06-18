
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Users, Music } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="gradient-ml-primary text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connectez votre
            <span className="block text-gradient-ml bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              univers musical
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            MusicLinks réunit artistes et prestataires de confiance. Trouvez votre ingénieur son, 
            clipmaker ou coach musical pour donner vie à vos projets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/providers">
              <Button size="lg" className="bg-white text-ml-teal hover:bg-white/90 font-semibold px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Trouver un prestataire
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ml-teal font-semibold px-8 py-3">
                <Users className="mr-2 h-5 w-5" />
                Rejoindre MusicLinks
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Prestataires vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1200+</div>
              <div className="text-white/80">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
