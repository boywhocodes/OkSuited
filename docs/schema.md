* users

  * id integer	 not null, primary key
  * username	string	not null, indexed, unique
  * email	string	not null, indexed, unique
  * password_digest	string	not null
  * session_token	string	not null
  * photo_url	string
  * zip_code	string	not null
  * culinary_pref	string	not null
  * about	text
  * seeking_out_lunchmates_that_are	string not null

* culinary_pref
  * id integer not null, primary key
  * food_genre string not null
  * food_genre_id integer not null


* questions
  * id integer	not null, primary key
  * title	text	not null


* question_options
  * id	integer	not null, primary key
  * question_id	integer	not null, foreign key, indexed
  * description	text	not null


* question_responses
  * id	integer	not null, primary key
  * user_id	integer	not null, foreign key, indexed,
  * question_id	integer	not null, foreign key, indexed, unique[user_id]

* messages
  * column name	data type	details
  * conversation_id	integer	not null, foreign key, indexed
  * sender_id	integer	not null, foreign key, indexed
  * content	text	not null
  * timestamp	date	not null


* conversations
  * column name	data type	details
  * id integer	not null, primary key
  * user_id	integer	not null, foreign key, indexed
  * other_user_id	integer	not null, foreign key, indexed
