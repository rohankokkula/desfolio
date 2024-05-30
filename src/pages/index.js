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
          <div className="relative w-full h-[600px] mb-8">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                {" "}
                Rohan Kokkula{" "}
              </h1>{" "}
              <p className="text-xl sm:text-2xl text-white">
                {" "}
                My Creative Design Space{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <ImageGrid />
        </main>{" "}
      </div>
    );
}