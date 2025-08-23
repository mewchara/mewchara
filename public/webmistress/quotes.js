// create a variable for the button and output
var aboutBtn = document.getElementById('aboutBtn');
var aboutOutput = document.getElementById('aboutOutput');

// define our list of items
// you can add as many as you like, no need to keep track!
var itemsArr = ["I ain’t a kid no more, we’ll never be those kids again. - Ivy, Frank Ocean", 
                "I broke your heart last week. You’ll probably feel better by the weekend. - Ivy, Frank Ocean", 
                "I sip and toast to normalcy, a fool's way into jealousy. - Amoeba, Clairo",
                "See I know my destination, I'm just not there. - Streetcar, Daniel Caesar",
                "His wicked sense of humor suggests exciting sex. - Venus as a Boy, Björk",
                "I’m sure we’re taller in another dimension, you say we’re smaller and not worth the mention. - White Ferrari, Frank Ocean",
                "I wonder if you look both ways when you cross my mind. - See You Again, Tyler, The Creator",
                "Hello Kitty, why the long face? - Never Be Yours, Kali Uchis",
                "I'm just a mirror, You check your complexion to find your reflection's all alone. - my future, Billie Eilish",
                "What if it happened to you on a different day? On a bridge where there wasn't a rail in the way? - The 30th, Billie Eilish", 
                "I can't read you, but if you want, the pleasure's all mine. - Bags, Clairo",
                "I hate the beach, but I stand in California, with my toes in the sand. - Sweater Weather, The Neighbourhood",
                "It's hell on Earth and the city's on fire, Inhale, inhale, that's heaven. - Solo, Frank Ocean",
                "Played you Doom, man, you play Drake, You left crumbs all on my face, Taste like Riri, taste like Bey, Bought you Fenty, took his place, Rolled your weed and kissed your face. - Hello?, Clairo, Rejjie Snow",
                "Felt like summer to my December. - GONE, GONE / THANK YOU, Tyler, The Creator",
                "Ooh, I know once you come to California, You will never look back. - Greetings from Califournia, The Neighbourhood",
                "I haven't seen you in a while, you know I miss you babe. - C U Girl, Steve Lacy",
                "And maybe you're just way too vain to be interesting, Baby, keep talkin', but nobody's listening. - Bored, Laufey",
                "She the type to seek love and make it everlasting, I'm the type to wake up and say you never happened. - Jukebox Joints, A$AP Rocky",
                "I am the World, the world is me, With life, and peace, And harmony, THIS IS YOUR LIFE. - Show No Regret, Daniel Caesar",
                "The parts of me buried underneath, They're glowing, do you see? I know that you feel me now. - Unfold, Alina Baraz",
                "I don't count the days, Transitory views, From the subway train, How strange. - From the Subway Train, Vansire", 
                "This unrequited love, To me, it's nothing but a one-man cult, And cyanide in my styrofoam cup, I can never make him love me. - Bad Religion, Frank Ocean",
                "I wonder how I got by this week, I only touched you once. - Void, The Neighbourhood",
                "You said if you could have your way, You'd make it nighttime all today so it'd suit the mood with your soul, Oh, what can I do? - Black Beauty, Lana Del Rey",
                "But we have conversations in my head, How did I fall in love with someone I don't know? - A Dream With a Baseball Player, Faye Webster",
                "All I wanted was to fly high, I can't believe my wings are broken. - homesick, wave to earth",
                "Softly, you raised your hair, all the angels stare. - BLEACH, BROCKHAMPTON",
                "The way that you glow, everybody knows. You've got a heart of gold, and mine is always broken, so i'll just paint it chrome. - The Shining, The Neighbourhood",
                "You always want to be forgiven, The devil does what you ask of him, On your knees. - Master of None, Beach House",
                "Look into your eyes I realize that I like you so much. That was corny, now I'm horny, can I have a kiss? - VCR, Tyler, The Creator",
                "I love your Linda Farrow, I adore your Dior. - Fashion Killa, A$AP Rocky",
                "Most of the time, everything's fine, But as soon as she starts to whine... - Loose, Daniel Caesar",
                "Sometimes when you stare, Our hearts entwine. - You Might Be Sleeping, Jakob, Clairo",
                "Rich man keeps getting richer, taking from the poor. - Your Teeth In My Neck, Kali Uchis",
                "Is she all that you want? Is she all that you need? I'd be there in a hurry, Baby come back to me. - Back To Me, The Marias",
                "Understand that when you leave here, You'll be clear among the better men. Alone again. - Chamber Of Reflection, Mac DeMarco",
                "Don't forget you chose this life, Welcome to your paradise, Lay in your bed, reap what you sow. - Paradise, Daniel Caesar",
                "And I know it's true, that visions are seldom what they seem, But if I know you, I know what you'll do, You'll love me at once, The way you did once upon a dream. - Once Upon a Dream, Lana Del Rey",
                "I see dead people, I need dead people. - LVL, A$AP Rocky",
                "If you go, momma, where do we go? - Jealou$y, The Neighbourhood",
                "Play some music like a harp in the sky - Useless, Omar Apollo",
                "I'm not the only one who finds it hard to understand. Iâ€™m not afraid of god. I am afraid of man.",
                "I am tired of explaining the fire, it burns because it must.",
                "& so what if my feathers are burning, I never asked for flight.",
                "I sat with my anger long enough until she told me her real name was grief.",
                "I am out with lanterns looking for myself.",
                "Words aren't the only way to tell someone how you feel.",
                "On the train we swapped seats, you wanted the window and I wanted to look at you.",
                "I am mine. Before I am anyone else's.",
                "A tender heart shouldn't be corrected."
                
                
                ];

aboutBtn.addEventListener('click', displayItem);

function displayItem() {
  // generates a random index
  var rand = Math.floor(Math.random() * itemsArr.length);
  aboutOutput.innerText = itemsArr[rand];
  
}

// define your images here
var images = [
 "/personal/freya.png",
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("img-load").innerHTML = image;