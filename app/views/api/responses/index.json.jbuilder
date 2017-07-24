@responses.each do |response|
  # json.set! response.question.title do
    json.extract! response, :choice_id, :id, :acceptable_choices, :explanation, :question
  # end
end
