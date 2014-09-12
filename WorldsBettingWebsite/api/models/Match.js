/**
* Match.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        teamsInMatch: {
            collection: 'team',
            via: 'matches'
        },
        group: {
            model: 'group'
        },
        winnerName: {
            type: 'string'
        },
        loserName: {
            type: 'string'
        },
        winnerScore: {
            type: 'integer'
        },
        loserScore: {
            type: 'integer'
        }

  }
};

