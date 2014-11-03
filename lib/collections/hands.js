Hands = new Mongo.Collection('hands');

Hands.allow({
  insert: function(){return true;},
  remove: function(){return true;}
});

Meteor.methods({
  handsCreateBlack: function(gameId) {
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    
    cardDecks = Games.findOne({_id: gameId}).decks;
    currBCStack = Cards.find({cardIsBlack: true, cardDeck: {$in: cardDecks}});
    currBCStackCount = Cards.find({cardIsBlack: true, cardDeck: {$in: cardDecks}}).count();
    rangeEnd = currBCStackCount + 9999;
    order = range(1,rangeEnd);
  
    currBCStack.forEach(function(card){
      order = _.shuffle(order);
      cardId = card._id;
      var handProperties = {
        _id: cardId, 
        cardText: card.cardText,
        cardIsBlack: card.cardIsBlack,
        cardneededWhite: card.cardneededWhite,
        cardDeck: card.cardDeck,
        gameId: gameId,
        active: true,
        order: order[0]   
      }
      if(Hands.findOne({_id: cardId, gameId: gameId})){
        console.log('vorhanden'); //debug  
      } else {
        Hands.insert(handProperties);
        console.log('eingetragen'); //debug
      }
    });
  },
  handsCreateWhite: function(gameId) {
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    
    cardDecks = Games.findOne({_id: gameId}).decks;
    currWCStack = Cards.find({cardIsBlack: false, cardDeck: {$in: cardDecks}});
    currWCStackCount = Cards.find({cardIsBlack: false, cardDeck: {$in: cardDecks}}).count();
    rangeEnd = currWCStackCount + 999;
    order = range(1,rangeEnd);
  
    currWCStack.forEach(function(card){
      order = _.shuffle(order);
      cardId = card._id;
      var handProperties = {
        _id: cardId, 
        cardText: card.cardText,
        cardIsBlack: false,
        cardneededWhite: false,
        cardDeck: card.cardDeck,
        gameId: gameId,
        active: true,
        hasPlayer: false,
        playerName: false,
        order: order[0]   
      }
      if(Hands.findOne({_id: cardId, gameId: gameId})){
        console.log('vorhanden'); //debug  
      } else {
        Hands.insert(handProperties);
        console.log('eingetragen'); //debug
      }
    });
  },
  handToPlayer: function(gameId) {
    currPlayerList = Players.find({gameId: gameId});
    
    currPlayerList.forEach(function(player){
      currWCHand = Hands.find({cardIsBlack: false, gameId: gameId, active: true, hasPlayer: false}, {sort: {order: 1}, limit:6});
      currWCHand.forEach(function(card){
        Hands.update(gameId, {$set: {hasPlayer: true, playerName: player.playerName}});
        console.log('jup');             
      });    
    });
  },
  handsDebug: function(gameId) {
    Hands.remove({gameId: gameId});
  }
});