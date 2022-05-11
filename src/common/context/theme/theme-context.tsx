import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "use-color-scheme";
import { DEFAULT_THEME_STATE } from "./constants";
import { toggleScheme } from "./scheme";

export interface ThemeContextModel {
  darkScheme?: boolean;
}

type ThemeContextType = {
  themeContext: ThemeContextModel;
  updateThemeContext: (updateData: Partial<ThemeContextModel>) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeContext: DEFAULT_THEME_STATE,
  updateThemeContext: () => null,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { scheme } = useColorScheme();
  const [themeContext, setThemeContext] = useState<ThemeContextModel>({
    ...DEFAULT_THEME_STATE,
    darkScheme: scheme === "dark",
  });

  // Toggle scheme on context change
  useEffect(() => {
    toggleScheme(themeContext.darkScheme!);
  }, [themeContext.darkScheme]);

  function updateThemeContext(updateData: Partial<ThemeContextModel>) {
    setThemeContext((context) => {
      return { ...context, ...updateData };
    });
  }

  return (
    <ThemeContext.Provider value={{ themeContext, updateThemeContext }}>
      {children}
    </ThemeContext.Provider>
  );
};
