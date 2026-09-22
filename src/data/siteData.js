export const siteConfig = {
  companyName: "Helonix Technologies",
  shortName: "Helonix",
  tagline: "Engineering Intelligent Enterprises with AI, Data & Cloud Platforms",
  heroSubtitle: "We partner with ambitious enterprises to modernize digital platforms, harness Agentic AI, and build resilient cloud architectures that drive measurable business outcomes.",
  stats: [
    { label: "Client Satisfaction Rate", value: "99.4%" },
    { label: "Faster MVP & Platform Launch", value: "60%" },
    { label: "Enterprise Projects Delivered", value: "250+" },
    { label: "Global Cloud & AI Engineers", value: "1,200+" },
  ]
};

export const serviceCategories = [
  {
    id: "ai-automation",
    title: "Artificial Intelligence & Automation",
    badge: "Flagship Capability",
    description: "Transform legacy operational processes into autonomous, self-optimizing workflows with custom Agentic AI and enterprise Generative AI.",
    services: [
      {
        name: "Agentic AI & Multi-Agent Systems",
        description: "Deploy autonomous AI agents that reason, plan, and execute complex multi-step enterprise workflows safely.",
        tags: ["Multi-Agent Frameworks", "LangChain/LlamaIndex", "Autonomous Workflows"]
      },
      {
        name: "Generative AI & Enterprise LLMs",
        description: "Fine-tune and deploy secure private Large Language Models on your infrastructure with strict data privacy.",
        tags: ["Private RAG Architecture", "Custom Fine-Tuning", "LLMOps"]
      },
      {
        name: "Advanced Analytics & Machine Learning",
        description: "Turn raw operational data into real-time predictive insights and decision intelligence systems.",
        tags: ["Predictive Models", "Real-Time Forecasting", "PyTorch/TensorFlow"]
      },
      {
        name: "Intelligent Process Automation (IPA)",
        description: "Combine computer vision, NLP, and RPA to eliminate manual paper processing and redundant operational tasks.",
        tags: ["Doc Processing AI", "Workflow Orchestration", "Zero-Touch Automation"]
      }
    ]
  },
  {
    id: "cloud-engineering",
    title: "Cloud & Digital Engineering",
    badge: "Core Engineering",
    description: "Build, modernize, and scale mission-critical applications on high-performance cloud-native architectures.",
    services: [
      {
        name: "Cloud-Native Platform Engineering",
        description: "Architect secure, multi-cloud platforms using microservices, Kubernetes, and serverless technology.",
        tags: ["AWS / Azure / GCP", "Kubernetes (EKS/AKS)", "Terraform & IaC"]
      },
      {
        name: "Application & Legacy Modernization",
        description: "Deconstruct monolithic legacy systems into agile, decoupled microservices without downtime.",
        tags: ["Monolith Refactoring", "API Gateway Integration", "Zero-Downtime Migration"]
      },
      {
        name: "DevSecOps & SRE Optimization",
        description: "Embed automated security testing, CI/CD pipelines, and continuous reliability monitoring.",
        tags: ["Automated Pipelines", "SRE Frameworks", "Compliance Guardrails"]
      },
      {
        name: "Connected Product Engineering (IoT)",
        description: "Design edge-computing IoT platforms connecting hardware sensors to enterprise cloud analytics.",
        tags: ["Edge Computing", "IoT Telemetry", "Embedded Systems"]
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Solutions",
    badge: "Enterprise Foundation",
    description: "Unify fragmented data silos into high-speed modern data lakehouses for instant analytics and compliance.",
    services: [
      {
        name: "Modern Data Lakehouse Architecture",
        description: "Unify structured and unstructured data with unified query platforms powered by Databricks and Snowflake.",
        tags: ["Databricks Lakehouse", "Snowflake Data Warehouse", "dbt Transformations"]
      },
      {
        name: "Data Governance & RegTech Compliance",
        description: "Ensure audit-ready data lineage, privacy controls (GDPR/HIPAA), and real-time regulatory compliance.",
        tags: ["Data Lineage", "HIPAA/SOC2 Governance", "Automated Auditing"]
      },
      {
        name: "Real-Time Business Intelligence & Visual Analytics",
        description: "Empower executive decision-makers with interactive dashboards and self-service analytics portals.",
        tags: ["Power BI / Tableau", "Real-Time Streaming", "Executive Dashboards"]
      },
      {
        name: "Managed Data Services",
        description: "24/7 proactive data pipeline monitoring, performance tuning, and managed database operations.",
        tags: ["24/7 SLA Support", "Pipeline Tuning", "Cost Optimization"]
      }
    ]
  },
  {
    id: "digital-experience",
    title: "Digital Experience & UI/UX Services",
    badge: "Customer Impact",
    description: "Craft seamless, intuitive digital touchpoints that drive user engagement, loyalty, and enterprise productivity.",
    services: [
      {
        name: "Enterprise UI/UX Design Systems",
        description: "Design accessible, modern interface design systems that scale across web, mobile, and desktop products.",
        tags: ["Figma Design Systems", "WCAG 2.1 Accessibility", "User Research"]
      },
      {
        name: "Salesforce Cloud Transformation",
        description: "Implement and customize Salesforce Service, Sales, and Marketing Clouds for unified customer views.",
        tags: ["Salesforce Crest Partner", "Service Cloud", "Custom Integration"]
      },
      {
        name: "Omnichannel Digital Commerce",
        description: "Engineered headless commerce solutions driving high-conversion digital customer journeys.",
        tags: ["Headless Commerce", "API-First Architecture", "Payment Integrations"]
      },
      {
        name: "Employee Experience Portals",
        description: "Modern intranet and service desks optimizing internal collaboration and digital workflow velocity.",
        tags: ["ServiceNow ESM", "Internal Tooling", "Workflow Dashboards"]
      }
    ]
  }
];

export const technologyStack = [
  {
    category: "frontend",
    title: "Frontend Engineering",
    description: "High-speed, reactive user interfaces built with modern component architectures and micro-frontend design patterns.",
    items: [
      { name: "React.js", desc: "Component-driven Web Applications & Single Page Apps", level: "Expert / Core", icon: "react" },
      { name: "Next.js", desc: "Server-Side Rendering, App Router & Static Generation", level: "Expert / Core", icon: "next" },
      { name: "TypeScript", desc: "Type-safe robust JavaScript application development", level: "Enterprise Standard", icon: "ts" },
      { name: "Vue.js", desc: "Lightweight progressive framework for dynamic UIs", level: "Advanced", icon: "vue" },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI styling", level: "Design System Standard", icon: "tailwind" },
      { name: "Redux / Zustand", desc: "Predictable state containers for complex enterprise workflows", level: "Enterprise Standard", icon: "redux" },
    ]
  },
  {
    category: "backend",
    title: "Backend & API Systems",
    description: "High-throughput microservices, distributed API gateways, and asynchronous event streams engineered for zero latency.",
    items: [
      { name: "Node.js", desc: "Event-driven scalable server-side JavaScript runtime", level: "Expert / Core", icon: "node" },
      { name: "Express.js", desc: "Minimalist fast RESTful web framework for Node.js", level: "Expert / Core", icon: "express" },
      { name: "PHP & Laravel", desc: "Enterprise PHP 8+ web applications, Eloquent ORM & Laravel REST APIs", level: "Expert / Core", icon: "laravel" },
      { name: "Python / FastAPI", desc: "High-performance async Python APIs & AI integrations", level: "Expert / Core", icon: "python" },
      { name: "Go (Golang)", desc: "High-concurrency microservices with low memory overhead", level: "High Performance", icon: "go" },
      { name: "GraphQL & REST", desc: "Efficient data query interfaces and high-speed RPC protocols", level: "Modern Protocol", icon: "graphql" },
    ]
  },
  {
    category: "database",
    title: "Database & Storage Systems",
    description: "Resilient ACID-compliant relational databases, high-speed NoSQL stores, and modern distributed cloud warehouses.",
    items: [
      { name: "PostgreSQL", desc: "Advanced open-source relational SQL database with JSONB support", level: "Core Primary DB", icon: "postgres" },
      { name: "MongoDB", desc: "Document-oriented flexible NoSQL database for unstructured data", level: "Core NoSQL", icon: "mongo" },
      { name: "Redis", desc: "In-memory data structure store for caching & pub/sub streaming", level: "High-Speed Cache", icon: "redis" },
      { name: "Snowflake", desc: "Multi-cluster cloud data warehouse for instant elastic analytics", level: "Enterprise Data Warehouse", icon: "snowflake" },
      { name: "Databricks Lakehouse", desc: "Unified Apache Spark Lakehouse for batch and real-time AI ML", level: "Big Data & AI", icon: "databricks" },
      { name: "Amazon DynamoDB", desc: "Serverless key-value NoSQL database with single-digit millisecond latency", level: "Cloud Serverless", icon: "aws" },
    ]
  },
  {
    category: "devops",
    title: "Cloud Infrastructure & DevSecOps",
    description: "Automated IaC provisioning, Kubernetes orchestration, zero-downtime CI/CD pipelines, and 24/7 observability.",
    items: [
      { name: "Docker", desc: "Containerization platform for isolated, consistent runtime environments", level: "Containerization Standard", icon: "docker" },
      { name: "Kubernetes (EKS/AKS)", desc: "Automated container orchestration, autoscaling & self-healing clusters", level: "Orchestration Standard", icon: "k8s" },
      { name: "Amazon Web Services (AWS)", desc: "Comprehensive cloud compute, S3, Lambda, and serverless infra", level: "Premier Partner", icon: "aws" },
      { name: "Terraform", desc: "Infrastructure as Code (IaC) for multi-cloud platform provisioning", level: "IaC Standard", icon: "terraform" },
      { name: "GitHub Actions / CI/CD", desc: "Automated continuous integration and security test pipelines", level: "Automated CI/CD", icon: "github" },
      { name: "Grafana & Prometheus", desc: "Real-time metrics collection, log aggregation, and SRE alerting", level: "Observability", icon: "grafana" },
    ]
  }
];

export const platformSpotlight = {
  name: "HelonixRise™ Agentic AI Platform",
  tagline: "The Enterprise Catalyst for Autonomous Innovation",
  description: "HelonixRise™ is our proprietary multi-agent orchestrator that empowers non-technical domain experts and developers to build, test, and deploy secure enterprise AI workflows in hours rather than months.",
  highlights: [
    { title: "60% Faster MVP Build", text: "Low-code vibe coding canvas enables rapid prototype validation." },
    { title: "Enterprise Guardrails", text: "Built-in SOC2, HIPAA, and ISO27001 data isolation mechanisms." },
    { title: "Plug-and-Play Connectors", text: "Seamless integration with SAP, Salesforce, AWS, and legacy databases." },
    { title: "Autonomous Monitoring", text: "Continuous observability tracking AI accuracy, latency, and token cost." }
  ]
};

export const industrySolutions = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    summary: "Enabling HIPAA-compliant data platforms, predictive clinical analytics, and accelerated drug discovery workflows.",
    keyPoints: [
      "Interoperable EHR/FHIR Data Pipelines",
      "Predictive Patient Care & Triage AI",
      "Accelerated Clinical Trial Analytics"
    ],
    stats: "35% Faster Patient Insights"
  },
  {
    id: "finance",
    name: "Financial Services & Banking",
    summary: "Architecting zero-trust banking platforms, automated fraud detection, and real-time risk intelligence.",
    keyPoints: [
      "Real-Time Fraud & AML Detection",
      "RegTech Automated Compliance",
      "Cloud-Native Core Banking Modernization"
    ],
    stats: "€15M Annual Risk Mitigation"
  },
  {
    id: "hitech",
    name: "High Tech & Digital Natives",
    summary: "Partnering with software innovators to accelerate SaaS product engineering and cloud infrastructure scaling.",
    keyPoints: [
      "Scalable Microservices Architecture",
      "Automated CI/CD & DevSecOps",
      "Multi-Tenant SaaS Engineering"
    ],
    stats: "5x Deployment Frequency"
  },
  {
    id: "consumer",
    name: "Retail & Consumer Goods",
    summary: "Empowering global retail brands with omnichannel commerce, unified customer profiles, and AI recommendations.",
    keyPoints: [
      "Personalized Recommendation Engines",
      "Headless E-Commerce Platforms",
      "Supply Chain Visibility Dashboards"
    ],
    stats: "28% Higher Digital Conversions"
  },
  {
    id: "automotive",
    name: "Automotive & Manufacturing",
    summary: "Modernizing smart factory supply chains, IoT edge telematics, and supplier collaboration portals.",
    keyPoints: [
      "Smart Factory IoT Telemetry",
      "Automated Supply Disruption AI",
      "Supplier Lifecycle Governance"
    ],
    stats: "45% Reduction in Downtime"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "AI-Driven Supply Chain Risk Intelligence Platform",
    client: "Global Logistics & Manufacturing Leader",
    industry: "Automotive & Manufacturing",
    impact: "€9M - €25M Annual Risk Protection",
    challenge: "Unforeseen supply chain disruptions created multi-million euro delays and fragmented inventory tracking across 14 countries.",
    solution: "Engineered an Agentic AI platform on AWS integrating HSN-level mapping, real-time disruption monitoring, and automated rerouting simulations.",
    results: [
      "99.2% early disruption detection rate",
      "Automated mitigation scenario generation in <30 seconds",
      "Full cloud deployment in 12 weeks"
    ]
  },
  {
    id: 2,
    title: "Modern Healthcare Data Platform & Clinical AI Integration",
    client: "National Healthcare Provider Network",
    industry: "Healthcare & Life Sciences",
    impact: "35-40% Improved Patient Insights",
    challenge: "Patient records were isolated across legacy EHR databases, causing delayed clinical diagnoses and high administrative overhead.",
    solution: "Built a centralized AWS FHIR Data Lakehouse with real-time predictive NLP models for clinical decision support.",
    results: [
      "50% reduction in manual record retrieval effort",
      "Real-time patient telemetry visualization for doctors",
      "100% HIPAA & SOC2 Type II compliance"
    ]
  },
  {
    id: 3,
    title: "60% Faster MVP Launch via AI Vibe Coding Platform",
    client: "Tier-1 Financial Services Enterprise",
    industry: "Financial Services",
    impact: "60% Reduction in Time-to-Market",
    challenge: "Product engineering bottlenecks delayed new fintech service launches by up to 9 months per business unit.",
    solution: "Implemented HelonixRise™ low-code AI platform, democratizing rapid software prototyping for cross-functional business teams.",
    results: [
      "MVP turnaround reduced from 8 months to 6 weeks",
      "Direct IT dependency reduced by 40%",
      "Engineered on zero-trust enterprise security standards"
    ]
  },
  {
    id: 4,
    title: "Continuous Cloud Infrastructure Scaling & ISO Security",
    client: "Diagnostic Health & Diagnostic AI",
    industry: "High Tech / BioTech",
    impact: "Deployment Frequency Increased 3x",
    challenge: "Scaling AI diagnostic model deployments securely while achieving multi-region regulatory ISO certifications.",
    solution: "Architected automated Kubernetes DevSecOps infrastructure pipelines with continuous compliance verification.",
    results: [
      "Deployment frequency increased from 2x/week to 6x/week",
      "Zero downtime during model rollouts",
      "Achieved ISO 27001 & SOC2 compliance seamlessly"
    ]
  }
];

