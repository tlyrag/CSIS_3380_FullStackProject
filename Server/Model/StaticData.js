
const data = [
    {
      "id": 1,
      "title": "Espresso",
      "description": "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.",
      "category": "Arabica",
      "image": "https://i.imgur.com/o9ncs6i.jpg",
      "price": 4.56
    }
    ,
    {
      "id": 2,
      "title": "Latte/Iced Latte",
      "description": "A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.",
      "category": "Robusta",
      "image": "https://i.imgur.com/K0ihpLu.jpg",
      "price": 3.21
    },
    {
      "id": 3,
      "title": "Black Coffee",
      "description": "Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.",
      "category": "Excelsa",
      "image": "https://i.imgur.com/1sI2iIn.jpg",
      "price": 5.89
    },
    {
      "id": 4,
      "title": "Mocha",
      "description": "Coffee and chocolate are two of the best things in the world. Mochas are espresso-based drinks made with chocolate and whipped cream instead of foam, so you get the best of both worlds in every sip. Their ratio depends on what you prefer; whether you want more coffee or chocolate, your mocha will shine in any coffee shop.",
      "category": "Liberica",
      "image": "https://i.imgur.com/aDfmvzG.jpg",
      "price": 6.78
    },
    {
      "id": 5,
      "title": "Americano",
      "description": "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
      "category": "Arabica",
      "image": "https://i.imgur.com/bYjdqtm.jpg",
      "price": 6.22
    },
    {
      "id": 6,
      "title": "Cappuccino",
      "description": "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso. And if you don’t then you can follow Our Guide To Home Espresso to learn how to make it.",
      "category": "Robusta",
      "image": "https://i.imgur.com/u0GNH4q.jpg",
      "price": 7.81
    },
    {
      "id": 7,
      "title": "Flat White",
      "description": "If you're not familiar with flat whites, they're a type of coffee drink that's made with espresso and steamed milk. When the espresso and milk are mixed to make this joe, they create a delicious combination that's both smooth and creamy. And the bubbly nature of the milk also adds a nice touch of sweetness.",
      "category": "Excelsa",
      "image": "https://i.imgur.com/RTcxVVw.jpg",
      "price": 5.47
    },
    {
      "id": 8,
      "title": "Cafe au Lait",
      "description": "Cafe au lait is a coffee beverage that is made with dark roast coffee and steamed milk. The milk is generally warmed up and frothed before it is added to the coffee. Cafe au lait is a popular type of coffee drink in France, where it is often served at breakfast.",
      "category": "Liberica",
      "image": "https://i.imgur.com/6Oq3n8X.jpg",
      "price": 7.11
    },
    {
      "id": 9,
      "title": "Macchiato",
      "description": "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. You may also come across variations of macchiatos that are closer to lattes though.",
      "category": "Arabica",
      "image": "https://i.imgur.com/nrgy8dM.jpg",
      "price": 6.35
    },
    {
      "id": 10,
      "title": "Cold Brew",
      "description": "Cold brew coffee is created by steeping coarsely ground coffee in cool or room temperature water for an extended period, often 12 hours or more. By using cooler temperatures and longer brewing times, the final product is a type of coffee drink with a smooth concentrate that can be diluted with water or milk depending on your preference. Some baristas also choose to add flavouring syrups to cold brews for lighter drink options.",
      "category": "Robusta",
      "image": "https://i.imgur.com/me40LqD.jpg",
      "price": 4.97
    },
    {
      "id": 11,
      "title": "Irish Coffee",
      "description": "One of the most popular drinks in Ireland is undoubtedly Irish coffee. This hot beverage is made with coffee, whiskey, and cream, and it is usually served with a spoonful of sugar to balance out the drink's bitterness. While there are many variations of this type of coffee drink, all of those said variations are sure to warm you up on a cold day.",
      "category": "Excelsa",
      "image": "https://i.imgur.com/bMuGd0o.jpg",
      "price": 5.29
    },
    {
      "id": 12,
      "title": "Frappe",
      "description": "A coffee frappe is a delicious, iced beverage that has been blended or beaten until it forms a foamy texture. This type of coffee drink usually comes with whipped cream and tasty toppings and can be served cold or frozen. You have the choice of adding ice before or after you beat the coffee mixture, as well as customizing it with add-ins like sugar, milk, vanilla extract, and sweet sauces.",
      "category": "Liberica",
      "image": "https://i.imgur.com/MFpZi3L.jpg",
      "price": 4.32
    },
    {
      "id": 13,
      "title": "Vietnamese Coffee",
      "description": "If you want to try a different method of brewing coffee, Vietnamese coffee is a great option. Simply add sweetened condensed milk to the bottom of a heat-proof glass, then place a Vietnamese coffee filter over your glass. Add your desired amount of ground coffee and pour nearly boiling water over it. This will result in a creamy, sweet type of coffee drink.",
      "category": "Arabica",
      "image": "https://i.imgur.com/Jv3aMx1.jpg",
      "price": 6.12
    },
    {
      "id": 14,
      "title": "Affogato",
      "description": "This dessert is less of a type of coffee drink and more of an ice cream sundae. Rather than having ice cream or gelato with hot espresso poured over it, the hot espresso slightly melts the ice cream and the corresponding ice cream cools down the beverage. They complement each other perfectly.",
      "category": "Robusta",
      "image": "https://i.imgur.com/vJv4DX9.jpg",
      "price": 5.18
    },
    {
      "id": 15,
      "title": "Red Eye",
      "description": "Red Eye Coffee is a favourite among coffee drinkers because of its unique and rich flavour. Adding espresso shots to regular coffee creates this signature type of coffee drink that gives you the boost you need to wake up in the morning. Red Eyes are perfect for those who love strong coffee but don't want to drink an entire pot all by themselves; plus, they make excellent morning beverages.",
      "category": "Excelsa",
      "image": "https://i.imgur.com/PU7r5ca.jpg",
      "price": 7.45
    },
    {
      "id": 16,
      "title": "Doppio",
      "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
      "category": "Liberica",
      "image": "https://i.imgur.com/gZnLzyc.jpg",
      "price": 6.89
    },
    {
      "id": 17,
      "title": "Cortado",
      "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
      "category": "Arabica",
      "image": "https://i.imgur.com/qQ7oZbp.jpg",
      "price": 5.63
    },
    {
      "id": 18,
      "title": "Galão",
      "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
      "category": "Robusta",
      "image": "https://i.imgur.com/G5SXPiX.jpg",
      "price": 3.77
    },
    {
      "id": 19,
      "title": "Lungo",
      "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
      "category": "Excelsa",
      "image": "https://i.imgur.com/B1F9VDy.jpg",
      "price": 7.91
    },
    {
      "id": 20,
      "title": "Ristretto",
      "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
      "category": "Liberica",
      "image": "https://i.imgur.com/rWdmnSz.jpg",
      "price": 4.86
    }
  ]
export default{data} ;