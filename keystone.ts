import { config } from '@keystone-6/core'
import { BattlePass } from './schemas/BattlePass'

// // Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
// import { lists } from './schema'

export default config({
  // the db sets the database provider - we're using sqlite for the fastest startup experience
  db: {
    provider: 'sqlite',
    url: 'file:./keystone.db',
  },
  lists: {
    BattlePass,
  },
})
