const { exec, fork } = require('child_process');

fork("./src/server.js")

exec("npm run parcel")

