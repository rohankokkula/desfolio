import Head from "next/head";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title> My Portfolio </title>{" "}
        <meta name="description" content="My UI/UX Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className="min-h-screen scrollbar-hide">
        <ImageGrid />
      </main>{" "}
    </div>
  );
}
