"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/types/user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Tên",
  },
  {
    header: "Cấp độ",
    cell(props) {
      return <div>F0</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Ngày đăng ký",
  },
  {
    header: "Số tiền đầu tư",
    cell(props) {
      return <div>$253</div>;
    },
  },
  {
    header: "Lãi",
    cell(props) {
      return <div>0.1%</div>;
    },
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
