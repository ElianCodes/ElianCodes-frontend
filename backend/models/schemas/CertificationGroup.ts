import * as mongoose from 'mongoose'

export const CertificationGroupsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    certifications: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Certification'}],
        required: false
    }
})