"use client"  
import AboutUs from "./components/Aboutus";
import styles from "./components/Navbar.module.css"
import React, { useState, useRef } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  UilWhatsapp,
  UilRobot, 
  UilModem, 
  UilShield, 
  UilShoppingCart, 
  UilDatabase, 
  UilMobileAndroid, 
  UilCloud, 
  UilChartGrowth, 
  UilEnvelope, 
  UilFacebook, 
  UilInstagram,
  UilBitcoinCircle,
  UilAtom,
  UilBrowser, 
  IconProps,
} from '@iconscout/react-unicons';
import Link from 'next/link';
import "./styles.css"
import ChatBubble from "./components/chatbot";
import HomeSection from "./home";


// Interface definitions
interface ServiceItem {
  icon: React.FC<IconProps>;
  title: string;
  description: string;
  features: string[];
  link: string;
  ref: string;
}

interface CaseStudy {
  client: string;
  result: string;
  challenge: string;
  solution: string;
  impact: string;
  testimonial?: string;
  industry: string;
  duration: string;
  technologies: string[];
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  role: string;
  image: string;
  rating: number;
  date: string;
  projectType: string;
}



// Services Data with expanded information
const services: ServiceItem[] = [
  { 
    icon: UilRobot, 
    title: 'AI & Machine Learning', 
    description: 'Unlock the power of AI for automation, insights, and innovation.',
    features: [
      'Deep Learning Models',
      'Natural Language Processing ',
      'Predictive Analytics',
      'Computer Vision'
    ],ref:'/AI',
    link: '#ai-ml'
  },
  { 
    icon: UilModem, 
    title: 'Full-Stack Development', 
    description: 'End-to-end development for web, mobile, and software platforms.',
    features: [
      'Frontend Development',
      'Backend Development',
      'Database Management',
      'API Integration'
    ],ref:'/stack',
    link: '#full-stack'
  },
  { 
    icon: UilShield, 
    title: 'Cybersecurity', 
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: [
      'Vulnerability Assessment',
      'Penetration Testing',
      'Incident Response',
      'Security Consulting'
    ],ref:'/security',
    link: '#cybersecurity'
  },
  { 
    icon: UilShoppingCart, 
    title: 'E-commerce Solutions', 
    description: 'Build modern, scalable online stores that drive sales and growth.',
    features: [
      'Custom E-commerce Development',
      'E-commerce Platform Integration',
      'Payment Gateway Integration',
      'Order Management System'
    ],ref:'/commerce',
    link: '#e-commerce'
  },
  { 
    icon: UilDatabase, 
    title: 'Big Data Analytics', 
    description: 'Harness the power of your data with advanced analytics tools.',
    features: [
      'Data Mining',
      'Predictive Modeling',
      'Data Visualization',
      'Business Intelligence'
    ],ref:'/data',
    link: '#big-data'
  },
  { 
    icon: UilMobileAndroid, 
    title: 'Mobile App Development', 
    description: 'Create stunning, high-performance apps for iOS and Android.',
    features: [
      'Native App Development',
      'Cross-Platform Development',
      'App Design',
      'App Testing'
    ],ref:'/mobile',
    link: '#mobile-app'
  },
  { 
    icon: UilCloud, 
    title: 'Cloud Migration', 
    description: 'Seamlessly transition your infrastructure to the cloud.',
    features: [
      'Cloud Assessment',
      'Cloud Migration Strategy',
      'Cloud Deployment',
      'Cloud Management'
    ],ref:'/cloud',
    link: '#cloud-migration'
  },
  { 
    icon: UilChartGrowth, 
    title: 'Digital Transformation', 
    description: 'Transform your business with comprehensive digital strategies.',
    features: [
      'Digital Strategy Development',
      'Digital Roadmap Creation',
      'Change Management',
      'Digital Adoption'
    ],ref:'/digital',
    link: '#digital-transformation'
  },
  { 
    icon: UilBitcoinCircle, 
    title: 'Blockchain Development', 
    description: 'Leverage blockchain technology for secure, decentralized solutions.',
    features: [
      'Smart Contract Development',
      'Decentralized App (DApp) Creation',
      'Cryptocurrency Integration',
      'Blockchain Consulting'
    ],ref:'/block',
    link: '#blockchain'
  },
  { 
    icon: UilRobot, 
    title: 'AR/VR Development', 
    description: 'Create immersive experiences with augmented and virtual reality.',
    features: [
      'AR/VR App Development',
      '3D Modeling and Animation',
      'Interactive Simulations',
      'Virtual Product Showcases'
    ],ref:'/AR',
    link: '#ar-vr'
  },
  { 
    icon: UilAtom, 
    title: 'IoT Solutions', 
    description: 'Connect and optimize your devices with Internet of Things technology.',
    features: [
      'IoT Device Integration',
      'IoT Platform Development',
      'Data Analytics for IoT',
      'IoT Security'
    ],ref:'/iot',
    link: '#iot'
  },
  { 
    icon: UilBrowser, 
    title: 'DevOps Services', 
    description: 'Streamline your development and operations with DevOps practices.',
    features: [
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code',
      'Containerization (Docker, Kubernetes)',
      'Monitoring and Logging'
    ],ref:'/dev',
    link: '#devops'
  }
];

