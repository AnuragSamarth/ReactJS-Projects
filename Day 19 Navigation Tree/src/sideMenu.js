export const sideMenu = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Details",
    to: "details",
    childern: [
      {
        label: "Location",
        to: "location",
      },
    ],
  },
  {
    id: 3,
    label: "Setting",
    to: "/setting",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        childern: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];
