/**
* Match.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        teams: {
            collection: 'Team',
            via: 'Team'
        },
        winnerName: {
            type: 'string'
        },
        loserName: {
            type: 'string'
        }
  }
};

