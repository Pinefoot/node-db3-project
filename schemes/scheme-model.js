const db = require('../data/dbConnection.js')

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id}).first()
}

function findSteps(id){
    return db('steps')
}

function add(){

}

function update(){

}

function remove(){

}