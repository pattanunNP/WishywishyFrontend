import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Snowfall from "react-snowfall";
import Footer from "../components/footer";

const Home: NextPage = () => {
 
  return (
    <div>
      <Head>
        <title>Givemeawish</title>
        <meta name="description" content="Givemeawish" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-navy-blue-900 py-6 flex flex-col justify-center relative overflow-hidden">
        <div className="bg-santa bg-fix bg-no-repeat">
          {/* <Snowfall snowflakeCount={200} /> */}
          <div className="container mx-auto">
            <div className="p-2 flex flex-col items-center justify-center ">
              <div className="rounded-full ring-white ring-4 w-24 h-24">
                <Image
                  className="object-cover rounded-full"
                  placeholder="blur"
                  blurDataURL="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  width={150}
                  height={150}
                  alt="profile"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-center space-x-3">
              <h1 className="bg-white opacity-80 text-center px-3 py-2 md:w-96 sm:w-64 xs:w-48 rounded-lg text-black text-xl font-bold font-Itim">
                สวัสดี <br></br>Arm
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="mt-10 flex flex-col justify-center">
                <Link href="/wish/createwish" passHref>
                  <div className="btn-primary1">เขียนคำอวยพร</div>
                </Link>
                <Link href="/wish/receive" passHref>
                  <div className="btn-primary2">รับคำอวยพร</div>
                </Link>
                <Link href="/wish" passHref>
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
