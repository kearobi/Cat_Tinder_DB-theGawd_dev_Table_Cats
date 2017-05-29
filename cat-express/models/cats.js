'use strict';
module.exports = function(sequelize, DataTypes) {
//**(4.1) in our model we have a detail of our form input data. When 'Cat' is called during the server call (catParams) is passed in
  var Cat = sequelize.define('Cat', {
//** sequelize.define takes the DB TABLE settings and interprits the JSON string form input data and returns a promise
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    habitat: DataTypes.STRING,
    personality: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {

//** A promise with a display instance for veiwability. We can dictate which feilds are returned.

    instanceMethods: {
      toJSON(){
        return {
          color: this.get('color'),
          breed: this.get('breed'),
          gender: this.get('gender'),
          habitat: this.get('habitat'),
          personality: this.get('personality'),
          age: this.get('age')
        }
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  //** Cat is retured.
  return Cat;
};
