import fs from 'fs';
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

const fetchStarWarsCharacters = async (url: string): Promise<StarWarsCharacterResponse> => {
    const response = await fetch(url);
    return response.json();
}

const extractChractersValue = (starWarsCharacters: StarWarsCharacter[]): ExtractedChractersValue[] => {

    return starWarsCharacters.map((character) => {
        return {
            name: character.name,
            height: character.height,
            gender: character.gender
        }
    })
}

// save the data into a json file
const saveData = (data: ExtractedChractersValue[]) => {
    fs.writeFile('starwars.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

const startGetStarWarsCharacters = async (url: string, data: ExtractedChractersValue[]) => {
    const res = await fetchStarWarsCharacters(url);
    url = res.next;
    if (url) {
        await startGetStarWarsCharacters(url, data);
    }
    data.push(...extractChractersValue(res.results));
    console.log(url);

    return data;
}

const start = async () => {
    const data = await startGetStarWarsCharacters("https://swapi.dev/api/people/", []);
    saveData(data);
}

start();