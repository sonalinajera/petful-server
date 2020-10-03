# Petful PetBuddy App Server 

### Team
By: Angela Thomas and Sonali Najera

## Links

Open [live app](https://petful-client-ecru.vercel.app/) to view it in the browser.

Open [api](https://petful-petbuddy.herokuapp.com/) to view it in the browser.

## Description 
Petful application allows users to visit site and view available cats and dogs for adoption. There is also a view for the ongoing wait list for individuals looking to adopt a pet. 

## Technology Stack
This client-side app was made using the React library with JavaScript, CSS 3 and HTML 5. 
The server-side api was made using Node.js, Express. 

## Endpoints (How to use)

### Base URL: 

```
https://petful-petbuddy.herokuapp.com
```

### Open Endpoints
Does not require authentication

#### 1. Test connection
Gets all pets open to adoption 

**URL** `/`

**METHOD** `GET`

**Auth Required** `No`

##### Response
String

``` 
Hello, World!
```

#### 2. Get All Pets 
Gets all pets open to adoption 

**URL** `/pets`

**METHOD** `GET`

**Auth Required** `No`

##### Response 
Must include the following fields in original request 

``` json
{
    "cats": [
        {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        },
        {
            "age": 2,
            "breed": "white cat",
            "description": "White cat",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Snapjacks",
            "story": "Thrown on the street"
        }, 
        ...
    ]
    "dogs": [
        {
            "age": 3,
            "breed": "Golden Retriever",
            "description": "A smiling golden-brown golden retreiver listening to music.",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Zim",
            "story": "Owner Passed away"
        },
        {
            "age": 3,
            "breed": "Akita",
            "description": "A smiling golden-brown dog",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Fran",
            "story": "Found downtown"
        },
        ...
    ]
```
