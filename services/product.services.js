import { Product } from "../models/product.model.js";
// import hotItems from "../../client/src/components/Data/HotProductsData.js";
export const createNewProduct = async (body) => {
  const newProduct = new Product(body);
  return await newProduct.save();
};

export const updatedProductInDB = async (paramsId, body) => {
  const updateProduct = Product.findByIdAndUpdate(
    paramsId,
    {
      $set: body,
    },
    { new: true }
  );

  return await updateProduct;
};

export const deleteProductInDB = async (paramsId) => {
  const deleteProduct = Product.findByIdAndDelete(paramsId);
  return await deleteProduct;
};

export const findProductInDB = async (paramsId) => {
  const product = Product.findById(paramsId);
  return await product;
};

export const findNewProductsInDB = async () => {
  const products = Product.find().sort({ createdAt: -1 }).limit(2);
  return await products;
};

export const findCatProductsInDB = async (categoryQuery) => {
  const products = Product.find({
    categories: {
      $in: [categoryQuery],
    },
  });
  return await products;
};

export const findAllProductsInDB = async () => {
  const products = Product.find();
  return await products;
};

export const deleteProducts = async () => {
  return await Product.deleteMany();
};

export const findProducts = async (query) => {
  return await Product.find({
    $and: [{ title: { $regex: query } }],
  });
};

