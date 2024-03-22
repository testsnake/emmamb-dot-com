'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from '@/components/ui/command';
import { useTheme } from 'next-themes';
import Settings from './icons/remixicon/settings';
import { useTranslations } from 'next-intl';
import { Link } from '../navigation';
import locales from '../i18nAvalibleLocales.json';
import { useMediaQuery } from 'usehooks-ts';
import React from 'react';

interface ButtonSettingsProps {
    href: string;
}

export default function ButtonSettings(props: ButtonSettingsProps) {
    const t = useTranslations('settings');
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [open, setOpen] = React.useState(false);

    const langsButton = 0;

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
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
                </PopoverTrigger>
                <PopoverContent className="w-52 p-0">
                    <SettingsList setOpen={setOpen} t={t} props={props} />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
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
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{t('title')}</DrawerTitle>
                </DrawerHeader>
                <SettingsList setOpen={setOpen} t={t} props={props} />
                <DrawerFooter>
                    <DrawerClose>
                        <Button className="w-full">{t('closeDrawer')}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function SettingsList({
    setOpen,
    t,
    props
}: {
    setOpen: (open: boolean) => void;
    t: (key: string) => string;
    props: ButtonSettingsProps;
}) {
    const { setTheme } = useTheme();
    const langs = locales.locales.map((locale) => {
        return (
            <CommandItem asChild key={locale}>
                <Link href={props.href} locale={locale}>
                    {t(`lang-${locale}`)}
                    <CommandShortcut>{t(`lang-${locale}-current`)}</CommandShortcut>
                </Link>
            </CommandItem>
        );
    });

    return (
        <Command className="">
            <CommandList className="max-h-[350px]">
                <CommandGroup heading={t('display')}>
                    <CommandItem
                        onSelect={() => {
                            setOpen(false);
                            setTheme('system');
                        }}
                    >
                        {t('systemdefault')}
                    </CommandItem>
                    <CommandItem
                        onSelect={() => {
                            setOpen(false);
                            setTheme('dark');
                        }}
                    >
                        {t('darkmode')}
                    </CommandItem>
                    <CommandItem
                        onSelect={() => {
                            setOpen(false);
                            setTheme('light');
                        }}
                    >
                        {t('lightmode')}
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading={t('language')}>{langs}</CommandGroup>
            </CommandList>
        </Command>
    );
}
