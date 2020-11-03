## next 学习整理

> next.js 学习demo搭建简易博客

#### next学习总结的一些点

- 在next中一个页面的的react组件由 `pages` 目录下导出, 页面的路由和`pages`目录下的路径相关
- nextjs会自动完成`Code splitting`，因此每个页面仅加载页面所需的内容。这意味着当主页被渲染时，最初不提供其他页面的代码。这样可以确保及时有上百个页面也可以迅速加载主页。仅加载您请求的页面的代码也意味着页面被隔离。如果某个页面抛出错误，则该应用程序的其余部分仍将正常工作。此外，在Next.js的生产版本中，只要`Link`组件出现在浏览器的视口中，Next.js就会在后台自动预取链接页面的代码。当您单击链接时，目标页面的代码将已经在后台加载，并且页面转换将很快完成
- Next.js通过代码拆分(`Code splitting`)，客户端导航(`client-side navigation`)和预取(`prefetching`)（在生产中）自动优化您的应用程序以获得最佳性能
- 可以通过`pages`下的文件自动生成路由和内资的`<Link />`组件不用使用其他路由的库了
- nextjs 可以提供像图片一样的静态文件 在`public`文件下
- 使用`styled-jsx`库把css写在react的组件里，并且css样式会被限制范围(其他组件将不会受影响)
- 使用`css module`会自动生成特殊的classname，您不必担心类名冲突。此外，Next.js的代码拆分(`Code splitting`)功能也可以在CSS模块上使用。它确保为每个页面加载最少的CSS。这导致较小的束尺寸
- 只有在`page/_app.js`文件里才能导入`global CSS`
- next.js会预渲染`pre-render`每个页面，这意味着nextjs会为每个页面预先生成一个html，而不是全部由客户端Javascript完成。预渲染可以带来更高的性能和SEO
- 有两种方式完成预渲染`pre-render`, 静态生成`Static Generation`和服务器端`Server-side Rendering`，区别在于为页面生成HTML的时间
- `Static Generation` 在build的时候生成HTML,然后，在每个请求上重新使用预渲染的HTML, `Server-side Rendering` 在每个请求上生成HTML。
- nextjs预渲染机制`pre-render`可以使得你禁止掉页面的javascript仍然可以浏览正常页面，这是因为Next.js已将应用预先渲染为静态HTML，从而使您无需运行JavaScript即可查看应用界面
- `Static Generation`适用于博客，营销页面，电商列表，帮助文档， 如果页面经常更新数据或者每次请求都不一样，则推荐使用`Server-side Rendering` 
- `getStaticProps` 用于`Static Generation`获取数据，在生产构建的时候执行
- `getStaticProps` 只在服务端运行，而不会在流浪器中运行，甚至不会在浏览器的JS bundle里，这意味着您可以编写诸如直接数据库查询之类的代码，而无需将其发送到浏览器
- `getStaticProps`只会在一个`page`页面中导出
- `prerender-spa-plugin` webpack插件可以完成react预渲染，类似nextjs
- pages/posts/[...id].js 匹配路由 /posts/a, 和 /posts/a/b, /posts/a/b/c 

