import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SubjectRepository} from "../../_repository/subject.repository";
import {ArticlesModel} from "../../_model/articles.model";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-write',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule,
    HttpClientModule
  ],
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit{
  @ViewChild('createForm') documentEditForm!: FormGroup;

  myForm!: FormGroup;
  selectedFile!: ImageSnippet;
  stateConfig: string = ''
  selectedArticle: string = ''
  selectedRemoveArticle: string = ''
  selectedArticleSlug: string = ''

  isPreview: boolean = true;

  constructor(private fb: FormBuilder,
              private repo: SubjectRepository) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: '',
      category: '',
      image: '',
      content: '',
      author: '',
      description: ''
    })
  }

  publish(form: FormGroup) {
    console.log('masuk')
    if (this.stateConfig === 'create') {
    this.repo.saveArticle(form.value)
    } else if (this.stateConfig === 'edit') {
      this.repo.updateArticle(this.selectedArticle, form.value)
    }
  }

  getArticleForEdit() {
    this.myForm.patchValue({title: ''})
  }

  onRemove() {
    this.repo.removeArticleById(this.selectedRemoveArticle)
  }

  onChange(event: any) {
    this.selectedRemoveArticle = event
  }

  onChangeEdit(event: any) {
    this.selectedArticle = event
    this.myForm.patchValue(
      {
        title: this.getArticleBySlug(event)?.title,
        category: this.getArticleBySlug(event)?.category,
        image: this.getArticleBySlug(event)?.image,
        description: this.getArticleBySlug(event)?.description,
        author: this.getArticleBySlug(event)?.author,
        content: this.getArticleBySlug(event)?.content
      })

  }

  getArticleBySlug(id: string): ArticlesModel | undefined {
    return this.repo.getArticleById(id)
  }

  get getArticles(): ArticlesModel[] {
    return this.repo.getArticles()
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
    });

    reader.readAsDataURL(file);
  }
}
