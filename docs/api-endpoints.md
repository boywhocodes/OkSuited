HTML API

Root

  * GET / - load application


JSON API

Users

  * POST /api/users
  * PATCH /api/users/:id - update user profile
  * GET /api/users/:id - get a specific user
  * GET /api/users/new - new user
  * GET /api/users - used for MatchesIndex

Session

  * POST /api/session
  * DELETE /api/session

Messages

  * POST /api/messages

Conversations

  * GET /api/users/:user_id/conversations
  * POST /api/users/:user_id/conversations
  * GET /api/users/:user_id/conversations/:conversation_id/messages get a specific conversation's messages

Questions and Responses

  * GET /api/questions
  * GET /api/questions/:id
  * GET /api/users/:user_id/question_responses
  * POST /api/users/:user_id/question_responses
  * PATCH /api/users/:user_id/questions_responses
  * DELETE /api/users/:user_id/questions_responses/:id
