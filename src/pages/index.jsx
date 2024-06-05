import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Head>
        <title> My Portfolio </title>
        <meta name="description" content="My UI/UX Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen scrollbar-hide">
        <div
          className={`relative w-full h-[600px] mb-8 ${
            theme === "dark" ? "bg-black bg-opacity-50" : ""
          }`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Rohan Kokkula
            </h1>
            <p className="text-xl sm:text-2xl">
              My Creative Design Space
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
