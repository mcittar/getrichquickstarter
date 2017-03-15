# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'Gary', email: 'gary@gmail.com', password: 'password')
u2 = User.create(name: 'Frank', email: 'frank@gmail.com', password: 'password')
u3 = User.create(name: 'Agathor', email: 'agathor@gmail.com', password: 'password')

snuggie = Project.create(
  creator_id: 2,
  city: 'Atlanta',
  state: 'GA',
  title: 'Snuggie: The wearable blanket!',
  organization: 'Blanket People of America',
  video_url: 'https://www.youtube.com/watch?v=2xZp-GLMMJ0',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489616372/0001326_snuggie-blue_yvtqqb.jpg',
  description: 'The Snuggie Blanket is a super-soft blanket with sleeves so it does not slip and slide like a regular blanket and keeps you warm from head to toe. Enjoy complete freedom of movement; read, eat, sew, use the remote, talk on the phone or work on your laptop. Your hands are not restricted! You can also use it outside!',
  funding_goal: 30000,
  end_date: '12/14/2017'
)

hawaii_chair = Project.create(
  creator_id: 1,
  city: 'Honolulu',
  state: 'HI',
  title: 'The Hawaii Chair, workout while you work!',
  organization: 'Society of Chair Enrichment and Media',
  video_url: 'https://www.youtube.com/watch?v=E9_amg-Aos4',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489616411/hawaii-chair-review_bcl9af.jpg',
  description: 'From the original factory. The Hawaii Chair brings you passive exercise while sitting indoors. The Hawaii Chair was designed to give movement back to the body’s center of mass, no matter how restrictive your lifestyle! Great if you are desk-bound for too-long hours. Great for women. Great for those with leg or foot problems, or having difficulty to exercise easily. The strong circular motion of the hips and abdomen gives intestines and stomach a rhythmic massage, for a stimulated and active feeling even while you remain sitting. Use it to enhance your program of weight reduction. Gentle massage of the lower back can ease minor aches, pains and stiffness. Steady motion with awareness can improve your balance and coordination as it gently works on your lumbar region.',
  funding_goal: 25000,
  end_date: '7/4/2018'
)
