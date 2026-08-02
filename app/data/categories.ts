import { Server } from "lucide-react";
import { CloudIcon, WebIcon } from "@/public/icons";
import { ComponentType, createElement } from "react";

/**
 * The three top-level areas the site is organised around. Both the skills grid
 * and the projects carousel tab through the same set, so the keys, icons and
 * translation keys live here rather than being duplicated (and drifting) in
 * each component.
 */
export const CATEGORY_KEYS = ["backend", "frontend", "mlInfra"] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

/** Sized and coloured to match the SVGR tab icons, which carry their dimensions
 *  in the asset and hardcode the brand green (#0EAB00 === --color-accent). */
const ServerIcon = () =>
  createElement(Server, { size: 30, strokeWidth: 1.75, color: "var(--color-accent)" });

/** Icons render prop-less, so the tab row is agnostic about whether an entry is
 *  an SVGR-compiled asset or a lucide component. */
export const CATEGORY_META: Record<
  CategoryKey,
  { icon: ComponentType; labelKey: string }
> = {
  backend: { icon: ServerIcon, labelKey: "categories.backend" },
  frontend: { icon: WebIcon, labelKey: "categories.frontend" },
  mlInfra: { icon: CloudIcon, labelKey: "categories.mlInfra" },
};
