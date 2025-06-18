
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const mockProjects = [
    {
      id: 1,
      title: "Recherche ingénieur son pour album rap",
      author: "MC Flow",
      category: "Audio",
      budget: "2500€",
      location: "Paris",
      deadline: "Dans 2 semaines",
      description: "Je recherche un ingénieur son expérimenté pour le mixage et mastering de mon premier album rap (12 titres).",
      status: "open"
    },
    {
      id: 2,
      title: "Clip vidéo pour single pop",
      author: "Luna Artist",
      category: "Vidéo",
      budget: "1200€",
      location: "Lyon",
      deadline: "Dans 1 mois",
      description: "Besoin d'un clipmaker créatif pour réaliser le clip de mon nouveau single pop. Style moderne et coloré souhaité.",
      status: "open"
    },
    {
      id: 3,
      title: "Coach vocal pour préparation scène",
      author: "The Harmonics",
      category: "Formation",
      budget: "800€",
      location: "Marseille",
      deadline: "Flexible",
      description: "Groupe cherche coach vocal pour préparer une tournée. Sessions intensives souhaitées.",
      status: "open"
    }
  ];

  return (
    <div className="min-h-screen bg-ml-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ml-navy/10 to-ml-teal/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-ml-charcoal mb-4">
                Projets musicaux
              </h1>
              <p className="text-xl text-ml-charcoal/70 max-w-2xl mx-auto mb-8">
                Découvrez des opportunités de collaboration ou publiez votre projet
              </p>
              
              <Link to="/create-project">
                <Button size="lg" className="bg-ml-teal hover:bg-ml-navy rounded-full px-8 py-3 text-lg font-semibold">
                  <Plus className="mr-2 h-5 w-5" />
                  Publier un projet
                </Button>
              </Link>
            </div>

            {/* Barre de recherche */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ml-charcoal/40 h-5 w-5" />
                      <Input
                        placeholder="Rechercher un projet..."
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

        {/* Liste des projets */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-ml-charcoal mb-2">
                {mockProjects.length} projets disponibles
              </h2>
              <p className="text-ml-charcoal/60">
                Trouvez votre prochaine collaboration musicale
              </p>
            </div>

            <div className="space-y-6">
              {mockProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-ml-light-gray/20">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="bg-ml-teal/10 text-ml-teal border-ml-teal/20">
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          Ouvert
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-ml-charcoal mb-2 hover:text-ml-teal transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                      
                      <p className="text-ml-charcoal/60 mb-2">Par {project.author}</p>
                      
                      <p className="text-ml-charcoal/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-ml-charcoal/60">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-ml-teal" />
                          <span>Budget: {project.budget}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-ml-teal" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-ml-teal" />
                          <span>{project.deadline}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button className="bg-ml-teal hover:bg-ml-navy rounded-xl px-6">
                        Candidater
                      </Button>
                    </div>
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

export default Projects;
