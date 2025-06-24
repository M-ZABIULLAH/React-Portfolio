import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Zabiullah Mohammadi</h1>
        <p>Concepteur Développeur d'Applications (CDA) | UI Designer</p>
        <p className="location">Valenciennes 59300</p>
      </header>
      <section className="about">
        <h2>À propos de moi</h2>
        <p>En formation Concepteur Développeur d'Applications (CDA), je cherche un stage en développement web ! pour renforcer mes compétences en développement web. Curieux et motivé, je souhaite intégrer une équipe dynamique afin d'acquérir une expérience pratique tout en continuant à apprendre et à m'améliorer.</p>
      </section>
      <section className="experience">
        <h2>Expériences Professionnelles</h2>
        <ul>
          <li>
            <strong>Stagiaire Designer UI</strong> — Keeo, Valenciennes (Jan 2024 – Fév 2024)<br/>
            Création de maquettes et prototypes interactifs pour des projets UI.
          </li>
          <li>
            <strong>Contractuel à la DAFA</strong> — Délégation Archéologique Française en Afghanistan, Kaboul (2015 – 2021)<br/>
            Croquis, documentation et collaboration sur des projets archéologiques.
          </li>
        </ul>
      </section>
      <section className="education">
        <h2>Formations</h2>
        <ul>
          <li><strong>TP Concepteur Développeur d'Application (CDA)</strong> — Simplon, Valenciennes (2025)</li>
          <li><strong>Formation .NET (C# / .NET Core)</strong> — Simplon, Lille (2024–2025)</li>
          <li><strong>Formation CMS (WordPress, Webflow)</strong> — Simplon, Lille (2024)</li>
          <li><strong>TP Concepteur Designer UI</strong> — ADAPECO, Denain (Avr 2023 – Mar 2024)</li>
          <li><strong>Certificat : Photographie du Patrimoine Culturel</strong> — DAFA, Paris (2017)</li>
          <li><strong>Licence des Arts</strong> — Université de Bamyan, Afghanistan (2011–2014)</li>
        </ul>
      </section>
      <section className="skills">
        <h2>Compétences Techniques</h2>
        <ul>
          <li><strong>Langages :</strong> HTML, CSS, JavaScript, C#, SQL</li>
          <li><strong>Frameworks / Librairies :</strong> .NET Core, React (en apprentissage)</li>
          <li><strong>Outils de design :</strong> Figma, Adobe XD, Photoshop, Illustrator</li>
          <li><strong>CMS :</strong> WordPress, Webflow</li>
          <li><strong>Bases de données :</strong> PostgreSQL, MongoDB</li>
          <li><strong>Autres :</strong> Git, GitHub, Docker</li>
          <li><strong>Méthodologie :</strong> Agile (Scrum)</li>
        </ul>
        <h2>Compétences Personnelles</h2>
        <ul>
          <li>Travail en équipe</li>
          <li>Résolution de problèmes</li>
          <li>Créativité</li>
          <li>Apprentissage rapide</li>
          <li>Communication efficace</li>
        </ul>
        <h2>Langues</h2>
        <ul>
          <li>Français : B1</li>
          <li>Anglais : C1</li>
          <li>Dari / Pashto : langue maternelle</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li><strong>Téléphone :</strong> +33 7 53 73 33 68</li>
          <li><strong>Email :</strong> <a href="mailto:zabee_zh111@yahoo.com">zabee_zh111@yahoo.com</a></li>
          <li><strong>LinkedIn :</strong> <a href="https://linkedin.com/in/M-ZABIULLAH" target="_blank" rel="noopener noreferrer">in/M-ZABIULLAH</a></li>
          <li><strong>GitHub :</strong> <a href="https://github.com/M-ZABIULLAH" target="_blank" rel="noopener noreferrer">M-ZABIULLAH</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
