import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    invertBackground,
    {
      name: 'size',
      type: 'select',
      defaultValue: 'oneThird',
      options: [
        {
          value: 'oneThird',
          label: 'One Third',
        },
        {
          value: 'half',
          label: 'Half',
        },
        {
          value: 'twoThirds',
          label: 'Two Thirds',
        },
        {
          value: 'full',
          label: 'Full',
        },
      ],
    },
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
