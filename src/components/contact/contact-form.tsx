'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    phone: z.string().min(10, { message: 'Please enter a valid phone number' }).optional(),
    subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // In a real app, you would send the form data to your backend
            console.log('Form submitted:', data);

            toast.success('Message sent successfully! We\'ll get back to you soon.');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register('name')}
                            className={`${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            {...register('email')}
                            className={`${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                    </label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                        className={`${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="subject"
                        placeholder="How can we help you?"
                        {...register('subject')}
                        className={`${errors.subject ? 'border-red-500' : ''}`}
                    />
                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        {...register('message')}
                        className={`${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                </div>

                <div>
                    <Button
                        type="submit"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
