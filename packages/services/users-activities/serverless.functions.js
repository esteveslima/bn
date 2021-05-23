/* eslint-disable no-template-curly-in-string */
// Functions configuration resolved as .js variable with extra custom logic

const { utils: { functions } } = require('@sls/definitions');

module.exports = async ({ options, resolveConfigurationProperty }) => {
  const stage = await resolveConfigurationProperty(['provider', 'stage']);

  return functions({
    createItem: {
      handler: './src/controllers/createItem/handler.default',
      events: [
        {
          http: {
            method: 'POST',
            path: '/item/{userName}',
          },
        },
      ],
    },
    getItem: {
      handler: './src/controllers/getItem/handler.default',
      events: [
        {
          http: {
            method: 'GET',
            path: '/item/{userName}/{itemName}',
          },
        },
      ],
    },
    deleteItem: {
      handler: './src/controllers/deleteItem/handler.default',
      events: [
        {
          http: {
            method: 'DELETE',
            path: '/item/{userName}/{itemName}',
          },
        },
      ],
    },
    updateItem: {
      handler: './src/controllers/updateItem/handler.default',
      events: [
        {
          http: {
            method: 'PUT',
            path: '/item/{userName}/{itemName}',
          },
        },
      ],
    },
    listItems: {
      handler: './src/controllers/listItems/handler.default',
      events: [
        {
          http: {
            method: 'GET',
            path: '/items/{userName}',
          },
        },
      ],
    },
  });
};
