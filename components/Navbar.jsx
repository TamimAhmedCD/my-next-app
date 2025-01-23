import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="border-b h-[8vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl ">Logo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/dashboard">
          <h1 className="text-xl text-blue-600 hover:text-blue-900 ">
            Dashboard
          </h1>
        </Link>
        <Link href="/profile">
          <h1 className="text-xl text-blue-600 hover:text-blue-900 ">
            Profile
          </h1>
        </Link>
        <Link href="/settings">
          <h1 className="text-xl text-blue-600 hover:text-blue-900 ">
            Settings
          </h1>
        </Link>
        {(await isAuthenticated()) ? (
          <>
            {" "}
            <LogoutLink>
              {" "}
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                Log Out
              </button>
            </LogoutLink>
          </>
        ) : (
          <div className="flex items-center gap-x-5">
            <LoginLink postLoginRedirectURL="/dashboard">
              {" "}
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                Sign In
              </button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/dashboard">
              {" "}
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                Sign Up
              </button>
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
