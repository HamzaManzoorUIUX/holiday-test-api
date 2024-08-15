To set up this project
1. clone it using git clone
2. run "npm i"
3. run "docker run --name redis -p 6379:6379 -d redis" in cmd
4. add env file
CALENDARIFIC_API_KEY=
REDIS_HOST=localhost
<!-- this is reddis host -->
REDIS_PORT=6379 
<!-- here 6379 reddis port -->
CACHE_TTL=3600
<!-- 3600 is time duration in seconds -->
then run "npm run dev"
for production run "npm start"