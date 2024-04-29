import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";

const ReffillWithdraw = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Withdraw" />
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Request Withdrawal</CardTitle>
            <CardDescription>
              Enter the amount you would like to withdraw and your bank account
              details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" min="0" placeholder="$0.00" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account">Account</Label>
              <Input id="account" placeholder="Enter your account" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name on account</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="routing">Routing number</Label>
              <Input id="routing" placeholder="Enter your routing number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Account number</Label>
              <Input id="number" placeholder="Enter your account number" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Submit</Button>
          </CardFooter>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Balance</CardTitle>
              <CardDescription>Your current account balance.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-y-4">
              <div className="text-4xl font-semibold">$5,000.00</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
              <CardDescription>
                Your most recent withdrawal requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                <div className="flex items-center justify-between p-4">
                  <div>Withdrawal request</div>
                  <div className="font-medium">$500.00</div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>Withdrawal request</div>
                  <div className="font-medium">$250.00</div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>Withdrawal request</div>
                  <div className="font-medium">$1,000.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReffillWithdraw;
