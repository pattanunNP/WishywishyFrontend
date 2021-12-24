import type { NextPage } from "next";
import { UserContext } from "../../contexts/UserContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import BackButton from "../../components/back";
import Footer from "../../components/footer";

const Wish: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { profile } = useContext(UserContext);

  return (
    <div>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center w-64">
            <h1 className="font-Itim text-center text-white  text-xl font-semibold">
              คำอวยพร&nbsp;หมายเลข&nbsp;{id}&nbsp;จาก&nbsp;xxxx
            </h1>
          </div>
          <div className="mt-5 flex flex-col items-start justify-center bg-white w-full h-full border-black border-r-8 border-b-8  p-4 rounded-xl ">
            <h1 className="font-Itim text-left font-semibold">
              ถึง&nbsp;<span>{profile?.displayName}</span>
            </h1>
            <p className="p-2 w-full h-full ounded-lg font-Itim">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wish;
