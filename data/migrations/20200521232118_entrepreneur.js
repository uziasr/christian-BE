
exports.up = async function(knex) {
    await knex.schema.createTable("entrepreneur", (table) => {
        table.increments("id")
        table.string("username", 280).notNull().unique()
        table.string("password", 280).notNull()
        table.string("FirstName", 280).notNull()
        table.string("LastName", 280).notNull()
        table.string("address", 280).notNull()
        table.string("phone").notNull()
        table.string("email", 280).notNull()
    })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("entrepreneur")
  }
  