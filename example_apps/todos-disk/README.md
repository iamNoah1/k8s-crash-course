# Todos Disk 
Super small app to add and list todos. Persistance is realized by storing todos in a file on the filesystem. 

# Endpoints 
* `curl <host>:8080/todo` - Get
* `curl -X POST <host>:8080/todo -H 'Content-Type: application/json' -d '{"desc":"wäsch wasche"}' ` - Post