# Open Remote Backend Server

Deze repository is bewijslast voor het opzetten en maken van de backend die dient voor het aanleveren van data aan de web app. 

## Informatie
![<image>](https://drive.google.com/file/d/12hLz_GjAC9WZ3gp2XTI1yqpEfo-KdNjn/preview)
Voor de crowd control applicatie is realtime data nodig. Deze data wordt 
verzameld door telefoons. De data die wordt opgehaald (locatie, snelheid en richting) wordt opgeslagen in een database. Deze server zorgt ervoor dat wanneer er een verandering is in de database er een seintje wordt verstuurd naar de crowd control applicatie met de nieuwe data.

De server maakt gebruik van een Nodejs framework genaamd [Nestjs](http://nestjs.com). Dit is een framework om servers in Nodejs te maken. Naast dit wordt er gebruik gemaakt van Socket.io om de data realtime te verzenden naar de crowd control applicatie.

```javascript
const changeStream = this.locationModel.watch().on('change', change => {
    this.onPositionDataChangedDispatcher.dispatch(this, change);
});

this.locationService.onPositionDataChanged.subscribe((sender, location) => {
    Logger.log('position data changed, broadcasting...');
    this.server.emit('newData', location.fullDocument);
});
```
Bovenstaand stukje code kijk naar veranderingen in de database en zodra er een verandering is een event triggert die dan weer data naar de crowd control applicatie wordt gestuurd
    

## Hoe start ik de server op


### Installatie

```bash
$ npm install
```

### Opstarten van de server

```bash
$ npm run start
```

## Integratie
Om de server makkelijk te kunnen integreren met de crowd control applicatie is er in [Heroku](http://heroku.com) een project aangemaakt. Als er veranderingen zijn op de master branch dan worden deze direct online ook verandert.

De server kan worden bereikt via de volgende url:
[https://openremote-server.herokuapp.com/](https://openremote-server.herokuapp.com/)


