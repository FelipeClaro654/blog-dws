export const breakpoints = {
  desktop: "768px",
};

export const mediaQueries = {
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};

export const breakpoint = {
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  mobileOnly: `@media (max-width: 767px)`,
};
