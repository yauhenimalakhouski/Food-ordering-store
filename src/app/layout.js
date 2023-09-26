import { Header } from "@/components/Header/component";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import { Footer } from "@/components/Footer/component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="modal-container"></div>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer>footer</Footer>
        </StoreProvider>
      </body>
    </html>
  );
}
