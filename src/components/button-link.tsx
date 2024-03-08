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
        <Button className="rounded-full p-2 w-10 h-10" variant="outline" asChild>
            <Link href={href} aria-label={t(name)}>
                {children}
            </Link>
        </Button>
    );
};

export default ButtonLink;
