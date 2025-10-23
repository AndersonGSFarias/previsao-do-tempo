# Previsão do Tempo

Um aplicativo web simples para consulta da previsão do tempo atual em uma localidade específica, utilizando a API do OpenWeatherMap.

## Funcionalidades

- **Pesquisa por Localidade:** Permite ao usuário digitar o nome de um estado ou cidade para buscar informações do tempo.
- **Exibição do Tempo:** Mostra a temperatura atual (em °C), o nome da localidade e um ícone que representa o clima no momento.
- **Design Responsivo:** Interface limpa e adaptável, estilizada com Tailwind CSS.

## Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **Tailwind CSS:** Estilização (utilizado via CDN).
- **TypeScript:** Lógica principal da aplicação (manipulação do DOM e requisições).
- **OpenWeatherMap API:** Fonte dos dados de previsão do tempo.

## Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Pré-requisitos

- Você precisa ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node) instalados.
- Uma chave de API (API Key) do OpenWeatherMap.

### 2. Instalação

1.  Clone este repositório (ou baixe os arquivos para uma pasta).
2.  Abra o terminal na pasta do projeto.
3.  Instale as dependências de desenvolvimento (TypeScript):
    ```bash
    npm install
    ```

### 3. Configuração da API Key

O projeto utiliza uma chave de API para se comunicar com o OpenWeatherMap.

1.  Crie uma conta gratuita no [OpenWeatherMap](https://openweathermap.org/appid) para obter sua chave.
2.  Abra o arquivo `ts/index.ts`.
3.  Encontre a linha que faz a requisição `fetch` e substitua o valor da `appid` pela sua chave:

    ```typescript
    // Em ts/index.ts
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=SUA_CHAVE_API_AQUI&lang=pt_br&units=metric`);
    ```

### 4. Compilação e Execução

1.  O `index.html` espera um arquivo JavaScript em `js/index.js`. Você precisa compilar o arquivo TypeScript (`ts/index.ts`). Execute o comando:

    ```bash
    npx tsc
    ```

    (Este comando irá ler seu `tsconfig.json` e compilar os arquivos da pasta `ts` para a pasta `js`).

2.  Após a compilação, basta abrir o arquivo `index.html` no seu navegador de preferência.
