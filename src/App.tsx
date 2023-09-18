import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useThemeDetector } from "./utils/useThemeDetector";
import Login from "./Login";
import Main from "./Main";

function App() {
  document.title = "Finance";
  const isDarkTheme = useThemeDetector();
  const [auth, setAuth] = useLocalStorage({ key: "auth" });

  return (
    <MantineProvider
      theme={{ colorScheme: isDarkTheme ? "dark" : "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      {auth ? <Main /> : <Login setAuth={setAuth} />}
    </MantineProvider>
  );
}

export default App;
