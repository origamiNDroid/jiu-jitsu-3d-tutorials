const app_name = 'jiu-jitsu-3d-tutorials'
exports.buildPath =
function buildPath(route)
{
    if (process.env.NODE_ENV === 'production')
        return 'https://' + app_name + 'herokuapp.com/' + route;
    else
        return 'http://localhost:5000/' + route;
}