// Case Studies Data with expanded information
const caseStudies: CaseStudy[] = [
  { 
    client: 'Tech Innovators Inc.', 
    result: 'Increased efficiency by 40% through AI implementation',
    challenge: 'Struggling with manual processes and data analysis',
    solution: 'Implemented custom AI algorithms for process automation and predictive analytics',
    impact: 'Reduced operational costs by 25% and improved decision-making accuracy by 35%',
    testimonial: 'Futuristic World has been instrumental in our digital transformation journey.',
    industry: 'Technology',
    duration: '6 months',
    technologies: ['Python', 'TensorFlow', 'AWS'],
  },
  { 
    client: 'E-commerce Giants', 
    result: 'Boosted online sales by 55% with our custom platform',
    challenge: 'Outdated e-commerce platform with poor user experience',
    solution: 'Developed a modern, scalable e-commerce solution with AI-powered recommendations',
    impact: 'Increased customer retention by 30% and average order value by 20%',
    testimonial: 'Their expertise in AI and machine learning has helped us stay ahead of the competition.',
    industry: 'E-commerce',
    duration: '9 months',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  { 
    client: 'Secure Systems Ltd.', 
    result: 'Reduced security breaches by 90% with our cybersecurity solutions',
    challenge: 'Vulnerable to cyber attacks and data breaches',
    solution: 'Implemented comprehensive cybersecurity measures, including AI-powered threat detection',
    impact: 'Improved security posture and reduced incident response time by 75%',
    testimonial: 'Futuristic World\'s team is highly skilled and dedicated to delivering exceptional results.',
    industry: 'Cybersecurity',
    duration: '12 months',
    technologies: ['Python', 'Django', 'AWS'],
  },
];

// Testimonials Data with expanded information
const testimonials: Testimonial[] = [
  { 
    name: 'John Doe', 
    company: 'Tech Solutions Inc.', 
    quote: 'Futuristic World has been instrumental in our digital transformation journey.',
    role: 'CEO',
    image: 'testimonial-1.jpg',
    rating: 4.5,
    date: 'February 10, 2023',
    projectType: 'Digital Transformation'
  },
  { 
    name: 'Jane Smith', 
    company: 'E-commerce Experts', 
    quote: 'Their expertise in AI and machine learning has helped us stay ahead of the competition.',
    role: 'CTO',
    image: 'testimonial-2.jpg',
    rating: 5,
    date: 'March 15, 2024',
    projectType: 'E-commerce Solutions'
  },
  { 
    name: 'Bob Johnson', 
    company: 'Innovative Startups', 
    quote: 'Futuristic World\'s team is highly skilled and dedicated to delivering exceptional results.',
    role: 'Founder',
    image: 'testimonial-3.jpg',
    rating: 4.5,
    date: 'April 20, 2024',
    projectType: 'Cybersecurity Solutions'
  },
];


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  

  
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

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
            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                budget: '',
                message: '',
            });
            // Optional: Add success notification or UI feedback
        } else {
            setStatus(`Error: ${data.error || 'Failed to send message'}`);
            // Optional: Add error notification or UI feedback
        }
    } catch (error) {
        setStatus('An error occurred while sending the message.');
        console.error('Error:', error);
        // Optional: Add error notification or UI feedback
    } finally {
        // Optional: Reset status after a delay
        setTimeout(() => {
            setStatus('');
        }, 5000);
    }
};
  const [navExpanded, setNavExpanded] = useState(false);

  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const testimonialsRef = useRef(null);


  return (<>
    <NextUIProvider>
      <ChatBubble/>
       <Navbar id="nav" expand="lg" className={`${styles.navbar} ${navExpanded ? styles.navExpanded : ''}`} fixed="top">
  <Container>
    <Navbar.Brand href="#home" className={styles.logoContainer}>
      <div className={styles.futuristicLogo}>
        <span className={styles.logoText}>FUTURISTIC</span>
        <div className={styles.logoLine}></div>
        <div className={styles.circuitLines}>
          <div className={styles.circuitLine}></div>
          <div className={styles.circuitLine}></div>
          <div className={styles.circuitLine}></div>
        </div>
        <div className={`${styles.corner} ${styles.corner1}`}></div>
        <div className={`${styles.corner} ${styles.corner2}`}></div>
        <div className={`${styles.corner} ${styles.corner3}`}></div>
        <div className={`${styles.corner} ${styles.corner4}`}></div>
      </div>
    </Navbar.Brand>

    <Navbar.Toggle 
      aria-controls="basic-navbar-nav" 
      onClick={() => setNavExpanded(!navExpanded)}
      className={styles.navbarToggle}
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`ms-auto ${styles.navLinks}`}>
        <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
        <Nav.Link href="#services" className={styles.navLink}>Services</Nav.Link>
        <Nav.Link href="#case-studies" className={styles.navLink}>Case Studies</Nav.Link>
        <Nav.Link href="#testimonials" className={styles.navLink}>Testimonials</Nav.Link>
        <Nav.Link href="#about" className={styles.navLink}>About us</Nav.Link>
        <Nav.Link href="#contact-us" className={styles.navLink}>Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
