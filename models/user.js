'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

//Libreria para hashear contraseñas
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true},
  displayName: String,
  avatar: String,
  password: { type: String, select: false },  //asi la contraseña no la envia al cliente
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
})

//mongosee ofrece funciones que se ejecutan antes o despues de ingresar datos a la base de datos,
//asi se hasheara la contraseña antes de guardar

UserSchema.pre('save', (next) =>{
  let user = this
  //if(!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
  if (err) return next()

  bcrypt.hash(user.password, salt, null, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})
})

UserSchema.methods.gravatar = function (){
  if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  //npm i crypto
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
