// src/pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@/context/ThemeContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
