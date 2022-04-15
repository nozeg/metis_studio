import type Projet from '$types/projet';

interface ProjetLoad extends Projet {
  slug: string;
}
export const loadAllProjects = async (): Promise<ProjetLoad[]> => {
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

export const loadProjet = async (projectName: string): Promise<ProjetLoad | null> => {
  console.log({ projectName });
  const projects = await loadAllProjects();
  const project = projects.find(({ lien }) => lien === projectName);
  return project ?? null;
};

// export const loadProjet = async (name: string): Promise<Projet> => {
//   const { default: projet } = await import(`../projets/${name}.ts`);
//   return projet;
// };
