import { config } from '@keystone-6/core'
import { BattlePass } from './schemas/BattlePass'
import { Level } from './schemas/Level'
import { Tier } from './schemas/Tier'
import { Reward } from './schemas/Reward'
import { Mission } from './schemas/Mission'

export default config({
  // the db sets the database provider - we're using sqlite for the fastest startup experience
  db: {
    provider: 'sqlite',
    url: 'file:./keystone.db',
  },
  lists: {
    BattlePass,
    Tier,
    Level,
    Reward,
    Mission,
  },
})
