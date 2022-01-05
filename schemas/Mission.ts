import { list } from '@keystone-6/core'
import { Lists } from '.keystone/types'
import { integer, relationship, select, text } from '@keystone-6/core/fields'

export const Mission: Lists.Mission = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    type: select({
      options: [
        { label: 'Weekly', value: 'WEEKLY' },
        { label: 'Daily', value: 'DAILY' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    goal_type: select({
      options: [
        { label: 'Gametime', value: 'GAMETIME' },
        { label: 'Collection', value: 'COLLECTION' },
        { label: 'Victories', value: 'VICTORIES' },
        { label: 'Levelup', value: 'LEVELUP' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    exp_awarded: integer(),
    battlepass: relationship({ ref: 'BattlePass.missions', many: false }),
  },
})
