import { AspectRatio } from '~/components/ui/aspect-ratio';
import InfoCard from '@/components/info-card';

export default function HomePage() {
    return (
        <div className="flex h-screen overflow-clip">
            <div className="2xs:m-auto 2xs:h-auto w-[100%] max-w-[370px] pb-0 ml:pb-12">
                <AspectRatio ratio={3 / 2}>
                    <InfoCard />
                </AspectRatio>
            </div>
        </div>
    );
}