export const partnerEcosystem = [
  { name: "Amazon Web Services", category: "Premier Cloud Partner", desc: "Advanced Consulting partner driving scalable cloud migration and serverless AI platforms." },
  { name: "Microsoft Azure", category: "Gold Partner", desc: "Digital App Innovation and Data & AI Solutions partner for enterprise Azure cloud architecture." },
  { name: "Google Cloud Platform", category: "Managed Service Partner", desc: "Unlocking GCP BigQuery, Vertex AI, and cloud-native infrastructure agility." },
  { name: "Databricks", category: "Elite Data Partner", desc: "Accelerating Lakehouse data pipelines and unified AI analytics platforms." },
  { name: "Salesforce", category: "Crest Partner", desc: "Transforming Customer 360, Sales Cloud, and Service Cloud digital touchpoints." },
  { name: "ServiceNow", category: "Enterprise Partner", desc: "Automating enterprise workflow management and ITSM digital service desks." }
];

export const testimonials = [
  {
    quote: "Helonix Technologies' deep technical expertise and focus on velocity allowed us to scale our AI platform deployment frequency from twice a week to six times a week with zero infrastructure downtime.",
    author: "Mark Fleishman",
    role: "VP of Infrastructure & Operations",
    company: "Diagnostic AI Systems",
    rating: 5
  },
  {
    quote: "Their team's attention to security, precision, and enterprise data governance proved we chose the right digital engineering partner. They feel like a seamless extension of our core engineering team.",
    author: "Yatin Pradhan",
    role: "VP of Product Management",
    company: "Seattle Digital Banking",
    rating: 5
  },
  {
    quote: "The leadership at Helonix took genuine time to understand our unique business drivers. Their Agentic AI recommendations transformed our supply chain risk management within 90 days.",
    author: "Tim Daniel",
    role: "Senior Advisor for Innovation",
    company: "Global Logistics Group",
    rating: 5
  }
];

export const globalOffices = [
  { city: "Santa Clara, CA", address: "4655 Old Ironsides Dr, Suite 130", country: "United States (HQ)" },
  { city: "London", address: "30 St Mary Axe, City of London", country: "United Kingdom" },
  { city: "Singapore", address: "1 Marina Boulevard, Level 28", country: "Singapore" },
  { city: "Bangalore", address: "Outer Ring Road, Bellandur", country: "India Development Center" }
];
