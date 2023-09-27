// todo - Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні
//        з полів, та вивести об'єкт в документ. Іншими словами: заповнити форму, натиснули кнопку,
//        під формою з'явився блок з вашим об'єктом
let userForm = document.getElementById('user');
userForm.onsubmit = function (ev) {
    ev.preventDefault();
    let divEl = document.createElement('div');
    divEl.innerText =
        `
        Name - ${this.userName.value}
        Surname - ${this.userSurname.value}
        Age - ${this.userAge.value}
        `;
    document.body.appendChild(divEl);
}
// ====================================================================================================================


// ====================================================================================================================
// todo - Є сторінка, на якій є блок, в якому знаходиться цифра. Написати код, який при кожному перезавантажені
//        сторінки буде додавати до неї +1
let localStorageNumber = localStorage.getItem('counter') || 0;
localStorageNumber++;
localStorage.setItem('counter', localStorageNumber);
document.getElementById('number').innerHTML = localStorageNumber;
// ====================================================================================================================


// ====================================================================================================================
// todo - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається
//        інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
//        при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//        Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію
let localStorageSession = localStorage.getItem('session') || [];
localStorageSession.push({
    time: new Date()
});
localStorage.setItem('session', JSON.stringify(localStorageSession));
// ====================================================================================================================


