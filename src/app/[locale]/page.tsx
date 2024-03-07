import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Components
import Navbar from '@/components/navbar';

export default function HomePage() {
    const t = useTranslations('common');
    return (
        <div>
            <Navbar />
            <div></div>
        </div>
    );
}
