interface Projet {
  /**
   * Les liens des images, dans l'ordre
   */
  images: {
    src: string;
    alt: string;
  }[];

  /**
   * la courte description du projet
   */
  description: string;

  /**
   * Le titre du projet
   */
  titre: string;

  /**
   * La couleur à utiliser sur la page d'accueil
   */
  color: string;

  /**
   * le lien du projet, sans espaces, sans accents, en minuscules et sans slash
   * @example "le-projet-de-toto"
   */
  lien: string;

  /**
   * L'image à mettre sur la page d'accueil, si manquant c'est la première image de la liste "images"
   */
  thumbnail?: string;

  /**
   * les catégories du projet
   */
  tags?: string[];
}

export default Projet;
