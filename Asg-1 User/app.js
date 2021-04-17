const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>User Assigment App</title></head>
        <body>
            <h1>Hello there welcome to this app</h1>
            <form action="/create-user" method="post">
                <input type="text" name="username"/>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
              <html>
              <head><title>Users List</title></head>
              <body>
                  <h1>User List</h1>
                  <ul>
                      <li>User 1</li>
                      <li>User 1</li>
                      <li>User 1</li>
                  </ul>
              </body>
              </html>
          `);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/');

      return res.end();
    });
  }
});

server.listen(3000);
