/**
* Team.js
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

    region: {
        type: 'string',
        required: true
    },

    seed: {
        type: 'integer',
        required: true
    },
    
    inGroup: {
        model: 'group'
    },

    matches: {
        collection: 'match',
        via: 'teamsInMatch',
        dominant: true
    },

    groupPlacing: {
        type: 'integer'
    },

    groupBetFirstPlace: {
        collection: 'GroupBet',
        via: 'firstPlace'
    },
    groupBetSecondPlace: {
        collection: 'GroupBet',
        via: 'secondPlace'
    },
    groupBetThirdPlace: {
        collection: 'GroupBet',
        via: 'thirdPlace'
    },
    groupBetFourthPlace: {
        collection: 'GroupBet',
        via: 'fourthPlace'
    }

  }
};

