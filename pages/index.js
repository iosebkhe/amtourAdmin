import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Head>
        <title>Amtour Admin</title>
      </Head>
      <h2 className="text-primary text-2xl text-center">
        მოგესალმები, <strong>{session?.user?.name}</strong>
      </h2>
      <div className="flex justify-center items-center mt-40">
        <Link
          className="bg-primary text-3xl text-white font-medium p-3 rounded"
          href={"/products/new"}
        >
          ტურის დამატება
        </Link>
      </div>
    </Layout>
  );
}
