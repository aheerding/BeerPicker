//data created using the flowchart found at:
//https://lifehacker.com/decide-what-style-of-beer-you-want-to-drink-with-this-f-1688552149
data = [
  {
    "id": "start",
    "text": "Is taste a factor?",
    "prevNode": null,
    "options": [
      {
        "text": "I want to enjoy my beer!",
        "nextNode": "drinkOutside"
      }, {
        "text": "Nope I'm just trying to get nice and drunk",
        "nextNode": "amerMacroLager"
      }
    ]
  }, {
    "id": "drinkOutside",
    "text": "Are you drinking outside?",
    "prevNode": "careAboutTaste",
    "options": [
      {
        "text": "Yep!",
        "nextNode": "hotOut"
      }, {
        "text": "Nope!",
        "nextNode": "winterNight"
      }
    ]
  }, {
    "id": "amerMacroLager",
    "text": "Go with an american macro lager",
    "prevNode": "careAboutTaste",
    "options": null
  }, {
    "id": "hotOut",
    "text": "Is it hot outside?",
    "prevNode": "drinkOutside",
    "options": [
      {
        "text": "Pretty toasty out",
        "nextNode": "funkyRefreshing"
      }, {
        "text": "Not really",
        "nextNode": "running"
      }
    ]
  }, {
    "id": "winterNight",
    "text": "Is it a cold winter night?",
    "prevNode": "drinkOutside",
    "options": [
      {
        "text": "Yep, there's snow and everything",
        "nextNode": "getDrunk"
      }, {
        "text": "No, it's mild outside",
        "nextNode": "coldHoppy"
      }
    ]
  }, {
    "id": "funkyRefreshing",
    "text": "Would you prefer:",
    "prevNode": "hotOut",
    "options": [
      {
        "text": "Fun and funky",
        "nextNode": "farmhouse"
      }, {
        "text": "Easy and refreshing",
        "nextNode": "likeBitter"
      }
    ]
  }, {
    "id": "running",
    "text": "Are you running around and being active?",
    "prevNode": "hotOut",
    "options": [
      {
        "text": "Yes",
        "nextNode": "enjoyChallenge"
      }, {
        "text": "Nope, we're just chilling",
        "nextNode": "eating"
      }
    ]
  }, {
    "id": "likeBitter",
    "text": "Do you like your beer to be bitter and hoppy?",
    "prevNode": "funkyRefreshing",
    "options": [
      {
        "text": "I love bitter hops",
        "nextNode": "pilsner"
      }, {
        "text": "Nope, not at all",
        "nextNode": "wheatBeer"
      }
    ]
  }, {
    "id": "enjoyChallenge",
    "text": "Do you like to be challenged?",
    "prevNode": "running",
    "options": [
      {
        "text": "Heck yeah I do!",
        "nextNode": "farmhouse"
      }, {
        "text": "Nope, I'm taking it easy",
        "nextNode": "pilsner"
      }
    ]
  }, {
    "id": "eating",
    "text": "Are you eating food?",
    "prevNode": "running",
    "options": [
      {
        "text": "Yep",
        "nextNode": "foodType"
      }, {
        "text": "Nope, just enjoying a drink",
        "nextNode": "hoppy"
      }
    ]
  }, {
    "id": "foodType",
    "text": "Light and easy food or heavy and satisfying?",
    "prevNode": "eating",
    "options": [
      {
        "text": "Light food",
        "nextNode": "wheatBeer"
      }, {
        "text": "A hearty meal",
        "nextNode": "mealDessert"
      }
    ]
  }, {
    "id": "mealDessert",
    "text": "Is it a meal or dessert?",
    "prevNode": "foodType",
    "options": [
      {
        "text": "A meal",
        "nextNode": "hoppyRoasty"
      }, {
        "text": "Some nice dessert",
        "nextNode": "sour"
      }
    ]
  }, {
    "id": "hoppyRoasty",
    "text": "Do you like a hoppier beer or one that is more roasty?",
    "prevNode": "mealDessert",
    "options": [
      {
        "text": "A hoppy beer!",
        "nextNode": "ipa"
      }, {
        "text": "A roasty beer!",
        "nextNode": "porterStout"
      }
    ]
  }, {
    "id": "hoppy",
    "text": "Do you like hoppy beers?",
    "prevNode": "eating",
    "options": [
      {
        "text": "I love hops",
        "nextNode": "paleAle"
      }, {
        "text": "No hops for me please",
        "nextNode": "wheatBeer"
      }
    ]
  }, {
    "id": "getDrunk",
    "text": "Are you trying to get drunk?",
    "prevNode": "winterNight",
    "options": [
      {
        "text": "Let's get sauced!",
        "nextNode": "likeCoffee"
      }, {
        "text": "Nope, it's a easy night for me",
        "nextNode": "porterStout"
      }
    ]
  }, {
    "id": "likeCoffee",
    "text": "Do you love coffee?",
    "prevNode": "getDrunk",
    "options": [
      {
        "text": "I drink it every day",
        "nextNode": "agedStout"
      }, {
        "text": "I'm not really a coffee person",
        "nextNode": "barleywine"
      }
    ]
  }, {
    "id": "coldHoppy",
    "text": "Do you want something with hops?",
    "prevNode": "winterNight",
    "options": [
      {
        "text": "For sure",
        "nextNode": "ipa"
      }, {
        "text": "Not a big hops fan",
        "nextNode": "warheads"
      }
    ]
  }, {
    "id": "warheads",
    "text": "Do you like Warheads candy?",
    "prevNode": "coldHoppy",
    "options": [
      {
        "text": "I love them",
        "nextNode": "sour"
      }, {
        "text": "I hate sour stuff",
        "nextNode": "warheadHops"
      }
    ]
  }, {
    "id": "warheadHops",
    "text": "Hops ok?",
    "prevNode": "warheads",
    "options": [
      {
        "text": "Bring 'em on'",
        "nextNode": "pale"
      }, {
        "text": "No thanks",
        "nextNode": "porterStout"
      }
    ]
  }, {
    "id": "pilsner",
    "text": "Try a pilsner!",
    "prevNode": null,
    "options": null
  }, {
    "id": "wheatBeer",
    "text": "How about a wheat Beer?",
    "prevNode": null,
    "options": null
  }, {
    "id": "farmhouse",
    "text": "You should go with a Farmhouse/Saison!",
    "prevNode": null,
    "options": null
  }, {
    "id": "porterStout",
    "text": "Sounds like a porter or stout would be good!",
    "prevNode": null,
    "options": null
  }, {
    "id": "paleAle",
    "text": "Today's a good day for a pale ale!",
    "prevNode": null,
    "options": null
  }, {
    "id": "ipa",
    "text": "Try an IPA!",
    "prevNode": null,
    "options": null
  }, {
    "id": "agedStout",
    "text": "You could use a barrel aged stout",
    "prevNode": null,
    "options": null
  }, {
    "id": "sour",
    "text": "You might like a sour beer",
    "prevNode": null,
    "options": null
  }, {
    "id": "barleywine",
    "text": "A barleywine would be a good choice!",
    "prevNode": null,
    "options": null
  }
];

var recommendations = [
  {
    "id": "amerMacroLager",
    "text": "Bud Light",
    "brewery": "Anheuser-Busch"
  }, {
    "id": "pilsner",
    "text": "Pikeland Pils",
    "brewery": "Sly Fox Brewing"
  }, {
    "id": "wheatBeer",
    "text": "Witte",
    "brewery": "Ommegang Brewing"
  }, {
    "id": "farmhouse",
    "text": "Hennepin",
    "brewery": "Ommegang Brewing"
  }, {
    "id": "porterStout",
    "text": "Java Head Stout",
    "brewery": "Troegs Brewing"
  }, {
    "id": "paleAle",
    "text": "Arctic Pale Ale",
    "brewery": "Einstok Olgerd Brewing"
  }, {
    "id": "ipa",
    "text": "120 Minute IPA ",
    "brewery": "Dogfish Head"
  }, {
    "id": "agedStout",
    "text": "Brooklyn Black Ops",
    "brewery": "Brooklyn Brewing"
  }, {
    "id": "sour",
    "text": "Westbrook Gose",
    "brewery": "Westbrook Brewing"
  }, {
    "id": "barleywine",
    "text": "Y2K Two Year Vintage",
    "brewery": "Central Waters Brewing Co."
  }
]
