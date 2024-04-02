import Navbar from "@/Components/Navbar";
import AddTask from "@/Components/AddTask";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <>
  <main className="mainpage">
  <Navbar/>
  <AddTask/>
  <Component {...pageProps} />
  </main>
  </>;
}
