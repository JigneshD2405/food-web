import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Omnifood — Never cook again!",
  description:
    "Omnifood is ai powered food subscription that make you eat healthy again,365 days per year. It's tailored to your personal tastes and nutritional needs.",
  manifest: "/manifest.json", // Links your Android manifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`${rubik.variable}  ${rubik.className}`}>
        {children}
      </body>
    </html>
  );
}
