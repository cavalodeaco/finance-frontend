import { useThemeDetector } from "./utils/useThemeDetector";

function App() {
  document.title = "Controle de gastos";
  const isDarkTheme = useThemeDetector();
  return (
    
    // <MantineProvider
    //   theme={{ ...theme, colorScheme: "dark" }} // isDarkTheme ? "dark" : "light"
    //   withGlobalStyles
    //   withNormalizeCSS
    // >
      
    // </MantineProvider>
  );
}

export default App;
