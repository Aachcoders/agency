"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { NextUIProvider, Button, Card} from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap'
import { UilEnvelope, UilFacebook, UilInstagram, UilWhatsapp, UilArrow, UilServer, UilMobileAndroid, UilDesktop, UilCloud, UilDatabase, UilWebGrid} from '@iconscout/react-unicons';
import styles from './stack.module.css';

// Full Stack Service interface
interface FullStackService {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  benefits: string[];
}

// Full Stack Services data
const fullStackServices: FullStackService[] = [
  {
    icon: UilArrow,
    title: 'Front-End Development',
    description: 'Create stunning and responsive user interfaces for web applications.',
    technologies: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Responsive Design',
      'Single Page Applications',
      'Progressive Web Apps',
      'Cross-browser Compatibility',
      'UI/UX Implementation',
    ],
    benefits: [
      'Improved User Experience',
      'Faster Load Times',
      'Increased User Engagement',
      'Better SEO Performance',
    ],
  },
  {
    icon: UilServer,
    title: 'Back-End Development',
    description: 'Build robust and scalable server-side applications and APIs.',
    technologies: ['Node.js', 'Python', 'Java', 'Ruby on Rails', 'PHP', 'ASP.NET'],
    features: [
      'RESTful API Development',
      'Database Integration',
      'Authentication & Authorization',
      'Server-side Rendering',
      'Microservices Architecture',
    ],
    benefits: [
      'Scalable Infrastructure',
      'Improved Data Management',
      'Enhanced Security',
      'Efficient Business Logic Implementation',
    ],
  },
  {
    icon: UilMobileAndroid,
    title: 'Mobile App Development',
    description: 'Develop cross-platform mobile applications for iOS and Android.',
    technologies: ['React Native', 'Flutter', 'Ionic', 'Swift', 'Kotlin'],
    features: [
      'Native Performance',
      'Cross-platform Compatibility',
      'Offline Functionality',
      'Push Notifications',
      'App Store Optimization',
    ],
    benefits: [
      'Wider Audience Reach',
      'Cost-effective Development',
      'Faster Time-to-Market',
      'Consistent User Experience Across Platforms',
    ],
  },
  {
    icon: UilDesktop,
    title: 'Desktop Application Development',
    description: 'Create powerful desktop applications for Windows, macOS, and Linux.',
    technologies: ['Electron', 'Qt', 'JavaFX', '.NET', 'Python (PyQt/wxPython)'],
    features: [
      'Cross-platform Compatibility',
      'Native OS Integration',
      'Offline Functionality',
      'Automatic Updates',
      'Custom UI/UX Design',
    ],
    benefits: [
      'Enhanced Performance for Resource-Intensive Tasks',
      'Better System Integration',
      'Improved Security for Sensitive Data',
      'Customizable User Experience',
    ],
  },
  {
    icon: UilCloud,
    title: 'Cloud Services Integration',
    description: 'Leverage cloud platforms to build scalable and resilient applications.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'DigitalOcean'],
    features: [
      'Serverless Architecture',
      'Containerization (Docker, Kubernetes)',
      'Load Balancing',
      'Auto-scaling',
      'Cloud Storage Solutions',
    ],
    benefits: [
      'Improved Scalability',
      'Reduced Infrastructure Costs',
      'Enhanced Reliability and Uptime',
      'Global Deployment Capabilities',
    ],
  },
  {
    icon: UilDatabase,
    title: 'Database Design and Management',
    description: 'Design and implement efficient database solutions for your applications.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
    features: [
      'Schema Design',
      'Data Modeling',
      'Query Optimization',
      'Data Migration',
      'Backup and Recovery Solutions',
    ],
    benefits: [
      'Improved Data Integrity',
      'Faster Query Performance',
      'Scalable Data Storage',
      'Enhanced Data Security',
    ],
  },
  {
    icon: UilWebGrid,
    title: 'Full Stack Integration',
    description: 'Seamlessly integrate front-end, back-end, and database technologies.',
    technologies: ['MERN Stack', 'MEAN Stack', 'Ruby on Rails', 'Django', 'Laravel'],
    features: [
      'End-to-End Application Development',
      'API Integration',
      'State Management',
      'Full Stack Testing',
      'Deployment and DevOps',
    ],
    benefits: [
      'Faster Development Cycle',
      'Consistent Technology Stack',
      'Improved Application Performance',
      'Easier Maintenance and Updates',
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
    title: 'E-commerce Platform Overhaul',
    client: 'Global Retail Chain',
    challenge: 'Modernizing legacy e-commerce system to handle increased traffic and improve user experience',
    solution: 'Developed a scalable full stack solution using React, Node.js, and MongoDB with AWS integration',
    results: [
      '300% increase in concurrent users capacity',
      '50% reduction in page load time',
      '25% increase in conversion rate',
    ],
    testimonial: "The new platform has transformed our online presence, significantly boosting our sales and customer satisfaction.",
  },
  {
    title: 'Real-time Collaboration Tool',
    client: 'Tech Startup',
    challenge: 'Building a real-time collaboration platform for remote teams',
    solution: 'Created a full stack application using Vue.js, Socket.io, Express, and PostgreSQL',
    results: [
      'Supports 10,000+ concurrent users',
      '99.99% uptime achieved',
      '40% increase in team productivity reported by clients',
    ],
    testimonial: "This tool has revolutionized how our team works remotely. It's become an indispensable part of our daily operations.",
  },
  {
    title: 'Mobile Banking App',
    client: 'Regional Bank',
    challenge: 'Developing a secure and user-friendly mobile banking application',
    solution: 'Built a cross-platform mobile app using React Native with a .NET Core backend and SQL Server database',
    results: [
      '1 million+ app downloads in the first year',
      '80% reduction in in-branch transactions',
      '95% positive user reviews',
    ],
    testimonial: "The mobile app has significantly improved our customer engagement and reduced operational costs.",
  },
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
    name: "John Smith",
    position: "CTO",
    company: "TechInnovate Inc.",
    quote: "The full stack development team delivered a robust and scalable solution that exceeded our expectations. Their expertise across the entire technology stack is impressive.",
  },
    {
    name: "Emily Davis",
    position: "Product Manager",
    company: "FinTech Solutions",
    quote: "Working with this team was a game-changer for our product. They understood our needs and delivered a seamless integration of front-end and back-end technologies.",
  },
  {
    name: "Michael Brown",
    position: "CEO",
    company: "E-commerce Hub",
    quote: "Their full stack development services helped us launch our platform ahead of schedule. The quality of work and attention to detail were outstanding.",
  },
];

