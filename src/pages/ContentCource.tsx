import { useParams } from "react-router-dom";
import ReactPlayerVideo from "../components/course/ReactPlayerVideo";
// import CardVideosCourse from "../components/card/CardVideosCourse";
// import { course } from "../mock/data";

export default function ContentCource() {
  const { url } = useParams();
  return (
    <>
      <section className="flex gap-2 mt-20 mb-4 w-11/12">
        <div className="w-full flex flex-col gap-2">
          <div>
            <ReactPlayerVideo
              url={url || ""}
              controls={true}
              play={true}
              muted={false}
            />
            <h3>{url}</h3>
          </div>
        </div>
        <div className="w-min flex flex-col gap-2">
          {/* <CardVideosCourse data={course[0]} urltitle={urltitle || ""} /> */}
        </div>
      </section>
    </>
  );
}
