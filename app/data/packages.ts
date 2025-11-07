export interface Service {
  id: string
  name: string
  price: number
  description?: string
  isBundle?: boolean
}

export interface ServiceCategory {
  id: string
  title: string
  icon: string
  services: Service[]
}

export interface PredefinedPackage {
  id: string
  name: string
  price: number
  description: string
  turnaround: string
  idealFor: string
  serviceIds: string[]
  bundleServiceIds?: string[] // For bundle-specific services
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'video',
    title: 'Video & Media',
    icon: '🎥',
    services: [
      {
        id: 'reel',
        name: '1-Minute Reel',
        price: 25,
        description: 'Basic cut + color'
      },
      {
        id: 'captioned',
        name: 'Captioned Reel',
        price: 50,
        description: 'Captions + animations'
      },
      {
        id: 'premium_reel',
        name: 'Premium Reel',
        price: 75,
        description: 'Full package'
      },
      {
        id: 'overlay',
        name: 'Branded Overlay',
        price: 40,
        description: 'Animated logo or intro/outro added'
      },
      {
        id: 'reel_bundle',
        name: '5-Reel Special',
        price: 100,
        description: '5 basic reel edits (get 1 free). Perfect for content creators who batch.',
        isBundle: true
      }
    ]
  },
  {
    id: 'notion',
    title: 'Notion & Automation',
    icon: '🧩',
    services: [
      {
        id: 'notion_dashboard',
        name: 'Notion Dashboard Setup',
        price: 50,
        description: 'Custom project/CRM dashboard'
      },
      {
        id: 'crm_template',
        name: 'CRM Template',
        price: 75,
        description: 'Pre-built client tracker or task system'
      },
      {
        id: 'automation',
        name: 'Automation Flow (Make/Zapier)',
        price: 100,
        description: '2-step automation integration'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web & Branding',
    icon: '🌐',
    services: [
      {
        id: 'launch_page_48h',
        name: '48-Hour Launch Page',
        price: 100,
        description: 'Get online fast — no fluff, just launch. Home/About/Contact combined landing page. Viewable contact info (email address, phone number). Good for starter portfolios or fast launches. Does NOT include: domain setup, custom domain, or email capture.',
        isBundle: true
      },
      {
        id: 'creator_website_basic',
        name: 'Creator Basic',
        price: 250,
        description: 'Your personal brand, live in 48 hours. 3-page website (Home, About, Contact) with email capture or contact button. Free domain setup (assuming they have a domain). Great first step for creators who just need to look professional and collect leads.',
        isBundle: true
      },
      {
        id: 'creator_site_package',
        name: 'Creator Plus',
        price: 500,
        description: 'Look professional and start showing up on Google. 4-page website (Home/About/Services/Contact) + Basic Google indexing setup (meta titles + sitemap submission) + Lead form integration + Domain + mobile optimization. Market Research Report add-on recommended.',
        isBundle: true
      },
      {
        id: 'full_brand_system',
        name: 'Creator Ultra',
        price: 1500,
        description: 'Your full creative ecosystem — brand, site, and automation. 5+ page site with SEO & GEO optimization + Automations (Stripe, Notion, or CRM) + Google Analytics + tracking setup + Free Brand Sheet ($100 value) + Free 1-Minute Launch Reel ($25 value). Delivery 14-21 days.',
        isBundle: true
      },
      {
        id: 'domain',
        name: 'Domain Setup (Add-on)',
        price: 25,
        description: 'Connect + host with domain for 1 year (included in all website packages)'
      }
    ]
  },
  {
    id: 'strategy',
    title: 'Strategy Add-ons',
    icon: '📈',
    services: [
      {
        id: 'seo_audit',
        name: 'SEO Audit',
        price: 100,
        description: 'Keyword and local ranking optimization plan'
      },
      {
        id: 'market_research',
        name: 'Market Research Report',
        price: 250,
        description: '10 actionable insights for your niche'
      },
      {
        id: 'brand_sheet',
        name: 'Brand Sheet & Color Kit',
        price: 100,
        description: 'Fonts, palette, and logo direction'
      }
    ]
  }
]

export const predefinedPackages: PredefinedPackage[] = [
  {
    id: 'reel_special',
    name: '5-Reel Special',
    price: 100,
    description: '5 basic reel edits (get 1 free). Perfect for content creators who batch.',
    turnaround: '3–5 days',
    idealFor: 'Content creators wanting fast, consistent posting',
    serviceIds: [],
    bundleServiceIds: ['reel_bundle']
  },
  {
    id: 'launch_page_48h',
    name: '48-Hour Launch Page',
    price: 100,
    description: 'Your personal brand, live in 48 hours. Get online fast — no fluff, just launch.',
    turnaround: '48 hours',
    idealFor: 'Starter portfolios or looking to create a fast launch',
    serviceIds: [],
    bundleServiceIds: ['launch_page_48h']
  },
  {
    id: 'creator_website',
    name: 'Creator Basic',
    price: 250,
    description: 'Your personal brand, live in 48 hours. 3-page website with email capture and free domain setup.',
    turnaround: '5–7 days',
    idealFor: 'Creators who just need to look professional and collect leads',
    serviceIds: [],
    bundleServiceIds: ['creator_website_basic']
  },
  {
    id: 'creator_site',
    name: 'Creator Plus',
    price: 500,
    description: 'Look professional and start showing up on Google. 4-page website + Google indexing + lead forms.',
    turnaround: '7–10 days',
    idealFor: 'Creators or small businesses who want to grow beyond "just a site"',
    serviceIds: [],
    bundleServiceIds: ['creator_site_package']
  },
  {
    id: 'full_brand',
    name: 'Creator Ultra',
    price: 1500,
    description: 'Your full creative ecosystem — brand, site, and automation. Complete launch system with SEO, automations, and free bonuses.',
    turnaround: '14–21 days',
    idealFor: 'Brands ready for a complete online launch with brand identity and automation',
    serviceIds: [],
    bundleServiceIds: ['full_brand_system']
  }
]

// Helper function to get service by ID
export function getServiceById(serviceId: string): Service | undefined {
  for (const category of serviceCategories) {
    const service = category.services.find(s => s.id === serviceId)
    if (service) return service
  }
  return undefined
}

// Helper function to get all services by IDs
export function getServicesByIds(serviceIds: string[]): Service[] {
  return serviceIds
    .map(id => getServiceById(id))
    .filter((s): s is Service => s !== undefined)
}

// Helper function to calculate total price
export function calculateTotal(selectedServiceIds: string[], bundleIds: string[]): number {
  let total = 0
  
  // Check if 5-Reel Special bundle is selected
  const hasReelBundle = bundleIds.includes('reel_bundle')
  
  selectedServiceIds.forEach(id => {
    // Skip individual reel selections if bundle is selected
    if (hasReelBundle && id === 'reel') {
      return
    }
    
    const service = getServiceById(id)
    if (service && !service.isBundle) {
      total += service.price
    }
  })
  
  // Add bundle prices
  bundleIds.forEach(bundleId => {
    const service = getServiceById(bundleId)
    if (service && service.isBundle) {
      total += service.price
    }
  })
  
  return total
}

// Helper function to format selected packages for email
export function formatPackageSelection(selectedServiceIds: string[], bundleIds: string[], customNotes?: string): string {
  const selectedServices = getServicesByIds(selectedServiceIds.filter(id => {
    // Don't include individual reel if bundle is selected
    if (bundleIds.includes('reel_bundle') && id === 'reel') {
      return false
    }
    return true
  }))
  
  const bundles = getServicesByIds(bundleIds)
  
  let output = ''
  
  if (bundles.length > 0 || selectedServices.length > 0) {
    output += 'Selected Services:\n'
    
    if (bundles.length > 0) {
      output += '\nBundles:\n'
      bundles.forEach(bundle => {
        output += `- ${bundle.name}: $${bundle.price}\n`
        if (bundle.description) {
          output += `  ${bundle.description}\n`
        }
      })
    }
    
    if (selectedServices.length > 0) {
      output += bundles.length > 0 ? '\nIndividual Services:\n' : '\n'
      selectedServices.forEach(service => {
        output += `- ${service.name}: $${service.price}\n`
        if (service.description) {
          output += `  ${service.description}\n`
        }
      })
    }
  }
  
  if (customNotes) {
    if (output) {
      output += '\n'
    }
    output += `Custom Request:\n${customNotes}\n`
  }
  
  return output || 'Custom package request'
}

