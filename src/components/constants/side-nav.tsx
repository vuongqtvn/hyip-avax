import { NavItem } from "@/types/common";
import {
  BadgePercent,
  CircleDollarSign,
  HandCoins,
  Handshake,
  LayoutDashboard,
  Monitor,
  Newspaper,
  Notebook,
  Settings2,
  SquareUserRound,
  UserRound,
  UserRoundCog,
  Wallet,
} from "lucide-react";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "Hoa hồng",
    color: "text-orange-500",
    isChidren: true,
    icon: Handshake,
    href: "/referrals/general",
    children: [
      {
        title: "Tổng quan",
        icon: Settings2,
        color: "text-red-500",
        href: "/referrals/general",
      },
      {
        title: "Thành viên",
        icon: UserRound,
        color: "text-red-500",
        href: "/referrals/members",
      },
    ],
  },
  {
    title: "Nạp rút",
    color: "text-orange-500",
    isChidren: true,
    icon: Wallet,
    href: "/referrals/general",
    children: [
      {
        title: "Nạp tiền",
        icon: CircleDollarSign,
        color: "text-red-500",
        href: "/refills/deposit",
      },
      {
        title: "Rút tiền",
        icon: HandCoins,
        color: "text-red-500",
        href: "/refills/withdraw",
      },
    ],
  },
  {
    title: "Tài khoản",
    color: "text-orange-500",
    isChidren: true,
    icon: SquareUserRound,
    href: "/accounts",
    children: [
      {
        title: "Cài đặt",
        icon: UserRoundCog,
        color: "text-red-500",
        href: "/accounts",
      },
    ],
  },
  {
    title: "Quản trị",
    color: "text-orange-500",
    isChidren: true,
    icon: SquareUserRound,
    href: "/manages/accounts",
    children: [
      {
        title: "Tài khoản",
        icon: UserRoundCog,
        color: "text-red-500",
        href: "/manages/accounts",
      },
      {
        title: "Đầu tư",
        icon: HandCoins,
        color: "text-red-500",
        href: "/manages/investment",
      },
      {
        title: "Hoa hồng",
        icon: BadgePercent,
        color: "text-red-500",
        href: "/manages/referrals",
      },
      {
        title: "Hệ thống",
        icon: Monitor,
        color: "text-red-500",
        href: "/manages/system",
      },
    ],
  },
  {
    title: "Tin tức",
    color: "text-orange-500",
    isChidren: true,
    icon: Notebook,
    href: "/news",
    children: [
      {
        title: "Trang chủ",
        icon: Newspaper,
        color: "text-red-500",
        href: "/news",
      },
    ],
  },
];
