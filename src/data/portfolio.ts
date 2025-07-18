export interface PortfolioCompany {
  id: string;
  name: string;
  industry: string;
  acquired: string;
  revenue: string;
  employees: number;
  location: string;
  description: string;
  logo?: string;
  website?: string;
  metrics: {
    revenueGrowth: string;
    efficiencyGain: string;
    employeeGrowth: string;
  };
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
  };
  status: 'active' | 'coming-soon';
}

// Portfolio companies data - easily add new acquisitions here
export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'techflow-solutions',
    name: 'TechFlow Solutions',
    industry: 'B2B Software',
    acquired: '2024-03-15',
    revenue: '$2.5M',
    employees: 25,
    location: 'Austin, TX',
    description: 'Cloud-based workflow automation platform serving mid-market manufacturing companies',
    website: 'https://techflow-solutions.com',
    metrics: {
      revenueGrowth: '+45%',
      efficiencyGain: '+30%',
      employeeGrowth: '+60%'
    },
    caseStudy: {
      challenge: 'Manual processes limiting scalability and customer satisfaction',
      solution: 'Implemented AI-driven automation and cloud infrastructure modernization',
      results: [
        'Reduced processing time by 70%',
        'Increased customer retention to 95%',
        'Expanded to 3 new market segments'
      ]
    },
    status: 'active'
  },
  {
    id: 'industrial-dynamics',
    name: 'Industrial Dynamics',
    industry: 'Manufacturing',
    acquired: '2024-06-20',
    revenue: '$8.2M',
    employees: 85,
    location: 'Cleveland, OH',
    description: 'Precision metal fabrication and industrial component manufacturing',
    metrics: {
      revenueGrowth: '+25%',
      efficiencyGain: '+40%',
      employeeGrowth: '+20%'
    },
    caseStudy: {
      challenge: 'Outdated equipment and inefficient production workflows',
      solution: 'Modernized equipment, implemented lean manufacturing and predictive maintenance',
      results: [
        'Increased production capacity by 50%',
        'Reduced waste by 35%',
        'Improved safety metrics by 60%'
      ]
    },
    status: 'active'
  },

  // Coming soon placeholders - representing target acquisition types
  ...Array.from({ length: 6 }, (_, index) => ({
    id: `coming-soon-${index + 1}`,
    name: `Target Acquisition #${index + 1}`,
    industry: 'TBD',
    acquired: 'TBD',
    revenue: 'TBD',
    employees: 0,
    location: 'TBD',
    description: 'We\'re actively seeking exceptional B2B and industrial businesses that match our acquisition criteria.',
    metrics: {
      revenueGrowth: 'TBD',
      efficiencyGain: 'TBD',
      employeeGrowth: 'TBD'
    },
    caseStudy: {
      challenge: 'Identifying the right strategic opportunity',
      solution: 'Strategic acquisition and operational excellence',
      results: ['Data-driven growth', 'Operational optimization', 'Global expansion']
    },
    status: 'coming-soon' as const
  }))
];

export const acquisitionCriteria = {
  revenueRange: '$1M - $20M',
  businessTypes: ['B2B Services', 'Industrial Manufacturing', 'Software/SaaS', 'Distribution'],
  requirements: [
    'Cash-flow positive',
    'Scalable business model',
    'Strong market position',
    'Quality management team',
    'Growth potential'
  ],
  preferredIndustries: [
    'Manufacturing & Industrial',
    'B2B Software & Services',
    'Distribution & Logistics',
    'Professional Services'
  ]
};