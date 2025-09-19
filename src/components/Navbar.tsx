import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-grey shadow sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-extrabold text-blue-700 mr-10">CodeXcelerators</Link>
      <div className="flex space-x-6">
        <Link href="/about" className="hover:text-blue-600 font-semibold">About Us</Link>
        <Link href="/innovation" className="hover:text-blue-600 font-semibold">Innovation</Link>
        <Link href="/solution" className="hover:text-blue-600 font-semibold">Solution</Link>
        <Link href="/technical" className="hover:text-blue-600 font-semibold">Technical Approach</Link>
        <Link href="/impact" className="hover:text-blue-600 font-semibold -ml-2">Impact & Benefits</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
