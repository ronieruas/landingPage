import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function normalizeLang(input) {
  const s = String(input || '').toLowerCase();
  if (s.startsWith('pt')) return 'pt';
  if (s.startsWith('es')) return 'es';
  return 'en';
}

function getInitialLang() {
  try {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage?.getItem('landingLang') || window.localStorage?.getItem('i18nextLng');
      if (saved) return normalizeLang(saved);
    }
  } catch (_e) {
    void _e;
  }

  try {
    if (typeof navigator !== 'undefined') {
      const nav = (navigator.languages && navigator.languages[0]) || navigator.language;
      if (nav) return normalizeLang(nav);
    }
  } catch (_e) {
    void _e;
  }

  return 'en';
}

const resources = {
  en: {
    translation: {
      nav: {
        features: 'Features',
        pricing: 'Pricing',
        getStarted: 'Login'
      },
      hero: {
        badge: 'ChordChart Pro 1.0 is Live',
        title: "Your Band's Setlist in the palm of your ",
        titleHighlight: 'hand',
        desc: 'Organize chord charts, create collaborative setlists, and synchronize the entire team in real time during ',
        words: {
          rehearsals: 'rehearsals',
          performances: 'performances',
          church_services: 'church services',
          tours: 'tours'
        },
        startBtn: 'Start for Free',
        demoBtn: 'View Demo'
      },
      benefits: {
        title: "Why you'll ",
        titleHighlight: 'love it',
        subtitle: 'Everything you need to orchestrate your team from the first rehearsal to the final encore.',
        items: [
          {
            title: 'Jam Sync (Real-time)',
            desc: 'The owner controls the setlist order and everyone follows along at the exact same point live.'
          },
          {
            title: 'Collaborative Setlists',
            desc: 'Create, edit, and share repertoires with musicians, vocalists, and technical staff effortlessly.'
          },
          {
            title: 'Smart Chords & Capo',
            desc: 'Quickly adapt to the vocalist by adjusting the key without rewriting the entire chord progression.'
          },
          {
            title: 'Auto-Scroll',
            desc: 'Automatic scrolling with speed control for continuous playing on stage without interruptions.'
          },
          {
            title: 'Web + Mobile Sync',
            desc: 'Compose on your computer, play on your phone. Always synchronized in the cloud.'
          },
          {
            title: 'Full Customization',
            desc: 'Light/dark/auto themes, multilingual support, and font size scaling for optimal stage readability.'
          }
        ]
      },
      showcase: {
        title: 'See it in ',
        titleHighlight: 'Action',
        lead: 'The chord chart, your way. Copy from any site, customize every chord, and organize your setlist in seconds.',
        subtitle: 'Beautifully synchronized interfaces across web and mobile.',
        hint: 'Click the screens to swap and see more app features.',
        videoAlt: 'Demo video showing copying and pasting a chord chart, then editing and organizing it.',
        videoFallback: 'Your browser does not support embedded videos.'
      },
      pricing: {
        title: 'Simple, transparent ',
        titleHighlight: 'pricing',
        subtitle: 'Choose the plan that best fits your band. Subscription available via Google Play Billing.',
        plans: [
          {
            name: 'Free',
            price: 'U$ 0',
            period: '',
            desc: 'For musicians starting to organize their repertoire.',
            features: [
              'Website access',
              'Up to 15 songs',
              'Basic Setlist creation'
            ],
            cta: 'Start Free'
          },
          {
            name: 'Annual',
            price: 'U$ 9.99',
            period: '/ year',
            desc: 'Discounted subscription',
            features: [
              'Website and App access',
              'Unlimited songs & setlists',
              'Live Jam Sync',
              'Smart Transpose & Capo',
              'Team collaboration'
            ],
            tagline: 'MOST POPULAR',
            cta: 'Get Annual Plan'
          },
          {
            name: 'Monthly',
            price: 'U$ 0.99',
            period: '/ month',
            desc: 'Flexibility for individual musicians and pros.',
            features: [
              'Website and App access',
              'Unlimited songs & setlists',
              'Live Jam Sync',
              'Smart Transpose & Capo',
              'Team collaboration'
            ],
            cta: 'Go Pro Monthly'
          }
        ]
      },
      testimonials: {
        title: 'Trusted by ',
        titleHighlight: 'Musicians',
        items: [
          {
            name: "Alex M.",
            role: "Worship Leader",
            text: "ChordChart Pro completely changed how we rehearse. The Live Jam Sync means nobody is ever lost on the wrong page anymore."
          },
          {
            name: "Sarah Jenkins",
            role: "Touring Guitarist",
            text: "The auto-scroll feature is a lifesaver. I set the BPM, tap play, and focus entirely on my performance without touching the screen."
          },
          {
            name: "David T.",
            role: "Band Director",
            text: "Creating setlists used to take hours of formatting. Now it takes minutes, and sharing with the whole band is instant."
          }
        ]
      },
      cta: {
        title: 'Transform your band ',
        titleHighlight: 'playing today.',
        subtitle: 'Join thousands of musicians who have already synchronized their repertoires and elevated their performances to the next level.',
        btn: 'Get Started Free'
      },
      footer: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        features: 'Recursos',
        pricing: 'Preços',
        getStarted: 'Login'
      },
      hero: {
        badge: 'ChordChart Pro 1.0 já está no ar',
        title: 'O Repertório da sua Banda na palma da sua ',
        titleHighlight: 'mão',
        desc: 'Organize cifras, crie repertórios colaborativos e sincronize toda a equipe em tempo real durante ',
        words: {
          rehearsals: 'ensaios',
          performances: 'shows',
          church_services: 'cultos',
          tours: 'turnês'
        },
        startBtn: 'Começar Grátis',
        demoBtn: 'Ver Demo'
      },
      benefits: {
        title: 'Por que você vai ',
        titleHighlight: 'amar',
        subtitle: 'Tudo o que você precisa para orquestrar sua equipe, do primeiro ensaio ao bis final.',
        items: [
          {
            title: 'Jam Sync (Tempo Real)',
            desc: 'O líder controla a ordem do repertório e todos acompanham exatamente no mesmo ponto ao vivo.'
          },
          {
            title: 'Repertórios Colaborativos',
            desc: 'Crie, edite e compartilhe repertórios com músicos, vocalistas e equipe técnica sem esforço.'
          },
          {
            title: 'Cifras Inteligentes & Capo',
            desc: 'Adapte-se rapidamente ao vocalista ajustando o tom sem reescrever toda a progressão de acordes.'
          },
          {
            title: 'Rolagem Automática',
            desc: 'Rolagem automática com controle de velocidade para tocar no palco sem interrupções.'
          },
          {
            title: 'Sincronização Web + Mobile',
            desc: 'Componha no computador, toque no celular. Sempre sincronizado na nuvem.'
          },
          {
            title: 'Personalização Completa',
            desc: 'Temas claro/escuro, suporte multilíngue e ajuste do tamanho da fonte para leitura ideal no palco.'
          }
        ]
      },
      showcase: {
        title: 'Veja em ',
        titleHighlight: 'Ação',
        lead: 'A cifra, do seu jeito. Copie de qualquer site, personalize cada acorde e organize seu setlist em segundos.',
        subtitle: 'Interfaces lindamente sincronizadas na web e no celular.',
        hint: 'Clique nas telas para trocar e ver mais recursos do aplicativo.',
        videoAlt: 'Vídeo de demonstração mostrando copiar e colar uma cifra, depois editar e organizar.',
        videoFallback: 'Seu navegador não suporta vídeo incorporado.'
      },
      pricing: {
        title: 'Preços simples e ',
        titleHighlight: 'transparentes',
        subtitle: 'Escolha o plano que melhor se adapta à sua banda. Assinatura disponível pelo Google Play Billing.',
        plans: [
          {
            name: 'Grátis',
            price: 'R$ 0',
            period: '',
            desc: 'Para músicos que estão começando a organizar seu repertório.',
            features: [
              'Acesso pelo site',
              'Até 15 músicas',
              'Criação básica de repertório'
            ],
            cta: 'Começar Grátis'
          },
          {
            name: 'Anual',
            price: 'R$ 29,90',
            period: '/ ano',
            desc: 'Assinatura com desconto',
            features: [
              'Acesso pelo site e app',
              'Músicas e repertórios ilimitados',
              'Jam Sync ao vivo',
              'Transposição inteligente e Capo',
              'Colaboração em equipe'
            ],
            tagline: 'MAIS POPULAR',
            cta: 'Assinar Plano Anual'
          },
          {
            name: 'Mensal',
            price: 'R$ 2,99',
            period: '/ mês',
            desc: 'Flexibilidade para músicos individuais e profissionais.',
            features: [
              'Acesso pelo site e app',
              'Músicas e repertórios ilimitados',
              'Jam Sync ao vivo',
              'Transposição inteligente e Capo',
              'Colaboração em equipe'
            ],
            cta: 'Assinar Plano Mensal'
          }
        ]
      },
      testimonials: {
        title: 'Aprovado por ',
        titleHighlight: 'Músicos',
        items: [
          {
            name: "Alex M.",
            role: "Líder de Louvor",
            text: "O ChordChart Pro mudou completamente como ensaiamos. O Live Jam Sync significa que ninguém mais se perde na página errada."
          },
          {
            name: "Sarah Jenkins",
            role: "Guitarrista de Turnê",
            text: "O recurso de rolagem automática salva vidas. Eu defino o BPM, aperto o play e me concentro totalmente na performance, sem tocar na tela."
          },
          {
            name: "David T.",
            role: "Diretor Musical",
            text: "Criar repertórios levava horas de formatação. Agora leva minutos, e o compartilhamento com toda a banda é instantâneo."
          }
        ]
      },
      cta: {
        title: 'Transforme o som da sua banda ',
        titleHighlight: 'hoje.',
        subtitle: 'Junte-se a milhares de músicos que já sincronizaram seus repertórios e elevaram suas performances ao próximo nível.',
        btn: 'Começar Grátis'
      },
      footer: {
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        contact: 'Contato'
      }
    }
  },
  es: {
    translation: {
      nav: {
        features: 'Características',
        pricing: 'Precios',
        getStarted: 'Iniciar sesión'
      },
      hero: {
        badge: 'ChordChart Pro 1.0 ya está disponible',
        title: 'El Repertorio de tu Banda en la palma de tu ',
        titleHighlight: 'mano',
        desc: 'Organiza acordes, crea repertorios colaborativos y sincroniza a todo el equipo en tiempo real durante ',
        words: {
          rehearsals: 'ensayos',
          performances: 'presentaciones',
          church_services: 'servicios',
          tours: 'giras'
        },
        startBtn: 'Empezar Gratis',
        demoBtn: 'Ver Demo'
      },
      benefits: {
        title: 'Por qué te ',
        titleHighlight: 'encantará',
        subtitle: 'Todo lo que necesitas para orquestar a tu equipo desde el primer ensayo hasta el último bis.',
        items: [
          {
            title: 'Jam Sync (Tiempo Real)',
            desc: 'El líder controla el orden del repertorio y todos siguen exactamente en el mismo punto en vivo.'
          },
          {
            title: 'Repertorios Colaborativos',
            desc: 'Crea, edita y comparte repertorios con músicos, vocalistas y equipo técnico sin esfuerzo.'
          },
          {
            title: 'Acordes Inteligentes y Capo',
            desc: 'Adáptate rápidamente al vocalista ajustando el tono sin reescribir toda la progresión de acordes.'
          },
          {
            title: 'Desplazamiento Automático',
            desc: 'Desplazamiento automático con control de velocidad para tocar en el escenario sin interrupciones.'
          },
          {
            title: 'Sincronización Web + Móvil',
            desc: 'Anota en tu computadora, toca en tu celular. Siempre sincronizado en la nube.'
          },
          {
            title: 'Personalización Completa',
            desc: 'Temas claro/oscuro, soporte multilingüístico y ajuste del tamaño de letra para lectura óptima en el escenario.'
          }
        ]
      },
      showcase: {
        title: 'Míralo en ',
        titleHighlight: 'Acción',
        lead: 'El cifrado, a tu manera. Copia de cualquier sitio, personaliza cada acorde y organiza tu setlist en segundos.',
        subtitle: 'Interfaces hermosamente sincronizadas en web y móvil.',
        hint: 'Haz clic en las pantallas para intercambiar y ver más características de la aplicación.',
        videoAlt: 'Video de demostración que muestra copiar y pegar un cifrado, luego editar y organizar.',
        videoFallback: 'Tu navegador no admite videos incrustados.'
      },
      pricing: {
        title: 'Precios simples y ',
        titleHighlight: 'transparentes',
        subtitle: 'Elige el plan que mejor se adapte a tu banda. Suscripción disponible mediante Google Play Billing.',
        plans: [
          {
            name: 'Gratis',
            price: 'U$ 0',
            period: '',
            desc: 'Para músicos que recién comienzan a organizar su repertorio.',
            features: [
              'Acceso web',
              'Hasta 15 canciones',
              'Creación básica de repertorios'
            ],
            cta: 'Empezar Gratis'
          },
          {
            name: 'Anual',
            price: 'U$ 9.99',
            period: '/ año',
            desc: 'Suscripción con descuento',
            features: [
              'Acceso web y móvil',
              'Canciones y repertorios ilimitados',
              'Jam Sync en vivo',
              'Transposición Inteligente y Capo',
              'Colaboración en equipo'
            ],
            tagline: 'MÁS POPULAR',
            cta: 'Obtener Plan Anual'
          },
          {
            name: 'Mensual',
            price: 'U$ 0.99',
            period: '/ mes',
            desc: 'Flexibilidad para músicos individuales y profesionales.',
            features: [
              'Acceso web y móvil',
              'Canciones y repertorios ilimitados',
              'Jam Sync en vivo',
              'Transposición Inteligente y Capo',
              'Colaboración en equipo'
            ],
            cta: 'Obtener Plan Mensual'
          }
        ]
      },
      testimonials: {
        title: 'Con la confianza de ',
        titleHighlight: 'Músicos',
        items: [
          {
            name: "Alex M.",
            role: "Líder de Alabanza",
            text: "ChordChart Pro cambió completamente cómo ensayamos. El Live Jam Sync significa que nadie vuelve a perderse en la página equivocada."
          },
          {
            name: "Sarah Jenkins",
            role: "Guitarrista de Giras",
            text: "El autodesplazamiento es un salvavidas. Fijo el BPM, le doy a reproducir y me concentro por completo en la actuación sin tocar la pantalla."
          },
          {
            name: "David T.",
            role: "Director de Banda",
            text: "Crear repertorios antes tomaba horas de ajuste. Ahora toma minutos, y compartirlo con la banda es instantáneo."
          }
        ]
      },
      cta: {
        title: 'Transforma el sonido de tu banda ',
        titleHighlight: 'hoy.',
        subtitle: 'Únete a miles de músicos que ya han sincronizado sus repertorios y elevado sus interpretaciones al siguiente nivel.',
        btn: 'Empezar Gratis'
      },
      footer: {
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        contact: 'Contacto'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLang(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
