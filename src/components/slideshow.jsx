import React, { useEffect, useRef, useState } from 'react';
import styles from './slideshow.module.css';

export const Slideshow = (props) => {
  const observer = useRef(null);
  const [activeParagraphs, setActiveParagraphs] = useState([]);

// Dummy data for demonstration
const paragraphs = [
  { id: 'para1', header: "1. Choose Your Bar:",  text: "Liquidity uses geolocation to detect the bars closest to you, so you don't have to waste any time scrolling or searching to find the establishment you want to place an order for. Simply tap their icon on the homepage, and you are well on your way to having a drink in your hands. ", image: 'img/app/LandingPage.png' },
  { id: 'para2', header: "2. Select Your Items:", text: "Adding items to your cart is as simple as selecting the drink you want using our in-app menu, adding any customizations/special requests, and pressing the 'Add to Cart' button.", image: 'img/app/Payment.png' },
  { id: 'para3', header: "3. Check Out:", text: "Liquidity's checkout interface is designed to be as smooth as possible to ensure that your ordering experience is seamless. Simply select whether you are ordering for a table or collection at the bar, choose your method of payment, and add a tip - it's that easy!", image: 'img/app/Checkout.png' },
  { id: 'para4', header: "4. Receive Your Order:", text: "If you placed a table order, then simply lay back and wait for your drinks to be brought to you by a server. Otherwise, keep your provided order QR, wait until you receive a notification informing you that your drinks are ready, go the Liquidity Bar Terminal to collect your order, and enjoy!", image: 'img/app/Payment.png' },
  // ... more paragraphs
];


  const {isMobile} = props;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    observer.current = new IntersectionObserver((entries) => {
      setActiveParagraphs(prevActiveParagraphs => {
        // Create a new set to keep track of active paragraphs for efficient lookup
        const activeSet = new Set(prevActiveParagraphs);
    
        entries.forEach(entry => {
          const id = entry.target.dataset.id;
          if (entry.isIntersecting) {
            // Add the id to the set if the entry is intersecting
            activeSet.add(id);
          } else {
            // Remove the id from the set if the entry is not intersecting
            activeSet.delete(id);
          }
        });
    
        // Convert the set back to an array for setting the state
        return Array.from(activeSet);
      });
    }, options);

    const elements = document.querySelectorAll(`.${styles.paragraph}`);
    elements.forEach(element => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  let content
  if (isMobile){
    content =
        <div className={styles.slideshowMobile}>
          {paragraphs.map(({ id, image, header, text }) => (
            <div>
            <img
              className={styles.imgMobile}
              src={image}
              alt={`Image for paragraph ${id}`}
            />
            <p className={styles.headerMobile}>{header}</p>
            <p className={styles.paragraphMobile}>{text}</p>
            </div>
          ))}
        </div>
  }else{
    content = 
      <div className={styles.slideshowContainer}>
        <div className={styles.imageColumn} style={{ backgroundColor: '#000000' }}>
          {paragraphs.map(({ id, image }) => (
            <img
              key={id}
              src={image}
              alt={`Image for paragraph ${id}`}
              className={`${styles.fadeInOut} ${activeParagraphs.includes(id) ? styles.active : ''}`}
            />
          ))}
        </div>
        <div className={styles.textColumn} style={{ backgroundColor: '#000000', color:"#FFFFFF" }}>
          {paragraphs.map(({ id, header, text }) => (
            <div>
              <p className={styles.header}>{header}</p>
              <p key={id} className={styles.paragraph} data-id={id}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
  }

  return (
    <div id="slideshow" className= "text-center">
        <div className='feat-bg'>
        <div className="section-title">
        <h2>Our Features</h2>
        </div>
        {content}
    </div>
    </div>
  );
};