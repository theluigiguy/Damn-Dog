var heroes = [
  "http://fc00.deviantart.net/fs71/f/2010/199/f/4/Skankity_Slut_Slut_by_guardianpinkneko.png",
  "https://41.media.tumblr.com/65d268f68ecd85b7bd611a7a81c83d15/tumblr_nb2u4cAXuy1qf5511o1_1280.jpg",
  "http://i.imgur.com/yJmBW9Q.jpg",
  "https://40.media.tumblr.com/de37d9d7e1bb44180aabc1d98e704191/tumblr_o1ksh6uDpR1qfzx6so1_1280.jpg",
  "http://i.imgur.com/qxwq65L.png",
  "https://41.media.tumblr.com/d3e835d1f483cea65b9c61c8690f589e/tumblr_inline_noaxauF63v1qib1pp_540.jpg",
  "https://i.imgur.com/auTFC8F.jpg",
  "https://pbs.twimg.com/media/CZRaCaIWcAM6am4.jpg",
  "http://i.imgur.com/fpYSMMe.jpg"
];

var wikiHowPics = [
  "http://imgur.com/forU5iO.jpg",
  "http://imgur.com/37pn9Yt.jpg",
  "http://imgur.com/asSbLZn.jpg",
  "http://pad1.whstatic.com/images/thumb/2/25/Become-a-Teen-Hacker-Step-18.jpg/460px-Become-a-Teen-Hacker-Step-18.jpg",
  "http://56.media.tumblr.com/f4bb359116b8524e47c5729105f4e741/tumblr_o0s3t8YMqQ1tzofdno1_1280.jpg",
  "http://pad3.whstatic.com/images/thumb/4/40/Choose-a-Puppy-Step-3-Version-6.jpg/670px-Choose-a-Puppy-Step-3-Version-6.jpg",
  "http://pad3.whstatic.com/images/thumb/8/8c/Do-Laughter-Yoga-Step-11.jpg/900px-Do-Laughter-Yoga-Step-11.jpg",
  "http://pad2.whstatic.com/images/thumb/1/15/Be-Happy-Step-13-Version-2.jpg/728px-Be-Happy-Step-13-Version-2.jpg",
  "http://pad2.whstatic.com/images/thumb/0/00/Avoid-Uncomfortable-Conversations-About-Religion-Step-10.jpg/900px-Avoid-Uncomfortable-Conversations-About-Religion-Step-10.jpg",
  "http://pad3.whstatic.com/images/thumb/f/f1/Have-a-Happy%2C-Healthy-and-Spiritually-Fulfilled-Old-Age-Step-9.jpg/900px-Have-a-Happy%2C-Healthy-and-Spiritually-Fulfilled-Old-Age-Step-9.jpg",
  "http://pad2.whstatic.com/images/thumb/1/18/Know-if-You-Are-Drunk-Step-8.jpeg/728px-Know-if-You-Are-Drunk-Step-8.jpeg",
  "http://redwoodcoastfilm.com/pix/wikinope1.jpg",
  "http://i.imgur.com/f5diizQ.jpg",
  "http://i.imgur.com/5IzpcEV.png",
  "http://i.imgur.com/bAffgZE.jpg",
  "http://i.imgur.com/NLx931u.jpg",
  "http://pad2.whstatic.com/images/thumb/4/44/Have-Fun-Without-Friends-Step-1-Version-2.jpg/728px-Have-Fun-Without-Friends-Step-1-Version-2.jpg",
  "http://pad3.whstatic.com/images/thumb/8/80/Cure-a-Headache-Without-Medication-Step-12-Version-2.jpg/728px-Cure-a-Headache-Without-Medication-Step-12-Version-2.jpg",
  "http://pad2.whstatic.com/images/thumb/c/c9/Make-a-Wizard-Hat-Step-21.jpg/728px-Make-a-Wizard-Hat-Step-21.jpg",
  "http://i.imgur.com/dIBRsqs.jpg",
  "http://pad2.whstatic.com/images/thumb/9/9f/Annoy-Your-Siblings-Step-9.jpg/900px-Annoy-Your-Siblings-Step-9.jpg",
  "http://i.imgur.com/hqSdzUi.jpg",
  "http://i.imgur.com/IenboBi.jpg",
  "http://i.imgur.com/BgjYs1X.jpg",
  "http://i.imgur.com/ShDiOEI.jpg",
  "http://i.imgur.com/vP3lHBA.jpg",
  "https://pbs.twimg.com/media/CaYsHr8XEAQsVzO.jpg",
  "http://pad3.whstatic.com/images/thumb/5/5e/Come-Down-from-a-High-Step-15.jpg/728px-Come-Down-from-a-High-Step-15.jpg"
];

