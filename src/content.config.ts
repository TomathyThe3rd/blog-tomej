import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const sport = defineCollection({
	loader: glob({ base: './src/content/sport', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			dyscyplina: z.string().optional(),
			dystans: z.string().optional(),
			czas: z.string().optional(),
		}),
});

const projekty = defineCollection({
	loader: glob({ base: './src/content/projekty', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			status: z.enum(['planowany', 'w-toku', 'zakonczony', 'porzucony']).optional(),
			tech: z.array(z.string()).optional(),
		}),
});

const muzyka = defineCollection({
	loader: glob({ base: './src/content/muzyka', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			wykonawca: z.string().optional(),
			album: z.string().optional(),
			rok: z.number().optional(),
			ocena: z.number().min(1).max(10).optional(),
			gatunek: z.string().optional(),
		}),
});

export const collections = { blog, sport, projekty, muzyka };