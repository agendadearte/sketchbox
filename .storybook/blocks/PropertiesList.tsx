import { ResetWrapper } from "@storybook/components";
import { buildPropName } from "../../src/utils/buildPropName";

const buildCustomProperties = (obj: object) =>
  Object.entries(obj).map(([key, value]) => ({
    name: buildPropName("card", key),
    fallback: value,
  }));

export const PropertiesList = ({ props }) => (
  <ResetWrapper>
    <table style={{ width: "100%" }}>
      <thead style={{ textAlign: "left" }}>
        <tr>
          <th style={{ width: "50%" }}>Name</th>
          <th>Fallback</th>
        </tr>
      </thead>
      <tbody>
        {buildCustomProperties(props).map((prop) => (
          <tr key={prop.name}>
            <td style={{ whiteSpace: "nowrap" }}>{prop.name}</td>
            <td>{prop.fallback}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </ResetWrapper>
);
