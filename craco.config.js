const path = require('path');
const CracoLessPlugin = require("craco-less");

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
        components: path.resolve(__dirname, 'src/components/'),
      }
    }

  },
  plugins:[
    { plugin: CracoLessPlugin }
  ]
}

