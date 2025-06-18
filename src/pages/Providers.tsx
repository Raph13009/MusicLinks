
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Star, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const Providers = () => {
  const [selectedCategory, setSelectedCategory] = useState('audio');

  const categories = [
    { id: 'audio', name: 'Audio & Son', count: 120 },
    { id: 'video', name: 'Vidéo & Clips', count: 85 },
    { id: 'marketing', name: 'Marketing Musical', count: 95 },
    { id: 'training', name: 'Formation & Coaching', count: 70 },
    { id: 'legal', name: 'Juridique & Business', count: 40 }
  ];

  const mockProviders = {
    audio: [
      {
        id: 1,
        name: "Studio SoundWave",
        specialty: "Mixage & Mastering",
        location: "Paris, France",
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
      },
      {
        id: 2,
        name: "Beat Producer Max",
        specialty: "Production de beats",
        location: "Lyon, France",
        rating: 4.8,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop"
      },
      {
        id: 3,
        name: "Echo Studio",
        specialty: "Enregistrement vocal",
        location: "Marseille, France",
        rating: 5.0,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop"
      },
      {
        id: 4,
        name: "Sound Engineer Pro",
        specialty: "Post-production audio",
        location: "Toulouse, France",
        rating: 4.7,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop"
      }
    ],
    video: [
      {
        id: 5,
        name: "VideoBeats Pro",
        specialty: "Clips musicaux",
        location: "Paris, France",
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop"
      },
      {
        id: 6,
        name: "Motion Graphics Studio",
        specialty: "Animation & VFX",
        location: "Lyon, France",
        rating: 4.9,
        reviews: 73,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
      }
    ]
  };

  const scrollContainer = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

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

        {/* Categories Navigation */}
        <section className="py-8 border-b border-ml-light-gray/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-ml-teal text-white shadow-lg'
                      : 'bg-ml-light-gray/20 text-ml-charcoal hover:bg-ml-light-gray/40'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Netflix-style provider sections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Audio & Son Section */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-ml-charcoal">
                  Audio & Son ({mockProviders.audio.length} prestataires)
                </h2>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('left', 'audio-scroll')}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('right', 'audio-scroll')}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div 
                id="audio-scroll"
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mockProviders.audio.map((provider) => (
                  <div key={provider.id} className="flex-none w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-ml-charcoal">{provider.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-orange-400 fill-current" />
                          <span className="text-sm font-medium text-ml-charcoal ml-1">{provider.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-ml-teal font-medium mb-2">{provider.specialty}</p>
                      
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

            {/* Video & Clips Section */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-ml-charcoal">
                  Vidéo & Clips ({mockProviders.video.length} prestataires)
                </h2>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('left', 'video-scroll')}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('right', 'video-scroll')}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div 
                id="video-scroll"
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mockProviders.video.map((provider) => (
                  <div key={provider.id} className="flex-none w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-ml-charcoal">{provider.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-orange-400 fill-current" />
                          <span className="text-sm font-medium text-ml-charcoal ml-1">{provider.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-ml-teal font-medium mb-2">{provider.specialty}</p>
                      
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Providers;
