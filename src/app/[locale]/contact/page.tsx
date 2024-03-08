import { useTranslations } from 'next-intl';

export default function contact() {
    const t = useTranslations('common');
    return (
        <div className="flex h-screen dark:">
            <div className="m-auto aspect-square 2xl">
                <h1>contact</h1>
            </div>
        </div>
    );
}
