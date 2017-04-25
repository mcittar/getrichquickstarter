# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: 'Demo', email: 'demo@gmail.com', password: 'demopassword')

user_arr = []
1500.times do |num|
  name = Faker::Name.unique.name
  email = Faker::Internet.unique.email
  user_arr << User.create(username: name, email: email, password: 'password')
end
Faker::Name.unique.clear
Faker::Internet.unique.clear
range = user_arr.length

personal_care1 = Tag.create(tag: 'Personal Care')
housewares2 = Tag.create(tag: 'Housewares')
electronics3 = Tag.create(tag: 'Electronics')
fitness4 = Tag.create(tag: 'Fitness')
health5 = Tag.create(tag: 'Health')
beauty6 = Tag.create(tag: 'Beauty')
leisure7 = Tag.create(tag: 'Leisure')

snuggie1 = Project.create(
  creator_id: 2,
  city: 'Atlanta',
  state: 'GA',
  title: 'Snuggie',
  organization: 'Blanket People of America',
  video_url: 'https://www.youtube.com/embed/2xZp-GLMMJ0?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1489684375/0000250_snuggie-blue_tthg7a.jpg',
  description: 'The Snuggie Blanket is a super-soft blanket with sleeves so it does not slip and slide like a regular blanket and keeps you warm from head to toe. Enjoy complete freedom of movement; read, eat, sew, use the remote, talk on the phone or work on your laptop. Your hands are not restricted! You can also use it outside!
  Oh, the Snuggie. Never in recent memory has such a ridiculous invention sparked such a pop culture phenomenon (although Silly Bandz are certainly in the running). The Snuggie is that invention that people everywhere wonder, “Why didn’t I think of that?” And although the Snuggie ads are the cheesy, poorly-acted epitome of infomercials – my favorite part is all the actors at the sports event cheering in their Snuggies – the makers of Snuggies are actually quite cleverly taking advantage of social media and multimedia.
Allstar Products Group, the makers of Snuggie, take the thousands of parodies on YouTube – 1,440 to be exact as of this posting – in stride. They even post some of the videos on their website. And now they have recently announced the Snuggie Choice Film Awards Contest – allowing contestants to submit “a Snuggie brand commercial, short film, documentary or parody.” The winner will receive $5,000, a trip to NYC and the opportunity to produce a potential 2011 Snuggie ad.
I believe this campaign is genius because it reaches out to both those who love and those who love to loathe the Snuggie. The folks at Allstar Products Group are following the number one rule of social media – engagement – by letting their fans, followers and haters become a part of the brand.
The real beauty of this contest: Snuggie will no doubt generate more attention and nab some fun commercial ideas. Only truly brave companies have the guts and creativity to embrace mockery and turn it into a promotion of their product. Certainly other businesses can follow this example, not only in terms of multimedia usage but also by Allstar’s willingness and ability to turn the negative into a positive.',
  short_description: 'A Revolutionary blanket with sleeves! You never have to leave the comfort of a warm blanket ever again',
  funding_goal: 30000,
  end_date: '8/14/2017'
)

snuggr1 = Reward.create(
  project_id: 1,
  amount: 20.00,
  limit: 1000,
  title: "Lil' Snuggler",
  description: "GET ONE SNUGGIE!, CHOOSE YOUR OWN COLOR! LIMITED SUPPLY ACT NOW",
  delivery_date: 'JAN 2018'
)

snuggr2 = Reward.create(
  project_id: 1,
  amount: 50.00,
  limit: 200,
  title: "The Triple Threat",
  description: "GET THREE SNUGGIES!, CHOOSE YOUR OWN COLORS!
                As I type these are flying of the shelves, you can't miss these deals folks!",
  delivery_date: 'JAN 2018'
)

snuggr3 = Reward.create(
  project_id: 1,
  amount: 150.00,
  limit: 10,
  title: "Super Snuggie Special",
  description: "GET TEN SNUGGIES!, CHOOSE YOUR OWN COLORS!
                You are basically stealing from me at this price, only a fool would pass at this opportunity!",
  delivery_date: 'JAN 2018'
)

