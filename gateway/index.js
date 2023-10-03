const express = require("express");
const morgan = require("morgan");//para ver peticiones http
const {createProxyMiddleware} = require("http-proxy-middleware");//buscar que es proxymiddleware

const app = express();

app.use(morgan("dev"));

app.use(
    "/characters",
    createProxyMiddleware({
        target: "http://characters:8001", //nombre del contenedor creado en el microservicio characters
        changeOrigin: true,
    })
);
app.use(
    "/characters/:id",
    createProxyMiddleware({
        target: "http://characters:8001/:id", 
        changeOrigin: true,
    })
);
app.use(
    "/films",
    createProxyMiddleware({
        target: "http://films:8004",//nombre del contenedor creado en el microservicio films
        changeOrigin: true,
    })
)
app.use(
    "/films/:id",
    createProxyMiddleware({
        target: "http://films:8004/:id", 
        changeOrigin: true,
    })
);
app.use(
    "/planets",
    createProxyMiddleware({
        target: "http://planets:8003", //nombre del contenedor creado en el microservicio planets
        changeOrigin: true,
    })
)
app.use(
    "/planets/:id",
    createProxyMiddleware({
        target: "http://planets:8003/:id", //nombre del contenedor creado en el microservicio planets
        changeOrigin: true,
    })
)
app.listen(8000, ()=>{
    console.log("gateway on port 8000"); // puerto 8000 con docker, del contenedor, no de mi computadora
})