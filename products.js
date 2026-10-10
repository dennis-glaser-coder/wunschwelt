/* wunschwelt. Produktkatalog – nur geprüfte ASINs in verifiedProductLinks eintragen.
   Produkt-IDs entsprechen der Array-Reihenfolge (beginnend bei 0).
   Keine erfundenen Preise, Affiliate-IDs oder Amazon-Produktnummern hinzufügen. */
const raw=[
["LEGO Classic Große Bausteine-Box 10698","bauen",4,12,50,"Offenes Bauen mit vielen unterschiedlichen Bausteinen."],
["LEGO Creator 3-in-1 Exotischer Papagei 31136","bauen",7,12,30,"Drei alternative Tiermodelle aus einem Set."],
["Ravensburger GraviTrax Starter-Set","bauen",8,12,80,"Kugelbahnen bauen und immer wieder verändern."],
["Ravensburger GraviTrax Junior Starter-Set S Desert 24585","bauen",3,7,30,"Ein kleines Kugelbahn-Starterset mit Wüsten-Thema."],
["Ravensburger tiptoi Starter-Set Meine Welt","forschen",2,5,80,"Interaktives Buch und Stift für erste Entdeckungen."],
["Toniebox 2 Starter-Set Meeresgrün mit Kreativ-Tonie Rot","knobeln",1,12,150,"Bildschirmfreies Hörspiel-Starterset mit Kreativ-Tonie."],
["SmartGames IQ Puzzler Pro","knobeln",6,12,30,"Kompakte Logikaufgaben für unterwegs."],
["KOSMOS AllesKönnerKiste Filz-Bild","kreativ",8,12,30,"Kreatives Gestalten mit Filz und Vorlagen."],
["Clementoni AIRO Roboter","forschen",9,12,150,"Interaktives Robotik-Spielzeug."],
["HABA Erster Obstgarten","knobeln",2,5,30,"Kooperatives Spiel für gemeinsame Runden."],
["HABA Magnetspiel Obstgarten","knobeln",2,6,30,"Farben und Formen spielerisch zuordnen."],
["HABA Magnetspiel Stadtlabyrinth","knobeln",2,6,30,"Ruhiges Magnetspiel für unterwegs."],
["HABA Magnetspiel Anziehpuppe Lilli","kreativ",2,6,30,"Figuren und Kleidung kombinieren."],
["HABA Magnetspiel Safari","knobeln",3,7,30,"Magnetspiel mit Tiermotiv."],
["SmartGames Camelot Jr.","knobeln",4,7,50,"Holz-Logikspiel mit Bauaufgaben."],
["SmartGames IQ Puzzler Pro XXL","knobeln",6,12,50,"Größere Variante für Knobelfreunde."],
["Schleich HORSE CLUB Pferdebox 42611","kreativ",5,12,50,"Pferdegeschichten mit Stallkulisse."],
["Schleich HORSE CLUB Reiterhof 72222","kreativ",5,12,80,"Eine größere Spielwelt für Pferdefans."],
["Schleich Sarahs Tierbaby-Pflege 42432","kreativ",5,12,30,"Rollenspiel rund um die Tierpflege."],
["Schleich Mias Voltigier-Reitset 42443","kreativ",5,12,30,"Pferde-Spielset mit Zubehör."],
["BRIO World Holzeisenbahn Starter-Set","bauen",3,8,80,"Schienen verlegen und Strecken erweitern."],
["BRIO Builder Konstruktionsset","bauen",3,12,80,"Bauen mit spielerischem Werkzeug."],
["Ravensburger 3D Puzzle Sneaker","knobeln",8,12,30,"3D-Puzzle mit praktischem Ergebnis."],
["Ravensburger memory Klassiker","knobeln",3,12,30,"Gemeinsam Paare suchen und merken."],
["Ravensburger tiptoi Der Stift (Modell 00801)","forschen",2,10,80,"tiptoi-Stift der Modellreihe 00801; Kompatibilität vor dem Kauf prüfen."],
["KOSMOS Die drei ??? Detektiv-Koffer","forschen",8,12,50,"Auf Spurensuche mit Detektivzubehör."],
["KOSMOS Kristalle züchten","forschen",10,12,30,"Experimentieridee unter Aufsicht."],
["Ravensburger KI und DU","forschen",10,12,30,"Interaktiver Einstieg in KI-Themen."],
["WAS IST WAS Schlau, schlauer, KI?","forschen",11,12,30,"Sachbuch zum Verständnis von KI."],
["LEGO DUPLO Bausteinbox","bauen",2,5,80,"Große Bausteine zum freien Spielen."],
["Pokémon Boosterbundle Mega-Entwicklung – Erhabene Helden (6 Boosterpacks)","knobeln",6,12,50,"Sechs Boosterpacks zum Sammeln und Spielen; Inhalt zufallsabhängig."]
];
const verifiedProductLinks={"0":"https://www.amazon.de/dp/B00PY3EYQO?tag=wunschwelt07-21","1":"https://www.amazon.de/dp/B0BBS2QDNN?tag=wunschwelt07-21","2":"https://www.amazon.de/dp/B0BSXKTRYZ?tag=wunschwelt07-21","3":"https://www.amazon.de/dp/B0DDL8LLWJ?tag=wunschwelt07-21","5":"https://www.amazon.de/dp/B0GWK8NZPY?tag=wunschwelt07-21","6":"https://www.amazon.de/dp/B01G3PYWCW?tag=wunschwelt07-21","24":"https://www.amazon.de/dp/B07B47Y6FX?tag=wunschwelt07-21","30":"https://www.amazon.de/dp/B0G4RQLHVN?tag=wunschwelt07-21"};
