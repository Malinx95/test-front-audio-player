import type { AppProps } from "next/app";
import SongPlayer from "@/components/SongPlayer/SongPlayer";
import "@/styles/globals.css";
import { SongContextWrapper } from "@/context/SongContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SongContextWrapper>
      <Component {...pageProps} />
      <SongPlayer />
    </SongContextWrapper>
  );
}
