import Link from "next/link";
import React from "react";

export default function Menubars({ title, address, Icon }) {
  return (
    <div>
      <Link href={address}>
        <Icon className="text-2xl sm:hidden hover:text-amber-500 transition-0.3s" />
        <p className="text-lg font-semibold uppercase hidden sm:inline tittle">
          {title}
        </p>
      </Link>
    </div>
  );
}
