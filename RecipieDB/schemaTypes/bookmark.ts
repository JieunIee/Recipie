export default {
    name: 'bookmark',
    title: 'Bookmark',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{type: 'user'}],
      },
      {
        name: 'recipe',
        title: 'Recipe',
        type: 'reference',
        to: [{type: 'recipe'}],
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm:ss',
          calendarTodayLabel: 'Today'
        }
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    }
  }
  