//pg queries of User table to interact with db.
const database = require('../config/db');

//checking the status of the User in the database for subscription given a userId
exports.checkStatus = async(userName) => { 
  try {
  const {rows} = await database.query(
    `SELECT status
     FROM "Users"
     WHERE username = $1
    `,
    [userName]
  );
  //user not found
  if (rows.length === 0) 
    return false;
  return rows[0].status === 'active';
  } 
  catch (err) {
    console.error('DB error in checkStatus:', err);
    throw err; 
  }
};

exports.activateSubscription = async(userName) => { 
    await database.query(
      `UPDATE Users
      SET status="active"
      WHERE username=$1`,
    [userName]
    );
}

exports.deactivateSubscription = async(userName) => { 
    await database.query(
      `UPDATE Users
      SET status="deactive"
      WHERE username=$1`,
    [userName]
    );
}