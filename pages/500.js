import Head from 'next/head';
import { FireIcon } from '@heroicons/react/solid';

export default function ServerErrorPage() {
  return (
    <div>
      <Head>
        <title>Internal Server Error</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="relative px-3">
          <FireIcon className="absolute -mt-40 -ml-32 w-80 h-80 text-gray-100" />
          <div className="relative">
            <div className="text-9xl font-bold">500</div>
            <p className="mt-5 font-medium text-3xl text-gray-600 max-w-md leading-relaxed">
              Looks like we&apos;re having some server issues.
            </p>
            <div className="mt-4 text-gray-400">Please be patient and try agian.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
