import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { RefObject, useEffect } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useClickOutside = (
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
  addEventListener = true,
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback()
    }
  }

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}