interface StarWarsCharacter {
    name: string;
    height: string;
    gender: string;
    homeworld: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
}

interface StarWarsCharacterResponse {
    count: number;
    next: string;
    previous: string;
    results: StarWarsCharacter[];
}

interface ExtractedChractersValue {
    name: string;
    height: string;
    gender: string;
}

export { StarWarsCharacter, StarWarsCharacterResponse, ExtractedChractersValue };