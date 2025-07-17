'use strict';

/**
 * gallery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::gallery.gallery', ({ strapi }) => ({
	// Find all galleries with optional filtering
	async find(ctx) {
		const { query } = ctx;

		// Add default populate for media and content
		const defaultPopulate = {
			media: true,
			content: true
		};

		// Merge with any populate from query
		query.populate = { ...defaultPopulate, ...query.populate };

		const entity = await strapi.entityService.findMany(
			'api::gallery.gallery',
			{
				...query,
				sort: query.sort || 'date:desc,createdAt:desc'
			}
		);

		return this.sanitizeOutput(entity, ctx);
	},

	// Find one gallery by id or slug
	async findOne(ctx) {
		const { id } = ctx.params;
		const { query } = ctx;

		// Add default populate for media and content
		const defaultPopulate = {
			media: true,
			content: true
		};

		query.populate = { ...defaultPopulate, ...query.populate };

		let entity;

		// Check if id is actually a slug
		if (isNaN(id)) {
			entity = await strapi.entityService.findMany(
				'api::gallery.gallery',
				{
					...query,
					filters: { slug: id }
				}
			);
			entity = entity[0];
		} else {
			entity = await strapi.entityService.findOne(
				'api::gallery.gallery',
				id,
				query
			);
		}

		if (!entity) {
			return ctx.notFound('Gallery not found');
		}

		return this.sanitizeOutput(entity, ctx);
	},

	// Get galleries by category
	async byCategory(ctx) {
		const { category } = ctx.params;
		const { query } = ctx;

		const defaultPopulate = {
			media: true,
			content: true
		};

		query.populate = { ...defaultPopulate, ...query.populate };

		const entity = await strapi.entityService.findMany(
			'api::gallery.gallery',
			{
				...query,
				filters: {
					category: category,
					publishedAt: { $notNull: true }
				},
				sort: 'date:desc,createdAt:desc'
			}
		);

		return this.sanitizeOutput(entity, ctx);
	}
}));
