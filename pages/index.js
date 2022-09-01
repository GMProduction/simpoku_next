import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Alert, Navbar } from "flowbite-react";
import Navbars from "../components/navbar";

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
