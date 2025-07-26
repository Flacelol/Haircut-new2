import React, { useState, useRef, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Scissors, Palette, Sparkles, CheckCircle, Car, CreditCard, Baby, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../utils/mock';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Реф для меню
  const buttonRef = useRef(null); // Реф для кнопки бургера

  // Эффект для закрытия при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target))
      {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const getCurrentDay = () => {
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">Pizzolotto Orianna</h1>
                <p className="text-sm text-text-subtle">Salone di Bellezza</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servizi" className="text-text-primary hover:text-accent-primary transition-colors">
                Servizi
              </a>
              <a href="#esempi" className="text-text-primary hover:text-accent-primary transition-colors">
                Esempi
              </a>
              <a href="#chi-siamo" className="text-text-primary hover:text-accent-primary transition-colors">
                Chi Siamo
              </a>
              <a href="#recensioni" className="text-text-primary hover:text-accent-primary transition-colors">
                Recensioni
              </a>
              <a href="#contatti" className="text-text-primary hover:text-accent-primary transition-colors">
                Contatti
              </a>
              <div className="px-4">
                <a 
                  href="tel:+390495993847" 
                  className="block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-accent-primary hover:bg-accent-primary/90 text-white w-full">
                    Prenota Ora
                  </Button>
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button 
              ref={buttonRef} 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-black"></div>
                <div className="w-full h-0.5 bg-black"></div>
                <div className="w-full h-0.5 bg-black"></div>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div 
              ref={menuRef}  
              className="md:hidden bg-white border-t border-black-200 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#servizi" 
                  className="text-text-primary hover:text-accent-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servizi
                </a>
                <a 
                  href="#esempi" 
                  className="text-text-primary hover:text-accent-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Esempi
                </a>
                <a 
                  href="#chi-siamo" 
                  className="text-text-primary hover:text-accent-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chi Siamo
                </a>
                <a 
                  href="#recensioni" 
                  className="text-text-primary hover:text-accent-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recensioni
                </a>
                <a 
                  href="#contatti" 
                  className="text-text-primary hover:text-accent-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contatti
                </a>
               <div className="px-4">
                  <a 
                    href="tel:+390495993847" 
                    className="w-full block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="bg-accent-primary hover:bg-accent-primary/90 text-white w-full">
                      Prenota Ora
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-surface-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Il Tuo <span className="text-accent-primary">Stile</span>,<br />
              La Nostra <span className="text-accent-primary">Passione</span>
            </h2>
            <p className="text-xl text-text-subtle mb-8 max-w-3xl mx-auto">
              Benvenuti al Pizzolotto Orianna, il salone di bellezza nel cuore di Onara. 
              Con anni di esperienza e passione per la bellezza, offriamo servizi completi 
              per capelli in un'atmosfera accogliente e professionale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="tel:+390495993847" 
                className="bg-accent-primary hover:bg-accent-primary/90 text-white text-lg font-medium rounded-md px-8 py-2 h-11 inline-flex items-center justify-center transition-colors"
              >
                Prenota Appuntamento
              </a>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-text-subtle">4.8/5 • 60+ recensioni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              I Nostri Servizi
            </h3>
            <p className="text-xl text-text-subtle max-w-2xl mx-auto">
              Dalla consulenza personalizzata ai trattamenti più avanzati, 
              offriamo tutto ciò che serve per il tuo benessere e la tua bellezza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary">{service.name}</h4>
                  </div>
                  <p className="text-text-subtle mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent-primary">{service.price}</span>
                    <Badge variant="secondary">{service.duration}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="esempi" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Esempi del Nostro Lavoro
            </h3>
            <p className="text-xl text-text-subtle max-w-2xl mx-auto">
              Scopri alcuni dei nostri lavori più belli. Ogni taglio e colore è realizzato 
              con passione e professionalità per esaltare la bellezza unica di ogni cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/5] sm:aspect-square relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pizzolotto-hair/artifacts/vn84d31a_haircut%201.png"
                  alt="Taglio bob moderno con colpi di sole"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                  Bob Moderno con Colpi di Sole
                </h4>
                <p className="text-sm sm:text-base text-text-subtle">
                  Un elegante taglio bob con bellissimi colpi di sole che creano profondità 
                  e movimento. Perfetto per chi desidera un look sofisticato e contemporaneo.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/5] sm:aspect-square relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pizzolotto-hair/artifacts/vvhp9n9t_haircut%202.png"
                  alt="Capelli lunghi con balayage naturale"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                  Balayage Naturale su Capelli Lunghi
                </h4>
                <p className="text-sm sm:text-base text-text-subtle">
                  Splendidi capelli lunghi con tecnica balayage che dona un effetto naturale 
                  e luminoso. I riflessi miele e dorati creano un risultato armonioso e raffinato.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-text-subtle mb-6">
              Questi sono solo alcuni esempi del nostro lavoro. Ogni cliente riceve un trattamento 
              personalizzato per ottenere il look perfetto.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="chi-siamo" className="bg-surface-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Chi Siamo
              </h3>
              <p className="text-lg text-text-subtle mb-6">
                Pizzolotto Orianna è un salone di bellezza accogliente e professionale situato 
                nel cuore di Onara, Tombolo. Con anni di esperienza nel settore e una vera 
                passione per la bellezza, il nostro team offre una gamma completa di servizi 
                per capelli.
              </p>
              <p className="text-lg text-text-subtle mb-8">
                La nostra atmosfera calda e accogliente garantisce che ogni cliente si senta 
                rilassato e coccolato. Utilizziamo solo prodotti di alta qualità e tecniche 
                all'avanguardia per assicurare risultati eccellenti.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-2">60+</div>
                  <div className="text-text-subtle">Recensioni Positive</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-2">4.8</div>
                  <div className="text-text-subtle">Valutazione Media</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-text-primary mb-6">Caratteristiche del Salone</h4>
              <div className="space-y-4">
                {mockData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-light rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-text-primary">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="recensioni" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Cosa Dicono i Nostri Clienti
            </h3>
            <p className="text-xl text-text-subtle">
              La soddisfazione dei nostri clienti è la nostra priorità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-text-subtle mb-4 italic">"{review.comment}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">{review.name}</div>
                      <div className="text-sm text-text-subtle">{review.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="contatti" className="bg-surface-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Contatti e Orari
            </h3>
            <p className="text-xl text-text-subtle">
              Prenota il tuo appuntamento o vieni a trovarci
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h4 className="text-2xl font-bold text-text-primary mb-6">Informazioni di Contatto</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent-primary mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-text-primary">Indirizzo</div>
                    <div className="text-text-subtle">Via dei Carraresi 8 / 8B</div>
                    <div className="text-text-subtle mb-3">35019 Tombolo (PD), Italia</div>
                    <Button 
                      className="bg-accent-primary hover:bg-accent-primary/90 text-white text-sm px-4 py-2"
                      onClick={() => window.open('https://maps.google.com/maps?q=Via+dei+Carraresi+8,+35019+Tombolo+PD,+Italia', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Visualizza su Google Maps
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-accent-primary" />
                  <div>
                    <div className="font-semibold text-text-primary">Telefono</div>
                    <div className="text-text-subtle">+39 049 599 3847</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-text-primary mb-4">Metodi di Pagamento</h5>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Contactless (NFC)</Badge>
                  <Badge variant="secondary">Carte di Debito</Badge>
                  <Badge variant="secondary">Carte di Credito</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h4 className="text-2xl font-bold text-text-primary mb-6">Orari di Apertura</h4>
              <div className="space-y-4">
  {mockData.hours.map((day, index) => {
    const isToday = day.day === currentDay;

    return (
      <div
        key={index}
        className={`flex justify-between items-center py-2 border-b border-gray-100 rounded-md px-3 ${
          isToday ? 'bg-[#61525a] text-white font-semibold shadow-sm' : ''
        }`}
      >
        <span className="font-medium">
          {day.day}
          {isToday && (
            <span className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
              oggi
            </span>
          )}
        </span>
        <span className={`${day.hours === 'Chiuso' ? (isToday ? 'text-white/80' : 'text-red-500') : ''}`}>
          {day.hours}
        </span>
      </div>
    );
  })}
</div>


              
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent-primary hover:bg-accent-primary/90 text-white"
              onClick={() => window.open('tel:+390495993847')}
            >
              Chiamaci Per Prenotare
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent-primary rounded-full flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-xl font-bold text-gray-300">Pizzolotto Orianna</h5>
              </div>
              <p className="text-gray-300">
                Il tuo salone di bellezza di fiducia a Onara, Tombolo. 
                Professionalità, qualità e passione per la bellezza.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4 text-gray-300">Servizi</h6>
              <ul className="space-y-2 text-gray-300">
                <li>Tagli Donna e Uomo</li>
                <li>Colorazione Capelli</li>
                <li>Styling e Piega</li>
                <li>Consulenza Capelli</li>
                <li>Ceretta</li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4 text-gray-300">Contatti</h6>
              <div className="space-y-2 text-gray-300">
                <div>Via dei Carraresi 8 / 8B</div>
                <div>35019 Tombolo (PD), Italia</div>
                <div>Tel: +39 049 599 3847</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Pizzolotto Orianna. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;