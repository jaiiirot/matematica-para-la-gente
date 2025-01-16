interface Props {
  w?: string;
  h?: string;
  color?: string;
}
export default function Teach({ w, h, color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color || "none"}
      stroke={color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={w}
      height={h}
      strokeWidth={2}
    >
      {" "}
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>{" "}
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>{" "}
    </svg>
  );
}
