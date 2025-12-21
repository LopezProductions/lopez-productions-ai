/**
 * Entity Tag Taxonomy
 * 
 * Canonical tags for consistent entity clustering and AEO optimization.
 * 
 * Rules:
 * - One concept = one canonical tag
 * - Variants exist only in prose, never in metadata
 * - If two tags could be merged in Google Knowledge Graph → merge them
 * - Use 3-6 tags per post (1 pillar + 3-4 core + 0-2 modifiers)
 */

/**
 * Tier 1: Core Canonical Tags
 * 
 * Authoritative nouns. Stable, reusable, referenced across multiple posts.
 * Use exactly as specified - no variants.
 */
export const TIER_1_CORE_TAGS = [
  // AI Search & Interfaces
  'AI Search',
  'Search Interface Design',
  'AI Interface Architecture',
  'Google AI Mode',
  'Google AI Overviews',
  
  // Google / Gemini Ecosystem
  'Gemini',
  'Gemini Language Model',
  'Gemini Image Models',
  'Google Antigravity',
  
  // AI Models & Benchmarks
  'AI Image Models',
  'Model Comparison',
  'AI Benchmarks',
  'Image Generation Benchmarks',
  'Nano Banana Pro',
  'GPT-5.1',
  
  // Additional Core Tags (add as needed)
  'ChatGPT',
  'Claude',
  'Perplexity AI',
  'n8n',
  'Zapier',
  'Notion',
  'Make.com',
] as const

/**
 * Tier 2: Modifier Tags
 * 
 * Describe context/experience, not entities.
 * Use sparingly: 0-2 max per post.
 */
export const TIER_2_MODIFIER_TAGS = [
  'User Experience Friction',
  'Forced AI Experiences',
  'Cognitive Load',
  'Workflow Disruption',
] as const

/**
 * Forbidden / Anti-Pattern Tags
 * 
 * These are too vague and destroy clarity over time.
 * Do NOT use these - use the canonical alternatives instead.
 */
export const FORBIDDEN_TAGS = [
  'AI UX',
  'AI UI',
  'AI Experience',
  'AI Tools',
  'AI Features',
  'AI Systems',
] as const

/**
 * Allowed Entity Tags
 * 
 * Combined list of all valid tags for validation.
 */
export const ALLOWED_ENTITY_TAGS = [
  ...TIER_1_CORE_TAGS,
  ...TIER_2_MODIFIER_TAGS,
] as const

export type EntityTag = typeof ALLOWED_ENTITY_TAGS[number]

/**
 * Validate entity tags against canonical list
 * 
 * @param tags - Array of tags to validate
 * @returns Object with isValid flag and invalidTags array
 */
export function validateEntityTags(tags: string[]): {
  isValid: boolean
  invalidTags: string[]
  warnings: string[]
} {
  const allowedSet = new Set(ALLOWED_ENTITY_TAGS)
  const forbiddenSet = new Set(FORBIDDEN_TAGS)
  const modifierSet = new Set(TIER_2_MODIFIER_TAGS)
  
  const invalidTags: string[] = []
  const warnings: string[] = []
  let modifierCount = 0
  
  for (const tag of tags) {
    if (forbiddenSet.has(tag as any)) {
      invalidTags.push(tag)
      warnings.push(`"${tag}" is a forbidden tag. Use canonical alternatives.`)
    } else if (!allowedSet.has(tag as any)) {
      invalidTags.push(tag)
    }
    
    if (modifierSet.has(tag as any)) {
      modifierCount++
    }
  }
  
  if (modifierCount > 2) {
    warnings.push(`Too many modifier tags (${modifierCount}). Limit to 0-2 max per post.`)
  }
  
  if (tags.length > 6) {
    warnings.push(`Too many tags (${tags.length}). Aim for 3-6 total per post.`)
  }
  
  return {
    isValid: invalidTags.length === 0,
    invalidTags,
    warnings,
  }
}

/**
 * Normalize tag to canonical form
 * 
 * Maps common variants to canonical tags.
 * This helps catch mistakes during development.
 */
export const TAG_NORMALIZATION_MAP: Record<string, EntityTag> = {
  // AI Search variants
  'AI-powered search': 'AI Search',
  'AI search engines': 'AI Search',
  'Search UX': 'Search Interface Design',
  'Search UI': 'Search Interface Design',
  'AI Search UX': 'Search Interface Design',
  
  // Gemini variants
  'Google Gemini AI': 'Gemini',
  'Gemini AI model': 'Gemini',
  'Gemini LLM': 'Gemini Language Model',
  'Gemini model': 'Gemini Language Model',
  'Gemini image AI': 'Gemini Image Models',
  'Gemini vision': 'Gemini Image Models',
  'Antigravity AI': 'Google Antigravity',
  'Project Antigravity': 'Google Antigravity',
  
  // Model variants
  'Nano Banana': 'Nano Banana Pro',
  'GPT 5.1': 'GPT-5.1',
  'Image generation AI': 'AI Image Models',
  'Image AI': 'AI Image Models',
  'AI comparison': 'Model Comparison',
  'Model benchmarks': 'AI Benchmarks',
  'Image AI benchmarks': 'Image Generation Benchmarks',
} as const

/**
 * Normalize a tag to its canonical form
 */
export function normalizeTag(tag: string): string {
  return TAG_NORMALIZATION_MAP[tag] || tag
}

