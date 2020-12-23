const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')
module.exports = withPlugins([
    [withImages, {
        fileExtensions: ["jpg", "jpeg", "png", "gif"]
    }],
    [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]
]);
// const withCSS = require('@zeit/next-css')
// module.exports = withImages(withBundleAnalyzer({
//     fileExtensions: ["jpg", "jpeg", "png", "gif"],
//     enabled: process.env.ANALYZE === 'true',
//     webpack(config) {
//         return config
//     }
// }))
