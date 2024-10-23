"use client"
import styles from './components/Navbar.module.css';
import Image from 'next/image';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import Spline from '@splinetool/react-spline';
import { Navbar, Nav, Container, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { 
  UilRobot, 
  UilModem, 
  UilShield, 
  UilShoppingCart, 
  UilDatabase, 
  UilMobileAndroid, 
  UilCloud, 
  UilChartGrowth,
  UilTwitter, 
  UilLinkedin, 
  UilEnvelope, 
  UilFacebook, 
  UilInstagram, 
  UilYoutube, 
  UilGithub,
  UilAngleRight,
  UilArrowRight,
  UilClock,
  UilMapMarker,
  UilPhone
} from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Roboto, Orbitron } from 'next/font/google';
import Link from 'next/link';

// Font configurations
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap'
});

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

// Animation variants
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Interface definitions
interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  features: string[];
  link: string;
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
  images: string[];
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

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  likes: number;
  comments: number;
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
    link: '#digital-transformation'
  },
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
    images: ['case-study-1.jpg', 'case-study-2.jpg']
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
    images: ['case-study-3.jpg', 'case-study-4.jpg']
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
    images: ['case-study-5.jpg', 'case-study-6.jpg']
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
    rating: 5,
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
    date: 'March 15, 2023',
    projectType: 'E-commerce Solutions'
  },
  { 
    name: 'Bob Johnson', 
    company: 'Innovative Startups', 
    quote: 'Futuristic World\'s team is highly skilled and dedicated to delivering exceptional results.',
    role: 'Founder',
    image: 'testimonial-3.jpg',
    rating: 5,
    date: 'April 20, 2023',
    projectType: 'Cybersecurity Solutions'
  },
];

// Blog Posts Data with expanded information
const blogPosts: BlogPost[] = [
  { 
    title: 'The Future of AI in Business', 
    excerpt: 'Explore the latest trends and innovations in AI and its impact on business.',
    date: 'February 10, 2023',
    author: 'John Doe',
    category: 'AI & Machine Learning',
    readTime: '5 minutes',
    image: 'blog-post-1.jpg',
    tags: ['AI', 'Machine Learning', 'Business'],
    likes: 20,
    comments: 5
  },
  { 
    title: 'Cybersecurity in the Digital Age ', 
    excerpt: 'Learn how to protect your digital assets from emerging cyber threats.',
    date: 'March 15, 2023',
    author: 'Jane Smith',
    category: 'Cybersecurity',
    readTime: '7 minutes',
    image: 'blog-post-2.jpg',
    tags: ['Cybersecurity', 'Digital Age', 'Threats'],
    likes: 30,
    comments: 10
  },
  { 
    title: 'The Rise of E-commerce', 
    excerpt: 'Discover the latest trends and strategies for success in the e-commerce landscape.',
    date: 'April 20, 2023',
    author: 'Bob Johnson',
    category: 'E-commerce Solutions',
    readTime: '9 minutes',
    image: 'blog-post-3.jpg',
    tags: ['E-commerce', 'Trends', 'Strategies'],
    likes: 40,
    comments: 15
  },
];

