import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["news", "event", "research", "media"]),
    summary: z.string(),
    thumbnail: z.string().optional(),
    relatedTeams: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.enum(["publication", "presentation", "book-review", "press-release", "other"]),
    authors: z.array(z.string()).default([]),
    relatedTeams: z.array(z.string()).default([]),
    externalUrl: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { news, research };
