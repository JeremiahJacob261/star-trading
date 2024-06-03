import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
const pops = Poppins({weight:'300', subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
  <main className={pops.className}>
   <Component {...pageProps} />
</main>
);
}
