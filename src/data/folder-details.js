const folderDetails = {
  name: 'Root',
  isFolder: true,
  items: [
    {
      name: 'node_modules',
      isFolder: true,
      items: [
        {
          name: 'lib-1',
          isFolder: true,
          items: [
            {
              name: 'lib-1-file',
              isFolder: false,
            },
          ],
        },
        {
          name: 'lib-2',
          isFolder: false,
        },
      ],
    },
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'favicon.ico',
          isFolder: false,
        },
        {
          name: 'index.html',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'components',
          isFolder: true,
          items: [
            {
              name: 'folder.js',
              isFolder: false,
            },
          ],
        },
        {
          name: 'app.js',
          isFolder: false,
        },
        {
          name: 'app.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
    {
      name: 'package.lock.json',
      isFolder: false,
    },
    {
      name: 'readme.md',
      isFolder: false,
    },
  ],
};

export default folderDetails;
