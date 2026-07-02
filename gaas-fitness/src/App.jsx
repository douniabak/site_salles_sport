import './App.css';
const plans=[['Starter','5,99 $','Pour s’entraîner à la maison avec un accompagnement simple et accessible.',['Programmes d’entraînement maison','Cours vidéo à la demande','Défis communautaires','Suivi d’activité de base','Accumulation de crédits']],['Local','10,99 $','Pour accéder à une salle partenaire locale et garder une routine régulière.',['Tout ce qui est inclus dans Starter','Accès à une salle partenaire locale','Cours collectifs sélectionnés','Coach IA de base','Suivi de progression','Crédits récompenses']],['Plus','15,99 $','Le meilleur équilibre entre accès aux salles, coaching intelligent et services numériques.',['Tout ce qui est inclus dans Local','Accès à plusieurs salles partenaires','Cours en direct','Coach IA personnalisé','Suggestions selon l’achalandage','Réductions sur services bien-être','Crédits bonifiés']],['Global','22,99 $','Pour les personnes qui voyagent, travaillent dans plusieurs villes ou veulent une flexibilité maximale.',['Tout ce qui est inclus dans Plus','Accès multi-villes','Accès à certaines salles premium','IA avancée','Location d’équipement à tarif réduit','Crédits mensuels bonus','Priorité sur certains cours']]];
const modules=[['Nutrition','+4,99 $ / 2 semaines'],['Yoga & mobilité','+2,99 $ / 2 semaines'],['IA Premium','+3,99 $ / 2 semaines'],['Cross-training','+4,99 $ / 2 semaines'],['Physiothérapie virtuelle','+6,99 $ / 2 semaines'],['Récupération','Paiement à l’utilisation ou crédits'],['Location d’équipement','Paiement à l’utilisation ou crédits'],['Accès salle premium','Selon disponibilité ou crédits']];
const services=[
  ['/images/training-home.jpg','Entraînement à domicile','Suivez des séances adaptées sans vous déplacer, avec ou sans équipement.','⌂','#entrainement-domicile'],
  ['/images/group-class.jpg','Cours collectifs','Participez à des cours de cardio, mobilité, renforcement, yoga ou entraînement fonctionnel.','◎','#cours-collectifs'],
  ['/images/coach-ai.png','Coach IA','Recevez des recommandations adaptées à vos objectifs, votre fatigue, votre progression et vos disponibilités.','✦','#coach-ia'],
  ['/images/wellness.jpg','Bien-être et récupération','Utilisez vos crédits pour accéder à des services comme sauna, massage, physiothérapie ou récupération.','◌','#bien-etre'],
  [null,'Salles partenaires','Accédez à des salles sélectionnées selon votre forfait, votre ville et vos besoins.','⌖','#salles'],
  [null,'Crédits récompenses','Gagnez des crédits en restant actif et échangez-les contre des services utiles.','★','#credits']
];
const gyms=[['World Gym','Montréal, QC','0,6 km','Faible',['Cardio','Musculation','Poids libres','Cours collectifs'],['Local','Plus','Global']],['Econofitness','Laval, QC','12,4 km','Modéré',['Cardio','Machines guidées','Cours collectifs','Mobilité'],['Local','Plus','Global']],['Fit form ','Québec, QC','18,7 km','Élevé',['Musculation','Sauna','Coach privé','Récupération'],['Plus','Global']],['Fit Network Toronto','Toronto, ON','3,1 km','Faible',['Cardio','Musculation','Cours en direct','Fonctionnel'],['Global']],['basic-fit','Paris, France','1,8 km','Modéré',['Cardio','Poids libres','Machines guidées','Salle premium'],['Global']]];
const earns=[['Séance complétée','Terminez une séance d’entraînement en salle, à domicile ou en ligne.','+20 crédits'],['Objectif hebdomadaire atteint','Respectez votre programme pendant une semaine complète.','+50 crédits'],['Défi communautaire','Participez à un défi collectif proposé par la plateforme.','+30 à 100 crédits'],['Invitation d’un ami','Invitez une personne qui rejoint GaaS Fitness.','+50 crédits']];
const rewards=[['Sauna','80 crédits','Accès à une séance de récupération dans une salle partenaire.'],['Produit santé','100 crédits','Utilisez vos crédits dans la boutique santé GaaS.'],['Cours privé','200 crédits','Réservez une séance avec un coach humain partenaire.'],['Massage récupération','250 crédits','Accédez à un service de récupération musculaire.'],['Physiothérapie virtuelle','350 crédits','Obtenez un accompagnement professionnel à distance.']];
const faqs=[['Est-ce que GaaS Fitness est une vraie salle de sport ?','GaaS Fitness est une plateforme d’abonnement. Elle ne repose pas uniquement sur ses propres salles, mais sur un réseau de partenaires, des services numériques et des services bien-être.'],['Puis-je utiliser plusieurs salles avec le même abonnement ?','Oui, selon le forfait choisi. Les forfaits Plus et Global donnent accès à un réseau plus large de salles partenaires.'],['Puis-je modifier mon abonnement ?','Oui. Le modèle est modulable : certains services peuvent être ajoutés ou retirés selon les besoins de l’utilisateur.'],['Les crédits remplacent-ils l’argent ?','Non. Les crédits sont un système de récompense interne. Ils permettent d’accéder à certains services ou avantages dans l’écosystème GaaS.'],['Le coach IA remplace-t-il un entraîneur humain ?','Non. Le coach IA accompagne l’utilisateur au quotidien, mais un coach humain peut être réservé lorsque l’utilisateur a besoin d’un suivi plus spécifique.'],['Est-ce que je peux m’entraîner sans aller en salle ?','Oui. Le forfait Starter permet déjà de suivre des entraînements à domicile et des cours vidéo.'],['Est-ce que les salles affichées sont réelles ?','Dans cette démonstration, les salles sont fictives. Elles servent à illustrer le fonctionnement du modèle GaaS Fitness.']];function Logo({light=false}){return <a href="#accueil" className={`logo ${light?'light':''}`}>
<i>G</i>
<b>GaaS</b> <em>Fitness</em>
</a>}
function Heading({tag,title,text,left=false}){return <div className={`heading ${left?'left':''}`}>
<span className="eyebrow">{tag}</span>
<h2>{title}</h2>{text&&<p>{text}</p>}</div>}
function Checks({items}){return <ul className="checks">{items.map(x=>
<li key={x}>{x}</li>)}</ul>}
function App(){return <>
<header>
<div className="container nav">
<Logo/>
<nav>{[['accueil','Accueil'],['abonnements','Abonnements'],['services','Services'],['salles','Salles partenaires'],['credits','Crédits'],['entreprises','Entreprises'],['faq','FAQ']].map(x=>
<a href={`#${x[0]}`} key={x[0]}>{x[1]}</a>)}</nav>
<a className="btn small" href="#abonnements">Je m’abonne</a>
</div>
</header>
<main>

<section id="accueil" className="hero">
<div className="container hero-grid">
<div className="hero-copy">
<span className="eyebrow">Nouveau modèle de remise en forme</span>
<h1>Un seul abonnement pour <span>s’entraîner partout.</span>
</h1>
<p className="lead">GaaS Fitness combine salles partenaires, entraînement à domicile, cours en ligne, coach IA et récompenses bien-être dans une seule plateforme flexible.</p>
<p>Choisissez votre forfait, entraînez-vous où vous voulez et utilisez vos crédits pour accéder à des services santé, récupération et bien-être.</p>
<div className="actions">
<a className="btn" href="#abonnements">Voir les abonnements →</a>
<a className="btn outline" href="#salles">Trouver une salle partenaire</a>
</div>
<ul className="quick">
<li>Accès aux salles partenaires</li>
<li>Entraînement maison</li>
<li>Coach IA personnalisé</li>
<li>Crédits récompenses</li>
</ul>
</div>
<div className="hero-visual">
<img src="/images/hero-gym.jpg" alt="Athlète dans une salle de sport moderne"/>
<div className="float">
<i>↗</i>
<div>
<b>Plus de liberté</b>
<p>Salle, maison ou voyage : votre entraînement vous suit.</p>
</div>
</div>
<span className="rating">
<b>4,9/5</b> Expérience membre</span>
</div>
</div>
</section>

<section className="section difference commercial-difference">
  <div className="container">
    <Heading
      tag="Pourquoi choisir GaaS Fitness ?"
      title="Votre entraînement vous suit, pas l’inverse."
      text="Un abonnement flexible pensé pour les personnes qui veulent garder une routine sportive, même lorsque leur horaire, leur ville ou leurs besoins changent."
    />

    <div className="commercial-grid">
      <article>
        <span>01</span>
        <h3>Entraînez-vous où vous voulez</h3>
        <p>
          Accédez à des salles partenaires, suivez des séances à domicile ou
          participez à des cours en ligne selon votre emploi du temps.
        </p>
      </article>

      <article className="highlight">
        <span>02</span>
        <h3>Construisez votre forfait</h3>
        <p>
          Choisissez une base simple, puis ajoutez seulement les services qui
          vous intéressent : nutrition, mobilité, IA Premium, récupération ou
          accès multi-villes.
        </p>
      </article>

      <article>
        <span>03</span>
        <h3>Gagnez des avantages</h3>
        <p>
          Cumulez des crédits grâce à votre activité physique et utilisez-les
          pour accéder à des services bien-être comme le sauna, les massages,
          les cours privés ou la physiothérapie virtuelle.
        </p>
      </article>
    </div>

    <div className="commercial-banner">
      <div>
        <span className="eyebrow">L’idée GaaS</span>
        <h3>Un seul abonnement. Plusieurs façons de bouger.</h3>
        <p>
          GaaS Fitness ne vous limite pas à une seule salle. La plateforme
          regroupe l’accès aux gyms partenaires, l’entraînement maison, le
          coaching intelligent et les récompenses dans une offre simple et
          modulable.
        </p>
      </div>

      <div className="commercial-actions">
        <a className="btn" href="#abonnements">
          Comparer les forfaits
        </a>
        <a className="btn outline" href="#salles">
          Voir les salles partenaires
        </a>
      </div>
    </div>
  </div>
</section>

<section id="abonnements" className="section plans">
<div className="container">
<Heading tag="Nos abonnements" title="Choisissez l’abonnement qui correspond à votre rythme." text="Des forfaits simples, abordables et modulables."/>
<div className="plans-grid">{plans.map(([name,price,desc,features])=>
<article className={`plan ${name==='Plus'?'popular':''}`} key={name}>{name==='Plus'&&<span className="popular-badge">Le plus populaire</span>}<h3>{name}</h3>
<p>{desc}</p>
<div className="price">
<b>{price}</b>
<span>aux 2 semaines</span>
</div>
<Checks items={features}/>
<button className={`btn ${name==='Plus'?'':'dark'}`}>Choisir {name}</button>
</article>)}</div>
<article className="modules">
<div>
<span className="eyebrow">Modules additionnels</span>
<h3>Personnalisez votre abonnement</h3>
<p>Ajoutez uniquement les services dont vous avez besoin.</p>
</div>

<section>{modules.map(([name,price])=>
<div key={name}>
<i>+</i>
<p>
<b>{name}</b>
<small>{price}</small>
</p>
</div>)}</section>

</article>
</div>
</section>

<section id="services" className="section services">
<div className="container">
<Heading tag="Services inclus" title="Tout ce dont vous avez besoin dans un seul écosystème." text="GaaS Fitness regroupe les services essentiels pour soutenir l’activité physique, la progression et la récupération."/>
<div className="services-grid">{services.map(([img,title,text,icon,href])=>
<article className={!img?'no-image':''} key={title}>{img?<div className="service-img">
<img src={img} alt={title}/>
<i>{icon}</i>
</div>:<i className="big-icon">{icon}</i>}<div>
<h3>{title}</h3>
<p>{text}</p>
<a href={href}>Découvrir →</a>
</div>
</article>)}</div>
</div>
</section>

<section id="entrainement-domicile" className="section feature-detail feature-home">
<div className="container">
<div className="feature-detail-grid">
<div className="feature-detail-copy">
<span className="eyebrow">ENTRAÎNEMENT À DOMICILE</span>
<h2>Gardez votre routine, même sans aller en salle.</h2>
<p>GaaS Fitness permet de suivre des séances guidées depuis la maison, en voyage ou lors des journées où il est difficile de se déplacer. L’objectif est de maintenir la régularité, même lorsque l’accès à une salle n’est pas possible.</p>
<div className="feature-cards">
<article className="feature-card"><h3>Séances sans équipement</h3><p>Des programmes courts et accessibles, adaptés aux petits espaces.</p></article>
<article className="feature-card"><h3>Programmes avec matériel</h3><p>Des séances compatibles avec haltères, élastiques, tapis ou équipements personnels.</p></article>
<article className="feature-card"><h3>Vidéos à la demande</h3><p>L’utilisateur peut s’entraîner au moment qui lui convient.</p></article>
<article className="feature-card"><h3>Continuité du programme</h3><p>Les séances maison complètent les entraînements en salle sans casser la progression.</p></article>
</div>
<a className="btn" href="#abonnements">Voir les abonnements</a>
</div>
<div className="feature-detail-media"><img src="/images/training-home.jpg" alt="Entraînement guidé à domicile avec GaaS Fitness"/></div>
</div>
</div>
</section>

<section id="cours-collectifs" className="section feature-detail feature-classes alt">
<div className="container">
<div className="feature-detail-grid">
<div className="feature-detail-media"><img src="/images/group-class.jpg" alt="Cours collectif avec GaaS Fitness"/></div>
<div className="feature-detail-copy">
<span className="eyebrow">COURS COLLECTIFS</span>
<h2>Des cours pour rester motivé et progresser en groupe.</h2>
<p>Les cours collectifs permettent d’ajouter une dimension sociale à l’entraînement. Ils peuvent être suivis en salle partenaire ou en direct selon le forfait choisi.</p>
<div className="feature-cards">
<article className="feature-card"><h3>HIIT</h3><p>Séances courtes et intenses pour travailler le cardio.</p></article>
<article className="feature-card"><h3>Yoga & mobilité</h3><p>Amélioration de la souplesse, de la posture et de la récupération.</p></article>
<article className="feature-card"><h3>Renforcement musculaire</h3><p>Exercices guidés pour progresser en sécurité.</p></article>
<article className="feature-card"><h3>Cardio</h3><p>Cours dynamiques pour améliorer l’endurance.</p></article>
<article className="feature-card"><h3>Fonctionnel</h3><p>Mouvements proches des gestes du quotidien.</p></article>
<article className="feature-card"><h3>Cours en direct</h3><p>Séances accessibles à distance depuis la plateforme.</p></article>
</div>
<aside className="feature-panel"><h3>Une expérience plus flexible</h3><p>L’utilisateur peut choisir entre un cours en salle, un cours en ligne ou une séance enregistrée selon son horaire.</p></aside>
</div>
</div>
</div>
</section>

<section id="salles" className="section gyms">
<div className="container">
<Heading tag="Notre réseau" title="Trouvez une salle partenaire près de vous." text="Recherchez une salle selon votre ville, votre forfait, les équipements disponibles et le niveau d’achalandage."/>
<div className="search">
<label>⌕<input placeholder="Ville, quartier ou code postal" aria-label="Rechercher une salle"/>
</label>
<button className="btn">Rechercher</button>
</div>
<div className="filters">{['Ouvert maintenant','Faible achalandage','Cours disponibles','Salle premium'].map(x=>
<button key={x}>{x}</button>)}</div>
<div className="gym-layout">
<div className="gym-grid">{gyms.map(([name,city,distance,traffic,equipment,access])=>
<article className="gym-card" key={name}>
<div className="gym-head">
<i>⌖</i>
<div>
<h3>{name}</h3>
<p>{city} · <b>{distance}</b>
</p>
</div>
<span className={traffic}>{traffic}</span>
</div>
<small>ÉQUIPEMENTS</small>
<div className="tags">{equipment.map(x=>
<span key={x}>{x}</span>)}</div>
<footer>
<div>
<small>Accessible avec</small>
<p>{access.map(x=>
<b key={x}>{x}</b>)}</p>
</div>
<button>Voir cette salle →</button>
</footer>
</article>)}</div>
<aside className="travel">
<i>◎</i>
<h3>Un abonnement qui vous suit</h3>
<p>Que vous soyez à Montréal, Québec, Toronto ou en voyage, GaaS Fitness vous aide à maintenir votre routine grâce à un réseau de partenaires.</p>
<div>
<span>Montréal</span>
<hr/>
<span>Paris</span>
</div>
</aside>
</div>
</div>
</section>

<section id="coach-ia" className="section ai">
<div className="container ai-grid">
<div className="ai-img">
<img src="/images/coach-ai.png" alt="Coach IA GaaS Fitness"/>
<span>
<i>✦</i>
<small>Analyse en cours<b>Programme adapté</b>
</small>
</span>
</div>
<div>
<Heading left tag="Coaching intelligent" title="Un coach IA qui adapte votre entraînement." text="Le programme ne reste pas fixe : il s’ajuste selon votre rythme, votre fatigue, vos objectifs et votre historique d’entraînement."/>
<article className="recommend">
<small>EXEMPLE DE RECOMMANDATION</small>
<h3>Recommandation du jour <i>↻</i>
</h3>
<p>Votre niveau de récupération semble plus faible aujourd’hui. La séance intense prévue est remplacée par <b>35 minutes de cardio léger</b> et <b>15 minutes de mobilité.</b>
</p>
<h4>Pourquoi cette adaptation ?</h4>
<Checks items={['Sommeil plus court que d’habitude','Fatigue élevée','Progression à maintenir sans surcharge','Objectif : rester régulier tout en réduisant le risque de blessure']}/>
<div className="stats">
<p>
<small>Objectif</small>
<b>Remise en forme</b>
</p>
<p>
<small>Niveau</small>
<b>Intermédiaire</b>
</p>
<p>
<small>Séances/semaine</small>
<b>4</b>
</p>
<p>
<small>Intensité du jour</small>
<b>Faible</b>
</p>
</div>
</article>
</div>
</div>
</section>

<section id="bien-etre" className="section feature-detail feature-wellness">
<div className="container">
<div className="feature-detail-grid">
<div className="feature-detail-copy">
<span className="eyebrow">BIEN-ÊTRE ET RÉCUPÉRATION</span>
<h2>La remise en forme ne s’arrête pas à l’entraînement.</h2>
<p>GaaS Fitness intègre des services complémentaires pour accompagner la récupération, prévenir les blessures et soutenir les habitudes de vie. Ces services peuvent être inclus selon le forfait, ajoutés en module ou obtenus avec les crédits récompenses.</p>
<div className="feature-cards">
<article className="feature-card"><h3>Sauna</h3><p>Favorise la détente et la récupération après l’effort.</p></article>
<article className="feature-card"><h3>Massage récupération</h3><p>Aide à réduire les tensions musculaires et à améliorer le confort.</p></article>
<article className="feature-card"><h3>Physiothérapie virtuelle</h3><p>Permet d’adapter l’entraînement en cas de douleur ou de limitation.</p></article>
<article className="feature-card"><h3>Nutrition</h3><p>Ajoute un accompagnement alimentaire selon les objectifs de l’utilisateur.</p></article>
<article className="feature-card"><h3>Boutique santé</h3><p>Produits liés à la récupération, à l’hydratation et au bien-être.</p></article>
<article className="feature-card"><h3>Crédits bien-être</h3><p>Les crédits gagnés avec l’activité physique peuvent être utilisés pour accéder à certains services.</p></article>
</div>
</div>
<div>
<div className="feature-detail-media"><img src="/images/wellness.jpg" alt="Services de bien-être et de récupération GaaS Fitness"/></div>
<aside className="feature-panel"><h3>Plus qu’un abonnement de gym</h3><p>L’utilisateur ne paie pas seulement pour s’entraîner. Il accède à un écosystème qui l’aide à bouger, récupérer et rester motivé.</p><a className="btn" href="#credits">Voir les crédits</a></aside>
</div>
</div>
</div>
</section>

<section id="credits" className="section credits">
<div className="container">
<Heading tag="Crédits & récompenses" title="Bougez. Gagnez. Récompensez-vous." text="Avec GaaS Fitness, l’activité physique génère des crédits utilisables dans l’écosystème bien-être."/>
<article className="balance">
<div>
<small>Solde exemple</small>
<b>240 <span>crédits</span>
</b>
<p>Les crédits peuvent être utilisés pour des services bien-être, des cours privés ou des avantages premium.</p>
</div>
<div className="coins">
<i>G</i>
<i>G</i>
<i>G</i>
</div>
</article>
<h3 className="sub-title">Comment gagner des crédits ?</h3>
<div className="earn-grid">{earns.map(([title,text,gain],i)=>
<article key={title}>
<i>{['✓','↗','♢','+'][i]}</i>
<h3>{title}</h3>
<p>{text}</p>
<b>{gain}</b>
</article>)}</div>
<div className="reward-title">
<div>
<span className="eyebrow">Catalogue d’avantages</span>
<h3>Utiliser mes crédits</h3>
</div>
<p>Transformez vos efforts en expériences qui soutiennent votre bien-être.</p>
</div>
<div className="rewards">{rewards.map(([title,cost,text],i)=>
<article key={title}>
<div>
<i>{['♨','✚','◇','≈','＋'][i]}</i>
<b>{cost}</b>
</div>
<h3>{title}</h3>
<p>{text}</p>
<button>Échanger</button>
</article>)}</div>
<p className="credit-note">Plus l’utilisateur reste actif, plus il peut accéder à des services qui renforcent sa santé, sa motivation et sa fidélité à la plateforme.</p>
</div>
</section>

<section id="entreprises" className="section corporate">
<div className="container corporate-grid">
<div>
<span className="eyebrow">GaaS pour les organisations</span>
<h2>Une solution bien-être pour les entreprises.</h2>
<p>GaaS Fitness peut aussi être proposé aux organisations qui souhaitent encourager l’activité physique et le bien-être de leurs employés.</p>
<blockquote>« L’entreprise ne finance pas seulement un abonnement de gym : elle donne accès à un écosystème complet de bien-être. »</blockquote>
</div>
<article>
<div className="corp-head">
<i>G</i>
<p>
<small>OFFRE ENTREPRISE</small>
<b>GaaS Corporate</b>
</p>
</div>
<div className="corp-price">
<span>À partir de</span>
<b>29,99 $ <small>/ employé / mois</small>
</b>
</div>
<Checks items={['Abonnements flexibles pour les employés','Accès multi-villes','Défis d’équipe','Services santé et récupération','Suivi global anonymisé','Meilleure accessibilité pour les équipes hybrides','Réduction de la sédentarité']}/>
<button className="btn">Demander une offre entreprise →</button>
</article>
</div>
</section>

<section id="faq" className="section faq">
<div className="container">
<Heading tag="Besoin d’aide ?" title="Questions fréquentes" text="Tout ce qu’il faut savoir pour comprendre le fonctionnement de GaaS Fitness."/>
<div className="faq-grid">{faqs.map(([q,a])=>
<details key={q}>
<summary>{q}<i>+</i>
</summary>
<p>{a}</p>
</details>)}</div>
</div>
</section>

<section className="final-cta">
<div className="container">
<div>
<span className="eyebrow">Prêt à bouger autrement ?</span>
<h2>Votre entraînement. Votre rythme. Partout.</h2>
<p>Découvrez un abonnement qui s’adapte à votre vie, et non l’inverse.</p>
</div>
<a className="btn white" href="#abonnements">Voir les abonnements →</a>
</div>
</section>

</main>
<footer className="site-footer">
<div className="container footer-grid">
<div className="footer-brand">
<Logo light/>
<p>Une plateforme fictive de Gym-as-a-Service conçue pour illustrer un nouveau modèle d’affaires dans le secteur des salles de sport et du bien-être.</p>
</div>
<div>
<h3>Plateforme</h3>
<a href="#abonnements">Abonnements</a>
<a href="#services">Services</a>
<a href="#salles">Salles partenaires</a>
<a href="#credits">Crédits</a>
</div>
<div>
<h3>Offres</h3>
<a href="#abonnements">Starter</a>
<a href="#abonnements">Local</a>
<a href="#abonnements">Plus</a>
<a href="#abonnements">Global</a>
<a href="#entreprises">Corporate</a>
</div>
<div>
<h3>Informations</h3>
<a href="#faq">FAQ</a>
<a href="#accueil">À propos du concept</a>
<a href="mailto:bonjour@gaas-fitness.example">Contact fictif</a>
</div>
</div>
<div className="container footer-bottom">
<span>© Dounia BAKALEM, Yasmine ZAHER, Gabriel DUBASOUF, Adam GOUGOU, Juan Felipe MESA FERREIRA, Michael-Anthony MORRONI, Grigor PELIBOSSIAN, Yanis SADOUN.</span>
<span>Fait au Québec · Concept fictif</span>
</div>
</footer>
</>}export default App
