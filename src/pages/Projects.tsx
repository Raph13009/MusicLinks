
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, MapPin, Calendar, User } from 'lucide-react';

const Projects = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    budget: ''
  });

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Création de projet:', projectData);
    alert('Projet créé avec succès !');
    setIsCreateDialogOpen(false);
    setProjectData({ title: '', description: '', category: '', location: '', budget: '' });
  };

  const mockProjects = [
    {
      id: 1,
      title: "Recherche beatmaker pour EP",
      description: "Je cherche un beatmaker pour produire 5 instrumentales dans le style trap/hip-hop. Projet prévu pour mars 2025.",
      author: "MC Flow",
      category: "Production",
      location: "Paris, France",
      budget: "Non spécifié",
      status: "Ouvert",
      postedAt: "Il y a 2 jours",
      applicants: 12
    },
    {
      id: 2,
      title: "Clip vidéo pour single",
      description: "Artiste pop recherche réalisateur créatif pour clip vidéo. Concept artistique déjà défini, besoin d'une équipe pro.",
      author: "Luna Music",
      category: "Vidéo",
      location: "Lyon, France",
      budget: "Non spécifié",
      status: "Ouvert",
      postedAt: "Il y a 1 semaine",
      applicants: 8
    },
    {
      id: 3,
      title: "Mixage album complet",
      description: "Groupe rock indé cherche ingénieur son pour mixer 10 titres. Enregistrement déjà terminé, besoin expertise technique.",
      author: "The Rebels",
      category: "Audio",
      location: "Marseille, France",
      budget: "Non spécifié",
      status: "En cours",
      postedAt: "Il y a 3 jours",
      applicants: 15
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
                Projets musicaux
              </h1>
              <p className="text-xl text-ml-charcoal/70 max-w-2xl mx-auto">
                Découvrez des projets passionnants ou publiez le vôtre pour trouver les collaborateurs parfaits
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-ml-teal hover:bg-ml-navy text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="mr-2 h-5 w-5" />
                    Publier un projet
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Créer un nouveau projet</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreateProject} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Titre du projet</Label>
                      <Input
                        id="title"
                        value={projectData.title}
                        onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                        placeholder="Ex: Recherche beatmaker pour EP"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Catégorie</Label>
                      <Select value={projectData.category} onValueChange={(value) => setProjectData({...projectData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="audio">Audio & Son</SelectItem>
                          <SelectItem value="video">Vidéo & Clips</SelectItem>
                          <SelectItem value="marketing">Marketing Musical</SelectItem>
                          <SelectItem value="training">Formation & Coaching</SelectItem>
                          <SelectItem value="legal">Juridique & Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={projectData.description}
                        onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                        placeholder="Décrivez votre projet en détail..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Localisation (optionnel)</Label>
                      <Input
                        id="location"
                        value={projectData.location}
                        onChange={(e) => setProjectData({...projectData, location: e.target.value})}
                        placeholder="Ex: Paris, France"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-ml-teal hover:bg-ml-navy">
                      Publier le projet
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-ml-charcoal">
                {mockProjects.length} projets disponibles
              </h2>
            </div>

            <div className="space-y-6">
              {mockProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-ml-light-gray/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-ml-charcoal">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Ouvert' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-ml-charcoal/60 mb-3">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {project.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.postedAt}
                        </div>
                        {project.location && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <span className="bg-ml-teal/10 text-ml-teal px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-ml-charcoal/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ml-charcoal/60">
                      {project.applicants} candidatures reçues
                    </span>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="rounded-full">
                        Voir détails
                      </Button>
                      <Button size="sm" className="bg-ml-teal hover:bg-ml-navy rounded-full">
                        Postuler
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
