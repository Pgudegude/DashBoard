const PROXY_CONFIG =
[
{
    context: ['/api'],
    target: 'http://localhost:8080/dash',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api' : ' '}
}
];

module.exports = PROXY_CONFIG;