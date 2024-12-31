import type { Component } from 'svelte';
export type Categories = 'sveltekit' | 'svelte';

export interface Metadata {
	title: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
}

export interface Post extends Metadata {
	slug: string;
}

export interface MarkdownFile {
	metadata: Metadata;
	default: Component;
}
