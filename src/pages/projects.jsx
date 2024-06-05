// src/pages/services.js
import Head from 'next/head';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Projects Page</h1>
        <p className="mt-4 text-xl">These are our Projects.</p>
      </main>
    </div>
  );
};

export default Projects;
