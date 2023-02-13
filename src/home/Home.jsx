import React from "react";
import List from "../components/Navbar/List/List";
import Navbar from "../components/Navbar/Navbar";
import Featured from "../Featured/Featured";
import "./home.scss";
//TRENDING  - https://api.themoviedb.org/3/trending/all/day?api_key=4b5bdcb27cefc9008e581b938d9d4b43

//https://image.tmdb.org/t/p/original
  
  const popular={
    
    "results": [
      {
        
        "adult": false,
        "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 505642,
        "original_language": "en",
        "original_title": "Black Panther: Wakanda Forever",
        "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        "popularity": 7895.146,
        "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        "release_date": "2022-11-09",
        "title": "Black Panther: Wakanda Forever",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2963
      },
      {
        "adult": false,
        "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 646389,
        "original_language": "en",
        "original_title": "Plane",
        "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
        "popularity": 4467.59,
        "poster_path": "/2g9ZBjUfF1X53EinykJqiBieUaO.jpg",
        "release_date": "2023-01-13",
        "title": "Plane",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 328
      },
      {
        "adult": false,
        "backdrop_path": "/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg",
        "genre_ids": [
          16,
          12,
          35,
          10751,
          14
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 4607.945,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 3591
      },
      {
        "adult": false,
        "backdrop_path": "/t72ZvOZwtvcjZivZCFtCtL8QWb0.jpg",
        "genre_ids": [
          28,
          10749,
          35
        ],
        "id": 758009,
        "original_language": "en",
        "original_title": "Shotgun Wedding",
        "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
        "popularity": 4041.572,
        "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
        "release_date": "2022-12-28",
        "title": "Shotgun Wedding",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 378
      },
      {
        "adult": false,
        "backdrop_path": "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
        "genre_ids": [
          878,
          27,
          35
        ],
        "id": 536554,
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "popularity": 2667.039,
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "release_date": "2022-12-28",
        "title": "M3GAN",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1503
      },
      {
        "adult": false,
        "backdrop_path": "/a4I481szRmycyreQTLrRe4f4YJe.jpg",
        "genre_ids": [
          80,
          53,
          18
        ],
        "id": 842544,
        "original_language": "en",
        "original_title": "Transfusion",
        "overview": "Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife.  He is thrusted into the criminal underworld to keep his only son from being taken from him.",
        "popularity": 2212.595,
        "poster_path": "/bxh5xCCW9Ynfg6EZJWUkc1zqTnr.jpg",
        "release_date": "2023-01-05",
        "title": "Transfusion",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 75
      },
      {
        "adult": false,
        "backdrop_path": "/tCpMRsHlfR6CcqJYA3kJMS3YApt.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 1035806,
        "original_language": "en",
        "original_title": "Detective Knight: Independence",
        "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
        "popularity": 2302.978,
        "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
        "release_date": "2023-01-20",
        "title": "Detective Knight: Independence",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 50
      },
      {
        "adult": false,
        "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 843794,
        "original_language": "ko",
        "original_title": "정이",
        "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
        "popularity": 2441.161,
        "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
        "release_date": "2023-01-20",
        "title": "JUNG_E",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 280
      },
      {
        "adult": false,
        "backdrop_path": "/f9PSbuMeBS5CuHEOVyymg5lcq8J.jpg",
        "genre_ids": [
          28,
          53,
          9648,
          80,
          27
        ],
        "id": 996727,
        "original_language": "en",
        "original_title": "The Price We Pay",
        "overview": "After a pawn shop robbery goes askew, two criminals take refuge at a remote farmhouse to try to let the heat die down, but find something much more menacing.",
        "popularity": 1741.901,
        "poster_path": "/8fwJt0qZieQ7dKaiiqehObWpXYT.jpg",
        "release_date": "2023-01-13",
        "title": "The Price We Pay",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 49
      },
      {
        "adult": false,
        "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 2032.107,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 5222
      },
      {
        "adult": false,
        "backdrop_path": "/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg",
        "genre_ids": [
          878,
          27,
          12,
          28
        ],
        "id": 1013870,
        "original_language": "en",
        "original_title": "Kids vs. Aliens",
        "overview": "All Gary wants is to make awesome home movies with his best buds. All his older sister Samantha wants is to hang with the cool kids. When their parents head out of town one Halloween weekend, an all-time rager of a teen house party turns to terror when aliens attack, forcing the siblings to band together to survive the night.",
        "popularity": 1373.826,
        "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
        "release_date": "2023-01-20",
        "title": "Kids vs. Aliens",
        "video": false,
        "vote_average": 6,
        "vote_count": 24
      },
      {
        "adult": false,
        "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
        "genre_ids": [
          10752,
          36,
          18
        ],
        "id": 653851,
        "original_language": "en",
        "original_title": "Devotion",
        "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
        "popularity": 1347.579,
        "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
        "release_date": "2022-11-23",
        "title": "Devotion",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 283
      },
      {
        "adult": false,
        "backdrop_path": "/vLPSvAt1CnfmDCeqG3zkFh0s6S4.jpg",
        "genre_ids": [
          10752,
          28
        ],
        "id": 542196,
        "original_language": "en",
        "original_title": "Wolf Hound",
        "overview": "Inspired by the real-life German special operations unit KG 200 that shot down, repaired, and flew Allied aircraft as Trojan horses, \"Wolf Hound\" takes place in 1944 German-occupied France and follows the daring exploits of Jewish-American fighter pilot Captain David Holden. Ambushed behind enemy lines, Holden must rescue a captured B-17 Flying Fortress crew, evade a ruthless enemy stalking him at every turn, and foil a plot that could completely alter the outcome of World War II.",
        "popularity": 1312.986,
        "poster_path": "/gHC0eFvXXNokP3sSNCTG2uks87R.jpg",
        "release_date": "2022-06-03",
        "title": "Wolf Hound",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 63
      },
      {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
          14,
          28,
          878
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 1317.38,
        "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4128
      },
      {
        "adult": false,
        "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
        "genre_ids": [
          28,
          53,
          18
        ],
        "id": 846433,
        "original_language": "es",
        "original_title": "The Enforcer",
        "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
        "popularity": 1386.597,
        "poster_path": "/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg",
        "release_date": "2022-09-22",
        "title": "The Enforcer",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 207
      },
      {
        "adult": false,
        "backdrop_path": "/8oj1pbizI6RS5xlyETmlWh9mVqN.jpg",
        "genre_ids": [
          27
        ],
        "id": 955991,
        "original_language": "en",
        "original_title": "The Offering",
        "overview": "In the wake of a young Jewish girl’s disappearance, the son of a Hasidic funeral director returns home with his pregnant wife in hopes of reconciling with his father. Little do they know that directly beneath them in the family morgue, an ancient evil with sinister plans for the unborn child lurks inside a mysterious corpse.",
        "popularity": 1151.966,
        "poster_path": "/tbaTFgGIaTL1Uhd0SMob6Dhi5cK.jpg",
        "release_date": "2023-01-11",
        "title": "The Offering",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 71
      },
      {
        "adult": false,
        "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
        "genre_ids": [
          35,
          80,
          9648
        ],
        "id": 661374,
        "original_language": "en",
        "original_title": "Glass Onion: A Knives Out Mystery",
        "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
        "popularity": 981.516,
        "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
        "release_date": "2022-11-23",
        "title": "Glass Onion: A Knives Out Mystery",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 3427
      },
      {
        "adult": false,
        "backdrop_path": "/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
        "genre_ids": [
          28,
          35,
          80,
          53
        ],
        "id": 899112,
        "original_language": "en",
        "original_title": "Violent Night",
        "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
        "popularity": 1165.462,
        "poster_path": "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
        "release_date": "2022-11-30",
        "title": "Violent Night",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1168
      },
      {
        "adult": false,
        "backdrop_path": "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
        "genre_ids": [
          14,
          28,
          12,
          53
        ],
        "id": 736526,
        "original_language": "no",
        "original_title": "Troll",
        "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
        "popularity": 1037.52,
        "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
        "release_date": "2022-12-01",
        "title": "Troll",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1167
      },
      {
        "adult": false,
        "backdrop_path": "/vXjpwkXPirBmgdEpIknfN8ziDD.jpg",
        "genre_ids": [
          16,
          12,
          14,
          35
        ],
        "id": 947938,
        "original_language": "ru",
        "original_title": "Мальчик-дельфин",
        "overview": "When a plane crashes at sea, dolphins rescue a little boy and raise him as family. He lives a carefree life beneath the waves until an evil monster seizes power over the underwater world. The boy is banished to dry land, where a kind-hearted captain takes him in. With the captain’s help, the boy sets out on a journey to solve the mystery of his true identity.",
        "popularity": 878.184,
        "poster_path": "/gISoDEiaUH9BNEunmLC7FgUVaia.jpg",
        "release_date": "2022-04-07",
        "title": "Dolphin Boy",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 22
      }
    ],
  }

const trending={
  
  "results": [
    {
      "adult": false,
      "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
      "id": 100088,
      "name": "The Last of Us",
      "original_language": "en",
      "original_name": "The Last of Us",
      "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
      "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
      "media_type": "tv",
      "genre_ids": [
        18,
        10759
      ],
      "popularity": 7110.147,
      "first_air_date": "2023-01-15",
      "vote_average": 8.825,
      "vote_count": 1653,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/kMLZeN8YsMSuPp2fpyh4X526Vg6.jpg",
      "id": 703451,
      "title": "Your Place or Mine",
      "original_language": "en",
      "original_title": "Your Place or Mine",
      "overview": "When best friends and total opposites Debbie and Peter swap homes for a week, they get a peek into each other's lives that could open the door to love.",
      "poster_path": "/ApkSeqfIPRCxOtfjXYYE6Ji7jVU.jpg",
      "media_type": "movie",
      "genre_ids": [
        10749,
        35
      ],
      "popularity": 194.097,
      "release_date": "2023-02-10",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 136
    },
    {
      "adult": false,
      "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      "id": 505642,
      "title": "Black Panther: Wakanda Forever",
      "original_language": "en",
      "original_title": "Black Panther: Wakanda Forever",
      "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      "media_type": "movie",
      "genre_ids": [
        28,
        12,
        878
      ],
      "popularity": 7895.146,
      "release_date": "2022-11-09",
      "video": false,
      "vote_average": 7.488,
      "vote_count": 3000
    },
    {
      "adult": false,
      "backdrop_path": "/6VEcSQCteETPnX5aQySC0vKQhOh.jpg",
      "id": 869112,
      "title": "Somebody I Used to Know",
      "original_language": "en",
      "original_title": "Somebody I Used to Know",
      "overview": "On a trip to her hometown, workaholic Ally reminisces with her first love Sean, and starts to question everything about the person she's become. Things only get more confusing when she meets Sean's fiancé, Cassidy, who reminds her of the person she used to be.",
      "poster_path": "/ovHxxphDgjyEpYriDoGoIHfrdZL.jpg",
      "media_type": "movie",
      "genre_ids": [
        10749,
        35,
        18
      ],
      "popularity": 104.349,
      "release_date": "2023-02-10",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
      "id": 615777,
      "title": "Babylon",
      "original_language": "en",
      "original_title": "Babylon",
      "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
      "poster_path": "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        35
      ],
      "popularity": 683.361,
      "release_date": "2022-12-22",
      "video": false,
      "vote_average": 7.655,
      "vote_count": 979
    },
    {
      "adult": false,
      "backdrop_path": "/eR69AZ9bapi0jUyBkw33DLzQQHQ.jpg",
      "id": 696157,
      "title": "Whitney Houston: I Wanna Dance with Somebody",
      "original_language": "en",
      "original_title": "Whitney Houston: I Wanna Dance with Somebody",
      "overview": "The joyous, emotional, heartbreaking celebration of the life and music of Whitney Houston, the greatest female R\\u0026B pop vocalist of all time. Tracking her journey from obscurity to musical superstardom.",
      "poster_path": "/oodPJ3Op1pWBhnEFyw5fampRCWf.jpg",
      "media_type": "movie",
      "genre_ids": [
        10402,
        36,
        18
      ],
      "popularity": 155.378,
      "release_date": "2022-12-20",
      "video": false,
      "vote_average": 7.105,
      "vote_count": 114
    },
    {
      "adult": false,
      "backdrop_path": "/bg7tqaFmX6VvfGkXGFCHjoGRir5.jpg",
      "id": 78191,
      "name": "You",
      "original_language": "en",
      "original_name": "You",
      "overview": "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
      "poster_path": "/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
      "media_type": "tv",
      "genre_ids": [
        9648,
        80,
        18
      ],
      "popularity": 857.562,
      "first_air_date": "2018-09-09",
      "vote_average": 8.108,
      "vote_count": 2412,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
      "id": 640146,
      "title": "Ant-Man and the Wasp: Quantumania",
      "original_language": "en",
      "original_title": "Ant-Man and the Wasp: Quantumania",
      "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      "media_type": "movie",
      "genre_ids": [
        12,
        878,
        35
      ],
      "popularity": 313.276,
      "release_date": "2023-02-10",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/dA54ZxNp63KngiZlMNJIOhnXyY1.jpg",
      "id": 814757,
      "title": "Empire of Light",
      "original_language": "en",
      "original_title": "Empire of Light",
      "overview": "The duty manager of a seaside cinema, who is struggling with her mental health, forms a relationship with a new employee on the south coast of England in the 1980s.",
      "poster_path": "/h84SnIQF91Gz2Fv1OpMJ3245t4i.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        10749
      ],
      "popularity": 95.13,
      "release_date": "2022-12-09",
      "video": false,
      "vote_average": 6.106,
      "vote_count": 47
    },
    {
      "adult": false,
      "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
      "id": 646389,
      "title": "Plane",
      "original_language": "en",
      "original_title": "Plane",
      "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      "poster_path": "/2g9ZBjUfF1X53EinykJqiBieUaO.jpg",
      "media_type": "movie",
      "genre_ids": [
        28,
        12,
        53
      ],
      "popularity": 4467.59,
      "release_date": "2023-01-13",
      "video": false,
      "vote_average": 6.749,
      "vote_count": 345
    },
    {
      "adult": false,
      "backdrop_path": "/nlUSVN7bUhPfQGvOMEM77TjlO3h.jpg",
      "id": 298618,
      "title": "The Flash",
      "original_language": "en",
      "original_title": "The Flash",
      "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      "poster_path": "/2y8SJsAam9MvUjWjXdzjay5cD4f.jpg",
      "media_type": "movie",
      "genre_ids": [
        878,
        28,
        12
      ],
      "popularity": 101.591,
      "release_date": "2023-06-14",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      "id": 76600,
      "title": "Avatar: The Way of Water",
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "media_type": "movie",
      "genre_ids": [
        878,
        12,
        28
      ],
      "popularity": 2032.107,
      "release_date": "2022-12-14",
      "video": false,
      "vote_average": 7.736,
      "vote_count": 5227
    },
    {
      "adult": false,
      "backdrop_path": "/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg",
      "id": 597,
      "title": "Titanic",
      "original_language": "en",
      "original_title": "Titanic",
      "overview": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
      "poster_path": "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        10749
      ],
      "popularity": 383.569,
      "release_date": "1997-11-18",
      "video": false,
      "vote_average": 7.886,
      "vote_count": 22284
    },
    {
      "adult": false,
      "backdrop_path": "/jXn1ngoP6jPYZL4twburgWUUaj4.jpg",
      "id": 806368,
      "title": "The Son",
      "original_language": "en",
      "original_title": "The Son",
      "overview": "A successful lawyer, with a new wife and infant, agrees to care for his teenage son from a previous marriage after his ex-wife becomes concerned about the boy's wayward behavior.",
      "poster_path": "/hYR2doH3arnX0Y6WULuBPbtaLjN.jpg",
      "media_type": "movie",
      "genre_ids": [
        18
      ],
      "popularity": 24.24,
      "release_date": "2022-11-10",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/lKK5OrmQHGPrPE1k1vebT7Af2hl.jpg",
      "id": 210757,
      "name": "The Knockout",
      "original_language": "zh",
      "original_name": "狂飙",
      "overview": "20 years of perseverance, hot-blooded teenagers finally become the people's hero.",
      "poster_path": "/6sbKSe7x3dFetFCdXmDkgE0t6H2.jpg",
      "media_type": "tv",
      "genre_ids": [
        80,
        9648,
        18,
        10759
      ],
      "popularity": 222.211,
      "first_air_date": "2023-01-14",
      "vote_average": 8.1,
      "vote_count": 40,
      "origin_country": [
        "CN"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg",
      "id": 315162,
      "title": "Puss in Boots: The Last Wish",
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "media_type": "movie",
      "genre_ids": [
        16,
        12,
        35,
        10751,
        14
      ],
      "popularity": 4607.945,
      "release_date": "2022-12-07",
      "video": false,
      "vote_average": 8.519,
      "vote_count": 3611
    },
    {
      "adult": false,
      "backdrop_path": "/rGkjtv6UdL1ysDmZuBjbNl3PAA1.jpg",
      "id": 132117,
      "name": "Farzi",
      "original_language": "hi",
      "original_name": "फर्जी",
      "overview": "Sunny, a brilliant small-time artist is catapulted into the high-stakes world of counterfeiting when he creates the perfect fake currency note, even as Michael, a fiery, unorthodox task force officer wants to rid the country of the counterfeiting menace. In this thrilling cat-and-mouse race, losing is not an option!",
      "poster_path": "/cTS86RwEBIDgCgUmjWQTSoPsK6p.jpg",
      "media_type": "tv",
      "genre_ids": [
        18,
        80
      ],
      "popularity": 120.578,
      "first_air_date": "2023-02-10",
      "vote_average": 7.286,
      "vote_count": 7,
      "origin_country": [
        "IN"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/ykibzmDrG66E2Go0esFX31ivg74.jpg",
      "id": 137094,
      "name": "Love to Hate You",
      "original_language": "ko",
      "original_name": "연애대전",
      "overview": "For a woman who despises losing to men, and a man who distrusts women, love is absolute war — but the line between love and hate is a thin one.",
      "poster_path": "/kbfcnflR4FnfxvSnXR536V4FMUB.jpg",
      "media_type": "tv",
      "genre_ids": [
        35,
        18
      ],
      "popularity": 81.228,
      "first_air_date": "2023-02-10",
      "vote_average": 9.429,
      "vote_count": 7,
      "origin_country": [
        "KR"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/ewmbxsDBhAN0AJR0FUPWjJx2QY.jpg",
      "id": 447365,
      "title": "Guardians of the Galaxy Volume 3",
      "original_language": "en",
      "original_title": "Guardians of the Galaxy Volume 3",
      "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      "poster_path": "/4zdyTce32M3uKU8gS31d4ZsmNhQ.jpg",
      "media_type": "movie",
      "genre_ids": [
        878,
        28,
        12
      ],
      "popularity": 45.974,
      "release_date": "2023-05-03",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/bPMTOGXhEzoA71btPhVsOXYJq92.jpg",
      "id": 1061163,
      "title": "At Midnight",
      "original_language": "en",
      "original_title": "At Midnight",
      "overview": "Ambitious hotel manager Alejandro and movie star Sophie meet when fate strikes when the shoot brings them all to Alejandro's hotel in Mexico. Despite their radically different lives, Alejandro and Sophie begin to secretly meet at midnight...",
      "poster_path": "/k6E1f3XvTq0sa02nUykPCwFKsBx.jpg",
      "media_type": "movie",
      "genre_ids": [
        10749,
        35
      ],
      "popularity": 79.79,
      "release_date": "2023-02-10",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 9
    }
  ],
};

const toprated={
  
  "results": [
    {
      "adult": false,
      "backdrop_path": "/ejniJnlOdtSgtbh8D7u2RxT6Uli.jpg",
      "genre_ids": [
        35,
        14
      ],
      "id": 772071,
      "original_language": "es",
      "original_title": "Cuando Sea Joven",
      "overview": "70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as \"Maria\" to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.",
      "popularity": 81.613,
      "poster_path": "/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
      "release_date": "2022-09-14",
      "title": "Cuando Sea Joven",
      "video": false,
      "vote_average": 8.8,
      "vote_count": 201
    },
    {
      "adult": false,
      "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 102.613,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 17455
    },
    {
      "adult": false,
      "backdrop_path": "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 93.465,
      "poster_path": "/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 23269
    },
    {
      "adult": false,
      "backdrop_path": "/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        14
      ],
      "id": 995133,
      "original_language": "en",
      "original_title": "The Boy, the Mole, the Fox and the Horse",
      "overview": "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
      "popularity": 53.071,
      "poster_path": "/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
      "release_date": "2022-12-25",
      "title": "The Boy, the Mole, the Fox and the Horse",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 213
    },
    {
      "adult": false,
      "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 84.592,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather Part II",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 10567
    },
    {
      "adult": false,
      "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 61.668,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-12-15",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 13749
    },
    {
      "adult": false,
      "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 25.601,
      "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      "release_date": "1995-10-19",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 4056
    },
    {
      "adult": false,
      "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "popularity": 80.235,
      "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "release_date": "2002-09-20",
      "title": "Spirited Away",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 13944
    },
    {
      "adult": false,
      "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_language": "en",
      "original_title": "12 Angry Men",
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "popularity": 39.582,
      "poster_path": "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
      "release_date": "1957-04-10",
      "title": "12 Angry Men",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 7039
    },
    {
      "adult": false,
      "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      "genre_ids": [
        10749,
        16,
        18
      ],
      "id": 372058,
      "original_language": "ja",
      "original_title": "君の名は。",
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "popularity": 112.022,
      "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
      "release_date": "2016-08-26",
      "title": "Your Name.",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 9500
    },
    {
      "adult": false,
      "backdrop_path": "/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg",
      "genre_ids": [
        16,
        12,
        35,
        10751,
        14
      ],
      "id": 315162,
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "popularity": 4607.945,
      "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "release_date": "2022-12-07",
      "title": "Puss in Boots: The Last Wish",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 3591
    },
    {
      "adult": false,
      "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "popularity": 67.464,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "release_date": "2019-05-30",
      "title": "Parasite",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 15234
    },
    {
      "adult": false,
      "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "popularity": 88.961,
      "poster_path": "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      "release_date": "1999-12-10",
      "title": "The Green Mile",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 15032
    },
    {
      "adult": false,
      "backdrop_path": "/pbEkjhdfP7yuDcMB78YEZwgD4IN.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "popularity": 84.583,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "release_date": "2008-07-14",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 29167
    },
    {
      "adult": false,
      "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "popularity": 66.399,
      "poster_path": "/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      "release_date": "1994-09-10",
      "title": "Pulp Fiction",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 24649
    },
    {
      "adult": false,
      "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
      "genre_ids": [
        37
      ],
      "id": 429,
      "original_language": "it",
      "original_title": "Il buono, il brutto, il cattivo",
      "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      "popularity": 51.098,
      "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      "release_date": "1966-12-23",
      "title": "The Good, the Bad and the Ugly",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 7199
    },
    {
      "adult": false,
      "backdrop_path": "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 13,
      "original_language": "en",
      "original_title": "Forrest Gump",
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      "popularity": 68.41,
      "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      "release_date": "1994-06-23",
      "title": "Forrest Gump",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 24131
    },
    {
      "adult": false,
      "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
      "genre_ids": [
        10749,
        16
      ],
      "id": 372754,
      "original_language": "ja",
      "original_title": "同級生",
      "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
      "popularity": 12.303,
      "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
      "release_date": "2016-02-20",
      "title": "Dou kyu sei – Classmates",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 290
    },
    {
      "adult": false,
      "backdrop_path": "/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 122,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      "popularity": 98.375,
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "release_date": "2003-12-01",
      "title": "The Lord of the Rings: The Return of the King",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 21127
    },
    {
      "adult": false,
      "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
      "genre_ids": [
        10749
      ],
      "id": 696374,
      "original_language": "en",
      "original_title": "Gabriel's Inferno",
      "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      "popularity": 16.423,
      "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      "release_date": "2020-05-29",
      "title": "Gabriel's Inferno",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 2325
    }
  ],
};

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List data={popular} id="popular" title={"Popular on Netflix"} />
      {/* <List />
      <List /> */}
      <List data={trending} title={"Trending"} />
      <List data={toprated} title={"Top Rated"} />

      {/* <List trending={trending} title={"Trending"} />
      <List trending={trending} title={"Trending"} /> */}
      

      </div>
  );
};

export default Home;
