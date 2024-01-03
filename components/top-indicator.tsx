"use client"

import { useWindowScroll } from "@uidotdev/usehooks"

import { Icons } from "./icons"

export function TopIndicator() {
  const [{ x, y }, scrollTo] = useWindowScroll()

  if (y != null && y > 100) {
    return (
      <div
        className="w-12 h-12 rounded-full fixed bottom-5 right-5 bg-blue-500 cursor-pointer justify-center items-center flex transition-colors hover:bg-blue-600 z-50"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <Icons.arrowUp className="w-6 h-6 text-white " />
      </div>
    )
  } else {
    return null
  }
}
