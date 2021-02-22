const slugify = require("@sindresorhus/slugify")

const title = process.argv.slice(2).join(" ")
console.log(slugify(title))
