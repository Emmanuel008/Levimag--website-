import {useState} from 'react'
import { useAnimation, useCycle } from "framer-motion";
const AnimateNavToggler = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle("0%", "150%");
  const animation = useAnimation();

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
    animation.start({ x: x, display: "block" });
    cycleX();
  };

  return {showNavLinks,animation, toggleNavbar }
}

export default AnimateNavToggler
