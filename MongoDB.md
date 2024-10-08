Database - It's a s/w which helps us to optimise the CRUD+ operations


Structure of MongoDB
    Database
        - Collections
            - documents(BSON)


use db

db.createCollection("collection_name")

db.collection_name.findOne({//some criteria})

db.collection_name.insertOne({})
db.collection_name.insertMany([{},{},{}])

db.collection_name.updateOne({//what-matching criteria},{$set : {field : value}})

db.collection_name.deleteOne({//what-matching criteria})


Different components of MongoDB s/w in your computer
terminal - mongo or mongosh - interface to connect to your mongodb server
compass - UI s/w - interface to connect to your mongodb server
mongod - mongodb server


MongoDB Atlas - mongodb server somewhere online


**Comparision operators**

GT >
db.collection_name.find({age : {$gt : 20})

GTE >=
db.collection_name.find({age : {$gte : 20})

LT <
db.collection_name.find({age : {$lt : 20})

LT <=
db.collection_name.find({age : {$lte : 20})

EQ ===
db.collection_name.find({age : {$eq : 20})

NE !==
db.collection_name.find({age : {$ne : 20})


**Logical operators**

AND && - all the criteria/conditions should match, only those will be returned

1. db.collection_name.find({age : 24, password : "raushan123"})

$and 

db.collection_name.find({$and : [{age : 24}, {password : "xyz"}]})



OR || - even if one condition/criteria matches, it'll be returned

db.collection_name.find({$or : [{age : 24}, {password : "xyz"}]})



sort
1. ascending
    db.collection_name.find({//matching criteria}).sort(field_name : 1)
2. descending
    db.collection_name.find({//matching criteria}).sort(field_name : -1)


limit

db.collection_name.find({}).limit(5)
^ will give first 5 documents which match the criteria

skip
db.collection_name.find({}).skip(2).limit(5)
^will give next 5 documents after skipping 2 documents

Does the order matter in skip and limit?

db.collection_name.find({}).limit(5).skip(2)
3,4,5
db.collection_name.find({}).skip(2).limit(5)
3,4,5,6,7



field 
$exists
db.users.find({city : {$exists : true}})

$rename
db.users.updateMany({},{$rename : {city : "shehar"}})

$inc
db.users.updateMany({city : {$exists : true}}, {$inc : {age : 1}})

$min
$max
$unset

Database Optimisation/performance

images collection
{
    _id,
    image_no,
    image_url,
    alt,
    name
}
users collection
{
    _id : mno,
    name,
    email,
    favourites : [4,9,10,15]
}

/users/:userID/favourites
/users/mno/favourites

const user = db.users.find({_id : "mno"})
const users_favourties = user.favourites
const favourite_images = []
for(let i=0; i<users_favourties.length; i++){
    const image = db.images.find({image_no : users_favourties[i]})
    favourite_images.push(image)
}
res.send(favourite_images)

1 way ^

2nd way - maybe if a query exists

2nd way is always better where you are using the queries to its' best




users collection

1000 users
10 users from pune

/users?city=pune
1st way
const users = db.users.find()
const pune_users = users.filter((e) => e.city=="pune")
OR
2nd way
const users = db.users.find({city : "pune"})


performance
1. Always opt for mongodb level/using query than doing filtering/writing logic in the application level
    MongoDB Aggregation
    very powerful feature of mongodb where we can write multiple queries together
    db.collection_name.aggregate([{s1},{s2},{s3}.....{sn}])

https://www.mongodb.com/docs/manual/reference/operator/aggregation/


1000 users collection
xyz is the 9543rd user, his _id is "0912.."

2. db.users.find({name : "xyz"}) O(n)
     db.users.find({_id : "0912.."}) O(1)


    Indexing
    Respiration

    _id is indexed by default in Mongodb

    we can also create indexes on different fields

    .createIndex
