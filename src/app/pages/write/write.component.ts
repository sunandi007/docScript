import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SubjectRepository} from "../../_repository/subject.repository";
import {ArticlesModel} from "../../_model/articles.model";
import {AlertService} from "../../shared/alert/alert.service";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {
  }
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
export class WriteComponent implements OnInit {
  @ViewChild('createForm') documentEditForm!: FormGroup;

  myForm!: FormGroup;
  selectedFile!: ImageSnippet;
  stateConfig: string = ''
  selectedArticle: string = ''
  selectedRemoveArticle: string = ''
  selectedArticleSlug: string = ''
  firstForm: boolean = true;

  isPreview: boolean = true;
  isInfo: boolean = false;
  toggleDropdown: boolean = false;

  cheatSheetMarkdown = [
    { element: 'Heading', syntax: '# # H1'},
    { element: '', syntax: '## ## H2'},
    { element: '', syntax: '### ### H3'},
    { element: 'Bold', syntax: '**bold text**'},
    { element: 'Italic', syntax: '*italicized text*'},
    { element: 'Blockquote', syntax: '> blockquote'},
    { element: 'Ordered List', syntax: '1. First item'},
    { element: '', syntax: '2. Second item'},
    { element: '', syntax: '3. Third item'},
    { element: 'Unordered List', syntax: '- First item'},
    { element: '', syntax: '- Second item'},
    { element: '', syntax: '- Third item'},
    { element: 'Code', syntax: '`code`'},
    { element: 'Horizontal Rule', syntax: '---'},
    { element: 'Link', syntax: '[title](https://www.example.com)'},
    { element: 'Image', syntax: '![alt text](assets/icon/twitter.svg)'},
    { element: '', syntax: '```![alt text](image.png)```'},
    { element: 'Highlight', syntax: '==very important words=='},
    { element: 'Strikethrough', syntax: '~~The world is flat.~~'},
    { element: 'Emoji', syntax: 'That is so funny! :tent:'},
    { element: 'Code Block', syntax: '```{ "firstName": "John" }```'},
  ]

  constructor(private fb: FormBuilder,
              private repo: SubjectRepository,
              private alert: AlertService) {
    this.stateConfig = 'create';
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
