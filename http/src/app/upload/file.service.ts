import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  upload(files: Set<File>, url: string) {

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file, file.name);
    });

    /**
     * Maneira com Request
     */
    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    });

  }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }

  handleFileDownload(response: Blob, fileName: string) {

    const file = new Blob([response], {
      type: response.type
    });

    // Hack IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(blob);
    link.remove();

  }

}
