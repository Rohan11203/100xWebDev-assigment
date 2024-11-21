import { useRef } from "react"

export const useDebounce = (orignalFn) => {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orignalFn, 300);
  }

  return fn
}