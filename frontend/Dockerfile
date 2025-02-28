# Usa a imagem oficial do Node.js
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY package.json package-lock.json ./

# Instala as dependências do Angular
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta do Angular
EXPOSE 4200

# Comando para rodar o Angular em modo dev
CMD ["npm", "start"]
