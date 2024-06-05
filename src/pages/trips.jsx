// src/pages/services.js
import Head from 'next/head';

const Trips = () => {
  return (
    <div>
      <Head>
        <title>Trips Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Trips Page</h1>
        <p className="mt-4 text-xl">These are our Trips.</p>
      </main>
    </div>
  );
};

export default Trips;
