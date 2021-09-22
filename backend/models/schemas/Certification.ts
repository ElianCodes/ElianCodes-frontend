import * as mongoose from 'mongoose'

export const CertificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    infoLink: {
        type: String,
        required: false,
    },
    note: {
        type: String,
        required: false,
    }
})