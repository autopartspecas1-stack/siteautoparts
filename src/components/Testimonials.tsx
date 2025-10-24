import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Excelente atendimento! Meu carro ficou perfeito após a funilaria e pintura. Recomendo!",
    rating: 5
  },
  {
    name: "Maria Santos",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Profissionais muito competentes e honestos. Preço justo e serviço de qualidade.",
    rating: 5
  },
  {
    name: "João Pedro",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Melhor oficina de Imperatriz! Sempre levo meus carros aqui e nunca me decepcionei.",
    rating: 5
  },
  {
    name: "Ana Carolina",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Atendimento impecável e entrega no prazo. Super indico a AUTO PARTS!",
    rating: 5
  },
  {
    name: "Patricia Ferreira",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Atendimento via seguradora foi impecável! A AUTO PARTS cuidou de tudo, desde o orçamento até a liberação. Não tive que me preocupar com nada.",
    rating: 5
  },
  {
    name: "Fernando Costa",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    text: "Trabalham com diversos convênios e facilitaram todo o processo. Serviço excelente e atendimento diferenciado!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Modern car background"
          className="w-full max-w-4xl opacity-5 object-contain"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-3 text-autoparts-navy uppercase tracking-tight">
          O que nossos <span className="text-autoparts-red">clientes dizem</span>
        </h2>
        <p className="text-center text-autoparts-silver font-roboto mb-16 text-base md:text-lg uppercase tracking-wide">
          Depoimentos reais de clientes satisfeitos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-autoparts-red"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-autoparts-red shadow-md"
                />
                <div className="ml-4">
                  <h3 className="font-montserrat font-bold text-autoparts-navy text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-autoparts-black font-open-sans leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
