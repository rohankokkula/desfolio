// src/pages/about.js
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">About Page</h1>
        <p className="mt-4 text-xl">This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
