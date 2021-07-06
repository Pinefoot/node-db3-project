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
    
    .select('steps.id','steps.step_number', 'steps.instructions','schemes.scheme_name')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .orderBy('steps.step_number')
    .where({scheme_id:id})
    
}

function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
    .then(ids =>{
        return findById(ids[0])
    })
}

function update(changes, id){
    return db('schemes').where({id}).update(changes)
}

function remove(id){
    return db('schemes').where({id}).del()
}