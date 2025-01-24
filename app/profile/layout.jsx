import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?post_login_redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fprofile");
  }

  return <div>{children}</div>;
}
