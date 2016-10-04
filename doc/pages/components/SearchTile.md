# Search Tile

## Beschreibung

Das Searchtile ist eine einfaches Suchfeld, dies die Eingabe des Suchbegriffes als Event
Verschickt, das von jeder anderen Komponente abgefangen werden kann.

## Benutzung

Die Benutzung des Suchfeldes ist relativ simpel. Zu erste wird die Komponente im Script teil eingebunden 
und als Komponente der Seite hinzugefügt. 

``` js
 import SearchTile from '../../tiles/SearchTile';
 
 export default {
    components: {
        SearchTile
    }
 }
```

Danach kann sie als Tag im Markup benutzt werden.

``` html
     <search-tile></search-tile>
```


## Parameter

Die `SearchTile`  komponente besitzt nur Optionale Parameter, die die Beschriftungen und das Icon des
Suchfeldes Ändern.

``` js
  /* Setzt den Titel des Suchfeldes */
   title: {
       type: String,
       default () {
           return 'Nach was möchten Sie suchen?';
       }
   },
   /* Setzt den Suchicon des Suchfeldes */
   icon: {
       type: String,
       default () {
           return 'fa-search';
       }
   },
   /* Setzt den platzhalter Text des Suchfeldes */
   placeholder: {
       type: String,
       default () {
           return 'Suche..'
       }
   }
```

## Actions

Das Suchfeld hat eine `searchItem` Action. sie wird bei bei jeder eingabe, in das Suchfeld gefeuert.

Um auf die Action zuzugreifen, muss zu erst der Getter  `getSearchItem`  aus dem Vuex Ordner `getters` eingebunden
werden.

``` js
import { getSearchItem } from '../../../vuex/getters'

```

Danach  wird der getter dem vuex system bekannt gemacht

``` js
//...
 vuex: {
    getters: {
        searchValue: getSearchItem
    }
}
```

In der Variable `searchValue` ist der Inhalt des Suchfeldes, und man kann darauf ganz bequeme zugreifen

``` html
{{searchValue}}
```


[Font-Awesome]: fontawesome.io/icons/