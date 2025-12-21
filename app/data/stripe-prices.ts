/**
 * Mapping of service IDs to Stripe Price IDs
 * Replace placeholder Price IDs (price_XXXX) with actual Stripe Price IDs from your Stripe dashboard
 */

export const stripePriceIds: Record<string, string> = {
  // Digital Shop - Instant Downloads
  'prompt-library': 'price_1SYxxjLq5JCtXEO7bEHAgcon', // Prompt Library - $9
  'student-dashboard': 'price_1SYwIwLq5JCtXEO78OmKNfhm', // Student Dashboard - $19
  'travel-planner': 'price_1SYwUPLq5JCtXEO7Ey7nUcFJ', // Travel Planner OS - $19
  'creator-system-os': 'price_1SaKJaLq5JCtXEO7GGe2Vgfl', // Creator System OS - $24
  'classroom-os': 'price_1SYwTSLq5JCtXEO7VgRxFtFW', // Classroom OS - $29
  'case-tracker': 'price_1SYwbTLq5JCtXEO7mQJ2NcEt', // Solo-Firm Case Tracker - $49

  // Websites
  'grad-portfolio': 'price_1SYx2oLq5JCtXEO79pYsLCGV', // The "Grad" Portfolio - $150
  'travel-portfolio': 'price_1SYxydLq5JCtXEO7HXpy2PGp', // Travel Portfolio Website - $150
  'creator-site': 'price_1SYxzWLq5JCtXEO7yAQ9nmEI', // Creator Site - $250

  // Packages
  'academic-creator': 'price_1SYy23Lq5JCtXEO7PfABZHbC', // Academic Creator Package - $500
  'travel-creator': 'price_1SYy2PLq5JCtXEO7VHRbJQJp', // Travel Creator Package - $500
  'creator-ultra': 'price_1SYy4BLq5JCtXEO7je1pqfik', // Creator Ultra - $1,500

  // Professional Services
  'client-onboarding': 'price_1SYy5uLq5JCtXEO7h8fo5xdh', // Client Onboarding Engine - $750
  'firm-authority': 'price_1SYxgXLq5JCtXEO7Pe48Gmpd', // Firm Authority Package - $2,500+

  // Frontend Systems (Products)
  'antigravity-kit-source': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Google Antigravity Kit — Source Code - $149
  'concierge-deployment': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Concierge Deployment — Launch Assist - $495

  // Add-Ons
  'school-spirit': 'price_1SYy6pLq5JCtXEO7cddA2Itz', // School Spirit Add-On - $10
  'domain-setup': 'price_1SYy7ILq5JCtXEO70XM4hrrA', // Domain Setup - $25
  'reel-edit': 'price_1SYy8MLq5JCtXEO75IYM4y0N', // Reel Edit (1 Minute) - $25
  'concept-art': 'price_1SYyF2Lq5JCtXEO71d7yRsGo', // Concept Art Pack - $50
  'social-audit': 'price_1SYyScLq5JCtXEO7RM1twmzs', // Social Strategy Audit - $100
  'brand-sheet': 'price_1SYyTULq5JCtXEO7T4PxUvSw', // Professional Brand Sheet - $135
  'market-research': 'price_1SYyUNLq5JCtXEO742ESoU7T', // Market Research Add-On - $350

  // Technical Add-Ons (New)
  'opengraph-design': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // OpenGraph Design System - $300
  'docs-architecture': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Docs Architecture - $550
  'concept-art-pack': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Concept Art Pack (10 custom AI art assets) - $250
  'onboarding-engine': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Onboarding Engine - $950
  'competitor-aeo-audit': 'TODO_REPLACE_WITH_STRIPE_PRICE_ID', // Competitor AEO Audit - $450

  // Legacy/Other (keeping for backwards compatibility)
  'reel': 'price_1SQy73Lq5JCtXEO7isNcwQUj', // 1-Minute Reel - $25
  'captioned': 'price_1SQyJILq5JCtXEO7VXlGbLUJ', // Captioned Reel - $50
  'premium_reel': 'price_1SQyK0Lq5JCtXEO7yyP2go0O', // Premium Reel - $75
  'overlay': 'price_1SQyKGLq5JCtXEO73HnnDnXM', // Branded Overlay - $40
  'reel_bundle': 'price_1SQyPGLq5JCtXEO7AlQKmyGW', // 5-Reel Special - $100
  'notion_dashboard': 'price_1SQy7XLq5JCtXEO7pYjaLVxb', // Notion Dashboard Setup - $50
  'crm_template': 'price_1SQySxLq5JCtXEO7dAPAvMvb', // CRM Template - $75
  'automation': 'price_1SQyTnLq5JCtXEO7EkjY49AC', // Automation Flow - $100
  'launch_page_48h': 'price_1SQyGPLq5JCtXEO7nTMTX9w5', // 48-Hour Launch Page - $100
  'creator_website_basic': 'price_1SQyVmLq5JCtXEO7dPSxDO8s', // Creator Basic - $250
  'creator_site_package': 'price_1SQyWBLq5JCtXEO7bO6adj1t', // Creator Plus - $500
  'full_brand_system': 'price_1SQyWhLq5JCtXEO7DLrSMULR', // Creator Ultra - $1,500+
  'domain': 'price_1SYy7ILq5JCtXEO70XM4hrrA', // Domain Setup (legacy) - $25
  'black_friday_special': 'price_1SQyX4Lq5JCtXEO7hhIJcEM0', // $50 launch page special
  'seo_audit': 'price_1SQyIjLq5JCtXEO7Di4VggZ1', // SEO Audit - $100
}
/**
 * Get Stripe Price ID for a service
 * @param serviceId - The service ID from packages.ts
 * @returns Stripe Price ID or undefined if not found
 */
export function getStripePriceId(serviceId: string): string | undefined {
  return stripePriceIds[serviceId]
}

/**
 * Validate that all service IDs have corresponding Stripe Price IDs
 * @param serviceIds - Array of service IDs to validate
 * @returns Array of missing service IDs
 */
export function validateStripePriceIds(serviceIds: string[]): string[] {
  return serviceIds.filter(id => !stripePriceIds[id])
}

