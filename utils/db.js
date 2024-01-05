import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("users.db");

export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password INTEGER)'
    );
  });
};

// db.transaction((tx) => {
//   tx.executeSql('PRAGMA table_info(users);', [], (_, { rows }) => {
//     console.log(rows);
//   });
//  });

// db.transaction((tx) => {
//   tx.executeSql('DROP TABLE IF EXISTS users;');
//   tx.executeSql(
//     'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password INTEGER)'
//   );
//  });
  

export const saveUser = (username, password) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password],
      (_, result) => {
        console.log("User saved successfully:", result);
      },
      (_, error) => {
        console.error("Error saving user:", error);
      }
    );
  });
};

export const checkUser = (username, password, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (_, { rows }) => {
        if (rows.length > 0) {
          callback(true);
        } else {
          callback(false);
          console.log("User not found");
        }
      },
      (_, error) => {
        console.error("Error checking user:", error);
      }
    );
  });
};