var wikiHow = [
  {
    pic: "http://pad3.whstatic.com/images/thumb/4/40/Choose-a-Puppy-Step-3-Version-6.jpg/728px-Choose-a-Puppy-Step-3-Version-6.jpg",
    slug: "Choose-a-Puppy"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/8/8c/Do-Laughter-Yoga-Step-11.jpg/728px-Do-Laughter-Yoga-Step-11.jpg",
    slug: "Do-Laughter-Yoga"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/1/15/Be-Happy-Step-13-Version-2.jpg/728px-Be-Happy-Step-13-Version-2.jpg",
    slug: "Be-Happy"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/0/00/Avoid-Uncomfortable-Conversations-About-Religion-Step-10.jpg/728px-Avoid-Uncomfortable-Conversations-About-Religion-Step-10.jpg",
    slug: "Avoid-Uncomfortable-Conversations-About-Religion"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/f/f1/Have-a-Happy%2C-Healthy-and-Spiritually-Fulfilled-Old-Age-Step-9.jpg/900px-Have-a-Happy%2C-Healthy-and-Spiritually-Fulfilled-Old-Age-Step-9.jpg",
    slug: "Have-a-Happy-Healthy-and-Spiritually-Fulfilled-Old-Age"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/1/18/Know-if-You-Are-Drunk-Step-8.jpeg/728px-Know-if-You-Are-Drunk-Step-8.jpeg",
    slug: "Know-if-You-Are-Drunk"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/4/44/Have-Fun-Without-Friends-Step-1-Version-2.jpg/728px-Have-Fun-Without-Friends-Step-1-Version-2.jpg",
    slug: "Have-Fun-Without-Friends"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/8/80/Cure-a-Headache-Without-Medication-Step-12-Version-2.jpg/728px-Cure-a-Headache-Without-Medication-Step-12-Version-2.jpg",
    slug: "Cure-a-Headache-Without-Medication"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/c/c9/Make-a-Wizard-Hat-Step-21.jpg/728px-Make-a-Wizard-Hat-Step-21.jpg",
    slug: "Make-a-Wizard-Hat"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/f/fd/Be-an-Airhead-Step-3-Version-2.jpg/728px-Be-an-Airhead-Step-3-Version-2.jpg",
    slug: "Be-an-Airhead"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/1/1a/Know-if-Your-Girlfriend-Wants-to-Have-Sex-With-You-Step-10-Version-2.jpg/728px-Know-if-Your-Girlfriend-Wants-to-Have-Sex-With-You-Step-10-Version-2.jpg",
    slug: "Know-if-Your-Girlfriend-Wants-to-Have-Sex-With-You"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/4/48/Make-Someone-Feel-Better-Via-Text-Message-Step-5-Version-2.jpg/728px-Make-Someone-Feel-Better-Via-Text-Message-Step-5-Version-2.jpg",
    slug: "Make-Someone-Feel-Better-Via-Text-Message"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/3/3e/Know-when-Not-to-Volunteer-Step-4.jpg/728px-Know-when-Not-to-Volunteer-Step-4.jpg",
    slug: "Know-when-Not-to-Volunteer"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/b/b1/Get-a-Huge-Butt-Step-16-Version-2.jpg/728px-Get-a-Huge-Butt-Step-16-Version-2.jpg",
    slug: "Turn-a-Girl-On"
  },
  {
    pic: "https://pbs.twimg.com/media/CEh7AIhWEAEAKnD.jpg",
    slug: "Get-a-Huge-Butt"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/1/1b/Send-Dirty-Texts-Step-3-Version-2.jpg/728px-Send-Dirty-Texts-Step-3-Version-2.jpg",
    slug: "Send-Dirty-Texts"
  },
  {
    pic: "http://pad1.whstatic.com/images/thumb/5/52/Fix-Bad-Breath-on-the-Spot-Step-11.jpg/728px-Fix-Bad-Breath-on-the-Spot-Step-11.jpg",
    slug: "Fix-Bad-Breath-on-the-Spot"
  },
  {
    pic: "https://pbs.twimg.com/media/CYrnEmyUQAQfI4x.jpg",
    slug: "Be-a-Spy"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/a/a1/Tell-when-a-Girl-Is-Interested-in-You-Step-19.jpg/728px-Tell-when-a-Girl-Is-Interested-in-You-Step-19.jpg",
    slug: "Tell-when-a-Girl-Is-Interested-in-You"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/3/38/Keep-a-Straight-Face-Step-4-Version-2.jpg/728px-Keep-a-Straight-Face-Step-4-Version-2.jpg",
    slug: "Keep-a-Straight-Face"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/b/bd/Get-Over-an-Anime-Addiction-Step-14.jpg/728px-Get-Over-an-Anime-Addiction-Step-14.jpg",
    slug: "Get-Over-an-Anime-Addiction"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/0/03/Play-the-Alto-Saxophone-Step-4.jpg/728px-Play-the-Alto-Saxophone-Step-4.jpg",
    slug: "Play-the-Alto-Saxophone"
  },
  {
    pic: "http://pad3.whstatic.com/images/thumb/9/9a/Clear-a-Stuffy-Nose-Step-7-Version-2.jpg/728px-Clear-a-Stuffy-Nose-Step-7-Version-2.jpg",
    slug: "Clear-a-Stuffy-Nose"
  },
  {
    pic: "http://41.media.tumblr.com/f3613495dcf6e76e302b8e1498c56c1f/tumblr_o07gbs3a9p1tzofdno1_1280.jpg",
    slug: "See-in-the-Dark"
  },
  {
    pic: "http://36.media.tumblr.com/a0f1e2e1e5d8d075399672e7a529e4a1/tumblr_o0bww8Y6P41tzofdno1_1280.jpg",
    slug: "Write-a-Dystopian-Novel"
  },
  {
    pic: "http://pad2.whstatic.com/images/thumb/5/50/Be-Unique-Step-5.jpeg/728px-Be-Unique-Step-5.jpeg",
    slug: "Be-Unique"
  }
];