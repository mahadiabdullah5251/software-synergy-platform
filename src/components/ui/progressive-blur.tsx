
import { cn } from "@/lib/utils"

export const ProgressiveBlur = ({
  className,
  direction = "right",
  blurIntensity = 1,
}: {
  className?: string
  direction?: "left" | "right"
  blurIntensity?: number
}) => {
  return (
    <div
      className={cn("z-10", className)}
      style={{
        background:
          direction === "right"
            ? `linear-gradient(to right, transparent, rgba(var(--background-rgb), ${blurIntensity}))`
            : `linear-gradient(to left, transparent, rgba(var(--background-rgb), ${blurIntensity}))`,
      }}
    />
  )
}
