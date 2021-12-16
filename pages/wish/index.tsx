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
        <div className="container mx-auto">
          <div className="m-2 mt-5 flex flex-col space-y-5 items-start justify-centerw-full h-full overflow-y-auto">
            <div className=" bg-white border-black border-r-8 border-b-8 p-4 rounded-xl">
              <h1 className="font-Itim text-left font-semibold">
                ถึง&nbsp;<span>Arm</span>
              </h1>
              <p className="p-2 w-full h-full rounded-lg font-Itim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                at, odit iusto amet reprehenderit non harum modi laborum aliquid
                labore architecto molestiae quam similique assumenda,
                necessitatibus eligendi nemo quidem blanditiis tenetur
                exercitationem omnis praesentium deserunt. Possimus dolores quod
                voluptates ab minus sequi illum quae, provident porro harum sunt
                labore veniam temporibus architecto asperiores autem sit
                debitis. Impedit eum nihil, quaerat eveniet ipsam minus nisi
                assumenda incidunt ad molestiae magni quibusdam, provident ut
                reiciendis
              </p>
              <h1 className="font-Itim text-left font-semibold">
                จาก&nbsp;<span>คนแปลกหน้า</span>
              </h1>
            </div>
            <div className=" bg-white  border-black border-r-8 border-b-8  p-4 rounded-xl">
              <h1 className="font-Itim text-left font-semibold">
                ถึง&nbsp;<span>Arm</span>
              </h1>
              <p className="p-2 w-full h-full  rounded-lg font-Itim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                at, odit iusto amet reprehenderit non harum modi laborum aliquid
                labore architecto molestiae quam similique assumenda,
                necessitatibus eligendi nemo quidem blanditiis tenetur
                exercitationem omnis praesentium deserunt. Possimus dolores quod
                voluptates ab minus sequi illum quae, provident porro harum sunt
                labore veniam temporibus architecto asperiores autem sit
                debitis. Impedit eum nihil, quaerat eveniet ipsam minus nisi
                assumenda incidunt ad molestiae magni quibusdam, provident ut
                reiciendis
              </p>
              <h1 className="font-Itim text-left font-semibold">
                จาก&nbsp;<span>คนแปลกหน้า</span>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wish;