/////////////////////////////////////////////////////////////////////
const hotItems = [
  {
    id: 1,
    img: "/assets/images/products/lego/hot-1.jpg",
    title: "LEGO City Touring Stunt Bike 60331 Building Kit",
    shortTitle: "LEGO City Touring Stunt Bike",
    price: 7.99,
    age: "5+",
    pieces: 10,
    categories: ["LEGO-City"],
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Toy stunt motorcycle – Introduce kids aged 5 and up to the exciting world of LEGO City Stuntz with this flywheel-powered toy stunt bike playset, including a Stuntz minifigure",
      "What’s in the box? – All kids need to build a flywheel-powered stunt bike and LEGO City Stuntz minifigure, The Lone Wolf Biker",
      "Real stunt action – Kids push the stunt bike to activate the flywheel, then launch it for fun wheelies and airborne maneuvers",
      "A fun gift – The LEGO City Touring Stunt Bike (60331) playset can be given as a holiday, birthday or any-other-day surprise for kids aged 5 and up who like cool action toys ",
      "A take-along toy – Once built, the Touring Stunt Bike measures over 1.5 in. (3.5 cm) high, 2.5 in. (7 cm) long and less than 1 in. (2 cm) wide",
    ],
    info: {
      dimensions: "3.58 x 4.8 x 1.85 inches",
      weight: "1.41 ounces",
      rec_age: "5 years and up",
      reviews: "80 ratings 4.7 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "Kids can enjoy hours of action-packed play with this LEGO City Touring Stunt Bike (60331) toy playset, featuring a cool, flywheel-powered motorcycle for performing amazing wheelies and stunts. Just add the Lone Wolf Biker minifigure and the scene is set for nonstop stunt-show fun! This toy stunt bike set comes with an easy-to-follow pictorial building guide so kids can enjoy the pride and delight of building their own LEGO toys or join friends and family members for a fun building experience. LEGO City playsets put kids at the heart of the action with cool vehicles, realistic structures and fun characters that inspire realistic role play. Combine this set with others from the LEGO City Stuntz range for more stunt-show extravaganzas!",

    //  {
    //     name: "Hippy John",
    //     stars: 5,
    //     title: "Love Lego",
    //     content:
    //       "They are getting to expensive",
    //   },
    // {
    //     name: "Karen",
    //     stars: 5,
    //     title: "Tough and Cute!",
    //     content:
    //       "This big kid loves to hold this tough guy in her hand. The mustache, sunglasses, chain necklace details are well thought out. Wolf man means business and he came dressed to win the race.",
    //   },
    // {
    //     name: "Karen",
    //     stars: 5,
    //     title: "Tough and Cute!",
    //     content:
    //       "This big kid loves to hold this tough guy in her hand. The mustache, sunglasses, chain necklace details are well thought out. Wolf man means business and he came dressed to win the race.",
    //   },
    // {
    //     name: "kim",
    //     stars: 3,
    //     title: "ok",
    //     content:
    //       "Bought for my grandson as a gift, he loves it. My only issue was that they box was crushed. Other than that seems to be all all good.",
    //   },
    reviews: {
      name: "Alan",
      stars: 5,
      title: "Extra goggles and mustache",
      content: "The gimic is just fine however the bike could use more paint.",
    },
  },
  {
    id: 2,
    img: "/assets/images/products/lego/hot-2.jpg",
    title: "LEGO® City Reckless Scorpion Stunt Bike 60332 Toy Building Kit",
    shortTitle: "LEGO® City Reckless Scorpion Stunt Bike",
    price: 7.99,
    categories: ["LEGO-City"],
    age: "5+",
    pieces: 15,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 5 years",
    about: [
      "Self-powered toy stunt bike – Ramp up the action with this LEGO City Reckless Scorpion Stunt Bike (60332) toy playset, complete with a LEGO City Stuntz rider minifigure",
      "What’s in the box? – All kids need to build a flywheel-powered stunt motorbike, plus a LEGO City Stuntz Scorpion Luchadora minifigure and a scorpion figure",
      "Real stunt action – Kids push the stunt bike to activate the flywheel, then release it to perform fun wheelies and airborne maneuvers",
      "A treat for kids aged 5 and up – This LEGO City Stuntz playset can be given as a holiday, birthday or any-other-day surprise",
      "Dimensions – When built, the Reckless Scorpion Stunt Bike measures over 1 in. (3.5 cm) high, 2.5 in. (6 cm) long and less than 1 in. (2 cm) wide",
    ],
    info: {
      dimensions: "3.58 x 4.8 x 1.85 inches",
      weight: "1.41 ounces",
      rec_age: "5 years and up",
      reviews: "195 ratings 4.8 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "Power up kids’ play with the LEGO City Reckless Scorpion Stunt Bike (60332) toy playset, featuring a cool flywheel-powered stunt motorcycle and the LEGO City Stuntz character Scorpion Luchadora, complete with her pet scorpion figure – a perfect duo for crowd-thrilling stunt-show action. This toy stunt bike set comes with an easy-to-follow pictorial building guide so kids can enjoy building their own LEGO toys or join friends and family members for a fun building experience. LEGO City playsets put kids at the heart of the action with cool vehicles, feature-rich structures and inspiring characters for realistic role play. Combine this set with others from the LEGO City Stuntz range for even bigger stunt-show extravaganzas!",

    // {
    //   name: "jackie",
    //   stars: 5,
    //   title: "Easy! Great gift for 4/5 yr old",
    //   content:
    //     "My 4 yr old put this together in less than 4 mins",
    // },
    // {
    //   name: "Trisha",
    //   stars: 5,
    //   title: "Legos",
    //   content:
    //     "My 4 year old loves Legos and was able to assemble this without guidance in about ten minutes.",
    // },
    // {
    //   name: "Laurie Cooper",
    //   stars: 5,
    //   title: "Fun",
    //   content:
    //     "Bought this as a stocking stuffer for my grandson. Most enjoyed toy he had for Christmas.",
    // },
    // {
    //   name: "Diana Kearns",
    //   stars: 5,
    //   title: "Made well",
    //   content:
    //     "Strong and sturdy. My 7 year old loves it. Pieces are not for infants but perfect for little builders.",
    // },
    reviews: {
      name: "Gabriel Garcia",
      stars: 5,
      title: "Easy Assembly",
      content:
        "Came as advertised and is simple to assemble since the bike is done and all you have to do is the minifigure. A great gift option.",
    },
  },
  {
    id: 3,
    img: "/assets/images/products/lego/hot-3.jpg",
    title: "LEGO® The Mandalorian & The Child 295 Pieces Toy Set",
    shortTitle: "LEGO® The Mandalorian & The Child",
    price: 19.99,
    categories: ["LEGO-Star-Wars"],
    age: "10+",
    pieces: 295,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Star Wars: The Mandalorian fans and creative kids will love building their own LEGO BrickHeadz versions of the Child and The Mandalorian (75317), recreating authentic details to create a cool display",
      "The Mandalorian buildable LEGO figure has signature weapons – a blaster rifle clipped on the back and a blaster pistol in hand – to spark memories of thrilling Star Wars: The Mandalorian scenes",
      "Youngsters will love the Child building toy with adjustable ears for different expressions, and its hoverpram ‘floating’ on a transparent LEGO element; Both construction models have baseplates for display",
      "This 295-piece LEGO BrickHeadz Star Wars building toy makes an awesome birthday present, holiday gift or anytime surprise for Star Wars: The Mandalorian fans and LEGO builders aged 10 and up ",
      "The Mandalorian measures 3” (8cm) tall and the Child and hoverpram building toy measures 3” (8cm) high – they won't take up too much space but are sure to make a big impression wherever they are displayed",
    ],
    info: {
      dimensions: "7.52 x 5.55 x 2.78 inches",
      weight: "5 ounces",
      rec_age: "10 years and up",
      reviews: "24,827 ratings 4.9 out of 5 stars",
      release: "July 13, 2020",
      manufac: "LEGO",
    },
    desc: "Inspire memories of epic Star Wars: The Mandalorian stories with this fun building toy for creative kids, featuring LEGO BrickHeadz versions of The Mandalorian and the Child (75317). Fans will appreciate authentic details such as The Mandalorian’s signature weapons – a blaster rifle and a blaster pistol. The Child has adjustable ears to create happy and sad expressions, and it sits in a hoverpram ‘floating' on 4 transparent LEGO elements. A great addition to any Star Wars fan’s collection, this awesome construction toy is fun to build solo or with friends and family, and each of the buildable LEGO figures has a baseplate to create an eye-catching display. The LEGO Group has been recreating iconic starships, vehicles, locations and characters from the legendary Star Wars universe since 1999. LEGO Star Wars is now its most successful theme offering a huge variety of birthday, holiday and surprise gift ideas to delight all ages.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },

  {
    id: 4,
    img: "/assets/images/products/lego/hot-4.jpg",
    title: "LEGO® Duplo Rescue Doctor Visit 10968 Educategoriesional Building",
    shortTitle: "LEGO® Duplo Rescue Doctor Visit",
    price: 19.99,
    categories: ["LEGO-Duplo"],
    age: "2+",
    pieces: 34,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Great gift for little doctors – LEGO DUPLO Rescue Doctor Visit (10968) introduces preschoolers to fun activities at the health clinic. It’s also an excellent way to prepare for a doctor’s visit",
      "Fun-packed playset – Includes 3 LEGO DUPLO figures – a doctor, father and a child, plus the child’s teddy bear, a giraffe height chart, washbasin, couch, opening suitcase and 2 chairs",
      "Imaginative role-play – Kids use the doctor’s flexible stethoscope (permanently attached) to check the child’sheartbeat and play out endless caring stories of their own",
      "Health clinic for caring kids – This hands-on playset is ideal for little doctors and nurses aged 2 and up, and for parents who wish to share their little ones’ precious developmental milestones",
      "Versatile playset – This toddler-friendly set measures over 6.5 in. (17 cm) high, 7 in. (20 cm) wide and 3.5 in. (10 cm) deep and combines easily with other LEGO DUPLO toys for added enjoyment",
    ],
    info: {
      dimensions: "10.32 x 7.52 x 4.65 inches",
      weight: "11.3 ounces",
      rec_age: "24 months and up",
      reviews: "175 ratings 4.9 out of 5 stars",
      release: "March 1, 2022",
      manufac: "LEGO",
    },
    desc: "Little doctors and nurses will love the fun activities and friendly physician that feature in LEGO DUPLO Rescue Doctor Visit (10968). This versatile playset is also an excellent way to prepare youngsters aged 2+ for a visit to the doctor.Developmental doctor playset.Introduce preschoolers to the fun activities that occur at a health clinic. The friendly doctor uses a flexible stethoscope (permanently attached) to listen to the child’s heart – and the child’s top features a heart motif; there’s a giraffe height chart on the wall; a sink to wash hands in; and chairs where Dad can sit. This playset is all about the importance of good health and caring behavior, which makes it ideal for developing kids’ social and emotional skills.Playful learning for toddlers.Parents can share precious developmental milestones as LEGO DUPLO toys put open-ended fun, self-expression and joyful exploration into young children’s hands.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },

  {
    id: 5,
    img: "/assets/images/products/lego/hot-5-1.jpeg",
    title: "LEGO Star Wars: The Mandalorian Trouble on Tatooine 75299",
    shortTitle: "LEGO Star Wars: The Mandalorian Trouble on Tatooine",
    price: 9.99,
    categories: ["LEGO-Star-Wars"],
    age: "7+",
    pieces: 277,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Kids can recreate scenes from Star Wars: The Mandalorian Season 2 and play out their own speeder-bike-riding, missile-shooting battle stories with this Trouble on Tatooine (75299) building toy",
      "Includes The Mandalorian and Tusken Raider LEGO minifigures, each with weapons for role-play battles, plus a LEGO figure of the Child (Grogu)",
      "The speeder has a LEGO minifigure seat and saddlebag for the Child to sit in. The set also features a buildable Tusken hut hideout and spring-loaded, missile-shooting ballista for the Tusken Raider",
      "Great for solo building and play or for sharing the fun with friends, this awesome construction toy makes the best birthday present, holiday gift or surprise treat for creative kids aged 7 and up",
      "The speeder measures over 1.5 in. (3 cm) high, 5 in. (13 cm) long and 1.5 in. (3 cm) wide, and this complete set combines brilliantly with other LEGO Star Wars buildable playsets for creative play",
    ],
    info: {
      dimensions: "10.32 x 7.52 x 1.81 inches",
      weight: "11 ounces",
      rec_age: "7 years and up",
      reviews: "8414 ratings 4.8 out of 5 stars",
      release: "January 1, 2021",
      manufac: "LEGO",
    },
    desc: "Children will love teaming up with The Mandalorian and a Tusken Raider for desert missions with this LEGO Star Wars Trouble on Tatooine set (75299). It features The Mandalorian’s speeder bike with a LEGO minifigure seat and saddlebag for the Child (Grogu) to sit in, plus a buildable Tusken hut and a missile-shooting ballista for the Tusken Raider. This awesome kids' building toy includes The Mandalorian and Tusken Raider LEGO minifigures, a LEGO figure of the Child (Grogu), plus cool weapons to inspire hours of role-play fun. A great gift idea for young Star Wars: The Mandalorian fans, it comes with clear instructions so even LEGO first-timers can enjoy the building experience. Since 1999, the LEGO Group has been recreating iconic starships, vehicles, locations and characters from the Star Wars universe. LEGO Star Wars has become its most successful theme with a huge variety of sets to excite fans of all ages.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 6,
    img: "/assets/images/products/lego/hot-6.jpg",
    title: "LEGO® Friends Ice-Cream Truck 41715 Building Kit",
    shortTitle: "LEGO® Friends Ice-Cream Truck",
    price: 19.99,
    categories: ["LEGO-Friends"],
    age: "4+",
    pieces: 84,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Food toy feeds imaginations – The LEGO Friends Ice-Cream Truck (41715) serves up hours of role-play fun for boys and girls aged 4+ as they pretend to sell ice creams and hang out with friends",
      "Creative gift packed with features – Comes with LEGO Friends characters Andrea and Roxy, plus a dog figure and all the bricks needed to construct a colorful ice-cream truck",
      "Authentic details – Kids can pretend to drive the truck around, get different-flavored ice creams or a popsicle from the truck’s freezer, use the cash register or feed the dog a bone",
      "Shop play for kids aged 4 and up – This ice-cream truck makes a great anytime gift for boys and girls who love to play shop or make toy vehicles",
      "Designed for little builders – 4+ toy playsets are easy to build thanks to the included Starter Bricks: a sturdy base onto on which the bricks of this food truck toy are assembled",
    ],
    info: {
      dimensions: "10.32 x 7.52 x 1.81 inches",
      weight: "10.9 ounces",
      rec_age: "4 years and up",
      reviews: "104 ratings 4.8 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "Serve up a sweet treat for little builders aged 4 and up who love food play with the LEGO Friends Ice-Cream Truck (41715) toy. It comes with LEGO Friends Andrea and Roxy mini-dolls, plus a cute dog figure. Kids build the cool truck then pretend to be the server making delicious frozen treats or play at hanging out with friends around the seating area. 4+ toy playsets are designed to make construction child’s play. Youngsters create this cool truck by assembling the bricks on the sturdy Starter Brick base. The play starts right away since each bag of bricks contains a character and a build. Not that kids will need much help to make their model – this ice-cream playset comes with interactive digital building instructions. The free LEGO Building Instructions app lets builders of any age zoom, rotate and view the model using the special ghost mode for immersive construction fun.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 7,
    img: "/assets/images/products/lego/hot-7.jpg",
    title: "LEGO® Harry Potter Hogwarts Carriage and Thestrals 76400",
    shortTitle: "LEGO® Harry Potter Hogwarts Carriage and Thestrals",
    price: 19.99,
    categories: ["LEGO-Harry-Potter"],
    age: "7+",
    pieces: 121,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Packed with role-play fun – LEGO Harry Potter Hogwarts Carriage and Thestrals (76400) is quick to build and will inspire magical adventures that never end",
      "Iconic characters – Includes Harry Potter and Luna Lovegood minifigures, an adult and baby Thestral, plus a buildable carriage that attaches to the adult Thestral",
      "Many ways to play – This playset will inspire kids to recreate favorite scenes from Harry Potter and the Order of the Phoenix and role-play imaginative adventures of their own",
      "Magical gift – This buildable playset brings Harry Potter magic to kids aged 7 and up, whether given as a birthday present, holiday gift or special treat",
      "Build, play and display – The carriage pulled by the adult Thestral (wings folded) measures over 3.5 in. (9 cm) high, 6.5 in. (17 cm) long and 2.5 in. (6 cm) wide",
    ],
    info: {
      dimensions: "10.32 x 5.55 x 1.89 inches",
      weight: "7 ounces",
      rec_age: "7 years and up",
      reviews: "496 ratings 4.9 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "LEGO Harry Potter Hogwarts Carriage and Thestrals (76400) is a buildable toy for children aged 7 and up, with magical creatures to care for and carriage rides to enjoy for endless adventures. Young witches, wizards and Muggles will love to join Harry Potter and Luna Lovegood as they discover an adult and baby Thestral in the Forbidden Forest. There’s an apple and meat to feed the mystical, winged creatures before taking a Thestral-drawn carriage ride to the next enchanting escapade. This versatile playset will inspire kids to recreate memorable scenes from Harry Potter and the Order of the Phoenix and role-play endless adventures of their own. The free LEGO Building Instructions app lets kids view, zoom and rotate the model as they build, providing an amazing sense of immersion and interaction during the construction process.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 8,
    img: "/assets/images/products/lego/hot-8.jpg",
    title: "LEGO® Friends Heartlake City Pizzeria 41705 Building",
    shortTitle: "LEGO® Friends Heartlake City Pizzeria",
    price: 14.99,
    categories: ["LEGO-Friends"],
    age: "5+",
    pieces: 144,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "A serving of fun food play – The LEGO Friends Heartlake City Pizzeria (41705) gift is packed with creative accessories and features to bring restaurant play to life",
      "Gift for pizza lovers – Includes LEGO Friends Olivia and Ethan, a separate outdoor seating area, pretend pizza oven, pizza paddle, skateboard and food toys such as cheese, a grater and a sauce bottle",
      "Lots of ways to play – Kids can pretend to be the chef, play shop in the takeout or serve diners at the table",
      "A gift to get the creative juices flowing – Designed for kids aged 5 and up, this buildable playset brings restaurant fun to kids’ bedrooms",
      "Dimensions – This LEGO Friends toy playset measures over 4 in. (12 cm) high, 4 in. (11 cm) wide and 2 in. (6 cm) deep",
    ],
    info: {
      dimensions: "10.32 x 5.55 x 2.84 inches",
      weight: "7.7 ounces",
      rec_age: "5 years and up",
      reviews: "140 ratings 4.7 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "Get kids’ creative juices flowing with this fun LEGO Friends Heartlake City Pizzeria (41705) set. Youngsters aged 5+ can play at pretending to work in a pizza restaurant. This gift for pizza lovers comes with lots of food toy accessories for kids to explore. The playset has a takeout where kids can pretend to take orders and use the till, while the separate seating area sets the scene for restaurant role play. With a pretend pizza oven, this set serves up lots of flexible fun as kids can set out their pizzeria however they want. This colorful set comes with 2 LEGO Friends characters and a wealth of fun accessories to spark hours of creative storytelling. This colorful playset looks great on display in kids’ bedrooms thanks to all the cool styling.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 9,
    img: "/assets/images/products/lego/hot-9.jpg",
    title: "LEGO® Duplo Rescue Police Motorcycle 10967 Building Toy",
    shortTitle: "LEGO® Duplo Rescue Police Motorcycle",
    price: 9.99,
    categories: ["LEGO-Duplo"],
    age: "2+",
    pieces: 5,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Fun police mission – LEGO DUPLO Rescue Police Motorcycle (10967) is a hands-on treat for preschoolers with an interest in police work, cool motorcycles and caring for animals",
      "Inspires imaginative play – The set includes 2 LEGO DUPLO figures – a police officer and a cute dog – a ‘lost dog’ poster, plus a cool blue police motorcycle for the officer and dog to ride on",
      "A fun way to build skills – As kids role-play imaginative police-rescue stories, they improve their fine motor skills and strengthen their social and emotional awareness",
      "Perfect for preschoolers – This hands-on playset is ideal for little police officers aged 2 and up and is also a great way for parents to share precious developmental milestones",
      "Many ways to play – The motorcycle measures over 1 in. (5 cm) high 3 in. (9 cm) long and 1 in. (4 cm) wide. The set also combines with other LEGO DUPLO toys for even more fun",
    ],
    info: {
      dimensions: "6.18 x 5.55 x 2.4 inches",
      weight: "4.6 ounces",
      rec_age: "24 months and up",
      reviews: "406 ratings 4.8 out of 5 stars",
      release: "March 1, 2022",
      manufac: "LEGO",
    },
    desc: "LEGO DUPLO Rescue Police Motorcycle (10967) provides hands-on developmental play that will delight any preschooler aged 2+ with an interest in police work, cool motorcycles and caring for animals.A police rescue with endless play possibilities.A cute dog has gone missing! Can your little hero help the police officer find the lost pet? There’s a ‘Lost Dog’ poster to put up and an exciting mission to complete. Where is the dog hiding this time? With a cute animal to care for and a friendlypoliceman on a push-along motorcycle, this versatile playset will strengthen preschoolers’ social, emotional and fine motor skills as they play out the real-life adventures of an everyday hero.Playful learning for toddlers.Parents can share precious developmental milestones as LEGO DUPLO toys put open-ended fun, self-expression and joyful exploration into young children’s hands.",

    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 10,
    img: "/assets/images/products/lego/hot-10.jpg",
    title: "LEGO® City Police 60275 Helicopter Building Kit",
    shortTitle: "LEGO® Duplo Rescue Police Motorcycle",
    price: 9.99,
    categories: ["LEGO-City"],
    age: "4+",
    pieces: 51,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "This easy-to-build Police Helicopter (60275) playset makes a great introduction to the awesome LEGO City universe, where boys and girls aged 4 and up can immerse themselves in endless creative play",
      "There’s a robust toy police helicopter, crook's water scooter and 2 banknote elements, plus police officer and crook minifigures; Just add a touch of imagination for endless fun",
      "The police helicopter toy has a minifigure cockpit, spinnable rotors and an opening fuselage for the captured crook; Kids can attach the crook and her stolen banknote elements to the water scooter",
      "Makes an awesome Holiday, birthday or any-other-day gift for fans of LEGO City and a great introduction to the LEGO City universe for boys and girls aged 4 and up",
      "The helicopter measures over 3 in. (8 cm) high, 5 in. (12 cm) long and 2 in. (5 cm) wide – so there's plenty of room for the LEGO City police pilot",
    ],
    info: {
      dimensions: "6.18 x 5.55 x 2.4 inches",
      weight: "4.2 ounces",
      rec_age: "4 years and up",
      reviews: "1275 ratings 4.8 out of 5 stars",
      release: "March 1, 2022",
      manufac: "LEGO",
    },
    desc: "Kids with a passion for role play will love this LEGO City Police Helicopter (60275) playset, featuring a sturdy police helicopter toy with spinnable rotors and a cool water scooter. Just add the police officer and crook minifigures, handcuffs, toy banknotes and a touch of imagination for endless crook-catching adventures. This durable 4+ building set includes a simple printed building guide and a special Starter Brick element to help even first-time builders experience the pride of constructing their own LEGO toys. And with the free LEGO Building Instructions app for smartphones and tablets, kids get Instructions PLUS – an interactive construction guide with amazing zoom and rotate viewing tools that really make LEGO building child's play. LEGO City police sets deliver an exciting build-and-play experience with realistic models and fun characters that depict real life in a fun and imaginative way.",
    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 11,
    img: "/assets/images/products/lego/hot-11.jpg",
    title: "LEGO® Friends Recycling Truck 41712 Building Kit",
    shortTitle: "LEGO® Friends Recycling Truck",
    price: 19.99,
    categories: ["LEGO-Friends"],
    age: "6+",
    pieces: 259,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Fun toy for kids who care – Help kids play out their clean planet dreams with the LEGO Friends Recycling Truck (41712) playset, where they can sort trash and keep wildlife safe",
      "Just like the real thing – Waste-management truck toy comes with removable containers, seats upfront for the 2 mini-dolls, a hinged arm that lifts the garbage cans, and a raccoon figure",
      "Playing out the real world – Kids help LEGO Friends Emma and River pick up the trash with the grabbers and toy shovel, sort the trash and attach the garbage cans to the truck",
      "For boys and girls aged 6+ – A gift for a kid who cares for the environment or one that loves making realistic vehicle models",
      "Colorful display – Measuring over 2.5 in. (7 cm) high, 6 in. (15 cm) long and 2 in. (6 cm) wide, this garbage truck takes up little space parked up next to a kid’s other model vehicles",
    ],
    info: {
      dimensions: "10.32 x 7.52 x 2.4 inches",
      weight: "13.1 ounces",
      rec_age: "6 years and up",
      reviews: "136 ratings 4.8 out of 5 stars",
      release: "August 1, 2022",
      manufac: "LEGO",
    },
    desc: "Looking for a fun toy for a kid aged 6 and up who cares about the environment? The Recycling Truck (41712) is for them. Kids patrol the beach with LEGO Friends Emma and River, collecting the trash to keep wildlife safe. The waste-management toy set comes with 3 garbage cans for sorting recycling into paper, food and glass. It also includes cool toy accessories to bring the play to life, such as a toy shovel and a trash grabber. The garbage truck comes with a movable arm for kids to attach to the cans to tip their contents into the containers. This cool gift gives kids the best chance of building success. Not only does it come with a step-by-step picture guide, but it also has interactive digital building instructions. Available in the free LEGO Building Instructions app for smartphones and tablets, the instructions use intuitive zoom and rotate tools that allow kids to visualize the finished model as they build.",
    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
  {
    id: 12,
    img: "/assets/images/products/lego/hot-12.jpg",
    title: "LEGO® Disney and Pixar?s Lightyear Zyclops Chase 76830",
    shortTitle: "LEGO® Disney and Pixar?s Lightyear Zyclops Chase",
    price: 19.99,
    categories: ["LEGO-Disney"],
    age: "4+",
    pieces: 87,
    warning:
      "Warning - choking hazard - contains small parts not suitable for children under 3 years",
    about: [
      "Relive scenes from the definitive origin story of Buzz Lightyear – Treat boys and girls aged 4 and up to the Lightyear Zyclops Chase (76830) playset inspired by Disney and Pixar’s Lightyear ",
      "Buildable action toy for Buzz Lightyear fans – Creative set comes with LEGO Buzz Lightyear and Izzy minifigures kitted out in spacesuit helmets and armor, a posable, buildable mech toy",
      "Save-the-day play – Buzz Lightyear fans enter a world of imaginative action and adventure as they move the buildable mech toy, launch his disc shooters and mobilize the heroes to win the battle",
      "Gift for Buzz Lightyear fans aged 4 and up – LEGO 4+ sets are quick to assemble and teach youngsters how to build, thanks to the inclusion of a Starter Brick and clear picture instructions ",
      "Birthday gift for play and display – Buildable mech toy stands over 4 in. (12 cm) tall, so it can be kept out on display in a room ready for anytime fun",
    ],
    info: {
      dimensions: "7.52 x 5.55 x 1.81 inches",
      weight: "6.3 ounces",
      rec_age: "4 years and up",
      reviews: "239 ratings 4.8 out of 5 stars",
      release: "April 24, 2022",
      manufac: "LEGO",
    },
    desc: "Know a Space-Ranger-in-training who loves Buzz Lightyear? Make their day with the Zyclops Chase (76830) building toy. Fans can recreate scenes from the Disney and Pixar movie Lightyear – the definitive origin story of Buzz Lightyear – as they learn to build with LEGO bricks. Buzz Lightyear’s minifigure wears a space suit and helmet, and the mech’s cool features include posable arms and legs and a disc shooter for dynamic battle fun. Simple builds for little Space-Rangers-in-training LEGO4+ sets come with clever features for a fun play experience. The Starter Brick provides a sturdy base for building, and there’s a figure in each bag of bricks so the role play can start before the set is completely built. 4+ gifts let adults share the building fun with kids. Grown-ups new to LEGO building needn’t worry – this collectible Buzz Lightyear buildable toy playset comes with picture instructions, making the process easy even for children who are only just starting to read.",
    // {
    //   name: "Skylar",
    //   stars: 5,
    //   title: " So much fun",
    //   content:
    //     "Bought this for my man and I to build together and it was a great bonding moment and me and him enjoy every second of it😊.I would 100% recommend doing this.I did get a little lost when figuring out his mask but I finally figured it out after a min or two .there pretty cheap legos and definitely worth the price.",
    // },
    // {
    //   name: "Sarah",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Got this for my son for the holidays. He’s 11, and his interest in Legos is not as high as it used to be, but he really enjoyed assembling this little set and put them up on the shelves with his bobble head collection.",
    // },
    // {
    //   name: "Great value",
    //   stars: 5,
    //   title: "Cute set for the older Lego fan",
    //   content:
    //     "Great value. Our 11 year old grandson loves it. Very cute characters. Would buy as a gift again
    // Price was great!",
    // },
    // {
    //   name: "Cailee",
    //   stars: 5,
    //   title: "Perfect",
    //   content:
    //     "I was worried about it being too easy because of how cheap but it wasent and it was fun and cute",
    // },
    reviews: {
      name: "Aidyn Smith",
      stars: 5,
      title: "Fun build",
      content:
        "Got this for my youngest for Christmas and he had me help him build it, was a easy build except for one Lego I had to use pliers to alter the inside slightly because there was too much flash left on the pice for it to fit",
    },
  },
];

export const createProducts = async () => {
  return await Product.create(hotItems);
};
