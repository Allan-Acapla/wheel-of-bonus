import React from 'react';
import PageLayout from '../components/PageLayout';

const Terms: React.FC = () => {
    const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <PageLayout
            title="Terms of Service"
            intro={`Last updated: ${currentDate}`}
        >
            <p>
                Please read these Terms of Service carefully before using our website. By accessing or using any part of the site, you agree to be bound by these Terms.
            </p>

            <h3>1. Informational Purpose Only</h3>
            <p>
                iGamingDeals is an independent informational portal. We are not a gambling operator. The content provided on this website is for informational and entertainment purposes only.
                We do not offer real money gambling services directly.
            </p>

            <h3>2. Eligibility and Location</h3>
            <p>
                You must be at least 21 years of age to use this website. The offers and promotions listed are only valid in jurisdictions where online gambling is legal and regulated.
                It is your responsibility to ensure you comply with all local laws and regulations regarding online gaming.
            </p>

            <h3>3. Accuracy of Information</h3>
            <p>
                While we strive to keep all information up to date, bonuses, terms, and offers from third-party operators can change at any time without notice.
                We do not guarantee the accuracy, completeness, or timeliness of any offer listed. Always check the specific terms and conditions on the operator's website before signing up.
            </p>

            <h3>4. Affiliate Disclosure</h3>
            <p>
                Some of the links on this website are affiliate links. This means we may earn a commission if you click on the link or make a qualifying deposit with the partner operator.
                This comes at no additional cost to you and helps us maintain this free resource.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
                Use of this website is at your own risk. iGamingDeals and its owners shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or reliance on any information provided herein.
                We are not responsible for any losses incurred while gambling on third-party sites.
            </p>

            <h3>6. Gambling Responsibly</h3>
            <p>
                Gambling should be entertaining and not a way to make money. If you or someone you know has a gambling problem, please call 1-800-GAMBLER.
            </p>
        </PageLayout>
    );
};

export default Terms;
