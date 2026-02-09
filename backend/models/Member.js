const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    address: {
        type: String,
        trim: true
    },
    interests: [{
        type: String,
        enum: ['education', 'healthcare', 'women-empowerment', 'environment', 'outreach', 'admin']
    }],
    availability: {
        type: String,
        enum: ['weekdays', 'weekends', 'evenings', 'flexible']
    },
    message: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);
