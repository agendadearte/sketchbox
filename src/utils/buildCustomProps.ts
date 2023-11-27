import { buildPropName } from "@/utils/buildPropName";

export const buildCustomProps = (
  component: string,
  element: string,
  cssProps: { [key: typeof element]: { [key: string]: string | number } },
) => {
  const elementCss = cssProps[element];
  const props: { [key: keyof typeof elementCss]: string } = {};

  if (!elementCss) return props;

  Object.keys(elementCss).forEach(
    (key) =>
      (props[key] = `var(${buildPropName(component, element, key)}, ${
        elementCss[key]
      })`),
  );

  return props;
};
