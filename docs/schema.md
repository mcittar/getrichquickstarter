# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null, unique

## projects
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
creator_id        | integer   | not null, foreign key (references users), indexed
city              | integer   | not null
state             | integer   | not null
title             | string    | not null
organization      | string    | not null
video_url         | string    | not null
end_date          | string    | not null
project_pic       | string    | not null
description       | text      | not null
short_description | text      | not null
funding_goal      | integer   | not null

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references users), indexed
title       | string    | not null
amount      | float     | not null
limit       | int       | not null
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
amount      | integer   | not null
reward_id   | integer   | not null, foreign key (references projects), indexed
backer_id   | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag         | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
