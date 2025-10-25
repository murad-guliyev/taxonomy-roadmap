/**
 * Design System Configuration
 * Unified configuration for typography and colors from design PDFs
 */

// =============================================================================
// TYPOGRAPHY CONFIGURATION
// =============================================================================

export const typography = {
  fontFamily: {
    primary: 'Raleway, sans-serif'
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600
  },

  headings: {
    h1: {
      fontSize: '44px',
      lineHeight: '52px',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 600
    },
    h2: {
      fontSize: '32px',
      lineHeight: '120%',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 600
    },
    h3: {
      fontSize: '20px',
      lineHeight: '130%',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 600
    },
    h4: {
      fontSize: '18px',
      lineHeight: '130%',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 600
    }
  },

  body: {
    large: {
      fontSize: '16px',
      lineHeight: '170%',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 400
    },
    default: {
      fontSize: '16px',
      lineHeight: '160%',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 400
    },
    small: {
      fontSize: '14px',
      lineHeight: '15px',
      letterSpacing: '0',
      fontFamily: 'Raleway',
      fontWeight: 500
    }
  },

  caption: {
    default: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.25px',
      fontFamily: 'Raleway',
      fontWeight: 400
    }
  }
}

// =============================================================================
// COLORS CONFIGURATION
// =============================================================================

export const colors = {
  text: {
    primary: '#1B3629',
    default: '#333333',
    secondary: '#757575',
    inverse: '#FFFFFF',
    disabled: '#B3B3B3',
    muted: '#B3B3B3',
    green: '#3DAC5C',
    red: '#F00000'
  },

  background: {
    default: '#FFFFFF',
    colored: '#2A5942',
    secondary: '#ECECEC'
  },

  border: {
    default: '#D9D9D9',
    subtle: '#CFDED1',
    green: '#3DAC5C',
    red: '#F00000'
  },

  icons: {
    default: '#333333',
    inverse: '#FFFFFF'
  },

  // Brand colors
  brand: {
    primary: '#1B3629',
    secondary: '#2A5942',
    accent: '#3DAC5C'
  },

  // Semantic colors
  semantic: {
    success: '#3DAC5C',
    error: '#F00000',
    warning: '#F59E0B',
    info: '#3B82F6'
  },

  // Neutral palette
  neutral: {
    white: '#FFFFFF',
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#ECECEC',
      300: '#D9D9D9',
      400: '#B3B3B3',
      500: '#757575',
      600: '#333333',
      700: '#2A2A2A',
      800: '#1B1B1B',
      900: '#0A0A0A'
    },
    black: '#000000'
  },

  // Color variants
  primary: {
    50: '#E8F5E8',
    100: '#C8E6C8',
    200: '#A3D9A3',
    300: '#7ECC7E',
    400: '#62C262',
    500: '#3DAC5C',
    600: '#359954',
    700: '#2A7F43',
    800: '#1F6533',
    900: '#1B3629'
  },

  secondary: {
    50: '#F0F7F3',
    100: '#D9EBE0',
    200: '#B3D7C2',
    300: '#8CC3A4',
    400: '#65AF86',
    500: '#2A5942',
    600: '#244E3A',
    700: '#1E4231',
    800: '#183629',
    900: '#122A20'
  }
}

// =============================================================================
// TAILWIND CSS CONFIGURATION
// =============================================================================

