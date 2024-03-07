import {} from 'react-icons/md';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Navbar: React.FC = () => {
    const t = useTranslations('common');

    return (
        <nav className="flex justify-between items-center bg-black text-white p-4 max-w-screen-xl mx-auto">
            <div className="flex items-center space-x-4"></div>
        </nav>
    );
};

export default Navbar;
