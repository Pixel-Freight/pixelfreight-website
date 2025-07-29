import { ContactHero } from '@/components/contact/hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';

export default function ContactPage() {
    return (
        <div className=" px-6 md:px-12 lg:px-18">
            <ContactHero />
            <div className="mx-auto py-16 grid md:grid-cols-2 gap-12">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
}
