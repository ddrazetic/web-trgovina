const Article = require('./model/Article')
const Category = require('./model/Category')
const User = require('./model/User')
const Order = require('./model/Order')

Category.hasMany(Article);
Article.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);