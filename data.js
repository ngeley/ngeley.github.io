var platformList = [
	{
		name: "Netflix", 
		description: "Netflix, Inc. is an American entertainment company founded by Reed Hastings and Marc Randolph on August 29, 1997, in Scotts Valley, California. It specializes in and provides streaming media and video-on-demand online and DVD by mail.", 
		series: ["Black Mirror"], 
		originalContent: "Yes", 
		ads: "No", 
		cost: "$7.99-$11.99/month", 
		picUrl: "https://d2ygrtdi28m8fp.cloudfront.net/corporateAssets/Netflix_Logo_DigitalVideo_0701.jpg"
	},
	{
		name: "Hulu", 
		description: "Hulu is an American subscription video on demand service owned by Hulu LLC, a joint venture with The Walt Disney Company, 21st Century Fox, Comcast, and as of August 10, 2016, Time Warner.", 
		series: ["Rick and Morty", "Peep Show", "Peep Show", "South Park"], 
		originalContent: "Yes", 
		ads: "Yes, depending on subscription level", 
		cost: "$7.99-$11.99/month", 
		picUrl: "https://assetshuluimcom-a.akamaihd.net/h2o/facebook_share_thumb_default_hulu.png"
	},
	{
		name: "Amazon Video", 
		description: "Amazon Video is an Internet video on demand service that is developed, owned and operated by Amazon.com. It offers television shows and films for rental or purchase and as part of Amazon's Prime subscription, selected titles can be viewed exclusively to full Prime or Prime Video members, in which video membership allows viewing without full Prime.", 
		series: ["Rick and Morty", "Peep Show", "Peep Show", "South Park", "True Detective"], 
		originalContent: "Yes", 
		ads: "No", 
		cost: "$8.99/month or $10.99/month for Amazon Prime", 
		picUrl: "http://cordcuttersnews.com/wp-content/uploads/2015/05/amazon-instant-video.jpg"
	},
	{
		name: "HBO Go", 
		description: "HBO Go is a TV Everywhere service offered by the American premium cable network HBO, owned by Time Warner subsidiary Home Box Office, Inc.", 
		series: ["True Detective"], 
		originalContent: "Yes", 
		ads: "No", 
		cost: "Depends on provider. No fixed cost.", 
		picUrl: "https://siri-cdn.appadvice.com/wp-content/appadvice-v2-media/2017/01/HBOgo_c7114ebc16af7adcd4bfb40e7fc03288.jpg"
	},
	{
		name: "Crunchyroll", 
		description: "Crunchyroll is an American distributor, publisher and international online community focused on video streaming East Asian media including anime, manga, drama, music, electronic entertainment, and auto racing content.", 
		series: ["Naruto Shippuden"], 
		originalContent: "No", 
		ads: "Yes, depending on subscription level", 
		cost: "Free; $6.95/month for premium membership (no ads), $11.95/month for premium+ membership (no ads, access to special events)", 
		picUrl: "https://image.roku.com/channels/images/64ddb52faf534580bb1789bfa0416848-hd.jpg"
	},
	{
		name: "YouTube Red", 
		description: 'YouTube Red is a paid streaming subscription service exclusively for YouTube in the United States, Australia, Mexico, New Zealand and South Korea. It provides advertising-free streaming of all videos hosted by YouTube, offline and background playback of videos on mobile devices, access to advertising-free music streaming through Google Play Music, and access to "YouTube Red Original" series and films.', 
		series: ["Me and My Grandma"], 
		originalContent: "Yes", 
		ads: "No", 
		cost: "$9.99/month", 
		picUrl: "https://s.aolcdn.com/hss/storage/midas/ae5805bd817ce0d3c91162fe7d61bd11/202840544/youtubered-1200.jpg"
	}
]

