'use strict';

/**
 * blog-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  // Custom controller methods can be added here

  async find(ctx) {
    // Add custom query logic if needed
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    // If the id is a slug, find by slug instead of ID
    if (isNaN(id)) {
      const entity = await strapi.db.query('api::blog-post.blog-post').findOne({
        where: { slug: id },
        populate: ctx.query.populate || ['image', 'category', 'author', 'tags', 'seo']
      });

      if (!entity) {
        return ctx.notFound('Blog post not found');
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    }

    return super.findOne(ctx);
  }
}));
