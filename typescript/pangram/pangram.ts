export default class Pangram{
    private letterSet : Set<string>

    constructor(letters: string){
        this.letterSet = new Set(
            Array.from(letters.toLowerCase())
            .filter((c) => 'a' <= c && c <= 'z'))
    }

    isPangram(): boolean{
        return this.letterSet.size == 26
    }
}