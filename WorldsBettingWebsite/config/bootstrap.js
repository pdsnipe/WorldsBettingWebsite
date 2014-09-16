/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  //Group.findOne(1).exec(function(err, group){
    //console.log(group.groupLetter);
    //if(err)

      //Team.findOne(1).exec(function(err, team){
        //if(err)

        //group.hasTeams.add(team);
      //});
  //});
  //GroupStageBet.update({id: 1},{owner: 2}).exec(function(err,users){});
  //User.destroy(1).exec(function(err,users){});
  User.create({
      username: 'testuser2',
      name: 'testuser2',
      email:'testuser2@testuser1.com',
      
    }).exec(function(err, groupBet){});
  sails.services.passport.loadStrategies();
  cb();
};