hawaii_chair2 = Project.create(
  creator_id: 8,
  city: 'Honolulu',
  state: 'HI',
  title: 'The Hawaii Chair',
  organization: 'Society of Chair Enrichment and Media',
  video_url: 'https://www.youtube.com/embed/E9_amg-Aos4?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1490202873/The-Hawaii-Chair-Top-Famous-Worst-Infomercial-Products-of-All-Time-2018_gppnzl.jpg',
  description: 'From the original factory. The Hawaii Chair brings you passive exercise while sitting indoors. The Hawaii Chair was designed to give movement back to the body’s center of mass, no matter how restrictive your lifestyle! Great if you are desk-bound for too-long hours. Great for those with leg or foot problems, or having difficulty to exercise easily. The strong circular motion of the hips and abdomen gives intestines and stomach a rhythmic massage, for a stimulated and active feeling even while you remain sitting. Use it to enhance your program of weight reduction. Gentle massage of the lower back can ease minor aches, pains and stiffness. Steady motion with awareness can improve your balance and coordination as it gently works on your lumbar region.',
  short_description: 'A chair that will take you for a spin! Get a great workout while you work! ',
  funding_goal: 30000,
  end_date: '8/4/2017'
)

hawaii1 = Reward.create(
  project_id: 2,
  amount: 200.00,
  limit: 1000,
  title: "The Hawaii Experience",
  description: "Get the LIMITED EDITION specialty handmane vintage one-of-a-kind chair of the future TODAY!",
  delivery_date: 'DEC 2018'
)

hawaii2 = Reward.create(
  project_id: 2,
  amount: 600.00,
  limit: 1000,
  title: "The Big Kahuna",
  description: "Get 4 (!) LIMITED EDITION specialty handmane vintage one-of-a-kind chairs of the future TODAY!",
  delivery_date: 'NOV 2017'
)

sham_wow3 = Project.create(
  creator_id: 10,
  city: 'Portland',
  state: 'OR',
  title: 'ShamWow!',
  organization: 'Fantastico',
  video_url: 'https://www.youtube.com/embed/QwRISkyV_B8?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1489684298/8c8881134-shamwowguy.nbcnews-fp-1200-800_i8xdtu.jpg',
  description: "ShamWow cloths wash, dry, and polish any surface. They are like a towel, chamois and sponge all in one – except they’re extremely absorbent and can be used over and over. ShamWow towels are machine washable and bleachable, will not scratch surfaces, and will last for more than 10 years!",
  short_description: "It's like a chamois, a towel and sponge all in one! Solve any wet mess instantly and all affordable prices",
  funding_goal: 45000,
  end_date: '9/14/2017'
)

sham1 = Reward.create(
  project_id: 3,
  amount: 25,
  limit: 200,
  title: "ShamWow 3 Pack",
  description: "Get 3 ShamWows, guaranteed to improve your soaking efficiency by at least 30%",
  delivery_date: 'DEC 2017'
)

slap_chop4 = Project.create(
  creator_id: 10,
  city: 'Portland',
  state: 'OR',
  title: 'Slap Chop!',
  organization: 'Fantastico',
  video_url: 'https://www.youtube.com/embed/QvcYjSI_RyQ?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1489689951/Free-Shipping-Cut-font-b-Chop-b-font-Crushing-Mashing-font-b-Slap-b-font-font_flssvw.jpg',
  description: "Slap Chop™ is a manual chopper machine that chops food when you slap the plunger. You can slap once or twice for large cuts or several times for finer cuts. You don't have to switch any blades. Today we're offering the Slap Chop™ for just $19.95 and $6.95 shipping and handling, and the Graty for cheese for FREE, just pay an additional $6.95 to cover the shipping and handling fee! Both the Slap Chop™ and the Graty for cheese comes with a limited 3 year warranty.",
  short_description: "Fantastico presents the Slap Chop! An all purpose kitchen helper that will make your life easier GUARANTEED",
  funding_goal: 23000,
  end_date: '10/7/2017'
)

chop1 = Reward.create(
  project_id: 4,
  amount: 40,
  limit: 400,
  title: "SlapChop and Drop",
  description: "Purchase your very own SlapChop! A great invention that makes cooking fun!",
  delivery_date: 'JAN 2018'
)

chop2 = Reward.create(
  project_id: 4,
  amount: 60,
  limit: 100,
  title: "Slappy Special",
  description: "At this tier receive a SlapChop and a limited edition teflon chef's apron from Fantastico!",
  delivery_date: 'JAN 2018'
)

