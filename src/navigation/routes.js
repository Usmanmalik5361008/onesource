import { AuthLayout, MainLayout } from "layouts";

import { SigninPage, AddEmployee, Staff } from "pages";

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
      path: "app",
      children: [
        {
          path: "reosurce/staff",
          element: <Staff />,
        },
        {
          path: "reosurce/staff/add",
          element: <AddEmployee />,
        },
      ],
    },
  ];
};

export default getRoutes;
