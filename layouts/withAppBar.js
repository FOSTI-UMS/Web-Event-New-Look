import Head from 'next/head';
import PropTypes from 'prop-types';

import AppBar from '../components/AppBar';

export default function withAppBar({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{pageTitle && `${pageTitle} - `} Forum Open Source Teknik Informatika UMS</title>
      </Head>

      <AppBar />

      <div className="px-3 md:px-6 lg:px-4">
        {children}
      </div>

      <footer className="mt-auto text-center text-gray-600 text-xs py-3 bg-gray-50 md:text-sm">
        <div className="container mx-auto">
          Copyright &copy; {new Date().getFullYear()} | <a href="https://fostiums.org">FOSTI UMS</a> | All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

withAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
};

withAppBar.defaultProps = {
  pageTitle: null,
};
