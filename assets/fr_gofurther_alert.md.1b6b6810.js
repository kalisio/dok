import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.6f28b4b9.js";const l="/assets/Alert-FR.5ca3ead9.png",g=JSON.parse('{"title":"Alertes environnementales","description":"","frontmatter":{},"headers":[],"relativePath":"fr/gofurther/alert.md","filePath":"fr/gofurther/alert.md"}'),r={name:"fr/gofurther/alert.md"},n=s('<h1 id="alertes-environnementales" tabindex="-1"><i class="las la-bell"></i> Alertes environnementales <a class="header-anchor" href="#alertes-environnementales" aria-label="Permalink to &quot;&lt;i class=&quot;las la-bell&quot;&gt;&lt;/i&gt; Alertes environnementales&quot;">​</a></h1><p>Les <strong>alertes environnementales</strong> permettent de générer un <a href="./../quickstart/concepts.html#evenement">événement</a> de façon automatique dès lors que des conditions spécifiques se rencontrent sur votre territoire au sein de nos données environnementales. Typiquement il s&#39;agit de détecter:</p><ul><li>des conditions météorologiques dangereuses à surveiller comme par exemple une vitesse de vent supérieure à 100 Km/h sur une zone sensible,</li><li>des niveaux guides ou des seuils à surveiller comme par exemple un niveau de crue centennal sur une rivière.</li></ul><p>Les alertes vous permettent ainsi d&#39;assurer simplement vos opérations de vigilance quotidienne de façon fiable et de mobiliser vos équipes rapidement si nécessaire.</p><div class="warning custom-block"><p class="custom-block-title">Note</p><p>Cette fonctionnalité requiert l&#39;abonnement pour accéder au <a href="./catalog.html">catalogue des données environnementales</a>. Sans celui-ci, vous ne pourrez pas y accéder.</p></div><h2 id="creation-d-une-alerte" tabindex="-1">Création d&#39;une alerte <a class="header-anchor" href="#creation-d-une-alerte" aria-label="Permalink to &quot;Création d&#39;une alerte&quot;">​</a></h2><p>Il est possible de créer une alerte depuis le <a href="./catalog.html">catalogue cartographique</a> en activant tout d&#39;abord la couche de données cible via le <a href="./catalog.html#panneau-lateral">panneau latéral</a>. Vous pouvez par exemple choisir des <a href="./catalog.html#prevision-meteorologiques">prévisions météorologiques</a> comme le vent ou des mesures comme les <a href="./catalog.html#hub-eau">mesures hydrométriques Hub&#39;Eau</a>.</p><p>Pour les prévisions météorologiques il vous suffit de faire un clic droit à la position où vous souhaitez surveiller les variations sur la carte. L&#39;action vous permettant de créer une alerte <i class="las la-bell"></i> apparait alors dans le <a href="./catalog.html#menu-contextuel">menu contextuel</a>. De la même façon, elle apparait lors d&#39;un clic droit sur la sonde où vous souhaitez surveiller les variations pour des données de mesures. Le composant permettant de paramétrer votre alerte est découpé en plusieurs sections:</p><p><i class="las la-clock la-2x"></i> La fréquence de vérification des conditions d&#39;alerte ainsi que la plage temporelle d&#39;analyse. Pour des mesures il s&#39;agit de la plage de temps dans le passé au sein de laquelle sont recherchées les conditions de déclenchement. Pour les prévisions météorologiques il s&#39;agit de la plage de temps dans le futur au sein de laquelle sont recherchées les conditions de déclenchement.</p><p><i class="lab la-cloudversify la-2x"></i> Les conditions à satisfaire pour déclencher l&#39;alerte sous la forme d&#39;un seuil à (ou ne pas) dépasser pour chaque élément météorologique ou mesure d&#39;intérêt parmi ceux disponibles.</p><p><i class="las la-bell la-2x"></i> Le modèle d&#39;événement à créer lorsque l&#39;alerte est déclenchée, tout en précisant s&#39;il doit également être automatiquement clôturé lorsque l&#39;alerte n&#39;est plus active.</p><div class="warning custom-block"><p class="custom-block-title">Note</p><p>Etant donné que l&#39;événement sera automatiquement créé par l&#39;application lorsque les conditions de l&#39;alerte seront rencontrées, le modèle doit contenir au moins un participant et un coordonnateur.</p></div><p><img src="'+l+'" alt="Archivage"></p>',13),o=[n];function i(u,c,d,p,m,v){return a(),t("div",null,o)}const f=e(r,[["render",i]]);export{g as __pageData,f as default};
