import fs from "fs";
import { startGetStarWarsCharacters, fetchStarWarsCharacters, extractChractersValue } from "./index";
import jest from "jest";



describe("startGetStarWarsCharacters", () => {
    it("should recursively fetch and extract Star Wars characters", async () => {
      const mockResponse1 = {
        next: "https://swapi.dev/api/people/?page=2",
        results: [
          { name: "Luke Skywalker", height: "172", gender: "male" },
          { name: "Leia Organa", height: "150", gender: "female" },
        ],
      };
  
      const mockResponse2 = {
        next: null,
        results: [
          { name: "Darth Vader", height: "202", gender: "male" },
          { name: "Han Solo", height: "180", gender: "male" },
        ],
      };
  
      // Set up the mock implementation of fetchStarWarsCharacters
      fetchStarWarsCharacters
        .mockResolvedValueOnce(mockResponse1)
        .mockResolvedValueOnce(mockResponse2);
  
      // Set up the mock implementation of extractChractersValue
      extractChractersValue.mockImplementation((starWarsCharacters) => starWarsCharacters);
  
      // Invoke the function and await the result
      const result = await startGetStarWarsCharacters("https://swapi.dev/api/people/", []);
  
      // Assertions
      expect(fetchStarWarsCharacters).toHaveBeenCalledTimes(2);
      expect(fetchStarWarsCharacters).toHaveBeenNthCalledWith(1, "https://swapi.dev/api/people/");
      expect(fetchStarWarsCharacters).toHaveBeenNthCalledWith(
        2,
        "https://swapi.dev/api/people/?page=2"
      );
      expect(extractChractersValue).toHaveBeenCalledTimes(2);
      expect(result).toEqual([
        { name: "Luke Skywalker", height: "172", gender: "male" },
        { name: "Leia Organa", height: "150", gender: "female" },
        { name: "Darth Vader", height: "202", gender: "male" },
        { name: "Han Solo", height: "180", gender: "male" },
      ]);
    });
  });
  