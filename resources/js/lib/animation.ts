"use client"

import { useEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationOptions = {
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "stagger"
  delay?: number
  duration?: number
  threshold?: number
  staggerChildren?: string
  staggerDelay?: number
  contentOnly?: boolean // New option to target only content elements
}

export const useScrollAnimation = (
  elementRef: RefObject<HTMLElement | null> | RefObject<HTMLDivElement | null>,
  options: AnimationOptions = {},
) => {
  const {
    animation = "fadeIn",
    delay = 0,
    duration = 0.8,
    threshold = 0.2,
    staggerChildren = ".animate-item",
    staggerDelay = 0.1,
    contentOnly = true, // Default to only animating content
  } = options

  useEffect(() => {
    // Early return if we're not in the browser or element doesn't exist
    if (typeof window === "undefined" || !elementRef.current) return

    const element = elementRef.current
    let tl: gsap.core.Timeline | undefined

    // Determine which elements to animate
    let elementsToAnimate: Element | Element[] | NodeListOf<Element>

    try {
      // Only proceed if we have a valid element to work with
      if (contentOnly) {
        // First try to find elements with animate-content class
        const contentElements = element.querySelectorAll(".animate-content")

        if (contentElements.length > 0) {
          elementsToAnimate = contentElements
        } else {
          // Fall back to common content elements if no specific classes found
          const fallbackElements = element.querySelectorAll(
            "h1, h2, h3, p, .card, button"
          )
          if (fallbackElements.length > 0) {
            elementsToAnimate = fallbackElements
          } else {
            // If no animatable elements are found, just use the main element
            elementsToAnimate = element
          }
        }
      } else {
        elementsToAnimate = element
      }

      // Only create animations if we have elements to animate
      if (!elementsToAnimate ||
         (elementsToAnimate instanceof NodeList && elementsToAnimate.length === 0) ||
         (Array.isArray(elementsToAnimate) && elementsToAnimate.length === 0)) {
        return
      }

      switch (animation) {
        case "fadeIn":
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: "play none none none",
            },
          })
          tl.fromTo(
            elementsToAnimate,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration, delay, stagger: contentOnly ? 0.1 : 0 },
          )
          break

        case "slideUp":
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: "play none none none",
            },
          })
          tl.fromTo(
            elementsToAnimate,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration, delay, stagger: contentOnly ? 0.1 : 0 },
          )
          break

        case "slideIn":
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: "play none none none",
            },
          })
          tl.fromTo(
            elementsToAnimate,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration, delay, stagger: contentOnly ? 0.1 : 0 },
          )
          break

        case "scale":
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: "play none none none",
            },
          })
          tl.fromTo(
            elementsToAnimate,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration, delay, stagger: contentOnly ? 0.1 : 0 },
          )
          break

        case "stagger": {
          // For stagger animation, we need to handle it differently
          let staggerElems: NodeListOf<Element>

          if (contentOnly) {
            // First try to find elements with animate-content class
            const contentElements = element.querySelectorAll(".animate-content")

            if (contentElements.length > 0) {
              staggerElems = contentElements
            } else {
              // Then try the specified stagger children
              staggerElems = element.querySelectorAll(staggerChildren)

              // If still no elements, fall back to common content elements
              if (staggerElems.length === 0) {
                staggerElems = element.querySelectorAll(
                  "h1, h2, h3, p, .card, button"
                )
              }
            }
          } else {
            // Use the specified stagger children
            staggerElems = element.querySelectorAll(staggerChildren)
          }

          if (staggerElems.length) {
            tl = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                start: `top bottom-=${threshold * 100}%`,
                toggleActions: "play none none none",
              },
            })
            tl.fromTo(staggerElems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration, stagger: staggerDelay, delay })
          }
          break
        }
      }
    } catch (error) {
      console.error("Animation error:", error)
    }

    return () => {
      try {
        if (tl) tl.kill()
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === element) {
            trigger.kill()
          }
        })
      } catch (error) {
        console.error("Error cleaning up animations:", error)
      }
    }
  }, [animation, delay, duration, elementRef, staggerChildren, staggerDelay, threshold, contentOnly])
}

export const useParallaxEffect = (
  elementRef: RefObject<HTMLElement | null> | RefObject<HTMLDivElement | null>,
  options: {
    speed?: number
    direction?: "up" | "down"
  } = {},
) => {
  const { speed = 0.5, direction = "up" } = options

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const yDirection = direction === "up" ? -1 : 1

    const parallaxEffect = gsap.to(element, {
      y: `${yDirection * 100 * speed}px`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      parallaxEffect.kill()
    }
  }, [elementRef, speed, direction])
}

export const useHeroAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    // Early return if we're not in the browser or element doesn't exist
    if (typeof window === "undefined" || !containerRef.current) return

    const container = containerRef.current
    let tl: gsap.core.Timeline | undefined

    try {
      // First try to find elements with animate-content class
      const contentElements = container.querySelectorAll(".animate-content")

      // If animate-content elements exist, use those
      if (contentElements.length > 0) {
        tl = gsap.timeline({ delay: 0.2 })
        tl.fromTo(
          contentElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        )
      } else {
        // Otherwise use the original approach but with safety checks
        const title = container.querySelector("h1")
        const subtitle = container.querySelector("p:first-of-type")
        const description = container.querySelector("p:nth-of-type(2)")
        const buttons = container.querySelectorAll(".hero-button")
        const decorations = container.querySelectorAll(".decoration")

        tl = gsap.timeline({ delay: 0.2 })

        // Only animate elements that exist
        if (decorations.length > 0) {
          tl.fromTo(
            decorations,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
            0
          )
        }

        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0.3
          )
        }

        if (subtitle) {
          tl.fromTo(
            subtitle,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0.5
          )
        }

        if (description) {
          tl.fromTo(
            description,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0.7
          )
        }

        if (buttons.length > 0) {
          tl.fromTo(
            buttons,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            0.9
          )
        }
      }
    } catch (error) {
      console.error("Hero animation error:", error)
    }

    return () => {
      try {
        if (tl) tl.kill()
      } catch (error) {
        console.error("Error cleaning up hero animation:", error)
      }
    }
  }, [containerRef])

  // Return an object with start and stop methods to fix TypeScript errors
  return {
    start: () => {
      // Animation starts automatically in the useEffect
    },
    stop: () => {
      // Cleanup happens in the useEffect return
    },
  }
}

