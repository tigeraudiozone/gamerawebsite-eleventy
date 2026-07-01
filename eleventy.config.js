export default function(eleventyConfig) {

    eleventyConfig.addPasstrhoughCopy('/src/styles.css');
    eleventyConfig.addPasstrhoughCopy('/src/assets');

    return {
        dir:{
            input:"src",
            output:"public",
        }
    };
}