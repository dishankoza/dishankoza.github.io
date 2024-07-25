const ghPages = require('gh-pages');

ghPages.publish(
  'public', {
    user: {
      name: 'Dishank Oza',
      email: 'dishankoza@outlook.com'
    },
    branch: 'develop',
    message: 'Deploy commit from gh-pages',
  }, (success, error) => console.log(success, error)
);