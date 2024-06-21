import UserIcon from "../../assets/user.png";
import Underscore from "../../assets/underscore.png";
import { AiOutlineSend } from "react-icons/ai";
import ContactCenter from "../../assets/contacts.png";
import { MdAlternateEmail } from "react-icons/md";

import "./styles/index.css";
import { MdOutlinePhone } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <div className="bg-c-gray-200 py-40">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-x-20">
            <div>
              <h2 className="text-white font-bold text-4xl poppins">
                Contacte-nos
              </h2>
              <p className="mt-5 text-c-gray-100 text-sm">
                Carregue seus vídeos sabendo que eles contam com um player HTML5
                de alta qualidade, com carregamento rápido e 100% de confiança,
                sem.
              </p>
              <form className="mt-10">
                <div className="px-4 rounded py-4 bg-c-gray-400 flex items-center">
                  <img className="w-4 h-4" src={UserIcon} />
                  <input
                    className="ml-2 w-full bg-c-gray-400 text-p outline-none text-c-gray-100 placeholder-c-gray-100"
                    placeholder="Insira seu Nome"
                  />
                </div>
                <div className="px-4 mt-2 rounded py-4 bg-c-gray-400 flex items-center">
                  <MdAlternateEmail className="h-4 w-4 text-c-gray-100" />
                  <input
                    className="ml-2 w-full bg-c-gray-400 text-p outline-none text-c-gray-100 placeholder-c-gray-100"
                    placeholder="Insira seu Email"
                  />
                </div>
                <textarea
                  placeholder="Mensagem"
                  className="p-4 rounded box-border w-full mt-2 outline-none resize-none bg-c-gray-400 h-36 text-p text-c-gray-100 placeholder-c-gray-100 "
                ></textarea>
                <button className="bg-c-orange-100 text-white px-7 py-5 font-medium text-sm rounded-md w-full mt-8 flex justify-center ">
                  <div className="flex items-center space-x-2 ">
                    <p>Enviar</p>
                    <AiOutlineSend className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
            <div className="relative">
              <div className="contacts-center"></div>
              <div className="w-4/5 contact-image-div bg-c-gray-500 h-c-100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
