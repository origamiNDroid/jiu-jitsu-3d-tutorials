const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb+srv://bjj-admin:bjj-admin@cluster0.kflwd.mongodb.net/Cluster0?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try 
  {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  } 
}

main().catch(console.error);
