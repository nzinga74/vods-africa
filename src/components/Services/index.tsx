import "./styles/index.css";
import Youtube from "../../assets/youtube.png";
import Vimeo from "../../assets/vimeo.png";
import Html from "../../assets/html.png";
import Live from "../../assets/icon1.png";

const Services = () => {
  return (
    <>
      <div className="bg-c-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center flex-wrap">
            <div className="w-1/2">
              <div className="relative w-full options-container ">
                <div className="options-first">
                  <div className="rounded-full flex items-center justify-center options-icon">
                    <img src={Live} />
                  </div>
                  <p className="text-c-gray-100 text-sm mt-3 leading-loose	">
                    Carregue seus vídeos sabendo que eles contam com um player
                    HTML5 de{" "}
                  </p>
                </div>
                <div className="options-second">
                  <div className="rounded-full flex items-center justify-center options-icon">
                    <img src={Html} />
                  </div>
                  <p className="text-c-gray-100 text-sm mt-3 leading-loose	">
                    Carregue seus vídeos sabendo que eles contam com um player
                    HTML5 de{" "}
                  </p>
                </div>
                <div className="options-third">
                  <div className="rounded-full flex items-center justify-center options-icon">
                    <img src={Youtube} />
                  </div>
                  <p className="text-c-gray-100 text-sm mt-3 leading-loose	">
                    Carregue seus vídeos sabendo que eles contam com um player
                    HTML5 de{" "}
                  </p>
                </div>
                <div className="options-forth">
                  <div className="rounded-full flex items-center justify-center options-icon">
                    <img src={Vimeo} />
                  </div>
                  <p className="text-c-gray-100 text-sm mt-3 leading-loose	">
                    Carregue seus vídeos sabendo que eles contam com um player
                    HTML5 de{" "}
                  </p>
                </div>
                <div className="grader"></div>
              </div>
            </div>
            <div className="w-1/2 pl-10">
              <h2 className="font-bold text-white text-4xl">
                Tenha possibilidade de Integrar e carregar com varios serviços
              </h2>
              <p className="text-sm text-c-gray-100 mt-4 ">
                Carregue seus vídeos sabendo que eles contam com um player HTML5
                de alta qualidade, com carregamento rápido e 100% de confiança,
                sem qualquer custo. Faça a transmissão a partir da plataforma
                Vods2Afric\.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
