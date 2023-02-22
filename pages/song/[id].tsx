import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { Song } from "@/utils/types";
import { SONG_DATA } from "@/utils/constants";

type Props = {
  song: Song;
};

export default function SongPage({ song }: Props) {
  return (
    <>
      <Head>
        <title>Song Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-screen h-screen bg-slate-800 flex items-center justify-center">
        <Link
          href="/"
          className="text-xl text-white font-bold underline absolute top-10 left-10"
        >
          BACK
        </Link>

        <div className="p-10 bg-white text-white bg-opacity-20 flex rounded-xl">
          <button className="bg-white rounded-full w-20 h-20 mr-8 hover:bg-purple-100">
            <span className="text-purple-600 font-bold tracking-tighter">
              PLAY
            </span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{song.title}</h1>
            <h2 className="text-lg mt-2">{song.artist}</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SONG_DATA.map((song) => `/song/${song.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params = {},
}) => {
  const { id } = params;
  const song = SONG_DATA.find((song) => song.id === id);

  if (!song) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      song,
    },
  };
};
