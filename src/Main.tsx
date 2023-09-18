import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Title,
  createStyles,
  rem,
  useMantineTheme
} from "@mantine/core";
import { useState } from "react";
import { NavbarNested } from "./NavbarNested";

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },
}));

export default function Main() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <AppShell
      padding="md"
      navbar={<NavbarNested openedMenu={openedMenu} />}
      header={
        <Header height={60} className={classes.header}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={openedMenu}
                onClick={() => setOpenedMenu((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Title order={2}>🏦 Finance</Title>
          </div>
        </Header>
      }
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
