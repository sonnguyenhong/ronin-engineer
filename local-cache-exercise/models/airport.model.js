const { model, Schema, Types } = require('mongoose');

const DOCUMENT_NAME = 'Airline';
const COLLECTION_NAME = 'Airlines';

// Declare the Schema of the Mongo model
var airlineSchema = new Schema(
    {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
);

//Export the model
module.exports = model(DOCUMENT_NAME, airlineSchema);