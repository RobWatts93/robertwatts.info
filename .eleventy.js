const Image = require('./src/_shortcodes/image');
 
module.exports = function (eleventyConfig) {

    // TODO: Which of these is neccessary?
    eleventyConfig.addShortcode('image', Image);

    eleventyConfig.addWatchTarget('./src/_static/scss/');
    eleventyConfig.addPassthroughCopy("./src/_static/scss/");

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
          },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    };

};

