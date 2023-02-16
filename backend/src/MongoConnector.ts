import * as mongoose from 'mongoose';

export class MongoConnector {
  public static async connect() {
    const host = process.env.MONGODB_HOST || 'localhost';
    const user = process.env.MONGODB_USERNAME;
    const pass = process.env.MONGODB_PASSWORD;
    const db = process.env.MONGODB_DATABASE || 'test';
    const port = process.env.MONGODB_PORT || '27017';

    // Extract the hostname part of the URI
    const hostname = host.includes('://') ? host.split('/')[2] : host.split('/')[0];

    const auth = user && pass ? `${user}:${pass}@` : '';
    const uri = `mongodb://${auth}${hostname}:${port}/${db}`;
    console.log('Connecting to MongoDB', uri);
    await mongoose.connect(uri, {}).then(() => {
      console.log('Connected to MongoDB', db);
    });
  }

  public static disconnect() {
    return mongoose.disconnect();
  }
}
