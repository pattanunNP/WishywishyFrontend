import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Snowfall from "react-snowfall";
import BackButton from "../../components/back";
import Footer from "../../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wish</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 py-6 flex flex-col justify-center relative overflow-y-scroll">
        <Snowfall snowflakeCount={100} />

        <div className="container mx-2">
          <div className="p-2 flex flex-col items-center justify-center bg-white w-64">
            <h1 className="font-Itim text-left font-semibold">
              ถึง <span>คนแปลกหน้า</span>
            </h1>
            <p className="font-Itim">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate laborum ex beatae debitis veniam maiores eaque corporis,
              minima rerum nesciunt eum earum amet natus odit sint sit iure et.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
