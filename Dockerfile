
# Usar la imagen base de Node.js
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Instalar el servidor web estático http-server de Node.js
RUN npm install -g http-server

# Exponer el puerto 8080 en el contenedor
EXPOSE 8080

# Comando para iniciar el servidor web cuando el contenedor inicie
CMD ["http-server", ".", "-p", "8080"]
