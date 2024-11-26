export const getFirstWord = (text: string) => {
  if (!text) return "";
  return text.split(" ")[0];
};
