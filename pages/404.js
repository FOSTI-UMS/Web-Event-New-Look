import Head from 'next/head';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>Halaman tidak ditemukan</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-3">
        <div className="text-9xl font-bold">404</div>
        <div className="text-3xl font-medium">Page Not Found</div>
        <p className="mt-5 text-gray-500">
          It seems that you&apos;re lost. The page you&apos;re looking for does not seem to exist.
        </p>

        <Link href="/">
          <a className="mt-10 bg-red-500 rounded text-white py-2 px-4">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
