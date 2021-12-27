import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Footer from "../components/footer";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../components/lottie/snow-fall-2.json";
import Modal from "../components/modal";
import { FiHelpCircle } from "react-icons/fi";

const Home: NextPage = () => {
  const { profile, show, setShow } = useContext(UserContext);

  return (
    <div>
      <Head>
        <title>Wishy Wishy</title>
        <meta property="og:title" content="Wishy Wihshy" key="title" />
        <meta name="description" content="Givemeawish" />
        <meta property="og:image" content="/logo.png" key="ogimage" />
        <meta property="og:site_name" content="wishy wishy" key="ogsitename" />
        <meta
          property="og:description"
          content="ส่งพรปีใหม่ถึงคนแปลกหน้า"
          key="ogdesc"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-screen bg-navy-blue-900 py-6 flex flex-col justify-center relative">
        <Player
          autoplay
          loop
          speed={0.5}
          src={animationData}
          renderer="svg"
          className="z-20 aspect-auto absolute top-0 left-0 w-screen h-screen"
        />

        <div className="z-30 bg-santa bg-fix bg-no-repeat">
          <div className="container mx-auto">
            {show && <Modal />}

            <div className="p-2 flex flex-col items-center justify-center ">
              <div className="rounded-full ring-white ring-4 w-24 h-24">
                {profile?.pictureUrl && (
                  <Image
                    className="object-cover rounded-full"
                    blurDataURL={`${profile.pictureUrl}/small`}
                    src={`${profile.pictureUrl}/large`}
                    alt="profile_image"
                    width={250}
                    height={250}
                  />
                )}
              </div>
            </div>

            <div className="mt-10 flex justify-center space-y-5">
              <h1 className="bg-white opacity-80 text-center px-3 py-2 md:w-96 sm:w-64 xs:w-48 rounded-lg text-black text-xl  font-Kanit">
                สวัสดี <br></br>
                {profile?.displayName}
              </h1>
            </div>
            <div
              className="mt-10 flex justify-center items-center space-y-2"
              onClick={() => {
                setShow(true);
              }}
            >
              <div className="bg-blue-500 px-1 py-1 w-32 rounded-full flex flex-row space-x-4">
                <FiHelpCircle className="mx-1 mt-1 items-center text-white align-middle" />
                <h1 className="text-center text-white text-md font-Kanit align-middle">
                  วิธีการเล่น
                </h1>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="mt-10 flex flex-col justify-center">
                <Link href="/wish/createwish" passHref>
                  <div className="btn-primary1">เขียนคำอวยพร</div>
                </Link>
                <Link href="/wish/receive" passHref>
                  <div className="btn-primary2">รับคำอวยพร</div>
                </Link>
                <Link href="/wish/user/" passHref>
                  <div className="btn-primary3">คำอวยพรที่ได้รับ</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