function App() {
  const [navExpanded, setNavExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [servicesInView, setServicesInView] = useState(false);
  const [caseStudiesInView, setCaseStudiesInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
  const [blogInView, setBlogInView] = useState(false);

  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);

  const { ref: servicesInViewRef } = useInView({
    threshold: 0.5,
  });
  const { ref: caseStudiesInViewRef} = useInView({
    threshold: 0.5,
  });
  const { ref: testimonialsInViewRef} = useInView({
    threshold: 0.5,
  });
  const { ref: blogInViewRef} = useInView({
    threshold: 0.5,
  });

  return (
    <NextUIProvider>
       <Navbar id="nav" expand="lg" className={navExpanded ? 'nav-expanded' : ''}>
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
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#case-studies">Case Studies</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div id="home"className="hero-section" style={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Spline Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Spline 
          scene="https://prod.spline.design/WP92pJCwSv0HQbIa/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)' // Optional: adds a dark overlay
        }}
      >
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col lg={6} className="hero-text text-white">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="display-4 fw-bold"
              >
                Welcome to Futuristic World
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lead mt-4"
              >
                Unlock the power of AI, machine learning, and digital transformation 
                to drive growth and innovation.
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ><Link href="#services">
                <Button 

                  size="lg" 
                  color="primary"
                  className="mt-4 hero-btn"
                  style={{
                    background: 'linear-gradient(45deg, #007bff, #00ffcc)',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
                  }}
                >
                  Explore Our Services
                </Button></Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div></div>

      <section id="services" ref={servicesRef} className="services">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={3} key={index}>
                <Card className="service-card">
                  <Card>
                    <service.icon size={40} />
                    <Card>{service.title}</Card>
                    <Card>{service.description}</Card>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="case-studies" ref={caseStudiesRef} className="case-studies">
        <Container>
          <Row>
            {caseStudies.map((study, index) => (
              <Col lg={4} key={index}>
                <Card className="case-study-card">
                  <Card>
                    <Card>{study.client}</Card>
                    <Card>{study.result}</Card>
                    <Card>{study.challenge}</Card>
                    <Card>{study.solution}</Card>
                    <Card>{study.impact}</Card>
                    <Card>{study.testimonial}</Card>
                    <Card>Industry: {study.industry}</Card>
                    <Card>Duration: {study.duration}</Card>
                    <Card>Technologies: {study.technologies.join(', ')}</Card>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="testimonials" ref={testimonialsRef} className="testimonials">
        <Container>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <Card className="testimonial-card">
                  <Card>
                    <Card>{testimonial.name}</Card>
                    <Card>{testimonial.quote}</Card>
                    <Card className="company">{testimonial.company}</Card>
                    <Card className="role">{testimonial.role}</Card>
                    <Card>Rating: {testimonial.rating}/5</Card>
                    <Card>Date: {testimonial.date}</Card>
                    <Card>Project Type: {testimonial.projectType}</Card>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="blog" ref={blogRef} className="blog">
        <Container>
          <Row>
            {blogPosts.map((post, index) => (
              <Col lg={4} key={index}>
                <Card className="blog-post-card">
                  <Card>
                    <Card>{post.title}</Card>
                    <Card>{post.excerpt}</Card>
                    <Card className="date">{post.date}</Card>
                    <Card className="author">{post.author}</Card>
                    <Card className="category">{post.category}</Card>
                    <Card>Read Time: {post.readTime}</Card>
                    <Card>Image: <img src={post.image} alt={post.title} /></Card>
                    <Card>Tags: {post.tags.join(', ')}</Card>
                    <Card>Likes: {post.likes}</Card>
                    <Card>Comments: {post.comments}</Card>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer>
        <Container>
          <Row>
            <Col lg={4}>
              <h5>About Us</h5>
              <p>
                Futuristic World is a leading provider of AI, machine learning, and digital transformation solutions.
              </p>
            </Col>
            <Col lg={4}>
              <h5>Get in Touch</h5>
              <p>
                <UilEnvelope size={20} /> <a href="mailto:info@futuristicworld.com ">info@futuristicworld.com</a>
              </p>
              <p>
                <UilTwitter size={20} /> <a href="https://twitter.com/futuristicworld">@futuristicworld</a>
              </p>
              <p>
                <UilLinkedin size={20} /> <a href="https://linkedin.com/company/futuristicworld">Futuristic World</a>
              </p>
            </Col>
            <Col lg={4}>
              <h5>Follow Us</h5>
              <p>
                <UilFacebook size={20} /> <a href="https://facebook.com/futuristicworld">Facebook</a>
              </p>
              <p>
                <UilInstagram size={20} /> <a href="https://instagram.com/futuristicworld">Instagram</a>
              </p>
              <p>
                <UilYoutube size={20} /> <a href="https://youtube.com/futuristicworld">YouTube</a>
              </p>
              <p>
                <UilGithub size={20} /> <a href="https://github.com/futuristicworld">GitHub</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </NextUIProvider>
  );
}

export default App;