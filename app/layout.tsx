import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  openGraph: {
    title: "Bitcoin Association Switzerland",
    url: "https://www.bitcoinassociation.ch",
    type: "website",
    images: [
      {
        url: "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/t/59062102be659450876bfb81/1493573890585/logo_with_name.png?format=1500w",
        width: 227,
        height: 237,
      },
    ],
  },
  twitter: {
    title: "Bitcoin Association Switzerland",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486215439062-YZIDK4S304980M1UUWGH/favicon.ico?format=100w" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
