import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animationData from "./lottie/jumping-gift-boxes.json";

export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-blue-800 py-6 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-Itim">กำลังโหลด...</h1>
        </div>
      </div>
    </div>
  );
}
