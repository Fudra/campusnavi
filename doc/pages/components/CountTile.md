# Count Tile

## Beschreibung

Die Count Tile Komponente zeigt eine Zahl an. Diese wird kann zusammen mit den Einträgen in einer 
Liste oder Tabelle verwendet werden. 

## Benutzung

Einbinden der Komponente
``` js
 import CountTile from '../../tiles/CountTile';
 
 export default {
    components: {
        CountTile
    }
 }
```

Benutzung der Komponente im Markup
``` html
   <count-tile></count-tile>
```

## Parameter

Es sind keine Parameter vorhanden, die Werteübergaber erfolgt über Actions.

## Actions

Um eine Zahl, der Komponente zu übergeben wird zuerst die Action
‘countItems‘ eingebunden, um vuex als action bekannt gemacht, 
die Action in dem Beispiel heißt ‘updateItemCounter‘ .
 
Zuletzt muss eine Property definiert werden. Von der Property wird 
jegentlich nur der ‘setter‘ benötigt. 

Durch das Setzen der Property wird der dispatcher getriggert.
  
``` js
    import { countItems } from '../../../vuex/actions'
    
    export default {
    
    //...
    vuex: {
        actions: {
            updateItemCounter: countItems
        }
    },
    
    computed: {
        thisUpdateCounter: {
            set (val) {
                this.updateItemCounter(val)
            }
        }
    }
    
    }
```

Um nun einen Wert zu setzen kann man der Property `this.thisUpdateCounter` einen Wert zuweisen.

Im folgenden Beispiel werden Daten aus dem Store geladen. Nach dem alle Daten in der Komponente
 verügbar sind, werden sie gezählt und der Property `thisUpdateCounter` zugewiesen.
 

``` js
created () {
        store.getSomeData()
            .then(
                somedata => {
                    this.thisUpdateCounter = somedata.data.length;
                }
            )
    },

```

