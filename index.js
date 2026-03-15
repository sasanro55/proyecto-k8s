const http = require("http");
const PORT = 3000;
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Mi aplicación</title>
</head>
<body style="font-family: Arial; text-align:center; margin-top:50px;">
    <h1>Mi aplicación en Docker</h1>
    <h2>Hola desde mi API en Kubernetes</h2>
</body>
</html>
`;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});
server.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});