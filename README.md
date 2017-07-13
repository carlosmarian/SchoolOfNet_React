# SchoolOfNet_React
Curso da SchoolOfNet Iniciando Com React

Instalar o babel cli
sudo npm install -g babel-cli


Criar arquivo package.json:
 configurar basico(nome, versaoi...)
Instalar o babel preset react
npm install babel-preset-react --save-dev


Configurar o babel para ele monitorar e sempre gerar um novo js.
babel --presets react [pasta origem] --watch --out-dir [pasta destino]
Exemplo: 
 babel --presets react src --watch --out-dir js


