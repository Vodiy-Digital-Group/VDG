import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export const useCardTilt = <T extends HTMLElement>(scope: RefObject<T>) => {
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-tilt]");
      const cleanups = cards.map((card) => {
        const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power3.out" });
        const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power3.out" });
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          rotateX(y * -3);
          rotateY(x * 3);
        };
        const reset = () => {
          rotateX(0);
          rotateY(0);
        };
        card.addEventListener("pointermove", move, { passive: true });
        card.addEventListener("pointerleave", reset);
        return () => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", reset);
        };
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { scope, dependencies: [reducedMotion] },
  );
};
