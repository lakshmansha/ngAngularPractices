const { app } = require('@azure/functions');

app.http('GetConfig', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const config = {
            "EnvName": process.env['EnvName'],
            "IsFirebase": process.env['IsFirebase'],
            "FireBaseAPIKey": process.env['FireBaseAPIKey'],
            "IsRestAPI": process.env['IsRestAPI'],
            "RESTLoggingUrl": process.env['RESTLoggingUrl']
        }

        return { body: config };
    }
});
