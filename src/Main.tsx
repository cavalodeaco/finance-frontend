import { AppShell } from "@mantine/core";
import { NavbarNested } from "./NavbarNested";

export default function Main() {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarNested />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <h1>Hello world!</h1>
    </AppShell>
  );
}
