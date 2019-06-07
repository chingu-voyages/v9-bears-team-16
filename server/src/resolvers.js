module.exports.resolvers = {
  Query: {
    // feed: (parent, args, context) => {
    //   return context.prisma.posts({ where: { published: true } })
    // },
    // drafts: (parent, args, context) => {
    //   return context.prisma.posts({ where: { published: false } })
    // },
    // post: (parent, { id }, context) => {
    //   return context.prisma.post({ id })
    // },
    // themes: (parent, args, context) => {
    //   return context.prisma.themes()
    // },
    // theme: (parent, { id }, context) => {
    //   return context.prisma.theme({ id })
    // }
  },
  Mutation: {
    // createDraft(parent, { title, content }, context) {
    //   return context.prisma.createPost({
    //     title,
    //     content
    //   })
    // },
    // deletePost(parent, { id }, context) {
    //   return context.prisma.deletePost({ id })
    // },
    // publish(parent, { id }, context) {
    //   return context.prisma.updatePost({
    //     where: { id },
    //     data: { published: true }
    //   })
    // }
  }
}
