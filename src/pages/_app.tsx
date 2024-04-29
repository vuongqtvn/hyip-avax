import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Layout } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/auth-provider";
import { ModalProvider } from "@/providers/modal-provider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
