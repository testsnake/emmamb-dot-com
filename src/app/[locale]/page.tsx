import { useTranslations } from 'next-intl';

// Components

import { AspectRatio } from '~/components/ui/aspect-ratio';
import InfoCard from '@/components/info-card';

export default function HomePage() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen dark:">
            <div className="m-auto aspect-square 2xl align-middle justify-center flex items-center space-x-x">
                <div className="m-auto w-[320px]">
                    <AspectRatio ratio={3 / 2}>
                        <InfoCard />
                    </AspectRatio>
                </div>
            </div>
        </div>
    );
}
