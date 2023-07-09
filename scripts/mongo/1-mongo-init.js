const adminDatabase = db.getSiblingDB("admin");

adminDatabase.createUser({
  user: "recipesharing_user",

  pwd: "recipesharing_password",

  roles: [
    {
      role: "readWrite",

      db: "recipesharing",
    },
  ],
});

const tsmdb = db.getSiblingDB("recipesharing");

tsmdb.createCollection("delete_this");
