import send from "./send";

export default async function handleZork(text: string, browserId: string): Promise<string> {
    if (text.match(/quit/)) {
        return send('\nquit\ny', browserId);
    }
    return send(text, browserId);
}
