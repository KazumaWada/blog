import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";

export default async function(eleventyConfig) {
 eleventyConfig.addPlugin(syntaxHighlight);

 let options = {
		breaks: true,
		linkify: true,
	};
 eleventyConfig.setLibrary("md", markdownIt(options));

};