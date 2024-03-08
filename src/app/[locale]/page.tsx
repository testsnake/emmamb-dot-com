import { useTranslations } from 'next-intl';

// Components
import Name from '@/components/name';

export default function HomePage() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen dark:">
            <div className="m-auto aspect-square 2xl">
                <Name />
            </div>
        </div>
    );
}
