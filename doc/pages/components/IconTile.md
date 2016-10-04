# Icon Tile

## Beschreibung
 Das Icon-Tile ist eine sehr einfach Komponente, das das Icon, der ensprechenden Seite darstellt.

## Benutzung

Einbinden der Komponente
``` js
 import IconTile from '../../tiles/IconTile';
 
 export default {
    components: {
        IconTile
    }
 }
```

Benutzung der Komponente im Markup
``` html
   <icon-tile :icon="'fa-thumb-tack'"></icon-tile>
```

## Parameter

 * `icon` 
   Optionaler Parameter,  der das Ensprechende Icon dartellt.
   Die Icons sind aus der [Font-Awesome][] Icon-Font sammlung.
   

[Font-Awesome]: fontawesome.io/icons/