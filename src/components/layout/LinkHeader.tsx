import { Link } from "react-router-dom";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  available: boolean;
}

export default function LinkHeader({ title, children, available }: Props) {
  const style: string = "rounded-xl transition";
  const link: string = title.toLowerCase();
  return (
    <li
      className={`${
        available
          ? "hover:scale-105 shadow-sm hover:shadow-xl"
          : "text-gray-500"
      } ${style}`}
    >
      <Link
        to={available ? `/${link}` : "#"}
        className="relative flex gap-2 justify-center items-center px-4 py-2 font-medium"
      >
        {children}
        {title}
        {available ? null : (
          <span className="text-xs absolute -bottom-2 right-0 left-0 mx-auto w-min">
            Proximamente
          </span>
        )}
      </Link>
    </li>
  );
}
