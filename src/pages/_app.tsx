import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 mt-14 sm:px-20 md:px-32 sm:mb-0 md:mb-0 mb-10">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-100  lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="col-span-12 bg-white dark:bg-dark-100 dark:text-white lg:col-span-9 rounded-2xl flex flex-col overflow-hidden shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
