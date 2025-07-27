import { Scissors, Palette, Sparkles, User, CheckCircle, Car, CreditCard, Baby, Users, Accessibility } from 'lucide-react';

export const mockData = {
  services: [
    {
      name: "Taglio Donna",
      description: "Tagli moderni e classici personalizzati per ogni tipo di capello e forma del viso.",
      price: "€50",
      duration: "45 min",
      icon: <Scissors className="w-6 h-6 text-accent-primary" />
    },
    {
      name: "Taglio Uomo",
      description: "Tagli maschili professionali, dal classico al moderno, con attenzione ai dettagli.",
      price: "€25",
      duration: "30 min",
      icon: <Scissors className="w-6 h-6 text-accent-primary" />
    },
    {
      name: "Colorazione",
      description: "Tecniche di colorazione avanzate, dalle meches ai colori fantasy, con prodotti di qualità.",
      price: "€60-120",
      duration: "2-3 ore",
      icon: <Palette className="w-6 h-6 text-accent-primary" />
    },
    {
      name: "Styling e Piega",
      description: "Acconciature per ogni occasione, dalle pieghe quotidiane agli styling per eventi speciali.",
      price: "€25-45",
      duration: "45 min",
      icon: <Sparkles className="w-6 h-6 text-accent-primary" />
    },
    {
      name: "Consulenza Capelli",
      description: "Analisi personalizzata del capello e consigli per la cura e il mantenimento.",
      price: "€20",
      duration: "30 min",
      icon: <User className="w-6 h-6 text-accent-primary" />
    },
    {
      name: "Ceretta",
      description: "Servizi di ceretta professionale per una pelle liscia e curata.",
      price: "€15-40",
      duration: "20-45 min",
      icon: <Sparkles className="w-6 h-6 text-accent-primary" />
    }
  ],

  features: [
    {
      name: "Ingresso accessibile in sedia a rotelle",
      icon: <Accessibility className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Parcheggio accessibile",
      icon: <Car className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Bagno accessibile",
      icon: <CheckCircle className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Bagno pubblico disponibile",
      icon: <CheckCircle className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Prenotazione anticipata consigliata",
      icon: <CheckCircle className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Pagamenti contactless (NFC)",
      icon: <CreditCard className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Carte di debito e credito",
      icon: <CreditCard className="w-4 h-4 text-accent-primary" />
    },
    {
      name: "Adatto ai bambini",
      icon: <Baby className="w-4 h-4 text-accent-primary" />
    }
  ],

  reviews: [
    {
      name: "Maria Rossi",
      comment: "Professionalità e gentilezza eccezionali. Sono sempre soddisfatta del risultato, Orianna ha mani d'oro!",
      date: "2 settimane fa",
      rating: 5
    },
    {
      name: "Giuseppe Bianchi",
      comment: "Ottimo salone, ambiente pulito e accogliente. Il personale è molto competente e sempre disponibile.",
      date: "1 mese fa",
      rating: 5
    },
    {
      name: "Anna Verdi",
      comment: "Finalmente ho trovato il mio parrucchiere di fiducia! Colori fantastici e consigli sempre azzeccati.",
      date: "3 settimane fa",
      rating: 5
    },
    {
      name: "Marco Ferrari",
      comment: "Servizio impeccabile e prezzi giusti. Il salone è facilmente accessibile e ha parcheggio comodo.",
      date: "1 settimana fa",
      rating: 5
    },
    {
      name: "Lucia Moretti",
      comment: "Atmosfera rilassante e risultati sempre perfetti. Lo consiglio vivamente a tutti!",
      date: "2 settimane fa",
      rating: 5
    },
    {
      name: "Roberto Conti",
      comment: "Ottima esperienza! Staff professionale e ambiente molto curato. Tornerò sicuramente.",
      date: "4 giorni fa",
      rating: 5
    }
  ],

  hours: [
    { day: "Lunedì", hours: "Chiuso" },
    { day: "Martedì", hours: "08:30 - 19:00" },
    { day: "Mercoledì", hours: "08:30 - 19:00" },
    { day: "Giovedì", hours: "08:30 - 19:00" },
    { day: "Venerdì", hours: "08:30 - 19:00" },
    { day: "Sabato", hours: "08:30 - 18:00" },
    { day: "Domenica", hours: "Chiuso" }
  ]
};