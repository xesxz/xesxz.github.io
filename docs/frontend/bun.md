```js
// `server` is passed in as the second argument to `fetch`.
const server = Bun.serve({
  fetch(req, server) {
   // Get url and method
   const { url, method } = req;
   // Get pathname from url
   const { pathname } = new URL(url);
   // Get All Users
   if (pathname === "/api/users" && method === "GET") {
     return new Response(JSON.stringify({
      name:'zz'
     }), {
       status: 200,
       headers: {
         "Content-Type": "application/json",
         "Access-control-allow-origin": "*",
       },
     });
   }
  },
  port:3000
});

```
