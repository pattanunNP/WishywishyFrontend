import type { NextPage } from "next";
import Head from "next/head";
import Snowfall from "react-snowfall";
import BackButton from "../../components/back";
import Footer from "../../components/footer";

const Wish: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wishes</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        {/* <Snowfall snowflakeCount={100} /> */}
        <div className="container mx-2">
          <div className="flex flex-col items-center justify-center w-64">
            <h1 className="font-Itim text-center text-white  text-xl font-semibold">
              คำอวยพรที่ได้รับ
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <div className="grid grid-rows-2 xs:grid-cols-1 gap-2 ">
              <div className="m-2 mt-5 flex flex-col items-center justify-center bg-white w-96 xs:w-3/4 h-full shadow-lg shadow-blue-300 p-4 rounded-xl">
                <h1 className="font-Itim text-left font-semibold">
                  ถึง&nbsp;<span>Arm</span>
                </h1>
                <p className="p-2 w-full h-full resize-y rounded-lg font-Itim t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque at, odit iusto amet reprehenderit non harum modi
                  laborum aliquid labore architecto molestiae quam similique
                  assumenda, necessitatibus eligendi nemo quidem blanditiis
                  tenetur
                </p>
                <h1 className="font-Itim text-left font-semibold">
                  จาก&nbsp;<span>คนแปลกหน้า</span>
                </h1>
              </div>
              <div className="m-2 mt-5 flex flex-col items-center justify-center bg-white w-96 xs:w-3/4 h-full shadow-lg shadow-blue-300 p-4 rounded-xl">
                <h1 className="font-Itim text-left font-semibold">
                  ถึง&nbsp;<span>Arm</span>
                </h1>
                <p className="p-2 w-full h-full resize-y rounded-lg font-Itim t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque at, odit iusto amet reprehenderit non harum modi
                  laborum aliquid labore architecto molestiae quam similique
                  assumenda, necessitatibus eligendi nemo quidem blanditiis
                  tenetur
                </p>
                <h1 className="font-Itim text-left font-semibold">
                  จาก&nbsp;<span>คนแปลกหน้า</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wish;
