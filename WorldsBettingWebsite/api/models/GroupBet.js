/**
* GroupBet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        inGroupStageBet: {
            model: 'GroupStageBet'
        },

        forGroup: {
            model: 'group'
        },

        firstPlace: {
            model: 'team'
        },

        secondPlace: {
            model: 'team'
        },

        thirdPlace: {
            model: 'team'
        },

        fourthPlace: {
            model: 'team'
        },

        
  }
};

