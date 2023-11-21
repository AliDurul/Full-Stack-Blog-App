"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { Schema, model } = require('mongoose')
/* ------------------------------------------------------- *
{
  "name": "AI"
}
/* ------------------------------------------------------- */
// Token Model:

const ViewSchema = new Schema({

    post_id: {
        type: Schema.Types.ObjectId,
        ref:'Blog',
        required: true
    }, 
    viewedBy:{
        type: Array,
        default: [],
    }

}, { collection: 'views', timestamps: true })

/* ------------------------------------------------------- */
module.exports = model('View', ViewSchema)