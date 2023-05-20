'use client'

import config from '@site/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export default function AdminPage() {
    return  <NextStudio config={config} />
}
