import "./styles/index.css";
import Hero from "../../assets/vods.png";
import PlayIcon from "../../assets/play.png";

const Header = () => {
  return (
    <>
      <div className="w-full header bg-c-gray-200 ">
        {/* Header */}
        <div className="w-full h-3 py-5 h-auto">
          <div className=" container mx-auto">
            <div className="flex items-center">
              <div className="mr-16">
                <img src={Hero} />
              </div>
              <ul className="flex space-x-3 text-white">
                <li>Funcionalidades</li>
                <li>Preço</li>
                <li>Contactos</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        {/* HERO */}
        <div>
          <div className="container mx-auto ">
            <div className="hero-content w-full hero justify-center flex flex-col  h-full">
              <p className="text-white poppins text-5xl hero-content-paragraph font-semibold">
                CRIAR, CARREGAR E PARTILHAR COM A <span>VODS2AFRICA</span>
              </p>
              <p className="text-c-gray-100 mt-10 text-lg">
                Alojamento de video online. Hospede, Gerencies e compartilhe os
                seus videos na plataforma de video em nuvem VODS2AFRICA
              </p>
              <div className="my-14 space-x-6 flex items-center">
                <button className="bg-c-orange-100 text-white px-7 py-3 font-bold rounded-md">
                  Começar
                </button>
                <button className="text-white flex items-center space-x-3">
                  <img src={PlayIcon} />
                  <p className="p-0 m-0">Assistir Vídeo</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
