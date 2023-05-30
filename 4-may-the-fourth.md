# Versa Assessment - Backend Software Engineer

## Instruction

Create a public repository in GitHub named `versa-assessment` to host the script for the task provided below.

## Tasks

1. Study the Star Wars API documentation thoroughly. The link to the documentation can be found here: [https://swapi.dev](https://swapi.dev)
2. Get **ALL** the characters available from the API and categorize them based on their gender.
3. The list of characters shall then be sorted in ascending order based on their height.
4. If the height of the character is unknown, push the character to the bottom of the list.
5. Characters with unknown height shall then be sorted alphabetically based on their name.
6. Output the result to a file named `output.json`.
7. Below is an example of the JSON structure for `output.json`:

```json
[
	{
		"gender": "male",
		"characters": [
			{
				"name": "Anakin Skywalker",
				"height": 188
			},
			{
				"name": "Chewbacca",
				"height": 228
			},
			... REDACTED
		]
	},
	{
		"gender": "female",
		"characters": [
			{
				"name": "Taun We",
				"height": 213
			},
			... REDACTED
		]
	},
	... REDACTED
]

```

## Success Criteria

1. Provide a **clear** and **concise** step-by-step **instructions** on how to run the script in a file named `README.md`.
2. Script must be **runnable** and produce **accurate** result.
3. Must produce a **readable** and **scalable** code.
4. Avoiding callback style code.

## Bonus

1. Implementation using TypeScript.
2. Implement unit test using Jest / Mocha / Chai etc. Feel free to choose any testing framework.
3. Static analysis tool setup such as ESLint / TSLint, SonarJS etc.
4. Git pre-push hook implementation.
