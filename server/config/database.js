const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   database: process.env.DB,
//   password: process.env.PASS,
// });

const pool = mysql.createConnection(process.env.DATABASE_URL);

let registration = `CREATE TABLE IF NOT EXISTS registration (
  user_id int AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY (user_name)
);`;

let profile = `CREATE TABLE IF NOT EXISTS profile (
  user_profile_id int AUTO_INCREMENT,
  user_id int NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_profile_id)

);`;

let question = `CREATE TABLE IF NOT EXISTS question (
  question_id int AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  question_description VARCHAR(255),
  question_code_block VARCHAR(255),
  tags VARCHAR(255),
  user_id int NOT NULL,
  PRIMARY KEY (question_id)

);`;

let answer = `CREATE TABLE IF NOT EXISTS answer (
  answer_id int AUTO_INCREMENT,
  answer VARCHAR(255) NOT NULL,
  answer_code_block VARCHAR(255),
  user_id int NOT NULL,
  question_id int NOT NULL,
  PRIMARY KEY (answer_id)
);`;
pool.query(registration, (err, results) => {
  if (err) throw err;
  console.log("registration table created");
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(question, (err, results2) => {
  if (err) throw err;
  console.log("question table created");
});
pool.query(answer, (err, results2) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;