var seriesList = [
	{
		name: "Me and My Grandma",
		description: "Janey and Grandma escape their frigid Michigan hometown for the palm tree lined streets of sunny Los Angeles. Bright-eyed early-twenty-something Janey has always dreamed of becoming an actress so she and her Grandma, a quirky sixty-something with a young heart, pack up and head west where Grandma realizes she too aspires to be famous. Me and My Grandma follows the misadventures of the two best friends as they take on career, hookups, and life in Hollywood - all while saving up for a second air mattress.",
		yearsActive: "2017-",
		runtime: "24min",
		genre: "Comedy",
		platforms: ["Youtube Red"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMDQ1ODg3MV5BMl5BanBnXkFtZTgwNjQ0Mzk3MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
	},
	{
		name: "Black Mirror",
		
		description: "A television anthology series that shows the dark side of life and technology.",
		yearsActive: "2011-",
		runtime: "1h",
		genre: "Drama, Sci-Fi, Thriller",
		platforms: ["Netflix"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NTk1Mzg3Ml5BMl5BanBnXkFtZTcwNDAyNzY3OA@@._V1._CR25,3,1010,1343_SY1000_CR0,0,752,1000_AL_.jpg"
	},
	{
		name: "Rick and Morty",
		description: "An animated series that follows the exploits of a super scientist and his not so bright grandson.",
		yearsActive: "2013-",
		runtime: "22min",
		genre: "Animation, Adventure, Comedy",
		platforms: ["Hulu", "Amazon Video"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNDEwNTE0Nl5BMl5BanBnXkFtZTgwMzQ1MTg3MDE@._V1_.jpg"
	},
	{
		name: "Peep Show",
		description: "Mark and Jez are a couple of twenty-something roommates who have nothing in common - except for the fact that their lives are anything but normal. Mayhem ensues as the pair strive to cope with day-to-day life.",
		yearsActive: "2003-2015",
		runtime: "25min",
		genre: "Comedy",
		platforms: ["Hulu", "Amazon Video"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0ODMzNTI0MV5BMl5BanBnXkFtZTcwMjEyMDcyMQ@@._V1._CR49,2,285,450_.jpg"
	},
	{
		name: "South Park",
		description: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
		yearsActive: "1997-",
		runtime: "22min",
		genre: "Animation, Comedy",
		platforms: ["Hulu", "Amazon Video"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWY4ODY3ZTAtODc2NC00ZDQ5LWE2ZTItZWYzOWVhNjU4OTk0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
	},
	{
		name: "True Detective",
		description: "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
		yearsActive: "2014-",
		runtime: "55min",
		genre: "Crime, Drama, Mystery",
		platforms: ["HBO Go", "Amazon Video"],
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTMwODI1OV5BMl5BanBnXkFtZTgwMDIzMTQ0NTE@._V1_.jpg"
	}
]

var episodeList = [
	{
		name: "Who Goes There",
		description: "Martin is faced with marital problems. The search for Reggie Ledoux leads the detectives to a motorcycle gang called The Iron Crusaders, which Rust worked undercover in the past.",
		series: "True Detective",
		director: "Cary Joji Fukunaga",
		writer: "Nic Pizzolatto",
		season: "1",
		episode: "4",
		airDate: "9 February 2014",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjA3NjAzODYwOF5BMl5BanBnXkFtZTgwMDY2MjQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
	},
	{
		name: "Wedding",
		description: "It's the day of the big wedding and Mark is desperately looking for a way out of going through with it - but he's determined not to be labeled a jilter at any cost. Jeremy still harbors hopes of winning Nancy back, but being Mark's best man keeps getting in the way.",
		series: "Peep Show",
		director: "Becky Martin",
		writer: "Andrew O'Connor (creator), Jesse Armstrong (creator)",
		season: "4",
		episode: "6",
		airDate: "18 May 2007",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BYTNjZTQyMjAtYTdhNS00MmZlLTk4NWItOTY3ODRlZDQ3ZjRhXkEyXkFqcGdeQXVyMTgyMzEyNDY@._V1_.jpg"
	},
	{
		name: "Total Rickall",
		description: "The Smith house is locked down after parasites threaten to take over the world by multiplying through flashbacks.",
		series: "Rick and Morty",
		director: "Juan Jose Meza-Leon (as Juan Meza-León), Pete Michels",
		writer: "Justin Roiland (created by), Dan Harmon (created by)",
		season: "2",
		episode: "4",
		airDate: "16 August 2015",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZmNjA4YjItZTE1Mi00MTIxLTlhYTktNDNjOWI0NDFkYTM2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQ2ODE0NDA@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
	},
	{
		name: "Go Frappe Yourself",
		description: "All of the drama in Janey and Grandma's lives comes to a head while they are attending the premiere party for Oliver's film.",
		series: "Me and My Grandma",
		director: "Luke Matheny",
		writer: "Grant Levy, Dominik Rothbard",
		season: "1",
		episode: "6",
		airDate: "22 March 2017",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMDQ1ODg3MV5BMl5BanBnXkFtZTgwNjQ0Mzk3MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
	},
	{
		name: "Scott Tenorman Must Die",
		description: "Cartman plans an elaborate revenge when an older boy cons him out of money.",
		series: "South Park",
		director: "Eric Stough",
		writer: "Trey Parker (created by), Matt Stone (created by)",
		season: "5",
		episode: "4",
		airDate: "11 July 2001",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNTQyOTAzOV5BMl5BanBnXkFtZTgwOTQxNDE1NTE@._V1_.jpg"
	},
	{
		name: "The National Anthem",
		description: "Prime Minister Michael Callow faces a shocking dilemma when Princess Susannah, a much-loved member of the Royal Family, is kidnapped.",
		series: "Black Mirror",
		director: "Otto Bathurst",
		writer: "Charlie Brooker, Charlie Brooker (creator)",
		season: "1",
		episode: "1",
		airDate: "4 December 2011",
		picUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWQ0NGEtZGZhNC00M2FkLWEzZjMtNWE4NmVmNzUxMTg2XkEyXkFqcGdeQXVyNDEyNDk3MjA@._V1_SY1000_SX1500_AL_.jpg"
	},
	{
		name: "The End",
		description: "At the climax of the battle, both Itachi and Sasuke run out of chakra. However, Sasuke reveals that his actions up until now were only a preparation for his final jutsu.",
		series: "Naruto Shippuden",
		director: "Hayato Date",
		writer: "Junki Takegami",
		season: "6",
		episode: "138",
		airDate: "3 December 2009",
		picUrl: "https://i.ytimg.com/vi/d9-wXxLpCx4/hqdefault.jpg"
	}
]