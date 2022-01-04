import { list } from '@keystone-6/core'
import { Lists } from '.keystone/types'
import { relationship, select, text } from '@keystone-6/core/fields'

export const Reward: Lists.Reward = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    type: select({
      options: [
        { label: 'Gold', value: 'GOLD' },
        { label: 'Food', value: 'FOOD' },
        { label: 'Creature', value: 'CREATURE' },
        { label: 'Weapon', value: 'WEAPON' },
        { label: 'Skin', value: 'SKIN' },
        { label: 'Ability', value: 'ABILITY' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    rarity: select({
      options: [
        { label: 'Common', value: 'COMMON' },
        { label: 'Unusual', value: 'UNUSUAL' },
        { label: 'Rare', value: 'RARE' },
        { label: 'Legendary', value: 'LEGENDARY' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    level: relationship({ ref: 'Level.reward', many: false }),
    tier: relationship({ ref: 'Tier.rewards', many: false }),
    battlepass: relationship({ ref: 'BattlePass.rewards', many: false }),
  },
})
