"use strict";
const { Documentalist, MarkdownPlugin, TypescriptPlugin } = require('@documentalist/compiler');
// Пишем jakarta, потому что после линковки от lerna, пути до пакетов резолвятся,
// как ../jakarta, а не ../../jakarta
const excludePaths = ['jakarta'];
new Documentalist()
    .use('.md', new MarkdownPlugin())
    .use(/\.ts$/, new TypescriptPlugin({ excludePaths }))
    .documentGlobs('src/**/*', 'docs/mapgl-api/**/*')
    .then((docs) => console.log(JSON.stringify(docs)));
//# sourceMappingURL=documentalist.js.map