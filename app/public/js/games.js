'use strict';

var indexedit;

iconExtractor.emitter.on('icon', function(data) {
    var folder_path = process.env.APPDATA + "/InfinityApp/games";
    var image_path = process.env.APPDATA + `/InfinityApp/games/Icons/${data.Context}_icon.png`;
    var icon = data.Base64ImageData;

    if (!fs.existsSync(folder_path)) {
        fs.mkdirSync(folder_path);
        fs.chmodSync(folder_path, '777');
        if (!fs.existsSync(folder_path + '/Icons')) {
            fs.mkdirSync(folder_path + '/Icons');
            fs.chmodSync(folder_path + '/Icons', '777');
        }
    }

    if (!fs.existsSync(image_path)) {
        fs.writeFile(image_path, icon, 'base64', (err) => {
            if (err) console.log(err);
        });
    }
});

eventEmitter.on('open-module-games', async() => {
    updateListGames();
});

var fileTypes = [
    'application/x-msdownload',
]

var input;
var sep_data = {};

function updateImageDisplay() {
    var curFiles = input.files;
    if (curFiles.length > 0) {
        for (var i = 0; i < curFiles.length; i++) {
            if (validFileType(curFiles[i], fileTypes)) {
                iconExtractor.getIcon(curFiles[i].name, curFiles[i].path);

                $('#gamesText').children('input').val(curFiles[i].name.replace('.exe', ''));
                $('#gamesDesc').children('input').val("Sem Descrição");
                $('#gamesThumb').children('input').val(`${curFiles[i].name}_icon.png`);

                sep_data = {
                    "name": curFiles[i].name.replace('.exe', ''),
                    "description": "Sem Descrição",
                    "path": curFiles[i].path,
                    "thumb": `${curFiles[i].name}_icon.png`
                }
                console.log(`[Game] ${JSON.stringify(sep_data)}`);
            }
        }
    }
}

function overgi592n() {
    $('.expo-game-fT46of>.is-overlay').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-add').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-add').css('transform', 'scale(0.9, 0.9)');
    $('.expo-game-fT46of>.gameview-add').css('z-index', '-1');

    $('.expo-game-fT46of>.gameview-edit').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-edit').css('transform', 'scale(0.9, 0.9)');
    $('.expo-game-fT46of>.gameview-edit').css('z-index', '-1');

    $('.gameview-add').remove();
    $('.gameview-edit').remove();

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('display', 'none');
        $('.expo-game-fT46of>.gameview-add').css('display', 'none');

        $('.expo-game-fT46of>.gameview-edit').css('display', 'none');
    }, 600);
}

function GameAddF58dY4() {
    $('.expo-game-fT46of').append(`
    <div class="gameview-add animation-default" style="width: 0px; z-index: -1;">
        <div class="gameview-Te2Y93">
            <div>
                <span>Adicionar games</span>
                <div id="gamesText">
                    <span>Nome</span>
                    <input type="text"></div>
                <div id="gamesInput">
                    <span>Path</span>
                    <label class="animation-default" for="game_exe">Escolha seu jogo.</label>
                    <input type="file" id="game_exe" name="game_exe" accept=".exe" multiple="" style="display: none;"></div>
                <div id="gamesDesc">
                    <span>Descrição</span>
                    <input type="text"></div>
                <div id="gamesThumb">
                    <span>Capa</span>
                    <input type="text">
                </div>
            </div>
        </div>
        <tiv style="width: 100%; padding: 15px 0; background-color: #292727;">
            <div class="comfirm-Te2Y93" style="float: right; position: relative; right: 10px;">
                <span class="animation-default">Confirmar</span>
            </div>
        </tiv>
    </div>
    `);
    $('.comfirm-Te2Y93').on("click", comfirm_Te2Y93);

    input = document.getElementById('game_exe');
    input.addEventListener('change', updateImageDisplay);
    $('.expo-game-fT46of>.is-overlay').css('display', 'block');

    console.log(`[Game Add] Adicionando game`);

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('opacity', '0.85');
        $('.expo-game-fT46of>.gameview-add').css('width', '600px');
        $('.expo-game-fT46of>.gameview-add').css('z-index', '10');
    }, 1);
}

eventEmitter.on('Game_Module_Open', () => {
    $('.game-add-F58dY4').on("click", GameAddF58dY4);
    $('#over-gi592n').on("click", overgi592n);
});

