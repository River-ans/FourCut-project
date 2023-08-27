const themeColor = [{ color: "pink" }, { color: "blue" }];

export const getThemes = () => {
  return themeColor;
};

export const getTheme = (themeId) => {
  const theme = themeColor.find((t) => t.color === themeId);
  return theme ? theme.color : null;
};
