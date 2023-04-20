# seekerpro
GPS Tracker IoT Project

To run this project you must create the following files:  
- `.env` which contains your Google maps API key

- `.firbaserc` which contains your Firebase project ID  
```
{
  "projects": {
    "default": "{your Firebase project ID}"
  }
}
```

- And within the `src` directory create a `firebase.js` file with the following format:
```
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
```

Then run `npm install` to generate the `node_modules` folder with all the appropriate dependencies.  

Then run `npm run dev` to try out the app.
