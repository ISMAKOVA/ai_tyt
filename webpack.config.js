const path = require("path");

module.exports={
    mode: "development", 
    entry: "./src/index.tsx", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: '/public/'
    },
    module:{
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                },
                use: 'ts-loader',
            }
        ]
    }
}