---
sidebarDepth: 3
---

# Changelog

## April 21st, 2026 - v2.1.1

Here are the details of the improvements resulting from your suggestions:\
👉 cartographic data completely managed using [Kano](https://kalisio.github.io/kano/),\
👉 automated focus on input controller when opening search tool,\
👉 new position indicator,\
👉 enhanced zoom control,\
👉 enhanced coordinates parsing to support more formats in search tool,\
👉 new map attribution component,\
👉 ability to stack multiple timeseries with multi-selection,\
👉 more ergonomic timeline component,\
👉 more data export available (tags, groups, members).

Relying on Kano for cartographic data management provides you with many new features like:\
👉 3D globe rendering,\
👉 new style manager for layer styling,\
👉 new selection manager to launch actions on selected features,\
👉 layers targetting OGC Web Services can send an additional header for authentication,\
👉 layers and categories display order can be changed by drag'n'drop,\
👉 specific actions now available to edit features of a layer.

Our cartographic data is also enriched:\
👉 enhanced rendering and legend of various data layer,\
👉 French electrical generation data from [RTE](https://data.rte-france.com/),\
👉 French atmospheric data from [ICOS](https://www.icos-cp.eu/),\
👉 French [hydrometric](http://hubeau.eaufrance.fr/page/api-hydrometrie) and [piezometric](http://hubeau.eaufrance.fr/page/api-piezometrie) data from [Hub'Eau](http://hubeau.eaufrance.fr).

A few fixes have also been made:\
👉 GSMap cloud cover layer not working anymore,\
👉 logbook charts,\
👉 logbook heatmap.

## October 2nd, 2023 - v2.0.1

Akt'n'Map is renamed Kalisio Crisis and is now available as a Progressive Web App (PWA).

Here are the details of the improvements resulting from your suggestions:\
👉 notifications now include the avatar of your organisation if any,\
👉 simplification of account management,\
👉 tags are now managed like groups,\
👉 reorganization of the cartographic data catalog by thematic tabs,\
👉 new tool for measuring distance and area of a vector element on the map,\
👉 possibility of precisely selecting the range of events displayed in the logbook,\
👉 differentiation of closed/open events in the logbook,\
👉 possibility to precisely select the range of data displayed in the graphs,\
👉 possibility to zoom on the data visualized in the graphs,\
👉 possibility to freely move additional widgets,\
👉 ability to notify your whole organisation,\
👉 collaborative map editing,\
👉 optimized cartographic visualization of large measurement sets,\
👉 ability to configure the target time zone for displaying dates and times.

Our cartographic data is also enriched:\
👉 METAR data from the [Aviation Weather Center](https://www.aviationweather.gov/).

A few fixes have also been made:\
👉 editing the style of a functional tiled layer,\
👉 selectable manager role when adding to a group,\
👉 incorrect update of some data layers during time navigation.

Finally, a new feature allows you to integrate your own real-time data feeds into the map, as well as automatically publish events via our API.

## February 23rd, 2022 - v1.3.0

Here are the details of the improvements resulting from your suggestions:\
👉 the manager of an organization can now manage all groups without automatically being a member,\
👉 new distance and area measurement tools are available on the map,\
👉 the ability to import files in shapefile format by drag and drop,\
👉 the possibility of configuring the refresh rate of real-time data on the map,\
👉 the ability to configure default display units.

Our cartographic data is also enriched:\
👉 French administrative data (from [Admin Express](https://www.data.gouv.fr/fr/datasets/admin-express/)),\
👉 radar images over Metropolitan France (from [Météo France](https://donneespubliques.meteofrance.fr/?fond=produit&id_produit=98&id_rubrique=34)).

Some fixes have also been made:\
👉 notifications received in duplicate on iOS systems,\
👉 mapping and handrail inaccessible to members from the dashboard,\
👉 Mapillary view in full screen mode,\
👉 impossible to create an event on the map above a map element.

## October 24th, 2021 - v1.2.0

This new version offers a more ergonomic interface, making it easier to navigate between the different functions within your organizations.

Many improvements are on the program thanks to your suggestions:\
👉 possibility of managing the participants of an event without having to open the map view,\
👉 possibility to select the roles authorized to create an event,\
👉 choice of whether or not to notify participants when an event is modified,\
👉 analysis function of the population impacted in an area,\
👉 simplified creation, modification and deletion of cartographic elements,\
👉 extended interoperability with your GIS on the different OGC protocols (WMS, WFS, WMTS, TMS),\
👉 partial update of the different elements to simplify editing.

Our cartographic data is also enriched:\
👉 new map backgrounds (hybrid and dark),\
👉 population data from [INSEE grid](https://www.insee.fr/fr/statistiques/4176305),\
👉 use of the latest version of the [Mapillary](https://www.mapillary.com/) service.

Finally, a new functionality allows you to manage your action plans, i.e. a set of events linked to a situation, which allows complete traceability of all your operations.