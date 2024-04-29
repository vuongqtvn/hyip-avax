import { type AvatarProps } from "@radix-ui/react-avatar";
import { User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";

interface UserAvatarProps extends AvatarProps {
  user: User;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user?.avatar ? (
        <AvatarImage alt="Picture" src={user?.avatar} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.username}</span>
          <UserIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
