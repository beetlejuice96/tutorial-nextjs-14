import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-orange-500 py-4">
      <div className="navbar px-8  max-w-6xl mx-auto flex-col sm:flex-row">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            Logo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {ROUTES.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="capitalize hover:text-orange-700"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
