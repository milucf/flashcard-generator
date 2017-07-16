module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    if (text.includes(cloze)) {
        this.partial = text.replace(cloze, "...");
        this.cloze = cloze;
        this.fullText = text;
    }
    else {
        throw new Error("'"+cloze+"'  doesn't appear in '"+text+"'");
    }
}