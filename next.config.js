const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
module.exports = withImages(withCSS());

// module.exports = {
//     env: {
//         API_ENDPOINT: 'https://wdev.be/wdev_anneleen/eindwerk/api/',
//         IMAGE_PATH: 'https://wdev.be/wdev_anneleen/eindwerk/images/kamer/'
//     }
// }