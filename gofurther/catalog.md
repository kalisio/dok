---
sidebarDepth: 3
---

# <i class="las la-map"></i> Mapping catalog

The catalog activity allows to visualise and interact with data on a digital map. Driven by today's most advanced web technologies, it enables tracking of geospatial assets in real-time.

::: warning Note
This feature requires a specific subscription, it will not be available otherwise.

:point_right: You own an organisation ? <ClientOnly><tour-link text="How to subscribe" path="home" :params="{ organisation: 'owner', route: 'edit-organisation-billing' }"/></ClientOnly>
:::

## Key concepts

Here is a quick rundown of the *key concepts* to handle when you're just getting started with mapping.

The map can contain a **basemap** (i.e. a background context), a set of data **layers** (i.e. business specific data), and has an **extent** (i.e. the part of the Earth currently on the screen), and navigation tools to pan and zoom. A layer specifies how a geographic dataset is portrayed on the map. The final rendering supporting your use case can usually be assembled by adding a serie of layers.

A **feature layer** is a grouping of similar geographic elements, for example, buildings, cities, roads, earthquake epicenters, etc. Features can be points, lines, or polygons (areas). Feature layers are most appropriate for visualizing your own data on top of your basemaps. Using the catalog activity you can view, save, edit and analyze your own features and their attributes. Moreover, you can include interactive pop-up windows with information about the features.

The activity manages both **space** and **time** information in order to visualize *time-varying* geospatial phenomena: tracking of moving objects, history of measures taken by a sensor, weather prediction over time, etc. When a layer displays a time-varying dataset you are able to navigate back and forward in time using a **timeline** to see the data at your requested date/time.

## Data

The catalog comes with a set of built-in geospatial data. However, you can complete it with your own spatial data.

### OpenStreetMap

