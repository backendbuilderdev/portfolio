import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

interface CheatsheetProps {
  content: string;
  title: string;
}

const cheatsheetData: Record<string, { title: string; content: string }> = {
  git: {
    title: 'Git Cheatsheet',
    content: `
# Git Cheatsheet

## Basic Commands
\`\`\`bash
git init                    # Initialize repository
git clone <url>             # Clone repository
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to remote
git pull                    # Pull from remote
git status                  # Check status
\`\`\`

## Branching
\`\`\`bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <branch>       # Switch branch
git checkout -b <name>      # Create and switch
git merge <branch>          # Merge branch
git branch -d <name>        # Delete branch
\`\`\`

## Remote Operations
\`\`\`bash
git remote -v               # List remotes
git remote add origin <url> # Add remote
git fetch                   # Fetch changes
git push -u origin main     # Push and set upstream
\`\`\`
    `
  },
  docker: {
    title: 'Docker Cheatsheet',
    content: `
# Docker Cheatsheet

## Container Management
\`\`\`bash
docker run <image>          # Run container
docker run -d <image>       # Run in background
docker ps                   # List running containers
docker ps -a                # List all containers
docker stop <id>            # Stop container
docker start <id>           # Start container
docker rm <id>              # Remove container
\`\`\`

## Image Management
\`\`\`bash
docker build -t <name> .    # Build image
docker images               # List images
docker pull <image>         # Pull image
docker push <image>         # Push image
docker rmi <id>             # Remove image
\`\`\`

## Docker Compose
\`\`\`bash
docker-compose up           # Start services
docker-compose up -d        # Start in background
docker-compose down         # Stop services
docker-compose logs         # View logs
\`\`\`
    `
  },
  javascript: {
    title: 'JavaScript ES6+ Cheatsheet',
    content: `
# JavaScript ES6+ Cheatsheet

## Array Methods
\`\`\`javascript
const arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2)         // Transform: [2, 4, 6, 8, 10]
arr.filter(x => x > 2)      // Filter: [3, 4, 5]
arr.reduce((a, b) => a + b) // Reduce: 15
arr.find(x => x > 2)        // Find: 3
arr.some(x => x > 3)        // Some: true
arr.every(x => x > 0)       // Every: true
\`\`\`

## Destructuring
\`\`\`javascript
// Object destructuring
const {name, age} = person;
const {name: fullName} = person;

// Array destructuring
const [first, second] = array;
const [head, ...tail] = array;
\`\`\`

## Arrow Functions
\`\`\`javascript
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => 'Hello';
\`\`\`

## Template Literals
\`\`\`javascript
const name = 'World';
const message = \`Hello \${name}!\`;
\`\`\`
    `
  }
};

export default function CheatsheetDetail({ content, title }: CheatsheetProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button 
            onClick={() => router.back()}
            style={{ 
              marginBottom: '2rem', 
              padding: '0.5rem 1rem', 
              backgroundColor: '#333', 
              border: 'none', 
              borderRadius: '4px', 
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            ← Back to Cheatsheets
          </button>
          
          <div 
            style={{ 
              backgroundColor: '#1a1a1a', 
              padding: '2rem', 
              borderRadius: '8px',
              fontFamily: 'monospace'
            }}
            dangerouslySetInnerHTML={{ 
              __html: content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre style="background: #000; padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>$2</code></pre>')
                              .replace(/`([^`]+)`/g, '<code style="background: #333; padding: 0.2rem 0.4rem; border-radius: 3px;">$1</code>')
                              .replace(/^# (.+)$/gm, '<h1 style="font-size: 2rem; margin: 2rem 0 1rem 0; color: #4ecdc4;">$1</h1>')
                              .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem 0; color: #ff6b6b;">$1</h2>')
                              .replace(/\n/g, '<br>')
            }}
          />
        </div>
      </Container>
    </Section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(cheatsheetData).map(slug => ({
    params: { slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const data = cheatsheetData[slug];

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      content: data.content,
      title: data.title
    }
  };
};