wearable_towel5 = Project.create(
  creator_id: 5,
  city: 'San Diego',
  state: 'CA',
  title: 'The Wearable Towel',
  organization: 'Blanket People of America',
  video_url: 'https://www.youtube.com/embed/WjdyjL0dbG8?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1489697801/maxresdefault_rbbvi5.jpg',
  description: "With only three opening that are placed along the side of the towel, you can stay confidently, completely comfortably covered, while having the freedom to use your hands. So whether you’re at home, the spa, by the pool or at the beach, you can wear it, change in it, lay on it or just use it to dry off. Other modifications of the towel are well known however, all of these towels either use buttons, straps or fasteners to keep the towel from falling off. The Wearable Towel does not employ the use of any type of fastener. This novel configuration is available in in venetian red, ivory white and cobalt blue. Increase your child’s standard of living by upgrading to the Wearable Towel today.",
  short_description: "Tired of having to choose between wearing clothes or wearing a towel? Tire no more! The wearable towel will solve all of your life's problems!",
  funding_goal: 38000,
  end_date: '6/17/2017'
)

towel1 = Reward.create(
  project_id: 5,
  amount: 120,
  limit: 400,
  title: "The Towel Itself",
  description: "Receive 1 wearable towel! Available in most sizes and colors!",
  delivery_date: 'JUL 2017'
)

towel2 = Reward.create(
  project_id: 5,
  amount: 400,
  limit: 100,
  title: "Towels of a Feather",
  description: "Receive 4 wearable towel! Available in most sizes and colors!",
  delivery_date: 'JUL 2017'
)

magic_bullet6 = Project.create(
  creator_id: 6,
  city: 'Boston',
  state: 'MA',
  title: 'The Magic Bullet',
  organization: 'FoodiMax',
  video_url: 'https://www.youtube.com/embed/43VClzXOvg8?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1489707800/index-cta-mb-desktop_iuxomo.jpg',
  short_description: "Stow away those bulky blenders and unwieldy food processors, and let the Magic Bullet work its charm!",
  description: "Handy versatile and easy to use, the Magic Bullet takes up minimal counter space while showcasing maximum speed and versatility. With its unique design and compact size, the Magic Bullet chops, mixes, blends, whips, grinds and more in less time than it takes to assemble standard kitchen appliances. And with a wide array of dishwasher-safe attachments, clean up is as easy as it gets. The secret to the Magic Bullet's time-saving efficiency is its specially designed blade and unique bullet shape. These features work together to quickly and forcefully circulate food back into the Cyclonic Cutting Zone®, allowing the Magic Bullet to do virtually any food prep task in seconds.",
  funding_goal: 29000,
  end_date: '8/24/2017'
)

bullet1 = Reward.create(
  project_id: 6,
  amount: 80,
  limit: 4000,
  title: "The Original Magic Bullet",
  description: "Receive 1 Magic Bullet sooper juicer!",
  delivery_date: 'SEP 2017'
)

bullet2 = Reward.create(
  project_id: 6,
  amount: 400,
  limit: 40,
  title: "The Silver Bullet",
  description: "Receive a limited edition Magic Bullet made entirely out of 100% silver! Blessed by priests, it can juice and destroy werewolves. VALUE!",
  delivery_date: 'SEP 2017'
)

shoe_dini7 = Project.create(
  creator_id: 4,
  city: 'Seattle',
  state: 'WA',
  title: 'ShoeDini',
  organization: 'Sellers with Sole',
  video_url: 'https://www.youtube.com/embed/9EZHVokj1lI?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1490202570/Calzador_Extensible._Shoe_Dini_3_mwq2my.jpg',
  short_description: "Escape the problems of every day shoe putting on and join the great magicians of old",
  description: "Even the best escapologists struggle to slip out of their shoes. As Harry Houdini rolls over in his grave, Gilbert Gottfried's grating voice plugs the ShoeDini, the world's first shoehorn on a stick. The 'telescoping handle' adjusts to customers of all heights, while the 'patented grip clip' keeps the shoe steady, ending your bending in the process. The ShoeDini infomercial does not try to hide its targeted demographic, appealing to 'anyone with arthritis or back pain, especially those with limited mobility.' Which might be why they chose Gottfried, whose shrieking voice can only be tolerated by those whose hearing is on the wane, to narrate.",
  funding_goal: 36000,
  end_date: '11/4/2017'
)

