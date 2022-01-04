import { list } from '@keystone-6/core'
import { Lists } from '.keystone/types'
import { relationship, text } from '@keystone-6/core/fields'

export const Level: Lists.Level = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    tier: relationship({ ref: 'Tier.levels', many: false }),
    reward: relationship({ ref: 'Reward.level', many: true }),
  },
})
