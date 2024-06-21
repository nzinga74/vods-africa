import Plus from "../../assets/plus.png";
import { FaPlus } from "react-icons/fa";

const Faqs = () => {
  const faqs = [
    {
      text: " O que é o Vods2Africa?",
    },
    {
      text: "Qua o serviço mais barato tem na Vods2Africa?",
    },
    {
      text: "Quais são as vantagens na Vods2Africa?",
    },
    {
      text: "Como aproveitar dos melhores serviços da Vods2Africa?",
    },
    {
      text: "Quais Formas de pagamento estão disponíveis na Vods2Africa?",
    },
    {
      text: "Como aproveitar dos melhores serviços da Vods2Africa?",
    },
  ];
  return (
    <div className="bg-c-gray-200 h-auto">
      <div className="container mx-auto py-4">
        <h2 className="text-white font-bold text-4xl poppins ">FAQS</h2>
        <div className="grid grid-cols-2 mt-20 gap-6">
          {faqs.map((faq) => (
            <div className=" rounded bg-c-gray-400 py-5 px-4">
              <div className="flex items-center justify-between">
                <p className="p-0 text-white poppins">{faq.text}</p>
                <FaPlus className="text-white font-thin" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
