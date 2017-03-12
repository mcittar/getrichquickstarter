# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
street_address  | string    |
city            | string    |
state           | string    |
zip             | string    |


## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
video_url   | string    | not null
project_pic | string    | not null
description | text      | not null
funding_goal| integer   | not null
creator_id  | integer   | not null, foreign key (references users), indexed

## pledges
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references users), indexed
amount      | string    | not null
title       | string    | not null
description | string    | not null
delivery    | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
body        | string    | not null


## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
backer_id   | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null
