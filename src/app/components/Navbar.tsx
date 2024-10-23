"use client"
// src/app/components/Navbar.tsx

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-gray-900">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-neonGreen">
          Futuristic World
        </Typography>
        <div>
          <Link href="/" passHref>
            <Button color="inherit" className="mr-4">Home</Button>
          </Link>
          <Link href="/services" passHref>
            <Button color="inherit" className="mr-4">Services</Button>
          </Link>
          <Link href="/case-studies" passHref>
            <Button color="inherit" className="mr-4">Case Studies</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
