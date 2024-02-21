type Route = {
  path: string;
  name: string;
};

export const ROUTES: Route[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/client", name: "Client" },
  { path: "/drinks", name: "Drinks" },
  { path: "/prisma-example", name: "Prisma-example" },
  { path: "/query", name: "Query" },
  { path: "/tasks", name: "Tasks" },
];
