import {pipe} from 'rxjs';
import {HttpEvent, HttpEventType, HttpResponse, HttpUploadProgressEvent} from '@angular/common/http';
import {filter, map, tap} from 'rxjs/operators';

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

export function uploadProgress<T>(callback: (progress: number) => void) {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.UploadProgress),
    tap((event: HttpUploadProgressEvent) => {
      callback(Math.round((event.loaded * 100) / event.total));
    })
  );
}
