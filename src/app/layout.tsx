import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STARLY | AI Systems Architect",
  description: "Architecting AI-native systems and motion-rich interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
