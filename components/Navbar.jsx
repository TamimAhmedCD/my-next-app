import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const authenticated = await isAuthenticated();

  return (
    <nav className="p-4 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {authenticated ? (
            <>
              {/* Profile Link */}
              <Link href="/profile">
                <Button variant="ghost" className="text-sm font-medium">
                  Profile
                </Button>
              </Link>

              {/* Dropdown Menu for Authenticated User */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-sm font-medium">
                    {user?.first_name || "User"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogoutLink>
                      <button className="w-full text-left">Log Out</button>
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {/* Login Button */}
              <LoginLink postLoginRedirectURL="/profile">
                <Button variant="outline">Sign In</Button>
              </LoginLink>

              {/* Register Button */}
              <RegisterLink postLoginRedirectURL="/profile">
                <Button variant="default">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
