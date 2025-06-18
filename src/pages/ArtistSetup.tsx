
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, User } from 'lucide-react';

const ArtistSetup = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profileImage: '',
    bio: '',
    musicalStyle: '',
    location: '',
    portfolio: '',
    instagram: '',
    youtube: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profil artiste créé:', profileData);
    alert('Profil créé avec succès ! Vous pouvez maintenant utiliser la plateforme.');
    navigate('/providers');
  };

  const musicalStyles = [
    'Rap', 'Hip-Hop', 'Afro', 'Pop', 'R&B', 'Rock', 'Jazz', 'Électro', 'Reggae', 'Soul', 'Funk', 'Autre'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ml-charcoal via-ml-navy to-ml-charcoal flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/d0150788-e222-4864-8f33-659fe58eafee.png" 
            alt="MusicLinks" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-2">
            Créez votre profil d'artiste
          </h1>
          <p className="text-white/70">
            Quelques informations pour compléter votre profil
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-white font-medium">Photo de profil</Label>
              <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white/10 rounded-full border-2 border-dashed border-white/30 hover:border-ml-teal transition-colors cursor-pointer">
                <div className="text-center">
                  <User className="h-8 w-8 text-white/50 mx-auto mb-2" />
                  <span className="text-xs text-white/70">Ajouter une photo</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-white font-medium">Bio rapide</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                placeholder="Parlez-nous de votre univers musical..."
                rows={3}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ml-teal focus:ring-ml-teal rounded-xl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style" className="text-white font-medium">Style musical</Label>
              <Select value={profileData.musicalStyle} onValueChange={(value) => setProfileData({...profileData, musicalStyle: value})}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-ml-teal rounded-xl">
                  <SelectValue placeholder="Sélectionnez votre style principal" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-ml-light-gray/30 rounded-xl">
                  {musicalStyles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>{style}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white font-medium">Localisation</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                placeholder="Paris, France"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ml-teal focus:ring-ml-teal rounded-xl"
                required
              />
            </div>

            <div className="space-y-4">
              <Label className="text-white font-medium">Portfolio (facultatif)</Label>
              <div className="space-y-3">
                <Input
                  placeholder="Lien vers vos sons (SoundCloud, Spotify...)"
                  value={profileData.portfolio}
                  onChange={(e) => setProfileData({...profileData, portfolio: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ml-teal focus:ring-ml-teal rounded-xl"
                />
                <Input
                  placeholder="Instagram (@username)"
                  value={profileData.instagram}
                  onChange={(e) => setProfileData({...profileData, instagram: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ml-teal focus:ring-ml-teal rounded-xl"
                />
                <Input
                  placeholder="YouTube (lien de votre chaîne)"
                  value={profileData.youtube}
                  onChange={(e) => setProfileData({...profileData, youtube: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ml-teal focus:ring-ml-teal rounded-xl"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-ml-teal hover:bg-ml-teal/90 text-white font-semibold py-3 rounded-xl text-lg transition-all duration-300"
            >
              Terminer mon profil
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistSetup;
