import {Injectable} from "@angular/core";
import {ChildSubjectModel, SubjectListModel} from "./subject-list.model";

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {
  private data: SubjectListModel[]

  constructor() {
    this.data = new Array<SubjectListModel>(
      new SubjectListModel('1', 'Quickstart',  'quickstart', [
        new ChildSubjectModel('a1', 'Overview', 'overview'),
        new ChildSubjectModel('a2', 'Intro to TypeScript', 'intro-to-typeScript'),
        new ChildSubjectModel('a3', 'Writing Our First App', 'writing-our-first-app'),
      ]),
      new SubjectListModel('2', 'ES6 JavaScript & TypeScript',  'quickstart'),
      new SubjectListModel('2', 'Angular CLI',  'quickstart'),
      new SubjectListModel('2', 'Components',  'quickstart'),
    );
  }

  getSourceSubject(): SubjectListModel[] {
    return this.data
  }
}
