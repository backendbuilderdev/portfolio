import React, { useEffect } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/backendbuilder" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </Container>
    </Section>
  );
}