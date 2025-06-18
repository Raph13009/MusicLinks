
import React from 'react';
import { Search, Users, Music } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Trouvez votre prestataire',
    description: 'Parcourez nos profils vérifiés et trouvez le prestataire qui correspond à votre projet et votre budget.',
    icon: Search,
    color: 'text-ml-teal'
  },
  {
    step: '02',
    title: 'Échangez et collaborez',
    description: 'Contactez directement votre prestataire, discutez de votre projet et définissez ensemble les modalités.',
    icon: Users,
    color: 'text-ml-navy'
  },
  {
    step: '03',
    title: 'Créez ensemble',
    description: 'Donnez vie à votre projet musical avec l\'expertise de professionnels passionnés et talentueux.',
    icon: Music,
    color: 'text-ml-teal'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-ml-light-gray/20 to-ml-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ml-charcoal mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-ml-charcoal/70 max-w-2xl mx-auto">
            Trois étapes simples pour concrétiser vos projets musicaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-ml-light-gray z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-ml-teal"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Step number */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-white border-4 border-ml-teal rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-ml-teal">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 mx-auto mb-4 ${step.color}`}>
                    <IconComponent className="w-full h-full" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-ml-charcoal mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-ml-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
