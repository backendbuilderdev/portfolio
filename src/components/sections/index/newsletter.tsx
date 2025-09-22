import Section from '../../structure/section';
import Container from '../../structure/container';

export default function Newsletter() {
    return (
        <Section classProp="newsletter-section">
            <Container spacing={['VerticalXXL']}>
                <div className="newsletter-container" style={{
                    textAlign: 'center', 
                    padding: '2rem',
                    backgroundColor: 'var(--bg-color-secondary, #f8f9fa)',
                    borderRadius: '8px',
                    margin: '2rem 0'
                }}>
                    <h2 style={{marginBottom: '1rem', color: 'var(--text-color, #333)'}}>Stay Updated</h2>
                    <p style={{marginBottom: '2rem', color: 'var(--text-color-secondary, #666)'}}>Subscribe to get the latest updates and insights.</p>
                    <div 
                        data-uid="a881ca9970" 
                        data-format="inline" 
                        data-version="5" 
                        style={{
                            minHeight: '200px', 
                            margin: '1rem 0',
                            width: '100%',
                            maxWidth: '500px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    ></div>
                </div>
            </Container>
        </Section>
    );
}