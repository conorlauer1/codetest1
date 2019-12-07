# Code Test

## Test description & expectation

We have three endpoints

- https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers returns all the registered users in the system
- https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers returns all the unregistered users in the system
- https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships returns all the project memberships for all users, registered and unregistered, in the system

Your task is to implement a new service with a single endpoint that will return all the users, registered and unregistered, including the project ids the users belong to. If users do not belong to a project, project ids attribute would contain an empty array in the response payload.

The service can be implemented in any language/platform that you are most comfortable with. Having said that, we do have primary languages on our team so you would get mucho respect & bonus points if the solution is implemented in the following languages.

```
java
groovy
kotlin
node (es6+ | typescript)
```

The endpoint must use http protocol. The endpoint must return json by default.

Example of json payload to be returned from the new endpoint

```
[
  {
    "id": "1",
    "city": "Jaydashire",
    "company": "Goyette - Renner",
    "country": "South Africa",
    "firstName": "firstName 1",
    "lastName": "lastName 1",
    "organizationType": "organizationType 1",
    "phone": "524.276.1570 x487",
    "state": "SD",
    "zipCode": "68048",
    "disclaimerAccepted": false,
    "languageCode": "en",
    "emailAddress": "last1@mail.com",
    "projectIds": ["1","2"]
  },
  {
    "id":"21",
    "emailAddress":"email1@somewhere.com",
    "languageCode":"en",
    "registrationId":"jwsMJNOk3oM3hVM5bGcF1",
    "registrationIdGeneratedTime":"156165026851",
    "projectIds": []
  }
]
```

The solution must include tests

Once you have complete the solution, please do the following

1. Fill in the [Test solution](#test-solution-a-namesolutiona)
2. Push it as a public repo on github.com.
3. Send us the link to your repo and we will take a look. Thank you very much!

## Test solution <a name="solution"></a>

Provide the instructions below. Please double check your instruction to make certain that it works.

**Required components for running the application in development mode**

NodeJS and NPM are required for this new service.

```
node --version
v12.7.0
```

curl or a browser can be used to actually get the data

```
curl --version
curl 7.56.1 (x86_64-w64-mingw32) libcurl/7.56.1 OpenSSL/1.0.2l (WinSSL) zlib/1.2.11 libidn2/2.0.4 libssh2/1.8.0 nghttp2/1.26.0
```

**Install**

```
npm install
```

**Start the internal application in development mode**

To Start the service

```
node index
```

To get data from the service

```
curl localhost:1234/fancy-new-service
```

**Optional but would really impress us**

```
Build a dockerfile and include instructions how to build the image, start the container and execute the endpoint for that container locally
```

**Informational**
To run tests

```
npm test
```
