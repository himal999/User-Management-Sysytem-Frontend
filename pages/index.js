import Head from 'next/head';
import { AddUser } from '../components/AddUser';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>User App</title>
      </Head>
      <Navbar />

      <main className=" mt-40">
        <AddUser />
      </main>
    </div>
  );
}
