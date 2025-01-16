import { Link } from "react-router-dom";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  available: boolean;
}

export default function LinkHeader({ title, children, available }: Props) {
  
  const style: string = "rounded-md transition"
  return (
    <li className={`${available? "opacity-50" : "hover:scale-105 shadow-sm hover:shadow-lg"} ${style}`}>
      <Link
        to="/cursos"
        className="relative flex gap-2 justify-center items-center px-4 py-2 font-medium"
      >
        {children}
        {title}
        {available ? (
          <span className="text-xs font-extralight absolute -bottom-2 right-0 left-0 mx-auto w-min from-neutral-700">
            Proximamente
          </span>
        ) : null}
      </Link>
    </li>
  );
}
