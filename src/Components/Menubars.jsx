import Link from "next/link";
import React from "react";

export default function Menubars({ title, address, Icon }) {
  return (
    <div>
      <Link href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="text-lg font-semibold uppercase hidden sm:inline tittle">
          {title}
        </p>
      </Link>
    </div>
  );
}
