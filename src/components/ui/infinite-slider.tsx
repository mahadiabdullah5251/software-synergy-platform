
"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const InfiniteSlider = ({
  className,
  children,
  duration = 50,
  gap = 20,
}: {
  className?: string
  children: React.ReactNode
  duration?: number
  gap?: number
}) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [repeats, setRepeats] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current && contentRef.current) {
      const slider = sliderRef.current
      const content = contentRef.current
      setSliderWidth(slider.offsetWidth)
      setContentWidth(content.scrollWidth)
      
      // Calculate how many times to repeat content to fill slider
      const repeatsNeeded = Math.ceil(slider.offsetWidth / content.scrollWidth) + 1
      setRepeats(repeatsNeeded)
    }
  }, [])

  const keyframes = `
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-${contentWidth}px - ${gap}px));
      }
    }
  `

  return (
    <div
      ref={sliderRef}
      className={cn("relative overflow-hidden", className)}
    >
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <div
        ref={contentRef}
        className="flex animate-none"
        style={{
          animation: contentWidth > 0 ? `scroll ${duration}s linear infinite` : "none",
          gap: `${gap}px`,
        }}
      >
        {children}
        {contentWidth > 0 &&
          Array.from({ length: repeats }).map((_, index) => (
            <div key={index} className="flex shrink-0" style={{ gap: `${gap}px` }}>
              {children}
            </div>
          ))}
      </div>
    </div>
  )
}
