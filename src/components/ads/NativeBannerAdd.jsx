import React from 'react'
import { useEffect,  useRef} from 'react';
export default function NativeBannerAdd() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//pl23032426.profitablegatecpm.com/9cc5ba656be3b6aaa155cc094929dd91/invoke.js';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
    
        const container = document.getElementById('container-9cc5ba656be3b6aaa155cc094929dd91');
        if (container) {
          container.appendChild(script);
        }
    
        return () => {
          if (container && container.firstChild) {
            container.removeChild(container.firstChild);
          }
        };
      }, []);
    
      return <div id="container-9cc5ba656be3b6aaa155cc094929dd91"></div>;
}
