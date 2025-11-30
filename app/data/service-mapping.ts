/**
 * Comprehensive mapping of all services from the pricing page
 * This ensures the intake form can properly recognize and display all purchased services
 */

export interface ServiceMapping {
  id: string
  name: string
  category: 'Digital Product' | 'Website' | 'Package' | 'Professional' | 'Automation' | 'Add-On'
  requiresIntake: boolean
}

export const allServices: ServiceMapping[] = [
  // Digital Shop - Instant Downloads (no intake required)
  {
    id: 'prompt-library',
    name: '100+ Prompt Library (PDF)',
    category: 'Digital Product',
    requiresIntake: false,
  },
  {
    id: 'student-dashboard',
    name: 'Student Dashboard',
    category: 'Digital Product',
    requiresIntake: false,
  },
  {
    id: 'travel-planner',
    name: 'Travel Planner OS',
    category: 'Digital Product',
    requiresIntake: false,
  },
  {
    id: 'classroom-os',
    name: 'Classroom OS',
    category: 'Digital Product',
    requiresIntake: false,
  },
  {
    id: 'case-tracker',
    name: 'Solo-Firm Case Tracker',
    category: 'Digital Product',
    requiresIntake: false,
  },

  // Websites (require intake)
  {
    id: 'grad-portfolio',
    name: 'Grad Portfolio Website',
    category: 'Website',
    requiresIntake: true,
  },
  {
    id: 'travel-portfolio',
    name: 'Travel Portfolio Website',
    category: 'Website',
    requiresIntake: true,
  },
  {
    id: 'creator-site',
    name: 'Creator Site',
    category: 'Website',
    requiresIntake: true,
  },

  // Packages (require intake)
  {
    id: 'academic-creator',
    name: 'Academic Creator Package',
    category: 'Package',
    requiresIntake: true,
  },
  {
    id: 'travel-creator',
    name: 'Travel Creator Package',
    category: 'Package',
    requiresIntake: true,
  },
  {
    id: 'creator-ultra',
    name: 'Creator Ultra',
    category: 'Package',
    requiresIntake: true,
  },

  // Professional Services (require intake)
  {
    id: 'client-onboarding',
    name: 'Client Onboarding Engine',
    category: 'Automation',
    requiresIntake: true,
  },
  {
    id: 'firm-authority',
    name: 'Firm Authority Package',
    category: 'Professional',
    requiresIntake: true,
  },

  // Add-Ons (require intake if purchased with services)
  {
    id: 'school-spirit',
    name: 'School Spirit Add-On',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'domain-setup',
    name: 'Domain Setup',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'reel-edit',
    name: 'Reel Edit (1 Minute)',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'concept-art',
    name: 'Concept Art Pack',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'social-audit',
    name: 'Social Strategy Audit',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'brand-sheet',
    name: 'Professional Brand Sheet',
    category: 'Add-On',
    requiresIntake: true,
  },
  {
    id: 'market-research',
    name: 'Market Research Add-On',
    category: 'Add-On',
    requiresIntake: true,
  },
]

/**
 * Get service by ID
 */
export function getServiceById(serviceId: string): ServiceMapping | undefined {
  return allServices.find(s => s.id === serviceId)
}

/**
 * Get service name by ID (fallback to formatted ID if not found)
 */
export function getServiceName(serviceId: string): string {
  const service = getServiceById(serviceId)
  if (service) return service.name
  
  // Fallback: format the ID as a readable name
  return serviceId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Check if a service requires an intake form
 */
export function requiresIntake(serviceId: string): boolean {
  const service = getServiceById(serviceId)
  return service ? service.requiresIntake : true // Default to true for unknown services
}

/**
 * Check if any of the purchased services require an intake form
 */
export function anyRequiresIntake(serviceIds: string[]): boolean {
  return serviceIds.some(id => requiresIntake(id))
}

/**
 * Format purchased services for display
 */
export function formatPurchasedServices(selectedServiceIds: string[], bundleIds: string[]): string {
  const allIds = [...selectedServiceIds, ...bundleIds]
  const serviceNames = allIds.map(id => getServiceName(id))
  
  if (serviceNames.length === 0) {
    return 'Custom Package'
  }
  
  if (serviceNames.length === 1) {
    return serviceNames[0]
  }
  
  // For multiple services, create a readable list
  if (serviceNames.length <= 3) {
    return serviceNames.join(' + ')
  }
  
  return `${serviceNames.slice(0, 2).join(' + ')} + ${serviceNames.length - 2} more`
}

