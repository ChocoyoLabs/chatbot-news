# chatbot-news

## news.source

Websites list.


**Questions**
* ¿Donde puedo leer noticias de Nicaragua?

## Setup

### 1 - Install from github

    $ npm install ChocoyoLabs/chatbot-news --save

### 2 - Insert commands from seed

    $ sequelize db:seed --seeders-path node_modules/chatbot-news/seeders --seed chatbot-news-seeder.js

### 3 - Create command file

On chatbot project create file ./commands/news.js

    var news = require('chatbot-news');

    // exports
    exports.source = news.sources;

## To remove this module

### 1 - Delete command file

On chatbot project

    $ rm ./commands/news.js

### 2 - Remove seed

    $ sequelize db:seed:undo --seeders-path node_modules/chatbot-news/seeders --seed chatbot-news-seeder.js

### 3 - Remove module from package

Edit **package.json** to remove **ChocoyoLabs/chatbot-news**
