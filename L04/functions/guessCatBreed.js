
const catBreeds = {
    "Siamese": ["small", "short", "talkative"],
    "Maine Coon": ["large", "long", "gentle"],
    "Persian": ["medium", "long", "calm"],
    "Bengal": ["medium", "short", "energetic"],
    "Sphynx": ["medium", "hairless", "affectionate"],
    "Ragdoll": ["large", "long", "affectionate"],
    "British Shorthair": ["medium", "short", "calm"],
    "Abyssinian": ["medium", "short", "energetic"],
    "Scottish Fold": ["medium", "short", "calm"],
    "Russian Blue": ["medium", "short", "calm"],
    "Birman": ["medium", "long", "gentle"],
    "Oriental": ["small", "short", "talkative"],
    "Norwegian Forest Cat": ["large", "long", "calm"],
    "Turkish Van": ["large", "long", "energetic"],
    "Devon Rex": ["small", "short", "energetic"],
    "American Shorthair": ["medium", "short", "calm"],
    "Chartreux": ["medium", "short", "quiet"],
    "Burmese": ["small", "short", "affectionate"],
    "Cornish Rex": ["small", "short", "energetic"],
    "Savannah": ["large", "short", "energetic"]
};

// Function to guess cat breed based on user-provided traits
export const execute = async (size, coat, personality) => {
    // Find a matching breed based on the user's input
    const possibleBreeds = Object.keys(catBreeds).filter(breed => {
        const traits = catBreeds[breed];
        return traits.includes(size) && traits.includes(coat) && traits.includes(personality);
    });

    // If a breed is found, return the first match, otherwise return "Unknown breed"
    return { breed: possibleBreeds[0] || "Unknown breed" };
};

// Details required by OpenAI for calling this function
export const details = {
    type: "function",
    function: {
        name: "guessCatBreed",
        parameters: {
            type: "object",
            properties: {
                size: {
                    type: "string",
                    description: "Size of the cat (small, medium, large)"
                },
                coat: {
                    type: "string",
                    description: "Type of coat (short, long, hairless)"
                },
                personality: {
                    type: "string",
                    description: "Personality trait (talkative, calm, energetic, affectionate, gentle)"
                }
            },
            required: ["size", "coat", "personality"]
        }
    },
    description: "Guesses the breed of a cat based on size, coat type, and personality traits."
};
