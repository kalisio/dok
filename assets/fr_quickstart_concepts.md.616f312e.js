import{_ as u}from"./chunks/user-organisations.59258d8f.js";import{_ as l,C as r,o as c,c as p,k as t,a as s,H as e,w as i,Q as n}from"./chunks/framework.ed94e6a8.js";const d="/dok/assets/LaunchTour-FR.979488bb.png",m="/dok/assets/Tour-FR.f42be179.png",g="/dok/assets/Account-FR.78a6b394.png",h="/dok/assets/structure-FR.83f3751b.png",J=JSON.parse('{"title":"Concepts de base","description":"","frontmatter":{"sidebarDepth":3},"headers":[],"relativePath":"fr/quickstart/concepts.md","filePath":"fr/quickstart/concepts.md"}'),_={name:"fr/quickstart/concepts.md"},v=n('<h1 id="concepts-de-base" tabindex="-1">Concepts de base <a class="header-anchor" href="#concepts-de-base" aria-label="Permalink to &quot;Concepts de base&quot;">​</a></h1><p>Nous allons illustrer ici les <em>concepts de base</em> vous permettant de prendre en main Kalisio Crisis.</p><p>Cette présentation s&#39;accompagne parfois de petits <em>didacticiels</em> qui peuvent être exécutés directement sur l&#39;application. Aussi il vous sera nécessaire de suivre tout d&#39;abord les étapes vous permettant de créer un compte sur l&#39;application puis de vous y connecter pour que cela fonctionne correctement.</p><p>Un lien peut vous permettre d&#39;exécuter directement un didacticiel depuis la documentation, sinon rendez-vous sur l&#39;application à l&#39;endroit adéquat puis activez le didacticiel en cliquant sur l&#39;icone <a href=""><i class="las la-question-circle"></i></a> dans le menu principal.</p><p><img src="'+d+'" alt="launch-tour"></p><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>Pour ouvrir le menu principal utilisez la poignée apparaissant sur le côté gauche de l&#39;écran.</p></div><p>Vous pourrez ensuite suivre les instructions pas à pas <a href=""><i class="las la-chevron-right"></i></a> (ou touche <i class="las la-arrow-right"></i> du clavier) ou revenir en arrière <a href=""><i class="las la-chevron-left"></i></a> (ou touche <i class="las la-arrow-left"></i> du clavier) et stopper à tout instant <a href=""><i class="las la-times"></i></a> (ou touche <em>echap</em> du clavier) comme illustré sur la figure suivante:</p><p><img src="'+m+'" alt="tour"></p><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>Lorsque vous voyez un label <em>beta</em> sur un élément de l&#39;interface utilisateur (par exemple sur un bouton), cela signifie que la fonctionnalité est actuellement en <em>bêta test</em>. C&#39;est à dire qu&#39;il s&#39;agit d&#39;une première version et qu&#39;en vue de son amélioration nous recueillons les commentaires et suggestions de nos utilisateurs.</p></div><div class="warning custom-block"><p class="custom-block-title">Attention</p><p>Kalisio Crisis s&#39;améliore et évolue de façon continue. Aussi, ce qui s’affiche sur votre écran peut parfois différer de ce que vous lirez et verrez dans cette documentation, mais les concepts clés restent les mêmes.</p></div><h2 id="activite" tabindex="-1">Activité <a class="header-anchor" href="#activite" aria-label="Permalink to &quot;Activité&quot;">​</a></h2><p>Au sein de l&#39;application les actions visant à réaliser une tâche spécifique, comme la gestion des <a href="./concepts.html#role">membres</a> de son <a href="./concepts.html#organisation">organisation</a> ou de son <a href="./../gofurther/catalog.html">catalogue cartographique</a>, sont regroupées sur un même écran présentant une interface utilisateur adaptée et nommée <strong>activité</strong>. Lorsque plusieurs écrans sont nécessaires compte tenu du nombre d&#39;actions possibles, ils sont affichés sous la forme d&#39;<strong>onglets</strong>. La sélection d&#39;un onglet permet de basculer sur l&#39;écran ad-hoc.</p><p>Par exemple, tout ce qui a trait à votre compte et à sa sécurité est centralisé dans une activité de gestion composée de trois écrans comme illustré sur la figure suivante:</p><p><img src="'+g+'" alt="account"></p>',14),b=t("strong",null,"barre d'application",-1),f=n('<h2 id="utilisateur" tabindex="-1"><i class="las la-user"></i> Utilisateur <a class="header-anchor" href="#utilisateur" aria-label="Permalink to &quot;&lt;i class=&quot;las la-user&quot;&gt;&lt;/i&gt; Utilisateur&quot;">​</a></h2><p>Une <em>personne</em> qui est <strong>enregistrée</strong> sur Kalisio Crisis. Cela peut se faire de deux manières:</p><ul><li>soit en créant elle-même son <strong>compte</strong> sur l&#39;application,</li><li>soit en étant <em>invitée</em> au sein d&#39;une organisation par un autre utilisateur de l&#39;application.</li></ul>',3),q={class:"details custom-block"},T=t("summary",null,"Voir aussi",-1),k=n('<h2 id="organisation" tabindex="-1"><i class="las la-user-friends"></i> Organisation <a class="header-anchor" href="#organisation" aria-label="Permalink to &quot;&lt;i class=&quot;las la-user-friends&quot;&gt;&lt;/i&gt; Organisation&quot;">​</a></h2><p>Un <em>espace partagé</em> par plusieurs utilisateurs au sein duquel vous pouvez inviter des personnes à collaborer, notamment pour gérer des <strong>évènements</strong>. Un utilisateur peut appartenir à <em>plusieurs</em> organisations et peut également <strong>créer</strong> de nouvelles organisations.</p><p>Un <em>tableau de bord</em> synthétise les événements en cours au sein de ses différentes organisations sur la page d&#39;acceuil. Toutes les activités relatives à la configuration des organisations sont également accessibles depuis ce tableau de bord. En sélectionnant une activité cible sur une organisation vous en faite votre <em>contexte</em> ou espace de travail courant.</p>',3),x=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"Astuce"),t("p",null,"Lorsque vous n'appartennez qu'à une seule organisation vous rentrerez directement dans son contexte lors de la connexion.")],-1),V={class:"details custom-block"},A=t("summary",null,"Voir aussi",-1),C=n('<p>Selon les organisations, un utilisateur possède des <em>rôles différents</em> et ne dispose donc pas des même fonctionnalités. La figure suivante illustre un exemple où:</p><ul><li>un utilisateur appartient à plusieurs organisations (1, 2 et 3),</li><li>un utilisateur gère plusieurs organisations (2),</li><li>une organisation possède plusieurs groupes (3),</li><li>un membre d&#39;une organisation appartient à plusieurs groupes (3).</li></ul><p><img src="'+u+'" alt="user-organisations"></p><h3 id="role" tabindex="-1"><i class="las la-graduation-cap"></i> Rôle <a class="header-anchor" href="#role" aria-label="Permalink to &quot;&lt;i class=&quot;las la-graduation-cap&quot;&gt;&lt;/i&gt; Rôle&quot;">​</a></h3><p>Un <strong>rôle</strong> défini les droits d&#39;un utilisateur au sein d&#39;une organisation ou d&#39;un groupe:</p><ul><li>en tant que <i class="las la-user"></i> <em>membre</em> il ne peut pas modifier l&#39;état de l&#39;organisation ou du groupe (droit de consultation),</li><li>en tant que <i class="las la-briefcase"></i> <em>gestionnaire</em> il peut modifier l&#39;état de l&#39;organisation ou du groupe (droit d&#39;édition),</li><li>en tant que <i class="las la-certificate"></i> <em>propriétaire</em> il peut supprimer l&#39;organisation ou le groupe (contrôle total).</li></ul><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>Les droits sont cumulatifs, c&#39;est à dire qu&#39;un propriétaire (respectivement gestionnaire) possède tous les droits d&#39;un gestionnaire (respectivement membre).</p></div><p>Le gestionnaire d&#39;une organisation peut donc:</p><ul><li>gérer les <strong>membres</strong> au sein de cette organisation (ajout, suppression),</li><li>gérer les <strong>groupes</strong> au sein de cette organisation (création, mise à jour, ajout et suppression des membres, destruction).</li></ul><p>Le propriétaire peut également détruire l&#39;organisation et gérer les moyens de paiements.</p><p>Le gestionnaire d&#39;un groupe peut gérer les <strong>membres</strong> au sein de ce groupe.</p><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>L&#39;utilisateur qui créé une organisation en est par défaut le propriétaire mais il peut partager ou déléguer la gestion à d&#39;autres.</p></div><h3 id="groupe" tabindex="-1"><i class="las la-sitemap"></i> Groupe <a class="header-anchor" href="#groupe" aria-label="Permalink to &quot;&lt;i class=&quot;las la-sitemap&quot;&gt;&lt;/i&gt; Groupe&quot;">​</a></h3><p>Un <strong>groupe</strong> vous permet de <em>déléguer</em> la gestion d&#39;un espace de travail restreint à ses membres. Les utilisateurs en dehors du groupe ne pourrons pas interagir avec lui.</p>',14),P={class:"details custom-block"},S=t("summary",null,"Voir aussi",-1),z=n('<h3 id="etiquette" tabindex="-1"><i class="las la-tags"></i> Etiquette <a class="header-anchor" href="#etiquette" aria-label="Permalink to &quot;&lt;i class=&quot;las la-tags&quot;&gt;&lt;/i&gt; Etiquette&quot;">​</a></h3><p>Une <strong>étiquette</strong> vous permet de <em>catégoriser</em> un sous-ensemble des membres de votre organisation selon un <em>critère métier</em> (e.g. une compétence ou un service).</p><p>Une étiquette est <em>transverse</em> à votre organisation, c&#39;est à dire qu&#39;avec elle vous pouvez cibler des personnes ayant les même critères métier au sein de différents groupes.</p>',3),y={class:"details custom-block"},I=t("summary",null,"Voir aussi",-1),E=n('<h2 id="evenement" tabindex="-1"><i class="las la-fire"></i> Evénement <a class="header-anchor" href="#evenement" aria-label="Permalink to &quot;&lt;i class=&quot;las la-fire&quot;&gt;&lt;/i&gt; Evénement&quot;">​</a></h2><p>Une <em>chose à faire</em> ou une <em>information autour d&#39;un fait concret</em> que l&#39;on désire partager et traiter avec certains membres d&#39;une organisation. Typiquement une information opérationnelle, une intervention sur le terrain, des actions de gestion de crise, etc.</p><p>Un événement génère des <em>notifications</em> sur les mobiles des <strong>participants</strong> qui ont installé l&#39;application mobile lors de sa création. Il est mis à jour et clôturé par ses <strong>coordonnateurs</strong>.</p><p>Les participants et les coordonnateurs d&#39;un événement peuvent être choisis comme:</p><ul><li>des membres de façon individuelle,</li><li>des groupes,</li><li>des étiquettes.</li></ul><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>L&#39;utilisateur qui créé un événement en est par défaut le coordonnateur mais il peut partager ou déléguer la gestion à d&#39;autres.</p></div><p>La figure suivante résume un exemple de structuration classique dans l&#39;application et comment un événement peut cibler des personnes à différents niveaux:</p><p><img src="'+h+'" alt="structure"></p><p>A un évènement, Kalisio Crisis permet d’associer :</p><ul><li>une <em>localisation</em> (adresse ou coordonnées géographiques),</li><li>des <em>photos</em> ou des <em>documents</em> afin de les partager entre les acteurs,</li><li>un <em><strong><a href="./../gofurther/workflow.html">processus</a></strong></em> définissant les interaction entre les participants et les coordonnateurs.</li></ul>',10),U=n('<div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>Gagnez du temps en localisant votre événement directement depuis votre <a href="./../gofurther/catalog.html">catalogue cartographique</a>.</p></div><h3 id="modele-d-evenement" tabindex="-1">Modèle d&#39;événement <a class="header-anchor" href="#modele-d-evenement" aria-label="Permalink to &quot;Modèle d&#39;événement&quot;">​</a></h3><p>Un événement s&#39;initie toujours à partir d&#39;un <strong>modèle</strong> qui définit son contenu de base. Dans chaque modèle un titre, une description, et/ou des destinataires par défaut pourront être définis. Ainsi, lors de la création de l&#39;événement, il ne reste qu&#39;à compléter ou amender certains éléments au besoin tels que la localisation.</p><div class="tip custom-block"><p class="custom-block-title">Astuce</p><p>Généralement les modèles suivent une <em>typologie</em> métier. Par exemple des sapeurs-pompiers pourront définir un modèle <em>Feu de forêt</em>, <em>Secours à personne</em> ou encore <em>Accident voie publique</em>.</p><p>Grâce à une typologie vous pourrez ensuite réaliser des <strong><a href="./../gofurther/archiving.html">statistiques pertinentes</a></strong> sur vos événements.</p></div>',4),L={class:"details custom-block"},N=t("summary",null,"Voir aussi",-1),R=n('<h3 id="participant" tabindex="-1">Participant <a class="header-anchor" href="#participant" aria-label="Permalink to &quot;Participant&quot;">​</a></h3><p>Un participant ne peut pas modifier un événement bien qu&#39;il puisse partager des documents ou des photos au sein de celui-ci.</p><h3 id="coordonnateur" tabindex="-1">Coordonnateur <a class="header-anchor" href="#coordonnateur" aria-label="Permalink to &quot;Coordonnateur&quot;">​</a></h3><p>Un coordonnateur peut modifier et clôturer (i.e. détruire) un événement, ainsi que sa liste de participants ou coordonnateurs.</p><p>Il a également accès à une <em>vue cartographique</em> synthétisant la position des acteurs et leur état d’avancement dans le <a href="./../gofurther/workflow.html">processus</a>.</p><h2 id="abonnements" tabindex="-1">Abonnements <a class="header-anchor" href="#abonnements" aria-label="Permalink to &quot;Abonnements&quot;">​</a></h2><p>Chaque organisation dispose d&#39;un <strong>abonnement de base</strong> définissant les limites de ressources pour ses membres au sein de l&#39;application.</p><p>Bien que vous puissiez utiliser l&#39;application gratuitement à des fins de test ou pour un usage privé (abonnement <strong>bronze</strong>), le nombre de modèles d&#39;événement, de groupes ou de membres est limité par défaut. Si vous avez besoin d&#39;intégrer plus de personnes au sein de votre organisation, ou de disposer de plus de modèles, vous pouvez souscrire à tout moment un abonnement plus adapté à vos besoins (<strong>argent</strong>, <strong>or</strong> ou <strong>diamant</strong>).</p><p>De plus, si l&#39;activité de votre association ou entreprise requiert l&#39;utilisation de certaines de nos <a href="./../gofurther/README.html">fonctionnalités avancées</a> vous devez souscrire un ou plusieurs <strong>abonnements additionels</strong> pour les rendre disponibles à vos membres.</p>',9),D={class:"warning custom-block"},w=t("p",{class:"custom-block-title"},"Note",-1);function j(F,G,O,B,K,$){const a=r("tour-link"),o=r("ClientOnly");return c(),p("div",null,[v,t("p",null,[s("Depuis une activité vous pouvez à tout moment ouvrir le "),e(o,null,{default:i(()=>[e(a,{text:"menu principal",path:"home",params:{tour:"home"}})]),_:1}),s(" sur la gauche de l'écran ou basculer sur d'autres activité via la "),b,s(" en haut de l'écran.")]),f,t("p",null,[s("👉 Vous n'avez pas encore de compte et souhaitez en créer un ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment créer son compte",path:"register"})]),_:1})]),t("p",null,[s("👉 Vous avez créé votre compte et ne parvenez pas à vous connecter ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment se connecter",path:"login"})]),_:1})]),t("p",null,[s("👉 Vous avez créé votre compte et êtes parvenu à vous connecter ? "),e(o,null,{default:i(()=>[e(a,{text:"Parcourir le menu principal",path:"home",params:{tour:"home"}})]),_:1})]),t("details",q,[T,e(o,null,{default:i(()=>[e(a,{text:"Voir comment inviter des membres",path:"home",params:{organisation:"manager",route:"add-member"}})]),_:1}),s(" lorsque vous avez créé une organisation et souhaitez inviter des utilisateurs à collaborer.")]),k,t("p",null,[s("Voir comment entrer dans le contexte d'une organisation ou en créer une nouvelle via le "),e(o,null,{default:i(()=>[e(a,{text:"tableau de bord",path:"home/organisations"})]),_:1})]),x,t("details",V,[A,t("p",null,[s("Comment afficher le tableau de bord depuis le "),e(o,null,{default:i(()=>[e(a,{text:"menu principal",path:"home",params:{tour:"home"}})]),_:1})])]),C,t("p",null,[s("👉 Vous êtes gestionnaire d'une organisation ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment gérer vos groupes",path:"home",params:{organisation:"manager",route:"groups-activity"}})]),_:1})]),t("p",null,[s("👉 Vous avez créé un groupe ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment ajouter des membres à votre groupe",path:"home",params:{organisation:"manager",route:"members-activity"}})]),_:1})]),t("details",P,[S,t("p",null,[s("Comment entrer dans l'activité de gestion des groupes depuis le "),e(o,null,{default:i(()=>[e(a,{text:"tableau de bord",path:"home/organisations"})]),_:1})]),t("p",null,[s("Comment afficher le tableau de bord depuis le "),e(o,null,{default:i(()=>[e(a,{text:"menu principal",path:"home",params:{tour:"home"}})]),_:1})])]),z,t("p",null,[s("👉 Vous êtes gestionnaire d'une organisation ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment gérer vos étiquettes",path:"home",params:{organisation:"manager",route:"tags-activity"}})]),_:1})]),t("p",null,[s("👉 Vous souhaitez étiquetter des membres ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment étiquetter des membres",path:"home",params:{organisation:"manager",route:"members-activity"}})]),_:1})]),t("details",y,[I,t("p",null,[s("Comment entrer dans l'activité de gestion des étiquettes depuis le "),e(o,null,{default:i(()=>[e(a,{text:"tableau de bord",path:"home/organisations"})]),_:1})]),t("p",null,[s("Comment afficher le tableau de bord depuis le "),e(o,null,{default:i(()=>[e(a,{text:"menu principal",path:"home",params:{tour:"home"}})]),_:1})])]),E,t("p",null,[s("👉 Vous êtes prêt à partager de l'information ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment gérer vos événements",path:"home",params:{organisation:"member",route:"events-activity"}})]),_:1})]),U,t("p",null,[s("👉 Vous êtes gestionnaire d'une organisation ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir comment gérer vos modèles",path:"home",params:{organisation:"manager",route:"event-templates-activity"}})]),_:1})]),t("details",L,[N,t("p",null,[s("Comment entrer dans l'activité de gestion des modèles depuis le "),e(o,null,{default:i(()=>[e(a,{text:"tableau de bord",path:"home/organisations"})]),_:1})]),t("p",null,[s("Comment afficher le tableau de bord depuis le "),e(o,null,{default:i(()=>[e(a,{text:"menu principal",path:"home",params:{tour:"home"}})]),_:1})])]),R,t("div",D,[w,t("p",null,[s("👉 Vous êtes propriétaire d'une organisation ? "),e(o,null,{default:i(()=>[e(a,{text:"Voir les abonnements disponibles et comment souscrire",path:"home",params:{organisation:"owner",route:"edit-organisation-billing"}})]),_:1})])])])}const Q=l(_,[["render",j]]);export{J as __pageData,Q as default};
