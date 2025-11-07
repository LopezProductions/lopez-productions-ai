/**
 * Mapping of service IDs to Stripe Price IDs
 * Replace placeholder Price IDs (price_XXXX) with actual Stripe Price IDs from your Stripe dashboard
 */

export const stripePriceIds: Record<string, string> = {
  // Video & Media
  'reel': 'price_1SQy73Lq5JCtXEO7isNcwQUj', // 1-Minute Reel - $25
  'captioned': 'price_1SQyJILq5JCtXEO7VXlGbLUJ', // Captioned Reel - $50
  'premium_reel': 'price_1SQyK0Lq5JCtXEO7yyP2go0O', // Premium Reel - $75
  'overlay': 'price_1SQyKGLq5JCtXEO73HnnDnXM', // Branded Overlay - $40
  'reel_bundle': 'price_1SQyPGLq5JCtXEO7AlQKmyGW', // 5-Reel Special - $100

  // Notion & Automation
  'notion_dashboard': 'price_1SQy7XLq5JCtXEO7pYjaLVxb', // Notion Dashboard Setup - $50
  'crm_template': 'price_1SQySxLq5JCtXEO7dAPAvMvb', // CRM Template - $75
  'automation': 'price_1SQyTnLq5JCtXEO7EkjY49AC', // Automation Flow - $100

  // Web & Branding (Tier Packages)
  'launch_page_48h': 'price_1SQyGPLq5JCtXEO7nTMTX9w5', // 48-Hour Launch Page - $100
  'creator_website_basic': 'price_1SQyVmLq5JCtXEO7dPSxDO8s', // Creator Basic - $250
  'creator_site_package': 'price_1SQyWBLq5JCtXEO7bO6adj1t', // Creator Plus - $500
  'full_brand_system': 'price_1SQyWhLq5JCtXEO7DLrSMULR', // Creator Ultra - $1,500+
  'domain': 'price_1SQyaqLq5JCtXEO7LvmvJmNu', // Domain Setup (Add-on) - $25
  'black_friday_special': 'price_1SQyX4Lq5JCtXEO7hhIJcEM0', // $50 launch page special

  // Strategy Add-ons
  'seo_audit': 'price_1SQyIjLq5JCtXEO7Di4VggZ1', // SEO Audit - $100
  'market_research': 'price_1SQybxLq5JCtXEO7AZuvBD3Y', // Market Research Report - $250
  'brand_sheet': 'price_1SQycNLq5JCtXEO76JHmZk8h', // Brand Sheet & Color Kit - $100
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

