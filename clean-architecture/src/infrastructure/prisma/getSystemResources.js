const path = require('path');
const fs = require('fs/promises');
const fsSync = require('fs');

const RESOURCE_ACTION = {
    LIST: 'list',
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete'
}

const schemaFilePath = path.join(__dirname, 'schema.prisma');
console.log(schemaFilePath);
if(fsSync.existsSync(schemaFilePath)) {
    console.log('Schema File Path Existed');
} else {
    console.log('Schema File Path Not Existed');
}

const convertResourceToLowerCase = (resource) => {
    return resource.toLowerCase();
} 

const getSystemResources = async () => {
    const data = await fs.readFile(schemaFilePath, { 
        encoding: 'utf-8' 
    });
    const dataArray = data.split('\n');
    const resources = [];
    for(const data of dataArray) {
        if(data.startsWith("model") && data[data.length - 1] === '{') {
            const resource = convertResourceToLowerCase(data.split(' ')[1]);
            const actions = Object.keys(RESOURCE_ACTION);
            for(const action of actions) {
                resources.push(`${resource}:${RESOURCE_ACTION[action]}`);
            }
        }
    }
    return resources;
}

// (async () => await getSystemResources())();
module.exports = getSystemResources;