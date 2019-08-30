interface Keywords {
    [key: string]: Function
}

let keywords: Keywords = {
    'hello': async function hello(): Promise<string> {
        return 'Well hello there, world!';
    },
    '': async function nothing(): Promise<string> {
        return '';
    },
    'test': async function test() : Promise<string> {
        return 'I see you are testing.';
    }
};

export default keywords;
