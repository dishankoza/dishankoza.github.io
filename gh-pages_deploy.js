const ghPages = require('gh-pages');

ghPages.publish(
  'public', {
    user: {
      name: 'Dishank Oza',
      email: 'dishankoza@outlook.com'
    },
    branch: 'master',
    message: 'Deploy commit from gh-pages',
  }, (success, error) => console.log(success, error)
);