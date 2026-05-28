import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['./projects/*'],
    },
  },
  plugins: [
	  ViteImageOptimizer({
            png: {
		    quality: 30,
	    progressive: true,
	    },
            jpeg: { quality: 30,
	    progressive: true,},
            webp: { 
		    quality: 30,
			lossless: true
	    },
            svg: {
                plugins: [
                    { name: 'removeViewBox', active: false },
                    { name: 'sortAttrs' },
                ],
            },
        }),
	sveltekit()
  ]
});
