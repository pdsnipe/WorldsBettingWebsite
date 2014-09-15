/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        username: {
            type: 'string',
            unique: true
        },
        
        email: {
            type: 'string',
            unique: true
        },
        
        passports: {
            collection: 'passport', 
            via: 'user' 
        },

        groupStageBet: {
            collection: "groupstage",
            via: "groupStageOwner"
        },
        
        //bracketStageBet: {
            //collection: "Bracket",
            //via: "Bracket"
        //}
  }
};

