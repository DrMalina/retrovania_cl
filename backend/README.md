# retrovania (backend)
This dir contains the backend section of the retrovania app.

The backend section of the app is independent of the frontend section in the sense that it doesn't require it running to get started itself. It is recommended, however, to start them both at the same time. The scripts for that, as well as the devDependencies like `concurrently`, should be provided in a separate pull requests later on.

## Starting the backend section alone
### Installing dependencies and devDependencies
Install the dependencies and devDependencies:

```
cd backend
npm i
```

### Providing .env files
Please make sure that the `dev.env` and `test.env` files are included in Your `backend/src/config/` dir. If not, download them from the project's slack channel. The `.env` files are required to start the application.

### Starting the app
In the `backend` dir:

```
npm run dev
```

to run the backend section.
