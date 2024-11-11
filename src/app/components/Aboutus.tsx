"use client";
import React, { useState } from 'react';

const AboutUs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            question: "Why Choose Us?",
            answer: "We prioritize our clients' needs and work closely with them to achieve their goals. Our dedicated team ensures that every project receives personalized attention and innovative solutions."
        },
        {
            question: "What Makes Us Different?",
            answer: "Our unique approach combines creativity with technical expertise. We stay ahead of industry trends and implement cutting-edge technologies to deliver outstanding results."
        },
        {
            question: "What Services Do We Offer?",
            answer: "We offer comprehensive digital solutions including web development, mobile applications, digital marketing, UI/UX design, and custom software development tailored to your specific needs."
        },
        {
            question: "How Can You Contact Us?",
            answer: "You can reach us through our contact form, or call us at +91 78590 06724. We're available Monday through Friday, 9 AM to 6 PM EST."
        },
        {
            question: "What is Our Mission?",
            answer: "Our mission is to empower businesses through innovative technology solutions, helping them achieve digital transformation and sustainable growth in an ever-evolving market."
        }
    ];

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="about-container" id="about">
            <h1 className="sectionHeading">About Us</h1>
            <div className="headingUnderline"></div>
            <section className="what-we-do">
                <h2 className="sectionHeading">What We Do</h2>
                <p>We provide innovative solutions to help businesses grow and succeed in the digital landscape. Our services include web development, AI & research, and custom software solutions.</p>
            </section>
            <section className="who-we-are">
                <h2 className="sectionHeading">Who We Are</h2>
                <p>We are a team of passionate professionals dedicated to delivering high-quality services. Our diverse backgrounds and expertise allow us to tackle challenges from multiple angles, ensuring the best outcomes for our clients.</p>
            </section>
            <section className="faqs">
                <h2 className="sectionHeading">FAQs</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3 onClick={() => toggleOpen(index)} className="faq-question">
                            {item.question}
                            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
                        </h3>
                        {openIndex === index && <p className="faq-answer">{item.answer}</p>}
                    </div>
                ))}
            </section>
            <style jsx>{`
                .about-container {
                    max-width: 800px;
                    margin: auto;
                    padding: 20px;
                    background: #0f0f0f;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    color: #ffffff;
                }
                h1 {
                    text-align: center;
                    color: #00f7ff;
                }
                section {
                    margin: 20px 0;
                }
                .sectionHeading {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 2.5rem;
                    color: #00f7ff;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    text-shadow: 0 0 10px rgba(0, 247, 255, 0. 5);
                }
                .headingUnderline {
                    width: 100px;
                    height: 4px;
                    background: linear-gradient(90deg, #00f7ff, #ff00ff);
                    margin: 0 auto 40px;
                    border-radius: 2px;
                }
                .faq-item {
                    margin: 10px 0;
                    padding: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 5px;
                    background: rgba(255, 255, 255, 0.05);
                }
                .faq-question {
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #00f7ff;
                }
                .faq-answer {
                    margin-top: 10px;
                    color: #cccccc;
                }
                .arrow {
                    transition: transform 0.3s;
                }
                .arrow.open {
                    transform: rotate(180deg);
                }
            `}</style>
        </div>
    );
};

export default AboutUs;
