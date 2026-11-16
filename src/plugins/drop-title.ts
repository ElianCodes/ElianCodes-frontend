/**
 * Sätteri (Astro's Markdown processor) mdast plugin. Articles open with "# Title", but the
 * page already renders the title in its own <h1>. Drop that first heading at build time so
 * every article has exactly one <h1>.
 */
interface HeadingNode {
	type: "heading";
	depth: number;
}

interface VisitorContext {
	parent(node: HeadingNode): { type: string } | undefined;
	indexOf(node: HeadingNode): number | undefined;
	removeNode(node: HeadingNode): void;
}

export const dropTitle = {
	name: "drop-title",
	heading(node: HeadingNode, ctx: VisitorContext) {
		if (node.depth === 1 && ctx.parent(node)?.type === "root" && ctx.indexOf(node) === 0) {
			ctx.removeNode(node);
		}
	},
};
