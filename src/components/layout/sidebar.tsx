import { NavItems } from "@/components/constants/side-nav";
import { SideNav } from "@/components/layout/side-nav";
import { useState } from "react";

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const { logout } = useAuth();

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r pt-20 md:flex md:flex-col`,
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]",
        className
      )}
    >
      <BsArrowLeftShort
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4 flex-1">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SideNav
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
              items={NavItems}
            />
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <button
          onClick={logout}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative w-full flex h-12 justify-start gap-x-3 !mt-2"
          )}
        >
          <LogOut className={cn("h-5 w-5")} />
          <div
            className={cn(
              "absolute left-12 text-base duration-200",
              !isOpen &&
                "text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
            )}
          >
            Logout
          </div>
        </button>
      </div>
    </nav>
  );
}
