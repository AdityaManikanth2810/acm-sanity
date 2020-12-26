export default {
    name: 'coordinatorDetails',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
        }
    ]
}