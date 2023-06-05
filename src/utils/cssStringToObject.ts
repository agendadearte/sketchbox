export const cssStringToObject = (styles: string) => {
  const groupsRegExp = new RegExp("(..+?})", "g");
  const stylesGroups = styles.match(groupsRegExp);

  const stylesObject: { [key: string]: any } = {};

  if (!stylesGroups) return stylesObject;

  stylesGroups.forEach((style) => {
    style = style.substring(1);
    const [styleClass, styleValues] = style.split(new RegExp("[{}]", "g"));

    const valuesGroup: { [key: string]: string } = {};
    styleValues.split(";").forEach((value) => {
      const [valueKey, valueStyle] = value.split(":");
      valuesGroup[valueKey] = valueStyle;
    });
    stylesObject[styleClass] = valuesGroup;
  });

  return stylesObject;
};
