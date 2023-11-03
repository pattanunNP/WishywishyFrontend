import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../components/lottie/internal-sever.json";
import Head from "next/head";
import BackButton from "../components/back";
import Footer from "../components/footer";

export default function Loading() {
  return (
    <>
      <Head>
        <title>500 Internal Server Error</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <BackButton />
      <div className="min-h-screen bg-navy-blue-800 py-6 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Player autoplay loop src={animationData} className="w-96" />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <h1 className="text-white text-xl font-Kanit">
              Server is pass away<br></br>
              We are sorry for this inconvenience
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
