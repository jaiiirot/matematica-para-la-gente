import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";

export default function ReactPlayerVideo() {
  const { url } = useParams();
  const LinkYoutube: string = `https://www.youtube.com/watch?v=${url}}`;
  return (
    <div className="w-full overflow-hidden rounded-3xl">
      <ReactPlayer
        url={LinkYoutube}
        controls={true}
        playing={true}
        className="w-full h-80 object-cover rounded-3xl"
        width={"100%"}
      />
    </div>
  );
}
