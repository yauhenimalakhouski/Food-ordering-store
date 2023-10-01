import { Header } from "@/components/Header/component";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import { Footer } from "@/components/Footer/component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
        <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'></link>
      </head>
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
