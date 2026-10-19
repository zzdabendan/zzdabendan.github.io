import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 知识库：一篇文章 = src/content/kb/ 下的一个 .md 文件
const kb = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/kb' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(['生活', '学校', '工作']),
		summary: z.string(),
		// 分组内的排序号，越小越靠前
		order: z.number(),
		// 可选：B 站视频 BV 号，填写后文章顶部显示视频板块
		video: z.string().optional(),
		// 可选：视频自定义封面
		cover: z.string().optional(),
		// 可选：文章标签，用于筛选
		tags: z.array(z.string()).optional(),
	}),
});

// 文章：完整成篇的文章 = src/content/posts/ 下的一个 .md 文件
// 博客模式：按 date 倒序排列
const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		// 发布日期，格式 YYYY-MM-DD
		date: z.coerce.date(),
		// 可选：文章标签
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { kb, posts };
