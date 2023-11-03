import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../../components/lottie/snow-fall-2.json";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import BackButton from "../../../components/back";
import Footer from "../../../components/footer";
import { parseCookies } from "../../../helpers";
import Empty from "../../../components/empty";
import axios from "axios";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
interface UserWishProps {
  data: [
    {
      _id: string;
      userwish_info: [
        {
          wish_id: string;
          content: string;
          creator: string;
          creator_id: string;
          hidename: boolean;
          create_at: string;
        }
      ];
    }
  ];
}

const Wish = ({ data }: UserWishProps) => {
  const { profile } = useContext(UserContext);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Your Wishs</title>
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
      <BackButton />
      {data != null ? (
        <main className="min-h-screen bg-navy-blue-800  bg-santa  bg-no-repeat flex flex-col justify-center relative">
          <Player
            autoplay
            loop
            renderer="svg"
            speed={0.5}
            src={animationData}
            className="z-20 absolute top-0 left-0  w-screen h-screen
              object-fill"
          />

          <div className="z-40 container mx-auto">
            <div className="mx-2 mt-5 items-center justify-center w-full h-full overflow-hidden flex landscape:flex-col landscape:space-x-0 landscape:space-y-3 portrait:flex-col portrait:space-x-0 portrait:space-y-3"></div>
            {data[0]?.userwish_info.map((wish, index) => (
              <div
                key={index}
                className="p-3 bg-white  border-b-4 border-r-4 border-black rounded-xl portrait:w-[300px] landscape:w-[450px] landscape:h-full portrait:h-full"
              >
                <h1 className="text-black font-Kanit p-1 md:text-lg">
                  ถึง&nbsp;{profile?.displayName}
                </h1>
                <div className="flex justify-start">
                  <ImQuotesLeft />
                </div>

                <div className="flex flex-row justify-center items-center space-x-4 space-y-5">
                  <p className="font-Kanit p-2 text-gray-500 xs:text-sm sm:text-md md:text-lg">
                    {wish.content}
                  </p>
                </div>
                <div className="flex justify-end">
                  <ImQuotesRight />
                </div>

                <p className="text-gray-800 font-Kanit  align-bottom">
                  From&nbsp;{wish.creator}
                </p>
              </div>
            ))}
          </div>
        </main>
      ) : (
        <Empty />
      )}

      <Footer />
    </div>
  );
};

export default Wish;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wish/getwish`;
  const cookie = parseCookies(req);

  const accessToken = cookie.accessToken;

  console.log(accessToken);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.get(endpoint, { headers });

  return {
    props: { data: res.data.data },
  };
};
