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
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full p-2 w-10 h-10" variant="outline">
                    <Contact />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact</DialogTitle>
                    <DialogDescription>I'll try to get back to you as soon as possible.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="full-name">Name</Label>
                        <Input id="full-name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea className="min-h-[100px]" id="message" placeholder="Message" />
                    </div>
                </div>
                <DialogFooter>
                    <Button>Send message</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
