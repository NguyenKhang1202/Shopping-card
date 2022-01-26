module.exports = function(req, res, next) {
    res.locals._sort = {
        sort : false,
        type : 'default',
        column : 'default',
    }

    if(req.query.hasOwnProperty('_sort')){
        Object.assign(res.locals._sort, {
            sort : true,
            type : req.query.type,
            column : req.query.column,
        })
    }
    next();
}