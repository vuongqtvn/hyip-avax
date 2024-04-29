import React, { Fragment, useEffect } from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useRouter } from "next/router";
import { useAuth } from "@/providers/auth-provider";
import { Loading } from "../common/loading";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!isAuth && !loading) {
      router.replace("/auth/login");
    }
  }, [isAuth, loading]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isAuth) return <div>{children}</div>;

  return (
    <Fragment>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
          {children}
        </main>
      </div>
    </Fragment>
  );
};
