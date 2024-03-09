'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

export default function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            message: ''
        }
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex m-2 mt-0 inline">
                                <FormLabel>Username</FormLabel>
                                {/* <FormMessage /> */}
                            </div>

                            <FormControl>
                                <Input placeholder="Username" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                {/* <FormMessage /> */}
                            </div>
                            <FormControl>
                                <Input placeholder="email" {...field} />
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
                                <FormLabel>Message</FormLabel>
                                {/* <FormMessage /> */}
                            </div>
                            <FormControl>
                                <Textarea placeholder="message" className="resize-none" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormMessage />
                <Button type="submit" className="mt-4 w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
