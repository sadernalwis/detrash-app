import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recy - App",
  description:
    "Let's end waste pollution at its source. Let's transform how we think about trash and recycling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = cookies().get("Next-Locale")?.value || "en";

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
