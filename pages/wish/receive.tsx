import type { NextPage } from "next";
import Head from "next/head";
import Snowfall from "react-snowfall";
import BackButton from "../../components/back";
import Footer from "../../components/footer";

const Receive: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Createwish</title>
        <meta name="description" content="Givemeawish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        {/* <Snowfall snowflakeCount={100} /> */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center w-64">
            <h1 className="font-Itim text-center text-white  text-xl font-semibold">
              คุณได้รับคำอวยพร&nbsp;จาก&nbsp;xxxx
            </h1>
          </div>
          <div className="m-2 mt-5 flex flex-col items-start justify-center bg-white w-full h-full shadow-lg shadow-blue-300 p-4 rounded-xl overflow-y-auto">
            <h1 className="font-Itim text-left font-semibold">
              ถึง&nbsp;<span>Arm</span>
            </h1>
            <p className="p-2 w-full h-full resize-y rounded-lg font-Itim">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              at, odit iusto amet reprehenderit non harum modi laborum aliquid
              labore architecto molestiae quam similique assumenda,
              necessitatibus eligendi nemo quidem blanditiis tenetur
              exercitationem omnis praesentium deserunt. Possimus dolores quod
              voluptates ab minus sequi illum quae, provident porro harum sunt
              labore veniam temporibus architecto asperiores autem sit debitis.
              Impedit eum nihil, quaerat eveniet ipsam minus nisi assumenda
              incidunt ad molestiae magni quibusdam, provident ut reiciendis
            </p>
            <h1 className="font-Itim text-left font-semibold">
              จาก&nbsp;<span>คนแปลกหน้า</span>
            </h1>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="btn-primary2">บันทึกเก็บไว้</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Receive;
