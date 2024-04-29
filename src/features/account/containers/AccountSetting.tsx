import React from "react";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Heading } from "@/components/common/heading";

const AccountSetting = () => {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <Heading title="Account setting" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <div className="mt-1">
                <Input defaultValue="John Doe" id="name" type="text" />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <div className="mt-1">
                <Input
                  defaultValue="john@example.com"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="profile-picture"
              >
                Profile Picture
              </label>
              <div className="mt-1 flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change</Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Security</h2>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="current-password"
              >
                Current Password
              </label>
              <div className="mt-1">
                <Input id="current-password" type="password" />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="new-password"
              >
                New Password
              </label>
              <div className="mt-1">
                <Input id="new-password" type="password" />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch id="two-factor-auth" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Notifications
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive updates and notifications via email.
                </p>
              </div>
              <Switch defaultChecked id="email-notifications" />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-8 flex justify-end">
        <Button variant="outline" className="mr-4">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </div>
    </main>
  );
};

export default AccountSetting;
