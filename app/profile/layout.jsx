import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?post_login_redirect_url=https://my-next-bloggtt.vercel.app/profile");
  }

  return <div>{children}</div>;
}
