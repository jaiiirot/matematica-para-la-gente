import { course } from "../mock/data.ts";

export default function Course() {
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
        className="w-full h-80 object-cover rounded-3xl"
      />
    </>
  );
}
