export default {
    content: ['./**/index.html', './src/**/*.{vue,js,ts,jsx,tsx,astro}'],
    corePlugins: {
        // 关闭默认样式
        preflight: false
    }
}