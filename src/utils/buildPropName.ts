const system = "sketch-box";

export const buildPropName = (component: string, prop: string) => {
  const kebabProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return `--${system}-${component}-${kebabProp}`;
};
