
const data = [
    {
      "id": 1,
      "title": "Espresso",
      "description": "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.",
      "category": "Arabica",
      "image": "https://www.google.com/imgres?q=expresso%20image&imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fid%2F923845184%2Fphoto%2Fmale-hands-pouring-espresso-martini-cocktail-into-glass.jpg%3Fs%3D612x612%26w%3Dgi%26k%3D20%26c%3Dadc1RDt-u1HMFhN4ZtueeXKKq1ULHIHb9q6BQz2BwDE%3D&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fespresso&docid=80J9mwojkzgWwM&tbnid=HJ7zmXnWgb4WbM&vet=12ahUKEwij5JzW8qSFAxWSFzQIHSQ_D1kQM3oECGkQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwij5JzW8qSFAxWSFzQIHSQ_D1kQM3oECGkQAA",
      "price": 4.56
    },
    {
      "id": 2,
      "title": "Latte/Iced Latte",
      "description": "A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.",
      "category": "Robusta",
      "image": "\\Client\\public\\assets\\images\\Latte.jpg",
      "price": 3.21
    },
    {
      "id": 3,
      "title": "Black Coffee",
      "description": "Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.",
      "category": "Excelsa",
      "image": "\\Client\\public\\assets\\images\\Black.jpg",
      "price": 5.89
    },
    {
      "id": 4,
      "title": "Mocha",
      "description": "Coffee and chocolate are two of the best things in the world. Mochas are espresso-based drinks made with chocolate and whipped cream instead of foam, so you get the best of both worlds in every sip. Their ratio depends on what you prefer; whether you want more coffee or chocolate, your mocha will shine in any coffee shop.",
      "category": "Liberica",
      "image": "\\Client\\public\\assets\\images\\Mocha.jpg",
      "price": 6.78
    },
    {
      "id": 5,
      "title": "Americano",
      "description": "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
      "category": "Arabica",
      "image": "\\Client\\public\\assets\\images\\Americano.jpg",
      "price": 6.22
    },
    {
      "id": 6,
      "title": "Cappuccino",
      "description": "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso. And if you don’t then you can follow Our Guide To Home Espresso to learn how to make it.",
      "category": "Robusta",
      "image": "\\Client\\public\\assets\\images\\Cappuccino.jpg",
      "price": 7.81
    },
    {
      "id": 7,
      "title": "Flat White",
      "description": "If you're not familiar with flat whites, they're a type of coffee drink that's made with espresso and steamed milk. When the espresso and milk are mixed to make this joe, they create a delicious combination that's both smooth and creamy. And the bubbly nature of the milk also adds a nice touch of sweetness.",
      "category": "Excelsa",
      "image": "\\Client\\public\\assets\\images\\FlatWhite.jpg",
      "price": 5.47
    },
    {
      "id": 8,
      "title": "Cafe au Lait",
      "description": "Cafe au lait is a coffee beverage that is made with dark roast coffee and steamed milk. The milk is generally warmed up and frothed before it is added to the coffee. Cafe au lait is a popular type of coffee drink in France, where it is often served at breakfast.",
      "category": "Liberica",
      "image": "\\Client\\public\\assets\\images\\CafeAuLait.jpg",
      "price": 7.11
    },
    {
      "id": 9,
      "title": "Macchiato",
      "description": "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. You may also come across variations of macchiatos that are closer to lattes though.",
      "category": "Arabica",
      "image": "\\Client\\public\\assets\\images\\Macchiato.jpg",
      "price": 6.35
    },
    {
      "id": 10,
      "title": "Cold Brew",
      "description": "Cold brew coffee is created by steeping coarsely ground coffee in cool or room temperature water for an extended period, often 12 hours or more. By using cooler temperatures and longer brewing times, the final product is a type of coffee drink with a smooth concentrate that can be diluted with water or milk depending on your preference. Some baristas also choose to add flavouring syrups to cold brews for lighter drink options.",
      "category": "Robusta",
      "image": "\\Client\\public\\assets\\images\\ColdBrew.jpg",
      "price": 4.97
    },
    {
      "id": 11,
      "title": "Irish Coffee",
      "description": "One of the most popular drinks in Ireland is undoubtedly Irish coffee. This hot beverage is made with coffee, whiskey, and cream, and it is usually served with a spoonful of sugar to balance out the drink's bitterness. While there are many variations of this type of coffee drink, all of those said variations are sure to warm you up on a cold day.",
      "category": "Excelsa",
      "image": "\\Client\\public\\assets\\images\\Irish.jpg",
      "price": 5.29
    },
    {
      "id": 12,
      "title": "Frappe",
      "description": "A coffee frappe is a delicious, iced beverage that has been blended or beaten until it forms a foamy texture. This type of coffee drink usually comes with whipped cream and tasty toppings and can be served cold or frozen. You have the choice of adding ice before or after you beat the coffee mixture, as well as customizing it with add-ins like sugar, milk, vanilla extract, and sweet sauces.",
      "category": "Liberica",
      "image": "\\Client\\public\\assets\\images\\Frappe.jpg",
      "price": 4.32
    },
    {
      "id": 13,
      "title": "Vietnamese Coffee",
      "description": "If you want to try a different method of brewing coffee, Vietnamese coffee is a great option. Simply add sweetened condensed milk to the bottom of a heat-proof glass, then place a Vietnamese coffee filter over your glass. Add your desired amount of ground coffee and pour nearly boiling water over it. This will result in a creamy, sweet type of coffee drink.",
      "category": "Arabica",
      "image": "\\Client\\public\\assets\\images\\Vietnamese.jpg",
      "price": 6.12
    },
    {
      "id": 14,
      "title": "Affogato",
      "description": "This dessert is less of a type of coffee drink and more of an ice cream sundae. Rather than having ice cream or gelato with hot espresso poured over it, the hot espresso slightly melts the ice cream and the corresponding ice cream cools down the beverage. They complement each other perfectly.",
      "category": "Robusta",
      "image": "\\Client\\public\\assets\\images\\Affogato.jpg",
      "price": 5.18
    },
    {
      "id": 15,
      "title": "Red Eye",
      "description": "Red Eye Coffee is a favourite among coffee drinkers because of its unique and rich flavour. Adding espresso shots to regular coffee creates this signature type of coffee drink that gives you the boost you need to wake up in the morning. Red Eyes are perfect for those who love strong coffee but don't want to drink an entire pot all by themselves; plus, they make excellent morning beverages.",
      "category": "Excelsa",
      "image": "\\Client\\public\\assets\\images\\RedEye.jpg",
      "price": 7.45
    },
    {
      "id": 16,
      "title": "Doppio",
      "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
      "category": "Liberica",
      "image": "\\Client\\public\\assets\\images\\Doppio.jpg",
      "price": 6.89
    },
    {
      "id": 17,
      "title": "Cortado",
      "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
      "category": "Arabica",
      "image": "\\Client\\public\\assets\\images\\Cortado.jpg",
      "price": 5.63
    },
    {
      "id": 18,
      "title": "Galão",
      "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
      "category": "Robusta",
      "image": "\\Client\\public\\assets\\images\\Galao.jpg",
      "price": 3.77
    },
    {
      "id": 19,
      "title": "Lungo",
      "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
      "category": "Excelsa",
      "image": "\\Client\\public\\assets\\images\\Lungo.jpg",
      "price": 7.91
    },
    {
      "id": 20,
      "title": "Ristretto",
      "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
      "category": "Liberica",
      "image": "\\Client\\public\\assets\\images\\Ristretto.jpg",
      "price": 4.86
    }
  ]
export default{data} ;
