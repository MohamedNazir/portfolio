import React from 'react';
import SocialMedia from './SocialMedia'

const FooterComponents = () => {
  return (
    <div className="footer">
      <SocialMedia></SocialMedia>
          <div class="footer-copywrite">
            &copy; {new Date().getFullYear()} Copyright: <a href="/"> Mohamed Nazir </a>
          </div>
    </div>

      );
    }
    
export default FooterComponents;