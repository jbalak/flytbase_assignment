# Flytbase assignment

I have wrote a clean, very readable and maintainable code in this assignment

Added simple username and password and JWT based authentication system for

I have focused on deviding each module saperate so that each module wont break other module
when we change anything in our code.
eg.

1. The business logic is stored in services/ folder.
2. The data access logic is stored in dataAccess/ folder
3. models/ folder will host schema for the app
4. middlewares/ will hold some middlewares like auth, rate limit and err middlewares etc
   With this saperation if we ever change the database from mongo to some other database our business logic wont be affected very much because of the saperation.
5. Added logs as well so we get better view with errs etc.

Along with this adding a postman collection for api references

POSTMan Link- https://api.postman.com/collections/17347561-34a3f04c-e3d5-4788-8142-bc89995bbcee?access_key=PMAT-01GWVC6X2ZTFP45VMPWJE09V4E

Each postmans folder will have saperate folder which has apis for each module from the assignment
like
Auth/ folder will have auth apis
Drones/ will have all apis for drone data
Sites/ for sites
Sites/SiteDrone/ for APIS of all drone belong to particular site
Mission/ for mission apis
Categories/ for all categories api

## Installations

1.  Add .env file on rool level

    - PORT=3001

    - JWT_SECRET={secret}

    - MONGO_URI="mongodb://localhost:27017/flybase"

2.  npm i

3.  npm run dev
