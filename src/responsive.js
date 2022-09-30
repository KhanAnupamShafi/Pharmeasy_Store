const sizes = {
  xs: "320px",
  sm: "595px",
  md: "600px",
  lg: "1200px",
  xl: "1440px",
  xxl: "2560px",
};

export const devices = {
  mobile: `(max-width: ${sizes.sm})`,
  laptop: `(min-width: ${sizes.md}) and (max-width: ${sizes.lg})`,
  desktop: `(min-width: ${sizes.xl})`,
};
