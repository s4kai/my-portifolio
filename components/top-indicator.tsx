"use client"

import { useWindowScroll } from "@uidotdev/usehooks"

import { Icons } from "./icons"

export function TopIndicator() {
  const [{ x, y }, scrollTo] = useWindowScroll()

  if (y != null && y > 100) {
    return (
      <div
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500 transition-colors hover:bg-blue-600"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <Icons.arrowUp className="h-6 w-6 text-white " />
      </div>
    )
  } else {
    return null
  }
}
