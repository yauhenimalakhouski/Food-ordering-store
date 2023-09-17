import { Header } from "@/components/Header/component";
import "./globals.css";
import { StoreProvider } from "@/store/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <div>{children}</div>
          <header>footer</header>
        </StoreProvider>
      </body>
    </html>
  );
}
