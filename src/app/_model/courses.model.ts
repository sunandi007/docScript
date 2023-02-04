export class CoursesModel {
  constructor(public title: string, public slug: string, public child: CourseChildModel[]) {
  }
}


export class CourseChildModel {

}
