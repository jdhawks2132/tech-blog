![Preview](public/images/Blog%20Preview.png)

<div align='center'>

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-FF6F61?style=for-the-badge&logo=handlebars.js&logoColor=white)

</div>

# Hawks Tech Blog

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built using the MVC paradigm in mind, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installing Dependencies

To install the necessary dependencies, run the following command:

```
npm i
```

## MySQL Database Setup

To set up the database, run the following command:

```
mysql -u root -p
```

Then, source the schema.sql file:

```
source db/schema.sql
```

Finally, seed the database:

```
source db/seeds.sql
```

## Create a .env file

Create a .env file in the root directory of the project and add the following:

```
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW='your password'
```
