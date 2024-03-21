'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import Settings from './icons/remixicon/settings';
import { useTranslations } from 'next-intl';
import { Link } from '../navigation';
import locales from '../i18nAvalibleLocales.json';

interface ButtonSettingsProps {
    href: string;
}

export default function ButtonSettings(props: ButtonSettingsProps) {
    const { setTheme } = useTheme();
    const t = useTranslations('settings');

    const langs = locales.locales.map((locale) => {
        return (
            <DropdownMenuItem asChild key={locale}>
                <Link href={props.href} locale={locale}>
                    {t(`lang-${locale}`)}
                    {t(`lang-${locale}-current`)}
                </Link>
            </DropdownMenuItem>
        );
    });

    return (
        <div className="relative inline-block text-sm w-[100%] 2xs:w-auto">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-expanded="true"
                        aria-label={t('title')}
                        aria-haspopup="menu"
                        className="rounded-full p-2 w-[100%] 2xs:w-10 h-10"
                        id="mode"
                        variant="outline"
                    >
                        <Settings />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    aria-labelledby="mode"
                    className="w-56 origin-top-right"
                    id="mode"
                    side="bottom"
                >
                    <DropdownMenuLabel>{t('display')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="space-y-1">
                        <DropdownMenuItem onClick={() => setTheme('system')}>{t('systemdefault')}</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>{t('darkmode')}</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('light')}>{t('lightmode')}</DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="space-y-1">{langs}</div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
