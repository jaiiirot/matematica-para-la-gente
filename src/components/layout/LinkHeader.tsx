import { Link } from "react-router-dom";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  available: boolean;
}

export default function LinkHeader({ title, children, available }: Props) {
  const style: string = "text-gray-700 rounded-xl transition";
  const link: string = title.toLowerCase();
  return (
    <li
      className={`${
        available
          ? "hover:scale-105 hover:shadow-md hover:text-gray-900"
          : ""
      } ${style}`}
    >
      <Link
        to={available ? `/${link}` : "#"}
        className="relative flex gap-2 justify-center items-center px-4 py-2 text-sm"
      >
        {children}
        {title}
        {available ? null : (
          <span className="text-[8px] absolute -bottom-2 right-0 left-0 mx-auto w-min">
            Proximamente
          </span>
        )}
      </Link>
    </li>
  );
}
