import type { ComponentType } from 'react';

type TechLogoProps = {
  /** The default (dark-theme) logo, an inlined SVG component. */
  Icon: ComponentType<{ className?: string }>;
  /** Optional dark-colored variant (served from /public) shown in light mode. */
  light?: string;
  /** Accessible name for the light <img> variant. */
  name?: string;
};

/**
 * Renders a technology logo with an optional light-mode override. Many brand
 * logos are near-white and disappear on the light background, so when a `light`
 * variant is supplied we render both and let the theme decide which is visible
 * (see `.logo-dark` / `.logo-light` in styles.css). The swap is CSS-driven so
 * there is no hydration flash.
 */
export default function TechLogo({ Icon, light, name }: TechLogoProps) {
  if (!light) return <Icon />;

  return (
    <>
      <Icon className="logo-dark" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-light" src={light} alt={name ?? ''} />
    </>
  );
}
