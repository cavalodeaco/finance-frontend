import {
  Alert,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  MantineProvider,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { AlertCircle } from "tabler-icons-react";
import { useThemeDetector } from "./utils/useThemeDetector";
import { useState } from "react";
import { useForm } from "@mantine/form";

function App() {
  document.title = "Controle de gastos";
  const isDarkTheme = useThemeDetector();
  const [overlay, setOverlay] = useState(false);
  const [error, setError] = useState<string>("");
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Informe seu endereço de e-mail",
      password: (val) =>
        val.length <= 6
          ? "Sua chave de acesso possui pelo menos 6 caracteres"
          : null,
    },
  });
  return (
    <MantineProvider
      theme={{ colorScheme: isDarkTheme ? "dark" : "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 420,
          paddingTop: 40,
        }}
      >
        <div style={{ position: "relative" }}>
          <LoadingOverlay visible={overlay} overlayBlur={2} />
          <Paper radius="md" p="xl" withBorder>
            <Divider
              label="Acesso restrito - Controle de Gastos"
              labelPosition="center"
              my="lg"
            />
            <form onSubmit={form.onSubmit(() => alert("Not implemented yet!"))}>
              <Stack>
                {error && (
                  <Alert
                    icon={<AlertCircle size={16} />}
                    title="Falha de autenticação"
                    color="red"
                  >
                    {error}
                  </Alert>
                )}
                <TextInput
                  label="E-mail"
                  placeholder="jackson.teller@gmail.com"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email}
                />
                <PasswordInput
                  label="Chave de acesso"
                  placeholder="******"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={form.errors.password}
                />
              </Stack>
              <Group position="apart" mt="xl">
                <Button type="submit">Entrar</Button>
              </Group>
            </form>
          </Paper>
        </div>
      </Box>
    </MantineProvider>
  );
}

export default App;
