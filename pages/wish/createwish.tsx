import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Snowfall from "react-snowfall";
import Footer from "../../components/footer";
import BackButton from "../../components/back";
import { AiTwotoneCheckSquare, AiFillCheckSquare } from "react-icons/ai";

const Create: NextPage = () => {
  const [hidename, setHidename] = useState(false);
  return (
    <div>
      <Head>
        <title>Createwish</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 py-6 flex flex-col justify-center relative overflow-y-scroll">
        {/* <Snowfall snowflakeCount={100} /> */}

        <div className="container mx-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-Itim  text-white text-2xl font-bold">
              ส่งคำอวยพร ถึง คนแปลกหน้า
            </h1>
          </div>

          <div className="m-2 mt-5 flex flex-col items-start justify-center bg-white w-full h-full shadow-lg shadow-blue-300 p-4 rounded-xl">
            <h1 className="font-Itim text-left font-semibold">
              ถึง <span>คนแปลกหน้า</span>
            </h1>
            <textarea
              className="p-2 w-full h-full resize-y rounded-lg font-Itim"
              placeholder="พิมพ์คำอวยพรที่นี่"
            ></textarea>

            <div className="mt-10 flex items-end  font-semibold font-Itim">
              จาก&nbsp;
              <span>
                {hidename ? <div>คนแปลกหน้าคนหนึ่ง</div> : <div>Arm</div>}
              </span>
            </div>
            <div className="mt-10 flex flex-row items-end font-semibold space-x-3">
              <label className="text-xl">
                <input
                  onChange={() => setHidename(!hidename)}
                  type="checkbox"
                  className="w-4 h-4 accent-pink-500"
                  checked={hidename}
                />
                <span className="mx-2 font-Itim">ซ่อนชื่อของคุณ</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="btn-primary1"> ส่งคำอวยพร</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
