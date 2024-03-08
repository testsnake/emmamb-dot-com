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
import Settings from './icons/settings';
import { useTranslations } from 'next-intl';
import { Link } from '../navigation';

interface ButtonSettingsProps {
    href: string;
}

export default function ButtonSettings(props: ButtonSettingsProps) {
    const { setTheme } = useTheme();
    const t = useTranslations('settings');
    return (
        <div className="relative inline-block text-sm">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-expanded="true"
                        aria-label={t('title')}
                        aria-haspopup="menu"
                        className="rounded-full p-2 w-10 h-10"
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
                    <div className="space-y-1">
                        <DropdownMenuItem aria-label={t('lang-en-change-to')} asChild>
                            <Link href={props.href} locale="en">
                                {t('lang-en')}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem aria-label={t('lang-fr-change-to')} asChild>
                            <Link href={props.href} locale="fr">
                                {t('lang-fr')}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem aria-label={t('lang-ja-change-to')} asChild>
                            <Link href={props.href} locale="ja">
                                {t('lang-ja')}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem aria-label={t('lang-zh-hans-change-to')} asChild>
                            <Link href={props.href} locale="zh-HANS">
                                {t('lang-zh-hans')}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem aria-label={t('lang-zh-hant-change-to')} asChild>
                            <Link href={props.href} locale="zh-HANT">
                                {t('lang-zh-hant')}
                            </Link>
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
