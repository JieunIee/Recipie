// schemas/recipeBook.ts
export default {
    name: 'recipeBook',
    title: 'Recipe Book',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'user'}],
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm:ss',
          calendarTodayLabel: 'Today',
        },
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm:ss',
          calendarTodayLabel: 'Today',
        },
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  }
  