export const tailwindConfig = {
  theme: {
    extend: {
      // Typography
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },

      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600'
      },

      fontSize: {
        // Headings
        'h1': ['44px', { lineHeight: '52px', letterSpacing: '0' }],
        'h2': ['32px', { lineHeight: '120%', letterSpacing: '0' }],
        'h3': ['20px', { lineHeight: '130%', letterSpacing: '0' }],
        'h4': ['18px', { lineHeight: '130%', letterSpacing: '0' }],

        // Body text
        'body-large': ['16px', { lineHeight: '170%', letterSpacing: '0' }],
        'body-default': ['16px', { lineHeight: '160%', letterSpacing: '0' }],
        'body-small': ['14px', { lineHeight: '15px', letterSpacing: '0' }],

        // Caption
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.25px' }]
      },

      // Colors
      colors: {
        // Text colors
        text: {
          primary: '#1B3629',
          default: '#333333',
          secondary: '#757575',
          inverse: '#FFFFFF',
          disabled: '#B3B3B3',
          muted: '#B3B3B3',
          green: '#3DAC5C',
          red: '#F00000'
        },

        // Background colors
        bg: {
          default: '#FFFFFF',
          colored: '#2A5942',
          secondary: '#ECECEC'
        },

        // Border colors
        border: {
          default: '#D9D9D9',
          subtle: '#CFDED1',
          green: '#3DAC5C',
          red: '#F00000'
        },

        // Brand colors
        brand: {
          primary: '#1B3629',
          secondary: '#2A5942',
          accent: '#3DAC5C'
        },

        // Primary color variants
        primary: {
          50: '#E8F5E8',
          100: '#C8E6C8',
          200: '#A3D9A3',
          300: '#7ECC7E',
          400: '#62C262',
          500: '#3DAC5C',
          600: '#359954',
          700: '#2A7F43',
          800: '#1F6533',
          900: '#1B3629'
        },

        // Secondary color variants
        secondary: {
          50: '#F0F7F3',
          100: '#D9EBE0',
          200: '#B3D7C2',
          300: '#8CC3A4',
          400: '#65AF86',
          500: '#2A5942',
          600: '#244E3A',
          700: '#1E4231',
          800: '#183629',
          900: '#122A20'
        },

        // Semantic colors
        success: '#3DAC5C',
        error: '#F00000',
        warning: '#F59E0B',
        info: '#3B82F6',

        // Neutral grays
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#ECECEC',
          300: '#D9D9D9',
          400: '#B3B3B3',
          500: '#757575',
          600: '#333333',
          700: '#2A2A2A',
          800: '#1B1B1B',
          900: '#0A0A0A'
        }
      }
    }
  }
}

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const cssVariables = {
  // Typography
  '--font-family-primary': 'Raleway, sans-serif',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semibold': '600',

  // Headings
  '--h1-font-size': '44px',
  '--h1-line-height': '52px',
  '--h1-letter-spacing': '0',
  '--h1-font-weight': '600',
  '--h2-font-size': '32px',
  '--h2-line-height': '120%',
  '--h2-letter-spacing': '0',
  '--h2-font-weight': '600',
  '--h3-font-size': '20px',
  '--h3-line-height': '130%',
  '--h3-letter-spacing': '0',
  '--h3-font-weight': '600',
  '--h4-font-size': '18px',
  '--h4-line-height': '130%',
  '--h4-letter-spacing': '0',
  '--h4-font-weight': '600',

  // Body text
  '--body-large-font-size': '16px',
  '--body-large-line-height': '170%',
  '--body-large-letter-spacing': '0',
  '--body-large-font-weight': '400',
  '--body-default-font-size': '16px',
  '--body-default-line-height': '160%',
  '--body-default-letter-spacing': '0',
  '--body-default-font-weight': '400',
  '--body-small-font-size': '14px',
  '--body-small-line-height': '15px',
  '--body-small-letter-spacing': '0',
  '--body-small-font-weight': '500',

  // Caption
  '--caption-font-size': '12px',
  '--caption-line-height': '16px',
  '--caption-letter-spacing': '0.25px',
  '--caption-font-weight': '400',

  // Colors
  '--color-text-primary': '#1B3629',
  '--color-text-default': '#333333',
  '--color-text-secondary': '#757575',
  '--color-text-inverse': '#FFFFFF',
  '--color-text-disabled': '#B3B3B3',
  '--color-text-muted': '#B3B3B3',
  '--color-text-green': '#3DAC5C',
  '--color-text-red': '#F00000',

  '--color-bg-default': '#FFFFFF',
  '--color-bg-colored': '#2A5942',
  '--color-bg-secondary': '#ECECEC',

  '--color-border-default': '#D9D9D9',
  '--color-border-subtle': '#CFDED1',
  '--color-border-green': '#3DAC5C',
  '--color-border-red': '#F00000',

  '--color-icon-default': '#333333',
  '--color-icon-inverse': '#FFFFFF',

  '--color-brand-primary': '#1B3629',
  '--color-brand-secondary': '#2A5942',
  '--color-brand-accent': '#3DAC5C'
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Get typography style
export const getTypographyStyle = (variant, type = 'headings') => {
  return typography[type]?.[variant] || {}
}

// Get color value
export const getColor = (category, variant = 'default') => {
  return colors[category]?.[variant] || colors[category] || null
}

// Generate color with opacity
export const withOpacity = (color, opacity) => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Apply CSS variables to document
export const applyCSSVariables = () => {
  const root = document.documentElement
  Object.entries(cssVariables).forEach(([property, value]) => {
    root.style.setProperty(property, value)
  })
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export default {
  typography,
  colors,
  tailwindConfig,
  cssVariables,
  getTypographyStyle,
  getColor,
  withOpacity,
  applyCSSVariables
}