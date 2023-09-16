import {
  Alert,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { AlertCircle } from "tabler-icons-react";

export default function Login({ setAuth }: { setAuth: Function }) {
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

  const doLogin = async () => {
    // @TODO implement doLogin
    console.warn("Not implemented yet!");
    setAuth('notreallyatoken');
  }

  return (
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
          <form onSubmit={form.onSubmit(doLogin)}>
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
  );
}
