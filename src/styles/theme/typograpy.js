import fonts from "./fonts";

const typography = {
  h1: `
      font-size: ${fonts.sizes.xl};
      line-height: ${fonts.lineHeights.medium};
      font-weight: ${fonts.weights.bold};
    `,
  h2: `
      font-size: ${fonts.sizes.lg};
      line-height: ${fonts.lineHeights.medium};
      font-weight: ${fonts.weights.bold};
    `,
  h3: `
      font-size: ${fonts.sizes.md};
      line-height: ${fonts.lineHeights.medium};
      font-weight: ${fonts.weights.bold};
    `,
  body: {
    large: {
      regular: `
          font-size: ${fonts.sizes.base};
          line-height: ${fonts.lineHeights.medium};
          font-weight: ${fonts.weights.regular};
        `,
      semibold: `
          font-size: ${fonts.sizes.base};
          line-height: ${fonts.lineHeights.medium};
          font-weight: ${fonts.weights.semibold};
        `,
    },
    small: `
        font-size: ${fonts.sizes.sm};
        line-height: ${fonts.lineHeights.medium};
        font-weight: ${fonts.weights.regular};
      `,
  },
  caption: `
      font-size: ${fonts.sizes.xs};
      line-height: ${fonts.lineHeights.normal};
      font-weight: ${fonts.weights.regular};
    `,
};

export default typography;
