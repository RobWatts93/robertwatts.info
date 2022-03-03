module.exports = function (eleventyConfig) {


    eleventyConfig.addPassthroughCopy("./src/css/")

    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });
        return arr.slice(0,1);
    });

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
        dir: {
            input: 'src',
            output: 'public'
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    };



};

