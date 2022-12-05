const head =
  typeof document !== "undefined"
    ? document.getElementsByTagName("head")[0]
    : null;

export const changeFavicon = (state: boolean) => {
  const lightIcon = "./favicons/favicon-light.svg";
  const darkIcon = "./favicons/favicon-dark.svg";

  const link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");

  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = state ? darkIcon : lightIcon;

  if (oldLink) {
    head!.removeChild(oldLink);
  }
  head!.appendChild(link);
};
