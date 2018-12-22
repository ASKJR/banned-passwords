const blacklist = require('./data/twitter-banned-list')

exports.contains = (password) => {
    return (blacklist.indexOf(password) == -1 ? false : true);
}

exports.all = () => {
    return blacklist;
}