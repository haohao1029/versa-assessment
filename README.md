# starwar

```
npm ci
npm run lint
npm run start:dev
```

the system will fetch `https://swapi.dev/api/people`. The result data is shown as below. It employed recursion method to call next api with `apiresult.next` until `apiresult.next == null`

After that, data will be sorted via height and name, then will be categorised with gender, the output is in `output.json`. 

The program takes seconds to call and get all apis.

However, we can optimise it by call a few of https://swapi.dev/api/people/?page=n at the same time, and perform conditions to check if there is still having more pages.

**Testing** is not working as I unable to fix the typescript testing environment.
```json
{
    "count": 82, 
    "next": "https://swapi.dev/api/people/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.dev/api/planets/1/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "species": [], 
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/", 
                "https://swapi.dev/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.dev/api/starships/12/", 
                "https://swapi.dev/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.dev/api/people/1/"
        }, 
    ]
]
```