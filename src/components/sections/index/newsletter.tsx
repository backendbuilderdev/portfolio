import Section from '../../structure/section';
import Container from '../../structure/container';

export default function Newsletter() {
    return (
        <Section classProp="newsletter-section">
            <Container spacing={['VerticalXXL']}>
                <div className="newsletter-container">
                    <h2>Stay Updated</h2>
                    <p>Subscribe to get the latest updates and insights.</p>
                    <div data-uid="a881ca9970" data-format="inline" data-version="5"></div>
                </div>
            </Container>
        </Section>
    );
}