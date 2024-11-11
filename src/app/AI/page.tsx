"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { NextUIProvider, Button, Card} from '@nextui-org/react';
import { Container,Row,Col} from 'react-bootstrap'
import {UilEnvelope, 
  UilFacebook, 
  UilInstagram,UilWhatsapp, UilRobot, UilBrain, UilChart, UilEye ,UilMicrophone, UilAnalysis, UilRocket } from '@iconscout/react-unicons';
import styles from './Ai.module.css';
import './globals.css'
// AI Service interface
interface AIService {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  benefits: string[];
}

// AI Services data
const aiServices: AIService[] = [
  {
    icon: UilRobot,
    title: 'Machine Learning',
    description: 'Empower your business with advanced machine learning solutions.',
    features: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning',
      'Deep Learning',
      'Neural Networks',
    ],
    useCases: [
      'Predictive Analytics',
      'Image Recognition',
      'Fraud Detection',
      'Recommendation Systems',
    ],
    benefits: [
      'Improved Decision Making',
      'Automation of Complex Tasks',
      'Enhanced Customer Experience',
      'Cost Reduction',
    ],
  },
  // Additional AI services can be added here...
  {

    icon: UilBrain,

    title: 'Natural Language Processing',

    description: 'Unlock the power of human language with our NLP solutions.',

    features: [

      'Text Classification',

      'Named Entity Recognition',

      'Sentiment Analysis',

      'Language Translation',

      'Text Summarization',

    ],

    useCases: [

      'Chatbots and Virtual Assistants',

      'Content Categorization',

      'Social Media Monitoring',

      'Automated Report Generation',

    ],

    benefits: [

      'Enhanced Customer Support',

      'Improved Content Management',

      'Real-time Insights from Text Data',

      'Multilingual Communication',

    ],

  },

  {

    icon: UilChart,

    title: 'Predictive Analytics',

    description: 'Forecast future trends and make data-driven decisions.',

    features: [

      'Time Series Analysis',

      'Regression Models',

      'Classification Models',

      'Ensemble Methods',

      'Feature Engineering',

    ],

    useCases: [

      'Sales Forecasting',

      'Risk Assessment',

      'Demand Prediction',

      'Churn Prediction',

    ],

    benefits: [

      'Improved Strategic Planning',

      'Risk Mitigation',

      'Optimized Resource Allocation',

      'Increased ROI',

    ],

  },

  {

    icon: UilEye,

    title: 'Computer Vision',

    description: 'Give your machines the power to see and interpret visual data.',

    features: [

      'Image Classification',

      'Object Detection',

      'Facial Recognition',

      'Image Segmentation',

      'Pose Estimation',

    ],

    useCases: [

      'Autonomous Vehicles',

      'Quality Control in Manufacturing',

      'Medical Image Analysis',

      'Surveillance and Security',

    ],

    benefits: [

      'Automation of Visual Inspection Tasks',

      'Enhanced Safety and Security',

      'Improved Medical Diagnostics',

      'Advanced User Experiences',

    ],

  },

  {

    icon: UilMicrophone,

    title: 'Speech Recognition',

    description: 'Convert spoken language into text with high accuracy.',

    features: [

      'Automatic Speech Recognition (ASR)',

      'Speaker Identification',

      'Voice Activity Detection',

      'Accent Recognition',

      'Emotion Detection in Speech',

    ],

    useCases: [

      'Voice-controlled Devices',

      'Transcription Services',

      'Call Center Analytics',

      'Accessibility Tools',

    ],

    benefits: [

      'Hands-free Device Control',

      'Improved Accessibility',

      'Enhanced Customer Service',

      'Efficient Documentation',

    ],

  },

  {

    icon: UilAnalysis,

    title: 'Anomaly Detection',

    description: 'Identify unusual patterns that do not conform to expected behavior.',

    features: [

      'Statistical Methods',

      'Machine Learning-based Detection',

      'Time Series Anomaly Detection',

      'Clustering-based Approaches',

      'Deep Learning for Anomaly Detection',

    ],

    useCases: [

      'Fraud Detection in Finance',

      'Network Intrusion Detection',

      'Industrial Equipment Monitoring',

      'Medical Diagnosis',

    ],

    benefits: [

      'Early Problem Detection',

      'Reduced Downtime and Losses',

      'Enhanced Security',

      'Improved Quality Control',

    ],

  },

  {

    icon: UilRocket,

    title: 'Reinforcement Learning',

    description: 'Develop AI agents that learn to make decisions through trial and error.',

    features: [

      'Q-Learning',

      'Policy Gradient Methods',

      'Actor-Critic Algorithms',

      'Multi-Agent Reinforcement Learning',

      'Deep Reinforcement Learning',

    ],

    useCases: [

      'Game AI',

      'Robotics Control',

      'Autonomous Trading',

      'Resource Management',

    ],

    benefits: [

      'Optimized Decision Making',

      'Adaptive Systems',

      'Improved Automation',

      'Solving Complex, Dynamic Problems',

    ],

  },
  
];

// Case Study interface
interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
}

