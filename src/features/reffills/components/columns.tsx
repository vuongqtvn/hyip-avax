"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/types/user";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Thời gian",
  },
  {
    accessorKey: "email",
    header: "Mã giao dịch",
    cell(props) {
      return <div>{props.row.getValue("email")}</div>;
    },
  },
  {
    header: "Ngày đăng ký",
    cell(props) {
      return <div>$253</div>;
    },
  },
  {
    header: "Trạng thái",
    cell(props) {
      return <Badge className="bg-green-600 dark:text-white">success</Badge>;
    },
  },
];
