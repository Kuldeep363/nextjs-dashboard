import { inter } from './ui/fonts';
import './ui/global.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
