export class SetCurrentFilter {
    static readonly type = '[Filter] Set todo filter';
    constructor(public payload: { filter: string }) { }
}