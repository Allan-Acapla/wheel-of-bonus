import React from 'react';
import PageLayout from '../components/PageLayout';

const About: React.FC = () => {
    return (
        <PageLayout
            title="About Us"
            intro="Your trusted guide to the best online gaming offers."
        >
            <p>
                Welcome to iGamingDeals. We are a dedicated team of gaming enthusiasts and industry experts committed to bringing you the most value from the online gaming world.
            </p>

            <h3>Our Mission</h3>
            <p>
                The online gaming landscape can be overwhelming with hundreds of operators and confusing bonus terms. Our mission is simple: to help you cut through the noise.
                We research, verify, and curate the best welcome offers, promotions, and bonuses from fully legal and regulated operators.
            </p>

            <h3>What We Do</h3>
            <p>
                We function as an independent comparison site. We test the platforms, read the fine print, and present you with clear, honest information so you can make an informed choice.
                Whether you are looking for a risk-free starting bonus or a deposit match, we highlight the best opportunities available in your state.
            </p>

            <h3>Transparency</h3>
            <p>
                Transparency is core to our values. We may receive compensation from the gaming operators we feature when users sign up through our links.
                However, our recommendations are driven by the quality and value of the offer to you, the player.
            </p>

            <p>
                Thank you for trusting us as your starting point. Remember to always play responsibly.
            </p>
        </PageLayout>
    );
};

export default About;
