import { MessageCircle, Wrench, Paintbrush, Car, Gauge, Sparkles, Droplet, Package, Instagram } from 'lucide-react';
import LogosPage from './components/LogosPage';
import Testimonials from './components/Testimonials';
import WhatsAppCTA from './components/WhatsAppCTA';

const removeFloating = () => {
  document.querySelectorAll('[style^="position: fixed"][style*="bottom: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
};

// Executa a função imediatamente ao carregar
removeFloating();

// Observa mudanças no DOM e reaplica a função se novos elementos forem adicionados
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });

const WHATSAPP_URL = "https://wa.me/5599981905560?text=Olá!+Vi+o+site+da+AutoParts+e+gostaria+de+um+orçamento";

function App() {
  return (
    <div className="min-h-screen bg-autoparts-white">
      <header className="fixed top-0 w-full bg-autoparts-navy text-autoparts-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/autopartspecas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Instagram className="w-6 h-6 md:w-7 md:h-7 text-pink-600" />
                </div>
              </div>
            </a>

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ring-4 ring-autoparts-red/30 hover:ring-autoparts-red/50">
              <img src="/logo.png" alt="AUTO PARTS" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-montserrat font-semibold uppercase tracking-wide">
            <a href="#servicos" className="hover:text-autoparts-red transition-colors duration-300">Serviços</a>
            <a href="#estrutura" className="hover:text-autoparts-red transition-colors duration-300">Estrutura</a>
            <a href="#sobre" className="hover:text-autoparts-red transition-colors duration-300">Sobre</a>
            <a href="#contato" className="hover:text-autoparts-red transition-colors duration-300">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-montserrat font-bold uppercase text-sm flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="relative bg-autoparts-navy text-autoparts-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #C0C0C0 12%, transparent 12.5%, transparent 87%, #C0C0C0 87.5%, #C0C0C0), linear-gradient(150deg, #C0C0C0 12%, transparent 12.5%, transparent 87%, #C0C0C0 87.5%, #C0C0C0), linear-gradient(30deg, #C0C0C0 12%, transparent 12.5%, transparent 87%, #C0C0C0 87.5%, #C0C0C0), linear-gradient(150deg, #C0C0C0 12%, transparent 12.5%, transparent 87%, #C0C0C0 87.5%, #C0C0C0)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold mb-6 uppercase tracking-tight leading-tight animate-fade-in">
            Pensou em <span className="text-autoparts-red">qualidade</span> para o seu carro?
            <br />Pensou <span className="text-autoparts-red">AUTO PARTS!</span>
          </h1>
          <p className="text-lg md:text-2xl mb-4 text-autoparts-white font-open-sans leading-relaxed">
            Centro automotivo completo em Imperatriz - MA
          </p>
          <p className="text-base md:text-lg mb-10 text-autoparts-silver font-roboto uppercase tracking-wider">
            Funilaria • Pintura • Mecânica • Estética Automotiva
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-autoparts-red hover:bg-red-700 px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-montserrat font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-autoparts-red/50"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-3 text-autoparts-navy uppercase tracking-tight">
            Nossos <span className="text-autoparts-red">Serviços</span>
          </h2>
          <p className="text-center text-autoparts-silver font-roboto mb-16 text-base md:text-lg uppercase tracking-wide">Soluções completas para o seu veículo</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: "Mecânica Geral", desc: "Manutenção preventiva e corretiva completa" },
              { icon: Paintbrush, title: "Funilaria e Pintura", desc: "Recuperação total da lataria e pintura premium" },
              { icon: Car, title: "Martelinho de Ouro", desc: "Remoção de amassados sem danificar a pintura" },
              { icon: Gauge, title: "Alinhamento e Balanceamento", desc: "Precisão e segurança para sua direção" },
              { icon: Sparkles, title: "Polimento", desc: "Revitalização e brilho profissional" },
              { icon: Droplet, title: "Higienização Completa", desc: "Limpeza interna e externa profunda" },
              { icon: Sparkles, title: "Estética Automotiva", desc: "Cristalização, vitrificação e proteção" },
              { icon: Package, title: "Peças Automotivas", desc: "Peças originais e de qualidade" }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-autoparts-red group"
              >
                <service.icon className="w-12 h-12 text-autoparts-red mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-montserrat font-bold mb-2 text-autoparts-navy uppercase">{service.title}</h3>
                <p className="text-autoparts-black font-open-sans text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <WhatsAppCTA text="Fale com um especialista" message="Olá! Gostaria de mais informações sobre os serviços da AUTO PARTS." />
        </div>
      </section>

      <section id="estrutura" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-3 text-autoparts-navy uppercase tracking-tight">
            Nossa <span className="text-autoparts-red">Estrutura</span>
          </h2>
          <p className="text-center text-autoparts-silver font-roboto mb-16 text-base md:text-lg max-w-3xl mx-auto">
            Nossa estrutura moderna e equipada garante segurança e eficiência em todos os serviços realizados
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/WhatsApp Image 2025-10-23 at 12.33.39.jpeg", title: "Estrutura Moderna" },
              { img: "/WhatsApp Image 2025-10-23 at 12.33.40 (3).jpeg", title: "Oficina Completa" },
              { img: "/WhatsApp Image 2025-10-23 at 12.33.39 (1).jpeg", title: "Sala de Espera" },
              { img: "/WhatsApp Image 2025-10-23 at 12.33.41.jpeg", title: "Atendimento Especializado" }
            ].map((item, i) => (
              <div key={i} className="relative h-72 rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-montserrat font-bold text-lg uppercase tracking-wide">
                    {item.title}
                  </p>
                </div>
                <div className="absolute inset-0 bg-autoparts-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogosPage />

      <Testimonials />

      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-16 text-autoparts-navy uppercase tracking-tight">
            Sobre a <span className="text-autoparts-red">AUTO PARTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-autoparts-red to-red-700 p-8 rounded-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 uppercase text-center">Missão</h3>
              <p className="text-white/90 font-open-sans leading-relaxed text-center">
                Oferecer serviços automotivos de excelência com qualidade, agilidade e compromisso,
                superando as expectativas dos nossos clientes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-autoparts-navy to-autoparts-navy/90 p-8 rounded-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 uppercase text-center">Visão</h3>
              <p className="text-white/90 font-open-sans leading-relaxed text-center">
                Ser referência em Imperatriz como centro automotivo completo, reconhecido pela
                qualidade técnica e atendimento diferenciado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-autoparts-red to-red-700 p-8 rounded-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 uppercase text-center">Valores</h3>
              <p className="text-white/90 font-open-sans leading-relaxed text-center">
                Comprometimento, transparência, qualidade, inovação e respeito ao cliente.
                Seu carro merece o melhor cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-autoparts-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-16 uppercase tracking-tight">
            Entre em <span className="text-autoparts-red">Contato</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2 text-autoparts-red uppercase tracking-wide">Endereço</h3>
                <p className="text-autoparts-silver font-open-sans">Rua Paulo Ramos, 941 – Entroncamento</p>
                <p className="text-autoparts-silver font-open-sans">Imperatriz – MA</p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2 text-autoparts-red uppercase tracking-wide">E-mail</h3>
                <p className="text-autoparts-silver font-open-sans">autopartpeças1@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2 text-autoparts-red uppercase tracking-wide">Instagram</h3>
                <a
                  href="https://www.instagram.com/autopartspecas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-autoparts-red hover:text-red-400 font-open-sans transition-colors duration-300"
                >
                  @autopartspecas
                </a>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-montserrat font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            <div className="bg-autoparts-silver/10 rounded-lg overflow-hidden shadow-xl h-80 md:h-96">
              <iframe
                src="https://maps.google.com/maps?q=Rua+Paulo+Ramos+941+Entroncamento+Imperatriz+MA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AUTO PARTS"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-autoparts-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt="AUTO PARTS Logo" className="h-20 rounded-full shadow-lg ring-4 ring-autoparts-red/30" />
          </div>
          <p className="text-autoparts-silver font-open-sans mb-8 text-base">
            Serviços Automotivos de Qualidade em Imperatriz - MA
          </p>
          <div className="flex justify-center space-x-12 mb-8">
            <a
              href="https://www.instagram.com/autopartspecas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-autoparts-silver hover:text-autoparts-red transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full group-hover:shadow-xl transition-shadow duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="font-montserrat font-semibold text-sm">@autopartspecas</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-autoparts-silver hover:text-green-600 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="bg-green-600 p-3 rounded-full group-hover:shadow-xl transition-shadow duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-montserrat font-semibold text-sm">WhatsApp</span>
            </a>
          </div>
          <div className="border-t border-autoparts-silver/20 pt-6">
            <p className="text-autoparts-silver/70 text-sm font-open-sans">
              © 2025 AUTO PARTS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
