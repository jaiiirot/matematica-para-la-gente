import { useParams } from "react-router-dom";
import ReactPlayerVideo from "../components/course/ReactPlayerVideo";

export default function ContentCource() {
  const { url } = useParams();
  console.log(url);
  return (
    <div>
      <ReactPlayerVideo
        url={ url || "" }
        controls={true}
        play={true}
        muted={false}
      />
      <h3>{url}</h3>
    </div>
  );
}
