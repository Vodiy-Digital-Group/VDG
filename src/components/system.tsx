import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Chip = ({ children, live = false, className, ...props }: HTMLAttributes<HTMLSpanElement> & { children: ReactNode; live?: boolean }) => (
  <span className={cn("system-chip", className)} {...props}>{live && <i className="system-chip__dot" aria-hidden="true" />}{children}</span>
);

export const SystemCard = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => <div className={cn("system-card", className)} {...props} />;

export const MetricStat = ({ value, label }: { value: string; label: string }) => (
  <div className="metric-stat"><strong>{value}</strong><span>{label}</span><i aria-hidden="true" /></div>
);

export const SystemList = ({ children, className, ...props }: HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("system-list", className)} {...props}>{children}</ul>
);

export const SectionFrame = ({ index, title, children, className }: { index: string; title: string; children?: ReactNode; className?: string }) => (
  <div className={cn("section-frame", className)}>
    <div><p className="section-label text-[var(--text-muted)]">{index}</p><h2>{title}</h2></div>
    {children && <div className="section-frame__support">{children}</div>}
  </div>
);
