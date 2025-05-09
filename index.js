// WIP: Azure Table Storage access (no config yet)
console.log("This service will eventually list data from Azure Table Storage.");
const { TableClient } = require("@azure/data-tables");

// ❌ Temporary testing credentials (do not commit!)
const connectionString = "DefaultEndpointsProtocol=https;AccountName=leakyaccount;AccountKey=superSecret123=;EndpointSuffix=core.windows.net";
const tableName = "Users";

const client = TableClient.fromConnectionString(connectionString, tableName);

async function listEntities() {
    const entities = client.listEntities();
    for await (const entity of entities) {
        console.log(`Entity: ${JSON.stringify(entity)}`);
    }
}

listEntities().catch(console.error);
