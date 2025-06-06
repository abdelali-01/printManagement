import { Inter } from "next/font/google";
import "./globals.css";
import "../components/styles.css";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";
import AuthChecker from "./AuthChecker";
import FullPageLoader from "@/components/common/FullPageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Print Management",
  description: "Smart Print System for Departments Easy Requests, Clear Tracking, Full Control",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <FullPageLoader />
          <AuthChecker fromDashboard={false}>
            <Navbar />
            {children}
          </AuthChecker>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "white",
                color: "#333",
                border: "1px solid var(--borders)",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              },
              success: {
                iconTheme: {
                  primary: "#10B981",
                  secondary: "white",
                },
                style: {
                  borderLeft: "4px solid #10B981",
                },
              },
              error: {
                iconTheme: {
                  primary: "#EF4444",
                  secondary: "white",
                },
                style: {
                  borderLeft: "4px solid #EF4444",
                },
              },
              warning: {
                iconTheme: {
                  primary: "#F59E0B",
                  secondary: "white",
                },
                style: {
                  borderLeft: "4px solid #F59E0B",
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
