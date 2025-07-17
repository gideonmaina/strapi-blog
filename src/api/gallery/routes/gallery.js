'use strict';

/**
 * gallery router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::gallery.gallery');

const customRouter = (innerRouter, extraRoutes = []) => {
	let routes;
	return {
		get prefix() {
			return innerRouter.prefix;
		},
		get routes() {
			if (!routes) routes = innerRouter.routes.concat(extraRoutes);
			return routes;
		},
	};
};

const myExtraRoutes = [
	{
		method: 'GET',
		path: '/galleries/category/:category',
		handler: 'gallery.byCategory',
		config: {
			auth: false,
		},
	},
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
