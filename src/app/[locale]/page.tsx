import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Components
import Navbar from '@/components/navbar';
import Name from '~/components/name';

export default function HomePage() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen">
            <div className="m-auto aspect-square 2xl">
                <Name />
            </div>

            <div></div>
        </div>
    );
}
