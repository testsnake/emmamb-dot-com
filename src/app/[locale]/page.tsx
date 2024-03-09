import { useTranslations } from 'next-intl';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import InfoCard from '@/components/info-card';

export default function HomePage() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen dark:">
            <div className="mx-auto mt-40 md:mt-[20vh] ">
                <div className="align-top w-[90vw] md:w-[340px]">
                    <AspectRatio ratio={3 / 2}>
                        <InfoCard />
                    </AspectRatio>
                </div>
            </div>
        </div>
    );
}
