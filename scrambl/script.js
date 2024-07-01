// Notes
/*
  Sounds on errors and correct
  Reshuffle
  Hints for 3 points
*/

let wordList7 = [
  'ability',
  'absence',
  'academy',
  'account',
  'accused',
  'achieve',
  'acquire',
  'address',
  'advance',
  'adverse',
  'advised',
  'adviser',
  'against',
  'airline',
  'airport',
  'aircrew',
  'alcohol',
  'alleged',
  'already',
  'analyst',
  'ancient',
  'another',
  'anxiety',
  'anxious',
  'anybody',
  'applied',
  'arrange',
  'arrival',
  'article',
  'archive',
  'assault',
  'assumed',
  'attempt',
  'attract',
  'auction',
  'average',
  'antique',
  'ancient',
  'alpacas',
  'animate',

  'bayonet',
  'backing',
  'balance',
  'banking',
  'barrier',
  'battery',
  'bearing',
  'beating',
  'because',
  'bedroom',
  'believe',
  'beneath',
  'benefit',
  'besides',
  'between',
  'billion',
  'binding',
  'brother',
  'brought',
  'burning',
  'breaker',
  'blender',

  'cabinet',
  'caliber',
  'caliper',
  'calling',
  'capable',
  'capital',
  'capsize',
  'captain',
  'caption',
  'capture',
  'careful',
  'carrier',
  'caution',
  'ceiling',
  'central',
  'centric',
  'century',
  'certain',
  'chamber',
  'channel',
  'chapter',
  'charity',
  'charter',
  'checked',
  'cheetah',
  'chapped',
  'chicken',
  'chronic',
  'circuit',
  'closing',
  'closure',
  'clothes',
  'cobbler',
  'coconut',
  'collect',
  'college',
  'collage',
  'combine',
  'comfort',
  'command',
  'comment',
  'compact',
  'company',
  'compare',
  'compete',
  'complex',
  'concept',
  'concern',
  'concert',
  'conduct',
  'conduit',
  'confirm',
  'consent',
  'connect',
  'consist',
  'contact',
  'courier',
  'contain',
  'content',
  'contest',
  'context',
  'control',
  'convert',
  'correct',
  'council',
  'counsel',
  'counter',
  'country',
  'crucial',
  'crashed',
  'creator',
  'crystal',
  'culture',
  'current',
  'cutting',

  'dealing',
  'decided',
  'decline',
  'default',
  'defence',
  'deficit',
  'deliver',
  'density',
  'deposit',
  'desktop',
  'despite',
  'destroy',
  'develop',
  'devoted',
  'diamond',
  'digital',
  'discuss',
  'disease',
  'display',
  'dispute',
  'dispose',
  'discard',
  'despise',
  'dimples',
  'distant',
  'diverse',
  'divided',
  'drawing',
  'driving',
  'dynamic',
  'drummer',
  'durable',
  'dubstep',
  'dogfish',
  'dragons',
  'defiant',
  'divides',
  'deities',
  'donkeys',
  'dockman',
  'departs',
  'despair',
  'drunken',
  'damaged',

  'edition',
  'earplug',
  'earlobe',
  'earring',
  'earache',
  'eardrop',
  'eastern',
  'earthen',
  'earning',
  'earshot',
  'earnest',
  'echelon',
  'ecstasy',
  'economy',
  'eclipse',
  'educate',
  'ejector',
  'eighths',
  'effects',
  'effable',
  'editors',
  'edifice',
  'elegant',
  'element',
  'elector',
  'elation',
  'elbowed',
  'elderly',
  'elevate',
  'eletist',
  'elastic',
  'elixirs',
  'elusion',
  'elusive',
  'ellipse',
  'emailed',
  'embarks',
  'embassy',
  'embrace',
  'embalms',
  'emanate',
  'empower',
  'emerald',
  'emotive',
  'emperor',
  'employs',
  'emotion',
  'emitted',
  'embryos',
  'empathy',
  'empires',
  'empress',
  'enclave',
  'enables',
  'enactor',
  'emulate',
  'encoded',
  'endcaps',
  'endorse',
  'endless',
  'endgame',
  'endures',
  'enforce',
  'english',
  'endpins',
  'engaged',
  'enfolds',
  'enemies',
  'engrave',
  'enigmas',
  'envelop',
  'entropy',
  'envious',
  'epitome',
  'episode',
  'equinox',
  'erasers',
  'erosion',
  'escapee',
  'escorts',
  'erotica',
  'ethanol',
  'ethical',
  'evasion',
  'evident',
  'example',
  'exactly',
  'exalted',
  'evolved',
  'exhaust',
  'exclude',
  'exhibit',
  'exiting',
  'excused',
  'explore',
  'exposed',
  'explode',
  'exploit',
  'experts',
  'expired',
  'expects',
  'exotics',
  'expanse',
  'exports',
  'extreme',
  'eyesore',
  'eyebrow',
  'eyeball',
  'eyelids',

  'factory',
  'faculty',
  'failing',
  'failure',
  'fashion',
  'farther',
  'feature',
  'federal',
  'feeling',
  'fiction',
  'fifteen',
  'filling',
  'finance',
  'finding',
  'fishing',
  'fitness',
  'foreign',
  'forever',
  'formula',
  'fortune',
  'forward',
  'founder',
  'freedom',
  'further',

  'gallery',
  'gateway',
  'general',
  'genetic',
  'genuine',
  'greater',
  'garages',
  'gazelle',

  'hanging',
  'hashtag',
  'heading',
  'healthy',
  'hearing',
  'heavily',
  'helpful',
  'helping',
  'herself',
  'highway',
  'himself',
  'history',
  'holding',
  'holiday',
  'however',
  'hundred',
  'husband',

  'illegal',
  'illness',
  'imagine',
  'imaging',
  'improve',
  'include',
  'initial',
  'inquiry',
  'insight',
  'install',
  'instant',
  'instead',
  'intense',
  'interim',
  'involve',

  'juniper',
  'jointly',
  'journal',
  'journey',
  'justice',
  'justify',

  'keeping',
  'killing',
  'kingdom',
  'kitchen',
  'knowing',

  'landing',
  'largely',
  'lasting',
  'lateral',
  'leading',
  'learned',
  'leisure',
  'lexicon',
  'liberal',
  'liberty',
  'library',
  'license',
  'limited',
  'listing',
  'logical',
  'loyalty',

  'mundane',
  'machine',
  'manager',
  'married',
  'massive',
  'maximum',
  'magical',
  'malware',
  'meaning',
  'measure',
  'medical',
  'meeting',
  'mention',
  'message',
  'million',
  'mineral',
  'minimal',
  'minimum',
  'missing',
  'mission',
  'mistake',
  'mixture',
  'monitor',
  'monthly',
  'morning',
  'musical',
  'marquee',
  'mystery',
  'macabre',
  'monocle',

  'natural',
  'neither',
  'nervous',
  'network',
  'neutral',
  'notable',
  'nothing',
  'nowhere',
  'nuclear',
  'nursing',

  'oarsman',
  'oatmeal',
  'obesity',
  'obelisk',
  'obeying',
  'objects',
  'obliged',
  'oblique',
  'obtains',
  'obscure',
  'observe',
  'obscene',
  'octagon',
  'obvious',
  'octopus',
  'oddball',
  'offends',
  'offbeat',
  'offload',
  'offside',
  'odyssey',
  'omnibus',
  'oneself',
  'oneness',
  'onshore',
  'onstage',
  'openers',
  'operand',
  'operate',
  'opinion',
  'opossum',
  'opening',
  'opioids',
  'oracles',
  'opulent',
  'optical',
  'options',
  'oppress',
  'orbital',
  'ordains',
  'orderly',
  'origami',
  'organic',
  'origins',
  'orphans',
  'oysters',
  'ovulate',
  'oxidize',

  'pacific',
  'package',
  'painted',
  'parking',
  'partial',
  'partner',
  'passage',
  'passing',
  'passion',
  'passive',
  'patient',
  'pattern',
  'payable',
  'payment',
  'penalty',
  'pending',
  'pension',
  'peeling',
  'perfect',
  'pheonix',
  'physics',
  'perform',
  'perhaps',
  'picking',
  'picture',
  'pioneer',
  'plastic',
  'pointed',
  'popular',
  'portion',
  'poverty',
  'precise',
  'predict',
  'premier',
  'premium',
  'prepare',
  'present',
  'prevent',
  'primary',
  'printer',
  'privacy',
  'private',
  'problem',
  'proceed',
  'process',
  'produce',
  'product',
  'profile',
  'proctor',
  'proudly',
  'project',
  'promise',
  'promote',
  'protect',
  'protein',
  'protest',
  'provide',
  'publish',
  'purpose',
  'pushing',
  'polearm',

  'qualify',
  'quality',
  'quarter',
  'quantum',
  'quacked',
  'quarrel',
  'quested',
  'quicken',
  'quickly',

  'radical',
  'radiate',
  'railway',
  'railcar',
  'readily',
  'reality',
  'realise',
  'receipt',
  'receive',
  'recover',
  'reflect',
  'regular',
  'related',
  'release',
  'remains',
  'removal',
  'removed',
  'replace',
  'recluse',
  'request',
  'require',
  'reserve',
  'resolve',
  'respect',
  'respond',
  'restore',
  'retired',
  'revenue',
  'reverse',
  'rollout',
  'routine',
  'running',
  'runtime',

  'satisfy',
  'science',
  'section',
  'segment',
  'serious',
  'service',
  'serving',
  'session',
  'setting',
  'seventh',
  'several',
  'shortly',
  'showing',
  'silence',
  'silicon',
  'similar',
  'sitting',
  'sixteen',
  'skilled',
  'smoking',
  'society',
  'somehow',
  'someone',
  'speaker',
  'special',
  'species',
  'sponsor',
  'station',
  'storage',
  'strange',
  'stretch',
  'student',
  'studied',
  'studies',
  'subject',
  'succeed',
  'spyware',
  'spandex',
  'spatula',
  'sparked',
  'stellar',
  'stealth',
  'stinker',
  'sticker',
  'scathed',
  'sheared',
  'shackle',
  'starlit',
  'sparkle',
  'stacked',

  'teacher',
  'telecom',
  'telling',
  'tension',
  'theater',
  'therapy',
  'thereby',
  'thistle',
  'thought',
  'through',
  'titanic',
  'tonight',
  'totally',
  'touched',
  'towards',
  'traffic',
  'tractor',
  'transit',
  'trouble',
  'turning',
  'typical',
  'tripped',
  'tassles',
  'tuesday',

  'uniform',
  'unknown',
  'unusual',
  'upgrade',
  'upscale',
  'utility',

  'vampire',
  'varsity',
  'variety',
  'various',
  'vehicle',
  'venture',
  'version',
  'veteran',
  'victory',
  'viewing',
  'village',
  'violent',
  'visible',
  'virtual',
  'voltage',

  'walking',
  'wanting',
  'warning',
  'warrant',
  'wearing',
  'weather',
  'wedding',
  'weekend',
  'welcome',
  'welfare',
  'whether',
  'willing',
  'winning',
  'without',
  'witness',
  'working',
  'writing',
  'written',
  'western',
  'whereas',
  'whereby',
  'waiting',

  'yardage',
  'yardmen',
  'yawning',
  'yeasted',
  'yellowy',
  'yielded',
  'yodeler',
  'yoghurt',
  'younger',
  'yuckier',
  'yummier',
  'yelling',

  'zapping',
  'zealots',
  'zealous',
  'zaniest',
  'zeroing',
  'zigzags',
  'zodiacs',
  'zombies',
  'zombify',
  'zoology',
  'zooming',
];
const textbox = document.querySelector('#textbox');
const prompt = document.querySelector('#prompt');
const keyboard = document.getElementById('keyboard');
const enterKey = document.querySelector(`kbd[data-key='Enter']`);
const backspaceKey = document.querySelector(`kbd[data-key='Backspace']`);
const letterKeys = Array.from(document.querySelectorAll(`kbd[data-letter]`));