dini1 = Reward.create(
  project_id: 7,
  amount: 15,
  limit: 600,
  title: "One ShoeDini",
  description: "Get 1 ShoeDini at this low low low low low low price! So low I can't believe it",
  delivery_date: 'MAR 2018'
)

dini2 = Reward.create(
  project_id: 7,
  amount: 40,
  limit: 100,
  title: "ShoeDini and Shoes",
  description: "Get 1 ShoeDini and a pair of shoes to wear them with",
  delivery_date: 'MAR 2018'
)

glh8 = Project.create(
  creator_id: 18,
  city: 'Omaha',
  state: 'NB',
  title: 'Good Looking Hair',
  organization: 'Men Who Wear Hats',
  video_url: 'https://www.youtube.com/embed/2GeF7A05zQ8?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1490150852/hqdefault_hhi5qy.jpg',
  short_description: "GLH is the very latest breakthrough and contains almost life-like fibres that instantly give added body to your hair. GLH will take away that wispy look. Fill in those thin see-through spots and for men it can even cover bald spots. It's like instant hair in a can.",
  description: "GLH is the very latest breakthrough and contains almost life-like fibres that instantly give added body to your hair. GLH will take away that wispy look. Fill in those thin see-through spots and for men it can even cover bald spots. It's like instant hair in a can.
If you have tried everything give GLH a go. A fantastic new hair product that will end bad hair days forever. Our users make comments like 'It is just marvellous'.
You may have seen GLH on TV including The Panel, news services and even on movies like Mighty Joe Young, Fight Club, Ten Things I Hate About You, The Green Mile and our early products Lobo and Mane in The Fabulous Baker Boys.",
  funding_goal: 18000,
  end_date: '1/14/2018'
)

glh1 = Reward.create(
  project_id: 8,
  amount: 60,
  limit: 500,
  title: "1 Can of GLH",
  description: "At this tier, receive a single can of our amazing product!",
  delivery_date: 'DEC 2017'
)

glh2 = Reward.create(
  project_id: 8,
  amount: 100,
  limit: 300,
  title: "The Complete GLH System",
  description: "At this tier, receive the complete package of GLH products. Includes the original GLH spray, the combover comb, Dr. Maslowe's scalp oil, and a peppermint candy!",
  delivery_date: 'DEC 2017'
)

oxy9 = Project.create(
  creator_id: 37,
  city: 'San Francisco',
  state: 'CA',
  title: 'OxiClean',
  organization: 'The Kleeners',
  video_url: 'https://www.youtube.com/embed/ZTpXh33Mbeg?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1490245095/oxiclean_ko0gqd.jpg',
  short_description: "Feel the power of OxiClean! Get it today",
  description: "The solution to your toughest stains—indoors and out
Life can get messy—but who wants to spend all day scrubbing dirt and stains? Luckily, OxiClean™ Versatile Stain Remover is the answer to almost every stain-fighting need you have—in laundry, and beyond! When used as directed, its oxygen-based water-activated formula safely gets tough dirt and grime out of clothes, carpets and nearly any surface in your home.
Use as a presoak for your laundry before you wash your clothes—there’s hardly a clothing stain that can’t be eradicated with OxiClean™ Versatile Stain Remover.
Add a scoop to every load—it works in both High Efficiency (HE) and non-HE washing machines to get your clothes extra clean. Just put your detergent into the cup, and add OxiClean™ directly to the drum.
Dissolve OxiClean™ versatile powder in water and blot away carpet and upholstery stains.
Make a solution and pretreat with a squeeze bottle to remove stains on contact.
It’s chlorine-free, color safe and available in Regular and Free (scent and dye-free) varieties.",
  funding_goal: 21000,
  end_date: '5/22/2017'
)

oxy1 = Reward.create(
  project_id: 9,
  amount: 20,
  limit: 3000,
  title: "The Oxi Experience",
  description: "Receive the one the only, the original OxiClean! It will clean everything!",
  delivery_date: 'JULY 2017'
)

oxy2 = Reward.create(
  project_id: 9,
  amount: 50,
  limit: 300,
  title: "The Complete Oxi Experience",
  description: "With this bundle stains will be gone from your life forever. All will be envious of the immaculate vision that has become your abode",
  delivery_date: 'JULY 2017'
)

