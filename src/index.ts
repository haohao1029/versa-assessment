import fs from "fs";
import { StarWarsCharacter, StarWarsCharacterResponse, ExtractedChractersValue } from "./models/starwar";

export const fetchStarWarsCharacters = async (url: string): Promise<StarWarsCharacterResponse> => {
    const response = await fetch(url);
    return response.json();
};

export const extractChractersValue = (starWarsCharacters: StarWarsCharacter[]): ExtractedChractersValue[] => {

    return starWarsCharacters.map((character) => {
        return {
            name: character.name,
            height: character.height,
            gender: character.gender
        };
    });
};

// save the data into a json file
export const saveData = (data: ExtractedChractersValue[]) => {
    fs.writeFile("starwars.json", JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
    });
};

export const startGetStarWarsCharacters = async (url: string, data: ExtractedChractersValue[]) => {
    const res = await fetchStarWarsCharacters(url);
    url = res.next;
    if (url) {
        await startGetStarWarsCharacters(url, data);
    }
    data.push(...extractChractersValue(res.results));
    console.log(url);
    return data;
};

export const categorizeCharactersByGender = (data: ExtractedChractersValue[]) => {
    // convert the        
    const categorizedCharacters: any[] = [];

    data.forEach((character) => {
        const { name, height, gender } = character;

        const existingCategory = categorizedCharacters.find((category) => category.gender === gender);

        if (existingCategory) {
            existingCategory.characters.push({ name, height });
        } else {
            categorizedCharacters.push({ gender, characters: [{ name, height }] });
        }
    });

    return categorizedCharacters;

};

const start = async () => {
    const data = await startGetStarWarsCharacters("https://swapi.dev/api/people/", []);
    const categorizedCharacters = categorizeCharactersByGender(data);
    saveData(categorizedCharacters);
};

start();