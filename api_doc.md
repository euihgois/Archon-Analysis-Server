# Analysis Archon API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /dota/match/analysis/:match_id`
- `GET /dota/heroes/:hero_id`



&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "<email> is sucessfully registerd"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is empty"
}
OR
{
  "message": "email has wrong format"
}
OR
{
  "message": "email already exists"
}
OR
{
  "message": "Password is empty"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "string",
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is empty"
}
OR
{
  "message": "Password is empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

&nbsp;

## 3. Get /dota/match/analysis/:match_id

Description:

- Get detail players in certain match by match id in dota

Request:

- params:

```json
{
  "match_id": "integer (required)"
}
```

_Response (200 - OK)_

Example:

```json
[
    {
        "heroName": "Mars",
        "hero_id": 129,
        "benchmarks": {
            "gold_per_min": {
                "raw": 313,
                "pct": 0.1111111111111111
            },
            "xp_per_min": {
                "raw": 332,
                "pct": 0.08888888888888889
            },
            "kills_per_min": {
                "raw": 0,
                "pct": 0.08888888888888889
            },
            "last_hits_per_min": {
                "raw": 3.577680525164114,
                "pct": 0.15555555555555556
            },
            "hero_damage_per_min": {
                "raw": 545.4157549234136,
                "pct": 0.7555555555555555
            },
            "hero_healing_per_min": {
                "raw": 0,
                "pct": 0.9111111111111111
            },
            "tower_damage": {
                "raw": 122,
                "pct": 0.17777777777777778
            },
            "stuns_per_min": {
                "raw": 0,
                "pct": 0.022222222222222223
            }
        },
        "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png"
    },
    ...
]
```
&nbsp;

## 4. Get /dota/benchmarks/:hero_id

Description:

- Get benchmarks for certain hero

Request:

- params:

```json
{
  "hero_id": "integer (required)"
}
```

_Response (200 - OK)_

Example:

```json
{
    "hero_id": 2,
    "result": {
        "gold_per_min": [
            {
                "percentile": 0.1,
                "value": 431
            },
            {
                "percentile": 0.2,
                "value": 443
            },
            {
                "percentile": 0.3,
                "value": 464
            },
            {
                "percentile": 0.4,
                "value": 469
            },
            {
                "percentile": 0.5,
                "value": 484
            },
            {
                "percentile": 0.6,
                "value": 487
            },
            {
                "percentile": 0.7,
                "value": 524
            },
            {
                "percentile": 0.8,
                "value": 642
            },
            {
                "percentile": 0.9,
                "value": 655
            },
            {
                "percentile": 0.95,
                "value": 658
            },
            {
                "percentile": 0.99,
                "value": 658
            }
        ],
        "xp_per_min": [
            {
                "percentile": 0.1,
                "value": 518
            },
            ...
    ]
```

&nbsp;

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token or user has not logged in"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Item(s) not found"
}
```
