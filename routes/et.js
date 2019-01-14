var axios = require('axios');
var constants = require('./../config/constants');
var etconfig = require('./../config/et-config');
/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // axios.post('http://requestbin.fullcontact.com/1d92cvz1', {body: req.params, from: 'edit'})
    // .then(function(x){
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    // .catch(function(x) {
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    res.send( 200, {success: 'OK', body: req.params} );
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // axios.post('http://requestbin.fullcontact.com/1d92cvz1', {body: req.params, from: 'save'})
    // .then(function(x){
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    // .catch(function(x) {
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    res.send( 200, {success: 'OK', body: req.params} );
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    axios.post(constants.webhookEndpoint, {
        "activityObjectID": req.body.activityObjectID,
        "journeyId": req.body.journeyId,
        "activityId": req.body.activityId,
        "definitionInstanceId": req.body.definitionInstanceId,
        "activityInstanceId": req.body.activityInstanceId,
        "contact": req.body.keyValue,
    })
        .then(function(x){
            res.send( 200, {success: 'OK', params: x, body: req.body} );
        })
        .catch(function(x) {
            res.send( 200, {success: 'OK', params: x, body: req.body} );
        })
};

/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // axios.post('http://requestbin.fullcontact.com/1d92cvz1', {body: req.params, from: 'publish'})
    //     .then(function(x){
    //         res.send( 200, {success: 'OK', params: x, body: req.params} );
    //     })
    //     .catch(function(x) {
    //         res.send( 200, {success: 'OK', params: x, body: req.params} );
    //     })
    res.send( 200, {success: 'OK', body: req.params} );
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    // axios.post('http://requestbin.fullcontact.com/1d92cvz1', {body: req.params, from: 'validate'})
    // .then(function(x){
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    // .catch(function(x) {
    //     res.send( 200, {success: 'OK', params: x, body: req.params} );
    // })
    res.send( 200, {success: 'OK', body: req.params} );
};

exports.config = function( req, res ) {
    res.send( 200, etconfig );
}

function logData( req ) {
    // exports.logExecuteData.push({
    //     body: req.body,
    //     headers: req.headers,
    //     trailers: req.trailers,
    //     method: req.method,
    //     url: req.url,
    //     params: req.params,
    //     query: req.query,
    //     route: req.route,
    //     cookies: req.cookies,
    //     ip: req.ip,
    //     path: req.path,
    //     host: req.host,
    //     fresh: req.fresh,
    //     stale: req.stale,
    //     protocol: req.protocol,
    //     secure: req.secure,
    //     originalUrl: req.originalUrl
    // });
}