function editgame() {
    $('.expo-game-fT46of').append(`
    <div class="gameview-edit animation-default" style="width: 0px; z-index: -1;">
        <div class="gameview-Te2Y93">
            <div>
                <span><span class="fa fa-edit"></span> Editar games</span>
                <div id="gamesEditText">
                    <span>Nome</span>
                    <input type="text">
                </div>
                <div id="gamesEditDesc">
                    <span>Descrição</span>
                    <input type="text">
                </div>
            </div>
        </div>
        <tiv style="width: 100%; padding: 10px 0; background-color: #292727;">
            <div class="delete-dF4tu68" style="float: left; position: relative; left: 10px;">
                <span class="animation-default">Deletar?</span>
            </div>
            <div class="comfirm-ht95e2" style="float: right; position: relative; right: 10px;">
                <span class="animation-default">Confirmar</span>
            </div>
        </tiv>
    </div>
    `);
    $('.delete-dF4tu68').on("click", delete_dF4tu68);
    $('.comfirm-ht95e2').on("click", comfirm_ht95e2);

    for (let i = 0; i < gamesData.games.length; i++) {
        if ($(this).parent().parent().children('.game-add-footer').children('.footer-title').text() == gamesData.games[i].name) {
            indexedit = i;
            console.log(`[Game Edit] Editando: ${gamesData.games[i].name}`);
            $('#gamesEditText').children('input').val(gamesData.games[i].name);
            $('#gamesEditDesc').children('input').val(gamesData.games[i].description);
        }
    }

    $('.expo-game-fT46of>.is-overlay').css('display', 'block');

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('opacity', '0.85');
        $('.expo-game-fT46of>.gameview-edit').css('width', '600px');
        $('.expo-game-fT46of>.gameview-edit').css('z-index', '10');
    }, 1);
}

function playAny(e) {
    switch (event.which) {
        case 1:
            var pathg = $(this).attr('path') ? $(this).attr('path').split('\\') : $(this).parent().parent().attr('path').split('\\');
            var index = $(this).attr('index') ? $(this).attr('index') : $(this).parent().parent().attr('index');
            var Rpath = "";

            //bug fix
            if ($('.play_easy').length != 0) {
                $('.play_easy').remove();
            }

            for (var i = 0; i < pathg.length - 1; i++) {
                Rpath += `${pathg[i]}\\`;
            }
            process.chdir(Rpath);

            IAPI.init({
                state: 'Games',
                details: gamesData.games[index].name,
                active: true
            });
            electron.remote.getCurrentWindow().setTitle(`Games - ${gamesData.games[index].name}`);

            console.log(`[play] executando: ${Rpath}${pathg[pathg.length-1]}`);
            child.execFile(`./${pathg[pathg.length-1]}`, function(error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
                console.log('exec stdout: ' + stdout);
                console.log('exec stderr: ' + stderr);
                IAPI.init({
                    state: 'Games',
                    active: false
                });
            });
            console.log('Left Mouse button pressed.');
            break;
        default:
            console.log('You have a strange Mouse!');
    }
}

