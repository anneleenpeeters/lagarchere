const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
module.exports = withImages(withCSS());

module.exports = withImages(withCSS({
    env: {
        NEXT_PUBLIC_API_ENDPOINT: 'https://wdev.be/wdev_anneleen/eindwerk/api/',
        NEXT_PUBLIC_IMAGE_PATH: 'https://wdev.be/wdev_anneleen/eindwerk/images/kamer/',
        NEXT_PUBLIC_MAP_TOKEN: "pk.eyJ1IjoiYW5uZWxlZW5wZWV0ZXJzIiwiYSI6ImNrYXd5d2QxYjAxNGgyeW5pNTJhaDdoMXEifQ.ls-zfu0zpOvHmm_xWvClfw"
    }

}))
    