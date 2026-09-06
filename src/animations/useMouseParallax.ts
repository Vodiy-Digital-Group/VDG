import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export const useMouseParallax = <T extends HTMLElement>(scope: RefObject<T>, enabled = true) => {
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const surface = scope.current;
      const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
      if (!surface || !enabled || reducedMotion || !precisePointer.matches) return;

      const layers = gsap.utils.toArray<HTMLElement>("[data-parallax-depth]");
      const movers = layers.map((layer) => {
        const depth = Number(layer.dataset.parallaxDepth ?? 1);
        return {
          x: gsap.quickTo(layer, "x", { duration: 0.8, ease: "power3.out" }),
          y: gsap.quickTo(layer, "y", { duration: 0.8, ease: "power3.out" }),
          depth,
        };
      });

      const tilters = gsap.utils.toArray<HTMLElement>("[data-parallax-tilt]").map((layer) => ({
        rotateX: gsap.quickTo(layer, "rotationX", { duration: 0.9, ease: "power3.out" }),
        rotateY: gsap.quickTo(layer, "rotationY", { duration: 0.9, ease: "power3.out" }),
      }));
      const glow = surface.querySelector<HTMLElement>("[data-cursor-glow]");
      const glowX = glow ? gsap.quickTo(glow, "x", { duration: 0.75, ease: "power3.out" }) : null;
      const glowY = glow ? gsap.quickTo(glow, "y", { duration: 0.75, ease: "power3.out" }) : null;
      const repellers = gsap.utils.toArray<HTMLElement>("[data-repel]").map((element) => ({
        element,
        x: gsap.quickTo(element, "x", { duration: 0.48, ease: "power3.out" }),
        y: gsap.quickTo(element, "y", { duration: 0.48, ease: "power3.out" }),
        scale: gsap.quickTo(element, "scale", { duration: 0.32, ease: "power2.out" }),
        center: { x: 0, y: 0 },
      }));
      let surfaceRect = surface.getBoundingClientRect();

      const measure = () => {
        surfaceRect = surface.getBoundingClientRect();
        repellers.forEach((repeller) => {
          const rect = repeller.element.getBoundingClientRect();
          repeller.center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        });
      };
      measure();

      const move = (event: PointerEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        movers.forEach((mover) => {
          mover.x(x * mover.depth * 18);
          mover.y(y * mover.depth * 14);
        });
        tilters.forEach((tilter) => {
          tilter.rotateX(y * -4.5);
          tilter.rotateY(x * 6);
        });
        glowX?.(event.clientX - surfaceRect.left);
        glowY?.(event.clientY - surfaceRect.top);
        repellers.forEach((repeller) => {
          const dx = repeller.center.x - event.clientX;
          const dy = repeller.center.y - event.clientY;
          const distance = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - distance / 170);
          const force = influence * 34;
          repeller.x(distance ? (dx / distance) * force : 0);
          repeller.y(distance ? (dy / distance) * force : 0);
          repeller.scale(1 + influence * 0.035);
        });
      };

      const reset = () => movers.forEach((mover) => {
        mover.x(0);
        mover.y(0);
      });

      const resetReactiveLayers = () => {
        reset();
        tilters.forEach((tilter) => {
          tilter.rotateX(0);
          tilter.rotateY(0);
        });
        repellers.forEach((repeller) => {
          repeller.x(0);
          repeller.y(0);
          repeller.scale(1);
        });
      };

      surface.addEventListener("pointermove", move, { passive: true });
      surface.addEventListener("pointerenter", measure);
      surface.addEventListener("pointerleave", resetReactiveLayers);
      window.addEventListener("resize", measure, { passive: true });
      return () => {
        surface.removeEventListener("pointermove", move);
        surface.removeEventListener("pointerenter", measure);
        surface.removeEventListener("pointerleave", resetReactiveLayers);
        window.removeEventListener("resize", measure);
      };
    },
    { scope, dependencies: [enabled, reducedMotion] },
  );
};
