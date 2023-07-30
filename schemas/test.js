export default {
    name: 'test',
    title: 'Test',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ],
}