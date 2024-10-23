import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import GitHub from '~/components/icons/remixicon/github';
import LinkedIn from '~/components/icons/remixicon/linkedin';
import ButtonLink from './button-link';
import ButtonSettings from './button-settings';
import { useTranslations } from 'next-intl';
import ContactDialog from './contact-dialog';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const InfoCard = () => {
    const t = useTranslations('common');
    return (
        <Card className="align-middle rounded-none 2xs:rounded-lg">
            <CardHeader className="pb-0">
                <div className="flex flex-col 2xs:flex-row items-center space-x-4 justify-center mb-4 ">
                    <Avatar className="w-10 h-10 justify-center m-2 2xs:m-0">
                        <AvatarImage src="/icon2.png" alt="Emma Meredith-Black's Profile Picture" />
                        <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-pink-500">
                            {t('name-initials')}
                        </AvatarFallback>
                    </Avatar>
                    <div className="w-auto whitespace-nowrap text-xl 2xs:text-2xl text-center font-semibold leading-none bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-1">
                        {t('pronounciation') ? (
                            <HoverCard>
                                <HoverCardTrigger>
                                    <h1>{t('name')}</h1>
                                </HoverCardTrigger>
                                <HoverCardContent side="top" className="text-sm text-center w-auto select-none p-1">
                                    {t('pronounciation')}
                                </HoverCardContent>
                            </HoverCard>
                        ) : (
                            t('name')
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-center pb-0">
                <p className="text-sm/relaxed 2xs:text-base/relaxed">{t('description')}</p>
            </CardContent>
            <Separator className="my-4 w-5/10 mx-auto" />
            <CardFooter className="flex flex-col 2xs:flex-row gap-2 justify-center p-4 pt-0">
                <ButtonLink href="https://github.com/testsnake" name="github">
                    <GitHub />
                </ButtonLink>
                <ButtonLink href="https://www.linkedin.com/in/emma-meredith-black/" name="linkedin">
                    <LinkedIn />
                </ButtonLink>
                <ContactDialog />
                <ButtonSettings href="/" />
            </CardFooter>
        </Card>
    );
};

export default InfoCard;
