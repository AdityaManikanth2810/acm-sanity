export default {
    name: 'facultyAdvisor',
    title: 'Faculty Advisor',
    type: 'document',
    fields: [
        {
            name: 'details',
            title: 'Details',
            type: 'member',
        },
        {
            name: 'collegeDesignation',
            title: 'College Designation',
            type: 'string'
        }
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