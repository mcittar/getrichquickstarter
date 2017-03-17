# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'Demo', email: 'demo@gmail.com', password: 'demopassword')
u2 = User.create(name: 'Frank', email: 'frank@gmail.com', password: 'password')
u3 = User.create(name: 'Agathor', email: 'agathor@gmail.com', password: 'password')
u4 = User.create(name: 'Horatio', email: 'horatio@gmail.com', password: 'password')
u5 = User.create(name: 'Belinda', email: 'belinda@gmail.com', password: 'password')
u6 = User.create(name: 'Toph', email: 'toph@gmail.com', password: 'password')
u7 = User.create(name: 'Jessica', email: 'jessica@gmail.com', password: 'password')
u8 = User.create(name: 'Armand', email: 'armand@gmail.com', password: 'password')
u9 = User.create(name: 'Katrina', email: 'katrina@gmail.com', password: 'password')
u10 = User.create(name: 'Vance', email: 'vance@gmail.com', password: 'password')

snuggie1 = Project.create(
  creator_id: 2,
  city: 'Atlanta',
  state: 'GA',
  title: 'Snuggie',
  organization: 'Blanket People of America',
  video_url: 'https://www.youtube.com/watch?v=2xZp-GLMMJ0',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489684375/0000250_snuggie-blue_tthg7a.jpg',
  description: 'The Snuggie Blanket is a super-soft blanket with sleeves so it does not slip and slide like a regular blanket and keeps you warm from head to toe. Enjoy complete freedom of movement; read, eat, sew, use the remote, talk on the phone or work on your laptop. Your hands are not restricted! You can also use it outside!',
  short_description: 'A Revolutionary blanket with sleeves! You never have to leave the comfort of a warm blanket ever again',
  funding_goal: 30000,
  end_date: '12/14/2017'
)

snuggr1 = Reward.create(
  project_id: 1,
  amount: 20.00,
  limit: 1000,
  title: "Lil' Snuggler",
  description: "GET ONE SNUGGIE!, CHOOSE YOUR OWN COLOR! LIMITED SUPPLY ACT NOW",
  delivery_date: 'APR 2018'
)

snuggr2 = Reward.create(
  project_id: 1,
  amount: 50.00,
  limit: 200,
  title: "The Triple Threat",
  description: "GET THREE SNUGGIES!, CHOOSE YOUR OWN COLORS!
                As I type these are flying of the shelves, you can't miss these deals folks!",
  delivery_date: 'APR 2018'
)

snuggr3 = Reward.create(
  project_id: 1,
  amount: 150.00,
  limit: 10,
  title: "Super Snuggie Special",
  description: "GET TEN SNUGGIES!, CHOOSE YOUR OWN COLORS!
                You are basically stealing from me at this price, only a fool would pass at this opportunity!",
  delivery_date: 'APR 2018'
)

hawaii_chair2 = Project.create(
  creator_id: 8,
  city: 'Honolulu',
  state: 'HI',
  title: 'The Hawaii Chair',
  organization: 'Society of Chair Enrichment and Media',
  video_url: 'https://www.youtube.com/watch?v=E9_amg-Aos4',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489616411/hawaii-chair-review_bcl9af.jpg',
  description: 'From the original factory. The Hawaii Chair brings you passive exercise while sitting indoors. The Hawaii Chair was designed to give movement back to the body’s center of mass, no matter how restrictive your lifestyle! Great if you are desk-bound for too-long hours. Great for women. Great for those with leg or foot problems, or having difficulty to exercise easily. The strong circular motion of the hips and abdomen gives intestines and stomach a rhythmic massage, for a stimulated and active feeling even while you remain sitting. Use it to enhance your program of weight reduction. Gentle massage of the lower back can ease minor aches, pains and stiffness. Steady motion with awareness can improve your balance and coordination as it gently works on your lumbar region.',
  short_description: 'A chair that will take you for a spin! Get a great workout while you work! ',
  funding_goal: 25000,
  end_date: '7/4/2018'
)

sham_wow3 = Project.create(
  creator_id: 10,
  city: 'Portland',
  state: 'OR',
  title: 'ShamWow!',
  organization: 'Fantastico',
  video_url: 'https://www.youtube.com/watch?v=QwRISkyV_B8',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489684298/8c8881134-shamwowguy.nbcnews-fp-1200-800_i8xdtu.jpg',
  description: "ShamWow cloths wash, dry, and polish any surface. They are like a towel, chamois and sponge all in one – except they’re extremely absorbent and can be used over and over. ShamWow towels are machine washable and bleachable, will not scratch surfaces, and will last for more than 10 years!",
  short_description: "It's like a chamois, a towel and sponge all in one! Solve any wet mess instantly and all affordable prices",
  funding_goal: 1000000,
  end_date: '5/14/2018'
)

