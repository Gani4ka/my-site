import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import project from './sanity/schemas/project-schema'

const config = defineConfig({
    title: 'my site admin',
    projectId: 'z4d8etkl',
    dataset: 'production',
    apiVersion: '2021-03-25',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: [project],
    },
})

export default config
