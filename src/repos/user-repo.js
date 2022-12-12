const pool = require('../pool');

class UserRepo {
  static async find() {
    const { rows } = await pool.query('SELECT * FROM public.users');

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM users WHERE id = $1
    `,
      [id]
    );

    return rows[0];
  }

  static async insert(username, bio, email) {
    const { rows } = await pool.query(
      'INSERT INTO users (username, bio, email) VALUES ($1, $2, $3) RETURNING *;',
      [username, bio, email]
    );

    return rows;
  }

  static async update(id, username, bio, email) {
    const { rows } = await pool.query(
      'UPDATE users SET username = $2, bio = $3, email = $4 WHERE id=$1 RETURNING *;',
      [id, username, bio, email]
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *;',
      [id]
    );

    return rows[0];
  }
}

module.exports = UserRepo;
