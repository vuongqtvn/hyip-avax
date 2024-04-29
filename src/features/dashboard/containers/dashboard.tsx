import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Invest } from "../components/invest";
import {
  Balance,
  DepositAmount,
  Insurance,
  ReferralAmount,
  ReferralNumber,
  Revenue,
} from "../components/statistical";
import { Transactions } from "../components/transactions";

const Dashboard = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2 space-x-4">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm shadow-sm transition-colors focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-gray-500 dark:focus:ring-gray-500"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Balance />
            <DepositAmount />
            <Revenue />
            <ReferralAmount />
            <ReferralNumber />
          </div>
          <div className="grid gap-4 lg:grid-cols-8 xl:grid-cols-10">
            <div className="xl:col-span-7 lg:col-span-5">
              <Transactions />
            </div>
            <div className="xl:col-span-3 lg:col-span-3 space-y-4">
              <Invest />
              <Insurance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
