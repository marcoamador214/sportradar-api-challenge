# Marco Amador: sportradar-api-challenge

Instructions for running locally:
1. Clone using: `git clone git@github.com:marcoamador214/sportradar-api-challenge.git`
2. Once opened, change directory into the 'sportradar-api' folder: `cd sportradar-api`
3. Run `npm start` to open in browser

* **Team Pipeline** - Was able to output a CSV file using the 'Team Pipeline' form with a given ID and Season Year containing the following:
  * Team ID
  * Team Name
  * Team Venue Name
  * Games Played
  * Wins
  * Losses
  * Points
  * Goals Per Game
  
  Was unable to locate information concerning: 'Game Date of First Game of Season' or 'Opponent Name in First Game of Season' within the API
  
* **Player Pipeline** - Was able to output a CSV file using the 'Player Pipeline' form with a given ID containing the following:
  * Player ID
  * Player Name
  * Current Team
  * Player Age
  * Player Number
  * Player Position
  * If the player is a rookie
  
  Was unable to locate a URL endpoint which contained the appropriate general player information (id, name, team, age, etc.) with appended statistics within the API; the `/people/ID/stats` endpoint contained only general info, while the `?stats=statsSingleSeason&season=20182019` modifier only contained statistics without the aforementioned information.

  Had I been able to locate the correct endpoints, I would have been able to employ the same interpolation/technique for the requested player as with the teams above.














