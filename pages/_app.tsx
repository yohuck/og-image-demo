import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Lato({
  weight: ["100", "300", "900"],
  subsets: ['latin'] },
);


export default function App({ Component, pageProps }: AppProps) {
  return <Component className={inter.className} {...pageProps} />
}
