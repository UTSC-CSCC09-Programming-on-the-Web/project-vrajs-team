//pg queries of User table to interact with db.

const database = require("../config/db");
//DB query to check whether the user exists or not 
exports.userExists = async(userName) =>  { 
  const { rows } = await database.query(
    `SELECT 1
    FROM "Users"
    WHERE username=$1`,
    [userName]
  );
  if(rows[0])
    return true;
  return false;
}

//DB query to input user into our Users table
exports.insertUser = async(userName,hashedPassword)=>  { 
  await database.query(
    `INSERT INTO "Users" (username,password_hash)
    VALUES ($1,$2)`,
    [userName,hashedPassword]
  );
}