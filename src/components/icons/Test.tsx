interface Props{
    w?: string,
    h?: string,
    color?: string 
}

export default function Test({w,h,color}: Props) {
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>{" "}
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>{" "}
      <path d="M12 17l.01 0"></path> <path d="M12 11l0 3"></path>{" "}
    </svg>
  );
}