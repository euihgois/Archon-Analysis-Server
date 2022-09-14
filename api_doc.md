# Analysis Archon API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`



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
