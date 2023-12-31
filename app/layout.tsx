import { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Countries list",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <main className="min-h-screen bg-gray-50 dark:bg-veryDarkBlue">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
