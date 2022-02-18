module.exports = {
  development: {
    client: "sqlite3",

    connection: {
      filename: "./data/recipes.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    useNullAsDefault: true, // needed for sqlite
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
