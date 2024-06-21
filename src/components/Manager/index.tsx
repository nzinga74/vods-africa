import ManagerPhoto from "../../assets/manager.png";

const Manager = () => {
  return (
    <>
      <div className="bg-c-gray-300 py-28">
        <div className="container mx-auto">
          <div className="flex items-center space-x-5">
            <div className="w-1/2">
              <h2 className="font-bold text-white text-4xl">
                Gestão de Deploy em multiplos dispositivo
              </h2>
              <p className="text-c-gray-100 mt-4">
                A Biblioteca de Vídeos é o lugar central onde equipes podem
                organizar, compartilhar e encontrar os vídeos que os ajudam a
                trabalhar de forma mais inteligente, nos formatos MP4 para rodar
                H.264 e todos os principais codecs para transcodificação de alta
                velocidade, bem como vídeos de alta qualidade e 360 em todos os
                dispositivos.
              </p>
              <button className="bg-c-orange-100 text-white px-7 py-3 mt-10 font-bold rounded-md">
                Começar
              </button>
            </div>
            <div>
              <img className="w-full rounded" src={ManagerPhoto} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manager;