mask10 = Project.create(
  creator_id: 45,
  city: 'Bangor',
  state: 'ME',
  title: 'Rejuvenique Electric Facial Mask',
  organization: 'Company Who Does Not Steal Faces',
  video_url: 'https://www.youtube.com/embed/SXcYVh-W14E?ecver=1',
  project_pic: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1490316138/arts-foundfootage2-9-18_dtvbrh.jpg',
  short_description: "This mask will make you feel like a new you! Work out those saggy face muscles and look beautiful",
  description: "By delivering a light pulsation from a 9-volt battery (included), the 26 gold-plated contact points inside this facemask gradually tone the skin and reduce the appearance of wrinkling. The mask's control unit has a knob that adjusts the pulsation intensity to suit individual preference. Though the mask is made of hard plastic, you can adjust the headband and extend key contact points by rotating them so you can fit the mask to any face size, both male and female.
A booklet clearly explains how to use the mask, and a video is included for additional instruction. The basics, however, are easy to grasp. The 26 contact points cover 12 zones of the face. When it's turned on, the mask activates the contact points in a particular zone for about 20 seconds, and then proceeds though the other 11 zones one by one, repeating the sequence four times. A full treatment takes about 15 minutes, and you may apply two treatments each day. To ensure proper skin interaction, each contact point needs a dab of toning gel. Two ounces of gel are included, but you can purchase more separately, along with additional contact points if the originals wear down. The mask carries a one-year warranty against defects.",
  funding_goal: 17000,
  end_date: '7/22/2017'
)

mask1 = Reward.create(
  project_id: 10,
  amount: 35,
  limit: 3000,
  title: "The Mask of your Dreams",
  description: "This mask will change your life! At this low price it will definitely not psychologically scar your loved ones.",
  delivery_date: 'AUG 2017'
)

mask2 = Reward.create(
  project_id: 10,
  amount: 100,
  limit: 200,
  title: "Prince of Darkness",
  description: "Receive the Rejuvenique Mask and a spooky black robe. Great for a Halloween outfit!",
  delivery_date: 'AUG 2017'
)

leisure_snuggie = Tagging.create(tag_id: 7, project_id: 1)
personal_snuggie = Tagging.create(tag_id: 1, project_id: 1)
health_hawaii = Tagging.create(tag_id: 5, project_id: 2)
fitness_hawaii = Tagging.create(tag_id: 4, project_id: 2)
house_sham = Tagging.create(tag_id: 2, project_id: 3)
house_chop = Tagging.create(tag_id: 2, project_id: 4)
elec_chop = Tagging.create(tag_id: 3, project_id: 4)
beauty_towel = Tagging.create(tag_id: 6, project_id: 5)
leisure_towel = Tagging.create(tag_id: 7, project_id: 5)
health_bullet = Tagging.create(tag_id: 5, project_id: 6)
house_bullet = Tagging.create(tag_id: 2, project_id: 6)
elec_bullet = Tagging.create(tag_id: 3, project_id: 6)
personal_dini = Tagging.create(tag_id: 1, project_id: 7)
beauty_glh = Tagging.create(tag_id: 5, project_id: 8)
personal_glh = Tagging.create(tag_id: 1, project_id: 8)
house_oxi = Tagging.create(tag_id: 2, project_id: 9)
beauty_mask = Tagging.create(tag_id: 6, project_id: 10)
elec_mask = Tagging.create(tag_id: 3, project_id: 10)


1200.times do
  Contribution.create(amount: Random.new.rand(10...150),
                      backer_id: Random.new.rand(2...range),
                      reward_id: Random.new.rand(1...Reward.all.length)
                      )
end

comments = [
  "I enjoyed this product and am not a robot",
  "This worked for me and it can work for you!",
  "I am in no way associated with these people and can say this product 100% works",
  "So great, works well",
  "Is this worth it?",
  "Can I get a refund if it breaks?",
  "This right here is the real deal",
  "I will never have to buy another product ever again!",
  "Ok"
]

100.times do
  Comment.create(author_id: Random.new.rand(2...range),
                 project_id: Random.new.rand(1...10),
                 body: comments[Random.new.rand(0...comments.length)]
                 )
end
