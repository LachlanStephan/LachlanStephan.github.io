import { FC } from "react";
import Layout from "../components/layout";
import { Header } from "../components/blog/header";
import Link from "next/link";
import { Config } from "../components/blog/config";

const Blogs: FC = () => {
  const links = Config.map((v, i) => {
    return (
      <>
        <Link key={i} href={v.link}>
          <a className="hover:underline">{v.title}</a>
        </Link>
        <br />
      </>
    );
  });

  return (
    <Layout>
      <Header title="Blogs" />
      <br />
      <aside className="flex flex-col">{links}</aside>
    </Layout>
  );
};

export default Blogs;
