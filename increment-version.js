// auto update package version to the argo-ui 1.0.0 to 1.0.1

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

const newVersion = packageJson.version.replace(/(\d+)$/, (match, p1) => {
    return parseInt(p1) + 1;
});

packageJson.version = newVersion;
fs.writeFileSync
(
    packageJsonPath,
    JSON.stringify(packageJson, null, 4)
);

console.log(`Updated version to ${newVersion}`);


