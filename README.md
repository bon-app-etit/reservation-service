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

## restaurant-specific routes
GET /restaurant:id - loads restaurant data using unique restaurant name as parameter
POST /restaurant - adds new restaurantdata to database, should include data like
  restaurant name, reservation hours, number of tables, max reservation duration, 
  max/min number of people for reservation, DOES IT EVEN HAVE A WAITLIST, allowed
  to make more than one reservation per day
PUT /restaurant:id - updates restaurant data according to unique restaurant id
DELETE /restaurant:id - deletes restaurant data according to unique restaurant id

## reservation specific routes
GET /reservation/:id - get one reservation from the database, requires reservation id
GET /allReservations/:name - for the restaurant owner side, obtain a list of all
  the reservations for the restaurant with perhaps an option of selecting by date
POST /reservation - add reservation to database, should require data like
  a specific time, username (required), number of people in party, perhaps handle
  if a user can make multiple reservations in a day
PUT /reservation:id - updates a reservation according to unique reservation id
DELETE /reservation:id - deletes reservation data according to unique reservation id

