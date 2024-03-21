'use client';

import { set, useForm } from 'react-hook-form';

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
import Contact from './icons/remixicon/contact';
import { Label } from './ui/label';
import { useTranslations } from 'next-intl';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

export default function InputForm() {
    const t = useTranslations('contact');

    const FormSchema = z.object({
        name: z.string().min(1, {
            message: `${t('form-required-name')}`
        }),
        email: z.string().email({
            message: `${t('form-required-email')}`
        }),
        message: z.string().min(1, {
            message: `${t('form-required-message')}`
        }),
        key: z.string().optional()
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            key: 'ONLY_IMPLIMENT_IF_THIS_IS_ABUSED_BY_SPAMMERS_OTHERWISE_I_DONT_FEEL_LIKE_IMPLIMENTING_THIS_SO_PLEASE_DONT_SPAM_ME_THANKS'
        }
    });

    const [open, setOpen] = React.useState(false);
    const [awaiting, setAwaiting] = React.useState(false);
    const [errorState, setErrorState] = React.useState(false);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setAwaiting(true);
        const response = await sendEmail(data);
        console.log(response);
        if (response.action) {
            // Message sent successfully
            setOpen(false);
            form.reset();
            setAwaiting(false);
        } else {
            // Some form of error, probably a 500 as all user errors are handled by zod
            setAwaiting(false);
        }
    }

    type responseSchema = {
        description: string;
        action: boolean;
    };

    async function sendEmail(data: z.infer<typeof FormSchema>): Promise<responseSchema> {
        const { name, email, message } = data;
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        return response.json();
    }

    function errorMessage() {
        if (form.formState.errors.name || form.formState.errors.email || form.formState.errors.message) {
            return t('error-validation');
        } else if (errorState) {
            return t('error-server');
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-full p-2 w-10 h-10" variant="outline">
                    <Contact />
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[90%] lg:w-auto h-[90%] sm:h-auto overflow-y-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>{t('contact')}</DialogTitle>
                            <DialogDescription>{t('contact-desc')}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex m-2 lg:mt-0 justify-between">
                                                <FormLabel>{t('name')}</FormLabel>
                                                <FormMessage className="text-sm font-medium leading-none" />
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
                                            <div className="flex m-2 justify-between">
                                                <FormLabel>{t('email')}</FormLabel>
                                                <FormMessage className="text-sm font-medium leading-none" />
                                            </div>
                                            <FormControl>
                                                <Input placeholder={t('email-placeholder')} {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex m-2 -mt-2 sm:mt-2 justify-between">
                                            <FormLabel>{t('message')}</FormLabel>
                                            <FormMessage className="text-sm font-medium leading-none" />
                                        </div>
                                        <FormControl>
                                            <Textarea placeholder={t('message-placeholder')} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <div className="flex justify-between items-center w-full">
                                <Label
                                    className={`text-sm text-muted-foreground ${!errorState ? '' : 'invisible'}`}
                                    aria-hidden={!errorState}
                                >
                                    {errorMessage()}
                                </Label>
                                <Button type="submit" disabled={awaiting} className="text-right">
                                    {t('submit')}
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
