import { Link } from '../navigation';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

interface ButtonLinkProps {
    href: string; // Assuming href is a string for simplicity
    name: string;
    children: ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, name, children }) => {
    const t = useTranslations('common');
    return (
        <Button className="rounded-full p-2 w-[100%] 2xs:h-12 2xs:w-12 duration-0" variant="outline" asChild>
            <Link href={href} aria-label={t(name)}>
                {children}
            </Link>
        </Button>
    );
};

export default ButtonLink;
