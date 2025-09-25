import React, { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function CheatsheetContent() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Git cheatsheet</h1>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Introduction */}
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'relative', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}>
                <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>README.md</div>
                <div style={{ padding: '2rem 1rem 1rem 1rem' }}>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4' }}>Introduction</h2>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#ccc' }}>Git is a distributed version control system. This reference was made for Git 2.0.</p>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#ccc' }}>For shortcut notation, see <code style={{ backgroundColor: '#333', padding: '0.2rem 0.4rem', borderRadius: '3px', color: '#fff' }}>:help key-notation</code>.</p>
                </div>
              </div>
            </div>

            {/* Basic Commands */}
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'relative', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}>
                <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>basic.sh</div>
                <div style={{ padding: '2rem 1rem 1rem 1rem' }}>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4' }}>Basic Commands</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #333' }}>
                        <td 
                          style={{ 
                            padding: '0.75rem', 
                            fontFamily: 'monospace', 
                            backgroundColor: '#2a2a2a', 
                            width: '40%', 
                            fontSize: '0.9rem', 
                            color: '#fff',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#3a3a3a';
                            const copyBtn = e.currentTarget.querySelector('.copy-btn') as HTMLElement;
                            if (copyBtn) copyBtn.style.opacity = '1';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#2a2a2a';
                            const copyBtn = e.currentTarget.querySelector('.copy-btn') as HTMLElement;
                            if (copyBtn) copyBtn.style.opacity = '0';
                          }}
                          onClick={() => copyToClipboard('git init')}
                        >
                          git init
                          <span 
                            className="copy-btn"
                            style={{
                              position: 'absolute',
                              right: '8px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              opacity: '0',
                              fontSize: '0.7rem',
                              color: '#4ecdc4',
                              transition: 'opacity 0.2s'
                            }}
                          >
                            📋
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Initialize repository</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #333' }}>
                        <td 
                          style={{ 
                            padding: '0.75rem', 
                            fontFamily: 'monospace', 
                            backgroundColor: '#2a2a2a', 
                            fontSize: '0.9rem', 
                            color: '#fff',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#3a3a3a';
                            const copyBtn = e.currentTarget.querySelector('.copy-btn') as HTMLElement;
                            if (copyBtn) copyBtn.style.opacity = '1';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#2a2a2a';
                            const copyBtn = e.currentTarget.querySelector('.copy-btn') as HTMLElement;
                            if (copyBtn) copyBtn.style.opacity = '0';
                          }}
                          onClick={() => copyToClipboard('git clone <url>')}
                        >
                          git clone &lt;url&gt;
                          <span 
                            className="copy-btn"
                            style={{
                              position: 'absolute',
                              right: '8px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              opacity: '0',
                              fontSize: '0.7rem',
                              color: '#4ecdc4',
                              transition: 'opacity 0.2s'
                            }}
                          >
                            📋
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Clone repository</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Branching */}
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'relative', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}>
                <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>branches.sh</div>
                <div style={{ padding: '2rem 1rem 1rem 1rem' }}>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4' }}>Branching</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #333' }}>
                        <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', width: '40%', fontSize: '0.9rem', color: '#fff' }}>git branch</td>
                        <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>List branches</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #333' }}>
                        <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git checkout &lt;branch&gt;</td>
                        <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Switch branch</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}