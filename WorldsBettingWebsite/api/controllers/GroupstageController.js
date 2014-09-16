/**
 * GroupstageController
 *
 * @description :: Server-side logic for managing groupstages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    groups: function (req,res) {
        var name = req.param('name');
        if(name) {
            findOne({
                name: this.name
            }).exec(function (err,groupstage){
                res.json(groupstage.groups);     
            });
        }

    }
};

