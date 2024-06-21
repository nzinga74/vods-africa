import Contacts from "../../components/Contacts";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
import Funcionality from "../../components/Funcionality";
import Header from "../../components/Header";
import Manager from "../../components/Manager";
import Purchase from "../../components/Purchase";
import Services from "../../components/Services";
import VideoIntro from "../../components/VideoIntro";

const Home = () => {
  return (
    <>
      <Header />
      <Funcionality />
      <Manager />
      <VideoIntro />
      <Services />
      <Purchase />
      <Faqs />
      <Contacts />
      <Footer />
    </>
  );
};
export default Home;
