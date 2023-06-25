import { link } from "fs";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  linkName: string;
  route: string;
}

export default function NavLink({ linkName, route }: NavLinkProps) {
  return (
    <Link
      href={route}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {linkName}
    </Link>
  );
}
