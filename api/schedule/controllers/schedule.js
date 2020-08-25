'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('schedule').find(ctx.query, ['months', 'months.events']);
      },
    findOne: async ctx => {
        return await strapi.query('schedule').findOne({id: ctx.params.id}, ['months', 'months.events']);
      },
};