{
 currentUser: {
   id: 1,
   username: "mcittar"
 },
 errors: {
   signUp: ["username can't be blank", "password is too short"],
   signIn: [],
   createProject: ['body cant be blank!'],
   editProject: [],
   fundProject: [],
 },
 projects: {
   1: {
     id: 1,
     name: "Shoom-Woah!",
     creator_id: 10,
     creator_username: "Vince Vincent",
     city: "Memphis",
     state: "TN",
     zip: 37501
     comments: {
       1: {
         id: 1,
         author_id: 22,
         content: "What are these made out of?"
       }
     },
   }
 },
 projectDetail: {
   id: 1,
   name: "Shoom-Woah!",
   video_link: /*...*/,
   organization: /*...*/,
   address: /*...*/,
   city: /*...*/,
   state: /*...*/,
   description: /*...*/,
   currentFunding: 2353,
   funding_goal: 5000,
   pledge_levels: {
        1: {
          project_id: 123,
          amount: /*...*/,
          title: /*...*/,
          description: "Longer description text here",
          delivery_date: /*...*/
        },
      },
   currentBackers: {
     1: {
       id: 1,
       user_id: 1,
       contribution: 50
     }
   },
   funding_goal_achieved: false
 }
}
