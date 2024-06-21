import "./styles/index.css";
import Player from "../../assets/playee.png";
const VideoIntro = () => {
  return (
    <>
      <div className="bg-c-gray-200">
        <div className="container mx-auto py-40">
          <div className="custom-border h-auto">
            <div className="video w-full rounded flex items-center ">
              <div className=" play rounded-full flex items-center justify-center">
                <img src={Player} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoIntro;
