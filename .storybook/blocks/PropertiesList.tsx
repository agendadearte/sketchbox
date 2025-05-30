import { buildPropName } from "../../src/utils/buildPropName";

type Props = {
  component: string;
  props: { [key: string]: { [key: string]: string | number } };
};

const buildCustomProperties = ({ component, props }: Props) => {
  const customProperties: { name: string; fallback: string }[] = [];
  Object.entries(props).map(([element]) => {
    Object.entries(props[element]).map(([cssProp, cssValue]) => {
      customProperties.push({
        name: buildPropName(component, element, cssProp),
        fallback: `${cssValue}`,
      });
    });
  });
  return customProperties;
};

export const PropertiesList = ({ component, props }: Props) => (
  <table style={{ width: "100%" }}>
    <thead style={{ textAlign: "left" }}>
      <tr>
        <th style={{ width: "50%" }}>Name</th>
        <th>Fallback</th>
      </tr>
    </thead>
    <tbody>
      {buildCustomProperties({ component, props }).map((prop) => (
        <tr key={prop.name}>
          <td style={{ whiteSpace: "nowrap" }}>{prop.name}</td>
          <td>{prop.fallback}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
