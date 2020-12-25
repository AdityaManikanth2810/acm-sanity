export default {
    name: 'teamMember',
    title: 'Ex Com',
    type: 'document',
    fields: [
        {
            name: 'details',
            title: 'Details',
            type: 'member',
        },
    ],
    preview: {
        select: {
            name: 'details.name',
            media: 'details.image',
            designation: 'details.designation'
        },
        prepare(selection) {
            const { name, media, designation } = selection;
            return {
                title: name,
                media: media,
                subtitle: designation
            };
        }
    }
}