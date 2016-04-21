'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('commands', [
      {
        pattern: 'noticias',
        command: 'news.sources',
        priority: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}).catch(function (err) {
          console.error(err.message);
          throw err;
        });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('commands', [
      {
        command:'news.sources',
      },
    ], {});
  },
};
