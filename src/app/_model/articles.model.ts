export class ArticlesModel {
  constructor(public _id: string, public title: string, public slug: string, public image: string, public content: string, public category: string, public author: string, public description: string) {
  }
}
