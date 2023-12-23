// Core packages
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Career scss
import career from '../../../../assets/styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I have successfully completed my Bachelors degree in Computer Science from Government Engineering College of Bikaner. This three-year program provided me with a comprehensive curriculum that covered various aspects of computer science and its applications."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Government Engineering College, Bikaner</h3>
            <h4>Full-time</h4>
            {/* <h4>20 - 2025 · 4 years</h4> */}
            <h5>Bikaner, Rajasthan</h5>
        </span>
                            <p>I have successfully completed my Bachelors degree in Computer Science from Government Engineering College of Bikaner. This three-year program provided me with a comprehensive curriculum that covered various aspects of computer science and its applications.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

