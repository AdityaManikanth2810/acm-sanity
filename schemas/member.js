export default {
    title: 'Member',
    name: 'member',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(5).max(20)
        },
        {
            name: 'designation',
            title: 'Designation',
            type: 'string',
            validation: Rule => Rule.required().max(20)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
                storeOriginalFilename: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'links',
            title: 'Social Media Links',
            type: 'links'
        }
    ],

}