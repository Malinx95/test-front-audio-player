import { Song } from "@/utils/types";

type Props = {
  song: Song;
};

function SongCard({ song }: Props) {
  return (
    <div className="p-2 aspect-[3.2/5] bg-white bg-opacity-30 rounded-lg flex flex-col">
      <button className="bg-white bg-opacity-90 rounded-lg aspect-square shrink-0 mb-4 hover:bg-purple-100">
        <span className="text-purple-600 font-bold tracking-tighter">PLAY</span>
      </button>

      <div className="px-3 flex flex-col text-white">
        <h2 className="text-lg leading-6 font-bold">{song.title}</h2>
        <h3 className="mt-1">{song.artist}</h3>
      </div>
    </div>
  );
}

export default SongCard;
