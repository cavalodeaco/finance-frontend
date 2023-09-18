import { Navbar, ScrollArea, createStyles, rem } from "@mantine/core";
import { IconTablePlus } from "@tabler/icons-react";
import { LinksGroup } from "./NavbarLinksGroup";
import { UserButton } from "./UserButton";

const data = [
  { label: "New Record", icon: IconTablePlus },
  // { // example of nested links
  //   label: 'Market news',
  //   icon: IconNotes,
  //   initiallyOpened: true,
  //   links: [
  //     { label: 'Overview', link: '/' },
  //     { label: 'Forecasts', link: '/' },
  //     { label: 'Outlook', link: '/' },
  //     { label: 'Real time', link: '/' },
  //   ],
  // },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    padding: theme.spacing.md,
    paddingBottom: /iPad|iPhone|iPod/.test(navigator.userAgent)
      ? `calc(${theme.spacing.xl} * 2 + 60px)`
      : 0,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested({ openedMenu }: { openedMenu: boolean }) {
  const { classes } = useStyles();
  const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!openedMenu}
      width={{ base: 300 }}
      height={`calc(100vh - 60px)`}
      className={classes.navbar}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
