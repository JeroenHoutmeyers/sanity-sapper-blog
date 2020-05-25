export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecba61d9424d3330f7fcf0c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-oekdwn9d',
                  apiId: '40611f33-d30c-46a2-8338-3467f240bcc1'
                },
                {
                  buildHookId: '5ecba61d5669656b743cd176',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-6fe3hjpv',
                  apiId: '2d097fef-fc7f-4a31-8a32-6ffae273ea6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JeroenHoutmeyers/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-6fe3hjpv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
