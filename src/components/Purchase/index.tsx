import "./styles/index.css";
import Grade from "../../assets/grader.png";
const Purchase = () => {
  const purchases = [
    {
      text: "Free",
      content: "Free",
      styles: {
        contentSize: "text-2xl",
        classColor: "bg-c-red-200 ",
        textColor: "text-c-red-200",
        mainClass: "purchase-free",
      },
    },
    {
      text: "Silver",
      content: "9.900,00 AKz / mês",
      styles: {
        contentSize: "text-base",
        classColor: "bg-c-yellow-100",
        mainClass: "purchase-silver",
        textColor: "text-c-yellow-100",
      },
    },
    {
      text: "Gold",
      content: "10.900,00 AKz / mês",
      styles: {
        contentSize: "text-2xl",
        classColor: "bg-c-yellow-200",
        mainClass: "purchase-gold",
        textColor: "text-c-yellow-200",
      },
    },
    {
      text: "Platinium",
      content: "19.900,00 AKz / mês",
      styles: {
        contentSize: "text-2xl",
        classColor: "bg-c-pink-100",
        mainClass: "purchase-platinium",
        textColor: "text-c-pink-100",
      },
    },
  ];
  return (
    <div className="bg-c-gray-200">
      <div className="container mx-auto py-40">
        <h2 className="text-white font-bold text-4xl text-center">
          Comece hoje o seu projecto
          <br /> com os melhores preços
        </h2>
        <p className="text-sm  text-c-gray-100 mt-6 text-center ">
          Hospede, gerencie e compartilhe seus vídeos em HD sem anúncios, tudo
          no site do <br /> VODS2AFRICA, garantimos o melhor preço do mercado
          com serviços de exelencia.
        </p>
        <div className="grid grid-cols-4 mt-24 gap-0-5">
          {purchases.map((purchase) => (
            <>
              <div className="purchase relative py-10 px-5">
                <div
                  className={`px-7 py-1 ${purchase.styles.mainClass}  purchase-all`}
                >
                  <div
                    className={`blur-disc ${purchase.styles.classColor} rounded-full`}
                  ></div>
                  <div className="disc-grader"></div>
                  <span
                    className={`font-medium text-xl poppins ${purchase.styles.textColor}`}
                  >
                    {purchase.text}
                  </span>
                </div>
                <p
                  className={`font-bold ${purchase.styles.contentSize} poppins text-white mt-5`}
                >
                  {purchase.content}
                </p>
                <p className="mt-2 text-sm poppins text-c-green-100">
                  1GB LIVRE
                </p>
                <p className="mt-2 text-base poppins font-medium text-c-green-100">
                  Comece em minutos
                </p>
                <button className="bg-c-orange-100 w-full text-base poppins text-white mt-5 px-7 py-4 font-bold rounded-md">
                  Iniciar Gratis
                </button>
                <p className="text-white text-base font-medium mt-5">
                  1 GB Armazenamento
                </p>
                <ul className="mt-4 list-disc text-sm poppins font-normal mb-16 list-inside text-c-gray-100">
                  <li>Conjunto de ferramentas para gestão e partilha videos</li>
                  <li>1GB</li>
                  <li>10 Vídeos</li>
                  <li>Incorporação de player</li>
                  <li>Reprodução de videos sem anúncios</li>
                  <li>Largura de banda Ilimitada</li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Purchase;
