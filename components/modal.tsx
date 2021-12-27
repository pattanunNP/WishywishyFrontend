import Head from "next/head";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Modal() {
  const { setShow } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="description" content="Givemeawish" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center focus:outline-none ">
        <div className="z-40 absolute bg-white xs:w-[320px] xs:h-[420px] md:h-[420px] md:w-[420px]  rounded-xl shadow-lg shadow-gray-800 transition ease-in-out delay-350 opacity-100">
          <div className="m-3 flex flex-col items-end justify-end">
            <AiFillCloseCircle
              className="text-3xl text-red-500"
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
          <div className="mt-2 flex flex-row items-center justify-center">
            <h1 className="text-md text-white font-Kanit font-semibold bg-red-500 px-4 py-2 rounded-full">
              วิธีการเล่น
            </h1>
          </div>
          <div className="mt-5 px-5 flex flex-col items-start justify-start">
            <div className="flex flex-row space-x-4">
              <div className="align-middle text-md text-white font-Kanit font-medium bg-red-600 p-1 w-8 h-8 text-center inset-0 top-0 justify-items-center rounded-full">
                <p>1</p>
              </div>
              <p className="font-Kanit text-md">
                เขียนคำอวยพรปีใหม่ส่งให้คนแปลกหน้า<br></br>ส่งต่อความรู้สึกดี ๆ
                ร่วมกัน
              </p>
            </div>
          </div>
          <div className="mt-10 px-5 flex flex-col items-start justify-start">
            <div className="flex flex-row space-x-4">
              <div className="align-middle text-md text-white font-Kanit font-medium bg-red-600 p-1 w-8 h-8 text-center inset-0 top-0 justify-items-center rounded-full">
                <p>2</p>
              </div>
              <p className="font-Kanit text-md">
                รับคำอวยพรปีใหม่ด้วยการสุ่มจากในระบบ<br></br>
                บันทึกเก็บไว้ถ้าต้องการ
              </p>
            </div>
          </div>
          <div className="mt-10 px-5 flex flex-col items-start justify-start">
            <div className="flex flex-row space-x-4">
              <div className="align-middle text-md text-white font-Kanit font-medium bg-red-600 p-1 w-8 h-8 text-center inset-0 top-0 justify-items-center rounded-full">
                <p>3</p>
              </div>
              <p className="font-Kanit text-md">
                แชร์ออกไปให้เพื่อนของคุณได้สนุกร่วมกัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
