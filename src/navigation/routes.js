import { AuthLayout, MainLayout } from "layouts";

import { SigninPage, AddEmployee, Staff, AccountSettings } from "pages";

const getRoutes = () => {
  return [
    {
      element: <AuthLayout />,
      path: "/auth/signin",
      children: [
        {
          index: true,
          element: <SigninPage />,
        },
      ],
    },
    {
      element: <MainLayout />,
      path: "/",
      children: [
        {
          path: "reosurce/staff",
          element: <Staff />,
        },
        {
          path: "reosurce/staff/add",
          element: <AddEmployee />,
        },
        {
          path: "settings",
          element: <AccountSettings />,
        },
      ],
    },
  ];
};

export default getRoutes;
