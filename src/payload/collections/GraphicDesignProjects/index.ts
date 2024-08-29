import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { slugField } from '../../fields/slug'
import { revalidateProject } from './hooks/revalidateProject'

export const GraphicDesignProjects: CollectionConfig = {
  slug: 'graphic',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    afterChange: [revalidateProject],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'creationDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image', 
      type: 'upload', 
      relationTo: 'image', 
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    slugField(),
  ],
}
