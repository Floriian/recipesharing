import { ProfileCardRoute } from "../types";

export const profileCardRoutes: ProfileCardRoute[] = [
  {
    title: "Edit profile",
    path: "/profile/edit",
    description: "Here you can edit your profile.",
    buttonTitle: "Edit your profile",
  },
  {
    title: "My recipes",
    path: "/profile/my-recipes",
    description: "List off all of your recipes.",
    buttonTitle: "See my recipes",
  },
];
