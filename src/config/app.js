require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  DATABASE_NAME: process.env.DB_NAME,
  DATABASE_USER: process.env.DB_USER,
  DATABASE_PASSWORD: process.env.DB_PASSWORD,
  APP_PORT: process.env.APP_PORT,
  BODY_PARSER_LIMIT: process.env.BODY_PARSER_LIMIT,
  BODY_PARAMETER_LIMIT: Number(process.env.BODY_PARAMETER_LIMIT),
}