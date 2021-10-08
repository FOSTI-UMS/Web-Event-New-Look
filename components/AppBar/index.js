import Link from 'next/link';
import { useState } from 'react';

import HamburgerButton from './HamburgerButton';
import SideMenu from './SideMenu';

export default function AppBar() {
  const [sideMenuIsOpen, setSideMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 px-3 md:p-3 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link href="/">
            <a className="py-3">
              <img src="/logo.png" alt="Logo Fosti UMS" className="h-[60px]" />
            </a>
          </Link>

          <div className="flex items-center">
            <HamburgerButton handleClick={() => setSideMenuOpen(true)} />
          </div>
        </div>
      </div>

      <SideMenu isOpen={sideMenuIsOpen} onClose={() => setSideMenuOpen(false)} />
    </header>
  );
}
