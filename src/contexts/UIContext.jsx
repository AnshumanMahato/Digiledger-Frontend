import { createContext } from "react";

const UIContext = createContext(null);

const images = require.context("../assets/", true);
const imagePairs = images.keys().map((image) => {
  const key = image.split("/").pop();
  const value = images(image);

  return [key, value];
});

const avatars = new Map(imagePairs);

function UIProvider({ children }) {
  const values = { avatars };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
}

export { UIProvider };
export default UIContext;
