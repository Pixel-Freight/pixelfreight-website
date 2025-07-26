import * as React from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Our Location',
        description: '123 Design Street, Creative District, San Francisco, CA 94105',
        link: 'https://maps.google.com',
        linkText: 'View on Map',
    },
    {
        icon: Mail,
        title: 'Email Us',
        description: 'contact@pixelfreight.com',
        link: 'mailto:contact@pixelfreight.com',
        linkText: 'Send an Email',
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
        linkText: 'Call Now',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        description: 'Monday - Friday: 9:00 AM - 6:00 PM',
        additional: 'Saturday: 10:00 AM - 4:00 PM',
        link: '#',
        linkText: 'Book a Call',
    },
];

const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Linkedin, url: 'https://linkedin.com' },
    { icon: Youtube, url: 'https://youtube.com' },
];

export function ContactInfo() {
    return (
        <div className="bg-gray-50 rounded-xl p-8 h-full">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>

            <div className="space-y-6">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 mt-1">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 mt-1">{item.description}</p>
                                {item.additional && <p className="text-gray-600 text-sm">{item.additional}</p>}
                                <a
                                    href={item.link}
                                    className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.linkText} →
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">Need immediate assistance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Our support team is here to help you with any questions or concerns you may have.
                </p>
                <Button variant="default" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                </Button>
            </div>
        </div>
    );
}
