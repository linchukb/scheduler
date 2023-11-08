const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

const checkUserExists = async (username, email) => {
    const query = 'SELECT * FROM users WHERE username = $1 OR email = $2';
    const values = [username, email];
    try {
        const result = await pool.query(query, values);
        return result.rows.length > 0;
    } catch (error) {
        throw new Error(`Error checking user: ${error.message}`);
    }
};

const createUser = async (userData) => {
    const { username, email, password } = userData;

    if (await checkUserExists(username, email)) {
        throw new Error('Username or email already exists');
    }

    // It's important to hash passwords before storing them
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, username, email;  -- Returns the new user's id, username, and email
    `;

    try {
        const result = await pool.query(query, [username, email, hashedPassword]);
        return result.rows[0];  // Return the new user's data
    } catch (error) {
        throw new Error(`Unable to create user: ${error.message}`);
    }
};

const findUserByUsername = async (username) => {
    const query = 'SELECT * FROM users WHERE username = $1 or email = $1 LIMIT 1;';
    const values = [username];

    try {
        const result = await pool.query(query, values);
        // If a user is found, return the user data; otherwise, return null
        return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
        throw new Error(`Error finding user by username: ${error.message}`);
    }
};

module.exports = {
    createUser,
    findUserByUsername,
};