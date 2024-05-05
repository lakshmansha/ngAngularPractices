module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const config = {
        "EnvName": process.env['EnvName'],
        "IsFirebase": process.env['IsFirebase'],
        "FireBaseAPIKey": process.env['FireBaseAPIKey'],
        "IsRestAPI": process.env['IsRestAPI'],
        "RESTLoggingUrl": process.env['RESTLoggingUrl']
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: config
    };
}