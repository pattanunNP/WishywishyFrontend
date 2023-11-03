import Head from "next/head";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FadeIn from "react-fade-in/lib/FadeIn";

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
				<div className="z-40 absolute bg-white xs:w-[320px] xs:h-[350px] md:h-[420px] md:w-[420px]  rounded-xl shadow-lg shadow-gray-800 transition ease-in-out delay-350 opacity-100">
					<div className="m-3 flex flex-col items-end justify-end">
						<AiFillCloseCircle
							className="text-3xl text-christmas-red-500"
							onClick={() => {
								setShow(false);
							}}
						/>
					</div>
					<div className="flex flex-row items-center justify-center">
						<h1 className="text-md text-white font-Kanit font-semibold bg-christmas-red-500 px-4 py-2 rounded-full">
							How to Make a Wish
						</h1>
					</div>

					<div className="my-5 flex flex-col space-y-2">
						<div className="mx-5 flex flex-col items-start justify-start">
							<div className="flex flex-row space-x-8">
								<p className="font-Kanit text-md text-slate-600">
									1.&nbsp;&nbsp;&nbsp;Send Wish to someone
								</p>
							</div>
						</div>

						<div className="mx-5 flex flex-col items-start justify-start">
							<div className="flex flex-row space-x-8">
								<p className="font-Kanit text-md text-slate-600">
									2.&nbsp;&nbsp;&nbsp;Receive wish from the universe
								</p>
							</div>
						</div>
						<div className="mx-5 flex flex-col items-start justify-start">
							<div className="flex flex-row space-x-8">
								<p className="font-Kanit text-md text-slate-600">
									3.&nbsp;&nbsp;&nbsp;Share your wish wish with you friends
								</p>
							</div>
						</div>
						<div className="mx-5 flex flex-col items-start justify-start">
							<div className="flex flex-row space-x-8">
								<p className="font-Kanit text-md text-slate-600">
									4.&nbsp;&nbsp;&nbsp;Post your on social media with hashtag{" "}
									<strong>#wishywishy</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