// Case Studies data
const caseStudies: CaseStudy[] = [
    {

    title: 'Revolutionizing Customer Support with AI',

    client: 'Global E-commerce Giant',

    challenge: 'Managing high volume of customer inquiries efficiently',

    solution: 'Implemented an AI-powered chatbot using NLP and Machine Learning',

    results: [

      '70% reduction in response time',

      '40% decrease in support ticket volume',

      '95% customer satisfaction rate',

    ],

    testimonial: "The AI solution transformed our customer support, allowing us to handle inquiries at scale while maintaining high satisfaction rates.",

  },

  {

    title: 'Predictive Maintenance for Manufacturing',

    client: 'Leading Automotive Manufacturer',

    challenge: 'Reducing unplanned downtime and maintenance costs',

    solution: 'Developed a predictive maintenance system using IoT sensors and Machine Learning',

    results: [

      '50% reduction in unplanned downtime',

      '30% decrease in maintenance costs',

      '20% increase in equipment lifespan',

    ],

    testimonial: "The predictive maintenance AI has been a game-changer for our operations, significantly reducing costs and improving efficiency.",

  },

  {

    title: 'AI-Driven Fraud Detection in Finance',

    client: 'Major International Bank',

    challenge: 'Detecting and preventing sophisticated financial fraud',

    solution: 'Implemented an advanced AI system for real-time fraud detection using Machine Learning and Big Data analytics',

    results: [

      '90% reduction in false positives',

      '60% increase in fraud detection rate',

      '$50 million saved in potential fraud losses',

    ],

    testimonial: "The AI fraud detection system has dramatically improved our ability to protect our customers and our business from financial crimes.",

  },


  // Additional case studies can be added here...
];

// Testimonial interface
interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechInnovate Inc.",
    quote: "The AI solutions provided by this team have truly transformed our business operations. Their expertise in machine learning and data analytics is unparalleled.",
  },
  // Additional testimonials can be added here...
];

// Contact form state
const AI: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          message: '',
        });
      } else {
        setSubmitMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.${error}');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NextUIProvider>
      <Container>
        <Row>
            <Col lg={12} className={styles.heroCTA}>
              <Button color="primary" onClick={() => window.location.href = '/'} className={styles.heroCT}>
                Back
              </Button>
              <Link href="#Contact">
              <Button color="primary" className={styles.heroCT}>Contact us
              </Button></Link>
              
            </Col>
          </Row>
        {/* Hero Section */}
        <Row className={styles.heroSection}>
          <Col lg={6} className={styles.heroText}>
            <h1>Unlock the Power of Artificial Intelligence</h1>
            <p>
              Revolutionize your business with our cutting-edge AI solutions. From machine learning to natural language processing, we got you covered.
            </p>
            <Button size="lg" color="primary" className={styles.heroCTA}>
              Get Started
            </Button>
          </Col>
          </Row>

        {/* AI Services Section */}
        <Row className={styles.aiServicesSection}>
          <Col lg={12} className={styles.aiServicesTitle}>
            <h2>Our AI Services</h2>
            <p>
              Explore our comprehensive range of AI services designed to transform your business.
            </p>
          </Col>
          {aiServices.map((service, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.aiServiceCard}>
                <service.icon size={40} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Case Studies Section */}
        <Row className={styles.caseStudiesSection}>
          <Col lg={12} className={styles.caseStudiesTitle}>
            <h2>Case Studies</h2>
            <p>
              Discover how our AI solutions have transformed businesses across various industries.
            </p>
          </Col>
          {caseStudies.map((study, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.caseStudyCard}>
                <h3>{study.title}</h3>
                <p>
                  {study.client} - {study.challenge}
                </p>
                <p>
                  Solution: {study.solution}
                </p>
                <ul>
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
                {study.testimonial && (
                  <blockquote>
                    &quot;{study.testimonial}&quot;
                  </blockquote>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        {/* Testimonials Section */}
        <Row className={styles.testimonialsSection}>
          <Col lg={12} className={styles.testimonialsTitle}>
            <h2>What Our Clients Say</h2>
            <p>
              Hear from our satisfied clients who have benefited from our AI solutions.
            </p>
          </Col>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.testimonialCard}>
                <blockquote>
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <p>
                  {testimonial.name} - {testimonial.position} at {testimonial.company}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Contact Section */}
        <Row className={styles.contactSection} id="Contact" >
          <Col lg={12} className={styles.contactTitle}>
            <h2>Get in Touch</h2>
            <p>
              Ready to explore how AI can transform your business? Contact us today!
            </p>
          </Col>
          <Col lg={6} className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitMessage && <p>{submitMessage}</p>}
            </form>
          </Col>
        </Row>
      </Container>
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>About Us</h5>
        <p className={styles.footerText}>
          Futuristic World is a leading provider of AI, machine learning, and digital transformation solutions.
        </p>
      </Col>
<footer className={styles.footer}>
  <Container>
    <Row>
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>About Us</h5>
        <p className={styles.footerText}>
          Futuristic World is a leading provider of AI, machine learning, and digital transformation solutions.
        </p>
      </Col>
      {/* Get in Touch Section */}
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>Get in Touch</h5>
        <ul className={styles.footerList}>
          <li>
            <UilWhatsapp size={20} className={styles.footerIcon} />
            <a href="https://wa.me/+917859006724" target="_blank" rel="noopener noreferrer">
              +91 7859006724
            </a>
          </li>
          <li>
            <UilEnvelope size={20} className={styles.footerIcon} />
            <a href="mailto:sales@futuristiccreations.tech">sales@futuristiccreations.tech</a>
          </li>
        </ul>
      </Col>

      {/* Follow Us Section */}
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>Follow Us</h5>
        <ul className={styles.footerList}>
          <li>
            <UilFacebook size={20} className={styles.footerIcon} />
            <a href="Currentlly unavailable" target="_blank" rel="noopener noreferrer">
              Facebook(Currently unavailable)
            </a>
          </li>
          <li>
            <UilInstagram size={20} className={styles.footerIcon} />
            <a href="https://www.instagram.com/futu.ristic498/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col lg={12} className={styles.footerCopyright}>
        <p>&copy; 2024 Futuristic World. All rights reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>
    
    </NextUIProvider>
  );
};

export default AI;