// ====================================================================================================================
// todo - Зробити масив на 100 об'єктів та дві кнопки prev next
//        - при завантаженні сторінки з'являються перші 10 об'єктів.
//        - при натисканні next виводяться наступні 10 об'єктів.
//        - при натисканні prev виводяться попередні 10 об'єктів.
let posts = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam " +
            "varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh " +
            "scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut."
    },
    {
        id: 2,
        title: "Quisque non ligula laoreet, volutpat velit cursus, condimentum arcu.",
        content: "Placerat erat consectetur mauris sollicitudin facilisis praesent nam nascetur! Semper odio est" +
            " condimentum sollicitudin fames orci porttitor consequat platea urna. "
    },
    {
        id: 3,
        title: "Morbi dictum dui vel bibendum ultrices.",
        content: "Et ullamcorper, litora integer taciti suspendisse. Sociosqu hac bibendum elit quisque et porta in" +
            " viverra sagittis conubia luctus himenaeos. "
    },
    {
        id: 4,
        title: "Duis bibendum augue et feugiat imperdiet.",
        content: "Primis conubia vivamus vestibulum curabitur! Pellentesque ad vitae cras mollis morbi elementum. " +
            "Quisque gravida arcu vehicula morbi scelerisque curae; mi sapien."
    },
    {
        id: 5,
        title: "Integer molestie metus eu felis facilisis venenatis.",
        content: "Taciti proin leo faucibus montes parturient cursus quis sodales hac magna dui cursus." +
            " Neque aliquam dolor mollis commodo primis."
    },
    {
        id: 6,
        title: "Nam vehicula risus non sapien tincidunt, sit amet elementum turpis posuere.",
        content: "Risus nascetur sodales gravida hendrerit posuere primis feugiat. Eget sodales eget non odio nostra. " +
            "Montes platea hac inceptos parturient diam elementum auctor luctus. Habitasse odio tempus ut ornare " +
            "sagittis curae; lobortis sed sapien sit in dictum?"
    },
    {
        id: 7,
        title: "Vivamus accumsan orci eget rutrum eleifend.",
        content: "Elementum accumsan feugiat condimentum tortor lacus enim? Iaculis litora maecenas quisque " +
            "aenean ridiculus per, senectus cum parturient condimentum."
    },
    {
        id: 8,
        title: "Aliquam mollis lectus a nibh sagittis, vel facilisis est consectetur.",
        content: "Cubilia commodo fermentum magnis ultrices orci tincidunt vivamus aliquet condimentum, " +
            "odio massa fermentum."
    },
    {
        id: 9,
        title: "Nullam maximus nibh non justo efficitur, tempus ultrices leo eleifend.",
        content: "Fringilla ultrices duis gravida morbi montes nec penatibus mus! Potenti luctus porttitor dis." +
            " Massa inceptos dignissim metus posuere faucibus cum in rhoncus habitasse aliquam eros."
    },
    {
        id: 10,
        title: "Suspendisse hendrerit enim sit amet turpis posuere dignissim id consectetur eros.",
        content: "Id aliquet convallis sodales mi arcu fusce. Congue praesent vitae pretium mattis cras " +
            "integer mi, metus gravida laoreet."
    },
    {
        id: 11,
        title: "Vestibulum placerat urna non cursus placerat.",
        content: "Cras rutrum, fringilla egestas. Eros mattis posuere augue cras est adipiscing pharetra? " +
            "Eros laoreet sociosqu non donec ultricies vitae enim mi, condimentum felis."
    },
    {
        id: 12,
        title: "Etiam congue leo ut urna tempor venenatis.",
        content: "Fames volutpat est posuere. Mattis semper blandit dictum felis pellentesque elit aliquet id!" +
            " Senectus sagittis euismod turpis. Velit torquent mi iaculis vel" +
            " blandit sollicitudin lectus lectus dapibus justo."
    },
    {
        id: 13,
        title: "Morbi volutpat nulla id sem tempor maximus.",
        content: "Parturient phasellus sapien turpis sodales ridiculus tempor etiam proin parturient quam velit id."
    },
    {
        id: 14,
        title: "Ut posuere nibh in arcu ultricies auctor quis sit amet lectus.",
        content: "Urna mauris dolor semper? Nullam integer turpis platea fringilla congue turpis" +
            " euismod etiam suspendisse nisi!"
    },
    {
        id: 15,
        title: "Donec quis libero gravida, placerat felis ac, lacinia augue.",
        content: "Morbi mauris torquent volutpat cum, convallis iaculis suscipit auctor. Feugiat blandit " +
            "vitae quis ligula elit per."
    },
    {
        id: 16,
        title: "Fusce congue sapien vitae arcu aliquet cursus.",
        content: "Tempus faucibus nam habitant dolor nibh. Risus bibendum mollis egestas malesuada sit " +
            "praesent ligula condimentum non."
    },
    {
        id: 17,
        title: "Phasellus ultricies urna vel placerat suscipit.",
        content: "Litora parturient facilisi vulputate duis neque. Vehicula laoreet senectus litora praesent morbi" +
            " mauris a dui volutpat placerat facilisis! Potenti eros eu ullamcorper duis? Odio sociosqu leo et molestie!"
    },
    {
        id: 18,
        title: "Aenean eleifend elit in porttitor efficitur.",
        content: "Vitae platea cursus, magna posuere porta faucibus. Accumsan viverra risus habitasse cum" +
            " fusce parturient inceptos."
    },
    {
        id: 19,
        title: "Sed eu enim in elit vestibulum elementum sed vel ex.",
        content: "Mus porttitor velit purus feugiat molestie phasellus sodales felis netus ullamcorper odio. " +
            "Sociis mauris conubia mi ligula."
    },
    {
        id: 20,
        title: "Sed malesuada eros id vestibulum tempus.",
        content: "Phasellus sit commodo imperdiet? Fermentum egestas egestas a velit eget at. " +
            "Neque neque ridiculus accumsan, sapien bibendum."
    },
    {
        id: 21,
        title: "Etiam id ipsum a dolor ultrices hendrerit.",
        content: "Pretium sociosqu pharetra inceptos taciti nulla vulputate, porta litora. " +
            "Egestas vulputate ipsum dignissim sociosqu penatibus proin!"
    },
    {
        id: 22,
        title: "Aliquam rhoncus diam efficitur dapibus consectetur.",
        content: "Curae; interdum risus natoque et? Aptent luctus molestie condimentum sollicitudin laoreet dictum " +
            "ultricies vitae rhoncus! Tortor quisque ut maecenas nisl accumsan in porttitor dictum aliquet augue nascetur."
    },
    {
        id: 23,
        title: "Nam congue ipsum non justo molestie, eget cursus tellus placerat.",
        content: "Ligula odio ante arcu cubilia. Convallis placerat vulputate platea placerat urna litora est" +
            " eleifend felis id class proin! Enim neque varius hac praesent congue."
    },
    {
        id: 24,
        title: "Nunc varius metus aliquam risus placerat ultrices.",
        content: "Congue adipiscing dui orci pellentesque pretium euismod. Feugiat convallis sapien dui" +
            "porta massa ligula dictum ut lacinia scelerisque neque fames?"
    },
    {
        id: 25,
        title: "Quisque egestas lorem placerat, elementum augue vel, volutpat massa.",
        content: "Mattis eros orci vitae, venenatis fringilla sed. Laoreet aliquet tempor amet turpis erat eget potenti."
    },
    {
        id: 26,
        title: "Donec sed purus efficitur, egestas libero varius, congue arcu.",
        content: "Dictum pellentesque odio a, lorem ullamcorper dapibus felis facilisis sodales."
    },
    {
        id: 27,
        title: "Morbi ac tortor at mi facilisis mollis vitae sed libero.",
        content: "Cum class platea eleifend lobortis accumsan lacus etiam, metus lectus a eu blandit."
    },
    {
        id: 28,
        title: "Vestibulum sit amet nunc fermentum erat euismod posuere.",
        content: "Primis aptent rhoncus duis ac et libero phasellus. Vitae montes, dictum mauris sapien mauris " +
            "vehicula imperdiet."
    },
    {
        id: 29,
        title: "Donec in quam rutrum erat ultrices commodo.",
        content: "Velit donec class faucibus himenaeos elementum potenti vestibulum neque etiam montes felis? " +
            "Fermentum donec cubilia porta nulla suspendisse platea dui ornare."
    },
    {
        id: 30,
        title: "Ut nec justo eleifend metus lacinia ultricies.",
        content: "Varius et arcu a egestas. Ornare condimentum nibh elit vitae. Nam egestas porttitor condimentum platea."
    },
    {
        id: 31,
        title: "Nunc in nunc in diam pulvinar scelerisque.",
        content: "At leo quam dui vivamus. Platea ad at cubilia tellus dui facilisi cubilia nisl; parturient est montes?"
    },
    {
        id: 32,
        title: "Cras vel augue pretium, commodo risus sed, pharetra nisl.",
        content: "Nostra vel enim nunc sollicitudin magna consectetur dis sociis est urna." +
            "Bibendum magna suscipit convallis varius malesuada."
    },
    {
        id: 33,
        title: "Nullam sit amet lorem molestie odio dapibus rhoncus.",
        content: "Venenatis aliquam, odio amet. Nibh aliquam quam nec sapien erat habitasse consectetur odio, " +
            "bibendum venenatis?"
    },
    {
        id: 34,
        title: "Morbi euismod lorem in euismod convallis.",
        content: "Ultrices quam fermentum non viverra morbi. Primis felis pellentesque mus erat himenaeos inceptos" +
            " mauris, commodo dictum porta suscipit."
    },
    {
        id: 35,
        slug: "quis",
        content: "Sagittis libero ante inceptos. Tincidunt curae; vehicula eget. Tellus mattis magnis porttitor " +
            "natoque velit odio tempus cubilia dis lectus viverra adipiscing."
    },
    {
        id: 36,
        title: "Duis at turpis sit amet urna imperdiet consequat.",
        content: "Dictumst primis ut varius porta. Dolor himenaeos dictum consequat velit fringilla iaculis!"
    },
    {
        id: 37,
        title: "Nunc vel nibh sit amet massa porta ornare id et arcu.",
        content: "Semper torquent nibh fusce mus vulputate fermentum pellentesque! " +
            "Per luctus sociosqu ad penatibus felis accumsan suspendisse habitasse convallis torquent sodales luctus."
    },
    {
        id: 38,
        title: "Cras nec sapien eget libero ullamcorper semper et eu felis.",
        content: "Vel diam aptent vel diam lorem fringilla, enim cras. Varius himenaeos fringilla tincidunt fermentum."
    },
    {
        id: 39,
        title: "Vivamus sit amet orci vitae metus convallis vulputate quis eget justo.",
        content: "Vivamus dictumst faucibus gravida dictumst libero velit. Imperdiet mauris magnis " +
            "fusce purus eros penatibus."
    },
    {
        id: 40,
        title: "In a ligula non lorem fringilla congue.",
        content: "Ante eu ultrices a pellentesque aliquet himenaeos lectus per nec dictumst."
    },
    {
        id: 41,
        title: "Praesent euismod arcu vel mauris tincidunt eleifend.",
        content: "Etiam ligula, elit penatibus libero suspendisse egestas phasellus. Curae; mollis vivamus " +
            "montes mattis ultricies etiam."
    },
    {
        id: 42,
        title: "Donec vehicula odio auctor ante feugiat, at auctor est blandit.",
        content: "Dui pulvinar primis eget magna. Hendrerit egestas vestibulum cras porttitor, " +
            "proin nibh neque purus laoreet sem justo."
    },
    {
        id: 43,
        title: "Pellentesque volutpat quam non massa tristique lobortis.",
        content: "Phasellus ut habitasse diam sem. Libero elit quam orci sociis rhoncus semper sociosqu " +
            "praesent feugiat massa sodales!"
    },
    {
        id: 44,
        title: "Aenean aliquam felis nec mauris fermentum, nec molestie nulla sollicitudin.",
        content: "Netus pulvinar pharetra odio sociosqu penatibus felis in volutpat habitasse viverra."
    },
    {
        id: 45,
        title: "Ut non risus nec tortor facilisis porta.",
        content: "Tortor placerat proin, tortor orci augue fusce cursus elit ullamcorper in hendrerit eleifend."
    },
    {
        id: 46,
        title: "Mauris malesuada nibh ac mi iaculis vehicula.",
        content: "Mi odio commodo vivamus. Molestie primis elit nisl nam enim maecenas nulla egestas " +
            "ultrices consectetur, dapibus primis."
    },
    {
        id: 47,
        title: "Sed consectetur nisl et malesuada malesuada.",
        content: "Ante diam elit egestas pharetra neque mi pulvinar per maecenas id! Parturient condimentum natoque " +
            "phasellus leo bibendum montes, mollis aenean lectus eu."
    },
    {
        id: 48,
        title: "Nullam luctus arcu id dui bibendum pulvinar.",
        content: "Ultrices sapien scelerisque vitae felis vehicula blandit. Nisl volutpat, neque massa."
    },
    {
        id: 49,
        title: "Vivamus viverra dui nec quam imperdiet rhoncus.",
        content: "Mattis donec velit arcu sollicitudin neque fames vulputate, nullam vel ac at urna."
    },
    {
        id: 50,
        title: "Donec quis orci quis metus condimentum rutrum at eget libero.",
        content: "Cum vivamus rutrum habitant est fusce scelerisque lobortis eleifend fringilla dictumst netus!"
    },
    {
        id: 51,
        title: "Integer pharetra augue nec risus pulvinar iaculis.",
        content: "Tincidunt quisque morbi metus cum mattis natoque et. Imperdiet consectetur convallis ante."
    },
    {
        id: 52,
        title: "Etiam pretium nisi at diam elementum, eget lacinia sapien dictum.",
        content: "Nulla sit lacinia dictumst non tortor. Tortor pretium nostra dictum nostra accumsan maecenas odio sociosqu nulla praesent."
    },
    {
        id: 53,
        title: "Quisque vehicula eros id quam tincidunt sollicitudin.",
        content: "Montes odio eget ornare proin montes. Sodales habitant enim praesent velit?" +
            " Mi varius adipiscing ultrices mauris pharetra penatibus nisi."
    },
    {
        id: 54,
        title: "Phasellus ac dui at enim tincidunt porta et ut leo.",
        content: "Tortor orci odio, porta feugiat urna adipiscing hac adipiscing." +
            " Pulvinar convallis orci suscipit fringilla lectus in nostra potenti."
    },
    {
        id: 55,
        title: "Cras ultricies mauris eu scelerisque sodales.",
        content: "Quam sodales nec aptent aenean convallis vivamus primis." +
            " Pellentesque netus, pretium litora augue dis fames."
    },
    {
        id: 56,
        title: "Nam mattis turpis eget placerat vehicula.",
        content: "Senectus volutpat libero euismod bibendum pharetra. Vehicula augue sem " +
            "posuere quam posuere purus interdum."
    },
    {
        id: 57,
        title: "Donec sit amet erat gravida, lobortis urna condimentum, luctus neque.",
        content: "Conubia a fames vivamus at in maecenas risus dictum. A mauris ad auctor odio convallis " +
            "platea risus per ut consectetur hendrerit."
    },
    {
        id: 58,
        title: "Ut euismod nisl a sem sagittis, quis aliquet nisi interdum.",
        content: "Inceptos natoque commodo odio senectus curae; dui. Himenaeos cursus metus vulputate risus, " +
            "scelerisque quis."
    },
    {
        id: 59,
        title: "In mattis ante ut lectus pulvinar, in pretium turpis suscipit.",
        content: "Consequat porta tristique vestibulum. Felis at egestas nibh enim risus bibendum primis " +
            "lacinia cursus enim luctus."
    },
    {
        id: 60,
        title: "Ut non eros vitae metus hendrerit iaculis ut eget mauris.",
        content: "Fringilla hendrerit sed in inceptos nam ante lectus congue amet fusce. Habitasse eros dolor" +
            " scelerisque neque ligula elementum donec sagittis lacus accumsan interdum leo."
    },
    {
        id: 61,
        title: "Sed gravida massa at iaculis interdum.",
        content: "Taciti per urna suscipit condimentum donec potenti pretium platea cras urna parturient."
    },
    {
        id: 62,
        title: "Sed at ipsum quis urna pretium convallis sed quis est.",
        content: "Aptent bibendum elit orci potenti commodo sagittis lobortis? Ultrices commodo suspendisse " +
            "accumsan sit habitant lobortis tincidunt."
    },
    {
        id: 63,
        title: "Nulla vitae sapien maximus nisi convallis varius eget vitae nisi.",
        content: "Viverra dictumst congue condimentum dolor! Tortor est, aptent blandit." +
            " Pellentesque malesuada curabitur nisl tortor nisl lectus."
    },
    {
        id: 64,
        title: "Donec ac lorem vel augue viverra volutpat sagittis dictum nisl.",
        content: "Dui mollis pharetra tellus consequat etiam ante tristique est ridiculus. " +
            "Ultrices dui netus cum inceptos, interdum luctus potenti laoreet."
    },
    {
        id: 65,
        title: "Vivamus at tortor eleifend elit blandit ultrices non et velit.",
        content: "Platea arcu scelerisque auctor nec tempus duis mus luctus commodo. " +
            "Dictumst est eros at nostra suscipit nibh placerat."
    },
    {
        id: 66,
        title: "Vivamus tincidunt enim sit amet consequat blandit.",
        content: "Dapibus pellentesque tempor enim pretium aliquet tristique facilisi lorem luctus."
    },
    {
        id: 67,
        title: "Donec consequat nisi nec aliquam viverra.",
        content: "Morbi suspendisse posuere sem habitant bibendum suscipit mollis lobortis mi proin? Facilisi " +
            "pellentesque ac porta natoque nulla dignissim scelerisque erat posuere."
    },
    {
        id: 68,
        title: "Phasellus ut massa mattis, mollis dolor id, finibus ligula.",
        content: "Et sodales nibh ipsum nisi scelerisque mollis magnis torquent convallis class eros!"
    },
    {
        id: 69,
        title: "Sed convallis dui in sapien finibus, sed tincidunt enim luctus.",
        content: "Adipiscing lectus justo ultrices a nullam luctus aptent, commodo potenti potenti!"
    },
    {
        id: 70,
        title: "Cras et purus vestibulum, lacinia lorem at, fermentum ipsum.",
        content: "Ut sociis himenaeos justo. Vehicula lectus nostra fermentum, interdum nunc enim laoreet at nisl?"
    },
    {
        id: 71,
        title: "Nulla in leo sed tortor mattis aliquam.",
        content: "Semper nulla nisi habitasse montes. Ipsum ullamcorper interdum curae;. Cras dis justo non " +
            "litora metus libero scelerisque volutpat per auctor integer."
    },
    {
        id: 72,
        title: "Nunc euismod sapien a lacus viverra, eget efficitur felis posuere.",
        content: "Nunc suscipit velit vitae class. Interdum nam vitae sapien semper platea accumsan."
    },
    {
        id: 73,
        title: "Cras ut metus nec est fringilla tristique.",
        content: "Sociosqu sociosqu phasellus non lacinia nunc nullam, mauris imperdiet erat."
    },
    {
        id: 74,
        title: "Vestibulum pellentesque dolor in lectus molestie, ut tempor elit mollis.",
        content: "Quam integer ac et primis etiam eu turpis commodo proin hac urna. Curae;" +
            " libero dis auctor netus aptent a."
    },
    {
        id: 75,
        title: "Fusce non risus dignissim, consectetur neque at, viverra lectus.",
        content: "Sem penatibus congue ante luctus etiam magnis hac sollicitudin. Urna aliquam enim volutpat praesent."
    },
    {
        id: 76,
        title: "Sed hendrerit odio eu gravida finibus.",
        content: "Consequat justo dictum interdum conubia. Lacus, senectus sociis integer neque nostra."
    },
    {
        id: 77,
        title: "Duis porta nisi quis orci gravida, non gravida lorem faucibus.",
        content: "Eros amet mi neque molestie at dapibus! Nulla inceptos pharetra posuere vestibulum " +
            "neque aliquet lacus."
    },
    {
        id: 78,
        title: "Sed vulputate dolor vel posuere luctus.",
        content: "Dictum nascetur pulvinar facilisi ante velit erat etiam libero amet cursus. " +
            "Vivamus orci conubia consectetur cursus pharetra?"
    },
    {
        id: 79,
        title: "Phasellus non dolor sit amet libero dictum posuere quis eget felis.",
        content: "Class et imperdiet gravida mattis hac ad. Posuere dapibus cubilia himenaeos inceptos " +
            "eu viverra velit fusce laoreet vulputate facilisi faucibus."
    },
    {
        id: 80,
        title: "Proin ac nisi non justo laoreet egestas.",
        content: "Arcu fusce dolor facilisi risus hendrerit gravida penatibus facilisis; fames dictumst ante."
    },
    {
        id: 81,
        title: "Donec aliquam neque et posuere consectetur.",
        content: "Inceptos adipiscing quis venenatis vivamus odio urna nisl sodales montes leo duis."
    },
    {
        id: 82,
        title: "Etiam eget neque nec ante eleifend hendrerit.",
        content: "Auctor senectus felis ac sapien imperdiet nostra nec! Mollis per rhoncus est lobortis amet " +
            "class mi sapien commodo sit interdum sociosqu."
    },
    {
        id: 83,
        title: "Nullam a lectus pharetra, malesuada nisl ac, ultricies lacus.",
        content: "Curabitur duis ac penatibus vehicula duis. Nam taciti tempor dictum neque leo eget eros?"
    },
    {
        id: 84,
        title: "Donec at nunc posuere est rhoncus porttitor.",
        content: "Arcu sollicitudin vel nascetur interdum et consequat. Nostra auctor libero placerat? " +
            "Congue tellus nec lacus molestie sem curae."
    },
    {
        id: 85,
        title: "Integer suscipit dui non sapien venenatis, eget congue tellus suscipit.",
        content: "Egestas dolor etiam, non malesuada. Facilisi massa lobortis euismod posuere " +
            "aenean dignissim curabitur class duis."
    },
    {
        id: 86,
        title: "Phasellus commodo ligula ac tellus pretium faucibus.",
        content: "Pellentesque interdum commodo adipiscing phasellus montes class rhoncus eleifend porttitor."
    },
    {
        id: 87,
        title: "Proin feugiat ipsum non nisi efficitur tincidunt.",
        content: "Nec dictum iaculis enim aliquam fringilla aptent montes pharetra aliquam vel cum ut."
    },
    {
        id: 88,
        title: "Duis blandit diam pharetra euismod blandit.",
        content: "Curabitur velit purus velit facilisis sapien sollicitudin magnis nostra. " +
            "Massa ultrices donec faucibus quisque mi."
    },
    {
        id: 89,
        title: "Maecenas quis nunc at nunc mollis interdum quis ut tellus.",
        content: "Ut cras malesuada ridiculus consequat tempus. Quisque curae;" +
            " mauris aliquet aliquam fusce consectetur ornare sociis penatibus proin!"
    },
    {
        id: 90,
        title: "Pellentesque eu tellus convallis, tincidunt nunc vel, pulvinar massa.",
        content: "Parturient per, neque hac congue dis dis lacus arcu quisque senectus urna."
    },
    {
        id: 91,
        title: "Nullam posuere quam et mi elementum sodales eu vel arcu.",
        content: "Ipsum feugiat erat morbi. Aenean sed vitae nostra mi nec tempor habitasse eleifend!"
    },
    {
        id: 92,
        title: "Mauris eget ipsum at nunc maximus dignissim.",
        content: "Hac potenti mi dolor aliquam fusce nam bibendum. Odio iaculis lacinia id " +
            "nisi conubia dignissim senectus taciti erat vehicula."
    },
    {
        id: 93,
        title: "Quisque cursus leo a risus eleifend, sed imperdiet dui imperdiet.",
        content: "Eget sollicitudin habitasse facilisis taciti suspendisse."
    },
    {
        id: 94,
        title: "Nullam et mi in odio euismod ultrices et at orci.",
        content: "Metus litora nullam auctor pellentesque libero pellentesque turpis?"
    },
    {
        id: 95,
        title: "Curabitur in sem mollis, euismod lacus rutrum, ultricies sapien.",
        content: "Aptent est varius volutpat convallis augue elit lectus sociosqu magna magna."
    },
    {
        id: 96,
        title: "Duis feugiat arcu ut mauris vestibulum rutrum.",
        content: "Ante luctus lacinia sem, libero et vivamus a egestas ante."
    },
    {
        id: 97,
        title: "Curabitur ut justo a urna faucibus vulputate et ac nibh.",
        content: "Laoreet fames ullamcorper dapibus blandit egestas cras sit sapien sit tristique dignissim!"
    },
    {
        id: 98,
        title: "Sed quis nisl ut massa luctus pretium.",
        content: "Mi semper ridiculus consectetur vitae eget, nec conubia. Felis primis lacus blandit" +
            " morbi faucibus penatibus enim tempus vulputate vel nisl commodo."
    },
    {
        id: 99,
        title: "Aliquam convallis nunc ut massa fermentum sagittis",
        content: "Molestie mauris aliquet arcu eleifend mus vulputate metus ligula sed ligula sagittis odio."
    },
    {
        id: 100,
        title: "Gravida leo proin porta mollis",
        content: "Gravida leo proin porta mollis. Per mauris odio semper himenaeos nibh. Eget ultrices nibh dui."
    }
]

