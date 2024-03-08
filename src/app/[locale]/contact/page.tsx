import { useTranslations } from 'next-intl';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import ContactCard from '@/components/contact-card';

export default function contact() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen dark:">
            <div className="m-auto aspect-square 2xl align-middle justify-center flex items-center space-x-x">
                <div className="m-auto w-[320px]">
                    <AspectRatio ratio={3 / 2}>
                        <ContactCard />
                    </AspectRatio>
                </div>
            </div>
        </div>
    );
}
