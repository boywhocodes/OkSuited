```json{
  currentUser: {
    id: 1,
    username: "SoftDevelyn95"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    answerQuestion: {errors: ["must select one option"]}
  },
  current_profile: {
    profile_info: {
      username: "SoftDevelyn95",
      photo_url: "networking_picture_1.png",
      culinary_pref: "new-age mexican, thai, korean-fusion",
      location: "San Francisco, CA",
      about: "Workaholic when I want to be."
    },
    seeking_out_lunchmates_that_are: "Software Developers, Founders, Students",
    questions: {
      1: {
        title: "Question 1?"
        answer: "Option 1",
        acceptable: "Option 1",
        importance: 1,
      }
    }
  },
  conversations: {
    1: {
      sender_id: 17,
      receiver_id: 44,
      messages: [
        1: {
        sender_id: 17,
        receiver_id: 44,
        content: "Hey, wanna get lunch on Tuesday?",
        timestamp: 2017-07-10 04:30:11
        },
        2: {
        sender_id: 2,
        receiver_id: 1,
        content: "Yes, that sounds lovely!",
        timestamp: 2017-07-11 04:33:19
        },
      ]
    },
  },
  questions: {
     1: {
       id: 1
       title: "How long do you allocate for lunch?"
       answers: {
         1: {
           id: 1,
           userId: 17,
           title: "45 minutes"
         }
       }
     }
   },

  lunch_mates : {},
  lunch_mates: {
    1: {
      username: Barbara Corcoran,
      photo_url: "BC_pic_2.png",
      culinary_pref: "Indian, Tacos",
      location: "Berkeley, CA"
    },
    2: {
      username: Lori Greiner,
      photo_url: "LG_pic_3.png",
      culinary_pref: "Chinese, Moroccan",
      location: "San Francisco, CA"
    },
  }
}
```
