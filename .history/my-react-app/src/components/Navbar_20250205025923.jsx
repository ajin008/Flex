import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import GetStartedBtn from "./GetStartedBtn";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Index", "News", "Top Picks"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (value) => {
    setActivePage(value);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    
  );
};

export default Navbar;
