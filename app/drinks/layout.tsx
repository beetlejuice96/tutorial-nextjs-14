import { NextPage } from "next";
import React from "react";

interface DrinksLayoutProps {
  children: React.ReactNode;
}

const DrinksLayout: NextPage<DrinksLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest drinks --typescript</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
