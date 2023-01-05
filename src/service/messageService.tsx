import { Subject } from "rxjs";

const subject = new Subject();

export const messageService = {
  sendMessage: (state: any) => subject.next(state),
  getMessage: () => subject.asObservable(),
};
