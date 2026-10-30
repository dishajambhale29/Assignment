import "./globals.css";

export const metadata = {
  title: "Sofaliving | Bespoke Sofas for Modern Indian Homes",
  description:
    "Discover thoughtfully crafted sofas, explore signature collections and customize a sofa for your home with Sofaliving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
