
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Users, MessageCircle, Star, CheckCircle, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "1. Recherchez",
      description: "Parcourez notre base de prestataires vérifiés ou publiez votre projet pour recevoir des candidatures."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "2. Échangez",
      description: "Contactez directement les prestataires via notre messagerie sécurisée pour discuter de votre projet."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "3. Collaborez",
      description: "Finalisez les détails et commencez votre collaboration musicale en toute confiance."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "4. Évaluez",
      description: "Laissez un avis pour aider la communauté et construire la réputation des prestataires."
    }
  ];

  return (
    <div className="min-h-screen bg-ml-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ml-teal/10 to-ml-navy/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Music className="h-16 w-16 text-ml-teal mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-ml-charcoal mb-6">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-ml-charcoal/70 max-w-2xl mx-auto">
              Découvrez comment MusicLinks facilite la rencontre entre artistes et prestataires musicaux
            </p>
          </div>
        </section>

        {/* Étapes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-ml-teal/10 rounded-2xl flex items-center justify-center text-ml-teal group-hover:bg-ml-teal group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ml-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ml-charcoal/70 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pour les artistes */}
        <section className="py-20 bg-gradient-to-r from-ml-light-gray/20 to-ml-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ml-charcoal mb-6">
                  Pour les artistes
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Trouvez des prestataires qualifiés près de chez vous
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Publiez vos projets et recevez des candidatures
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Consultez les avis et portfolios des prestataires
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup">
                    <Button size="lg" className="bg-ml-teal hover:bg-ml-navy rounded-full px-8">
                      Commencer maintenant
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-ml-teal/10 to-ml-navy/10 rounded-3xl p-8 text-center">
                <Users className="h-24 w-24 text-ml-teal mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-ml-charcoal mb-4">
                  Rejoignez notre communauté
                </h3>
                <p className="text-ml-charcoal/70">
                  Plus de 1200 artistes font déjà confiance à MusicLinks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pour les prestataires */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-ml-navy/10 to-ml-teal/10 rounded-3xl p-8 text-center order-2 lg:order-1">
                <Music className="h-24 w-24 text-ml-teal mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-ml-charcoal mb-4">
                  Développez votre activité
                </h3>
                <p className="text-ml-charcoal/70">
                  Plus de 500 prestataires développent leur business avec nous
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-ml-charcoal mb-6">
                  Pour les prestataires
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Créez votre profil professionnel avec portfolio
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Recevez des demandes de projet qualifiées
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-ml-teal rounded-full mt-3"></div>
                    <p className="text-ml-charcoal/80 text-lg">
                      Développez votre réseau et votre réputation
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup">
                    <Button size="lg" className="bg-ml-teal hover:bg-ml-navy rounded-full px-8">
                      Devenir prestataire
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-ml-teal to-ml-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à commencer votre aventure musicale ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez MusicLinks et connectez-vous avec les meilleurs professionnels de la musique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/providers">
                <Button size="lg" variant="secondary" className="bg-white text-ml-teal hover:bg-white/90 rounded-full px-8">
                  Explorer les prestataires
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ml-teal rounded-full px-8">
                  Créer mon profil
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
