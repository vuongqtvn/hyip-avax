"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserAvatar } from "@/components/layout/user-avatar";
import { User } from "@/types/user";
import { useAuth } from "@/providers/auth-provider";

type Props = {
  user: User;
};

export function UserNav({ user }: Props) {
  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} className="h-8 w-8 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-4 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.username && <p className="font-medium">{user.username}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm">{user.email}</p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant="outline" className="w-full" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
