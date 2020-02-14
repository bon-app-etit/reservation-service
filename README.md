# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API routes
### restaurant-specific routes
#### `GET` /restaurant/:restaurantId 
  * returns one restaurant's data using unique restaurant id as parameter
  * URL Params: restaurantId=`[integer]`
   `req.body: none`

#### `POST` /restaurant 
  * adds new restaurant data to database
  ```
  req.body: {
    name: [string]
    [dayOfWeek]_start: [time]
    [dayOfWeek]_end: [time]
    reservation_allowed: [boolean]
    max_number_reservations: [integer]
    min_number_reservations: [integer]
    user_reservation_limit: [integer]
    reservation_duration: [interger]
    allowed_months_ahead: [integer]
    [number]_seat_table: [integer]  
  }
  ```
  * `[dayOfWeek]` refers to any weekday, lowercase, eg: `monday`, `sunday`
  * `[number]` refers to any integer 1 - 15
  * all req.body data required
#### `PUT` /restaurant/:restaurantId 
  * updates restaurant data according to unique restaurant id
  * URL Params: restaurantId=`[integer]`
   ```
  req.body: {
    name: [string]
    [dayOfWeek]_start: [time]
    [dayOfWeek]_end: [time]
    reservation_allowed: [boolean]
    max_number_reservations: [integer]
    min_number_reservations: [integer]
    user_reservation_limit: [integer]
    reservation_duration: [interger]
    allowed_months_ahead: [integer]
    [number]_seat_table: [integer]  
    }
  ```
  * all req.body data optional depending on what data to change from restaurant
#### `DELETE` /restaurant/:restaurantId
  * deletes restaurant data according to unique restaurant id
  * URL Params: restaurantId=`[integer]`
   `req.body: none`


### reservation specific routes
####  `GET` /reservation/:reservationId 
  * returns one reservation from the database, requires reservation id
  * URL Params: reservationId=`[integer]`
   `req.body: none`

#### `GET` /manyReservations/:restaurantId 
  * for the restaurant owner side, obtain a list of all the reservations for the   restaurant with perhaps an option of selecting by date in req.body
  * URL Params: restaurantId=`[integer]`

  ```
   req.body: {
    reservationId: [integer]
    userid: [integer]
    number_of_people: [integer]
    date: [date]
    time: [time]
    special_accomodations: [string]
  }
  ```
  * all req.body data optional to filter out search
  * no req.body data defaults to all set reservations

#### `POST` /reservation/:restaurantId 
  * add reservation to database
  * URL Params: restaurantId=`[integer]`
  ```
  req.body: {
    userId: [integer]
    number_of_people: [integer]
    date: [date]
    time: [time]
    special_accomodations: [string]
  }
  ```
  * all req.body data required

#### `PUT` /reservation/:reservationId 
  * updates a reservation according to unique reservation id
  * URL Params: reservationId=`[integer]`
  ```
  req.body: {
    number_of_people: [integer]
    date: [date]
    time: [time]
    special_accomodations: [string]
  }
  ```
* all req.body data optional depending on what data to change from reservation

#### `DELETE` /reservation/:reservationId 
  * deletes reservation data according to unique reservation id
  * URL Params: reservationId=`[integer]`
   `req.body: none`


### user specific routes
####  `GET` /user/:userId
  * find user from database
  * URL Params: userId=`[string]`
   `req.body: none`

####  `POST` /user
  * add user to database
  ```
  req.body: {
    user_name: [string]
    first_name: [string]
    last_name: [string]
    phone_number: [string]
    email: [string]
  }
  ```
  * all req.body data required

####  `PUT` /user/:userId
  * update user data from database
  * URL Params: userId=`[string]`
  ```
  req.body: {
    user_name: [string]
    first_name: [string]
    last_name: [string]
    phone_number: [string]
    email: [string]
  }
  ```
  * all req.body data optional depending on what data to change from user

####  `DELETE` /user/:userId
  * delete user from database
  * URL Params: userId=`[string]`
   `req.body: none`
