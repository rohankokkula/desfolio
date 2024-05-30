// src/pages/contact.js
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Contact Page</h1>
        <p className="mt-4 text-xl">Get in touch with us.</p>
      </main>
    </div>
  );
};

export default Contact;
