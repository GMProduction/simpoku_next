import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbars from "../components/Navbar";
import Hero from "../components/Hero";
import { SliderData } from "../components/SliderData";
import Slider from "../components/Slider";

export default function Home() {

  return (
    <div className={styles.container}>
      <Navbars />
      <div>
        <Head>
          <title>Simpoku: Simposium Terlengkap di Indonesia</title>
          <meta name="description" content="Simposium Terlengkap di Indonesia" />

         
          <link rel="icon" href="/simpoku_icon.ico" />
        </Head>
        <Hero heading="Simpoku" message="Simposium terlengkap di Indonesia!"/>
        <Slider slider={SliderData} />
      </div>
      {/* <Footer /> */}
    </div>

  );
}
