import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable:'--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "ImageGen",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={IBMPlex.variable}>{children}</body>
      </html>

      <ClerkProvider appearance={{
        variables: { colorPrimary: "#624cf5" }
      }}>
        <html lang="en">
          <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
