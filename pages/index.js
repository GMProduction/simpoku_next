import Head from "next/head";
import Navbars from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {

  return (
    <div >
      <Navbars />
      <div>
        <Head>
          <title>Simpoku: Simposium Terlengkap di Indonesia</title>
          <meta name="description" content="Simposium Terlengkap di Indonesia" />
          <link rel="icon" href="/simpoku_icon.ico" />
        </Head>

        <Hero heading="Simpoku" message="Simposium terlengkap di Indonesia!" />
        <div className="h-screen"></div>
      </div>
      {/* <Footer /> */}
    </div>

  );
}
