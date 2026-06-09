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
            exclude: /.*\/wallpaper.png$/,
            png: {
                quality: 80,
                progressive: true,
            },
            jpeg: {
                quality: 70,
                progressive: true,
            },
            webp: { 
                quality: 60,
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
