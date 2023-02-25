import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { SONG_DATA } from "@/utils/constants";
import SongCard from "@/components/SongCard";

export default function Home() {
  const [songs] = useState(SONG_DATA);

  return (
    <>
      <Head>
        <title>Pianity Frontend Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="grow flex flex-col items-center py-40 mb-52 ">
        <div className="container flex flex-col">
          <h1 className="text-5xl font-medium text-white mb-10">All songs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {songs.map((song) => (
              <Link href={`/song/${song.id}`} key={song.id}>
                <SongCard song={song} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
