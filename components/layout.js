import { Footer } from "./footer/footer";
import { Header } from "./header";
import MobileHeader from "./mobile-header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pb-4 pl-4 pr-4 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 text-light_text dark:text-dark_text bg-light_background dark:bg-dark_background">
        <div className="hidden sticky top-0 lg:flex">
          <Header />
        </div>
        <div className="flex sticky top-0 lg:hidden">
          <MobileHeader />
        </div>
        <div id="children">
          {children}
        <Footer />
        </div>
      </main>
    </>
  );
}
