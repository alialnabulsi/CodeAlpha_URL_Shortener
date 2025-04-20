// models/associations.js
const Click = require('./clicksModel');
const UserShortUrl = require('./userShortUrlsModel');
const AnonymousShortUrl = require('./anonymousShortUrlsModel');

// Logical association (no database FOREIGN KEY)
Click.belongsTo(UserShortUrl, {
  foreignKey: 'short_code',   
  targetKey: 'short_code',    
  constraints: false          //No DB-level constraint
});

Click.belongsTo(AnonymousShortUrl, {
  foreignKey: 'short_code',   
  targetKey: 'short_code',    
  constraints: false          
});