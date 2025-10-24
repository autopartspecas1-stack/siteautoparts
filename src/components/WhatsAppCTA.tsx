import { MessageCircle } from 'lucide-react';

interface WhatsAppCTAProps {
  text: string;
  message?: string;
}

export default function WhatsAppCTA({ text, message }: WhatsAppCTAProps) {
  const baseUrl = "https://wa.me/5599981905560";
  const encodedMessage = message
    ? `?text=${encodeURIComponent(message)}`
    : "?text=Olá!+Vi+o+site+da+AutoParts+e+gostaria+de+um+orçamento";

  const whatsappUrl = `${baseUrl}${encodedMessage}`;

  return (
    <div className="flex justify-center mt-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-montserrat font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-white"
      >
        <MessageCircle className="w-6 h-6" />
        <span>{text}</span>
      </a>
    </div>
  );
}
