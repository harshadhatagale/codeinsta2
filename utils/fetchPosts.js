import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory= path.join(process.cwd(), "posts");

export function getPostSlugs(){
    return fs.readdirSync(postDirectory);
}
export function getPostByslug(slug){
    const fileContent  = fs.readFileSync(path.join(postDirectory, slug), "utf-8");
    const{data, content}= matter(fileContent);
    return{
        slug,
        title: data.title || "",
        date: data.date || "",
        thumbnail: data.thumbnail || "",
        hor_img: data.hor_thumb || "",
        description: data.description || "",
        content,
    }
}