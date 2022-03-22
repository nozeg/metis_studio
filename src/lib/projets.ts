import type Projet from '$types/projet';

export const loadProjet = async (name: string): Promise<Projet> => {
  const { default: projet } = await import(`../projets/${name}.ts`);
  return projet;
};

export const loadAllProjects = async (): Promise<Projet[]> => {
  const projects = await Promise.all(
    Object.entries(import.meta.glob(`../projets/*.ts`)).map(async ([path, page]) => {
      const { default: projet } = await page();
      let slug = path.split('/').pop().split('.').shift();
      // Sends the page to the proper preview URL when in dev
      if (path.includes('_posts/drafts/')) {
        slug = 'preview/' + slug;
      }
      return { ...projet, slug };
    })
  );
  return projects;
};
