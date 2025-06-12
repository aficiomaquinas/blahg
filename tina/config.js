import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "main";

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Actualizado para Cloudflare Pages
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "assets",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "page",
				label: "Páginas",
				path: "src/pages",
				match: {
					include: "**/*.md"
				},
				ui: {
					filename: {
						readonly: true,
					},
				},
				fields: [
					{
						type: "rich-text",
						name: "body",
						label: "Contenido",
						isBody: true,
					},
				],
			},
			{
				name: "post",
				label: "Posts",
				path: "posts",
				defaultItem: () => ({
					title: "New Post",
					added: new Date(),
					tags: [],
				}),
				ui: {
					dateFormat: "MMM DD YYYY",
					filename: {
						readonly: false,
						slugify: (values) => {
							return values?.slug?.toLowerCase().replace(/ /g, "-");
						},
					},
				},
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						isTitle: true,
						required: true,
					},
					{
						label: "Slug",
						name: "slug",
						type: "string",
						required: true,
					},
					{
						label: "Description",
						name: "description",
						type: "string",
						required: true,
					},
					{
						label: "Tags",
						name: "tags",
						type: "string",
						list: true,
						options: [
							{
								value: "technical",
								label: "Technical",
							},
							{
								value: "advice",
								label: "Advice",
							},
							{
								value: "events",
								label: "Events",
							},
							{
								value: "learning",
								label: "Learning",
							},
							{
								value: "meta",
								label: "Meta",
							},
							{
								value: "work",
								label: "Work",
							},
							{
								value: "personal",
								label: "Personal",
							},
							{
								value: "musings",
								label: "Musings",
							},
						],
					},
					{
						label: "Added",
						name: "added",
						type: "datetime",
						dateFormat: "MMM DD YYYY",
						required: true,
					},
					{
						label: "Updated",
						name: "updated",
						type: "datetime",
						dateFormat: "MMM DD YYYY",
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
	search: {
		tina: {
			indexerToken: process.env.TINA_SEARCH_TOKEN, // Actualizado para consistencia
			stopwordLanguages: ["eng"],
		},
		indexBatchSize: 50,
		maxSearchIndexFieldLength: 100,
	},
});
