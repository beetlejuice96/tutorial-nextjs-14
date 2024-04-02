import { NextPage } from "next";
import React from "react";

const SignInPage: NextPage<{ params: any }> = ({ params }) => {
  console.log(params);
  return <div>SignInPage</div>;
};

export default SignInPage;
