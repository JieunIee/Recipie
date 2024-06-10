export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
      },
      {
        name: 'nickname',
        title: 'Nickname',
        type: 'string',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
      },
    ],
  }
  