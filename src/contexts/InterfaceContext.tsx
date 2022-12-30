import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface InterfaceContextProviderProps {
  children: ReactNode;
}

interface InterfaceContextProps {
  isDarkMode: boolean;
  isContrastMode: boolean;
  fontScale: number;
  toggleDarkMode: () => void;
  toggleContrastMode: () => void;
  changeFontScale: (scale: number) => void;
  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;
  setIsLayoutEditable: Dispatch<SetStateAction<boolean>>;
}

export const InterfaceContext = createContext({} as InterfaceContextProps);

export const InterfaceContextProvider = ({
  children,
}: InterfaceContextProviderProps) => {
  const page = document.documentElement;
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const persisted = JSON.parse(localStorage.getItem("preferences") || "{}");

  const [isDarkMode, setIsDarkMode] = useState(
    persisted ? persisted.isDarkMode : browserTheme.matches,
  );

  const [isContrastMode, setIsContrastMode] = useState(
    persisted.isContrastMode || false,
  );

  const [fontScale, setFontScale] = useState(persisted.fontScale || 1);
  const [isLayoutEditable, setIsLayoutEditable] = useState(false);

  const stopTransition = () => {
    page.classList.add("no-transition");
    setTimeout(() => page.classList.remove("no-transition"), 100);
  };

  const savePreferences = () => {
    localStorage.setItem(
      "preferences",
      JSON.stringify({
        isDarkMode,
        isContrastMode,
        fontScale,
      }),
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    stopTransition();
  };

  const toggleContrastMode = () => {
    setIsContrastMode(!isContrastMode);
    page.classList.toggle("contrast");
  };

  const changeFontScale = (scale: number) => {
    setFontScale(scale);
    stopTransition();
  };

  const toggleLayoutEditable = () => {
    setIsLayoutEditable(!isLayoutEditable);
  };

  useEffect(() => {
    page.style.setProperty("--font-scale", fontScale);
    page.dataset.ratio = `${window.devicePixelRatio}`;
    savePreferences();

    window.addEventListener("resize", () => setIsLayoutEditable(false));
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
        stopTransition();
        savePreferences();
      });
  }, [isDarkMode, isContrastMode, fontScale, window.devicePixelRatio]);

  return (
    <InterfaceContext.Provider
      value={{
        isDarkMode,
        isContrastMode,
        fontScale,
        toggleDarkMode,
        toggleContrastMode,
        changeFontScale,
        isLayoutEditable,
        toggleLayoutEditable,
        setIsLayoutEditable,
      }}
    >
      {children}
    </InterfaceContext.Provider>
  );
};

export const useInterfaceContext = () => useContext(InterfaceContext);
