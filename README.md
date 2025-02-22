# TutorFlow-server_3.0

# Setup Database

In MySQL, type these commands in sequence:

1. Create database:

   `CREATE DATABASE tutorflow30;`

1. Create user and grant access:

   `CREATE USER '[username]'@'localhost' IDENTIFIED WITH mysql_native_password BY '[password]';`

   `GRANT ALL PRIVILEGES ON tutorflow30.* TO '[username]'@'localhost';`

Back to Project root folder:

1. There will be `models`, `seeders` and `config` folder. Open file `config/config.json` and fill in the `"username"`, `"password"`, and `"database"` as in MySQL.

        // config/config.json
        {
            "development": {
                "username": "[username]",
                "password": "[password]",
                "database": "tutorflow30",
                "host": "127.0.0.1",
                "dialect": "mysql"
            },
            "test": {
                "username": "[username]",
                "password": "[password]",
                "database": "tutorflow30",
                "host": "127.0.0.1",
                "dialect": "mysql"
            },
            "production": {
                "username": "[username]",
                "password": "[password]",
                "database": "tutorflow30",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }

1. Then, migrate tables and data into MySQL:

    `npx sequelize-cli db:migrate`

    `npx sequelize-cli db:seed:all`