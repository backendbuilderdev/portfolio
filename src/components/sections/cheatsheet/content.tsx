import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';

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
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Introduction</h2>
              <div style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '4px', border: '1px solid #333' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#ccc' }}>Git is a distributed version control system. This reference was made for Git 2.0.</p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#ccc' }}>For shortcut notation, see <code style={{ backgroundColor: '#333', padding: '0.2rem 0.4rem', borderRadius: '3px', color: '#fff' }}>:help key-notation</code>.</p>
              </div>
            </div>

            {/* Basic Commands */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Basic Commands</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', width: '40%', fontSize: '0.9rem', color: '#fff' }}>git init</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Initialize repository</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git clone &lt;url&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Clone repository</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git add .</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Stage all changes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git commit -m "message"</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Commit changes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git push</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Push to remote</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git pull</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Pull from remote</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Branching */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4ecdc4', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Branching</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', width: '40%', fontSize: '0.9rem', color: '#fff' }}>git branch</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>List branches</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git checkout &lt;branch&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Switch branch</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git checkout -b &lt;name&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Create and switch branch</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#2a2a2a', fontSize: '0.9rem', color: '#fff' }}>git merge &lt;branch&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#ccc' }}>Merge branch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Remote Operations */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>Remote Operations</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', border: '1px solid #e9ecef' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', width: '30%', fontSize: '0.9rem' }}>git remote -v</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>List remotes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git fetch</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Fetch changes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git push origin main</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Push to main branch</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git pull origin main</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Pull from main branch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Undoing Changes */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>Undoing Changes</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', border: '1px solid #e9ecef' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', width: '30%', fontSize: '0.9rem' }}>git reset HEAD~1</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Undo last commit (keep changes)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git reset --hard HEAD~1</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Undo last commit (discard changes)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git revert &lt;commit&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Create new commit that undoes changes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git checkout -- &lt;file&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Discard changes in file</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Stashing */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>Stashing</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', border: '1px solid #e9ecef' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', width: '30%', fontSize: '0.9rem' }}>git stash</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Stash current changes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git stash pop</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Apply and remove stash</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git stash list</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>List all stashes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git stash drop</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Delete stash</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Viewing History */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>Viewing History</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', border: '1px solid #e9ecef' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', width: '30%', fontSize: '0.9rem' }}>git log</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Show commit history</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git log --oneline</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Show compact history</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git show &lt;commit&gt;</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Show commit details</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f8f9fa', fontSize: '0.9rem' }}>git diff</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>Show unstaged changes</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}