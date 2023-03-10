const words = {
    list:[],
    //method
    addWord(word){
        if (!word.endsWith('ing')) {
            this.list.push(word);
        }
    }
};
const words2 = {
    list:[],
    //method
    addWord(word){
        if (!word.startsWith('coc')) {
            this.list.push(word);
        }
    }
};


