import { Header } from "@/components/Header/component";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import { Footer } from "@/components/Footer/component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
      <body>
        <div id="modal-container"></div>
        <StoreProvider>
          <Header />
          <main className="main">{children}</main>
          <Footer>footer</Footer>
        </StoreProvider>
      </body>
    </html>
  );
}
