/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        name: {
            type: 'string',
            required: true
        },
        
        email: {
            type: 'string',
            required: true
        },

        password: {
            type: 'string',
            required: true
        },

        groupStageBet: {
            collection: "groupstage",
            via: "groupStageOwnder"
        },
        
        //bracketStageBet: {
            //collection: "Bracket",
            //via: "Bracket"
        //}
  }
};

