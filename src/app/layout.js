import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
