import * as mongoose from 'mongoose';

export class MongoConnector {
  public static async connect() {
    await mongoose.connect(process.env.MONGODB_URI!, {}).then(() => {
      const indexOfA = process.env.MONGODB_URI!.indexOf('@');
      const db =
        indexOfA !== -1
          ? process.env.MONGODB_URI!.substring(0, 10) + '!_:_!' + process.env.MONGODB_URI!.substring(indexOfA)
          : process.env.MONGODB_URI;
      console.log('Connected to MongoDB', db);
    });
  }

  public static disconnect() {
    return mongoose.disconnect();
  }
}
