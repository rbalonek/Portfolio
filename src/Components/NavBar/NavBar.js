import React,{useEffect} from 'react';
import './NavBar.css';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 325 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        

        <nav className="navigation">
              <p>Skills</p>
              <p>Projects</p>
              <p>About</p>
              <p>Contact</p>
          
        </nav>

    </header>
  )
};

export default Navbar;