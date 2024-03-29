import type { NextPage } from "next";
import axios from "axios";
import { parseCookies } from "../../helpers/";
import Head from "next/head";
import { useState, useContext } from "react";
import Footer from "../../components/footer";
import BackButton from "../../components/back";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../components/loading";
import Success from "../../components/success";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../components/lottie/snow-fall-2.json";

const CreateWish: NextPage = () => {
	const [hidename, setHidename] = useState(false);
	const [wish, setWish] = useState("");
	const { profile, accessToken } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	async function sendWish() {
		const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wish/createwish`;
		const payload = {
			content: wish,
			creator: `${hidename ? "guest" : profile?.displayName}`,
			hidename: hidename,
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};
		// console.log(payload);
		setTimeout(async () => {
			setLoading(true);
			const res = await axios.post(endpoint, payload, config);
			if (res.status === 201) {
				setIsSuccess(true);
				console.log("success");
				setLoading(false);
				setTimeout(() => {
					setIsSuccess(false);
				}, 3000);
			}
		}, 1000);
	}
	return (
		<div>
			<Head>
				<title>Create Wish</title>
				<meta property="og:title" content="Wishy Wihshy" key="title" />
				<meta name="description" content="Givemeawish" />

				<meta property="og:image" content="/logo.png" key="ogimage" />
				<meta property="og:site_name" content="wishy wishy" key="ogsitename" />
				<meta
					property="og:description"
					content="Send Wish to someone"
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

			{!loading ? (
				!isSuccess ? (
					<>
						{" "}
						<BackButton />
						<main className="min-h-screen bg-navy-blue-800 bg-santa  bg-no-repeat flex flex-col justify-center relative overflow-hidden">
							<Player
								autoplay
								loop
								renderer="svg"
								speed={0.5}
								src={animationData}
								className="z-20 absolute top-0 left-0  w-screen h-screen
          object-cover"
							/>
							<div className="z-20 container mx-auto">
								<div className="mt-10  mb-5 flex flex-col items-center justify-center ">
									<div className="bg-white border-2 border-gray-300 w-full p-2 shadow-lg rounded-xl text-center align-middle">
										<h1 className="text-black  justify-center item-center text-xl font-semibold font-Kanit">
											Send a wish<br></br> for sharing wonderful vibes
										</h1>
									</div>
								</div>

								<div className="mt-5 flex flex-col items-start justify-center bg-white w-full h-full border-black border-r-8 border-b-8  p-4 rounded-xl">
									<h1 className="font-Kanit text-left font-semibold">
										Dear&nbsp;<span>guest</span>
									</h1>
									<textarea
										onChange={(e) => setWish(e.target.value)}
										className="my-2 p-2 w-full h-full resize-y rounded-lg font-Kanit"
										placeholder="Write your wish here"
									/>

									<div className="mt-10 flex flex-col ">
										<label className="text-xl">
											<input
												onChange={() => setHidename(!hidename)}
												type="checkbox"
												className="w-4 h-4 accent-christmas-green-500"
												checked={hidename}
											/>
											<span className="mx-2 font-Kanit">Hide you name</span>
										</label>
									</div>
									<span className="text-sm font-Kanit text-gray-400">
										*When you hide your name, the receiver will not know who you
										are.
									</span>
									<div className="mt-10  font-Kanit">
										From&nbsp;
										<span>
											{hidename ? (
												<div>Someone</div>
											) : (
												<div>{profile?.displayName}</div>
											)}
										</span>
									</div>
								</div>

								<div className="mt-10 mb-5 flex flex-col items-center justify-center">
									<div className="btn-primary1" onClick={() => sendWish()}>
										{" "}
										Make a wish
									</div>
								</div>
							</div>
						</main>
						<Footer />
					</>
				) : (
					<Success />
				)
			) : (
				<Loading />
			)}
		</div>
	);
};

export default CreateWish;
