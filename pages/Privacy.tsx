import React from 'react';
import PageLayout from '../components/PageLayout';

const Privacy: React.FC = () => {
    const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <PageLayout
            title="Privacy Policy"
            intro={`Last updated: ${currentDate}`}
        >
            <p>
                At iGamingDeals, we value your privacy and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
                We do not collect personal information like your name, email address, or phone number directly on this page unless you voluntarily provide it
                (for example, by contacting us).
            </p>
            <p>
                We use cookies, pixels, and similar tracking technologies to measure the performance of our marketing campaigns and
                attribute successful referrals to our partners. These technologies collect anonymous usage data such as your IP address,
                browser type, and device information.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
                The information collected is used primarily for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Analyzing website traffic and user behavior to improve our content.</li>
                <li>Tracking the effectiveness of our promotional offers.</li>
                <li>Ensuring proper attribution for affiliate referrals to third-party operators.</li>
            </ul>

            <h3>3. Third-Party Links</h3>
            <p>
                Our website contains links to third-party websites (e.g., online casinos and sportsbooks).
                Once you click on these links and leave our site, we do not have control over those other websites.
                Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites.
            </p>

            <h3>4. Data Security</h3>
            <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h3>5. Contact Us</h3>
            <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@igamingdeals.live" className="text-blue-300 hover:text-white underline">support@igamingdeals.live</a>.
            </p>
        </PageLayout>
    );
};

export default Privacy;
