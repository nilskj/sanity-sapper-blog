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
                  buildHookId: '60357eb604c7f100b98a5195',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-9m2o4pco',
                  apiId: 'c44d0dc2-ce23-4eb9-8aca-bdad36b8c698'
                },
                {
                  buildHookId: '60357eb623ae680083b4d553',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-5vuvapd9',
                  apiId: '440b080f-b495-48d7-9a24-96f95858954d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nilskj/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-5vuvapd9.netlify.app', category: 'apps'}
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
