import type { NextPage } from "next";
import { useState, useContext } from "react";
import Footer from "../../components/footer";
import BackButton from "../../components/back";
import { UserContext } from "../../contexts/UserContext";

const Create: NextPage = () => {
  const [hidename, setHidename] = useState(false);
  const [wish, setWish] = useState("");
  const { profile, idToken } = useContext(UserContext);

  function sendWish() {
    const payload = {
      wish: wish,
      hidename: hidename,
      idToken: idToken,
    };
    console.log(payload);
  }

  return (
    <div>
      <BackButton />
      <main className="min-h-screen bg-navy-blue-800 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-Itim  text-white text-2xl font-bold">
              ส่งคำอวยพร ถึง คนแปลกหน้า
            </h1>
          </div>

          <div className="mt-5 flex flex-col items-start justify-center bg-white w-full h-full border-black border-r-8 border-b-8  p-4 rounded-xl">
            <h1 className="font-Itim text-left font-semibold">
              ถึง <span>คนแปลกหน้า</span>
            </h1>
            <textarea
              onChange={(e) => setWish(e.target.value)}
              className="p-2 w-full h-full resize-y rounded-lg font-Itim"
              placeholder="พิมพ์คำอวยพรที่นี่"
            ></textarea>

            <div className="mt-10 flex text-right  font-semibold font-Itim">
              จาก&nbsp;
              <span>
                {hidename ? (
                  <div>คนแปลกหน้าคนหนึ่ง</div>
                ) : (
                  <div>{profile?.displayName}</div>
                )}
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
            <span className="text-sm font-Itim text-gray-400">
              *
              การเลือกซ่อนชื่อหมายถึงผู้ที่ได้รับคำอวยพรจะไม่สามารถรู้ได้ว่าท่านเป็นใคร
            </span>
          </div>
        </div>
        <div className="mt-10 mb-5 flex flex-col items-center justify-center">
          <div className="btn-primary1" onClick={() => sendWish()}>
            {" "}
            ส่งคำอวยพร
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
