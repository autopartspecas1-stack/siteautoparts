import React from "react";
import WhatsAppCTA from "./WhatsAppCTA";

const marcas = [
  { nome: "Honda", url: "/honda.png" },
  { nome: "Toyota", url: "/toyota.jpeg" },
  { nome: "Nissan", url: "/nissan.jpeg" },
  { nome: "Mitsubishi", url: "/mitsubishi.png" },
  { nome: "Volkswagen", url: "/volksvagem.jpeg" },
  { nome: "Audi", url: "/audi.png" },
  { nome: "Kia", url: "/kia.png" },
  { nome: "Mercedes-Benz", url: "/mercedes-benz.png" },
  { nome: "Lexus", url: "/lexus.jpeg" },
  { nome: "Volvo", url: "/volvo.jpeg" },
  { nome: "Land Rover", url: "/land rover.jpeg" },
  { nome: "Jeep", url: "/jeep.png" },
  { nome: "BMW", url: "/bmw.png" },
  { nome: "Chevrolet", url: "/chevrolet.jpeg" },
  { nome: "Hyundai", url: "/hyundai.png" },
  { nome: "Peugeot", url: "/peugeot.png" },
  { nome: "Renault", url: "/renault.png" },
  { nome: "Citroën", url: "/citroen.png" },
  { nome: "Dodge", url: "/dodge.png" },
  { nome: "Ford", url: "/ford.png" }
];

const seguradoras = [
  { nome: "Allianz", url: "/allianz.png" },
  { nome: "Porto Seguro", url: "/portoseguros.png" },
  { nome: "SulAmérica", url: "/sulamerica.png" },
  { nome: "MAPFRE", url: "/mapfreseguros.png" },
  { nome: "Liberty Seguros", url: "/libertyseguros.png" },
  { nome: "Itaú Seguros", url: "/itauseguros.png" },
  { nome: "Bradesco Seguros", url: "/bradescoseguros.png" },
  { nome: "HDI Seguros", url: "/hdiseguros.png" },
  { nome: "Chubb Seguros", url: "/chubbseguros.png" },
  { nome: "Generali", url: "/generali.jpeg" },
  { nome: "Marítima Seguros", url: "/maritimaseguros.png" },
  { nome: "Tokio Marine", url: "/tokiomarine.jpeg" },
  { nome: "Zurich Seguros", url: "/zurichseguros.png" },
  { nome: "Azul Seguros", url: "/azulseguros.png" }
];

const convenios = [
  { nome: "Bamex", url: "/bamex.png" },
  { nome: "Cartão de Benefício", url: "/cartaodebeneficio.png" },
  { nome: "Neo Facilidades", url: "/neofacilidade.jpeg" },
  { nome: "Prime", url: "/prime.png" }
];

interface GridLogosProps {
  titulo: string;
  itens: Array<{ nome: string; url: string }>;
  bgColor?: string;
  ctaText: string;
  ctaMessage: string;
}

const GridLogos: React.FC<GridLogosProps> = ({ titulo, itens, bgColor = "bg-gray-50", ctaText, ctaMessage }) => (
  <section className={`py-20 ${bgColor}`}>
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-autoparts-navy mb-3 uppercase tracking-tight">
        {titulo}
      </h2>
      <div className="w-20 h-1 bg-autoparts-red mx-auto mb-12"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {itens.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 flex justify-center items-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-gray-100 hover:border-autoparts-red group cursor-pointer"
          >
            <img
              src={item.url}
              alt={item.nome}
              title={item.nome}
              className="h-14 object-contain transition-all duration-300 group-hover:animate-pulse"
            />
          </div>
        ))}
      </div>
      <WhatsAppCTA text={ctaText} message={ctaMessage} />
    </div>
  </section>
);

export default function LogosPage() {
  return (
    <>
      <GridLogos
        titulo="Marcas Atendidas"
        itens={marcas}
        bgColor="bg-gray-50"
        ctaText="Agende seu serviço agora"
        ctaMessage="Olá! Vi que vocês atendem a minha marca de carro e gostaria de agendar um serviço."
      />
      <GridLogos
        titulo="Seguradoras Atendidas"
        itens={seguradoras}
        bgColor="bg-white"
        ctaText="Solicite orçamento com sua seguradora"
        ctaMessage="Olá! Gostaria de fazer um orçamento através da minha seguradora."
      />
      <GridLogos
        titulo="Convênios Atendidos"
        itens={convenios}
        bgColor="bg-gray-50"
        ctaText="Consulte seu convênio"
        ctaMessage="Olá! Tenho convênio e gostaria de saber mais sobre os serviços disponíveis."
      />
    </>
  );
}
