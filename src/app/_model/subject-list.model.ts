export class SubjectListModel {
  constructor(public id: string, public title?: string, public path?: string,  public subTitleList?: ChildSubjectModel[]) {}
}


export class ChildSubjectModel {
  constructor(public id: string, public title?: string, public path?: string) {}
}


export class DefaultResponseModel {
  constructor(public data: [], public message?: string, public successCode?: string, public errorCode?: string) {}
}

