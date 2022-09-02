export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '631227eeef40932ccef74bc6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bdjzdq2o',
                  apiId: '0da2f0e1-9be5-4eb1-90f1-e5e27efdf52d'
                },
                {
                  buildHookId: '631227ef0ac378235edcd038',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-q461nmeu',
                  apiId: '628966bb-4558-448f-a1bb-cc0a3e54cfc3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kandy22/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-q461nmeu.netlify.app', category: 'apps'}
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
