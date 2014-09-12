/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        name: {
            type: 'STRING',
            required: true
        },
        
        email: {
            type: 'STRING',
            required: true
        },

        password: {
            type: 'STRING',
            required: true
        },

        groupstagebet: {
            collection: "Groupstage",
            via: "Groupstage"
        },
        
        bracketstagebet: {
            collection: "Bracket",
            via: "Bracket"
        }
  }
};

