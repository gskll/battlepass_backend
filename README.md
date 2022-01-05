# Battle Pass Editor -- Backend

**(See the frontend here)[https://github.com/gskll/battlepass_frontend]**

## Get Started

1. Clone the repo
2. `npm install`
3. `npm run dev` -- the backend will be running on `localhost:3000` -- the frontend must be running at the same time

## Tech stack

- Frontend

  - React
  - NextJS
  - Apollo Client
  - Styled Components

- 'Backend'
  - KeystoneJS (headless CMS)
    - Node
    - SQLite

## Features

Battle pass editor utility

- The app is a utility to edit a game's battle pass.
- Each battle pass has different tiers, which offer different rewards once you complete daily or weekly missions.
- Each tier has an associated price, along with different rewards as you progress along the levels.
- Each level has an associated reward
- Each battle pass also has associated missions to gain experience and progress through the levels
- Each mission has a type/goal and an associated amount of experience on completion

1. Users have general rules to set the experience needed for each level and the availability date range
2. Ability to set daily and weekly missions to get experience for the Battle Pass. The missions can have different goals (collect resources, win combats, level up...)
3. Users can edit the available tiers, with their names and prices.
4. Users can configure each tier, to set rewards for each level (gold, food, creatures...)
5. Users can save a Battle Pass draft to continue editing it later
6. In case of an error, a description of the error will be shown

## Improvements

- Client-side form validation
- Drag and drop interface
- Constraints on how similar/different tiers can be
- Multi-user real time editing

## Frontend Page Structure

- `/` & `/bp` Homepage
  - shows all battle passes regardless of date and status
  - create new battle pass button
- `/bp/new` Create new battle pass page
  - Form with new battle pass details
  - Name, availability, experience between levels
  - Tiers
- `/bp/[bp_id]` Battle pass page
  - show details for each pass
    - name, status, availability
    - experience between levels
    - tiers
    - missions
    - overview of all rewards available in the battle pass
  - create a new tier button
- `/bp/[bp_id]/edit` Edit battle pass page

  - Allows editing of battle pass meta details and tier configuration

- `/bp/[bp_id]/tier` Create new tier
  - Form with new tier details
- `/tier/[tier_id]` Tier page
  - shows details for each tier associated with a battle pass
  - name, price, number of levels
  - shows each level with the associated reward
  - overview of all rewards available in that tier
  - create a new level button
- `/tier/[tier_id]/edit` Edit tier page

  - allows editing of the tier's details

- `/tier/[tier_id]/level` Create a new level

  - Level number (1,2,3...)
  - Reward

- `/bp/[bp_id]/mission` Create a new mission
- `/level/[level_id]` Edit level / reward

## Database Schema

### Battlepass

- Id
- Name
- Start_date
- End_date
- Experience
- Tiers
- Missions
- Rewards

### Tier

- Id
- Name
- Price
- Levels
- Battlepass_id
- Rewards

### Level

- Id
- Name
- Reward
- Tier_id

### Reward

- Id
- Name
- Description
- Type - Gold, Food, Creature, Weapon, Skin, Ability
- Rarity - Common, Unusual, Rare, Legendary
- Level_id

### Mission

- Id
- Name
- Description
- Type - Daily, Weekly
- Goal_type - Gametime, Victories, Collection, Levelup
- Exp_awarded
- Battlepass_id
