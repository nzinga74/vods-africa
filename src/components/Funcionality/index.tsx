import { funciolatyMocks } from "../../utils/mocks/funcionality";

const Funcionality = () => {
  return (
    <>
      <div className="bg-c-gray-200">
        <div className=" container mx-auto py-40">
          <h2 className="text-white font-bold text-4xl">Funcionalidades</h2>
          <p className="text-c-gray-100 text-sm mt-4">
            Direcionado a produtores de Audiovisuais, Agências de comunicação,
            Provedoras de conteúdos
          </p>
          <div className="grid grid-cols-4 mt-20 space-x-3">
            {funciolatyMocks.map((funcionality) => (
              <div className="flex flex-col justify-between items-start">
                <div>
                  <div>
                    <img src={funcionality.icon} />
                  </div>
                  <h3 className="text-white text-xl mt-4 font-medium">
                    {funcionality.title}
                  </h3>
                  <p className="text-c-gray-100 mt-5 text-sm">
                    {funcionality.text}
                  </p>
                </div>
                <button
                  className={`${funcionality.color} flex items-center space-x-3 mt-10 text-xs`}
                >
                  <p className="p-0 m-0">Ver mais</p>
                  <img src={funcionality.arrow} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Funcionality;
