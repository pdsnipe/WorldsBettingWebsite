/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = {

  attributes: {
        groupLetter: {
            type: 'string',
            required: 'true'
        },

        hasTeams: {
            collection: 'team',
            via: 'inGroup'
        },

        inGroupStage: {
            model: 'groupstage'
        },

        hasMatches: {
            collection: 'match',
            via: 'group'
        },

        groupBets: {
           collection: 'GroupBet',
           via: 'forGroup'
        }
  }
};