[OpenStreetMap](https://www.openstreetmap.org/) is a collaborative project to create a free editable map of the world. 

![OpenStreetMap](../.vitepress/public/images/openstreetmap.png)

This [vector](https://datacarpentry.org/organization-geospatial/02-intro-vector-data) data is structured according different categories (buildings, landuse, etc.). They are available in different styles (e.g. bright, dark, topography). Data is generated by [OpenMapTiles](https://openmaptiles.com/).

### BD ORTHO/ORTHO HR

**BD ORTHO** (Base de Données Orthophotographique) and **ORTHO HR** (Orthophotographie Haute Résolution) are both a collection of [orthoimages](https://en.wikipedia.org/wiki/Orthophoto), geometrically corrected ("orthorectified") such that the scale is uniform across the covered area.

![Arc de Triomphe - Paris](../.vitepress/public/images/ign_orthohr.jpg)

Those [raster](https://datacarpentry.org/organization-geospatial/01-intro-raster-data) datasets are available with a resolution of 50 centimeters per pixel for **BD ORTHO** and 20 centimeters per pixel for **ORTHO HR**. The [Institut national de l'information géographique et forestière (IGN)](https://www.ign.fr/) produces those datasets and they both are available under open license at this [address](https://geoservices.ign.fr/documentation/diffusion/telechargement-donnees-libres.html).

### PlanetSAT

The **PlanetSAT** dataset is a collection of [orthoimages](https://en.wikipedia.org/wiki/Orthophoto). Those images are the result of specific processing on data produced by the [Sentinel-2](https://en.wikipedia.org/wiki/Sentinel-2) and [Landsat-8](https://en.wikipedia.org/wiki/Landsat_8) earth observation missions. The dataset is available with a resolution of 10 meters per pixel.

![Islande](../.vitepress/public/images/planetsat.jpg)

[PlanetObserver](https://planetobserver.com/) produces this dataset.

### Vigicrues

Flood warnings from the [Vigicrues](https://www.vigicrues.gouv.fr/) service.

![Vigicrues](../.vitepress/public/images/vigicrues.jpg)

### Hub'Eau

Hydrometric data from the [Hub'Eau](https://hubeau.eaufrance.fr/) portal.

![Hydrométrie Hubeau](../.vitepress/public/images/hydrometrie-hubeau.jpg)

### Téléray

Ambient radioactivity measures from the [Réseau national de télémesure Téléray](https://www.irsn.fr/FR/connaissances/Environnement/surveillance-environnement/organisation/reseaux-surveillance/Pages/1-reseaux-telesurveillance.aspx#.XyM9qJ77QuU). 

![Réseau Téléray](../.vitepress/public/images/teleray.jpg)

### OpenAQ

Air quality data collected in 93 different countries by the [OpenAQ](https://openaq.org/) non-profit organization. It aggregates PM2.5, PM10, ozone (O3), sulfur dioxide (SO2), nitrogen dioxide (NO2), carbon monoxide (CO), and black carbon (BC) from real-time government and research grade sources. 

![OpenAQ](../.vitepress/public/images/openaq.png)

### OpenRadiation

The [OpenRadiation](https://www.openradiation.org/en) project aims to centralize environmental radioactivity measurements by citizens, both in France and worldwide. It allow all users to capture measurements using various kind of dosimeters and exploit these measurements through various tools.

![OpenRadiation](../.vitepress/public/images/openradiation.png)

### Mapillary

Crowdsourced geotagged photos database from [Mapillary](https://www.mapillary.com/) platform.

![Mapillary](../.vitepress/public/images/mapillary.jpg)

### GSMaP

Global Precipitation Measurement (GPM) is a joint mission between different space agencies to make observations of Earth's precipitations.

![GSMaP](../.vitepress/public/images/gsmap.png)

### Weather prediction

Available meteorological elements are the following:
* wind speed (m/s) and direction (°) at 10m,
* gust at 2m (m/s),
* temperature at 2m (°C),
* cumulated ground precipitations (rain and snow) over 3h (mm/h).

Data are gathered from different numerical weather prediction models detailed hereafter.

ARPEGE (Action de Recherche Petite Echelle Grande Echelle), which is an essential tool for operational weather forecasting at Météo France. Four daily forecasts are made at 0, 6, 12 and 18h UTC, with forecasting time of 102h, 72h, 114h and 60h respectively. Model forecasts are interpolated on a regular lat/lon grids, with one 0.1°x0.1° grid over the Europe-Atlantic domain and one 0.25°x0.25° grid over the Earth.

AROME, operational at Météo-France since December 2008, which was designed to improve short range forecasts of severe events such as intense Mediterranean precipitations (Cévenole events), severe storms, fog, urban heat during heat waves. Five daily forecasts are made with AROME, thus helping to better predict meteorological events of the day and of the morrow (42h forecast range). The size of the mesh, many time smaller than previous models, is 1.3km against 7.5km for ARPEGE over France.

Global Forecast System (GFS) is a weather forecast model produced by the National Centers for Environmental Prediction (NCEP), are also available. The entire globe is covered by the GFS at a base horizontal resolution of 18 miles (28 kilometers) between grid points, which is used by the operational forecasters who predict weather out to 16 days in the future.

### Demography

Based on [FiLoSoFi](https://www.insee.fr/fr/statistiques/6215217) data from the Institut national de la statistique et des études économiques (INSEE), we provide demography information like the number of inhabitants per km² (i.e. population density) or the number of inhabitants per age and tile (1km or 200m).

![FILOSOFI](../.vitepress/public/images/filosofi.png)

### Administrative boundaries

[ADMIN EXPRESS](https://geoservices.ign.fr/adminexpress), produced by IGN, provide the French administrative levels (town, departement, region...).

![ADMIN EXPRESS](../.vitepress/public/images/adminexpress.png)

### METAR

**METAR**(METeorological Airport Report2) data refers to aviation weather observation reports. **METAR** are issued by aerodromes according to a  [standardized formalism](https://fr.wikipedia.org/wiki/METAR) by ICAO (International Civil Aviation Organization).

METAR messages are updated regularly, often between 30 minutes and 60 minutes during the field's opening hours, depending on its equipment and the possibility of a significant change in observed weather.

A METAR contains a variety of information, including:
* ICAO code of the airport or aerodrome for which the METAR is issued
* date of observation
* wind
* horizontal visibility
* cloud cover
* temperature and dew point
* sea level pressure
* any additional notes and data.

![METAR](../.vitepress/public/images/metar.png)

The data collected is made available by the [Aviation Weather Center](https://www.aviationweather.gov/) service. 

## Components

Each component can be shown/hidden through a handle on the different side of the view:
* at the top to open the **navigation bar**,
* at the bottom to open the **timeline**,
* on the right to open the **catalog panel**.

In addition, a **floating action button** <i class="las la-ellipsis-v la-2x"></i> is available in the bottom-right corner to perform some actions.

:point_right: You manage an organisation ? <ClientOnly><tour-link text="Browse the catalog activity components" path="home" :params="{ organisation: 'manager', route: 'catalog-activity', tourDelay: 2000 }"/></ClientOnly>

::: details See also
How to enter the catalog activity from the <ClientOnly><tour-link text="dashboard" path="home/organisations"/></ClientOnly>

How to display the dashboard from the <ClientOnly><tour-link text="main menu" path="home" :params="{ tour: 'home' }"/></ClientOnly>
:::

### Navigation bar

The navigation bar allows to quickly execute recurring actions:
* <i class="las la-crosshairs"></i> center the view on your current location,
* <i class="las la-search-location"></i> seek for an address,
* <i class="las la-star"></i> list and create your favorite views,
* <i class="las la-wrench"></i> display the coordinates of a location,
* <i class="las la-expand"></i> switch to fullscreen mode.

:point_right: Launch the <ClientOnly><tour-link text="activity tutorial" path="home" :params="{ organisation: 'manager', route: 'catalog-activity' }"/></ClientOnly> then open the link <i class="las la-external-link-square-alt"/> to the navigation bar tutorial to get more details

### Catalog panel

The catalog panel allows to manage the layers displayed on your map. You can show/hide a layer by selecting it in the relevant category.

::: warning
The data of some layers are only visible starting from a given scale if there is too much data to ensure a readable visualisation.

In this case the layer will be disable until you reach the required scale on the map (zoom in or zoom to the layer to do so).
:::

Using the menu <i class="las la-ellipsis-v"/> on a layer you can access [available actions](./catalog.md#layer-actions) for this layer.

:point_right: Launch the <ClientOnly><tour-link text="activity tutorial" path="home" :params="{ organisation: 'manager', route: 'catalog-activity' }"/></ClientOnly> then open the link <i class="las la-external-link-square-alt"/> to the catalog panel tutorial to get more details

### Timeline

The timeline allows to quickly execute actions related to the time of the displayed data. Stick to real-time or go forward (i.e. forecast)/backward (i.e. history) in time as you wish. 

:point_right: Launch the <ClientOnly><tour-link text="activity tutorial" path="home" :params="{ organisation: 'manager', route: 'catalog-activity' }"/></ClientOnly> then open the link <i class="las la-external-link-square-alt"/> to the timeline tutorial to get more details

### Floating action button

Using the FAB you can:
* <i class="las la-plus"/> Create a new blank data layer:
   * By connecting to web mapping services using OGC standards (WMS, WFS, TMS, WMTS).
   * By locating and drawing the underlying entities. You can add the data schema from a [JSON schema](https://json-schema.org/) file in order to edit the meatadata (i.e. properties) of your entities.
  * By import existing data from a [GeoJSON](https://geojson.org/) file.
* <i class="las la-eye-dropper"/> Probe weather forecast data from active prediction models by selecting a specific location on the map.

:point_right: Launch the <ClientOnly><tour-link text="activity tutorial" path="home" :params="{ organisation: 'manager', route: 'catalog-activity' }"/></ClientOnly> then open the link <i class="las la-external-link-square-alt"/> to the FAB tutorial to get more details

### Contextual menu

A *right-click* or a prologed touch on the map or on a feature will display a contextual menu with an action <i class="las la-fire"/> to create an [event](../quickstart/concepts.md#event) at this specific location or based on its geometry.

If the target feature comes from a measure layer or you right-click on a location of the map after activating a weather data layer (e.g. wind) you can also <i class="las la-bell"/> [setup an alert](./alert.md).

Last but not least, it's possible to perform a <i class="las la-users"/> population analysis on a polygon element. This analysys allow to compute the number of inhabitants, per age, possibly impacted by an event in the zone.

### Layer actions

Depending on the layer different actions are available. The most common action is to *zoom to* <i class="las la-search-location"/> the layer in order to fit the view on the available data. If the layer is disabled at high scales this action will set the current scale of the map so that data will start be visible if the layer is shown.

More actions are available on user-defined feature layers:
* <i class="las la-save"></i> save the layer (i.e. make it persistent),
* <i class="las la-file-alt"></i> edit layer properties like its name or description,
* <i class="las la-edit"></i> edit layer features (metadata and geometry),
* <i class="las la-border-style"></i> edit display style,
* <i class="las la-filter"></i> filter data according to metadata,
* <i class="las la-th-list"></i> display raw data,
* <i class="las la-chart-pie"></i> create charts,
* <i class="las la-minus-circle"></i> delete the layer.
