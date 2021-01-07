export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'what',
            title: 'What',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'id',
            title: 'ID',
            type: 'slug',
            options: {
                source: 'what',
                maxLength: 50,
            },
        },
        {
            name: 'where',
            title: 'Where',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'when',
            title: 'When',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'poster',
            title: 'Poster',
            type: 'image',
            options: {
                hotspot: true,
                storeOriginalFilename: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'upcoming',
            title: 'Upcoming',
            type: 'boolean',
            validation: Rule => Rule.required()
        },
        {
            name: 'aboutEvent',
            title: 'About the Event',
            type: 'blockContent',
            validation: Rule => Rule.required()
        },
        {
            name: 'chiefGuests',
            title: ' Chief Guest/ Speakers',
            type: 'array',
            of: [
                {
                    name: 'details',
                    title: 'Details',
                    type: 'guestDetails',
                },
            ]
        },
        {
            name: 'coordinators',
            title: ' Coordinators',
            type: 'array',
            of: [
                {
                    name: 'details',
                    title: 'Details',
                    type: 'coordinatorDetails',
                },
            ]
        }
    ],
    initialValue: {
        upcoming: true
    }
}