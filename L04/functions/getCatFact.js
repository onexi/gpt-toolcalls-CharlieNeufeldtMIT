const catFacts = {
    house: [
        "Cats can rotate their ears 180 degrees.",
        "A group of cats is called a clowder.",
        "Cats have five toes on their front paws, but only four on their back paws.",
        "A cat’s nose is as unique as a human's fingerprint.",
        "Cats sleep for 70% of their lives.",
        "The first known cat video was recorded in 1894."
    ],
    wild: [
        "Tigers are the largest wild cats in the world, weighing up to 660 pounds.",
        "Cheetahs are the fastest land animals, reaching speeds of up to 70 miles per hour.",
        "Lions are the only wild cats that live in groups, called prides.",
        "Snow leopards can leap up to 50 feet in a single jump.",
        "Jaguars have the most powerful bite of any big cat, capable of crushing the skulls of their prey.",
        "Unlike most big cats, tigers love swimming and are often found in the water.",
        "A black panther is not a separate species; it is actually a jaguar or leopard with a melanistic (dark) coat.",
        "Leopards are the most adaptable of all big cats and can live in a wide range of habitats, from rainforests to deserts.",
        "The roar of a lion can be heard from 5 miles away.",
        "Cheetahs have black 'tear marks' running from the inner corners of their eyes to their mouths, thought to help reflect the sun and focus better."
    ]
};

export const execute = async (category) => {
    const selectedCategory = category.toLowerCase();

    if (!catFacts[selectedCategory]) {
        return { error: "Invalid category. Please choose 'house' or 'wild'." };
    }

    const facts = catFacts[selectedCategory];
    const randomIndex = Math.floor(Math.random() * facts.length);
    return { fact: facts[randomIndex] };
};

export const details = {
    type: "function",
    function: {
        name: "getCatFact",
        parameters: {
            type: "object",
            properties: {
                category: {
                    type: "string",
                    description: "The category of cat fact, either 'house' for house cats or 'wild' for wild cats."
                }
            },
            required: ["category"]
        }
    },
    description: "This function returns a random fun fact about either house cats or wild cats based on the user's choice."
};
