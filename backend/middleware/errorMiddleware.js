const errorHandler = (err, req, res, next) => {
    //This means that if we dont use res.status in goalController we would give 500 response what means an server error
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = {
    errorHandler
}