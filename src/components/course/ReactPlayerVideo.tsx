interface Props {
  url: string;
  play?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
}

import ReactPlayer from "react-player/lazy";

export default function ReactPlayerVideo({
  url = "",
  play = true,
  controls = true,
  muted = true,
  loop
}: Props) {
  const LinkYoutube: string = `https://www.youtube.com/watch?v=${url}}`;

  return (
    <ReactPlayer
      url={LinkYoutube}
      controls={controls}
      playing={play}
      muted={muted}
      loop={loop}
      className="object-cover"
      // width={"100%"}
      // height={"441px"}
    />
  );
}
