import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./footer";
import Navbars from "./navbar";
import { Alert } from "flowbite-react";

export default function Home() {

  return (
    <div className={styles.container}>
      <Navbars />
      <Head>
        <title>Simpoku: Simposium Terlengkap di Indonesia</title>
        <meta name="description" content="Simposium Terlengkap di Indonesia" />
        <link rel="icon" href="/simpoku_icon.ico" />
      </Head>
      <Alert color="info">Alert!</Alert>;
      {/* <Footer /> */}
    </div>
  );
}