<HomeSection/>
      <section id="services" ref={servicesRef} className={styles.services}>
  <Container>
    <Row className="mb-5">
      <Col lg={12} className="text-center">
        <h2 className={styles.sectionHeading}>Our Services</h2>
        <div className={styles.headingUnderline}></div>
      </Col>
    </Row>
    <Row>
      {services.map((service, index) => (
        <Col lg={3} key={index}>
          <Card className={styles.serviceCard}>
            <Card>
              <div className={styles.serviceIcon}>
                <service.icon size={40} />
              </div>
              <Card className={styles.serviceTitle}>{service.title}</Card>
              <Card className={styles.serviceDescription}>{service.description}</Card>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                  
                ))}<Link href={service.ref}>
                <Button style={{background: 'linear-gradient(45deg, #007bff, #00ffcc)',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0,123,255,0.3)'}} >GET INQUIRY</Button></Link>
              </ul>
            </Card>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

<section id="case-studies" ref={caseStudiesRef} className={styles.caseStudies}>
  <Container>
    <Row className="mb-5">
      <Col lg={12} className="text-center">
        <h2 className={styles.sectionHeading}>Case Studies</h2>
        <div className={styles.headingUnderline}></div>
      </Col>
    </Row>
    <Row>
      {caseStudies.map((study, index) => (
        <Col lg={4} key={index}>
          <Card className={styles.caseStudyCard}>
            <Card>
              <Card className={styles.caseStudyClient}>{study.client}</Card>
              <Card className={styles.caseStudyResult}>{study.result}</Card>
              <div className={styles.caseStudyDetails}>
                <h5>Challenge:</h5>
                <p>{study.challenge}</p>
                <h5>Solution:</h5>
                <p>{study.solution}</p>
                <h5>Impact:</h5>
                <p>{study.impact}</p>
              </div>
              {study.testimonial && (
                <blockquote className={styles.caseStudyTestimonial}>
                 &quot;{study.testimonial}&quot;
                </blockquote>
              )}
              <div className={styles.caseStudyMeta}>
                <p><strong>Industry:</strong> {study.industry}</p>
                <p><strong>Duration:</strong> {study.duration}</p>
                <p><strong>Technologies:</strong> {study.technologies.join(', ')}</p>
              </div>
            </Card>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

<section id="testimonials" ref={testimonialsRef} className={styles.testimonials}>
  <Container>
    <Row className="mb-5">
      <Col lg={12} className="text-center">
        <h2 className={styles.sectionHeading}>Client Testimonials</h2>
        <div className={styles.headingUnderline}></div>
      </Col>
    </Row>
    <Row>
      {testimonials.map((testimonial, index) => (
        <Col lg={4} key={index}>
          <Card className={styles.testimonialCard}>
            <Card>
              <div className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</div>
              <div className={styles.testimonialAuthor}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role} at {testimonial.company}</p>
              </div>
              <div className={styles.testimonialMeta}>
                <p><strong>Rating:</strong> {testimonial.rating}/5</p>
                <p><strong>Date:</strong> {testimonial.date}</p>
                <p><strong>Project Type:</strong> {testimonial.projectType}</p>
              </div>
            </Card>
          </Card>
        </Col>
      ))}
    </Row>
   
        <AboutUs/>
  </Container></section><div id="contact-us"className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="text"
          name="budget"
          placeholder="Your Budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.contactTextarea}
        />
        <button type="submit" className={styles.contactButton}>Send Message</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
      
    </div>
    <footer className={styles.footer}>
  <Container>
    <Row>
      {/* About Us Section */}
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

</NextUIProvider></>

  );
  };

export default App;
