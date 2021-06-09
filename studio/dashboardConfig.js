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
                  buildHookId: '60c0dd2106c0544bc0af0210',
                  title: 'Sanity Studio',
                  name: 'vynyl-sanity-poc-studio',
                  apiId: '56dcad5c-fffa-4ea7-9ed7-52a5c352aa4f'
                },
                {
                  buildHookId: '60c0dd210465a834913e2992',
                  title: 'Blog Website',
                  name: 'vynyl-sanity-poc',
                  apiId: '23780fce-4b5f-4554-87fc-88ed07ce69d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qbunt/vynyl-sanity-poc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vynyl-sanity-poc.netlify.app', category: 'apps'}
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
