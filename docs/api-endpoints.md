# API Endpoints

### Root

- `GET /` - hits web app home

## JSON API

### Session

- `POST /session`
- `DELETE /session`

### Users

- `POST /api/users`

### Projects

- `GET /api/projects` (index)
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Comments:

- `GET /api/projects/:id/comments/:id`
- `POST /api/projects/:id/comments`
- `PATCH /api/projects/:id/comments/:id`
- `DELETE /api/projects/:id/comments/:id`

### Rewards

- `GET /api/projects/:id/rewards`
- `POST api/projects/:id/rewards`
