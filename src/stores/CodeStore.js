import { observable } from 'mobx';

export default class CodeStore {
    @observable kind = 'python';
    @observable text = "print ('hello, world')";
}