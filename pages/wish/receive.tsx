import type { GetServerSideProps } from "next";
import { parseCookies } from "../../helpers/";
import Head from "next/head";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import BackButton from "../../components/back";
import Footer from "../../components/footer";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../components/lottie/snow-fall-2.json";
import Loading from "../../components/loading";
import Success from "../../components/success";
interface RandomWishProps {
  data: {
    data: {
      wish_id: string;
      content: string;
      creator: string;
      creator_id: string;
      hidename: boolean;
      create_at: string;
    };
  };
}
const ReceiveWish = ({ data }: RandomWishProps) => {
  const { profile } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function saveWish(wish_id: string, req: any) {
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/savewish`;
    const cookie = parseCookies(req);
    const accessToken = cookie.accessToken;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    setLoading(true);
    const res = await axios.post(endpoint, { wish_id }, config);
    if (res.status === 200) {
      setIsSuccess(true);
      // console.log("success");
      setLoading(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  }

  return (
    <div>
      <Head>
        <title>Receive Wishes</title>
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
      {loading && <Loading />}
      {isSuccess && <Success />}
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        <Player
          autoplay
          loop
          renderer="svg"
          speed={0.5}
          src={animationData}
          className="z-20 absolute top-0 left-0  w-screen h-screen
          object-fill"
        />

        <div className="z-30 container mx-auto">
          <div className="mt-10  mb-5 flex flex-col items-center justify-center">
            <h1 className="text-white justify-center item-center text-xl font-semibold font-Kanit">
              คุณได้รับคำอวยพร&nbsp;จาก&nbsp;{data.data.creator}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center w-64"></div>
          <div className="mt-5 flex flex-col items-start justify-center bg-white w-full h-full border-black border-r-8 border-b-8  p-4 rounded-xl ">
            <h1 className="font-Itim text-left font-semibold">
              ถึง&nbsp;<span>{profile?.displayName}</span>
            </h1>
            <p className="p-2 w-full h-full  font-Kanit">{data.data.content}</p>
            <h1 className="text-left font-Kanit">
              จาก&nbsp;<span>{data.data.creator}</span>
            </h1>
          </div>
          <div className="mt-10  mb-5 flex flex-col items-center justify-center">
            <div
              className="btn-primary2"
              onClick={() => {
                saveWish(data.data.wish_id, null);
              }}
            >
              บันทึกเก็บไว้
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReceiveWish;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wish/receivewish`;
  const cookie = parseCookies(req);

  const accessToken = cookie.accessToken;

  // console.log(accessToken);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.get(endpoint, { headers });

  return {
    props: { data: res.data },
  };
};
