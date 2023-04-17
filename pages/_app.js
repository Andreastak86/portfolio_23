import "@/styles/globals.css";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        hotjar.initialize(3454834, 6);
    }, []);
    return <Component {...pageProps} />;
}
