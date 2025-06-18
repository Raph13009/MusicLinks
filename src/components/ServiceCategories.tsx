
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Users, Search, Book, Youtube } from 'lucide-react';

const categories = [
  {
    id: 'audio',
    title: 'Audio & Son',
    description: 'Ingénieurs son, mixage, mastering, beatmakers',
    icon: Music,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    count: '120+ pros'
  },
  {
    id: 'video',
    title: 'Vidéo & Clips',
    description: 'Réalisateurs, monteurs, motion designers',
    icon: Youtube,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    count: '85+ pros'
  },
  {
    id: 'marketing',
    title: 'Marketing Musical',
    description: 'Social media, promotion, stratégie digitale',
    icon: Search,
    color: 'bg-gradient-to-br from-green-500 to-emerald-500',
    count: '95+ pros'
  },
  {
    id: 'training',
    title: 'Formation & Coaching',
    description: 'Coachs vocaux, professeurs, mentorat artistique',
    icon: Users,
    color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
    count: '70+ pros'
  },
  {
    id: 'legal',
    title: 'Juridique & Business',
    description: 'Avocats spécialisés, managers, consultants',
    icon: Book,
    color: 'bg-gradient-to-br from-red-500 to-pink-500',
    count: '40+ pros'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-ml-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ml-charcoal mb-4">
            Tous les talents dont vous avez besoin
          </h2>
          <p className="text-xl text-ml-charcoal/70 max-w-3xl mx-auto">
            Découvrez notre sélection de prestataires experts dans leur domaine, 
            tous vérifiés et recommandés par la communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/providers?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-ml-light-gray/30 hover:border-ml-teal/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ml-charcoal mb-2 group-hover:text-ml-teal transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-ml-charcoal/70 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ml-teal">
                      {category.count}
                    </span>
                    <span className="text-sm text-ml-charcoal/50 group-hover:text-ml-teal transition-colors">
                      Voir tous →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/providers">
            <button className="bg-ml-teal hover:bg-ml-navy text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Voir tous les prestataires
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
