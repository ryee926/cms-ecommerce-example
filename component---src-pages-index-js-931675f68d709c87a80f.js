(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1346:function(t){t.exports={data:{dadjokesGraphQl:{joke:{id:"1DQZvcFBdib",joke:"To be Frank, I'd have to change my name.",permalink:"https://icanhazdadjoke.com/j/1DQZvcFBdib"}}}}},1347:function(t){t.exports={data:{fakerData:{image:{animals:"http://lorempixel.com/640/480/animals"}}}}},199:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=(a(209),a(202)),r=a(208),o=a(219),c=(a(297),a(113),a(298)),m=a(201),p=a(203),d=(a(299),m.default.div.withConfig({displayName:"product-list__ProductListContainer"})(["margin:1rem 3rem;"])),w=function(t){return t.data,n.a.createElement(p.StaticQuery,{query:"2451298148",render:function(t){return n.a.createElement(d,null,n.a.createElement("h1",null,"Products"),n.a.createElement(i.ThemeProvider,null,n.a.createElement(l,null,t.allDatoCmsProduct.edges.map(function(t){var e=t.node;return n.a.createElement("div",{key:e.id,style:{textAlign:"center"}},n.a.createElement(u,{src:e.image.url}),n.a.createElement("h2",null,e.name),n.a.createElement("h3",null,"$",e.price),n.a.createElement(r.Button,{danger:!0,pill:!0,className:"snipcart-add-item","data-item-id":e.id,"data-item-name":e.name,"data-item-price":e.price,"data-item-image":e.image.url,"data-item-url":"/",style:{display:"block",margin:"0 auto"}},"Add to Cart"))}))))},data:c})},l=m.default.div.withConfig({displayName:"product-list__GridContainer"})(["display:flex;align-items:center;justify-content:space-evenly;flex-flow:wrap;width:100%;"]),u=m.default.img.withConfig({displayName:"product-list__ProductImage"})(["display:block;margin:0 auto;height:150px;"]),h=a(21),g=a.n(h),A=a(1346),f=function(t){function e(){return t.apply(this,arguments)||this}return g()(e,t),e.prototype.render=function(){return n.a.createElement(p.StaticQuery,{query:"2877627682",render:function(t){return n.a.createElement(E,null,n.a.createElement("h2",null,"Daily Dad Joke"),n.a.createElement("p",null,t.dadjokesGraphQl.joke.joke))},data:A})},e}(n.a.Component),E=m.default.div.withConfig({displayName:"dadjokes__JokeContainer"})(["margin:1rem 3rem;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;img{width:35vw;}p{font-size:1.25rem;}"]);a(1347),m.default.div.withConfig({displayName:"FakeData__FakerContainer"})(["margin:1rem 3rem;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;img{height:25vh;}p{font-size:1.25rem;}"]),e.default=function(){return n.a.createElement(o.a,null,n.a.createElement(f,null),n.a.createElement(w,null))}},203:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return u}),a.d(e,"StaticQueryContext",function(){return w}),a.d(e,"StaticQuery",function(){return l});var s=a(0),n=a.n(s),i=a(12),r=a.n(i),o=a(200),c=a.n(o);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return o.withPrefix}),a.d(e,"navigate",function(){return o.navigate}),a.d(e,"push",function(){return o.push}),a.d(e,"replace",function(){return o.replace}),a.d(e,"navigateTo",function(){return o.navigateTo});var m=a(204),p=a.n(m);a.d(e,"PageRenderer",function(){return p.a});var d=a(45);a.d(e,"parsePath",function(){return d.a});var w=n.a.createContext({}),l=function(t){return n.a.createElement(w.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},204:function(t,e,a){var s;t.exports=(s=a(213))&&s.default||s},210:function(t){t.exports={data:{site:{siteMetadata:{title:"cms-ecommerce-store"}}}}},213:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(12),r=a.n(i),o=a(58),c=a(1),m=function(t){var e=t.location,a=c.a.getResourcesForPathname(e.pathname);return n.a.createElement(o.a,{location:e,pageResources:a})};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=m},216:function(t,e,a){},219:function(t,e,a){"use strict";var s=a(210),n=a(0),i=a.n(n),r=a(12),o=a.n(r),c=a(220),m=a.n(c),p=a(203),d=a(201),w=(a(226),a(233),a(208)),l=(a(209),a(202)),u=d.default.div.withConfig({displayName:"header__SnipContainer"})(["display:flex;align-items:center;justify-content:space-between;"]),h=d.default.div.withConfig({displayName:"header__HeaderContainer"})(["display:flex;align-items:center;justify-content:space-between;padding:0 2rem;"]),g=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"maroon",marginBottom:"1.45rem"}},i.a.createElement(h,null,i.a.createElement("h1",{className:"whiteText",style:{margin:0}},e),i.a.createElement(u,null,i.a.createElement(w.Button,{primary:!0,style:{margin:"1rem"},className:"snipcart-checkout"},"View Cart"),i.a.createElement(l.ThemeProvider,null,i.a.createElement("div",{className:"whiteText snipcart-summary"},i.a.createElement("p",null,"Cart: (",i.a.createElement("span",{className:"snipcart-total-items"}),")"),i.a.createElement("p",null,"Total: ",i.a.createElement("span",{className:"snipcart-total-price"})))))))},A=(a(216),function(t){var e=t.children;return t.data,i.a.createElement(p.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:t.site.siteMetadata.title}),i.a.createElement(g,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},e))},data:s})});A.propTypes={children:o.a.node.isRequired},e.a=A},298:function(t){t.exports={data:{allDatoCmsProduct:{edges:[{node:{id:"DatoCmsProduct-338426-en",slug:"tshirt",name:"T-Shirt",price:10,image:{url:"https://www.datocms-assets.com/6492/1531441554-tshirt-1.png",sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAb1JREFUOE+V1D1rVFEQBuBn71oYNhi/AhEVRRErP7DRTogWwTTa2PsX/GO2aVNaKWiRQmXFQgJ+QFzBQHbXYubsnt29a/CF4dwzZ+adOTNzT8ciOikwyvVyrl9ybXIdp0zQNYtOZTTGVbzEAc7iBfr4aUpUgi9sCtl5XMcVnMJrrKbNAPdFgD4+4VvlO0m9KM7gSTrs4Dve4TZu4X0S7CT5dvqMk2OSYSPq9VRk9DX1PTzDzbTdwyv8zvMLeJC6BqNuRXYNp/EmjU/gMGWEfbwVwboiq0H6DfEjuSZZPhe16mCjIoUbKbVuI2176QudRkS6IzIYYA330mCYTh9TOqmTNmvi+vu4i3GDk7nZTcOuiMq0WaOUeuZWTZu6K5JaaUTEA2zm4SOs5/fMjM3p1vE4vzcFx7ArIu+JiNuiCX189m/0sCK6/EFkOSQiltQbUZetaj+PkuFW2pa/rVE1ZZQHpU5tRPMo4zZU+daO5SFoq9syFNvS+dZMZl6PY7Bge9zV/occ06lfhlKbGmW4W0vTRlj/DUct5wVHWm7YRniIS3goHCZPU4UxLuLPnH5pR8+JQZ+/bkGDX+KFmcFfkqFqBumHcmsAAAAASUVORK5CYII=",aspectRatio:1,src:"https://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fm=png&h=300&w=300",srcSet:"https://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fit=crop&fm=png&h=75&w=75 75w,\nhttps://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fit=crop&fm=png&h=150&w=150 150w,\nhttps://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fit=crop&fm=png&h=300&w=300 300w,\nhttps://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fit=crop&fm=png&h=450&w=450 450w,\nhttps://www.datocms-assets.com/6492/1531441554-tshirt-1.png?fit=crop&fm=png&h=300&w=300 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{id:"DatoCmsProduct-338427-en",slug:"hoodie",name:"Hoodie",price:20,image:{url:"https://www.datocms-assets.com/6492/1531441584-hoodie-1.png",sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAetJREFUOE9t1MtqFUEQBuBvJsYrKoiYRIianbhQEEQXKuIqO40rdz6AT+Ib+Ag+gBd0oeBCwQuiLiS68LaJQTBBI2pyznFRNZk+50zB0DVd9f9VXV3VlXGpcBonMIVJ7ErbGtaxhNd4hkEJ3jKib+AiruEtbiW4BB3EZVwXgR4WWBPpVKGf6zxe4a7IchXL+IcZHMMD/MYRPC+wJlIZYCeu4r445n48wXmsYA9O4VGS/sRTLOCDKEVVoc4I81jERyHHcQjbcDh9vuIPvoiSwByO4h7qhgy24nPqFd7gNn6JIEsiqztJVqXvJ3GiCv06N2tt4bensanvShLVqdOWakf+D9KuLjaaizmLveil/QV+4B1epl9P1PRcQTYoCUtpojf2nmiJgTYIw6fYlC7Cgfb4zVppg5Q9OdTUdBPSgksZBXf5dBI2tWz0LjvRd2P4LsK+uOk5OU4j0sO0mJq/o8YuwjWcxL4OWyN9ccNjAUvC5igHMCtaZOwWRRMvi8DHcm+Tp2yBXuo9Ma9DjoU09X2Mb6lvyIRq7SVMiWdpWsws3W3TyKp4QC4ltoeq1maxKF6WGcPZNmu/0ImsZnAB73Ovs5UWRA0nxXhVOJNfjd3iBZrFlVFw+WJPiOjfcTP3moiTua5rS9THjRGs/5amduc6Fmp0AAAAAElFTkSuQmCC",aspectRatio:1,src:"https://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fm=png&h=300&w=300",srcSet:"https://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fit=crop&fm=png&h=75&w=75 75w,\nhttps://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fit=crop&fm=png&h=150&w=150 150w,\nhttps://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fit=crop&fm=png&h=300&w=300 300w,\nhttps://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fit=crop&fm=png&h=450&w=450 450w,\nhttps://www.datocms-assets.com/6492/1531441584-hoodie-1.png?fit=crop&fm=png&h=300&w=300 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{id:"DatoCmsProduct-338484-en",slug:"shoes",name:"Shoes",price:8,image:{url:"https://www.datocms-assets.com/6492/1531467003-shoes-1.png",sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAdRJREFUOE+V1DtoVEEUBuDv7mZ94QtR0aAWQmwsfFQ+CTYWqQQfoOADIiIoCLYRUQRbBUFFIjZ2NmqphaSwFyxEsRHUmBRKMARdsqvFmXHXdc3u/nCZueee+c+Zf/65ZXOjhDKKDnn/oECfIGiOtaL5e1vk6r9QT2MlxWsYwAgWYRIzuiCFxbiKjS3xe6JIDd9wIcULjcJtCxxJC2cwikPYife4g214lXJutCOQiMvp5SR2Ywof0Y/9eIIr+JTm63Aam0SXG7AEX0SxUhZ+FC/xQGfMwz4MCtIVWIuz+NyXkiawA9+xCrOiYtavrnFQdVTxBssxjYM4h5FMWMWZ9HSLH3gsuhwXjfzx2iCOi2qtXizhpziwWeGIBSlWTeMEngqtu74Fe3AJK+fIKTVPKkLw+cLIlfTtojj9rOn9vzkM4DqWNQf/5/6bguQ1tuM23okDPCzIp1POMRpOryeCLdiaFl/GMB7hBN7iudjBUawWXa0XO/qAZ1m/Nbgr7uvXVGAML4TwnXAKezGcbXMeu3BLEE5hqdhW/oXVmuaFxh8qe3hSChAeGsfm9H5AbK0XXKNhmX4MpXGhIKsIsTvZqibu80MhUccFvaDIZFkboqteUUj3/DfzMWXfDnSWaQAAAABJRU5ErkJggg==",aspectRatio:1,src:"https://www.datocms-assets.com/6492/1531467003-shoes-1.png?fm=png&h=300&w=300",srcSet:"https://www.datocms-assets.com/6492/1531467003-shoes-1.png?fit=crop&fm=png&h=75&w=75 75w,\nhttps://www.datocms-assets.com/6492/1531467003-shoes-1.png?fit=crop&fm=png&h=150&w=150 150w,\nhttps://www.datocms-assets.com/6492/1531467003-shoes-1.png?fit=crop&fm=png&h=300&w=300 300w,\nhttps://www.datocms-assets.com/6492/1531467003-shoes-1.png?fit=crop&fm=png&h=450&w=450 450w,\nhttps://www.datocms-assets.com/6492/1531467003-shoes-1.png?fit=crop&fm=png&h=300&w=300 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{id:"DatoCmsProduct-338486-en",slug:"sunglasses",name:"Sun Glasses",price:15,image:{url:"https://www.datocms-assets.com/6492/1531467033-sunglasses-1.png",sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAU1JREFUOE/t071qFFEUB/DfzizbWG2xWApCilS2kj6Poa+QPIWV4AuEIIRACkuFEFLEwk4JCAbETsQiSbFddt2Psbjn7s5OZhfEUv9wZ849938+7z38c+j8ob4N1bqDEt11hxvQlWyxzKTErEbqxb4f8jz0BSYYhs2oZlNiVkgRZtjCAT7iKw4xCIf9mvMBXuMbLnGMJ+FjUeFTKVrVWOfu46yFV2E3Ex5KGVW4w1SKNg7dSzzGI7wI3Tg407Cp8CN4nofil9WI0/hfSWU+wIfQTRrcbLvXxUVE7IUyX1R+DkPchHyrHfmW3xf4jk+So5GUWV7wrmaY5bmUZS65kNr2JRO3pSyajT5Ve2OBkxbeCDuCXOIaR1LksdS3V9i3bENuxRupqgI/8RbP8FkteDOLOupjuGkky8VHyqKIfVPOl5PRsTqiWc7T9B9/id/9VWtXn1I0AwAAAABJRU5ErkJggg==",aspectRatio:1,src:"https://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fm=png&h=300&w=300",srcSet:"https://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fit=crop&fm=png&h=75&w=75 75w,\nhttps://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fit=crop&fm=png&h=150&w=150 150w,\nhttps://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fit=crop&fm=png&h=300&w=300 300w,\nhttps://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fit=crop&fm=png&h=450&w=450 450w,\nhttps://www.datocms-assets.com/6492/1531467033-sunglasses-1.png?fit=crop&fm=png&h=300&w=300 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{id:"DatoCmsProduct-346351-en",slug:"shorts",name:"Shorts",price:12,image:{url:"https://www.datocms-assets.com/6492/1532026087-shorts-1.png",sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAilJREFUOE+t1E2IjlEUB/Df885jDDNjfOUzhHxNiZ0aC5S1LEgWJAsbJRRZIha2SqxslGJlwY4y2YmyoJE0QkqRwfiaZuZlcc7T+/jazV3de+7/nPs//3POhcLEraIKtg1r8QON/+P/uZqYgse4UaZxN67jPSYlqL4KrUzqdwXGMAu71AK+w328wWS04WfNaST3zbyvHhjPu/nYgqIKuACnsRhvMSSYFviO5YnrxKCQpomZmIdXmC5JdOFSOpzEen+vPdib9z01+zpBBC5iWkNE/prGuYJdF87jRM250rC9ZhtOHyJGT0O8OI4DaXyJffiEVViW9lJLz62ikIOJOyDS7WkIrTYJsStG14ReT9OpW7AZEy1yJLGdOJ4+m9FeYDsW4oJW9f5sm53YmPvDQudu3BPyfMF+DJWYgW8JbhMsGn4P2ok+0WvwqGY/lfjJuFsV5VkC6s3bhaV57kM/XoiiVO02H7NF2yxHR1WUo0LHUcESzuFmBu4UBZKYKovnYsK+4CwWl5iGG9ghXr6Tjg/TuUNU8lsG/qqlc4FbiV+F7jKDXBFj15cBS1xO4AoxmsQkDWhpXdT2w2gvE3RG6HUmHQvB7AdWCo0aiRnIALRYEmlPKsXrt/EgjUSqo7lfgNfpuChta0T79ONq2j5jpMQS9GIDpoqpIRh9F7/IQTEJh0Rj78RHHBP/aKXrugKrMUek8WdDt6Xjkzz3ir/vo3igKYpKEPhgotcvdQOBRV9qF0MAAAAASUVORK5CYII=",aspectRatio:1,src:"https://www.datocms-assets.com/6492/1532026087-shorts-1.png?fm=png&h=300&w=300",srcSet:"https://www.datocms-assets.com/6492/1532026087-shorts-1.png?fit=crop&fm=png&h=75&w=75 75w,\nhttps://www.datocms-assets.com/6492/1532026087-shorts-1.png?fit=crop&fm=png&h=150&w=150 150w,\nhttps://www.datocms-assets.com/6492/1532026087-shorts-1.png?fit=crop&fm=png&h=300&w=300 300w,\nhttps://www.datocms-assets.com/6492/1532026087-shorts-1.png?fit=crop&fm=png&h=450&w=450 450w,\nhttps://www.datocms-assets.com/6492/1532026087-shorts-1.png?fit=crop&fm=png&h=300&w=300 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-931675f68d709c87a80f.js.map