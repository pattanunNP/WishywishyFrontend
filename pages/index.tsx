import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Footer from "../components/footer";

const Home: NextPage = () => {
  const { profile } = useContext(UserContext);

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
          <div className="container mx-auto">
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
              <h1 className="bg-white opacity-80 text-center px-3 py-2 md:w-96 sm:w-64 xs:w-48 rounded-lg text-black text-xl font-bold font-Itim">
                สวัสดี <br></br>
                {profile?.displayName}
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
