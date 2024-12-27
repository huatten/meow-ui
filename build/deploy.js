const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.resolve(__dirname, '../dist'), {
  branch: 'gh-pages',
  message: 'deploy: examples site',
  repo: `https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`,
  user: {
    name: process.env.GITHUB_ACTOR || 'github-actions', // 使用 GitHub Actions 默认的 GITHUB_ACTOR
    email: 'github-actions@github.com',                // 使用 GitHub 提供的通用邮箱
  },
}, function (err) {
  if (err) {
    console.error('部署失败:', err);
  } else {
    console.log('同步到 gh-pages 分支成功！');
  }
});
