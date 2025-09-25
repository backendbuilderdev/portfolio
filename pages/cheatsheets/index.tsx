import React from 'react';
import Link from 'next/link';
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

const cheatsheets = [
  { slug: 'git', title: 'Git', description: 'Version control commands', category: 'Development' },
  { slug: 'docker', title: 'Docker', description: 'Container management', category: 'DevOps' },
  { slug: 'linux', title: 'Linux', description: 'Command line reference', category: 'System' },
  { slug: 'javascript', title: 'JavaScript', description: 'ES6+ features and methods', category: 'Languages' },
  { slug: 'react', title: 'React', description: 'Hooks and components', category: 'Frontend' },
  { slug: 'css', title: 'CSS', description: 'Flexbox and Grid', category: 'Frontend' }
];

export default function Cheatsheets() {
  const categories = [...new Set(cheatsheets.map(c => c.category))];

  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Developer Cheatsheets</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Quick reference guides for developers</p>
          </header>

          {categories.map(category => (
            <div key={category} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4ecdc4' }}>{category}</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '1rem' 
              }}>
                {cheatsheets
                  .filter(sheet => sheet.category === category)
                  .map(sheet => (
                    <Link key={sheet.slug} href={`/cheatsheets/${sheet.slug}`}>
                      <div style={{
                        border: '1px solid #333',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        backgroundColor: '#1a1a1a',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>{sheet.title}</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{sheet.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}