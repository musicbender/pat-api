const databaseConf = {
  "username": PATAPI_DB_USER || 'root',
  "password": PATAPI_DB_PASSWORD || '',
  "database": PATAPI_DB_NAME,
  "host": PATAPI_DB_HOST,
  "dialect": "mysql",
  "operatorsAliases": false
}

export default databaseConf;
