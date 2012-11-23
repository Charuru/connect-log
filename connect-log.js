if (Meteor.isServer) {
  var app = __meteor_bootstrap__.app
  var require = __meteor_bootstrap__.require
  var connect = require('connect')
  app.use(connect.logger())
  console.log('connect log')
}