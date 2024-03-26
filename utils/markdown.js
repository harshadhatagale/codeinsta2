const remark= require("remark")
const html= require("remark-html")
const slug= require("remark-slug")
const stringify= require("remark-stringify")

const addHeadingIds=(markdownContent)=>{
    const processor= remark().use(html).use(slug).use(stringify)
    const result= processor.processSync(markdownContent)
    return result.contents;
}
module.exports= addHeadingIds