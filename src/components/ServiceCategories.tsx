import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { Skeleton } from '@/components/ui/skeleton';

const roles = [
  {
    id: 'artists',
    title: 'Artistes & Créateurs',
    description: 'Trouvez des musiciens, chanteurs, compositeurs et plus encore pour donner vie à vos projets musicaux.',
    slogan: 'Collaborez avec des talents',
    icon: User,
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
    link: '/artists',
  },
  {
    id: 'providers',
    title: 'Prestataires de services',
    description: 'Engagez des ingénieurs du son, des réalisateurs de clips, des graphistes et autres experts du secteur.',
    slogan: 'Professionnalisez votre son',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    link: '/providers',
  },
  {
    id: 'partners',
    title: 'Partenaires stratégiques',
    description: 'Connectez-vous avec des labels, managers, et directeurs artistiques pour faire décoller votre carrière.',
    slogan: 'Développez votre réseau',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    link: '/partners',
  }
];

const ServiceCategories = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      setLoading(true);
      try {
        const { count: artistsCount, error: artistsError } = await supabase
          .from('User')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'artist');
        if (artistsError) throw artistsError;
        
        const { count: providersCount, error: providersError } = await supabase
          .from('User')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'provider');
        if (providersError) throw providersError;

        const { count: partnersCount, error: partnersError } = await supabase
          .from('User')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'partner');
        if (partnersError) throw partnersError;

        setCounts({
          artists: artistsCount || 0,
          providers: providersCount || 0,
          partners: partnersCount || 0,
        });

      } catch (error) {
        console.error("Error fetching role counts:", error);
        setCounts({ artists: 0, providers: 0, partners: 0 }); // Set default on error
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explorez notre communauté
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Que vous soyez un artiste en quête de collaborateurs, un prestataire offrant vos services, ou un partenaire en recherche de talents, MusicLinks est votre point de ralliement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const count = counts[role.id];
            const countText = {
              artists: "Talents",
              providers: "Experts",
              partners: "Partenaires"
            }[role.id];

            return (
              <Link
                key={role.id}
                to={role.link}
                className="group relative overflow-hidden rounded-3xl bg-white backdrop-blur border border-gray-200/80 shadow-lg hover:shadow-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              >
                <div className={`absolute inset-0 ${role.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {role.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                    {role.slogan}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                      {loading ? (
                        <Skeleton className="h-4 w-16" />
                      ) : (
                        <span>{count} {countText}</span>
                      )}
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium mr-2">Voir le catalogue</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
