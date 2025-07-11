import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'turborepo-shadcn-tailwind-v4',
  description: 'Turborepo-Shadcn-Tailwind CSS v4 Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
