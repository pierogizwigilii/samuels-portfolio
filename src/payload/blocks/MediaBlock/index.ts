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
      name: 'mediaType', // New field for selecting type of media
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Media Upload',
          value: 'upload',
        },
        {
          label: 'YouTube Video',
          value: 'youtube',
        },
      ],
      defaultValue: 'upload',
    },
    {
      name: 'media', // Media upload field (only shows if mediaType is 'upload')
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (data, siblingData) => {
          if (siblingData.mediaType === "upload") {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: 'youtubeURL', // New field for YouTube embed (only shows if mediaType is 'youtube')
      type: 'text',
      label: 'YouTube Video URL',
      required: true,
      admin: {
        condition: (data, siblingData) => {
          if (siblingData.mediaType === "youtube") {
            return true;
          } else {
            return false;
          }
        }
      },
    },
  ],
};
