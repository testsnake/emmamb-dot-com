'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogContent,
    Dialog
} from '@/components/ui/dialog';
import Contact from './icons/contact';
import { Label } from './ui/label';
import { useTranslations } from 'next-intl';

const FormSchema = z.object({
    username: z.string().min(1, {
        message: 'Username must be at least 2 characters.'
    }),
    email: z.string().email({
        message: 'Invalid email address.'
    }),
    message: z.string().min(1, {
        message: 'Must include a message.'
    })
});

const apiKey = process.env.PUBLIC_ACCESS_KEY;

export default function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            message: ''
        }
    });

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {},
        onSuccess: (msg, data) => {},
        onError: (msg, data) => {}
    });

    const t = useTranslations('contact');
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full p-2 w-10 h-10" variant="outline">
                    <Contact />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>{t('contact')}</DialogTitle>
                            <DialogDescription>{t('contact-desc')}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex m-2 mt-0 inline">
                                            <FormLabel>{t('name')}</FormLabel>
                                            <FormMessage />
                                        </div>

                                        <FormControl>
                                            <Input placeholder={t('name-placeholder')} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex m-2 inline">
                                            <FormLabel>{t('email')}</FormLabel>
                                            <FormMessage />
                                        </div>
                                        <FormControl>
                                            <Input placeholder={t('email-placeholder')} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex m-2 inline">
                                            <FormLabel>{t('message')}</FormLabel>
                                            <FormMessage />
                                        </div>
                                        <FormControl>
                                            <Textarea placeholder={t('message-placeholder')} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">{t('submit')}</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
function useWeb3Forms(arg0: {
    access_key: any;
    settings: {};
    onSuccess: (msg: any, data: any) => void;
    onError: (msg: any, data: any) => void;
}): { submit: any } {
    throw new Error('Function not implemented.');
}
