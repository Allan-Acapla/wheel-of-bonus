import React from 'react';
import PageLayout from '../components/PageLayout';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <PageLayout
            title="Contact Us"
            intro="Have questions? We're here to help."
        >
            <p>
                If you have any questions, feedback, or need assistance regarding our website or offers, please reach out to our support team.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/10 rounded-lg p-6 my-8">
                <h3 className="text-xl text-[#FFD700] font-semibold mt-0 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Support
                </h3>
                <p className="mb-4">
                    You can email us directly at:
                </p>
                <a
                    href="mailto:support@igamingdeals.live?subject=Inquiry%20from%20Website"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors no-underline"
                >
                    support@igamingdeals.live
                </a>
                <p className="mt-4 text-sm text-blue-200/50">
                    We aim to respond to all inquiries within 1–2 business days.
                </p>
            </div>

            <h3>Business Inquiries</h3>
            <p>
                For partnership opportunities or media inquiries, please use the same contact email above with the subject line "Business Inquiry".
            </p>
        </PageLayout>
    );
};

export default Contact;