function updateListGames() {
    if ($('.game-item-T5e87d') != undefined) {
        $('.game-item-T5e87d').remove();
    }
    for (let i = 0; i < gamesData.games.length; i++) {
        $('.games-H5wY75').append(`
        <div class="game-item-T5e87d" path="${gamesData.games[i].path}" index="${i}">
            <img src="base/games/Icons/${gamesData.games[i].thumb}" alt=""></img>
            <!--<div class="game-add-footer animation-default">
                <span class="footer-title" title="${gamesData.games[i].name}">${markdown.toHTML(gamesData.games[i].name)}</span>
                <span style='opacity: 0; display: none;' class="footer-descripition animation-default" title="${gamesData.games[i].description}">${markdown.toHTML(gamesData.games[i].description)}</span>
            </div>
            <div class="game-buttons-fThe32 animation-default">
                <div class="game-options-Ao1t71">
                    <svg height="100%" version="1.1" viewBox="0 3 32 30" width="100%">
                        <use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-33"></use>
                        <path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-33"></path>
                    </svg>
                </div>
                <div class="game-edit-Dg4jk0">
                    <svg class="colorSelectedText-3YhFC6 icon-3tVJnl" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 16 16">
                        <path d="M7.15546853,6.47630098e-17 L5.84453147,6.47630098e-17 C5.36185778,-6.47630098e-17 4.97057344,0.391750844 4.97057344,0.875 L4.97057344,1.9775 C4.20662236,2.21136254 3.50613953,2.61688993 2.92259845,3.163125 L1.96707099,2.61041667 C1.76621819,2.49425295 1.52747992,2.46279536 1.30344655,2.52297353 C1.07941319,2.58315171 0.88846383,2.73002878 0.77266168,2.93125 L0.117193154,4.06875 C0.00116776262,4.26984227 -0.0302523619,4.50886517 0.0298541504,4.73316564 C0.0899606628,4.9574661 0.236662834,5.14864312 0.437644433,5.26458333 L1.39171529,5.81583333 C1.21064614,6.59536289 1.21064614,7.40609544 1.39171529,8.185625 L0.437644433,8.736875 C0.236662834,8.85281521 0.0899606628,9.04399223 0.0298541504,9.2682927 C-0.0302523619,9.49259316 0.00116776262,9.73161606 0.117193154,9.93270833 L0.77266168,11.06875 C0.88846383,11.2699712 1.07941319,11.4168483 1.30344655,11.4770265 C1.52747992,11.5372046 1.76621819,11.5057471 1.96707099,11.3895833 L2.92259845,10.836875 C3.50613953,11.3831101 4.20662236,11.7886375 4.97057344,12.0225 L4.97057344,13.125 C4.97057344,13.6082492 5.36185778,14 5.84453147,14 L7.15546853,14 C7.63814222,14 8.02942656,13.6082492 8.02942656,13.125 L8.02942656,12.0225 C8.79337764,11.7886375 9.49386047,11.3831101 10.0774016,10.836875 L11.032929,11.3895833 C11.2337818,11.5057471 11.4725201,11.5372046 11.6965534,11.4770265 C11.9205868,11.4168483 12.1115362,11.2699712 12.2273383,11.06875 L12.8828068,9.93270833 C12.9988322,9.73161606 13.0302524,9.49259316 12.9701458,9.2682927 C12.9100393,9.04399223 12.7633372,8.85281521 12.5623556,8.736875 L11.6082847,8.185625 C11.7893539,7.40609544 11.7893539,6.59536289 11.6082847,5.81583333 L12.5623556,5.26458333 C12.7633372,5.14864312 12.9100393,4.9574661 12.9701458,4.73316564 C13.0302524,4.50886517 12.9988322,4.26984227 12.8828068,4.06875 L12.2273383,2.93270833 C12.1115362,2.73148712 11.9205868,2.58461004 11.6965534,2.52443187 C11.4725201,2.46425369 11.2337818,2.49571128 11.032929,2.611875 L10.0774016,3.16458333 C9.49400565,2.61782234 8.79351153,2.2117896 8.02942656,1.9775 L8.02942656,0.875 C8.02942656,0.391750844 7.63814222,6.47630098e-17 7.15546853,6.47630098e-17 Z M8.5,7 C8.5,8.1045695 7.6045695,9 6.5,9 C5.3954305,9 4.5,8.1045695 4.5,7 C4.5,5.8954305 5.3954305,5 6.5,5 C7.03043298,5 7.53914081,5.21071368 7.91421356,5.58578644 C8.28928632,5.96085919 8.5,6.46956702 8.5,7 Z" transform="translate(2.5 2)"></path>
                    </svg>
                </div>
            </div>-->
        </div>
        `);
    }

    // $('.game-edit-Dg4jk0').on("click", editgame);
    // $('.game-options-Ao1t71').on('mousedown', playAny);
}

async function comfirm_Te2Y93() {
    if (sep_data.name == "" || sep_data.name == null) {
        return;
    }

    sep_data.name = $('#gamesText').children('input').val();
    sep_data.description = $('#gamesDesc').children('input').val();
    sep_data.thumb = $('#gamesThumb').children('input').val();

    gamesData.games.push(sep_data);
    await gamesData.update({ "games": gamesData.games });

    await refreshDB();

    updateListGames();
    sep_data = {};

    $('.gameview-add').remove();
    $('.gameview-edit').remove();

    console.log(`[Game Add] Adicionando: ${$('#gamesText').children('input').val()}`);

    $('.expo-game-fT46of>.is-overlay').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-add').css('width', '0px');
    $('.expo-game-fT46of>.gameview-add').css('z-index', '-1');

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('display', 'none');
    }, 600);
}

async function comfirm_ht95e2() {
    gamesData.games[indexedit].name = $('#gamesEditText').children('input').val();
    gamesData.games[indexedit].description = $('#gamesEditDesc').children('input').val();

    $('.gameview-add').remove();
    $('.gameview-edit').remove();

    gamesData.games.push(sep_data);
    await gamesData.update({ "games": gamesData.games });

    await refreshDB();

    updateListGames();

    console.log(`[Game Edit] Editado: ${gamesData.games[indexedit].name}`);

    $('.expo-game-fT46of>.is-overlay').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-edit').css('width', '0px');
    $('.expo-game-fT46of>.gameview-edit').css('z-index', '-1');

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('display', 'none');
    }, 600);
}

async function delete_dF4tu68() {
    console.log(`[Game Delete] Deletando: ${data.games[indexedit].name}`);

    gamesData.games.splice(indexedit, 1);

    gamesData.games.push(sep_data);
    await gamesData.update({ "games": gamesData.games });

    await refreshDB();

    updateListGames();

    $('.gameview-add').remove();
    $('.gameview-edit').remove();

    $('.expo-game-fT46of>.is-overlay').css('opacity', '0');
    $('.expo-game-fT46of>.gameview-edit').css('width', '0px');
    $('.expo-game-fT46of>.gameview-edit').css('z-index', '-1');

    setTimeout(() => {
        $('.expo-game-fT46of>.is-overlay').css('display', 'none');
    }, 600);
}