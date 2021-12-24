import type { NextPage } from "next";
import Head from "next/head";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import BackButton from "../../components/back";
import Footer from "../../components/footer";
import Link from "next/link";

const Wish: NextPage = () => {
  const { profile } = useContext(UserContext);

  return (
    <div>
      <Head>
        <title>Wishes</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="m-2 mt-5 flex flex-col space-y-5 items-start justify-centerw-full h-full overflow-y-auto">
            <div className=" bg-white  border-black border-r-8 border-b-8  p-4 rounded-xl">
              <h1 className="font-Itim text-left font-semibold">
                ถึง&nbsp;<span>{profile?.displayName}</span>
              </h1>
              <p className="p-2 w-full h-full  rounded-lg font-Itim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                at, odit iusto amet reprehenderit non harum modi laborum aliquid
                labore architecto molestiae quam similique assumenda,
                necessitatibus eligendi nemo quidem blanditiis tenetur
              </p>

              <h1 className="font-Itim text-right font-semibold">
                จาก&nbsp;<span>คนแปลกหน้า</span>
              </h1>
              <Link href="/wish/1" passHref>
                <p className="mt-3 p-1 font-Itim text-white w-16 text-center bg-christmas-red-500 hover:bg-christmas-red-600 rounded-md">
                  อ่านต่อ
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wish;