let nextPage = document.getElementById('nextPage');
let previousPage = document.getElementById('previousPage');
let curentPage = 1;

let pagination = (curentPage, paginationLimit = 10) => {
    let wrapPage = document.getElementById('wrapPage');
    let start = (curentPage -1) * paginationLimit;
    let end = curentPage * paginationLimit;

    if (start > 0) {
        previousPage.removeAttribute('disabled')
    } else {
        previousPage.setAttribute('disabled', 'disabled');
    }
    if (end < posts.length) {
        nextPage.removeAttribute('disabled');
    } else {
        nextPage.setAttribute('disabled', 'disabled');
        end = posts.length;
    }
    let arr = [];

    for (let i = start; i < end; i++) {
        let item = document.createElement('div');
        let id = document.createElement('div');
        let title = document.createElement('div');
        let content = document.createElement('div');

        let obj = posts[i];
        item.classList.add('wrapPage', 'item');

        id.innerText = `ID - ${obj.id}`;
        title.innerText = `TITLE - ${obj.title}`;
        content.innerText = `CONTENT - ${obj.content}`;

        item.append(id, title, content);
        arr.push(item);
    }
    wrapPage.replaceChildren(...arr);
}

pagination(curentPage);
previousPage.addEventListener('click', () => pagination(curentPage -= 1));
nextPage.addEventListener('click', () => pagination(curentPage += 1));
// ====================================================================================================================


