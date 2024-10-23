"use client";
import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { 
  FaRobot, FaCode, FaShieldAlt, FaShoppingCart, 
  FaDatabase, FaMobile, FaCloudUploadAlt, FaChartLine,
  FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';


interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  { 
    icon: FaRobot, 
    title: 'AI Integration', 
    description: 'Implement cutting-edge AI solutions to optimize your business processes.',
    details: [
      'Machine Learning Algorithms',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI-Powered Chatbots'
    ]
  },
  { 
    icon: FaCode, 
    title: 'Custom Software Development', 
    description: 'Tailored software solutions to meet your unique business needs.',
    details: [
      'Web Applications',
      'Desktop Software',
      'API Development',
      'Legacy System Modernization',
      'DevOps & CI/CD Implementation'
    ]
  },
  { 
    icon: FaShieldAlt, 
    title: 'Cybersecurity', 
    description: 'Protect your digital assets with our advanced security measures.',
    details: [
      'Penetration Testing',
      'Security Audits',
      'Incident Response Planning',
      'Security Awareness Training',
      'Compliance Management (GDPR, HIPAA, etc.)'
    ]
  },
  { 
    icon: FaShoppingCart, 
    title: 'E-commerce Solutions', 
    description: 'Build and optimize your online store for maximum conversions.',
    details: [
      'Custom E-commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'Customer Relationship Management',
      'SEO Optimization for E-commerce'
    ]
  },
  { 
    icon: FaDatabase, 
    title: 'Big Data Analytics', 
    description: 'Harness the power of your data with our advanced analytics tools.',
    details: [
      'Data Warehousing',
      'Business Intelligence Dashboards',
      'Predictive Modeling',
      'Real-time Analytics',
      'Data Visualization'
    ]
  },
  { 
    icon: FaMobile, 
    title: 'Mobile App Development', 
    description: 'Create stunning, high-performance apps for iOS and Android.',
    details: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Development (React Native)',
      'App Store Optimization',
      'Mobile App Testing & QA'
    ]
  },
  { 
    icon: FaCloudUploadAlt, 
    title: 'Cloud Migration', 
    description: 'Seamlessly transition your infrastructure to the cloud.',
    details: [
      'Cloud Strategy & Planning',
      'Data Migration',
      'Cloud-Native Application Development',
      'Serverless Architecture',
      'Multi-Cloud Management'
    ]
  },
  { 
    icon: FaChartLine, 
    title: 'Digital Transformation', 
    description: 'Transform your business with our comprehensive digital strategies.',
    details: [
      'Digital Strategy Consulting',
      'Process Automation',
      'IoT Integration',
      'Digital Workplace Solutions',
      'Change Management'
    ]
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg h-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <service.icon className="text-neonBlue text-4xl mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
    <ul className="list-disc pl-4">
      {service.details.map((detail: string, index: number) => (
        <li key={index} className="text-gray-300">{detail}</li>
      ))}
    </ul>
  </motion.div>
);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', { name, email, phone, message });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="primary" className="bg-neonBlue hover:bg-neonBlueDark text-white font-bold py-2 px-4 rounded">
        Send Message
      </Button>
    </Form>
  );
};

export default function Services() {
  return ( 
    <div className="bg-black text-white min-h-screen">
       <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3 fixed-top">
        <Navbar.Brand as={Link as any} href="/" className="d-flex align-items-center">
          <Image src="/logo.png" alt="Futuristic World Logo" width={120} height={40} className="mr-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/services" className="text-neonBlue hover:text-neonGreen transition-colors">Services</Nav.Link>
            <Nav.Link as={Link} href="/case-studies" className="text-neonBlue hover:text-neonGreen transition-colors">Case Studies</Nav.Link>
            <Nav.Link as={Link} href="/about" className="text-neonBlue hover:text-neonGreen transition-colors">About</Nav.Link>
            <Nav.Link as={Link} href="/blog" className="text-neonBlue hover:text-neonGreen transition-colors">Blog</Nav.Link>
            <Nav.Link as={Link} href="/contact" className="text-neonBlue hover:text-neonGreen transition-colors">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-neonBlue">Our Services</h1>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-8">
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
        <h2 className="text-3xl font-bold text-center mb-8 text-neonBlue">Get in Touch</h2>
        <Row>
          <Col md={6} lg={4} className="mb-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg h-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="text-neonBlue text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300">[info@example.com](mailto:info@example.com)</p>
            </motion.div>
          </Col>
          <Col md={6} lg={4} className="mb-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg h-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhone className="text-neonBlue text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </motion.div>
          </Col>
          <Col md={6} lg={4} className="mb-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg h-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="text-neonBlue text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-300">123 Main St,Anytown, USA 12345</p>
            </motion.div>
          </Col>
        </Row>
        <ContactForm />
      </Container>
    </div>
  );
}