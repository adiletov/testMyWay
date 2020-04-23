export const driver = {
    phoneNumber: {
        type: Number,
        required: true
    },
    activeStatus: {
        type: String,
        enum: ['в пути', 'занят', 'свободен'],
        required: true
    },
    carBrand: {
        type: String,
        required: true
    },
    governmentNumber: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    yearOfIssue: {
        type: Number,
        required: true
    },
    carColor: {
        type: String,
        required: true
    },
    optionalEquipment: [String],
    insurance:{
        type: String,
        required: true
    }
};