const path = require('path');
const rootPath = __dirname;
module.exports = {
  database: 'mongodb://localhost/testMyWay',
  options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  },
    rootPath,
    uploadAvatarDriverPath: path.join(rootPath, '/public/uploads/avatar/drivers'),
    uploadAvatarClientPath: path.join(rootPath, '/public/uploads/avatar/client'),
    uploadAvatarAdminPath: path.join(rootPath, '/public/uploads/avatar/admin'),
};