import { list } from '@keystone-6/core'
import {
  integer,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields'

export const BattlePass = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Upcoming', value: 'UPCOMING' },
        { label: 'Past', value: 'PAST' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    start_date: timestamp({
      validation: { isRequired: true },
    }),
    end_date: timestamp({
      validation: { isRequired: true },
    }),
    experience: integer({
      validation: { isRequired: true },
      label: 'Experience points between levels',
    }),
  },
})
