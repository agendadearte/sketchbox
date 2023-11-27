const system = "sketch-box";

export const buildPropName = (
  component: string,
  element: string,
  cssProp: string,
) => {
  const kebabProp = cssProp.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return `--${system}-${component}-${element}-${kebabProp}`;
};
