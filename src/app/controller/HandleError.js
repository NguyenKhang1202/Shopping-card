class HandleError {
    handleError(err, req, res,next){
        // res.status(err.status || 500);
        res.render('error',{
            message: err.message,
            error: {
                status: err.status || 500,
            },
            layout: 'err',
            css : ['err.css'],
            title : 'Error',
        });
    }
}

module.exports = new HandleError;
