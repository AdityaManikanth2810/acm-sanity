export default {
    name: 'guestDetails',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}