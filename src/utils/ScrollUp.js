import React, {useState} from 'react';
import '../App.css';
import up from '../components/assets/up.png';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><img className='imgTop' src={up} alt=""/></button>
  );
}

export default ScrollArrow;