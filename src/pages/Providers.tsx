
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Star, Filter } from 'lucide-react';

const Providers = () => {
  const mockProviders = [
    {
      id: 1,
      name: "Studio SoundWave",
      category: "Ingénieur son",
      location: "Paris, France",
      rating: 4.9,
      reviews: 127,
      price: "150€/jour",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "VideoBeats Pro",
      category: "Clipmaker",
      location: "Lyon, France",
      rating: 4.8,
      reviews: 89,
      price: "800€/clip",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Coach Melody",
      category: "Coach vocal",
      location: "Marseille, France",
      rating: 5.0,
      reviews: 45,
      price: "80€/heure",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-ml-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ml-teal/10 to-ml-navy/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-ml-charcoal mb-4">
                Trouvez votre prestataire idéal
              </h1>
              <p className="text-xl text-ml-charcoal/70 max-w-2xl mx-auto">
                Découvrez des professionnels vérifiés prêts à donner vie à vos projets musicaux
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ml-charcoal/40 h-5 w-5" />
                      <Input
                        placeholder="Rechercher un service..."
                        className="pl-10 border-ml-light-gray/30 focus:border-ml-teal rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ml-charcoal/40 h-5 w-5" />
                      <Input
                        placeholder="Localisation"
                        className="pl-10 border-ml-light-gray/30 focus:border-ml-teal rounded-xl"
                      />
                    </div>
                  </div>
                  <Button className="bg-ml-teal hover:bg-ml-navy rounded-xl">
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtres et résultats */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-ml-charcoal">
                {mockProviders.length} prestataires trouvés
              </h2>
              <Button variant="outline" className="border-ml-light-gray/50 rounded-xl">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>

            {/* Liste des prestataires */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProviders.map((provider) => (
                <div key={provider.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-ml-charcoal">{provider.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-ml-charcoal">{provider.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-ml-charcoal ml-1">{provider.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-ml-teal font-medium mb-2">{provider.category}</p>
                    
                    <div className="flex items-center text-ml-charcoal/60 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{provider.location}</span>
                    </div>
                    
                    <p className="text-sm text-ml-charcoal/60 mb-4">
                      {provider.reviews} avis clients
                    </p>
                    
                    <Button className="w-full bg-ml-teal hover:bg-ml-navy rounded-xl">
                      Voir le profil
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Providers;
