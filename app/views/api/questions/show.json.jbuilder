json.partial! 'api/questions/question', question: @question
json.time time_ago_in_words(comment.created_at)
