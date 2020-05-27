const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function insert(user) {
    user.password = await bcrypt.hash(user.password, 12)
    const [ id ] = await db("backer").insert(user)
        return findById(id)
}

function list() {
    return db("backer")
    .select("id", "firstname", "lastname")
}

function findBy(filter) {
    return db("backer")
        .where(filter)
}

function findById(id) {
    return db("backer")
        .where({ id })
        .first()
}


// async function update(id, changes) {
//     await db("backer")
//         .where({ id })
//         .update(changes)
//         .returning("id")
//         return findById(id)
// }



function remove(id) {
    return db("backer")
        .where({ id })
        .del()
}

module.exports = {
    list,
    findBy,
    findById,
    insert,
    remove,
}