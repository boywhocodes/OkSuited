@responses.each do |response|
  json.set! response.question_id do
    json.extract! response, :choice_id, :id, :acceptable_choices, :explanation, :question_id
  end
end