// ====================================================================================================================
// todo Створити довільний елемент з id = text та створити кнопку. Використовуючи JavaScript, зробіть так,
//      щоб при натисканні на кнопку зникав елемент з id="text".
let divElement = document.createElement('div');
    divElement.innerText = 'block that disappears when the button is pressed';
    divElement.classList.add('text');
let button = document.createElement('button');
    button.innerText = 'click me to remove the blue block';
button.onclick = function (ev) {
    ev.preventDefault();
    divElement.style.display = 'none';
}
document.body.append(divElement, button)
// ====================================================================================================================


// ====================================================================================================================
// todo - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//        При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//        та повідомити про це користувача.
let userVerificationOfAdult = document.getElementById('userAdult');
userVerificationOfAdult.onsubmit = function (ev) {
    ev.preventDefault();
    let divElVerification = document.createElement('div');
    if (this.userAge.value >= 18) {
        divElVerification.innerText =
            `
            You've entered that you're ${this.userAge.value}. Entry is allowed!
            `;
    } else if (this.userAge.value < 18) {
        divElVerification.innerText =
            `
            You've entered that you're ${this.userAge.value}. No entrance!
            `
    }
    document.body.appendChild(divElVerification);
}
// ====================================================================================================================


// ====================================================================================================================
// todo - *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//            При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//            (Додаткова частина для завдання)
let tableForm = document.forms.table;
let table = document.getElementById('table');
tableForm.onsubmit = function (ev) {
    ev.preventDefault();
    for (let i = 0; i < this.columns.value; i++) {
        let tableRowElement = document.createElement('section');
        for (let j = 0; j < this.row.value; j++) {
            let tableColumnElement = document.createElement('p');
            tableColumnElement.innerText = this.text.value;
            tableRowElement.appendChild(tableColumnElement);
        }
        table.appendChild(tableRowElement);
    }
}
// ====================================================================================================================


// ====================================================================================================================
// todo - *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
//            в середині якого є значення "100 грн"
//            при перезавантаженні сторінки до значення додається по 10грн, але!!!
//            зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//            При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let someNumber = +localStorage.getItem('counter2') || 100;
let thisTime = new Date().getTime();
let time = localStorage.getItem('lastTime') || thisTime;
let divEl = document.getElementById('reload');
 if (thisTime - time > 10000) {
     someNumber += 10;
     localStorage.setItem('counter2', someNumber.toString());
 }
divEl.innerText = `${someNumber} грн`;
 localStorage.setItem('lastTime', thisTime.toString());
// ====================================================================================================================