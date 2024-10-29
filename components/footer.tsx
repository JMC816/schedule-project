"use client";

import {
  CalendarDateRangeIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 flex w-full min-h-16 bg-neutral-700">
      <div
        className={`flex items-center justify-center w-full ${
          pathname === "/" ? "bg-neutral-500" : "bg-neutral-700"
        }`}
      >
        <Link href="/">
          <div className="flex flex-col items-center">
            <CalendarDateRangeIcon className="w-8 " />
            <span className="text-sm">할 일</span>
          </div>
        </Link>
      </div>
      <div
        className={`flex items-center justify-center w-full ${
          pathname === "/schedule" ? "bg-neutral-500" : "bg-neutral-700"
        }`}
      >
        <Link href="/schedule">
          <div className="flex flex-col items-center">
            <CalendarIcon className="w-8" />
            <span className="text-sm">캘린더</span>
          </div>
        </Link>
      </div>
      <div
        className={`flex items-center justify-center w-full ${
          pathname === "/set" ? "bg-neutral-500" : "bg-neutral-700"
        }`}
      >
        <Link href="/set">
          <div className="flex flex-col items-center">
            <Cog6ToothIcon className="w-8" />
            <span className="text-sm">설정</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
