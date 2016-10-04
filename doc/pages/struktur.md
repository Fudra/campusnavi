## Ordnerstruktur
Der Hauptortner der App ist der ´src´ Ordner, in dem die ganze Applikation 
liegt. Indem liegen weitere Ordner, auf die nun in folge kurz
eingegangen wird.

* assets
  Hier liegen alle Assests, sprich Bilder, Logos etc. 
  
* components
 Im komponenten Ordner liegen die einzelnen Komponenten, die in der Applikation genutzt werden.
  Desweiteren liegen dort auch die einzelnen Pages, sprich, die Seiten für die Applikation, die
  aus den einzenen Komponenten zusammen gesetzt sind.

* config
Hier liegen Konfiguratinstateien der Applikation, darunter die Routen, die die Applikation kennt, und
die Menu-Einträge.

* lib
Im lib Ordner liegen Hilfsfunktionen.   

* scss
  Hier liegen alle Stylesheets. Die Stylesheet-Ordnerstruktur 
  und der Aufbau der Ordner, sowie Strukturierung der Dateien 
  basiert auf den Aritektureempfehlungen sowie dem 7.1 Pattern des [sass-guidelines][]
  
* store
  Store ist die Schnittstelle zwischen den Webserver und der Applikation. Dort liegen 
  Dateien, die die Daten von Server holen, sie Auflösen und der Applikation zur verfügung stellen.

* vuex
  Im Vuex Ordner liegen die Dateien, die es ermöglichen zwischen den einzelenen Komponenten, 
  in form von Events, Daten auszutauschen. Es baisert auf dem State-Management Patteren 
  und dient als zentraler Anlaufspunkt für das Speichern von Informationen. Siehe für mehr 
  informationen die [Vuex][] Dokumentation.
  
[sass-guidelines]: https://sass-guidelin.es/#architecture
[vuex]: http://vuex.vuejs.org/en/intro.html
