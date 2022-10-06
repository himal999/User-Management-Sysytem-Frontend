import Head from 'next/head';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';
export default function Home() {
  return (
    <div>
      <Head>
        <title>User App</title>
      </Head>
      <Navbar />
      <UserTable />
      <main></main>
    </div>
  );
}
