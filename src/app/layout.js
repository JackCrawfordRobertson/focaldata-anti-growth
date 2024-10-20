import "./styles/globals.css";

export const metadata = {
  title: "Bi_Focal #20",
  description: "Is there an anti-growth coalition in Britain?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}