/**
 * Design System Color Palette Tokens
 * Cohesive Olive theme scale (50 - 950) + semantic tokens
 */

export const olive = {
  50: '#F5F8F0', // Lightest wash
  100: '#EBF2E2', // Background gradient mid
  200: '#DFE9D3', // Background gradient end / borders
  300: '#CAD6BA', // Card borders / subtle strokes
  400: '#A3C663', // Energetic accent / pulse dots
  500: '#8FA858', // Highlight / glow / secondary buttons
  600: '#687548', // Brand primary olive
  700: '#525E37', // Dark olive hover states
  800: '#364223', // Deep olive heading gradient stop
  900: '#222A16', // High contrast charcoal olive body
  950: '#182011', // Deepest charcoal headings

  // Surf Glow & Living Aurora Highlights
  lime: '#C0E675',
  bright: '#AFDB62',
  glow: '#97B863',
  deep: '#6E883C',
} as const;

export const tokens = {
  olive,
  surface: {
    canvas: '#F8F8F4',
    subtle: '#F3F6ED',
    card: '#FFFFFF',
    elevated: '#EEF3E6',
  },
  text: {
    primary: '#182011',
    body: '#222A16',
    muted: '#556244',
    faint: '#637050',
  },
  border: {
    subtle: '#E5E6DC',
    light: '#DFE9D3',
    medium: '#CAD6BA',
    brand: '#687548',
  },
} as const;

export default tokens;

