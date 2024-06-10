// schemas/recipe.ts
export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'ingredients',
        title: 'Ingredients',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'instructions',
        title: 'Instructions',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image'}],
      },
      {
        name: 'recipeBook',
        title: 'Recipe Book',
        type: 'reference',
        to: [{type: 'recipeBook'}],
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
  