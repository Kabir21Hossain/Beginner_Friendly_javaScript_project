
class TrieNode{
    constructor(){
        this.children={};
        this.EOW=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();

    }

    insert(word){
        let node=this.root;

        for(let ch of word.toLowerCase()){
            if(!node.children[ch]){
                node.children[ch]=new TrieNode();
            }

            node=node.children[ch];
        }

        node.EOW=true;

    }

    search(word){
        let node=this.root;
        for(let ch of word.toLowerCase()){
            if(!node.children[ch])return false;
            node=node.children[ch];
        }
        return node.EOW;

    }

    startsWith(word){
        let node=this.root;
        for(let ch of word.toLowerCase()){
            if(!node.children[ch]){
                return false;
            }
            node=node.children[ch];
        }
        return true;
    }

    delete(word){
        const deleteRecursively=(node,word,index)=>{
            if(index===word.length){
                if(!node.EOW){
                    return false;
                }
                node.EOW=false;
                return Object.keys(node.children).length===0;
            }

            const char=word[index].toLowerCase();
            if(!node.children[char])return false;

            const shouldDeleteChild=deleteRecursively(node.children[char],word,index+1);

            if(shouldDeleteChild){
                delete node.children[char];
                return Object.keys(node.children).length=== 0 && !node.EOW;
            }

            return false;

        };

        deleteRecursively(this.root,word.toLowerCase(),0);

    }

    getAllWords(){
        const result=[];
        const dfs=(node,curWord)=>{
            if(node.EOW){
                result.push(curWord);
            }
            
            for(let char in node.children){
                dfs(node.children[char],curWord+char);
            }
        };
        dfs(this.root,'');
        return result;
    }

}

const wordInput=document.getElementById('wordInput');
const result=document.getElementById("result");
const wordList=document.getElementById("wordList");

const trie=new Trie();

function showResult(message,color='text-gray-800'){
    result.className=`text-lg text-center font-semibold ${color}`;
    result.textContent=message;
    
    
}

function insertWord(){
    const word=wordInput.value.trim();

    if(word){
        trie.insert(word);
        showResult(`word ${word} is inserted successfully`,'text-green-600');
        wordInput.value='';
    }

    else{
        showResult('Please enter a word','text-red-600');
    }


}

function searchWord(){
    const word=wordInput.value.trim();

    if(word){
        const found=trie.search(word);
        showResult(`word ${word} ${found?"found":"not found"}`,found?'text-green-600':'text-red-600');
    }
    else{
        showResult('Please enter a word','text-red-600');
    }
}

function deleteWord(){
    const word=wordInput.value.trim();
    if(word){
        trie.delete(word);
        showResult(`word ${word} deleted if it existed`,'text-green-600');
        wordInput.value='';
    }
    else{
        showResult('Please enter a word','text-red-600');
    }
}

function displayAllWords() {
    const words = trie.getAllWords();
    wordList.innerHTML = '';
    
    if (words.length === 0) {
        wordList.innerHTML = '<li class="text-gray-500 italic">No words in the Trie yet</li>';
        showResult('Trie is empty', 'text-gray-600');
    } else {
        words.forEach(word => {
            const li = document.createElement("li");
            li.textContent = word;
            li.className = "py-1";
            wordList.appendChild(li);
        });
        showResult(`Total words: ${words.length}`, 'text-blue-600');
    }
}

function prefixSearch(){
    const word=wordInput.value.trim();
    if(word){
        const found=trie.startsWith(word);
       showResult(found 
    ? `There are words starting with "${word}"` 
    : `No words start with "${word}"`, 
    found ? 'text-green-600' : 'text-red-600');
    }
    else{
        showResult('Please enter a word','text-red-600');
    }
}
