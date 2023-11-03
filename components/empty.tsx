import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./lottie/empty.json";
import Head from "next/head";

export default function Empty() {
  return (
    <>
      <Head>
        <title>Empty</title>
        <meta name="description" content="Givemeawish" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <h1 className="text-white font-Kanit">
              คุณไม่ได้บันทึกคำอวยพรไว้เลย
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
