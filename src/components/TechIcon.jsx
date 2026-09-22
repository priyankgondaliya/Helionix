import React from 'react';
import { Cpu } from 'lucide-react';

export default function TechIcon({ name, className = "w-5 h-5" }) {
  const n = name.toLowerCase();

  // 1. React.js
  if (n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    );
  }

  // 2. Next.js
  if (n.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.4 17.5L9.6 7.2H7.2v9.6h2.4V10.8l6.4 9.1c-1.2.7-2.6 1.1-4 1.1-4.8 0-8.8-3.9-8.8-8.8S7.2 3.4 12 3.4s8.8 3.9 8.8 8.8c0 2-.7 3.9-1.8 5.3z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 3. TypeScript
  if (n.includes('typescript') || n.includes('ts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M11.5 15.8h-1.8v-6h-2V8.4h5.8v1.4h-2v6zm3.3 0c-.8 0-1.5-.2-2-.6l.6-1.3c.4.3.9.5 1.4.5.5 0 .8-.2.8-.5 0-.8-2.2-.6-2.2-2.3 0-.9.7-1.6 1.9-1.6.7 0 1.3.2 1.7.5l-.5 1.3c-.4-.2-.8-.4-1.2-.4-.4 0-.6.2-.6.4 0 .8 2.2.6 2.2 2.3 0 1-.8 1.7-2.1 1.7z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 4. Vue.js
  if (n.includes('vue')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.5 3h-4.2L12 8.7 8.7 3H4.5l7.5 13L19.5 3z" fill="#41B883"/>
        <path d="M16.5 3h-3L12 5.6 10.5 3h-3L12 10.8 16.5 3z" fill="#35495E"/>
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (n.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }

  // 6. Redux / Zustand
  if (n.includes('redux') || n.includes('zustand')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M15.6 15c-1.2 0-2.2-.7-2.6-1.7-.5.2-1.1.3-1.6.3-2.5 0-4.6-1.8-5-4.2C5.1 9.8 4 10.8 4 12c0 2.2 1.8 4 4 4h7.6z" fill="#764ABC"/>
        <path d="M12 4c-3.3 0-6 2.7-6 6 0 .7.1 1.4.4 2 1.1-.7 2.4-1 3.8-1 1.7 0 3.3.6 4.5 1.7.3-.8.5-1.7.5-2.7 0-3.3-2.7-6-6-6z" fill="#764ABC"/>
        <circle cx="16" cy="15" r="3" fill="#764ABC"/>
      </svg>
    );
  }

  // 7. Node.js
  if (n.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm-1 15.5l-6-3.3V8.8l6 3.3v5.4zm2 0v-5.4l6-3.3v5.4l-6 3.3zm7.5-9.8l-7.5 4.1-7.5-4.1 7.5-4.1 7.5 4.1z"/>
      </svg>
    );
  }

  // 8. Express.js
  if (n.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#E2E8F0" strokeWidth="2">
        <path d="M3 12h18M6 8l-3 4 3 4M18 8l3 4-3 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // 9. PHP & Laravel
  if (n.includes('laravel') || n.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2z" fill="#FF2D20"/>
        <path d="M8 8l8 4-8 4V8z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 10. Python / FastAPI
  if (n.includes('python') || n.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.87 2c-4.4 0-4.12 1.9-4.12 1.9l.01 2h4.22v.6H6.1s-2.83.32-2.83 4.13c0 3.82 2.47 3.96 2.47 3.96h1.47v-2.07s-.08-2.47 2.43-2.47h4.18s2.32.04 2.32-2.28V4.32S16.63 2 11.87 2zm-1.25 1.32a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="#3776AB"/>
        <path d="M12.13 22c4.4 0 4.12-1.9 4.12-1.9l-.01-2h-4.22v-.6h5.88s2.83-.32 2.83-4.13c0-3.82-2.47-3.96-2.47-3.96h-1.47v2.07s.08 2.47-2.43 2.47h-4.18s-2.32-.04-2.32 2.28v3.52S7.37 22 12.13 22zm1.25-1.32a.75.75 0 110-1.5.75.75 0 010 1.5z" fill="#FFD43B"/>
      </svg>
    );
  }

  // 11. Go (Golang)
  if (n.includes('go')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00ADD8">
        <path d="M1.8 10.5c.3-1.8 1.5-3.3 3.3-3.9.6-.2 1.4-.3 2.1-.2.4.1.8.3 1.1.5.5.4.9 1 1.1 1.7.3.9.2 1.9-.3 2.7-.5.9-1.4 1.5-2.4 1.8-.7.2-1.5.2-2.2 0-1.2-.4-2.2-1.3-2.6-2.6zm3.3 1.8c.6.2 1.3.1 1.8-.3.5-.4.8-1 .7-1.6 0-.6-.3-1.2-.8-1.5-.5-.3-1.2-.4-1.7-.1-.6.3-1 .8-1 1.5.1.8.6 1.6 1 2zm11.5-4.8c1.6 0 3.1.6 4.1 1.8 1.1 1.2 1.5 2.8 1.2 4.4-.3 1.8-1.5 3.3-3.2 4-1.6.7-3.5.5-4.9-.5-1.4-1.1-2.1-2.8-1.8-4.6.3-1.8 1.5-3.3 3.2-4.1.5-.2 1-.3 1.4-.3zm0 7.8c.8 0 1.6-.4 2-1.1.5-.8.5-1.8.1-2.5-.4-.7-1.2-1.1-2.1-1.1s-1.6.4-2 1.1c-.5.8-.5 1.8-.1 2.5.4.7 1.2 1.1 2.1 1.1z"/>
      </svg>
    );
  }

  // 12. GraphQL & REST
  if (n.includes('graphql') || n.includes('rest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E535AB">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.6L12 19.5 5.5 15.7V8.1L12 4.3z"/>
        <circle cx="12" cy="12" r="3" fill="#E535AB"/>
      </svg>
    );
  }

  // 13. PostgreSQL
  if (n.includes('postgres') || n.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    );
  }

  // 14. MongoDB
  if (n.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#47A248">
        <path d="M12 1.5s-7 8.5-7 13.5c0 5 4 8 7 8s7-3 7-8c0-5-7-13.5-7-13.5zm0 18c-2 0-4-2-4-5 0-3 3-7.5 4-9 1 1.5 4 6 4 9 0 3-2 5-4 5z"/>
      </svg>
    );
  }

  // 15. Redis
  if (n.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
        <path d="M2 9l10-5 10 5-10 5L2 9zm0 6l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    );
  }

  // 16. Snowflake
  if (n.includes('snowflake')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#29B5E8">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // 17. Databricks
  if (n.includes('databricks')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF3621">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5zm0 7l-10 5 10 5 10-5-10-5z"/>
      </svg>
    );
  }

  // 18. Amazon DynamoDB / AWS
  if (n.includes('dynamo') || n.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    );
  }

  // 19. Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.9 11.2h2.2v2.1h-2.2v-2.1zm-3.1 0h2.2v2.1h-2.2v-2.1zm-3.1 0h2.2v2.1H7.7v-2.1zm-3.1 0h2.2v2.1H4.6v-2.1zm6.2-3.1h2.2v2.1h-2.2V8.1zm-3.1 0h2.2v2.1H7.7V8.1zm-3.1 0h2.2v2.1H4.6V8.1zm6.2-3.1h2.2v2.1h-2.2V5zm10.7 7.7c-.5-.3-1.6-.4-2.5.1-1.2.7-1.9 2-1.9 2H.8v1.6C.8 20 4.6 22 9.4 22c5.6 0 10.2-2.7 11.2-7.5.5.1 1.7.1 2.3-.6l.1-.1-.5-1.1z"/>
      </svg>
    );
  }

  // 20. Kubernetes
  if (n.includes('k8s') || n.includes('kubernetes')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.5l6.3 3.6v7.3L12 19 5.7 15.4V8.1L12 4.5z"/>
        <circle cx="12" cy="12" r="3.5" fill="#326CE5"/>
      </svg>
    );
  }

  // 21. Terraform
  if (n.includes('terraform')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#844FBA">
        <path d="M1.5 4.5h6v6h-6v-6zm7.5 0h6v6h-6v-6zm7.5 0h6v6h-6v-6zm-7.5 7.5h6v6h-6v-6zm-7.5 0h6v6h-6v-6zm7.5 7.5h6v6h-6v-6z"/>
      </svg>
    );
  }

  // 22. GitHub Actions
  if (n.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    );
  }

  // 23. Grafana / Prometheus
  if (n.includes('grafana') || n.includes('prometheus')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F46800">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    );
  }

  return <Cpu className={className + " text-cyan-400"} />;
}
