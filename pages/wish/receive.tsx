import { getWithExpiry, parseCookies } from "../../helpers/";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import BackButton from "../../components/back";
import Footer from "../../components/footer";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../components/lottie/snow-fall-2.json";
import Loading from "../../components/loading";
import Success from "../../components/success";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
interface RandomWish {
	wish_id: string;
	content: string;
	creator: string;
	creator_id: string;
	hidename: boolean;
	create_at: string;
}
const ReceiveWish = () => {
	const { profile } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const [data, setData] = useState<RandomWish>({
		wish_id: "",
		content: "",
		creator: "",
		creator_id: "",
		hidename: false,
		create_at: "",
	});

	async function saveWish(wish_id: string) {
		const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/savewish`;

		const accessToken = getWithExpiry("accessToken");

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};
		console.log(config);
		setTimeout(async () => {
			setLoading(true);
			const res = await axios.post(endpoint, { wish_id }, config);
			console.log(res);
			if (res.status === 200) {
				setIsSuccess(true);
				// console.log("success");
				setLoading(false);
				setTimeout(() => {
					setIsSuccess(false);
				}, 3000);
			}
		}, 1000);
	}

	async function fetchWish() {
		const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wish/receivewish`;

		const accessToken = getWithExpiry("accessToken");

		console.log(accessToken);

		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		};

		const res = await axios.get(endpoint, { headers });

		setData(res.data);

		return res.data;
	}

	useEffect(() => {
		fetchWish();
	}, []);

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
						<BackButton />
						<main className="min-h-screen bg-navy-blue-800 bg-santa  bg-no-repeat flex flex-col justify-center relative overflow-hidden">
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
								<div className="mt-10  mb-5 flex flex-col items-center justify-center ">
									<div className="bg-blue-500 w-full p-2 rounded-full text-center align-middle">
										<h1 className="text-white justify-center item-center text-lg font-semibold font-Kanit">
											You received wish &nbsp;from&nbsp;{data.creator}
										</h1>
									</div>
								</div>

								<div className="mt-5 flex flex-col justify-center bg-white w-full h-full border-black border-r-8 border-b-8  p-4 rounded-xl ">
									<h1 className="font-Kanit text-left font-semibold">
										ถึง&nbsp;<span>{profile?.displayName}</span>
									</h1>
									<div className="flex   justify-start">
										<ImQuotesLeft />
									</div>
									<p className="p-2 w-full h-full  font-Kanit">
										{data.content}
									</p>
									<div className="flex  justify-end">
										<ImQuotesRight />
									</div>
									<h1 className="text-left font-Kanit">
										From&nbsp;<span>{data.creator}</span>
									</h1>
								</div>
								<div className="mt-10  mb-5 flex flex-col items-center justify-center">
									<div
										className="btn-primary2"
										onClick={() => {
											saveWish(data.wish_id, null);
										}}
									>
										Save Wish
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

export default ReceiveWish;
