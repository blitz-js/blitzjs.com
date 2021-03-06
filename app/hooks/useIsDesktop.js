import {useMedia} from "@/hooks/useMedia"

export const useIsDesktop = () => {
  const matches = useMedia("(min-width: 768px)")
  return matches
}
