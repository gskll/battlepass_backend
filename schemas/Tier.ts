import { list } from '@keystone-6/core'
import { Lists } from '.keystone/types'
import { integer, relationship, text } from '@keystone-6/core/fields'

export const Tier: Lists.Tier = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    price: integer(),
    battlepass: relationship({ ref: 'BattlePass.tiers', many: false }),
    levels: relationship({ ref: 'Level.tier', many: true }),
  },
})
