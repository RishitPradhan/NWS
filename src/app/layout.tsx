import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Wave Studios - Where Sound Becomes Art",
  description: "Experience the pinnacle of audio engineering and creative production in our state-of-the-art cinematic studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-bg">
        {children}
        {/* Custom cursor markup */}
        <div className="cursor-dot" id="cursor-dot" />
      </body>
    </html>
  );
}
