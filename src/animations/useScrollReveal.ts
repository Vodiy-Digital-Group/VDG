import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsap";
import { motion } from "./motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type RevealOptions = {
  start?: string;
  y?: number;
  stagger?: number;
};

export const useScrollReveal = <T extends HTMLElement>(
  scope: RefObject<T>,
  options: RevealOptions = {},
) => {
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const groups = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      if (reducedMotion) {
        gsap.set(groups.flatMap((group) => [group, ...group.querySelectorAll("[data-reveal-item]")]), {
          autoAlpha: 1,
          clearProps: "transform",
        });
        return;
      }

      groups.forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        const targets = children.length ? [...children] : [group];

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: options.y ?? motion.revealY },
          {
            autoAlpha: 1,
            y: 0,
            duration: motion.duration,
            ease: motion.ease,
            stagger: options.stagger ?? motion.stagger,
            scrollTrigger: {
              trigger: group,
              start: options.start ?? "top 80%",
              once: true,
            },
          },
        );
      });
    },
    { scope, dependencies: [reducedMotion, options.start, options.stagger, options.y] },
  );
};