// Contact form state
const FullStack: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      const response = await fetch('/api/contact', {
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
          message: '',
        });
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

  return (
    <NextUIProvider>
      <Container>
        <Row>
          <Col lg={12} className={styles.heroCTA}>
            <Button color="primary" onClick={() => window.location.href = '/'} className={styles.heroCT}>
              Back
            </Button>
            <Link href="#Contact">
              <Button color="primary" className={styles.heroCT}>Contact us</Button>
            </Link>
          </Col>
        </Row>

        {/* Hero Section */}
        <Row className={styles.heroSection}>
          <Col lg={6} className={styles.heroText}>
            <h1>Unlock the Power of Full Stack Development</h1>
            <p>
              Transform your business with our comprehensive full stack development services. From front-end to back-end, we cover it all.
            </p>
            <Button size="lg" color="primary" className={styles.heroCTA}>
              Get Started
            </Button>
          </Col>
        </Row>

        {/* Full Stack Services Section */}
        <Row className={styles.servicesSection}>
          <Col lg={12} className={styles.servicesTitle}>
            <h2>Our Full Stack Services</h2>
            <p>
              Explore our range of full stack development services designed to meet your business needs.
            </p>
          </Col>
          {fullStackServices.map((service, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.serviceCard}>
                <service.icon size={40} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <h4>Technologies:</h4>
                <p>{service.technologies.join(', ')}</p>
                <h4>Features:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h4>Benefits:</h4>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
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
              Discover how our full stack solutions have transformed businesses across various industries.
            </p>
          </Col>
                    {caseStudies.map((study, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.caseStudyCard}>
                <h3>{study.title}</h3>
                <p className={styles.clientInfo}>
                  {study.client}
                </p>
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
                {study.testimonial && (
                  <blockquote className={styles.testimonialQuote}>
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
            <h2>Client Testimonials</h2>
            <p>
              See what our clients say about our full stack development services.
            </p>
          </Col>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={index}>
              <Card className={styles.testimonialCard}>
                <blockquote className={styles.quote}>
                  &quot;{testimonial.quote}&quot;
                </blockquote>
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
            <h2>Start Your Project</h2>
            <p>
              Ready to transform your ideas into reality? Let discuss your project!
            </p>
          </Col>
          <Col lg={6} className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.formTextarea}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                color="primary"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitMessage && (
                <p className={styles.submitMessage}>{submitMessage}</p>
              )}
            </form>
          </Col>
          <Col lg={6} className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <h3>Contact Information</h3>
              <div className={styles.contactItem}>
                <UilWhatsapp size={20} />
                <a href="https://wa.me/+917859006724" target="_blank" rel="noopener noreferrer">
                  +91 7859006724
                </a>
              </div>
              <div className={styles.contactItem}>
                <UilEnvelope size={20} />
                <a href="mailto:sales@futuristiccreations.tech">
                  sales@futuristiccreations.tech
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg={4} className={styles.footerColumn}>
              <h5 className={styles.footerHeading}>About Us</h5>
              <p className={styles.footerText}>
                Futuristic World is a leading provider of full stack development services,
                delivering innovative solutions for businesses worldwide.
              </p>
            </Col>
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
                  <a href="mailto:sales@futuristiccreations.tech">
                    sales@futuristiccreations.tech
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4} className={styles.footerColumn}>
              <h5 className={styles.footerHeading}>Follow Us</h5>
              <ul className={styles.footerList}>
                <li>
                  <UilFacebook size={20} className={styles.footerIcon} />
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Facebook (Coming Soon)
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

export default FullStack;
