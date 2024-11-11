'use client'

import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <div id="home" className="hero-section" style={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <iframe 
  width="100%" 
  height="100%" 
  src="https://6723b10660e7a8442cf9b28c--roaring-mandazi-2f6118.netlify.app/"
  frameBorder="0" 
  allowFullScreen
  allow="autoplay; loop"
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
          background: 'rgba(0, 0, 0, 0.5)'
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
              >
                <Link href="#services">
                  <Button 
                    size="lg" 
                    variant="primary"
                    className="mt-4 hero-btn"
                    style={{
                      background: 'linear-gradient(45deg, #007bff, #00ffcc)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
                    }}
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default HomeSection;
