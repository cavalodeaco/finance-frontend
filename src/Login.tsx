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

interface LoginFormValues {
  email: string;
  password: string;
}

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
        /^\S+@\S+$/.test(val) ? null : "Should be a valid e-mail address",
      password: (val) =>
        val.length <= 6
          ? "Your password is at least 6 characters long"
          : null,
    },
  });

  const handleSubmit = async (values: LoginFormValues) => {
    setOverlay(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_ADDRESS}/login`,
        {
          method: "POST",
          body: JSON.stringify({
            user: values.email,
            password: values.password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      switch (response.status) {
        case 200:
          const data = await response.json();
          setAuth(data.message);
          setError("");
          break;
        case 400:
          setError("Check your e-mail and password and try again.");
          break;
        default:
          throw new Error("failed to login");
      }
    } catch (err) {
      setError(
        "Something went wrong, check your internet connection and try again."
      );
      throw err;
    } finally {
      setOverlay(false);
    }
  };

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
            label="Restrict area - Finance"
            labelPosition="center"
            my="lg"
          />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              {error && (
                <Alert
                  icon={<AlertCircle size={16} />}
                  title="Authentication fail"
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
                label="Password"
                placeholder="******"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={form.errors.password}
              />
            </Stack>
            <Group position="apart" mt="xl">
              <Button type="submit">Enter</Button>
            </Group>
          </form>
        </Paper>
      </div>
    </Box>
  );
}
