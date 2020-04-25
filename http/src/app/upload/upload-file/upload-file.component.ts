import {Component, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../file.service';
import {filterResponse, uploadProgress} from '../../shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styles: []
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;

  progress: number;

  @ViewChild('fileLabel') fileLabel;

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  onChange(event: Event) {

    const element: any = event.target;
    const selectedFiles = Array.from((element.files as FileList));

    this.files = new Set<File>();
    selectedFiles.forEach((file: File) => {
      this.files.add(file);
    });

    this.fileLabel.nativeElement.innerHTML = selectedFiles.map(file => file.name).join(', ');

  }

  async onUpload() {

    if (!this.files || this.files.size <= 0) {
      return;
    }

    this.progress = 0;

    this.fileService.upload(this.files, '/api/upload')
      .pipe(
        uploadProgress(progress => this.progress = progress),
        filterResponse()
      )
      .subscribe((response) => console.log('Upload Concluído'));

    // this.fileService.upload(this.files, '/api/upload')
    //   .subscribe((event: HttpEvent<any>) => {
    //
    //     // Progresso
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progress = Math.round((event.loaded * 100) / event.total);
    //     }
    //
    //     // Finalizado
    //     if (event.type === HttpEventType.Response) {
    //       console.log('Upload Concluído');
    //     }
    //
    //
    //   });

  }

  onDownloadExcel() {
    this.fileService.download('/api/downloadExcel')
      .subscribe((response: Blob) => {
        this.fileService.handleFileDownload(response, 'report.xlsx');
      });
  }

  onDownloadPDF() {
    this.fileService.download('/api/downloadPDF')
      .subscribe((response: Blob) => {
        this.fileService.handleFileDownload(response, 'report.pdf');
      });
  }
}
