# AI Agent Guidelines

## Overview
This document defines the operational guidelines, best practices, and constraints for AI agents working on this portfolio project.

## Agent Roles & Responsibilities

### Code Assistant
- **Primary Role**: Code generation, debugging, and optimization
- **Scope**: Frontend (React/Next.js), Backend (Node.js/Python), DevOps
- **Authority Level**: Can modify code, suggest architecture changes

### Documentation Agent  
- **Primary Role**: Technical writing, API docs, user guides
- **Scope**: Markdown files, code comments, README updates
- **Authority Level**: Can create/update documentation

### Review Agent
- **Primary Role**: Code review, security analysis, quality assurance
- **Scope**: Pull requests, security scans, performance analysis
- **Authority Level**: Can approve/reject changes, suggest improvements

## Do's and Don'ts

### ✅ DO's

#### Code Quality
- Follow existing code style and conventions
- Write comprehensive tests for new features
- Use TypeScript types and interfaces
- Implement proper error handling
- Add meaningful comments for complex logic

#### Security
- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper authentication/authorization
- Follow OWASP security guidelines
- Never commit secrets or API keys

#### Performance
- Optimize images and assets
- Implement lazy loading where appropriate
- Use React.memo for expensive components
- Minimize bundle size
- Cache API responses when possible

#### Documentation
- Update README for new features
- Document API endpoints and parameters
- Include code examples in documentation
- Keep changelog updated
- Write clear commit messages

### ❌ DON'Ts

#### Code Practices
- Don't hardcode configuration values
- Don't ignore TypeScript errors
- Don't skip error handling
- Don't commit commented-out code
- Don't use deprecated APIs

#### Security
- Don't expose sensitive information in logs
- Don't use weak authentication methods
- Don't trust user input without validation
- Don't store passwords in plain text
- Don't ignore security warnings

#### Performance
- Don't load unnecessary dependencies
- Don't create memory leaks
- Don't block the main thread
- Don't make excessive API calls
- Don't ignore Core Web Vitals

#### Project Management
- Don't make breaking changes without discussion
- Don't modify core architecture without approval
- Don't skip testing before deployment
- Don't ignore existing conventions
- Don't work on multiple features simultaneously

## Communication Protocols

### Status Updates
- Provide progress updates every 2 hours for active tasks
- Report blockers immediately
- Document decisions and rationale
- Share relevant code snippets or screenshots

### Error Reporting
- Include full error messages and stack traces
- Provide steps to reproduce issues
- Suggest potential solutions
- Escalate critical issues immediately

### Code Reviews
- Review all changes before implementation
- Check for security vulnerabilities
- Verify test coverage
- Ensure documentation is updated

## Quality Gates

### Before Implementation
- [ ] Requirements clearly defined
- [ ] Architecture approved
- [ ] Dependencies identified
- [ ] Test plan created

### Before Deployment
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Performance benchmarks met
- [ ] Security scan completed

## Emergency Procedures

### Critical Issues
1. Stop all non-essential work
2. Assess impact and severity
3. Implement immediate fix or rollback
4. Document incident and resolution
5. Conduct post-mortem analysis

### Rollback Process
1. Identify last known good state
2. Revert problematic changes
3. Verify system stability
4. Communicate status to stakeholders
5. Plan proper fix implementation

## Compliance Requirements

### Data Privacy
- Follow GDPR guidelines for EU users
- Implement proper data retention policies
- Provide data export/deletion capabilities
- Document data processing activities

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Test with screen readers
- Ensure keyboard navigation
- Provide alternative text for images

### Performance Standards
- Page load time < 3 seconds
- First Contentful Paint < 1.5 seconds
- Lighthouse score > 90
- Core Web Vitals in green zone