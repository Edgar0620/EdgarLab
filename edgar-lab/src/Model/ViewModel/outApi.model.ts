export class OutApi {

    constructor(
        public statusCode: number,
        public result: Object,
        public error: string
    ) { };
}