slap_chop4 = Project.create(
  creator_id: 10,
  city: 'Portland',
  state: 'OR',
  title: 'Slap Chop!',
  organization: 'Fantastico',
  video_url: 'https://www.youtube.com/watch?v=QvcYjSI_RyQ',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489689951/Free-Shipping-Cut-font-b-Chop-b-font-Crushing-Mashing-font-b-Slap-b-font-font_flssvw.jpg',
  description: "Slap Chop™ is a manual chopper machine that chops food when you slap the plunger. You can slap once or twice for large cuts or several times for finer cuts. You don't have to switch any blades. Today we're offering the Slap Chop™ for just $19.95 and $6.95 shipping and handling, and the Graty for cheese for FREE, just pay an additional $6.95 to cover the shipping and handling fee! Both the Slap Chop™ and the Graty for cheese comes with a limited 3 year warranty.",
  short_description: "Fantastico presents the Slap Chop! An all purpose kitchen helper that will make your life easier GUARANTEED",
  funding_goal: 13000,
  end_date: '10/7/2017'
)

wearable_towel5 = Project.create(
  creator_id: 5,
  city: 'San Diego',
  state: 'CA',
  title: 'The Wearable Towel',
  organization: 'Blanket People of America',
  video_url: 'https://www.youtube.com/watch?v=WjdyjL0dbG8',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489697801/maxresdefault_rbbvi5.jpg',
  description: "With only three opening that are placed along the side of the towel, you can stay confidently, completely comfortably covered, while having the freedom to use your hands. So whether you’re at home, the spa, by the pool or at the beach, you can wear it, change in it, lay on it or just use it to dry off. Other modifications of the towel are well known however, all of these towels either use buttons, straps or fasteners to keep the towel from falling off. The Wearable Towel does not employ the use of any type of fastener. This novel configuration is available in in venetian red, ivory white and cobalt blue. Increase your child’s standard of living by upgrading to the Wearable Towel today.",
  short_description: "Tired of having to choose between wearing clothes or wearing a towel? Tire no more! The wearable towel will solve all of your life's problems!",
  funding_goal: 56000,
  end_date: '1/17/2018'
)

magic_bullet6 = Project.create(
  creator_id: 6,
  city: 'Boston',
  state: 'MA',
  title: 'The Magic Bullet',
  organization: 'FoodiMax',
  video_url: 'https://www.youtube.com/watch?v=43VClzXOvg8',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489707800/index-cta-mb-desktop_iuxomo.jpg',
  short_description: "Stow away those bulky blenders and unwieldy food processors, and let the Magic Bullet work its charm!",
  description: "Handy versatile and easy to use, the Magic Bullet takes up minimal counter space while showcasing maximum speed and versatility. With its unique design and compact size, the Magic Bullet chops, mixes, blends, whips, grinds and more in less time than it takes to assemble standard kitchen appliances. And with a wide array of dishwasher-safe attachments, clean up is as easy as it gets. The secret to the Magic Bullet's time-saving efficiency is its specially designed blade and unique bullet shape. These features work together to quickly and forcefully circulate food back into the Cyclonic Cutting Zone®, allowing the Magic Bullet to do virtually any food prep task in seconds.",
  funding_goal: 4000,
  end_date: '3/24/2018'
)

shoe_dini7 = Project.create(
  creator_id: 4,
  city: 'Seattle',
  state: 'WA',
  title: 'ShoeDini',
  organization: 'Sellers with Sole',
  video_url: 'https://www.youtube.com/watch?v=9EZHVokj1lI',
  project_pic: 'http://res.cloudinary.com/ddy9eynci/image/upload/v1489725218/201131944239probigpic_o66vf9.jpg',
  short_description: "Stow away those bulky blenders and unwieldy food processors, and let the Magic Bullet work its charm!",
  description: "Even the best escapologists struggle to slip out of their shoes. As Harry Houdini rolls over in his grave, Gilbert Gottfried's grating voice plugs the ShoeDini, the world's first shoehorn on a stick. The 'telescoping handle' adjusts to customers of all heights, while the 'patented grip clip' keeps the shoe steady, ending your bending in the process. The ShoeDini infomercial does not try to hide its targeted demographic, appealing to 'anyone with arthritis or back pain, especially those with limited mobility.' Which might be why they chose Gottfried, whose shrieking voice can only be tolerated by those whose hearing is on the wane, to narrate.",
  funding_goal: 7500,
  end_date: '1/4/2018'
)
