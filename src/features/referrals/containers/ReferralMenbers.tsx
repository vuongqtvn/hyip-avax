import { Plus } from "lucide-react";

import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Separator } from "@/components/ui/separator";
import { columns } from "../components/columns";
import { useReferralMembers } from "../hooks/useReferralMembers";

const ReferralMenbers = () => {
  const { data, loading } = useReferralMembers();

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading title="Danh sách thành viên" />
          <Button onClick={() => {}}>
            <Plus className="mr-2 h-4 w-4" /> Thêm mới
          </Button>
        </div>
        <Separator />
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ReferralMenbers;
