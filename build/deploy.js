const ghpages = require('gh-pages');


ghpages.publish('./demo', {
  branch: 'gh-pages',
  message: "deploy: examples site",
}, function () {
  console.log('同步gh-pages成功!');
});