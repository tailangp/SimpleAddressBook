:: start mongodb server
:: Download Mongodb from https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl & install in C:\mongodb 
:: Create a folder C:\data\db
::START /min /B "Mongo DB" c:\mongodb\bin\mongod.exe
:: start development server, http://localhost:3000
START /min /B "Node Monitor" node_modules\.bin\nodemon
:: open sites
START C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe http://localhost:3000
:: lint tslint 
REM CALL ./node_modules/.bin/tslint -c "tslint.json" "src\ts\**\*.tsx" "src\ts\**\*.ts" "routes\ts\**\*.ts" -e "src\ts\typings\**"
::START iexplore.exe http://localhost:3000
:: compile server side js
START /min /B "Watch Server TS" node_modules\.bin\tsc -w
:: compile client side test js
::START /min /B "Watch Client TS TEST" node_modules\.bin\tsc -p src\ts\tests -w
:: compile SCSS
::CALL ./node_modules/.bin/node-sass "src\scss\app.scss" "public\css\app1.css" -r --include-path="node_modules\foundation-sites\scss" --include-path="node_modules\motion-ui\src" --source-map=true
:: watch SCSS
::START /B node_modules\.bin\node-sass "src\scss\app.scss" "public\css\app1.css" -w -r --include-path="node_modules\foundation-sites\scss" --include-path="node_modules\motion-ui\src" --source-map=true
:: compile and watch autoprefixer
::CALL ./node_modules/.bin/postcss public\css\app1.css -o public\css\app.css --use autoprefixer postcss-flexbugs-fixes --autoprefixer.browsers "last 2 version, ie >= 11" -w -m
:: Done
