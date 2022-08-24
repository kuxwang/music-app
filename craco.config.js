const path = require('path');

module.exports = {
  style: {
    // postcss:{
    //   mode:"file"
    // }
  },
  webpack:{
    resolve: {
      alias: {
        pages: path.resolve(__dirname, 'src/pages/'),
      }
    }

  }
}

