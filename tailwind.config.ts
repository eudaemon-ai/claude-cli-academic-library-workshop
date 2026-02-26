import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Libre Baskerville', 'Georgia', 'serif'],
				mono: ['Fira Code', 'monospace']
			},
			colors: {
				// JHU brand colors
				'jhu-blue': '#002D72',       // Heritage Blue
				'jhu-spirit': '#68ACE5',     // Spirit Blue
				'jhu-gold': '#F0B323',       // Gold
				'jhu-sable': '#53565A',      // Sable (charcoal)
				// Module accent colors (JHU-mapped)
				'module-reference': '#002D72',   // Heritage Blue
				'module-cataloging': '#1265A8',  // Mid Blue
				'module-collection': '#D4870A'   // Deep Gold
			}
		}
	},
	plugins: [typography]
} satisfies Config;
