// src/pages/about.js
import Head from 'next/head';
import ImageGrid from "../components/ImageGrid";
import DesignHero from "../components/DesignHero";

const Design = () => {
  return (
    <div>
      <Head>
        <title>About Design</title>
      </Head>
      <DesignHero/>
      <ImageGrid />
    </div>
  );
};

export default Design;
