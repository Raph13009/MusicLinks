
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscription:', formData);
    // Ici on intégrerait avec Supabase plus tard
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-ml-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-md mx-auto px-4">
          <Card className="border-ml-light-gray/30 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-ml-charcoal">
                Rejoindre MusicLinks
              </CardTitle>
              <CardDescription className="text-ml-charcoal/70">
                Créez votre compte et commencez à collaborer
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-ml-light-gray/50 focus:border-ml-teal"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border-ml-light-gray/50 focus:border-ml-teal"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet ou nom d'artiste</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-ml-light-gray/50 focus:border-ml-teal"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Type de profil</Label>
                  <div className="space-y-2">
                    {[
                      { value: 'artist', label: 'Artiste' },
                      { value: 'provider', label: 'Prestataire' },
                      { value: 'partner', label: 'Partenaire stratégique (label, manager...)' }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={option.value}
                          name="role"
                          value={option.value}
                          checked={formData.role === option.value}
                          onChange={handleChange}
                          className="text-ml-teal focus:ring-ml-teal"
                        />
                        <Label htmlFor={option.value} className="font-normal cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, acceptTerms: checked as boolean })
                    }
                  />
                  <Label htmlFor="acceptTerms" className="text-sm cursor-pointer">
                    J'accepte les CGU et la politique de confidentialité (RGPD)
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-ml-teal hover:bg-ml-navy"
                  disabled={!formData.acceptTerms}
                >
                  S'inscrire
                </Button>

                <div className="text-center">
                  <p className="text-sm text-ml-charcoal/70">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/login" className="text-ml-teal hover:underline font-medium">
                      Se connecter
                    </Link>
                  </p>
                </div>
              </form>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-ml-light-gray/30" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-ml-charcoal/70">Ou continuer avec</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full border-ml-light-gray/50">
                    Continuer avec Google
                  </Button>
                  <Button variant="outline" className="w-full border-ml-light-gray/50">
                    Continuer avec Facebook
                  </Button>
                  <Button variant="outline" className="w-full border-ml-light-gray/50">
                    Continuer avec Apple
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
