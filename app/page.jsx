import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if(await isAuthenticated()) {
    redirect('/dashboard')
  }
  return (
    <div className="flex items-center justify-center mt-24">
      <h1 className="text-4xl">Home</h1>
    </div>
  );
}
