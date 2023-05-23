<div class="boite-choix-fin texte-centre">
  <div class="deux-colonnes-fin nav">
    <div class="petit-titre trait nav-conteneur">
      <a class="souligne" href="/indexurbanisme">Ecrivez-nous</a>
    </div>
    <div class="nav-conteneur petit-titre texte-aligne-droite">
      <a class="souligne" href="/indexillustration">PROJETS</a>
    </div>
    <div class="nav-conteneur petit-titre texte-aligne-droite">
      <a class="souligne" href="/about3">A PROPOS</a>
    </div>
    <div class="nav-conteneur petit-titre texte-aligne-droite">
      <a class="souligne" href="/outils">OUTILS</a>
    </div>
    <div class="nav-conteneur petit-titre texte-aligne-droite">
      <a class="souligne" href="/contact">CONTACT</a>
    </div>
  </div>
</div>

<div class="footer deux-colonnes petit-titre-fin">
  <div>nour.metis.studio@gmail.com</div>
  <div class="texte-aligne-droite">
    <div>© métis studio 2023</div>
  </div>
</div>

<style>
  .deux-colonnes {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
  .nav-conteneur {
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .nav {
    padding-left: 4em;
    padding-right: 4em;
  }

  .petit-titre {
    font-family: SuisseIntl-Book;
    color: #0bac81;
    line-height: 1em;
    display: block;
    font-size: 1em;
    font-weight: 50;

    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-decoration: none;
  }

  .petit-titre-fin {
    font-family: SuisseIntl-Book;
    color: #fff;
    line-height: 1em;
    font-size: 1em;
    font-weight: 50;
    padding-left: 4em;
    padding-right: 4em;
  }

  .boite-choix-fin {
    border-top: 0.05em solid #0bac81;
    border-bottom: 0.05em solid #0bac81;
    width: auto;
  }

  .trait {
    border-right: 0.05em solid #0bac81;
  }

  .deux-colonnes-fin {
    display: grid;
    grid-template-columns: 33.33% 16.665% 16.665% 16.665% 16.665%;
  }

  .texte-centre {
    justify-self: center;
  }

  .texte-aligne-droite {
    justify-self: right;
  }

  .footer {
    padding-top: 8em !important;
    padding-bottom: 4em !important;
    background-color: #0bac81;
  }

  .souligne {
    position: relative;
    text-decoration: none;
    white-space: nowrap;
  }

  .souligne::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: #0bac81;
    bottom: -0.5em;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .souligne:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
</style>
