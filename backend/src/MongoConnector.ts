import * as mongoose from 'mongoose';

export class MongoConnector {
  public static get uri(): string {
    const host = process.env.MONGODB_HOST || 'localhost';
    const user = process.env.MONGODB_USERNAME;
    const pass = process.env.MONGODB_PASSWORD;
    const db = process.env.MONGODB_DATABASE || 'test';
    const port = process.env.MONGODB_PORT || '27017';

    const auth = user && pass ? `${user}:${pass}@` : '';
    return `mongodb://${auth}${host}:${port}/${db}`;
  }

  public static async connect() {
    console.log('Connecting to MongoDB', this.uri);
    await mongoose.connect(this.uri, {}).then(() => {
      console.log('Connected to MongoDB');
    });
  }

  public static disconnect() {
    return mongoose.disconnect();
  }
}
