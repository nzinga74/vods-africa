import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import PhoneIcon from "../../assets/phone.png";
import { AiOutlineSend } from "react-icons/ai";

// import { RiFacebookCircleFill } from "react-icons/ri";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { RiInstagramFill } from "react-icons/ri";

// import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="h-56 w-full bg-c-gray-500">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-4 text-white">
              <li>{/* <RiFacebookCircleFill className="text-3xl" /> */}</li>
              <li>{/* <AiFillTwitterCircle className="text-3xl" /> */}</li>
              <li>{/* <RiInstagramFill className="text-3xl" /> */}</li>
            </ul>
            <ul className="flex space-x-8 text-white text-sm">
              <li>Funcionalidade</li>
              <li>Pacotes</li>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
            </ul>
            <div className="flex text-white">
              <img src={PhoneIcon} />
              <p className="p-0 ml-3">+244947280613</p>
            </div>
          </div>
        </div>
        <div className="divide-y h-01 w-full bg-c-gray-100"></div>
        <div className="flex justify-center my-11">
          <div className="flex items-center">
            <p className="mr-4 font-medium text-white poppins text-lg">
              Inscreve-se agora
            </p>
            <div className="flex">
              <input
                placeholder="Insira o seu email"
                className="py-4 w-80 px-4 text-sm outline-none bg-c-gray-200 placeholder-c-gray-100  rounded-l-sm"
              />
              <button className="bg-c-orange-100 flex justify-center items-center w-14  text-xl rounded-r-sm text-white">
                <AiOutlineSend className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto flex justify-end">
            <p className="text-white text-sm">@2023 copyright Angola Cables</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
