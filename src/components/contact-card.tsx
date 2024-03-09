import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import GitHub from '@/components/icons/github';
import LinkedIn from '@/components/icons/linkedin';
import Back from '@/components/icons/back';
import ButtonLink from './button-link';
import ButtonSettings from './button-settings';
import { useTranslations } from 'next-intl';
import ContactForm from './contact-form';

const ContactCard = () => {
    const t = useTranslations('common');
    return (
        <Card className="align-middle">
            <CardHeader className="pb-0">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage
                            src="https://www.gravatar.com/avatar/92f6c8e968dc5df2da9ed84cdfacb078"
                            alt="Emma Meredith-Black's Profile Picture"
                        />
                        <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-pink-500">
                            {t('name-initials')}
                        </AvatarFallback>
                    </Avatar>
                    <div className="text-xl font-semibold leading-none bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-1">
                        <h1>{t('name')}</h1>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-center pb-0 h-[300px]">
                <ContactForm />
            </CardContent>
            <Separator className="my-4 w-5/10 mx-auto" />
            <CardFooter className="flex gap-2 justify-center p-4 pt-0">
                <ButtonLink href="https://github.com/testsnake" name="github">
                    <GitHub />
                </ButtonLink>
                <ButtonLink href="https://www.linkedin.com/in/emma-meredith-black/" name="linkedin">
                    <LinkedIn />
                </ButtonLink>
                <ButtonLink href="/" name="contact">
                    <Back />
                </ButtonLink>
                <ButtonSettings href="/contact" />
            </CardFooter>
        </Card>
    );
};

export default ContactCard;
