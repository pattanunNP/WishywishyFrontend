import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-row space-x-2 p-5 relative justify-center bg-navy-blue-800">
        <Image
          className="sm:block"
          alt="logo"
          src="/standupcode.jpg"
          width="25"
          height="25"
        />
        <a
          className="text-md text-white hover:text-gray-300"
          href="https://www.facebook.com/StandUpCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp; <span>StandUpCode Team</span>
        </a>
      </footer>
    </div>
  );
}
