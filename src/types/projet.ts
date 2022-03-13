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
   * L'image à mettre sur la page d'accueil, si manquant c'est la première image de la liste "images"
   */
  thumbnail?: string;
  /**
   * les catégories du projet
   */
  tags?: string[];
}

export default Projet;
