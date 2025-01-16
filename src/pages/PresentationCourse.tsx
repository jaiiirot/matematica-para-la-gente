import { course } from "../mock/data";
export default function PresentationCourse() {
  const querynumber: number =
    parseInt(
      new URLSearchParams(window.location.search).get("class") || "0",
      10
    ) - 1;
  return (
    <>
      <img
            src={course[querynumber].front}
            alt=""
            className="w-full h-[430px] object-cover rounded-3xl"
          />
      <h1>HOLA</h1>
    </>
  );
}
