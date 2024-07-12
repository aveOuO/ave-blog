import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), mdx()],
    vite: {
        plugins: [
            AutoImport({
                dts: "types/auto-imports.d.ts", // 这里是生成的global函数文件
                imports: ["vue", "vue-router"], // 需要自动导入的插件
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/, /\.vue\?vue/, // .vue
                    /\.md$/, // .md
                ],
                // 解决eslint报错问题
                eslintrc: {
                    // 这里先设置成true然后npm run dev 运行之后会生成 .eslintrc-auto-import.json 文件之后，在改为false
                    enabled: false,
                    filepath: './.eslintrc-auto-import.json', // 生成的文件路径
                    globalsPropValue: true,
                },
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                dts: "types/components.d.ts",
                resolvers: [ElementPlusResolver()],
            })
        ],
        resolve: {
            alias: {
                "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src")
            }
        },
        css: {
            postcss: {
                plugins: [tailwindcss, autoprefixer]
            }
        },
        ssr: {
            noExternal: ['element-plus'],
        }
    }
});
