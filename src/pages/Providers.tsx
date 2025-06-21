import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import { Megaphone, Camera, Gavel, GraduationCap, Search, MapPin, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface User {
  id: string;
  name: string;
  subCategory?: string;
  location?: string;
  profilepicture?: string;
}

const providerGroupsConfig = [
  {
    title: 'Promotion et marketing',
    icon: Megaphone,
    color: 'blue',
    sections: [
      { title: 'Programmateurs de radio/playlist', subCategories: ['radio_curator'] },
      { title: 'Community manager', subCategories: ['community_manager'] },
    ],
  },
  {
    title: 'Visuel',
    icon: Camera,
    color: 'purple',
    sections: [
      { title: 'CLIPMAKERS', subCategories: ['clipmaker'] },
      { title: 'Monteurs', subCategories: ['video_editor'] },
      { title: 'Photographes', subCategories: ['photographer'] },
      { title: 'Graphistes', subCategories: ['graphic_designer'] },
    ],
  },
  {
    title: 'Droits et distribution',
    icon: Gavel,
    color: 'green',
    sections: [
      { title: 'Distributeurs de musique', subCategories: ['distributor'] },
      { title: 'Avocats spécialisés', subCategories: ['music_lawyer'] },
    ],
  },
  {
    title: 'Formation',
    icon: GraduationCap,
    color: 'yellow',
    sections: [
      { title: 'Coach vocal', subCategories: ['vocal_coach'] },
      { title: 'Ateliers et cours de musique', subCategories: ['music_workshop'] },
    ],
  },
  ];

const colorMap: { [key: string]: { text: string; bg: string; border: string } } = {
  blue: { text: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500' },
  purple: { text: 'text-purple-500', bg: 'bg-purple-500', border: 'border-purple-500' },
  green: { text: 'text-green-500', bg: 'bg-green-500', border: 'border-green-500' },
  yellow: { text: 'text-yellow-500', bg: 'bg-yellow-500', border: 'border-yellow-500' },
};

const FilterBar = ({ locations, onFilterChange, onReset, filters }: any) => {
  const isFilterActive = filters.searchTerm !== '' || filters.selectedLocation !== 'all' || filters.selectedDomain !== 'all';

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="group p-6 bg-white/30 backdrop-blur-sm rounded-3xl shadow-md border border-neutral-200/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/20">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500 pointer-events-none" />
            <Input
              type="text"
              placeholder="Rechercher un prestataire..."
              className="w-full h-12 pl-11 text-sm bg-white/50 border border-neutral-200/60 rounded-xl text-neutral-800 placeholder:text-neutral-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={filters.searchTerm}
              onChange={(e) => onFilterChange({ ...filters, searchTerm: e.target.value })}
            />
          </div>
          
          {/* Select Location */}
          <div className="relative w-full">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500 pointer-events-none" />
            <Select 
              value={filters.selectedLocation} 
              onValueChange={(value) => onFilterChange({ ...filters, selectedLocation: value })}
            >
              <SelectTrigger className="w-full h-12 pl-11 text-sm bg-white/50 border border-neutral-200/60 rounded-xl text-neutral-800 data-[placeholder]:text-neutral-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Toutes les villes" />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-white/80 backdrop-blur-md border-neutral-200 shadow-lg">
                <SelectItem value="all">Toutes les villes</SelectItem>
                {locations.map((loc: string) => <SelectItem key={loc} value={loc} className="text-sm">{loc}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          {/* Select Domain */}
          <div className="relative w-full">
            <ChevronDown className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500 pointer-events-none" />
             <Select 
              value={filters.selectedDomain} 
              onValueChange={(value) => onFilterChange({ ...filters, selectedDomain: value })}
            >
              <SelectTrigger className="w-full h-12 pl-11 text-sm bg-white/50 border border-neutral-200/60 rounded-xl text-neutral-800 data-[placeholder]:text-neutral-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Tous les domaines" />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-white/80 backdrop-blur-md border-neutral-200 shadow-lg">
                <SelectItem value="all">Tous les domaines</SelectItem>
                {providerGroupsConfig.map(group => <SelectItem key={group.title} value={group.title} className="text-sm">{group.title}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {isFilterActive && (
          <div className="mt-4 flex justify-end">
             <Button
              variant="ghost"
              className="h-auto px-3 py-1 text-xs text-neutral-500 hover:text-neutral-800 hover:bg-white/30"
              onClick={onReset}
            >
              Réinitialiser
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProvidersPage = () => {
  const [allProviders, setAllProviders] = useState<User[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    searchTerm: '',
    selectedLocation: 'all',
    selectedDomain: 'all',
  });

  const handleResetFilters = () => {
    setFilters({ searchTerm: '', selectedLocation: 'all', selectedDomain: 'all' });
  };
  
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      const { data: users, error } = await supabase
        .from('User')
        .select('*')
        .eq('role', 'provider')
        .eq('verified', 1)
        .eq('disabled', 0);

      if (error) {
        console.error('Error fetching providers:', error);
      } else if (users) {
        setAllProviders(users);
        const distinctLocations = [...new Set(users.map(u => u.location).filter(Boolean) as string[])];
        setLocations(distinctLocations.sort());
      }
      setLoading(false);
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    let filteredProviders = [...allProviders];
    const { searchTerm, selectedLocation, selectedDomain } = filters;

    if (searchTerm) {
      filteredProviders = filteredProviders.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== 'all') {
      filteredProviders = filteredProviders.filter(user => user.location === selectedLocation);
    }

    const groupsWithUsers = providerGroupsConfig
      .map(groupConfig => {
        if (selectedDomain !== 'all' && groupConfig.title !== selectedDomain) {
          return { ...groupConfig, sections: [] };
        }

        const sectionsWithUsers = groupConfig.sections
          .map(sectionConfig => {
            const usersInSection = filteredProviders.filter(user =>
              sectionConfig.subCategories.includes(user.subCategory || '')
            );
            return { ...sectionConfig, users: usersInSection };
          })
          .filter(section => section.users.length > 0);

        return { ...groupConfig, sections: sectionsWithUsers };
      })
      .filter(group => group.sections.length > 0);
    
    setFilteredGroups(groupsWithUsers);

  }, [filters, allProviders]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full py-12 md:py-16">
            <div className="text-center mb-12 px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Trouvez les meilleurs <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Prestataires</span>
              </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
              Des professionnels qualifiés pour donner vie à vos projets musicaux.
              </p>
            </div>

          <div className="mb-12 px-4">
            <FilterBar 
              locations={locations} 
              onFilterChange={setFilters} 
              onReset={handleResetFilters}
              filters={filters} 
            />
          </div>

          {loading ? (
            <div className="text-center text-gray-500 text-lg">Chargement des prestataires...</div>
          ) : (
            <div className="space-y-16">
              {filteredGroups.length > 0 ? (
                filteredGroups.map(group => (
                  <div key={group.title}>
                    <div className="flex items-center gap-x-3 mb-6 border-b border-neutral-200 pb-4 px-4">
                      <div className={`w-2.5 h-2.5 rounded-full ${colorMap[group.color].bg}`}></div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
                        {group.title}
                      </h2>
                    </div>
                    <div className="space-y-12">
                      {group.sections.map((section: any) => (
                         <HorizontalCarousel 
                            key={section.title} 
                            title={section.title} 
                            users={section.users}
                            cardClassName={colorMap[group.color].border}
                         />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 px-4">
                  <p className="text-lg text-gray-500">Aucun prestataire ne correspond à votre recherche.</p>
                </div>
              )}
            </div>
          )}
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProvidersPage;
