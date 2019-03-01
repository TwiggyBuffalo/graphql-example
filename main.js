const { exec, fork } = require('child_process');

fork("./src/graphql1.js")

exec("npm run parcel")

