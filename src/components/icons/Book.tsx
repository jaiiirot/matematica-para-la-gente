interface Props {
  w?: string;
  h?: string;
  color?: string;
}
export default function Book({ w, h, color }: Props) {
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
      <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>{" "}
      <path d="M13 8l2 0"></path> <path d="M13 12l2 0"></path>{" "}
    </svg>
  );
}
