# Reopening roadmap activity by county search

This folder temporarily contains the latest exported Risk status for each county

Latest version is ``tiers.csv``` which uses 1 as the worst status and 1 as the best.

- Deleted all other columns and exported received excel to csv
- Ran this script to get it from csv to json:

```
npx csvtojson tiers.csv > tiers.json
```

- Ran this script to translate the 1-4 statuses to the 1 best, 4 worst status levels we built everything on:

```
node flipit.js
```


A temporary script was created to compare new tiers data. If we get new set of tiers csv and want to see if there is any change run:

```
npx csvtojson new-tiers-file.csv > newtiers.json
node compare.js
```

And it will show how many counties changed tiers