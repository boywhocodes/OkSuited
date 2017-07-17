App
  * LoginForm
  * RegisterForm
  * Navbar
  * ProfileShow (currentuser)
      * Profile Text
      * Profile Looking For
      * Profile Photo Album
          * Photo Album
      * Profile Questions
          * Questions View
          * Answer Questions
      * Edit Profile icons
  * BrowseMatches
      * Like form (Star)
      * ProfileShow (same as before, but without editing features)
          * Profile Text
          * Profile Looking For
          * Profile Photo Album
          * Profile Questions
          * Send Message
  * Conversations
      * View threads (inbox)
      * Read messages
      * See sent messages

Routes

* component: App path: /
  * component LoginFormContainer
    * path: "/login"
  * component RegisterFormContainer
    * path: "/signup"
  * component: ProfileShow
    * path: "/:username
      * component: PhotoAlbum
        * path: "/:username/photos"
      * component: Questions
        * path: "/:username/questions"
* component: MatchesContainer
  * path: "/matches"
* component: ShowMatch
  * path: "/:username"
* component: ConversationContainer
  * path: "/conversations"
  * component: ConvoIndex
    * path: "/conversation/:conversationId"