let points = 0;
const pointCounter = document.getElementById('pointCounter');

let correctWord;

startGame();

function startGame() {
  displayWord(shuffleWord(chooseWord()));
}

function chooseWord() {
  let word = wordList7[Math.floor(Math.random() * wordList7.length)];
  correctWord = word;
  return word;
}

function shuffleWord(word) {
  word = Array.from(word);
  // cycle through and swap letters around / Fischer-Yates shuffle
  let currentIndex = word.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // shuffle shuffle shuffle
    [word[currentIndex], word[randomIndex]] = [word[randomIndex], word[currentIndex]];
  }
  // put the word back together
  return word.join('');
}

function displayWord(word) {
  prompt.textContent = word.toUpperCase();
}

//Keyboard functionality
textbox.textContent = '';
document.addEventListener('keydown', e => {
  //check if it's a letter key
  if (e.keyCode >= 65 && e.keyCode <= 90 ||
    e.keyCode >= 97 && e.keyCode <= 122) {
    if (textbox.textContent.length === 7) {
      animation(textbox, 'error');
    }
    //check if the word is less than 7 letters
    if (textbox.textContent.length < 7) {
      textbox.textContent += e.key.toUpperCase();
      //add styling
      const letterKey = document.querySelector(`kbd[data-key = ${e.key.toLowerCase()}`);
      animation(letterKey, 'pressed');
    }
  }
  //backspace
  else if (e.key === 'Backspace') {
    backspace();
  }
  else if (e.key === 'Enter') {
    enter();
  }
  else return;
})

