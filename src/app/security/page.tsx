"use client";

import React, { useState, FormEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './secure.module.css';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const CyberSecurity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Services offered
  const services = [
    { title: 'Threat Assessment', description: 'Identify and assess potential threats to your organization.' },
    { title: 'Incident Response', description: 'Quickly respond to security incidents to minimize damage.' },
    { title: 'Compliance Management', description: 'Ensure your organization meets industry regulations and standards.' },
    { title: 'Vulnerability Management', description: 'Regularly scan and remediate vulnerabilities in your systems.' },
    { title: 'Security Awareness Training', description: 'Educate your employees on security best practices.' },
    { title: 'Penetration Testing', description: 'Simulate attacks to identify weaknesses in your security posture.' },
  ];

  // Case studies
  const caseStudies = [
    {
      title: 'Financial Institution Security Overhaul',
      client: 'ABC Bank',
      challenge: 'High risk of data breaches and compliance issues.',
      solution: 'Implemented a multi-layered security framework.',
      results: ['Reduced incidents by 70%', 'Achieved compliance with regulations'],
      testimonial: 'Their expertise transformed our security posture.',
    },
    {
      title: 'E-commerce Platform Protection',
      client: 'XYZ Store',
      challenge: 'Frequent DDoS attacks affecting uptime.',
      solution: 'Deployed advanced DDoS protection measures.',
      results: ['99.9% uptime', 'Increased customer trust'],
      testimonial: 'We can now focus on growth without security worries.',
    },
    {
      title: 'Healthcare Data Security Enhancement',
      client: 'HealthPlus',
      challenge: 'Need to secure sensitive patient data against breaches.',
      solution: 'Implemented encryption and access controls.',
      results: ['100% compliance with HIPAA', 'Enhanced patient trust'],
      testimonial: 'Their solutions have made a significant difference in our operations.',
    },
    {
      title: 'Retail Cybersecurity Strategy',
      client: 'ShopSmart',
      challenge: 'Protecting customer data during transactions.',
      solution: 'Developed a comprehensive security strategy including firewalls and monitoring.',
      results: ['Zero data breaches in 2 years', 'Improved customer satisfaction'],
      testimonial: 'We feel secure knowing our data is protected.',
    },
  ];

  // Client testimonials
  const testimonials = [
  {
    quote: 'The team at CyberSecure is top-notch!',
    name: 'John Doe',
    position: 'CISO',
    company: 'Tech Innovations',
  },
  {
    quote: 'Their proactive approach saved us from a major breach.',
    name: 'Jane Smith',
    position: 'IT Manager',
    company: 'Global Corp',
  },
  {
    quote: 'Thanks to CyberSecure, we have peace of mind regarding our security.',
    name: 'Alice Johnson',
    position: 'Security Director',
    company: 'Finance Solutions',
  },
  {
    quote: 'Their expertise in cybersecurity is unmatched. Highly recommend!',
    name: 'Robert Brown',
    position: 'Operations Manager',
    company: 'Retail Group',
  },
];

  return (
    <>
      <NextUIProvider>
        <Container>
          {/* Hero Section */}
          <Row className={styles.heroSection}>
            <Col lg={12} className={styles.heroText}>
              <h1>Cybersecurity Solutions</h1>
              <p>Protecting your business from digital threats.</p>
              <Link href="/" passHref>
                <Button variant="shadow">Back</Button>
              </Link>
              <Button variant="shadow" size="lg" href="#Contact">Get Started</Button>
            </Col>
          </Row>

          {/* Services Section */}
          <Row className={styles.servicesSection}>
            <Col lg={12} className={styles.servicesTitle}>
              <h2>Our Services</h2>
              <p>Comprehensive cybersecurity services tailored to your needs.</p>
            </Col>
            {services.map((service, index) => (
              <Col lg={4} key={index}>
                <Card className={styles.serviceCard}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Case Studies Section */}
          <Row className={styles.caseStudiesSection}>
            <Col lg={12} className={styles.caseStudiesTitle}>
              <h2>Case Studies</h2>
              <p>Success stories from our clients.</p>
            </Col>
            {caseStudies.map((study, index) => (
              <Col lg={6} key={index}>
                <Card className={styles.caseStudyCard}>
                  <h3>{study.title}</h3>
                  <p className={styles.clientInfo}>{study.client}</p>
                  <div className={styles.challengeSection}>
                    <h4>Challenge:</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div className={styles.solutionSection}>
                    <h4>Solution:</h4>
                    <p>{study.solution}</p>
                  </div>
                  <div className={styles.resultsSection}>
                    <h4>Results:</h4>
                    <ul>
                      {study.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  <p className={styles.testimonialQuote}>{study.testimonial}</p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Security Stats Section */}
          <Row className={styles.statsSection}>
            <Col lg={12} className={styles.statsTitle}>
              <h2>Security Statistics</h2>
              <p>Our impact in numbers</p>
            </Col>
            <Col lg={3} md={6}>
              <div className={styles.statCard}>
                <h3>99.9%</h3>
                <p>Threat Detection Rate</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className={styles.statCard}>
                <h3>500+</h3>
                <p>Clients Protected</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className={styles.statCard}>
                <h3>24/7</h3>
                <p>Monitoring</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className={styles.statCard}>
                <h3>1M+</h3>
                <p>Threats Blocked</p>
              </div>
            </Col>
          </Row>

          {/* Security Features Section */}
          <Row className={styles.featuresSection}>
            <Col lg={12} className={styles.featuresTitle}>
              <h2>Security Features</h2>
              <p>Comprehensive protection for your digital assets</p>
            </Col>
            <Col lg={4} md={6}>
              <div className={styles.featureCard}>
                <i className="fas fa-shield-alt"></i>
                <h3>Firewall Protection</h3>
                <p>Advanced firewall systems to protect your network</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className={styles.featureCard}>
                <i className="fas fa-lock"></i>
                <h3>Encryption</h3>
                <p>End-to-end encryption for sensitive data </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className={styles.featureCard}>
                <i className="fas fa-user-shield"></i>
                <h3>Access Control</h3>
                <p>Robust access management systems</p>
              </div>
            </Col>
          </Row>

          {/* Testimonials Section */}
          <Row className={styles.testimonialsSection}>
            <Col lg={12} className={styles.testimonialsTitle}>
              <h2>Client Testimonials</h2>
              <p>What our clients say about us</p>
            </Col>
            {testimonials.map((testimonial, index) => (
              <Col lg={6} key={index}>
                <Card className={styles.testimonialCard}>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <p className={styles.authorName}>{testimonial.name}</p>
                    <p className={styles.authorPosition}>
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Contact Section */}
          <Row className={styles.contactSection} id="Contact">
            <Col lg={12} className={styles.contactTitle}>
              <h2>Get In Touch</h2>
              <p>Request a security consultation</p>
            </Col>
            <Col lg={8} className="mx-auto">
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    className={styles.formTextarea}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitMessage && (
                  <p className={styles.submitMessage}>{submitMessage}</p>
                )}
              </form>
            </Col>
          </Row>
        </Container>
      </NextUIProvider>
    </>
  );
};

export default CyberSecurity;
