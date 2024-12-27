const ghpages = require('gh-pages');
const path = require('path');

// 部署配置
ghpages.publish(path.resolve(__dirname, '../demo'), {
  branch: 'gh-pages',
  message: 'deploy: examples site',
  repo: `https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`,
}, function (err) {
  if (err) {
    console.error('部署失败:', err);
  } else {
    console.log('同步到 gh-pages 分支成功！');
  }
});
