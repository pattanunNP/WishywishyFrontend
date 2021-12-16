import { useRouter } from "next/router";
import { IoChevronBackSharp } from "react-icons/io5";

export default function BackButton() {
  const Router = useRouter();
  return (
    <div
      className="px-3 py-3 text-white bg-navy-blue-800 border-none"
      onClick={() => Router.back()}
    >
      <IoChevronBackSharp size="32" />
    </div>
  );
}
