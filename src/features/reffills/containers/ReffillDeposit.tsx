import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { columns } from "../components/columns";
import { useDeposit } from "../hooks/useDeposit";

const ReffillDeposit = () => {
  const { data, loading } = useDeposit();

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading title="Nạp tiền" />
        </div>
        <Separator />
        <div className="grid lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Deposit History</CardTitle>
              <CardDescription>
                Your most recent deposit requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={data} />
            </CardContent>
          </Card>
          <div className="space-y-4 sticky">
            <Card>
              <CardHeader>
                <CardTitle>Request Deposit</CardTitle>
                <CardDescription>
                  Enter the amount you would like to deposit and your bank
                  account details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex w-full items-center space-x-2">
                  <Input type="email" placeholder="nhập số USDT cần nạp" />
                  <Button type="submit">Nạp tiền</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>
                  Vui lòng nhập đúng số tiền hệ thống yêu cầu để giao dịch được
                  xử lý tự động.
                </CardDescription>
                <CardDescription>
                  Please enter the correct amount required by the system for the
                  transaction to be processed automatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2">
                  <img src="/payment1.png" />
                  <img src="/payment2.png" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReffillDeposit;
