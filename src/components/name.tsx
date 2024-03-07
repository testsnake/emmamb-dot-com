import { useTranslations } from 'next-intl';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


const Name: React.FC = () => {
    const t = useTranslations('common');
    return (
        <div className="container 2xl flex items-center space-x-x ">
            <div className="m-auto">
                <Card>
                <CardHeader>
                    <CardTitle>
                        <div className='flex flex-row max-2xl space-x-3 m-auto '>
                            <Avatar>
                                <AvatarImage src="https://www.gravatar.com/avatar/92f6c8e968dc5df2da9ed84cdfacb078" />
                                <AvatarFallback>EMB</AvatarFallback>
                            </Avatar>
                            <h1 className="text-2xl text-white font-bold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 space-2-2 m-auto p-1">{t('name')}</h1>
                        </div>
                    </CardTitle>
                    <CardDescription>{t('title')}</CardDescription>
                </CardHeader>
                <CardContent>
                <p>{t('description')}</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
                </Card>

            </div>
        </div>
        
    );
};

export default Name;