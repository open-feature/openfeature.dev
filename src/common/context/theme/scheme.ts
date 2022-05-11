import { Scheme } from "./types";
import { changeFavicon } from "./icon";

export const toggleScheme = (darkMode: boolean) => {
  const body = document.querySelector("body");
  body!.classList.remove(darkMode ? Scheme.LIGHT : Scheme.DARK);
  body!.classList.add(darkMode ? Scheme.DARK : Scheme.LIGHT);
  changeFavicon(darkMode);
};
