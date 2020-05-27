const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function insert(user) {
    user.password = await bcrypt.hash(user.password, 12)
    const [ id ] = await db("entrepreneur").insert(user)
        return findById(id)
}

function list() {
    return db("entrepreneur")
    .select("id", "firstname", "lastname")
}


function findBy(filter) {
    return db("entrepreneur")
        .select("id", "username", "password")
        .where(filter)
}

function findById(id) {
    return db("entrepreneur")
        .where({ id })
        .first()
}


// async function update(id, changes) {
//     await db("entrepreneur")
//         .where({ id })
//         .update(changes)
//         .returning("id")
//         return findById(id)
// }



function remove(id) {
    return db("entrepreneur")
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