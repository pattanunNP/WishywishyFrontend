import "../styles/main.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useState } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    // console.log("routeChangeStart...");
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    // console.log("routeChangeComplete");
    setIsLoading(false);
  });

  return <>{isLoading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
