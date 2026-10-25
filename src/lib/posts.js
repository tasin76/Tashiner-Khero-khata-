const all = import.meta.glob('../content/posts/*.md', { eager: true });
export const posts = Object.values(all)
  .map((p) => ({
    ...p.frontmatter,
    slug: p.file.split('/').pop().replace(/\.md$/, ''),
    Content: p.Content,
    date: new Date(p.frontmatter.date),
  }))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date - a.date);
export const fmt = (d) => d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
