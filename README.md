# Define\-Word-Promise
## An easy\-to\-use defintions and synonyms finder

Based in https://www.npmjs.com/package/define-word 

### API
This API is very small. There are only two function and they is synchonous.

#### Define
```>> require("define-word").define("word")```

    << { type: 'noun',
      definitions: 
       [ 'a unit of language, consisting of one or more spoken sounds or their written representation, that functions as a principal carrier of meaning. Words are composed of one or more morphemes and are either the smallest units susceptible of independent use or consist of two or three such units combined under certain linking conditions, as with the loss of primary accent that distinguishes black·bird· from black· bird·. Words are usually separated by spaces in writing, and are distinguished phonologically, as by accent, in many languages.',
         '(used in combination with the first letter of an offensive or unmentionable word, the first letter being lowercase or uppercase, with or without a following hyphen): My mom married at 20, and she mentions the m-word every time I meet someone she thinks is eligible.See also f-word, n-word.',
         'words.speech or talk: to express one\'s emotion in words; Words mean little when action is called for.the text or lyrics of a song as distinguished from the music.contentious or angry speech; a quarrel: We had words and she walked out on me.',
         'a short talk or conversation: Marston, I\'d like a word with you.',
         'an expression or utterance: a word of warning.',
         'warrant, assurance, or promise: I give you my word I\'ll be there.',
         'news; tidings; information: We received word of his death.',
         'a verbal signal, as a password, watchword, or countersign.',
         'an authoritative utterance, or command: His word was law.',
         'Also called machine word. Computers. a string of bits, characters, or bytes treated as a single entity by a computer, particularly for numeric purposes.',
         '(initial capital letter). Also called the Word, the Word of God. the Scriptures; the Bible.the Logos.the message of the gospel of Christ.',
     'a proverb or motto.' ] }
This allows for easy use with no hassle. An example word-definer program:

    getDefinition (text) {
        var defineWord = require("define-word");
        defineWord.define(text).then(function (res) {
            return res;
        }).catch(function(err) {
                console.log('err',err);
        });
    }
        
### Synonym Finder
```
    >> getSynonym (text) {
            var defineWord = require("define-word");
            defineWord.synonyms(text).then(function (res) {
                return res;
            }).catch(function(err) {
                 console.log('err',err);
            });
        }
    << [ 'topography',
  'geopolitics',
  'earth science',
  'geology',
  'cartography',
  'physiography',
  'topology',
  'chorography',
  'geopolitical study',
  'physiographics' ]
```
All defintions from [Dictionary.com](http://www.dictionary.com/)    
All synonyms from [Thesaurus.com](http://www.thesaurus.com/)    
Happy defining!    