keyboard.addEventListener('click', e => {
  if (letterKeys.includes(e.target) && textbox.textContent.length < 7) {
    animation(e.target, 'pressed');
    textbox.textContent += e.target.textContent.toUpperCase();
  }
  else if (e.target === enterKey) {
    enter();
  }
  else if (e.target === backspaceKey) {
    backspace();
  }
  else if (textbox.textContent.length === 7) {
    animation(textbox, 'error');
  }
})

function enter() {
  if (textbox.textContent.toLowerCase() === correctWord) {
    managePointCount();
    animation(textbox, 'correct');
    animation(enterKey, 'correct');
    animation(backspaceKey, 'correct');
    textbox.textContent = '';
    startGame();
  }
  else {
    animation(enterKey, 'pressed');
    animation(textbox, 'error');
  };
}
function backspace() {
  textbox.textContent = textbox.textContent.slice(0, -1);
  animation(backspaceKey, 'pressed');
}

function animation(element, className) {
  element.classList.add(`${className}`);
  element.addEventListener('transitionend', () => {
    element.classList.remove(`${className}`);
  })
}

function managePointCount() {
  points++;
  pointCounter.textContent = `# of points: ${points}`;
}

function reshuffle() {
  displayWord(shuffleWord(prompt.textContent));
}

//SCRAMBL title animation
titleAnimation()
function titleAnimation() {
  document.title = 'S';
  setTimeout(() => {
    document.title += 'C';
    setTimeout(() => {
      document.title += 'R';
      setTimeout(() => {
        document.title += 'A';
        setTimeout(() => {
          document.title += 'M';
          setTimeout(() => {
            document.title += 'B';
            setTimeout(() => {
              document.title += 'L';
              setTimeout(() => {
                titleAnimation();
                return;
              }, 1200);
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }, 300);
}
