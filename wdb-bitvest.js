const _0x4f5336 = _0x315b;
(function (_0x56d963, _0x25521e) {
    const _0x5f0102 = _0x315b, _0x671066 = _0x56d963();
    while (!![]) {
        try {
            const _0x508c6f = parseInt(_0x5f0102(0x26f)) / 0x1 + -parseInt(_0x5f0102(0x439)) / 0x2 + parseInt(_0x5f0102(0x1ee)) / 0x3 + parseInt(_0x5f0102(0x303)) / 0x4 + -parseInt(_0x5f0102(0x184)) / 0x5 + parseInt(_0x5f0102(0x312)) / 0x6 + -parseInt(_0x5f0102(0x3c0)) / 0x7;
            if (_0x508c6f === _0x25521e)
                break;
            else
                _0x671066['push'](_0x671066['shift']());
        } catch (_0x1c2356) {
            _0x671066['push'](_0x671066['shift']());
        }
    }
}(_0xb7fa, 0x9604b), darkMode = ![], mode = _0x4f5336(0x36d), game = 'dice', run = ![], win = ![], sOW = ![], startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x4f5336(0x266), bethigh = !![], target = 0x0, result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
    'amount': 0x0,
    'Amount': 0x0,
    'chance': 0x0,
    'Chance': 0x0,
    'roll': 0x0,
    'Roll': 0x0,
    'profit': 0x0,
    'Profit': 0x0,
    'target': 0x0,
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSpeed = null, wdbTimer = null, wdbSound = new Object(new Audio(WDB_API + '/' + WDB_MODE + '/media/ching.mp3')), wdbUI = _0x4f5336(0x1db) + CASINO_GAME + '\x20|\x20' + WDB_MODE + _0x4f5336(0x397) + location['hostname'][_0x4f5336(0x235)](_0x4f5336(0x449), '') + _0x4f5336(0x186));
function changeMaxRows() {
    const _0x45f7e5 = _0x4f5336, _0x48ae33 = {
            'xeTlN': function (_0x50a078, _0x320277) {
                return _0x50a078(_0x320277);
            },
            'edphJ': function (_0x576f1) {
                return _0x576f1();
            },
            'vHTmk': function (_0x5c7745) {
                return _0x5c7745();
            }
        };
    maxRows = _0x48ae33['xeTlN'](Number, document['getElementById']('wdbMaxRows')[_0x45f7e5(0x276)]), _0x48ae33[_0x45f7e5(0x25b)](resetchart), resethistory(), _0x48ae33[_0x45f7e5(0x420)](resetlog);
}
function toggleDarkMode() {
    const _0x1cb402 = _0x4f5336, _0x113231 = {
            'CyApX': _0x1cb402(0x33a),
            'CaBWr': _0x1cb402(0x263),
            'MEnvx': _0x1cb402(0x1c7),
            'yjlFq': _0x1cb402(0x3d3),
            'bxTSy': _0x1cb402(0x1e8),
            'xuDBk': _0x1cb402(0x2b1),
            'NqAFf': _0x1cb402(0x42d),
            'EfaXv': _0x1cb402(0x459),
            'QZuKz': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'RHRBX': _0x1cb402(0x393),
            'RFXLf': _0x1cb402(0x1d6),
            'vYInz': '#000',
            'CpeVF': _0x1cb402(0x3e1),
            'omlzU': 'light',
            'DbatQ': function (_0x1f4a9e) {
                return _0x1f4a9e();
            }
        };
    darkMode = !darkMode;
    if (darkMode)
        document['getElementById']('wdb')['style'][_0x1cb402(0x2ad)] = _0x1cb402(0x42d), document['getElementById'](_0x1cb402(0x3e1))[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x113231['CyApX'], chart[_0x1cb402(0x31b)][_0x1cb402(0x1c7)] = _0x113231[_0x1cb402(0x1bd)], chart['render'](), luaEditor[_0x1cb402(0x225)](_0x113231['MEnvx'], _0x1cb402(0x3d3)), jsEditor[_0x1cb402(0x225)](_0x113231[_0x1cb402(0x3c1)], _0x113231[_0x1cb402(0x3c3)]), document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x377)])[_0x1cb402(0x409)][_0x1cb402(0x2ad)] = _0x1cb402(0x42d), document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x377)])['style'][_0x1cb402(0x40d)] = _0x113231['CyApX'], document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x265)])['style']['backgroundColor'] = _0x113231[_0x1cb402(0x2fd)], document[_0x1cb402(0x3b6)](_0x113231['xuDBk'])[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x1cb402(0x33a), document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x3d5)])[_0x1cb402(0x409)][_0x1cb402(0x2ad)] = _0x113231[_0x1cb402(0x2fd)], document['querySelector'](_0x113231[_0x1cb402(0x3d5)])[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x113231[_0x1cb402(0x443)], document[_0x1cb402(0x37c)](_0x113231[_0x1cb402(0x247)])[_0x1cb402(0x1b1)](_0x5e8d92 => _0x5e8d92['style'][_0x1cb402(0x40d)] = _0x1cb402(0x33a));
    else {
        const _0x4dab87 = _0x113231[_0x1cb402(0x1b2)][_0x1cb402(0x1c4)]('|');
        let _0x29b909 = 0x0;
        while (!![]) {
            switch (_0x4dab87[_0x29b909++]) {
            case '0':
                chart[_0x1cb402(0x1b3)]();
                continue;
            case '1':
                document[_0x1cb402(0x37c)](_0x113231[_0x1cb402(0x247)])[_0x1cb402(0x1b1)](_0x1c4e6d => _0x1c4e6d[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x1cb402(0x211));
                continue;
            case '2':
                jsEditor[_0x1cb402(0x225)](_0x113231[_0x1cb402(0x3c1)], _0x113231[_0x1cb402(0x22e)]);
                continue;
            case '3':
                document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x265)])['style'][_0x1cb402(0x40d)] = _0x113231[_0x1cb402(0x1de)];
                continue;
            case '4':
                document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x3d5)])[_0x1cb402(0x409)]['backgroundColor'] = _0x113231[_0x1cb402(0x443)];
                continue;
            case '5':
                document[_0x1cb402(0x373)](_0x113231['CpeVF'])[_0x1cb402(0x409)]['color'] = _0x1cb402(0x211);
                continue;
            case '6':
                document['querySelector']('#wdbWrapTips\x20pre')[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x113231['vYInz'];
                continue;
            case '7':
                document[_0x1cb402(0x3b6)](_0x113231['bxTSy'])[_0x1cb402(0x409)][_0x1cb402(0x40d)] = _0x113231[_0x1cb402(0x1de)];
                continue;
            case '8':
                document[_0x1cb402(0x373)](_0x113231[_0x1cb402(0x205)])[_0x1cb402(0x409)]['backgroundColor'] = _0x113231[_0x1cb402(0x443)];
                continue;
            case '9':
                luaEditor[_0x1cb402(0x225)](_0x1cb402(0x1c7), _0x113231[_0x1cb402(0x22e)]);
                continue;
            case '10':
                document[_0x1cb402(0x3b6)](_0x113231[_0x1cb402(0x265)])['style'][_0x1cb402(0x2ad)] = _0x113231[_0x1cb402(0x443)];
                continue;
            case '11':
                chart[_0x1cb402(0x31b)][_0x1cb402(0x1c7)] = _0x113231[_0x1cb402(0x2d9)];
                continue;
            case '12':
                document[_0x1cb402(0x3b6)](_0x1cb402(0x1e8))[_0x1cb402(0x409)][_0x1cb402(0x2ad)] = _0x1cb402(0x33a);
                continue;
            }
            break;
        }
    }
    _0x113231[_0x1cb402(0x42e)](updateStats);
}
function toggleMinimalBot(_0x1fc5e1) {
    const _0x14696f = _0x4f5336, _0x394b1f = {
            'VHEou': function (_0x3590b6, _0x5b760b) {
                return _0x3590b6 === _0x5b760b;
            },
            'RtLRi': _0x14696f(0x1f0),
            'Cekgq': _0x14696f(0x2f3),
            'lSCpS': _0x14696f(0x450),
            'PrdNc': _0x14696f(0x41c),
            'ffzDE': 'wdb',
            'kyvIg': _0x14696f(0x29b),
            'uEvAM': _0x14696f(0x29c),
            'LEjcs': '2|0|4|3|5|1',
            'VlqfC': _0x14696f(0x2e2),
            'IOZXS': _0x14696f(0x20d),
            'vRzYV': '1000px'
        };
    if (_0x394b1f['VHEou'](_0x1fc5e1[_0x14696f(0x2ea)], '▼')) {
        const _0x301c13 = _0x394b1f[_0x14696f(0x40f)][_0x14696f(0x1c4)]('|');
        let _0xf88370 = 0x0;
        while (!![]) {
            switch (_0x301c13[_0xf88370++]) {
            case '0':
                document['getElementById'](_0x394b1f['Cekgq'])['style']['display'] = _0x394b1f[_0x14696f(0x3f1)];
                continue;
            case '1':
                document[_0x14696f(0x373)](_0x394b1f[_0x14696f(0x286)])[_0x14696f(0x409)]['display'] = _0x14696f(0x450);
                continue;
            case '2':
                document[_0x14696f(0x373)](_0x394b1f['ffzDE'])['style'][_0x14696f(0x425)] = _0x394b1f[_0x14696f(0x1e4)];
                continue;
            case '3':
                document[_0x14696f(0x373)](_0x394b1f['ffzDE'])[_0x14696f(0x409)][_0x14696f(0x456)] = _0x14696f(0x1a0);
                continue;
            case '4':
                _0x1fc5e1[_0x14696f(0x2ea)] = '▲';
                continue;
            case '5':
                document['getElementById'](_0x394b1f['ffzDE'])['style']['width'] = _0x394b1f[_0x14696f(0x3e4)];
                continue;
            case '6':
                document[_0x14696f(0x373)](_0x14696f(0x3e1))[_0x14696f(0x409)][_0x14696f(0x35c)] = _0x14696f(0x3b9);
                continue;
            }
            break;
        }
    } else {
        const _0x248765 = _0x394b1f['LEjcs'][_0x14696f(0x1c4)]('|');
        let _0x29fe6f = 0x0;
        while (!![]) {
            switch (_0x248765[_0x29fe6f++]) {
            case '0':
                document[_0x14696f(0x373)](_0x394b1f[_0x14696f(0x2c3)])['style'][_0x14696f(0x21b)] = _0x394b1f['VlqfC'];
                continue;
            case '1':
                _0x1fc5e1[_0x14696f(0x2ea)] = '▼';
                continue;
            case '2':
                document[_0x14696f(0x373)](_0x394b1f['PrdNc'])[_0x14696f(0x409)]['display'] = _0x394b1f[_0x14696f(0x2d6)];
                continue;
            case '3':
                document[_0x14696f(0x373)](_0x394b1f[_0x14696f(0x399)])['style']['top'] = _0x394b1f[_0x14696f(0x311)];
                continue;
            case '4':
                document[_0x14696f(0x373)](_0x14696f(0x3e1))[_0x14696f(0x409)][_0x14696f(0x243)] = _0x394b1f[_0x14696f(0x334)];
                continue;
            case '5':
                document[_0x14696f(0x373)](_0x394b1f[_0x14696f(0x399)])[_0x14696f(0x409)][_0x14696f(0x35c)] = _0x394b1f[_0x14696f(0x311)];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x283bfc) {
    const _0x17f27f = _0x4f5336, _0x130cd2 = {
            'nUOAH': function (_0x24b17a, _0x1daf0d) {
                return _0x24b17a === _0x1daf0d;
            },
            'VNMuY': _0x17f27f(0x450),
            'lDWXw': _0x17f27f(0x328),
            'udnUF': _0x17f27f(0x37e)
        };
    _0x130cd2[_0x17f27f(0x319)](_0x283bfc['innerText'], '▲') ? (document['getElementById'](_0x17f27f(0x328))[_0x17f27f(0x409)]['display'] = _0x130cd2['VNMuY'], _0x283bfc[_0x17f27f(0x2ea)] = '▼') : (document['getElementById'](_0x130cd2[_0x17f27f(0x217)])['style'][_0x17f27f(0x21b)] = _0x130cd2[_0x17f27f(0x1a9)], _0x283bfc[_0x17f27f(0x2ea)] = '▲');
}
function _0xb7fa() {
    const _0x5ca0af = [
        'VlqfC',
        'createObjectURL',
        'CgjDY',
        'omlzU',
        'eaAje',
        'wdbMinProfit',
        'advancedChanceOnLoseCheck',
        '190px',
        'fAuVf',
        '#wdbHistory',
        'xeSsB',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'block',
        'FWmdg',
        'KDBPT',
        'URL',
        'height',
        'PYVgv',
        'ZxZDz',
        'Stop\x20on\x20balance\x20',
        'innerText',
        'wdbToggleShowStats',
        'dIVQJ',
        'Zpfkk',
        'showhistory',
        '.js',
        'Rpien',
        'mNYLY',
        'IMpGv',
        'wdbFooter',
        'fromTextArea',
        'red',
        'XuXQE',
        'onmouseup',
        'toUTCString',
        'dice',
        '3|6|0|7|9|8|1|4|2|5',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'yAemI',
        'NqAFf',
        'wdbToggleLiveLog',
        '\x0a\x20\x20\x20\x20win=',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'stopOnBalanceCheck',
        'bytvW',
        '1436692ijzhVK',
        'JoCYD',
        'TyJDy',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'UzvYR',
        'FHPCy',
        'mdrdm',
        'dmlZV',
        'advancedStopRollNumber',
        'LNFko',
        'MIqnq',
        'alphabet',
        'eHzGf',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'IOZXS',
        '2267856oBodvM',
        'Nonce',
        'kupnA',
        'DoKxa',
        'pWcXU',
        'mWuTo',
        'wdbWrapLicenseBox',
        'nUOAH',
        'wdbShowMode',
        'options',
        'ykCns',
        'wdbMenuMode',
        'event',
        'stopchart',
        'data',
        'advancedChance',
        'vJLWG',
        'UvMCj',
        'ZgfeG',
        'load',
        'DRtYt',
        'gfemO',
        'wdbWrapControl',
        'TzNoG',
        'SarbG',
        'wdbChart',
        'etVwo',
        'resethistory',
        'eIKfD',
        'cUKoD',
        'Plghf',
        'ARJNM',
        'wdbResumeButton',
        'DIjqm',
        'vRzYV',
        'advancedChanceOnLose',
        'bnPUg',
        'wdbShowVariables',
        'wdbWrapHistory',
        'GpZVQ',
        '#fff',
        'wdbMinBalance',
        'stop',
        'rnNQv',
        'CbqNX',
        'XACRz',
        'saAOu',
        'LOGGA',
        '6|3|0|7|2|8|1|4|9|5',
        'lineColor',
        'nonce',
        'return\x20currency',
        'advancedStopAfterStreak',
        'atzNr',
        'setTime',
        'smQVu',
        'change',
        'white',
        'currency=\x22',
        'floor',
        'MaUxe',
        'wdbWagered',
        'iqbOa',
        'XhRwC',
        'wdbRunningScript',
        'NNOcL',
        '4|0|5|3|1|2',
        'VDxMm',
        'oFQeO',
        'advancedBetHighOnWinCheck',
        'HuySx',
        'YTLWy',
        'tiKxG',
        'mXXJb',
        'left',
        'return\x20nextbet',
        'show',
        'Chance',
        'taaBV',
        'removeChild',
        '380px',
        '2|4|8|0|3|9|1|6|5|7',
        'advancedBetHighOnLose',
        'sUddr',
        'TPDcV',
        'qECjh',
        'ortci',
        'yzNzQ',
        'hours',
        'ULVVL',
        'nmqQD',
        'lua',
        'bMWmt',
        '.lua',
        'text/plain;\x20charset=utf-8',
        'Infinity',
        'checked',
        'getElementById',
        'nAqvT',
        'getValue',
        'GDorU',
        'bxTSy',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'qAXbJ',
        'oTBTQ',
        'history',
        'querySelectorAll',
        'wdbTime',
        'flex',
        'insertBefore',
        'puVww',
        'wdbMaxBalance',
        'hucAr',
        '0:0:0:0',
        'OLaaT',
        'hide',
        'nEwlX',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'FaDqI',
        'advancedBetHighOnWin',
        'TWXSJ',
        'RsSwU',
        'NAZLX',
        '7|4|6|0|1|5|2|3',
        'tFdEH',
        'Stop\x20on\x20roll\x20number\x20',
        'advancedMultiOnLose',
        'bkCHi',
        '\x0a\x20\x20\x20\x20wagered=',
        '8|5|11|0|9|2|12|7|10|3|4|6|1',
        'CtHZg',
        'XTXce',
        'XzvLh',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a--\x20log(casino)\x0a--\x20plinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a--\x20plinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a//\x20log(casino)\x0a//\x20plinkoRow=8\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a//\x20plinkoRisk=\x27low\x27\x20//\x20low,\x20medium,\x20high,\x20extreme;\x20depend\x20dice\x20site\x20and\x20only\x20for\x20plinko\x20game\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>chance\x20:\x20%\x20win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20:\x20Plinko\x20rows,\x20only\x20for\x20plinko\x20game,\x20some\x20site\x20not\x20have\x0aplinkoRisk\x20:\x20risk\x20level\x20for\x20plinko\x20game\x20(low,\x20medium,\x20high)\x0abethigh\x20:\x20Bet\x20side\x20in\x20next\x20game\x20(true\x20is\x20over/above,\x20false\x20is\x20under/below)\x0anextbet\x20:\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20:\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20:\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20:\x20%\x20roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20:\x20Target\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.result\x20:\x20Result\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.profit,\x20currentprofit\x20:\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20:\x20Current\x20seed\x20nonce\x0alastBet.id\x20:\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20:\x20Currency\x20to\x20play\x20(some\x20site\x20not\x20work)\x0abalance\x20:\x20Current\x20balance\x0aminbalance\x20:\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20:\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20:\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20:\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20:\x20Session\x20profit\x0awagered\x20:\x20Session\x20wagered\x0awin\x20:\x20State\x20in\x20previous\x20game\x20(true\x20is\x20win,\x20false\x20is\x20lose)\x0abets\x20:\x20Bet\x20count\x0awins\x20:\x20Win\x20count\x0awinstreak\x20\x20:\x20Winning\x20streak\x0alosses\x20:\x20Lose\x20count\x0alosestreak\x20:\x20Losing\x20streak\x0acurrentstreak\x20:\x20Current\x20streak\x20(smaller\x200\x20is\x20losing\x20streak\x20and\x20vice\x20versa)\x0apartialprofit\x20:\x20Partial\x20profit\x20(same\x20in\x20other\x20dicebot)\x0ascriptname\x20:\x20Name\x20of\x20script\x20u\x20use\x0acasino\x20:\x20Name\x20of\x20casino\x20(example:\x20500.casino\x20=\x20500;\x20bch.games\x20=\x20bch)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a<pre>dobet()\x20:\x20Main\x20function\x20for\x20betting\x0astop()\x20:\x20Stop\x20betting\x0aresume()\x20:\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20:\x20Reset\x20fairness\x0aresetstats()\x20:\x20Reset\x20statistics\x0aresetchart()\x20:\x20Reset\x20chart\x0aresethistory()\x20:\x20Reset\x20history\x0aresetlog()\x20:\x20Reset\x20log\x0aresetall()\x20:\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20:\x20Check\x20actual\x20balance\x0aching()\x20:\x20Alert\x20with\x20sound\x0alog(message)\x20:\x20Write\x20a\x20message\x20in\x20Log\x20area\x0asleep(sec)\x20:\x20Pause\x20betting\x20system\x20with\x20sec\x0aresetpartialprofit()\x20:\x20Reset\x20partialprofit</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Click\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aHold\x20top\x20or\x20bottom\x20area\x20to\x20move\x20the\x20bot\x20around</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20bot.mhqb365.com\x20|\x20',
        'ewLUb',
        'ffzDE',
        'plinko',
        'wdbStartButton',
        '$1=$1+$2\x20',
        'now',
        'return\x20chance',
        'xxnIP',
        'UdttT',
        '\x20bet',
        'OXBbk',
        'TrRDo',
        '/lib/ms.js',
        'Stop\x20on\x20current\x20streak\x20',
        'onmousemove',
        'FTDFj',
        'wdbShowLog',
        'FNWYa',
        'STWGT',
        '4|7|2|5|9|6|3|8|1|0',
        'thVyQ',
        'wdbWrapMode',
        'gnGau',
        'bOfPj',
        '\x20lose',
        'expires=',
        'stophistory',
        '#wdbSaveScriptButton',
        'Chart',
        'pause',
        'querySelector',
        ';path=/',
        'div',
        '0vh',
        'abcdefghijklmnopqrstuvwxyz',
        'wdbBets',
        'aZNTo',
        'advancedBetHighOnProfit',
        'hostname',
        'mvLkw',
        '10599582zdjXUZ',
        'MEnvx',
        'wdbShowFunctions',
        'yjlFq',
        'TuqCv',
        'koZAC',
        ',\x0a\x20\x20\x20\x20\x20\x20result=',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'ubsbs',
        'Target',
        'gmNnN',
        'IurtW',
        'FEioc',
        'DqlHp',
        'map',
        'OduRt',
        'bWqed',
        'start',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'darcula',
        'script',
        'EfaXv',
        'olmbf',
        'showstats',
        'GiTiZ',
        'return\x20plinkoRisk',
        'suKqE',
        'wdbProfit',
        'light1',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'XuLQn',
        'vyufZ',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'wdb',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'WtLsM',
        'uEvAM',
        'wdbMaxProfit',
        'GMIVh',
        'SSHeY',
        'vGwMG',
        'shift',
        'advancedStopOnWinsCheck',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'OFccz',
        'TEucx',
        'aWQDV',
        'qVNYZ',
        'children',
        'lSCpS',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'YRGkS',
        'htjoJ',
        'unRRq',
        'pKpqJ',
        'ulESd',
        'wdbHighWinStreak',
        'Wildh',
        'faXfT',
        'amount',
        'bhERa',
        'sFpgA',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'random',
        'ztabc',
        'wdbScriptBoxLUA',
        'DSLlM',
        'grFsj',
        'dPTOq',
        'casino=\x22',
        'Txysf',
        '4|8|7|1|10|5|9|0|3|6|2',
        'ceVlA',
        'style',
        'hidechart',
        'wdbOpenLUAScript',
        'wdbScriptBoxJS',
        'color',
        'then',
        'RtLRi',
        'toUpperCase',
        'XjOvw',
        'QsyUL',
        'Stop\x20on\x20profit\x20',
        'stoplog',
        'Iiacq',
        'numeric',
        'QqCRN',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=\x20',
        'Amount',
        'secondsUpdated',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'wdbMain',
        'JMVQI',
        'roll',
        'jrgGw',
        'vHTmk',
        'AnlqL',
        'EDnCl',
        'ZOPhM',
        'OPIoY',
        'position',
        'YxhAI',
        'charAt',
        'htNfm',
        'huHWk',
        'not\x20',
        'myAEB',
        'Hmhgu',
        '#2a2a2a',
        'DbatQ',
        'Betting\x20',
        'aZjYK',
        'length',
        'hidestats',
        'yeZFN',
        'CGKLZ',
        'HYOTV',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'DiceScript',
        'wdbHighLose',
        '460232ipjugm',
        'BYEij',
        'lastChild',
        'PUdxu',
        'wdbPercentProfit',
        'wdbWrapPercentProfit',
        'thxJx',
        'KjETn',
        'stats',
        'qoLkC',
        'CyApX',
        'toFixed',
        'IUDeq',
        'IISmu',
        'RuucX',
        'DNmfg',
        'www.',
        'advancedChanceOnWinCheck',
        'play',
        'kGiWF',
        'DbqFk',
        'function\x20checkbalance()\x0a\x20js.global:checkbalance()\x0a\x20end',
        'wdbWrap',
        'none',
        'click',
        'resetstats',
        'head',
        'rgtZW',
        'advancedChanceOnLoseBets',
        'top',
        'CfjEM',
        'EPSILON',
        '#wdbWrapTips\x20pre',
        'UwUhC',
        'jQITt',
        'wdbJSMode',
        'rAekB',
        'functions',
        'FVMWo',
        'PCCSW',
        'advancedMultiOnLoseCheck',
        'cAiVj',
        'rKjdm',
        'vYWzr',
        '#advancedBetHigh',
        'resetchart',
        '270920SyjyCs',
        'push',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Speed:\x20<span\x20id=\x22wdbSpeed\x22>0</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'wdbWrapTips',
        'CspBX',
        'HPfoM',
        'VXkUl',
        'advancedBetHighOnLoseCheck',
        'wdbHighBet',
        'ijrff',
        'qVLMJ',
        'scriptName',
        '\x0a\x20\x20\x20\x20nextbet=',
        'KbDLV',
        'target',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'DILlm',
        'zNNxW',
        'XjhOr',
        'MhEbb',
        'WFYIV',
        'RFxYO',
        'eiJda',
        'high',
        'wIapl',
        'NFids',
        'rFQED',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        '95vh',
        'sJPjW',
        'cJYul',
        'stopOnBalance',
        'Connected',
        'JXbcX',
        'wdbWrapLog',
        'TduQK',
        'okpkv',
        'udnUF',
        'wdbLUAMode',
        'advancedBetHighOnBet',
        'wdbStopOnWinButton',
        'return\x20bethigh',
        'isgdp',
        'ANtlt',
        'UqkIc',
        'forEach',
        'RHRBX',
        'render',
        'updateHistory\x20ok',
        'response',
        'mWkWO',
        'substring',
        'qellY',
        'setValue',
        'xCWzw',
        'lhMGD',
        '7|15|13|11|5|8|2|3|9|0|6|10|1|12|4|14',
        'CaBWr',
        'kEDqE',
        'preventDefault',
        'lUmwV',
        'YEWNV',
        'wdbStats',
        'advancedStopAfterStreakCheck',
        'split',
        'mvXjj',
        'Tvsyq',
        'theme',
        'addEventListener',
        'bamjF',
        'tgWpx',
        'zfNQI',
        'rLkhP',
        'BlzHI',
        'wdbHeader',
        'prepend',
        'EsVjp',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=\x20',
        'clientX',
        'sNNWm',
        'message',
        'UGBnW',
        'default',
        'wdbToggleLiveChart',
        'dLLnW',
        'offsetTop',
        'BeNRM',
        '<style>\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20\x22Courier\x20New\x22,\x20monospace;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20padding:\x205px;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a#wdbHeader,\x0a#wdbFooter\x20{\x0a\x20\x20cursor:\x20move;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffc107;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-image:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-position:\x20right\x20center;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20|\x20',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'ovXtm',
        'vYInz',
        'qbAuC',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'resetseed',
        'DPpTl',
        'ZyPUa',
        'kyvIg',
        'return\x20plinkoRow',
        'UzGuA',
        'tmmXQ',
        '#wdbWrapVariables\x20pre',
        'wdbCurrentStreak',
        'WNeTw',
        'advancedMultiOnWinBets',
        'KgQIs',
        'yEJic',
        '2297004rjhSgm',
        'oRCiy',
        '1|0|5|3|6|2|4',
        'srCpo',
        'nSQwP',
        'innerHTML',
        'ybFWA',
        'wdbToggleLiveHistory',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'fHNeM',
        'zGpcb',
        'JYLIz',
        'ciTbw',
        'updateLua\x20done',
        'seconds',
        'nbONi',
        '\x20at\x20',
        'kGZiS',
        'BaKBk',
        'jVCQZ',
        'createElement',
        'SfhBM',
        'startchart',
        'CpeVF',
        'advancedChanceOnWinBets',
        'vwNbB',
        'disabled',
        'TgLhp',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        '5px',
        'WIjdG',
        'ZqKQd',
        '\x0a\x20\x20\x20\x20wins=',
        '#000',
        'pHOHI',
        'oYZWx',
        '<input\x20id=\x22bethigh',
        '7|8|15|17|6|12|10|5|1|13|11|16|2|9|3|14|4|0',
        '1|9|8|7|10|4|13|12|6|5|15|0|11|14|2|16|17|3',
        'lDWXw',
        'startlog',
        '\x0a\x20\x20',
        'dobet()',
        'display',
        'indexOf',
        'khsaK',
        'LaUGu',
        'getTime',
        'Timer',
        'kReTv',
        'SviHq',
        'XHorH',
        'sOdsl',
        'setOption',
        'minutes',
        'OIGJn',
        '\x0a\x20\x20\x20\x20bethigh=',
        '\x20win',
        'noRmM',
        'rEknn',
        '\x0a\x20\x20\x20\x20chance=',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'RFXLf',
        'NjGoc',
        'advancedStopOnLose',
        'oFAdv',
        'clientY',
        'tvCMm',
        'starthistory',
        'replace',
        'profit',
        'AUEyv',
        'iTNtD',
        'TdyzZ',
        '\x20|\x20',
        'azDtO',
        'mmdZn',
        'WAVsc',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'NjOVf',
        'line',
        'dKxMq',
        'cjdCz',
        'width',
        'days',
        'chart',
        'NaN',
        'QZuKz',
        'HFRxM',
        'lLBIl',
        'wAcIV',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'TrEqK',
        'zCORz',
        'cCZgy',
        'IHqKN',
        '0123456789',
        'wdbHighLoseStreak',
        'log',
        'VuApw',
        '\x20to\x20win',
        'reset',
        'getTimeValues',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'chance',
        'wdbMenuCoin',
        'all',
        'edphJ',
        '\x0a\x20\x20\x20\x20bets=',
        'files',
        'XqDiU',
        '#91f190',
        'DOhvP',
        'KFiTD',
        'ZLNeP',
        'dark1',
        'green',
        'xuDBk',
        'low',
        'NGkmg',
        'wWQud',
        'RpyKb',
        '3|0|6|1|4|7|5|2',
        'wdbAdvancedMode',
        'wdbWins',
        'stopOnProfit',
        'ndlEe',
        '910184Fcqsbp',
        'MAEyq',
        'MeLjH',
        'BsuCE',
        'lqGkJ',
        'remove',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'value',
        'rRRQH',
        'LSgNl',
        'download',
        'BcBaQ',
        'getElementsByTagName',
        'wdbPercentWagered',
        'TSipS',
        'eTNBP',
        'EThbX',
        '$1=$1*$2\x20',
        'rYhHG',
        'nxReU',
        'KYLoz',
        'oPPfh',
        'wdbWrapVariables',
        'PrdNc',
        '\x0a\x20\x20\x20\x20winstreak=',
        'fLGXO',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        '</td>',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'heycn',
        'Befdu',
        'qYOGx',
        'Dicif',
        'kvroo',
        'FCaVr',
        'DWDLB',
        'wdbLosses',
        'Profit',
        'xKXVX',
        'VQWre',
        'wcSyF',
        '</option>',
        'toLowerCase',
        'waqEz',
        'fixed',
        '350px',
        '/lib/easytimer.js',
        'zlvFe',
        '$1=$1-$2\x20',
        'ZtmHD',
        'sSZHa',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'XkcUZ',
        'UNQZM',
        'yMJTA',
        'IIpGU',
        'GEqBD',
        'RsCQE',
        'asxLQ',
        'bfxGm',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js',
        'FnZWI',
        'backgroundColor',
        'rows',
        'MpGWg',
        'HHVdx',
        '#wdbWrapFunctions\x20pre',
        'XLslH',
        'wdbWrapFunctions',
        'clear',
        'IWSyW',
        'Result',
        'WRxny',
        '/lib/chart.js',
        'advancedBetHighOnBetCheck',
        'slice',
        'updateChart\x20ok',
        'black',
        'VBYpz',
        'advanced',
        'mode',
        'qsjTH',
        'reWXa',
        'tsQjS',
        'Cekgq',
        'showchart',
        'MrwNW',
        'qKNDc',
        'NUiIZ',
        'cookie',
        'hftFd',
        'DxPdV',
        'result',
        'qPmUq',
        'wdbToggleShowChart',
        'HptZl',
        '#wdbOpenScript',
        'onmousedown',
        'FQwqR',
        'dfgMX',
        'wdbShowTips',
        'QtWTV',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend'
    ];
    _0xb7fa = function () {
        return _0x5ca0af;
    };
    return _0xb7fa();
}
function drawSelectCoin() {
    const _0x210a62 = _0x4f5336, _0x5d84a5 = {
            'muwwi': function (_0x38c163, _0x148da5) {
                return _0x38c163(_0x148da5);
            }
        };
    let _0x1696e8 = '';
    coins[_0x210a62(0x3ce)](_0x30c66c => {
        const _0x8c488f = _0x210a62;
        _0x1696e8 += '<option\x20value=\x22' + _0x30c66c + '\x22>' + _0x30c66c + _0x8c488f(0x298);
    }), document[_0x210a62(0x373)](_0x210a62(0x259))['innerHTML'] = _0x1696e8, currency = _0x5d84a5['muwwi'](String, coin)[_0x210a62(0x299)](), fengari[_0x210a62(0x325)](_0x210a62(0x34c) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x5ca279 = _0x4f5336, _0x225409 = {
            'LBVjg': _0x5ca279(0x38d),
            'oPPfh': function (_0x547470, _0x670afc) {
                return _0x547470 - _0x670afc;
            },
            'cAiVj': function (_0x14322b, _0x2b3e0b) {
                return _0x14322b - _0x2b3e0b;
            },
            'qVNYZ': function (_0xd0fdf1, _0x19e10b) {
                return _0xd0fdf1 + _0x19e10b;
            },
            'smQVu': function (_0x43b5fa, _0x137fae) {
                return _0x43b5fa + _0x137fae;
            },
            'DbqFk': function (_0x2d5bc5, _0x44cdd3) {
                return _0x2d5bc5 + _0x44cdd3;
            },
            'gnGau': _0x5ca279(0x37d),
            'ULVVL': _0x5ca279(0x3b8),
            'GDorU': _0x5ca279(0x44f),
            'BsuCE': _0x5ca279(0x3e1),
            'Tvsyq': _0x5ca279(0x1ce),
            'BcBaQ': _0x5ca279(0x2f3),
            'jQITt': _0x5ca279(0x318),
            'CfjEM': 'wdbWrapInitializing',
            'CGKLZ': _0x5ca279(0x401),
            'cJYul': _0x5ca279(0x1d6),
            'TduQK': _0x5ca279(0x36d),
            'Dicif': _0x5ca279(0x40c),
            'XjOvw': 'javascript',
            'mvLkw': _0x5ca279(0x41a),
            'bhBEI': _0x5ca279(0x179),
            'XqDiU': _0x5ca279(0x26b),
            'Hmhgu': _0x5ca279(0x450),
            'AqjcB': _0x5ca279(0x1a6),
            'aPetV': _0x5ca279(0x285),
            'WRxny': _0x5ca279(0x2b3),
            'tiKxG': _0x5ca279(0x451),
            'WIjdG': 'wdbOpenJSScript',
            'dIVQJ': function (_0x121872) {
                return _0x121872();
            }
        }, _0x20bda1 = document['createElement'](_0x225409[_0x5ca279(0x36b)]);
    _0x20bda1['id'] = _0x225409[_0x5ca279(0x376)], _0x20bda1[_0x5ca279(0x1f3)] = wdbUI, document['body'][_0x5ca279(0x1cf)](_0x20bda1);
    const _0x3e2116 = document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x272)]);
    let _0x1ef880 = 0x0, _0x3d766e = 0x0, _0x2eb7c4 = 0x0, _0x32db11 = 0x0;
    document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x1c6)]) ? document[_0x5ca279(0x373)](_0x5ca279(0x1ce))[_0x5ca279(0x2d0)] = _0x4111d8 : _0x3e2116[_0x5ca279(0x2d0)] = _0x4111d8, document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x27a)]) ? document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x27a)])[_0x5ca279(0x2d0)] = _0x4111d8 : _0x3e2116['onmousedown'] = _0x4111d8;
    function _0x4111d8(_0x4b2aa1) {
        const _0x5153d2 = _0x5ca279;
        _0x4b2aa1 = _0x4b2aa1 || window[_0x5153d2(0x31e)], _0x4b2aa1[_0x5153d2(0x1bf)](), _0x2eb7c4 = _0x4b2aa1[_0x5153d2(0x1d2)], _0x32db11 = _0x4b2aa1[_0x5153d2(0x232)], document[_0x5153d2(0x2f7)] = _0x1eb8f2, document[_0x5153d2(0x3a6)] = _0x57d14d;
    }
    function _0x57d14d(_0x3b408d) {
        const _0x59ec2d = _0x5ca279, _0x2d3efd = _0x225409['LBVjg'][_0x59ec2d(0x1c4)]('|');
        let _0x12f9ec = 0x0;
        while (!![]) {
            switch (_0x2d3efd[_0x12f9ec++]) {
            case '0':
                _0x3d766e = _0x225409[_0x59ec2d(0x284)](_0x32db11, _0x3b408d[_0x59ec2d(0x232)]);
                continue;
            case '1':
                _0x2eb7c4 = _0x3b408d[_0x59ec2d(0x1d2)];
                continue;
            case '2':
                _0x3e2116[_0x59ec2d(0x409)][_0x59ec2d(0x456)] = _0x225409[_0x59ec2d(0x17f)](_0x3e2116[_0x59ec2d(0x1d9)], _0x3d766e) + 'px';
                continue;
            case '3':
                _0x3e2116[_0x59ec2d(0x409)][_0x59ec2d(0x35c)] = _0x225409['qVNYZ'](_0x225409[_0x59ec2d(0x17f)](_0x3e2116['offsetLeft'], _0x1ef880), 'px');
                continue;
            case '4':
                _0x3b408d[_0x59ec2d(0x1bf)]();
                continue;
            case '5':
                _0x32db11 = _0x3b408d['clientY'];
                continue;
            case '6':
                _0x1ef880 = _0x225409[_0x59ec2d(0x284)](_0x2eb7c4, _0x3b408d[_0x59ec2d(0x1d2)]);
                continue;
            case '7':
                _0x3b408d = _0x3b408d || window[_0x59ec2d(0x31e)];
                continue;
            }
            break;
        }
    }
    function _0x1eb8f2() {
        document['onmouseup'] = null, document['onmousemove'] = null;
    }
    if (document[_0x5ca279(0x373)](_0x5ca279(0x318)))
        document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x178)])[_0x5ca279(0x274)]();
    if (document['getElementById'](_0x225409[_0x5ca279(0x457)]))
        document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x457)])[_0x5ca279(0x274)]();
    luaEditor = CodeMirror[_0x5ca279(0x2f4)](document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x434)]), {
        'theme': _0x225409[_0x5ca279(0x1a2)],
        'mode': _0x225409[_0x5ca279(0x1a7)],
        'lineNumbers': !![]
    }), luaEditor['save'](), jsEditor = CodeMirror[_0x5ca279(0x2f4)](document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x28f)]), {
        'theme': _0x225409[_0x5ca279(0x1a2)],
        'mode': _0x225409[_0x5ca279(0x411)],
        'lineNumbers': !![]
    }), jsEditor['save'](), wdbSpeed = new MySpeed(), wdbTimer = new easytimer[(_0x5ca279(0x220))](), wdbTimer[_0x5ca279(0x1c8)](_0x225409[_0x5ca279(0x3bf)], () => {
        const _0x500d1c = _0x5ca279, _0x4ab08e = _0x225409[_0x500d1c(0x3ef)](_0x225409[_0x500d1c(0x349)](_0x225409[_0x500d1c(0x44d)](_0x225409[_0x500d1c(0x3ef)](_0x225409['qVNYZ'](wdbTimer[_0x500d1c(0x256)]()[_0x500d1c(0x244)], ':'), wdbTimer['getTimeValues']()[_0x500d1c(0x36a)]) + ':', wdbTimer[_0x500d1c(0x256)]()[_0x500d1c(0x226)]), ':'), wdbTimer[_0x500d1c(0x256)]()[_0x500d1c(0x1fc)]);
        document[_0x500d1c(0x373)](_0x225409[_0x500d1c(0x3ae)])[_0x500d1c(0x2ea)] = _0x4ab08e;
    }), document['getElementById'](_0x225409['bhBEI'])['style'][_0x5ca279(0x21b)] = 'none', document['getElementById'](_0x225409[_0x5ca279(0x25e)])[_0x5ca279(0x409)]['display'] = _0x225409[_0x5ca279(0x42c)], document[_0x5ca279(0x373)](_0x225409['AqjcB'])[_0x5ca279(0x409)][_0x5ca279(0x21b)] = _0x225409[_0x5ca279(0x42c)], document[_0x5ca279(0x373)](_0x225409['aPetV'])[_0x5ca279(0x409)][_0x5ca279(0x21b)] = _0x225409[_0x5ca279(0x42c)], document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x2b7)])[_0x5ca279(0x409)][_0x5ca279(0x21b)] = _0x225409[_0x5ca279(0x42c)], document[_0x5ca279(0x373)](_0x5ca279(0x187))[_0x5ca279(0x409)]['display'] = _0x5ca279(0x450), document[_0x5ca279(0x373)]('wdbShowMode')[_0x5ca279(0x208)] = !![], luaFileSelector = document[_0x5ca279(0x373)](_0x5ca279(0x40b)), luaFileSelector['addEventListener'](_0x225409[_0x5ca279(0x35a)], function () {
        const _0xacc475 = _0x5ca279;
        luaFileSelector[_0xacc475(0x276)] = null;
    }), luaFileSelector[_0x5ca279(0x1c8)]('change', async _0x1a4eb2 => {
        const _0x39b34e = _0x5ca279, _0x2b022d = await new Response(_0x1a4eb2[_0x39b34e(0x192)]['files'][0x0])['text']();
        if (!_0x2b022d)
            return;
        luaEditor[_0x39b34e(0x1b9)](_0x2b022d);
    }), jsFileSelector = document[_0x5ca279(0x373)](_0x225409[_0x5ca279(0x20e)]), jsFileSelector[_0x5ca279(0x1c8)](_0x225409[_0x5ca279(0x35a)], function () {
        const _0x7c870f = _0x5ca279;
        jsFileSelector[_0x7c870f(0x276)] = null;
    }), jsFileSelector['addEventListener'](_0x5ca279(0x34a), async _0x4a5db6 => {
        const _0x2855fd = _0x5ca279, _0x466f8a = await new Response(_0x4a5db6['target'][_0x2855fd(0x25d)][0x0])['text']();
        if (!_0x466f8a)
            return;
        jsEditor[_0x2855fd(0x1b9)](_0x466f8a);
    }), _0x225409[_0x5ca279(0x2ec)](drawChart);
}
async function wdbLoader(_0x1e6374, _0x106d49) {
    const _0x18d70c = _0x4f5336, _0x402fe4 = {
            'HFRxM': _0x18d70c(0x1bc),
            'FCaVr': function (_0x4a131a, _0x281cc4) {
                return _0x4a131a(_0x281cc4);
            },
            'GpZVQ': function (_0x2113ee, _0x39ca84) {
                return _0x2113ee + _0x39ca84;
            },
            'LNFko': function (_0x2fb7bf, _0x3bf80a) {
                return _0x2fb7bf + _0x3bf80a;
            },
            'koZAC': _0x18d70c(0x3a4),
            'ndlEe': function (_0xe46e34) {
                return _0xe46e34();
            },
            'EsVjp': function (_0x402f5b, _0x32e617) {
                return _0x402f5b(_0x32e617);
            },
            'iqbOa': function (_0x386583, _0x23ccc1) {
                return _0x386583 + _0x23ccc1;
            },
            'kvroo': function (_0x5e2177, _0x4e7cf8) {
                return _0x5e2177 + _0x4e7cf8;
            },
            'zNNxW': _0x18d70c(0x2b8),
            'khsaK': function (_0x252abf, _0x2c619f) {
                return _0x252abf(_0x2c619f);
            },
            'bytvW': function (_0x536df5, _0x505252) {
                return _0x536df5 + _0x505252;
            },
            'QqCRN': _0x18d70c(0x29d),
            'mWuTo': _0x18d70c(0x3e2),
            'dHdiu': '/lib/fengari.js',
            'azsqN': function (_0x57f779) {
                return _0x57f779();
            },
            'iTNtD': function (_0x528f19, _0x4d4704) {
                return _0x528f19(_0x4d4704);
            },
            'sNNWm': 'wdbLoader\x20ok'
        }, _0x4161c2 = _0x402fe4[_0x18d70c(0x248)][_0x18d70c(0x1c4)]('|');
    let _0x1c5ec3 = 0x0;
    while (!![]) {
        switch (_0x4161c2[_0x1c5ec3++]) {
        case '0':
            await _0x402fe4[_0x18d70c(0x291)](_0x1e6374, _0x402fe4['GpZVQ'](_0x402fe4[_0x18d70c(0x30c)](WDB_API + '/', WDB_MODE), _0x402fe4[_0x18d70c(0x3c5)]));
            continue;
        case '1':
            await _0x402fe4[_0x18d70c(0x26e)](getListCoin);
            continue;
        case '2':
            await _0x402fe4[_0x18d70c(0x1d0)](_0x1e6374, _0x402fe4[_0x18d70c(0x350)](_0x402fe4[_0x18d70c(0x290)](WDB_API + '/', WDB_MODE), _0x402fe4[_0x18d70c(0x195)]));
            continue;
        case '3':
            await _0x402fe4[_0x18d70c(0x21d)](_0x1e6374, _0x402fe4[_0x18d70c(0x302)](_0x402fe4[_0x18d70c(0x339)](_0x402fe4[_0x18d70c(0x30c)](WDB_API, '/'), WDB_MODE), _0x402fe4[_0x18d70c(0x417)]));
            continue;
        case '4':
            log(_0x18d70c(0x1a4));
            continue;
        case '5':
            await _0x402fe4[_0x18d70c(0x21d)](_0x1e6374, _0x18d70c(0x23e));
            continue;
        case '6':
            await beforeWork(_0x1e6374);
            continue;
        case '7':
            await _0x1e6374(_0x18d70c(0x2ab));
            continue;
        case '8':
            await _0x1e6374(_0x402fe4[_0x18d70c(0x317)]);
            continue;
        case '9':
            await _0x402fe4['khsaK'](_0x1e6374, _0x402fe4['iqbOa'](_0x402fe4['LNFko'](WDB_API + '/', WDB_MODE), _0x402fe4['dHdiu']));
            continue;
        case '10':
            await _0x402fe4['azsqN'](wdbCreateUI);
            continue;
        case '11':
            await _0x402fe4[_0x18d70c(0x238)](_0x1e6374, _0x18d70c(0x3dd));
            continue;
        case '12':
            _0x402fe4[_0x18d70c(0x26e)](initLua);
            continue;
        case '13':
            await _0x402fe4[_0x18d70c(0x238)](_0x106d49, _0x18d70c(0x275));
            continue;
        case '14':
            return _0x402fe4[_0x18d70c(0x1d3)];
        case '15':
            await _0x402fe4[_0x18d70c(0x21d)](_0x106d49, 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css');
            continue;
        }
        break;
    }
}
function toggleNav(_0x10e38d) {
    const _0x1848fd = _0x4f5336, _0x4c0f9e = {
            'Rpien': function (_0x5054f4, _0x445763) {
                return _0x5054f4 === _0x445763;
            },
            'XHorH': _0x1848fd(0x2bf),
            'LOGGA': _0x1848fd(0x342),
            'asxLQ': _0x1848fd(0x450),
            'KbDLV': _0x1848fd(0x3a8),
            'carox': _0x1848fd(0x1a6),
            'huHWk': _0x1848fd(0x337),
            'vwNbB': 'block',
            'aZjYK': _0x1848fd(0x2b3),
            'oRCiy': _0x1848fd(0x31a),
            'nBnCd': _0x1848fd(0x252),
            'nVvUu': _0x1848fd(0x3ad),
            'VBYpz': _0x1848fd(0x187),
            'ykCns': _0x1848fd(0x3c2),
            'eIKfD': 'wdbShowTips',
            'FQwqR': function (_0x21f0fa, _0x36141f) {
                return _0x21f0fa === _0x36141f;
            },
            'JYLIz': _0x1848fd(0x3ab),
            'WGFRJ': _0x1848fd(0x285),
            'lqGkJ': _0x1848fd(0x17b),
            'oFQeO': function (_0x395bde, _0x2a1c63) {
                return _0x395bde === _0x2a1c63;
            },
            'XTXce': 'tips',
            'cXabA': _0x1848fd(0x2fa)
        };
    if (_0x4c0f9e[_0x1848fd(0x2f0)](_0x10e38d, _0x4c0f9e[_0x1848fd(0x223)])) {
        const _0x465167 = _0x4c0f9e[_0x1848fd(0x341)][_0x1848fd(0x1c4)]('|');
        let _0x59e650 = 0x0;
        while (!![]) {
            switch (_0x465167[_0x59e650++]) {
            case '0':
                document['getElementById'](_0x1848fd(0x285))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                continue;
            case '1':
                document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x191)])['disabled'] = ![];
                continue;
            case '2':
                document[_0x1848fd(0x373)](_0x1848fd(0x187))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x1848fd(0x450);
                continue;
            case '3':
                document[_0x1848fd(0x373)](_0x4c0f9e['carox'])['style']['display'] = _0x4c0f9e['asxLQ'];
                continue;
            case '4':
                document[_0x1848fd(0x373)](_0x4c0f9e['huHWk'])[_0x1848fd(0x208)] = ![];
                continue;
            case '5':
                document[_0x1848fd(0x373)]('wdbShowTips')[_0x1848fd(0x208)] = ![];
                continue;
            case '6':
                document[_0x1848fd(0x373)](_0x1848fd(0x3ad))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x207)];
                continue;
            case '7':
                document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x430)])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e['asxLQ'];
                continue;
            case '8':
                document['getElementById'](_0x4c0f9e['oRCiy'])[_0x1848fd(0x208)] = !![];
                continue;
            case '9':
                document[_0x1848fd(0x373)]('wdbShowFunctions')[_0x1848fd(0x208)] = ![];
                continue;
            }
            break;
        }
    } else {
        if (_0x4c0f9e[_0x1848fd(0x2f0)](_0x10e38d, _0x4c0f9e['nBnCd']))
            document[_0x1848fd(0x373)](_0x4c0f9e['nVvUu'])['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)], document[_0x1848fd(0x373)](_0x1848fd(0x1a6))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = 'block', document[_0x1848fd(0x373)]('wdbWrapVariables')[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x1848fd(0x450), document['getElementById'](_0x4c0f9e[_0x1848fd(0x430)])['style'][_0x1848fd(0x21b)] = _0x1848fd(0x450), document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x2bd)])['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)], document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x1ef)])[_0x1848fd(0x208)] = ![], document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x191)])['disabled'] = !![], document['getElementById']('wdbShowVariables')[_0x1848fd(0x208)] = ![], document[_0x1848fd(0x373)](_0x4c0f9e['ykCns'])[_0x1848fd(0x208)] = ![], document['getElementById'](_0x4c0f9e['eIKfD'])[_0x1848fd(0x208)] = ![];
        else {
            if (_0x4c0f9e[_0x1848fd(0x2d1)](_0x10e38d, 'variables')) {
                const _0x3b29e7 = _0x4c0f9e[_0x1848fd(0x1f9)][_0x1848fd(0x1c4)]('|');
                let _0x1910e2 = 0x0;
                while (!![]) {
                    switch (_0x3b29e7[_0x1910e2++]) {
                    case '0':
                        document['getElementById'](_0x4c0f9e['eIKfD'])[_0x1848fd(0x208)] = ![];
                        continue;
                    case '1':
                        document[_0x1848fd(0x373)](_0x1848fd(0x3c2))[_0x1848fd(0x208)] = ![];
                        continue;
                    case '2':
                        document[_0x1848fd(0x373)](_0x4c0f9e['WGFRJ'])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x207)];
                        continue;
                    case '3':
                        document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x191)])['disabled'] = ![];
                        continue;
                    case '4':
                        document[_0x1848fd(0x373)](_0x1848fd(0x3ad))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                        continue;
                    case '5':
                        document['getElementById'](_0x4c0f9e[_0x1848fd(0x430)])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                        continue;
                    case '6':
                        document['getElementById'](_0x4c0f9e[_0x1848fd(0x1ef)])[_0x1848fd(0x208)] = ![];
                        continue;
                    case '7':
                        document['getElementById'](_0x1848fd(0x1a6))['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                        continue;
                    case '8':
                        document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x429)])['disabled'] = !![];
                        continue;
                    case '9':
                        document[_0x1848fd(0x373)](_0x1848fd(0x187))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e['asxLQ'];
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x4c0f9e[_0x1848fd(0x2f0)](_0x10e38d, _0x4c0f9e[_0x1848fd(0x273)])) {
                    const _0x5000e9 = _0x1848fd(0x363)[_0x1848fd(0x1c4)]('|');
                    let _0x4e317d = 0x0;
                    while (!![]) {
                        switch (_0x5000e9[_0x4e317d++]) {
                        case '0':
                            document['getElementById'](_0x4c0f9e[_0x1848fd(0x430)])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x1848fd(0x2e2);
                            continue;
                        case '1':
                            document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x191)])[_0x1848fd(0x208)] = ![];
                            continue;
                        case '2':
                            document[_0x1848fd(0x373)](_0x4c0f9e['nVvUu'])[_0x1848fd(0x409)]['display'] = 'none';
                            continue;
                        case '3':
                            document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x2bd)])['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                            continue;
                        case '4':
                            document[_0x1848fd(0x373)](_0x1848fd(0x1a6))[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                            continue;
                        case '5':
                            document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x31c)])[_0x1848fd(0x208)] = !![];
                            continue;
                        case '6':
                            document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x429)])['disabled'] = ![];
                            continue;
                        case '7':
                            document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x32e)])[_0x1848fd(0x208)] = ![];
                            continue;
                        case '8':
                            document[_0x1848fd(0x373)](_0x4c0f9e['WGFRJ'])['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                            continue;
                        case '9':
                            document[_0x1848fd(0x373)](_0x4c0f9e['oRCiy'])[_0x1848fd(0x208)] = ![];
                            continue;
                        }
                        break;
                    }
                } else {
                    if (_0x4c0f9e[_0x1848fd(0x356)](_0x10e38d, _0x4c0f9e[_0x1848fd(0x395)])) {
                        const _0x654b5c = _0x4c0f9e['cXabA']['split']('|');
                        let _0x108056 = 0x0;
                        while (!![]) {
                            switch (_0x654b5c[_0x108056++]) {
                            case '0':
                                document[_0x1848fd(0x373)](_0x1848fd(0x285))[_0x1848fd(0x409)]['display'] = _0x4c0f9e[_0x1848fd(0x2a9)];
                                continue;
                            case '1':
                                document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x191)])['disabled'] = ![];
                                continue;
                            case '2':
                                document[_0x1848fd(0x373)](_0x4c0f9e['ykCns'])[_0x1848fd(0x208)] = ![];
                                continue;
                            case '3':
                                document[_0x1848fd(0x373)]('wdbWrapMode')[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e['asxLQ'];
                                continue;
                            case '4':
                                document[_0x1848fd(0x373)](_0x4c0f9e['huHWk'])[_0x1848fd(0x208)] = ![];
                                continue;
                            case '5':
                                document['getElementById'](_0x1848fd(0x2d3))['disabled'] = !![];
                                continue;
                            case '6':
                                document[_0x1848fd(0x373)](_0x4c0f9e['carox'])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x2a9)];
                                continue;
                            case '7':
                                document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x430)])[_0x1848fd(0x409)][_0x1848fd(0x21b)] = _0x1848fd(0x450);
                                continue;
                            case '8':
                                document['getElementById'](_0x4c0f9e['oRCiy'])[_0x1848fd(0x208)] = ![];
                                continue;
                            case '9':
                                document[_0x1848fd(0x373)](_0x4c0f9e[_0x1848fd(0x2bd)])['style'][_0x1848fd(0x21b)] = _0x4c0f9e[_0x1848fd(0x207)];
                                continue;
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}
function toggleShow(_0x23933f) {
    const _0x31203e = _0x4f5336, _0x294aaa = {
            'HPfoM': function (_0x507a42, _0x52f5db) {
                return _0x507a42 === _0x52f5db;
            },
            'taaBV': _0x31203e(0x441),
            'AUEyv': function (_0x3dcc13, _0x48e2dd) {
                return _0x3dcc13(_0x48e2dd);
            },
            'OpzVS': _0x31203e(0x3d7),
            'IUDeq': _0x31203e(0x432),
            'QsyUL': function (_0xaca8c4, _0x477229) {
                return _0xaca8c4 === _0x477229;
            },
            'rgtZW': _0x31203e(0x245),
            'jrgGw': function (_0x2dea83, _0x16bc8a) {
                return _0x2dea83(_0x16bc8a);
            },
            'KFiTD': _0x31203e(0x2c4),
            'sSZHa': _0x31203e(0x40a),
            'eZWAN': function (_0x4b65b9, _0x1d9aa2) {
                return _0x4b65b9 === _0x1d9aa2;
            },
            'nmqQD': 'wdbToggleShowHistory',
            'UGBnW': 'showhistory'
        };
    if (_0x294aaa[_0x31203e(0x189)](_0x23933f, _0x294aaa[_0x31203e(0x360)]))
        document['getElementById'](_0x31203e(0x2eb))[_0x31203e(0x372)] ? _0x294aaa[_0x31203e(0x237)](selectFunction, _0x294aaa['OpzVS']) : _0x294aaa['AUEyv'](selectFunction, _0x294aaa[_0x31203e(0x445)]);
    else {
        if (_0x294aaa[_0x31203e(0x412)](_0x23933f, _0x294aaa[_0x31203e(0x454)]))
            document[_0x31203e(0x373)](_0x31203e(0x2cd))['checked'] ? _0x294aaa['jrgGw'](selectFunction, _0x294aaa[_0x31203e(0x261)]) : _0x294aaa['AUEyv'](selectFunction, _0x294aaa[_0x31203e(0x2a1)]);
        else
            _0x294aaa['eZWAN'](_0x23933f, _0x31203e(0x37b)) && (document['getElementById'](_0x294aaa[_0x31203e(0x36c)])['checked'] ? selectFunction(_0x294aaa[_0x31203e(0x1d5)]) : _0x294aaa[_0x31203e(0x41f)](selectFunction, 'hidehistory'));
    }
}
function toggleLive(_0x547e85) {
    const _0x4a7f52 = _0x4f5336, _0x50f875 = {
            'ZxZDz': function (_0x2637d8, _0x1045f1) {
                return _0x2637d8 === _0x1045f1;
            },
            'nbONi': _0x4a7f52(0x245),
            'bfxGm': function (_0xa733b, _0x574216) {
                return _0xa733b(_0x574216);
            },
            'wWQud': _0x4a7f52(0x204),
            'rRRQH': function (_0x537bde, _0x19ee28) {
                return _0x537bde(_0x19ee28);
            },
            'YEWNV': 'stopchart',
            'FnZWI': _0x4a7f52(0x37b),
            'hgozN': _0x4a7f52(0x234),
            'DILlm': _0x4a7f52(0x3b2),
            'hlMGE': function (_0x123e19, _0x2fd35e) {
                return _0x123e19 === _0x2fd35e;
            },
            'bWqed': 'log',
            'rnNQv': function (_0x16dbac, _0x372dd7) {
                return _0x16dbac(_0x372dd7);
            },
            'TMWBg': 'startlog'
        };
    if (_0x50f875[_0x4a7f52(0x2e8)](_0x547e85, _0x50f875[_0x4a7f52(0x1fd)]))
        document[_0x4a7f52(0x373)](_0x4a7f52(0x1d7))[_0x4a7f52(0x372)] ? _0x50f875[_0x4a7f52(0x2aa)](selectFunction, _0x50f875[_0x4a7f52(0x268)]) : _0x50f875[_0x4a7f52(0x277)](selectFunction, _0x50f875[_0x4a7f52(0x1c1)]);
    else {
        if (_0x50f875[_0x4a7f52(0x2e8)](_0x547e85, _0x50f875[_0x4a7f52(0x2ac)]))
            document[_0x4a7f52(0x373)](_0x4a7f52(0x1f5))[_0x4a7f52(0x372)] ? _0x50f875[_0x4a7f52(0x277)](selectFunction, _0x50f875['hgozN']) : _0x50f875[_0x4a7f52(0x2aa)](selectFunction, _0x50f875[_0x4a7f52(0x194)]);
        else
            _0x50f875['hlMGE'](_0x547e85, _0x50f875[_0x4a7f52(0x3d0)]) && (document[_0x4a7f52(0x373)](_0x4a7f52(0x2fe))['checked'] ? _0x50f875[_0x4a7f52(0x33d)](selectFunction, _0x50f875['TMWBg']) : _0x50f875['bfxGm'](selectFunction, _0x4a7f52(0x414)));
    }
}
function selectFunction(_0x484a64) {
    const _0x3339ae = _0x4f5336, _0x33e784 = {
            'thxJx': _0x3339ae(0x216),
            'qAXbJ': _0x3339ae(0x218),
            'KVVwG': function (_0x388809, _0x21ea58) {
                return _0x388809(_0x21ea58);
            },
            'SviHq': function (_0x533f84, _0x41543b) {
                return _0x533f84 === _0x41543b;
            },
            'TyJDy': 'resetall',
            'fLGXO': function (_0x530e76) {
                return _0x530e76();
            },
            'dPTOq': function (_0x222449, _0x25b495) {
                return _0x222449(_0x25b495);
            },
            'IIpGU': 'hide',
            'SfhBM': function (_0x2c6453, _0x59c90a) {
                return _0x2c6453 === _0x59c90a;
            },
            'eTNBP': _0x3339ae(0x2ee),
            'ortci': _0x3339ae(0x35e),
            'ZOPhM': function (_0x259038, _0x46a839) {
                return _0x259038 === _0x46a839;
            },
            'yQsPz': function (_0x34abfb, _0x3020f9) {
                return _0x34abfb === _0x3020f9;
            },
            'MpGWg': _0x3339ae(0x234),
            'cjdCz': 'start',
            'UzGuA': function (_0x1fe967, _0x41ee8a) {
                return _0x1fe967 === _0x41ee8a;
            },
            'lUmwV': _0x3339ae(0x33c),
            'reWXa': _0x3339ae(0x32d),
            'TSipS': function (_0x38e3ea, _0x4f4d5c) {
                return _0x38e3ea(_0x4f4d5c);
            },
            'nEwlX': _0x3339ae(0x2b4),
            'DoKxa': function (_0x529c36, _0x543ac5) {
                return _0x529c36 === _0x543ac5;
            },
            'rFQED': _0x3339ae(0x183),
            'aWQDV': function (_0x186aa3, _0x1445c6) {
                return _0x186aa3(_0x1445c6);
            },
            'CARvI': _0x3339ae(0x255),
            'Txysf': function (_0x4fa0ce, _0x393aa1) {
                return _0x4fa0ce === _0x393aa1;
            },
            'ovXtm': function (_0x555254, _0x144bb5) {
                return _0x555254 === _0x144bb5;
            },
            'tvCMm': 'hidestats',
            'TgLhp': function (_0xb0e733, _0xb35c6b) {
                return _0xb0e733(_0xb35c6b);
            },
            'DRtYt': _0x3339ae(0x204),
            'OXBbk': _0x3339ae(0x3d7),
            'rAekB': _0x3339ae(0x414),
            'TrRDo': _0x3339ae(0x2c4),
            'nAqvT': function (_0x26cf23, _0x19d298) {
                return _0x26cf23 === _0x19d298;
            },
            'MeLjH': 'hidehistory',
            'dmlZV': function (_0x328bfe, _0x498ecf) {
                return _0x328bfe(_0x498ecf);
            }
        }, _0x455262 = _0x33e784[_0x3339ae(0x43f)][_0x3339ae(0x1c4)]('|');
    let _0x127d7b = 0x0;
    while (!![]) {
        switch (_0x455262[_0x127d7b++]) {
        case '0':
            if (_0x484a64 === _0x33e784[_0x3339ae(0x379)])
                _0x33e784['KVVwG'](toggleLog, _0x3339ae(0x3d1));
            continue;
        case '1':
            if (_0x33e784[_0x3339ae(0x222)](_0x484a64, _0x33e784[_0x3339ae(0x305)]))
                _0x33e784[_0x3339ae(0x288)](resetall);
            continue;
        case '2':
            if (_0x484a64 === _0x3339ae(0x40a))
                _0x33e784['dPTOq'](toggleChart, _0x33e784[_0x3339ae(0x2a6)]);
            continue;
        case '3':
            if (_0x33e784['SfhBM'](_0x484a64, _0x33e784[_0x3339ae(0x27e)]))
                toggleHistory(_0x33e784['ortci']);
            continue;
        case '4':
            if (_0x33e784[_0x3339ae(0x423)](_0x484a64, _0x3339ae(0x1e1)))
                _0x33e784[_0x3339ae(0x288)](resetseed);
            continue;
        case '5':
            if (_0x33e784['yQsPz'](_0x484a64, _0x33e784[_0x3339ae(0x2af)]))
                _0x33e784[_0x3339ae(0x404)](toggleHistory, _0x33e784[_0x3339ae(0x242)]);
            continue;
        case '6':
            if (_0x33e784[_0x3339ae(0x1e6)](_0x484a64, 'stophistory'))
                _0x33e784['KVVwG'](toggleHistory, _0x33e784['lUmwV']);
            continue;
        case '7':
            if (_0x33e784[_0x3339ae(0x423)](_0x484a64, _0x33e784[_0x3339ae(0x2c1)]))
                _0x33e784['TSipS'](toggleHistory, _0x33e784['nEwlX']);
            continue;
        case '8':
            if (_0x33e784[_0x3339ae(0x315)](_0x484a64, _0x33e784[_0x3339ae(0x19e)]))
                _0x33e784[_0x3339ae(0x3ee)](toggleChart, _0x33e784['CARvI']);
            continue;
        case '9':
            if (_0x33e784[_0x3339ae(0x406)](_0x484a64, _0x3339ae(0x452)))
                _0x33e784[_0x3339ae(0x288)](resetstats);
            continue;
        case '10':
            if (_0x484a64 === 'resetlog')
                _0x33e784[_0x3339ae(0x3ee)](toggleLog, _0x33e784[_0x3339ae(0x386)]);
            continue;
        case '11':
            if (_0x33e784[_0x3339ae(0x1dd)](_0x484a64, _0x33e784[_0x3339ae(0x233)]))
                _0x33e784[_0x3339ae(0x209)](toggleStats, _0x3339ae(0x385));
            continue;
        case '12':
            if (_0x33e784[_0x3339ae(0x203)](_0x484a64, _0x33e784[_0x3339ae(0x326)]))
                _0x33e784['dPTOq'](toggleChart, _0x3339ae(0x3d1));
            continue;
        case '13':
            if (_0x33e784['Txysf'](_0x484a64, _0x3339ae(0x31f)))
                _0x33e784[_0x3339ae(0x209)](toggleChart, _0x33e784[_0x3339ae(0x1c0)]);
            continue;
        case '14':
            if (_0x33e784[_0x3339ae(0x315)](_0x484a64, _0x33e784[_0x3339ae(0x3a2)]))
                _0x33e784[_0x3339ae(0x27d)](toggleStats, _0x3339ae(0x35e));
            continue;
        case '15':
            if (_0x33e784['UzGuA'](_0x484a64, _0x33e784[_0x3339ae(0x17a)]))
                toggleLog(_0x3339ae(0x33c));
            continue;
        case '16':
            if (_0x33e784[_0x3339ae(0x203)](_0x484a64, _0x33e784[_0x3339ae(0x3a3)]))
                toggleChart(_0x33e784[_0x3339ae(0x368)]);
            continue;
        case '17':
            if (_0x33e784[_0x3339ae(0x374)](_0x484a64, _0x33e784[_0x3339ae(0x271)]))
                _0x33e784[_0x3339ae(0x30a)](toggleHistory, _0x33e784[_0x3339ae(0x2a6)]);
            continue;
        }
        break;
    }
}
function toggleMode(_0x4d4ffc) {
    const _0x940aa0 = _0x4f5336, _0x418108 = {
            'yAemI': 'lua',
            'MhEbb': _0x940aa0(0x1aa),
            'FWmdg': 'block',
            'DNmfg': _0x940aa0(0x179),
            'kGiWF': _0x940aa0(0x450),
            'myAEB': 'wdbAdvancedMode',
            'vGwMG': function (_0x3a752f, _0x5671c8) {
                return _0x3a752f === _0x5671c8;
            },
            'ijrff': _0x940aa0(0x2be)
        };
    mode = _0x4d4ffc;
    if (_0x4d4ffc === _0x418108[_0x940aa0(0x2fc)])
        document[_0x940aa0(0x373)](_0x418108[_0x940aa0(0x197)])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x418108[_0x940aa0(0x2e3)], document[_0x940aa0(0x373)](_0x418108[_0x940aa0(0x448)])[_0x940aa0(0x409)]['display'] = _0x418108['kGiWF'], document['getElementById'](_0x418108[_0x940aa0(0x42b)])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = 'none';
    else {
        if (_0x418108[_0x940aa0(0x3e8)](_0x4d4ffc, 'js'))
            document['getElementById'](_0x418108[_0x940aa0(0x197)])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x418108[_0x940aa0(0x44c)], document['getElementById']('wdbJSMode')[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x418108['FWmdg'], document[_0x940aa0(0x373)](_0x418108['myAEB'])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x418108[_0x940aa0(0x44c)];
        else
            _0x418108[_0x940aa0(0x3e8)](_0x4d4ffc, _0x418108[_0x940aa0(0x18d)]) && (document[_0x940aa0(0x373)](_0x418108[_0x940aa0(0x197)])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x418108[_0x940aa0(0x44c)], document[_0x940aa0(0x373)](_0x418108[_0x940aa0(0x448)])['style']['display'] = _0x418108['kGiWF'], document[_0x940aa0(0x373)](_0x418108[_0x940aa0(0x42b)])[_0x940aa0(0x409)][_0x940aa0(0x21b)] = _0x940aa0(0x2e2));
    }
}
function _0x315b(_0x5b67fa, _0xbc2398) {
    const _0xb7faf8 = _0xb7fa();
    return _0x315b = function (_0x315b5b, _0x1f6880) {
        _0x315b5b = _0x315b5b - 0x177;
        let _0x53d3eb = _0xb7faf8[_0x315b5b];
        return _0x53d3eb;
    }, _0x315b(_0x5b67fa, _0xbc2398);
}
function toggleStats(_0x1e52d9) {
    const _0xeb8849 = _0x4f5336, _0x4ac67c = {
            'YRGkS': function (_0x841838, _0x4474a6) {
                return _0x841838 === _0x4474a6;
            },
            'waqEz': _0xeb8849(0x385),
            'JMVQI': _0xeb8849(0x450),
            'fIioY': 'show',
            'GiTiZ': 'flex'
        };
    if (_0x4ac67c[_0xeb8849(0x3f3)](_0x1e52d9, _0x4ac67c[_0xeb8849(0x29a)]))
        document[_0xeb8849(0x373)](_0xeb8849(0x1c2))[_0xeb8849(0x409)][_0xeb8849(0x21b)] = _0x4ac67c[_0xeb8849(0x41d)];
    else
        _0x4ac67c[_0xeb8849(0x3f3)](_0x1e52d9, _0x4ac67c['fIioY']) && (document[_0xeb8849(0x373)]('wdbStats')[_0xeb8849(0x409)]['display'] = _0x4ac67c[_0xeb8849(0x3d8)]);
}
function toggleChart(_0x4f6966) {
    const _0x17131e = _0x4f5336, _0x25550a = {
            'rbtIO': function (_0x2cf81a, _0x527ed1) {
                return _0x2cf81a === _0x527ed1;
            },
            'hkXAW': 'hide',
            'FEioc': _0x17131e(0x32b),
            'oSAxn': _0x17131e(0x450),
            'XhRwC': 'wdbWrapHistory',
            'oYZWx': _0x17131e(0x362),
            'Oweja': _0x17131e(0x2dd),
            'UNQZM': function (_0x238c00, _0x2715ec) {
                return _0x238c00 === _0x2715ec;
            },
            'eHzGf': _0x17131e(0x33c),
            'IGaEq': _0x17131e(0x3d1),
            'saAOu': _0x17131e(0x255),
            'PzNvb': function (_0x1e82af) {
                return _0x1e82af();
            }
        };
    if (_0x25550a['rbtIO'](_0x4f6966, _0x25550a['hkXAW']))
        document[_0x17131e(0x373)](_0x25550a[_0x17131e(0x3cc)])['style'][_0x17131e(0x21b)] = _0x25550a['oSAxn'], document[_0x17131e(0x373)](_0x25550a[_0x17131e(0x351)])[_0x17131e(0x409)]['height'] = _0x25550a[_0x17131e(0x213)];
    else {
        if (_0x4f6966 === 'show')
            document['getElementById'](_0x17131e(0x32b))[_0x17131e(0x409)][_0x17131e(0x21b)] = _0x17131e(0x2e2), document['getElementById'](_0x25550a[_0x17131e(0x351)])[_0x17131e(0x409)][_0x17131e(0x2e6)] = _0x25550a['Oweja'];
        else {
            if (_0x25550a[_0x17131e(0x2a4)](_0x4f6966, _0x25550a[_0x17131e(0x30f)]))
                stopChart = !![];
            else {
                if (_0x4f6966 === _0x25550a['IGaEq'])
                    stopChart = ![];
                else
                    _0x4f6966 === _0x25550a[_0x17131e(0x340)] && (betsChart = 0x0, profitChart = 0x0, _0x25550a['PzNvb'](drawChart));
            }
        }
    }
}
function toggleHistory(_0x394256) {
    const _0x4dcd63 = _0x4f5336, _0x5b97dc = {
            'bMWmt': _0x4dcd63(0x338),
            'EThbX': 'wdbChart',
            'MIqnq': _0x4dcd63(0x2e2),
            'gtzfL': _0x4dcd63(0x2dd),
            'pKpqJ': function (_0x5cd1e6, _0x34fce6) {
                return _0x5cd1e6 === _0x34fce6;
            },
            'RuucX': 'stop',
            'thVyQ': _0x4dcd63(0x2b4),
            'RFxYO': 'wdbHistory'
        };
    if (_0x394256 === _0x4dcd63(0x385))
        document[_0x4dcd63(0x373)](_0x5b97dc[_0x4dcd63(0x36e)])[_0x4dcd63(0x409)]['display'] = _0x4dcd63(0x450), document[_0x4dcd63(0x373)](_0x5b97dc[_0x4dcd63(0x27f)])[_0x4dcd63(0x409)][_0x4dcd63(0x2e6)] = '380px';
    else {
        if (_0x394256 === _0x4dcd63(0x35e))
            document[_0x4dcd63(0x373)](_0x5b97dc[_0x4dcd63(0x36e)])[_0x4dcd63(0x409)][_0x4dcd63(0x21b)] = _0x5b97dc[_0x4dcd63(0x30d)], document[_0x4dcd63(0x373)](_0x5b97dc[_0x4dcd63(0x27f)])[_0x4dcd63(0x409)]['height'] = _0x5b97dc['gtzfL'];
        else {
            if (_0x5b97dc[_0x4dcd63(0x3f6)](_0x394256, _0x5b97dc[_0x4dcd63(0x447)]))
                stopHistory = !![];
            else {
                if (_0x5b97dc[_0x4dcd63(0x3f6)](_0x394256, _0x4dcd63(0x3d1)))
                    stopHistory = ![];
                else
                    _0x5b97dc['pKpqJ'](_0x394256, _0x5b97dc[_0x4dcd63(0x3ac)]) && (document[_0x4dcd63(0x373)](_0x5b97dc[_0x4dcd63(0x199)])[_0x4dcd63(0x1f3)] = '');
            }
        }
    }
}
function toggleLog(_0x106e0a) {
    const _0x2137de = _0x4f5336, _0x28c4d6 = {
            'VQWre': function (_0xf02361, _0x1002ff) {
                return _0xf02361 === _0x1002ff;
            },
            'FNWYa': _0x2137de(0x33c),
            'HptZl': function (_0x286d3e, _0x3d809d) {
                return _0x286d3e === _0x3d809d;
            },
            'NhWPs': _0x2137de(0x3d1),
            'zfNQI': _0x2137de(0x2b4),
            'ybFWA': 'wdbLog'
        };
    if (_0x28c4d6[_0x2137de(0x296)](_0x106e0a, _0x28c4d6[_0x2137de(0x3a9)]))
        stopLog = !![];
    else {
        if (_0x28c4d6[_0x2137de(0x2ce)](_0x106e0a, _0x28c4d6['NhWPs']))
            stopLog = ![];
        else
            _0x28c4d6[_0x2137de(0x2ce)](_0x106e0a, _0x28c4d6[_0x2137de(0x1cb)]) && (document[_0x2137de(0x373)](_0x28c4d6[_0x2137de(0x1f4)])['innerHTML'] = '');
    }
}
async function handleAdvanced() {
    const _0x206201 = _0x4f5336, _0x4f05f7 = {
            'xKXVX': function (_0x4b7ebe, _0x13f34f) {
                return _0x4b7ebe(_0x13f34f);
            },
            'NjOVf': _0x206201(0x44a),
            'rKjdm': 'advancedChanceOnWin',
            'hftFd': _0x206201(0x206),
            'gmNnN': _0x206201(0x2dc),
            'ZLNeP': function (_0x1bbf60, _0x29dcb4) {
                return _0x1bbf60(_0x29dcb4);
            },
            'FJscU': _0x206201(0x455),
            'PYVgv': 'advancedMultiOnWinCheck',
            'WVEHo': 'advancedMultiOnWin',
            'WtLsM': function (_0x572d81, _0x3cc098) {
                return _0x572d81(_0x3cc098);
            },
            'ubsbs': _0x206201(0x1eb),
            'cCZgy': _0x206201(0x17e),
            'OLaaT': function (_0x3adcf4, _0x21658f) {
                return _0x3adcf4(_0x21658f);
            },
            'dfgMX': _0x206201(0x390),
            'fHNeM': function (_0x5ca2c3, _0x533267) {
                return _0x5ca2c3(_0x533267);
            },
            'UzvYR': _0x206201(0x2b9),
            'UuhhJ': _0x206201(0x1ab),
            'DqlHp': function (_0x4fcb07, _0xc2aafe) {
                return _0x4fcb07 === _0xc2aafe;
            },
            'dLLnW': function (_0x4ae162, _0x16096c) {
                return _0x4ae162 % _0x16096c;
            },
            'eiJda': 'advancedBetHighOnProfitCheck',
            'mXXJb': function (_0x5bf450, _0x44232e) {
                return _0x5bf450(_0x44232e);
            },
            'BaKBk': _0x206201(0x3bd),
            'VDxMm': function (_0x5297cc, _0x3ca5fa) {
                return _0x5297cc >= _0x3ca5fa;
            },
            'noRmM': 'resetstatsOnProfitCheck',
            'TPDcV': function (_0x27de8d) {
                return _0x27de8d();
            },
            'ciTbw': 'advancedStopRollNumberCheck',
            'yMJTA': function (_0x126c7d, _0x4ecde6) {
                return _0x126c7d(_0x4ecde6);
            },
            'DOhvP': _0x206201(0x30b),
            'IWSyW': function (_0x2ce7f5) {
                return _0x2ce7f5();
            },
            'bkCHi': function (_0x11dcc0, _0x109c8e) {
                return _0x11dcc0 + _0x109c8e;
            },
            'DxPdV': _0x206201(0x38f),
            'TrEqK': _0x206201(0x1c3),
            'wDLWQ': _0x206201(0x346),
            'zGpcb': function (_0x26c649, _0x22525f) {
                return _0x26c649 > _0x22525f;
            },
            'PxKNs': function (_0x154848, _0x371480) {
                return _0x154848 >= _0x371480;
            },
            'KgQIs': function (_0x5e55a3, _0x3efba2) {
                return _0x5e55a3 + _0x3efba2;
            },
            'PCCSW': _0x206201(0x3a5),
            'BYEij': function (_0x510db7, _0x1b81c3) {
                return _0x510db7 <= _0x1b81c3;
            },
            'rHbZZ': function (_0x575974) {
                return _0x575974();
            },
            'pHOHI': function (_0x363c0d, _0x3ca0bb) {
                return _0x363c0d(_0x3ca0bb);
            },
            'qoLkC': 'advancedStopOnBetsCheck',
            'CspBX': function (_0xb383a7, _0x768bc8) {
                return _0xb383a7(_0x768bc8);
            },
            'SSHeY': 'advancedStopOnBets',
            'qsjTH': function (_0xa6026b, _0x2c9994) {
                return _0xa6026b >= _0x2c9994;
            },
            'RpyKb': function (_0x2e4441) {
                return _0x2e4441();
            },
            'VXkUl': 'Stop\x20on\x20',
            'faXfT': _0x206201(0x3a1),
            'EDnCl': _0x206201(0x3ea),
            'rYhHG': function (_0x5614ab, _0x2eaa10) {
                return _0x5614ab(_0x2eaa10);
            },
            'TWXSJ': 'advancedStopOnWins',
            'FHPCy': function (_0x26c86a, _0x58c8c7) {
                return _0x26c86a >= _0x58c8c7;
            },
            'STWGT': function (_0xc16079) {
                return _0xc16079();
            },
            'htNfm': function (_0x2bc70f, _0x3e13c7) {
                return _0x2bc70f + _0x3e13c7;
            },
            'kReTv': _0x206201(0x229),
            'wIapl': 'advancedStopOnLoseCheck',
            'mkjLP': _0x206201(0x230),
            'DPpTl': _0x206201(0x26d),
            'NUiIZ': function (_0xa9e2b, _0x270185) {
                return _0xa9e2b + _0x270185;
            },
            'zlXnR': _0x206201(0x413),
            'UdttT': _0x206201(0x301),
            'qVkVy': function (_0x523d50, _0x20ce42) {
                return _0x523d50 >= _0x20ce42;
            },
            'tmmXQ': function (_0x2d0f4) {
                return _0x2d0f4();
            },
            'kGZiS': function (_0x4baadf, _0x29bc15) {
                return _0x4baadf(_0x29bc15);
            },
            'rLkhP': _0x206201(0x2e9),
            'KDBPT': _0x206201(0x357),
            'NFids': _0x206201(0x389),
            'srCpo': function (_0x46eaa7, _0x121ef4) {
                return _0x46eaa7 % _0x121ef4;
            },
            'YTLWy': function (_0x246e3e, _0x38dc61) {
                return _0x246e3e(_0x38dc61);
            },
            'eaAje': _0x206201(0x364),
            'HYOTV': function (_0x8acee3, _0x531d6e) {
                return _0x8acee3 === _0x531d6e;
            },
            'ceVlA': function (_0xd42c38, _0x2c1b19) {
                return _0xd42c38 % _0x2c1b19;
            },
            'NBPvU': function (_0x5772e3, _0x435d6e) {
                return _0x5772e3 % _0x435d6e;
            },
            'HHVdx': function (_0x5b9f65, _0x2fc05d) {
                return _0x5b9f65 * _0x2fc05d;
            },
            'AxbZk': 'handleAdvanced\x20ok'
        };
    chance = _0x4f05f7['xKXVX'](Number, document['getElementById'](_0x206201(0x321))['value']), chanceOnWinCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x23f)])[_0x206201(0x372)], chanceOnWinCheck ? chanceOnWin = Number(document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x180)])[_0x206201(0x276)]) : chanceOnWin = chance, chanceOnWinBets = Number(document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x2c9)])[_0x206201(0x276)]), chanceOnLoseCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x3ca)])[_0x206201(0x372)], chanceOnLoseCheck ? chanceOnLose = _0x4f05f7[_0x206201(0x295)](Number, document['getElementById'](_0x206201(0x335))['value']) : chanceOnLose = chance, chanceOnLoseBets = _0x4f05f7[_0x206201(0x262)](Number, document[_0x206201(0x373)](_0x4f05f7['FJscU'])[_0x206201(0x276)]), multiOnWinCheck = document['getElementById'](_0x4f05f7[_0x206201(0x2e7)])['checked'], multiOnWinCheck ? multiOnWin = Number(document[_0x206201(0x373)](_0x4f05f7['WVEHo'])[_0x206201(0x276)]) : multiOnWin = 0x1, multiOnWinBets = _0x4f05f7[_0x206201(0x3e3)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x3c8)])[_0x206201(0x276)]), multiOnLoseCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x24e)])[_0x206201(0x372)], multiOnLoseCheck ? multiOnLose = _0x4f05f7[_0x206201(0x384)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x2d2)])[_0x206201(0x276)]) : multiOnLose = 0x1, multiOnLoseBets = _0x4f05f7[_0x206201(0x1f7)](Number, document[_0x206201(0x373)]('advancedMultiOnLoseBets')[_0x206201(0x276)]), betHighOnBetCheck = document['getElementById'](_0x4f05f7[_0x206201(0x307)])[_0x206201(0x372)];
    if (betHighOnBetCheck) {
        betHighOnBet = Number(document[_0x206201(0x373)](_0x4f05f7['UuhhJ'])['value']);
        if (_0x4f05f7['DqlHp'](_0x4f05f7[_0x206201(0x1d8)](bets, betHighOnBet), 0x0))
            bethigh = !bethigh;
    }
    betHighOnProfitCheck = document['getElementById'](_0x4f05f7[_0x206201(0x19a)])[_0x206201(0x372)];
    if (betHighOnProfitCheck) {
        betHighOnProfit = _0x4f05f7[_0x206201(0x35b)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x200)])['value']);
        if (_0x4f05f7[_0x206201(0x355)](profit, betHighOnProfit))
            bethigh = !bethigh;
    }
    resetstatsOnProfitCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x22a)])[_0x206201(0x372)];
    if (resetstatsOnProfitCheck) {
        resetstatsOnProfit = Number(document[_0x206201(0x373)]('resetstatsOnProfit')[_0x206201(0x276)]);
        if (profit >= resetstatsOnProfit)
            _0x4f05f7[_0x206201(0x366)](resetstats);
    }
    stopRollNumberCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x1fa)])[_0x206201(0x372)];
    if (stopRollNumberCheck) {
        stopRollNumber = _0x4f05f7[_0x206201(0x2a5)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x260)])[_0x206201(0x276)]);
        if (_0x4f05f7['DqlHp'](lastBet[_0x206201(0x2cb)], stopRollNumber))
            _0x4f05f7[_0x206201(0x2b5)](stop), _0x4f05f7[_0x206201(0x35b)](log, _0x4f05f7['bkCHi'](_0x4f05f7[_0x206201(0x2ca)], stopRollNumber));
    }
    stopStreakCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x24c)])['checked'];
    if (stopStreakCheck) {
        stopStreak = Number(document['getElementById'](_0x4f05f7['wDLWQ'])[_0x206201(0x276)]);
        if (_0x4f05f7[_0x206201(0x1f8)](stopStreak, 0x0)) {
            if (_0x4f05f7['PxKNs'](currentstreak, stopStreak))
                _0x4f05f7[_0x206201(0x366)](stop), log(_0x4f05f7[_0x206201(0x1ec)](_0x4f05f7[_0x206201(0x17d)], stopStreak));
        } else {
            if (_0x4f05f7[_0x206201(0x43a)](currentstreak, stopStreak))
                _0x4f05f7['rHbZZ'](stop), _0x4f05f7[_0x206201(0x212)](log, _0x206201(0x3a5) + stopStreak);
        }
    }
    stopOnBetsCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x442)])[_0x206201(0x372)];
    if (stopOnBetsCheck) {
        stopOnBets = _0x4f05f7[_0x206201(0x188)](Number, document['getElementById'](_0x4f05f7[_0x206201(0x3e7)])[_0x206201(0x276)]);
        if (_0x4f05f7[_0x206201(0x2c0)](bets, stopOnBets))
            _0x4f05f7['RpyKb'](stop), _0x4f05f7['xKXVX'](log, _0x4f05f7[_0x206201(0x391)](_0x4f05f7[_0x206201(0x391)](_0x4f05f7['VXkUl'], stopOnBets), _0x4f05f7[_0x206201(0x3fa)]));
    }
    stopOnWinsCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x422)])[_0x206201(0x372)];
    if (stopOnWinsCheck) {
        stopOnWins = _0x4f05f7['rYhHG'](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x38a)])['value']);
        if (_0x4f05f7[_0x206201(0x308)](winstreak, stopOnWins))
            _0x4f05f7[_0x206201(0x3aa)](stop), _0x4f05f7[_0x206201(0x281)](log, _0x4f05f7[_0x206201(0x428)](_0x4f05f7[_0x206201(0x18a)], stopOnWins) + _0x4f05f7[_0x206201(0x221)]);
    }
    stopOnLoseCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x19c)])['checked'];
    if (stopOnLoseCheck) {
        stopOnLose = _0x4f05f7[_0x206201(0x3e3)](Number, document[_0x206201(0x373)](_0x4f05f7['mkjLP'])['value']);
        if (losestreak >= stopOnLose)
            _0x4f05f7[_0x206201(0x269)](stop), log(_0x4f05f7['KgQIs'](_0x4f05f7[_0x206201(0x18a)] + stopOnLose, _0x206201(0x3b0)));
    }
    stopOnProfitCheck = document[_0x206201(0x373)]('stopOnProfitCheck')[_0x206201(0x372)];
    if (stopOnProfitCheck) {
        stopOnProfit = _0x4f05f7[_0x206201(0x295)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x1e2)])[_0x206201(0x276)]);
        if (_0x4f05f7['PxKNs'](profit, stopOnProfit))
            stop(), _0x4f05f7[_0x206201(0x3e3)](log, _0x4f05f7[_0x206201(0x2c7)](_0x4f05f7['zlXnR'], stopOnProfit));
    }
    stopOnBalanceCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x3a0)])[_0x206201(0x372)];
    if (stopOnBalanceCheck) {
        stopOnBalance = Number(document[_0x206201(0x373)](_0x206201(0x1a3))['value']);
        if (_0x4f05f7['qVkVy'](balance, stopOnBalance))
            _0x4f05f7[_0x206201(0x1e7)](stop), _0x4f05f7[_0x206201(0x1ff)](log, _0x4f05f7[_0x206201(0x428)](_0x4f05f7[_0x206201(0x1cc)], stopOnBalance));
    }
    if (win) {
        betHighOnWinCheck = document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x2e4)])[_0x206201(0x372)];
        if (betHighOnWinCheck) {
            betHighOnWin = Number(document['getElementById'](_0x4f05f7[_0x206201(0x19d)])['value']);
            if (_0x4f05f7['DqlHp'](winstreak % betHighOnWin, 0x0))
                bethigh = !bethigh;
        }
        if (_0x4f05f7['DqlHp'](_0x4f05f7[_0x206201(0x1f1)](winstreak, chanceOnWinBets), 0x0))
            chance = chanceOnWin;
        if (multiOnWinCheck) {
            if (_0x4f05f7[_0x206201(0x3cd)](winstreak % multiOnWinBets, 0x0))
                nextbet = previousbet * multiOnWin;
        } else
            nextbet = basebet;
    } else {
        betHighOnLoseCheck = document['getElementById'](_0x206201(0x18b))[_0x206201(0x372)];
        if (betHighOnLoseCheck) {
            betHighOnLose = _0x4f05f7[_0x206201(0x359)](Number, document[_0x206201(0x373)](_0x4f05f7[_0x206201(0x2da)])[_0x206201(0x276)]);
            if (_0x4f05f7[_0x206201(0x435)](_0x4f05f7[_0x206201(0x408)](losestreak, betHighOnLose), 0x0))
                bethigh = !bethigh;
        }
        if (_0x4f05f7['NBPvU'](losestreak, chanceOnLoseBets) === 0x0)
            chance = chanceOnLose;
        if (multiOnLoseCheck) {
            if (_0x4f05f7[_0x206201(0x3cd)](losestreak % multiOnLoseBets, 0x0))
                nextbet = _0x4f05f7[_0x206201(0x2b0)](previousbet, multiOnLose);
        } else
            nextbet = basebet;
    }
    return _0x4f05f7['AxbZk'];
}
function changeCoin() {
    const _0x573d3f = _0x4f5336, _0x100762 = {
            'kEDqE': _0x573d3f(0x259),
            'IISmu': function (_0x2bdbeb, _0x3daba1) {
                return _0x2bdbeb(_0x3daba1);
            },
            'OduRt': function (_0x248cd4) {
                return _0x248cd4();
            }
        };
    coin = document['getElementById'](_0x100762[_0x573d3f(0x1be)])[_0x573d3f(0x276)], currency = _0x100762[_0x573d3f(0x446)](String, coin)['toLowerCase'](), fengari[_0x573d3f(0x325)](_0x573d3f(0x34c) + currency + '\x22')(), _0x100762[_0x573d3f(0x3cf)](checkbalance);
}
async function handleStats() {
    const _0x7c90d6 = _0x4f5336, _0x17e495 = {
            'tvbmG': function (_0x229826, _0x39788d) {
                return _0x229826 === _0x39788d;
            },
            'GEqBD': function (_0x4b9786) {
                return _0x4b9786();
            },
            'yEJic': function (_0x48fc3f) {
                return _0x48fc3f();
            },
            'mHuhU': function (_0x250489, _0x28f7eb) {
                return _0x250489 === _0x28f7eb;
            },
            'cPDxJ': _0x7c90d6(0x2be),
            'XkcUZ': function (_0x4b8ce4) {
                return _0x4b8ce4();
            },
            'nxReU': function (_0x1f8ab3, _0x7121bf) {
                return _0x1f8ab3 && _0x7121bf;
            },
            'KYLoz': function (_0x7e1890) {
                return _0x7e1890();
            },
            'bhERa': function (_0x1b8efc, _0xd0643a) {
                return _0x1b8efc(_0xd0643a);
            },
            'diICY': function (_0x346f15, _0x4eaf88) {
                return _0x346f15 > _0x4eaf88;
            },
            'Zpfkk': function (_0x42d318, _0x460882) {
                return _0x42d318 === _0x460882;
            },
            'zGVZL': _0x7c90d6(0x264),
            'trYpF': _0x7c90d6(0x2f5),
            'CgjDY': function (_0x4a82b5, _0x53f5cc) {
                return _0x4a82b5 - _0x53f5cc;
            },
            'Plghf': function (_0x463a40, _0x5a7665) {
                return _0x463a40 > _0x5a7665;
            },
            'JoCYD': function (_0x3ab066, _0x2e340f) {
                return _0x3ab066 > _0x2e340f;
            },
            'NGkmg': function (_0x4a76db, _0x7bc916) {
                return _0x4a76db < _0x7bc916;
            },
            'ZqKQd': function (_0x847c89, _0x1716f4) {
                return _0x847c89 > _0x1716f4;
            },
            'yzNzQ': function (_0x32f9cd, _0x3db4f8) {
                return _0x32f9cd > _0x3db4f8;
            },
            'ulESd': function (_0x1f1216) {
                return _0x1f1216();
            }
        };
    bets++, betsChart++, wdbSpeed['bets']++, lastBet[_0x7c90d6(0x192)] = target, lastBet[_0x7c90d6(0x3c9)] = target, lastBet[_0x7c90d6(0x2cb)] = result, lastBet[_0x7c90d6(0x2b6)] = result, lastBet[_0x7c90d6(0x236)] = currentprofit, lastBet[_0x7c90d6(0x294)] = currentprofit, lastBet[_0x7c90d6(0x313)] = lastBet[_0x7c90d6(0x344)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, profitChart += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    if (game === _0x7c90d6(0x2f9))
        bethigh ? _0x17e495['diICY'](lastBet[_0x7c90d6(0x2cb)], lastBet[_0x7c90d6(0x192)]) ? win = !![] : win = ![] : lastBet[_0x7c90d6(0x2cb)] < lastBet['target'] ? win = !![] : win = ![];
    else {
        if (_0x17e495[_0x7c90d6(0x2ed)](game, _0x7c90d6(0x39a)))
            lastBet[_0x7c90d6(0x236)] > 0x0 ? win = !![] : win = ![];
        else
            lastBet[_0x7c90d6(0x2cb)] >= lastBet[_0x7c90d6(0x192)] ? win = !![] : win = ![];
    }
    if (win)
        color = _0x17e495['zGVZL'], wins++, winstreak++, losestreak = 0x0, currentstreak = winstreak;
    else {
        const _0x43c40a = '0|5|1|4|2|3'[_0x7c90d6(0x1c4)]('|');
        let _0xb9944b = 0x0;
        while (!![]) {
            switch (_0x43c40a[_0xb9944b++]) {
            case '0':
                color = _0x17e495['trYpF'];
                continue;
            case '1':
                losestreak++;
                continue;
            case '2':
                currentstreak = _0x17e495[_0x7c90d6(0x2d8)](0x0, losestreak);
                continue;
            case '3':
                if (_0x17e495[_0x7c90d6(0x330)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '4':
                winstreak = 0x0;
                continue;
            case '5':
                losses++;
                continue;
            }
            break;
        }
    }
    if (_0x17e495[_0x7c90d6(0x304)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (losestreak > maxlosestreak)
        maxlosestreak = losestreak;
    if (_0x17e495[_0x7c90d6(0x267)](balance, minbalance))
        minbalance = balance;
    if (_0x17e495[_0x7c90d6(0x20f)](balance, maxbalance))
        maxbalance = balance;
    if (_0x17e495[_0x7c90d6(0x267)](profit, minprofit))
        minprofit = profit;
    if (_0x17e495[_0x7c90d6(0x369)](profit, maxprofit))
        maxprofit = profit;
    const _0x580b36 = await _0x17e495[_0x7c90d6(0x3f7)](updateStats), _0x16ca65 = await updateChart(), _0x4b34a9 = await _0x17e495['KYLoz'](updateHistory);
    Promise[_0x7c90d6(0x25a)]([
        _0x580b36,
        _0x16ca65,
        _0x4b34a9
    ])[_0x7c90d6(0x40e)](async _0x22c8bd => {
        const _0x298378 = _0x7c90d6;
        try {
            if (_0x17e495['tvbmG'](mode, 'lua'))
                await _0x17e495[_0x298378(0x2a7)](updateLua);
            else {
                if (mode === 'js')
                    await _0x17e495[_0x298378(0x1ed)](dobet);
                else
                    _0x17e495['mHuhU'](mode, _0x17e495['cPDxJ']) && await _0x17e495[_0x298378(0x2a3)](handleAdvanced);
            }
            if (_0x17e495[_0x298378(0x282)](win, sOW))
                return stop();
            if (run)
                return _0x17e495[_0x298378(0x283)](playBet);
        } catch (_0x54a4af) {
            stop(), _0x17e495[_0x298378(0x3fc)](log, _0x54a4af);
        }
    });
}
async function updateStats() {
    const _0x5d5afd = _0x4f5336, _0x34a9c4 = {
            'xxnIP': _0x5d5afd(0x34b),
            'okpkv': function (_0xc179ef, _0x482d56) {
                return _0xc179ef < _0x482d56;
            },
            'XjhOr': _0x5d5afd(0x2f5),
            'tgWpx': _0x5d5afd(0x264),
            'DSLlM': function (_0x458319, _0x5c013f) {
                return _0x458319 === _0x5c013f;
            },
            'qUTrC': function (_0x3c399e, _0x52686) {
                return _0x3c399e > _0x52686;
            },
            'cUKoD': 'black',
            'XuXQE': _0x5d5afd(0x3f8),
            'RsSwU': function (_0x49f214, _0x264a43) {
                return _0x49f214 > _0x264a43;
            },
            'ztabc': _0x5d5afd(0x251),
            'TdyzZ': _0x5d5afd(0x3db),
            'HyMvG': _0x5d5afd(0x18c),
            'KjETn': _0x5d5afd(0x438),
            'FaDqI': _0x5d5afd(0x3bb),
            'qbAuC': _0x5d5afd(0x26c),
            'IurtW': _0x5d5afd(0x1e9),
            'MrwNW': _0x5d5afd(0x2db),
            'lLBIl': _0x5d5afd(0x3e5),
            'HRKAM': function (_0x3daed1, _0x47a70a) {
                return _0x3daed1 / _0x47a70a;
            },
            'sOdsl': function (_0x8be623, _0x4cc322) {
                return _0x8be623 * _0x4cc322;
            },
            'kupnA': function (_0x3c21f0, _0x2e7fa2) {
                return _0x3c21f0 + _0x2e7fa2;
            },
            'vYWzr': function (_0x55aed9, _0x15797a) {
                return _0x55aed9 === _0x15797a;
            },
            'SiFEq': function (_0x259b59, _0x17b171) {
                return _0x259b59(_0x17b171);
            },
            'OPIoY': _0x5d5afd(0x371),
            'WAVsc': function (_0x4265c1, _0xc300d6) {
                return _0x4265c1(_0xc300d6);
            },
            'hucAr': _0x5d5afd(0x246),
            'OFccz': function (_0x6a6072, _0x5327f8) {
                return _0x6a6072 * _0x5327f8;
            },
            'uqRIx': function (_0x53a85b, _0x5db08e) {
                return _0x53a85b / _0x5db08e;
            },
            'AnlqL': function (_0x47dce9, _0x34f8fa) {
                return _0x47dce9 + _0x34f8fa;
            },
            'qVLMJ': function (_0x42222e, _0x134dd0) {
                return _0x42222e === _0x134dd0;
            },
            'nSQwP': function (_0x49a30f, _0x381fae) {
                return _0x49a30f(_0x381fae);
            },
            'twriL': _0x5d5afd(0x43e),
            'XACRz': _0x5d5afd(0x43d),
            'ETIWx': 'updateStats\x20ok'
        }, _0x5c21c2 = profit === 0x0 ? darkMode ? _0x34a9c4[_0x5d5afd(0x39f)] : 'black' : _0x34a9c4[_0x5d5afd(0x1a8)](profit, 0x0) ? _0x34a9c4[_0x5d5afd(0x196)] : _0x34a9c4[_0x5d5afd(0x1ca)], _0x365d16 = _0x34a9c4[_0x5d5afd(0x402)](currentstreak, 0x0) ? darkMode ? _0x34a9c4[_0x5d5afd(0x39f)] : _0x5d5afd(0x2bc) : currentstreak < 0x0 ? _0x34a9c4[_0x5d5afd(0x196)] : _0x34a9c4[_0x5d5afd(0x1ca)], _0x567f67 = _0x34a9c4['qUTrC'](maxwinstreak, 0x0) ? _0x5d5afd(0x264) : _0x34a9c4['cUKoD'];
    document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x2f6)])[_0x5d5afd(0x409)][_0x5d5afd(0x40d)] = _0x567f67;
    const _0xdba805 = _0x34a9c4[_0x5d5afd(0x38b)](maxlosestreak, 0x0) ? _0x34a9c4[_0x5d5afd(0x196)] : _0x34a9c4[_0x5d5afd(0x32f)];
    document['getElementById'](_0x34a9c4[_0x5d5afd(0x400)])[_0x5d5afd(0x409)][_0x5d5afd(0x40d)] = _0xdba805, document[_0x5d5afd(0x373)](_0x5d5afd(0x34f))[_0x5d5afd(0x2ea)] = wagered[_0x5d5afd(0x444)](decimalAmountView), document[_0x5d5afd(0x373)]('wdbBalance')[_0x5d5afd(0x2ea)] = balance['toFixed'](decimalAmountView), document['getElementById'](_0x34a9c4[_0x5d5afd(0x239)])['style'][_0x5d5afd(0x40d)] = _0x5c21c2, document[_0x5d5afd(0x373)](_0x5d5afd(0x3db))[_0x5d5afd(0x2ea)] = profit[_0x5d5afd(0x444)](decimalAmountView), document['getElementById'](_0x34a9c4['HyMvG'])['innerText'] = maxBetAmount[_0x5d5afd(0x444)](decimalAmountView), document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x440)])[_0x5d5afd(0x2ea)] = maxLosseAmount[_0x5d5afd(0x444)](decimalAmountView), document['getElementById'](_0x34a9c4[_0x5d5afd(0x388)])[_0x5d5afd(0x2ea)] = bets, document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x1df)])[_0x5d5afd(0x2ea)] = wins, document[_0x5d5afd(0x373)](_0x5d5afd(0x293))[_0x5d5afd(0x2ea)] = losses, document[_0x5d5afd(0x373)](_0x34a9c4['IurtW'])['style'][_0x5d5afd(0x40d)] = _0x365d16, document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x3cb)])['innerText'] = currentstreak, document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x2f6)])[_0x5d5afd(0x2ea)] = maxwinstreak, document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x400)])['innerText'] = maxlosestreak, document[_0x5d5afd(0x373)](_0x5d5afd(0x33b))[_0x5d5afd(0x2ea)] = minbalance[_0x5d5afd(0x444)](decimalAmountView), document[_0x5d5afd(0x373)](_0x5d5afd(0x381))[_0x5d5afd(0x2ea)] = maxbalance[_0x5d5afd(0x444)](decimalAmountView), document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x2c5)])[_0x5d5afd(0x2ea)] = minprofit[_0x5d5afd(0x444)](decimalAmountView), document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x249)])[_0x5d5afd(0x2ea)] = maxprofit[_0x5d5afd(0x444)](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x34a9c4['HRKAM'](Math['round'](_0x34a9c4[_0x5d5afd(0x224)](_0x34a9c4[_0x5d5afd(0x314)](percentWagered, Number['EPSILON']), 0x64)), 0x64);
    if (_0x34a9c4[_0x5d5afd(0x181)](_0x34a9c4['SiFEq'](String, percentWagered), _0x34a9c4[_0x5d5afd(0x424)]) || _0x34a9c4[_0x5d5afd(0x23d)](String, percentWagered) === _0x34a9c4[_0x5d5afd(0x382)])
        percentWagered = 0x0;
    document['getElementById'](_0x5d5afd(0x27c))[_0x5d5afd(0x2ea)] = percentWagered, percentProfit = _0x34a9c4[_0x5d5afd(0x3ec)](_0x34a9c4['uqRIx'](profit, startBalance), 0x64), percentProfit = Math['round'](_0x34a9c4[_0x5d5afd(0x421)](percentProfit, Number[_0x5d5afd(0x458)]) * 0x64) / 0x64;
    if (_0x34a9c4[_0x5d5afd(0x18e)](String(percentProfit), _0x34a9c4[_0x5d5afd(0x424)]) || _0x34a9c4[_0x5d5afd(0x1f2)](String, percentProfit) === _0x5d5afd(0x246))
        percentProfit = 0x0;
    return document[_0x5d5afd(0x373)](_0x34a9c4['twriL'])[_0x5d5afd(0x409)][_0x5d5afd(0x40d)] = _0x5c21c2, document[_0x5d5afd(0x373)](_0x34a9c4[_0x5d5afd(0x33f)])[_0x5d5afd(0x2ea)] = percentProfit, _0x34a9c4['ETIWx'];
}
function drawChart() {
    const _0x460996 = _0x4f5336, _0x108cf2 = {
            'olmbf': _0x460996(0x263),
            'brHnx': _0x460996(0x3dc),
            'mWkWO': _0x460996(0x240)
        };
    dps = [{
            'x': betsChart,
            'y': profitChart
        }], chart = new CanvasJS[(_0x460996(0x3b4))](_0x460996(0x32b), {
        'theme': darkMode ? _0x108cf2[_0x460996(0x3d6)] : _0x108cf2['brHnx'],
        'axisY': { 'includeZero': ![] },
        'data': [{
                'type': _0x108cf2[_0x460996(0x1b6)],
                'markerSize': 0x0,
                'dataPoints': dps
            }]
    }), chart[_0x460996(0x1b3)]();
}
async function updateChart() {
    const _0x2c9fc8 = _0x4f5336, _0x1fb953 = {
            'BlzHI': function (_0x3adfdc, _0x4834b1) {
                return _0x3adfdc > _0x4834b1;
            },
            'NAZLX': function (_0x570b5f, _0x234c0e) {
                return _0x570b5f - _0x234c0e;
            }
        };
    if (!stopChart) {
        dps[_0x2c9fc8(0x185)]({
            'x': betsChart,
            'y': profitChart,
            'color': color
        });
        if (_0x1fb953[_0x2c9fc8(0x1cd)](dps[_0x2c9fc8(0x431)], maxRows))
            dps[_0x2c9fc8(0x3e9)]();
        if (dps[_0x1fb953[_0x2c9fc8(0x38c)](dps[_0x2c9fc8(0x431)], 0x2)])
            dps[dps['length'] - 0x2][_0x2c9fc8(0x343)] = color;
        chart['render']();
    }
    return _0x2c9fc8(0x2bb);
}
async function updateHistory() {
    const _0x204ccb = _0x4f5336, _0x3bc9e8 = {
            'zlvFe': function (_0x16c95f, _0x8f5aab) {
                return _0x16c95f === _0x8f5aab;
            },
            'TEucx': 'dice',
            'NjGoc': _0x204ccb(0x23a),
            'qYOGx': function (_0x248396, _0x2af0a0) {
                return _0x248396 === _0x2af0a0;
            },
            'VuApw': function (_0x351293, _0x193b09) {
                return _0x351293(_0x193b09);
            },
            'htjoJ': function (_0x5ee9bb, _0x1ea2eb) {
                return _0x5ee9bb(_0x1ea2eb);
            },
            'NFISA': _0x204ccb(0x39a),
            'TFvaF': function (_0x131c57, _0xb1dc54) {
                return _0x131c57 + _0xb1dc54;
            },
            'vTmil': _0x204ccb(0x25f),
            'ewLUb': '#ffc0cb',
            'LSgNl': 'wdbHistory',
            'vJLWG': _0x204ccb(0x2df),
            'qKNDc': function (_0x384cc2, _0x4c73f9) {
                return _0x384cc2 > _0x4c73f9;
            },
            'ANtlt': _0x204ccb(0x1b4)
        };
    if (!stopHistory) {
        const _0x256f1d = _0x3bc9e8[_0x204ccb(0x29e)](game, _0x3bc9e8[_0x204ccb(0x3ed)]) ? bethigh ? '>' : '<' : '>', _0x31d43d = bethigh ? _0x204ccb(0x214) + bets + _0x204ccb(0x3eb) : _0x204ccb(0x214) + bets + _0x204ccb(0x3fe), _0x4b8843 = '' + (havePlinkoRows ? plinkoRow + _0x3bc9e8[_0x204ccb(0x22f)] : '') + plinkoRisk, _0x193729 = '<td>' + bets + _0x204ccb(0x436) + Number(lastBet['amount'])[_0x204ccb(0x444)](decimalAmountView) + _0x204ccb(0x436) + _0x31d43d + _0x204ccb(0x436) + (_0x3bc9e8[_0x204ccb(0x28e)](game, _0x204ccb(0x39a)) ? _0x4b8843 : _0x3bc9e8['VuApw'](Number, lastBet['chance'])[_0x204ccb(0x444)](decimalChanceView)) + _0x204ccb(0x436) + _0x3bc9e8[_0x204ccb(0x253)](Number, lastBet[_0x204ccb(0x41e)])[_0x204ccb(0x444)](decimalChanceView) + _0x204ccb(0x436) + _0x3bc9e8[_0x204ccb(0x3f4)](Number, lastBet[_0x204ccb(0x236)])[_0x204ccb(0x444)](decimalAmountView) + _0x204ccb(0x436) + (_0x3bc9e8[_0x204ccb(0x29e)](game, _0x3bc9e8['NFISA']) ? _0x4b8843 : _0x3bc9e8['TFvaF'](_0x256f1d, _0x3bc9e8[_0x204ccb(0x253)](Number, target)['toFixed'](decimalTargetResult))) + _0x204ccb(0x436) + _0x3bc9e8[_0x204ccb(0x3f4)](Number, result)[_0x204ccb(0x444)](decimalTargetResult) + _0x204ccb(0x436) + lastBet[_0x204ccb(0x344)] + _0x204ccb(0x436) + lastBet['id'] + _0x204ccb(0x28a), _0x448a1b = document['createElement']('tr');
        if (win)
            _0x448a1b[_0x204ccb(0x409)][_0x204ccb(0x2ad)] = _0x3bc9e8['vTmil'];
        else
            _0x448a1b[_0x204ccb(0x409)][_0x204ccb(0x2ad)] = _0x3bc9e8[_0x204ccb(0x398)];
        _0x448a1b[_0x204ccb(0x1f3)] = _0x193729, document['getElementById'](_0x3bc9e8['LSgNl'])['insertBefore'](_0x448a1b, document[_0x204ccb(0x373)](_0x3bc9e8[_0x204ccb(0x278)])[_0x204ccb(0x3f0)][0x0]);
        const _0x351287 = document[_0x204ccb(0x3b6)](_0x3bc9e8[_0x204ccb(0x322)])[_0x204ccb(0x2ae)];
        if (_0x3bc9e8[_0x204ccb(0x2c6)](_0x351287[_0x204ccb(0x431)], maxRows))
            document['querySelector'](_0x3bc9e8[_0x204ccb(0x322)])['lastChild'][_0x204ccb(0x274)]();
    }
    return _0x3bc9e8[_0x204ccb(0x1af)];
}
function log(_0x2813b8) {
    const _0x2836a1 = _0x4f5336, _0xd61b1 = { 'HuySx': 'wdbLog' }, _0x3b1012 = document[_0x2836a1(0x373)](_0xd61b1['HuySx']), _0x35ce83 = document['createElement']('li');
    _0x35ce83[_0x2836a1(0x2ea)] = '' + _0x2813b8, document['getElementById'](_0xd61b1[_0x2836a1(0x358)])[_0x2836a1(0x37f)](_0x35ce83, _0x3b1012[_0x2836a1(0x3f0)][0x0]);
    const _0xc2c226 = _0x3b1012[_0x2836a1(0x27b)]('li');
    if (_0xc2c226['length'] > maxRows)
        document[_0x2836a1(0x373)](_0xd61b1[_0x2836a1(0x358)])[_0x2836a1(0x361)](_0x3b1012[_0x2836a1(0x43b)]);
}
async function start() {
    const _0x45e895 = _0x4f5336, _0x280ee9 = {
            'NNOcL': _0x45e895(0x37d),
            'OIGJn': _0x45e895(0x383),
            'YoVmU': _0x45e895(0x31d),
            'UvMCj': 'wdbStartButton',
            'dKxMq': _0x45e895(0x332),
            'MaUxe': _0x45e895(0x3b3),
            'azDtO': _0x45e895(0x2cf),
            'tanrw': _0x45e895(0x36d),
            'Wildh': _0x45e895(0x42a),
            'wcSyF': _0x45e895(0x29f),
            'wbYuO': _0x45e895(0x280),
            'heycn': '$1=$1/$2\x20',
            'xCWzw': function (_0x408144, _0x52981e) {
                return _0x408144 !== _0x52981e;
            },
            'aZNTo': _0x45e895(0x352),
            'QgDiq': _0x45e895(0x3d4),
            'DcAwH': function (_0x144d81, _0x548e6b) {
                return _0x144d81 === _0x548e6b;
            },
            'sUddr': _0x45e895(0x2be),
            'BeNRM': function (_0x548694, _0x2cdaf9) {
                return _0x548694(_0x2cdaf9);
            },
            'oFAdv': function (_0x40646c, _0x581cfd) {
                return _0x40646c(_0x581cfd);
            },
            'PUdxu': _0x45e895(0x321),
            'bOfPj': function (_0x29b460) {
                return _0x29b460();
            },
            'jOuKZ': function (_0x1c20ff, _0x2f49e2) {
                return _0x1c20ff(_0x2f49e2);
            }
        };
    try {
        if (!run) {
            document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x353)])[_0x45e895(0x2ea)] = _0x280ee9[_0x45e895(0x227)], document[_0x45e895(0x373)](_0x45e895(0x259))[_0x45e895(0x208)] = !![], document[_0x45e895(0x373)](_0x280ee9['YoVmU'])['disabled'] = !![], document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x323)])['disabled'] = !![], document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x241)])[_0x45e895(0x208)] = !![], document[_0x45e895(0x37c)](_0x280ee9[_0x45e895(0x34e)])[_0x45e895(0x1b1)](_0x5ceb62 => _0x5ceb62[_0x45e895(0x208)] = !![]), document[_0x45e895(0x37c)](_0x280ee9[_0x45e895(0x23b)])[_0x45e895(0x1b1)](_0x362421 => _0x362421[_0x45e895(0x208)] = !![]), run = !![], sOW = ![], wdbTimer[_0x45e895(0x33c)](), wdbTimer[_0x45e895(0x3d1)](), wdbSpeed[_0x45e895(0x33c)](), wdbSpeed[_0x45e895(0x3d1)]();
            if (mode === _0x280ee9['tanrw'])
                diceScript = luaEditor[_0x45e895(0x375)](), diceScript = diceScript['replace'](/!=/g, '~=')[_0x45e895(0x235)](/!/g, _0x280ee9[_0x45e895(0x3f9)])[_0x45e895(0x235)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x45e895(0x39c))['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x280ee9[_0x45e895(0x297)])[_0x45e895(0x235)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x280ee9['wbYuO'])[_0x45e895(0x235)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x280ee9[_0x45e895(0x28c)]), fengari[_0x45e895(0x325)](diceScript)();
            else {
                if (mode === 'js') {
                    if (_0x280ee9[_0x45e895(0x1ba)](document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x3bc)]), null))
                        document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x3bc)])[_0x45e895(0x274)]();
                    diceScript = jsEditor[_0x45e895(0x375)]();
                    let _0x4d643c = document[_0x45e895(0x202)](_0x280ee9['QgDiq']);
                    _0x4d643c['id'] = _0x45e895(0x352), _0x4d643c[_0x45e895(0x1f3)] = diceScript, document[_0x45e895(0x453)]['appendChild'](_0x4d643c);
                } else
                    _0x280ee9['DcAwH'](mode, _0x280ee9[_0x45e895(0x365)]) && (basebet = _0x280ee9[_0x45e895(0x1da)](Number, document['getElementById']('advancedBaseBet')[_0x45e895(0x276)]), nextbet = basebet, chance = _0x280ee9[_0x45e895(0x231)](Number, document[_0x45e895(0x373)](_0x280ee9[_0x45e895(0x43c)])[_0x45e895(0x276)]), bethigh = document[_0x45e895(0x3b6)](_0x45e895(0x182))[_0x45e895(0x372)]);
            }
            if (run)
                return _0x280ee9[_0x45e895(0x3af)](playBet);
        }
    } catch (_0x4f3950) {
        stop(), _0x280ee9['jOuKZ'](log, _0x4f3950);
    }
}
function stop() {
    const _0x1f0233 = _0x4f5336, _0x138c5a = {
            'XuLQn': _0x1f0233(0x407),
            'etVwo': _0x1f0233(0x332),
            'UqkIc': _0x1f0233(0x1ac),
            'FTDFj': _0x1f0233(0x2cf)
        };
    if (run) {
        const _0xb5bd7c = _0x138c5a[_0x1f0233(0x3de)][_0x1f0233(0x1c4)]('|');
        let _0x187866 = 0x0;
        while (!![]) {
            switch (_0xb5bd7c[_0x187866++]) {
            case '0':
                document['getElementById'](_0x138c5a[_0x1f0233(0x32c)])[_0x1f0233(0x208)] = ![];
                continue;
            case '1':
                wdbTimer[_0x1f0233(0x3b5)]();
                continue;
            case '2':
                document['getElementById'](_0x138c5a[_0x1f0233(0x1b0)])[_0x1f0233(0x208)] = ![];
                continue;
            case '3':
                document[_0x1f0233(0x37c)](_0x1f0233(0x3b3))[_0x1f0233(0x1b1)](_0x3a163f => _0x3a163f[_0x1f0233(0x208)] = ![]);
                continue;
            case '4':
                run = ![];
                continue;
            case '5':
                document[_0x1f0233(0x373)](_0x1f0233(0x31d))[_0x1f0233(0x208)] = ![];
                continue;
            case '6':
                document[_0x1f0233(0x37c)](_0x138c5a[_0x1f0233(0x3a7)])[_0x1f0233(0x1b1)](_0x4072c0 => _0x4072c0[_0x1f0233(0x208)] = ![]);
                continue;
            case '7':
                wdbSpeed['pause']();
                continue;
            case '8':
                sOW = ![];
                continue;
            case '9':
                document['getElementById'](_0x1f0233(0x39b))[_0x1f0233(0x208)] = ![];
                continue;
            case '10':
                document[_0x1f0233(0x373)](_0x1f0233(0x259))[_0x1f0233(0x208)] = ![];
                continue;
            }
            break;
        }
    }
}
async function resume(_0x143798) {
    const _0x4f282e = _0x4f5336, _0x1ed442 = {
            'stbXS': '4|5|3|2|9|1|6|7|11|10|0|8',
            'suKqE': _0x4f282e(0x2cf),
            'unRRq': 'wdbResumeButton',
            'sJPjW': 'wdbStartButton',
            'sGYyY': _0x4f282e(0x259),
            'DWDLB': _0x4f282e(0x31d),
            'uoUsW': function (_0x9211ef, _0x2bb963) {
                return _0x9211ef(_0x2bb963);
            },
            'ZyPUa': _0x4f282e(0x3b3)
        };
    if (!run) {
        const _0x5a2d58 = _0x1ed442['stbXS'][_0x4f282e(0x1c4)]('|');
        let _0x50ef45 = 0x0;
        while (!![]) {
            switch (_0x5a2d58[_0x50ef45++]) {
            case '0':
                wdbTimer[_0x4f282e(0x3d1)]();
                continue;
            case '1':
                document['querySelectorAll'](_0x1ed442[_0x4f282e(0x3da)])[_0x4f282e(0x1b1)](_0x198d89 => _0x198d89[_0x4f282e(0x208)] = !![]);
                continue;
            case '2':
                document['getElementById'](_0x1ed442[_0x4f282e(0x3f5)])[_0x4f282e(0x208)] = !![];
                continue;
            case '3':
                document[_0x4f282e(0x373)](_0x1ed442[_0x4f282e(0x1a1)])[_0x4f282e(0x208)] = !![];
                continue;
            case '4':
                document[_0x4f282e(0x373)](_0x1ed442['sGYyY'])[_0x4f282e(0x208)] = !![];
                continue;
            case '5':
                document[_0x4f282e(0x373)](_0x1ed442[_0x4f282e(0x292)])[_0x4f282e(0x208)] = !![];
                continue;
            case '6':
                !_0x143798 && (_0x1ed442['uoUsW'](log, _0x4f282e(0x20b)), await new Promise(_0x493885 => setTimeout(_0x493885, 0x1388)));
                continue;
            case '7':
                run = !![];
                continue;
            case '8':
                return playBet();
            case '9':
                document[_0x4f282e(0x37c)](_0x1ed442[_0x4f282e(0x1e3)])[_0x4f282e(0x1b1)](_0x141fcd => _0x141fcd[_0x4f282e(0x208)] = !![]);
                continue;
            case '10':
                wdbSpeed[_0x4f282e(0x3d1)]();
                continue;
            case '11':
                sOW = ![];
                continue;
            }
            break;
        }
    }
}
function stopOnWin() {
    const _0x18b516 = _0x4f5336, _0xb22944 = { 'tsQjS': _0x18b516(0x1ac) };
    sOW = !![];
    if (run)
        document[_0x18b516(0x373)](_0xb22944[_0x18b516(0x2c2)])[_0x18b516(0x208)] = !![];
}
async function playBet() {
    const _0x19ef37 = _0x4f5336, _0x48c8d1 = {
            'KjrUt': function (_0x3d5660, _0x4b8faa) {
                return _0x3d5660 === _0x4b8faa;
            },
            'hCFQf': _0x19ef37(0x36d),
            'puVww': _0x19ef37(0x35d),
            'gwcrL': _0x19ef37(0x39e),
            'isgdp': _0x19ef37(0x1ad),
            'ZgfeG': function (_0x269bfc, _0x39a8da) {
                return _0x269bfc(_0x39a8da);
            },
            'oTBTQ': 'plinko',
            'PrYBc': function (_0x33a923, _0x2cc5aa) {
                return _0x33a923 + _0x2cc5aa;
            },
            'sFpgA': function (_0x2e97aa, _0x57a63f) {
                return _0x2e97aa === _0x57a63f;
            },
            'IHqKN': _0x19ef37(0x19b),
            'bnPUg': function (_0x58536a, _0x8cdc74) {
                return _0x58536a(_0x8cdc74);
            },
            'TzNoG': function (_0x431358, _0x318829) {
                return _0x431358(_0x318829);
            },
            'pWcXU': function (_0x32e8e9) {
                return _0x32e8e9();
            },
            'fAuVf': function (_0x479ce7) {
                return _0x479ce7();
            }
        };
    try {
        _0x48c8d1['KjrUt'](mode, _0x48c8d1['hCFQf']) && (nextbet = fengari['load'](_0x48c8d1[_0x19ef37(0x380)])(), chance = fengari[_0x19ef37(0x325)](_0x48c8d1['gwcrL'])(), bethigh = fengari[_0x19ef37(0x325)](_0x48c8d1[_0x19ef37(0x1ae)])());
        nextbet = Number(nextbet), chance = _0x48c8d1[_0x19ef37(0x324)](Number, chance), previousbet = nextbet, lastBet[_0x19ef37(0x3fb)] = nextbet, lastBet[_0x19ef37(0x419)] = nextbet, lastBet[_0x19ef37(0x258)] = chance, lastBet[_0x19ef37(0x35f)] = chance;
        if (!stopLog) {
            if (game === _0x48c8d1[_0x19ef37(0x37a)]) {
                const _0x22b77f = '' + (havePlinkoRows ? _0x48c8d1['PrYBc'](plinkoRow, _0x19ef37(0x23a)) : '') + plinkoRisk, _0x160fbf = _0x19ef37(0x42f) + Number(lastBet[_0x19ef37(0x3fb)])[_0x19ef37(0x444)](decimalAmountView) + _0x19ef37(0x1fe) + _0x22b77f + _0x19ef37(0x254);
                log(_0x160fbf);
            } else {
                const _0x313cae = _0x48c8d1[_0x19ef37(0x3fd)](game, _0x19ef37(0x2f9)) ? bethigh ? _0x48c8d1[_0x19ef37(0x24f)] : 'low' : _0x48c8d1[_0x19ef37(0x24f)], _0x4893eb = _0x19ef37(0x42f) + Number(lastBet['amount'])['toFixed'](decimalAmountView) + _0x19ef37(0x1fe) + _0x48c8d1[_0x19ef37(0x336)](Number, lastBet[_0x19ef37(0x258)])[_0x19ef37(0x444)](decimalChanceView) + '%\x20chance\x20to\x20win,\x20' + _0x313cae;
                _0x48c8d1[_0x19ef37(0x329)](log, _0x4893eb);
            }
        }
        if (run)
            return _0x48c8d1[_0x19ef37(0x316)](sendBet);
    } catch (_0x36593a) {
        _0x48c8d1[_0x19ef37(0x2de)](stop), log(_0x36593a);
    }
}
function resetall() {
    const _0x263d9e = _0x4f5336, _0x5290ac = {
            'JXbcX': function (_0x597ea7, _0x18e9b8) {
                return _0x597ea7(_0x18e9b8);
            },
            'bamjF': _0x263d9e(0x2b4),
            'Iiacq': 'reset',
            'ZtmHD': _0x263d9e(0x37d),
            'RsCQE': _0x263d9e(0x383),
            'eWfps': function (_0x31f7e1) {
                return _0x31f7e1();
            }
        }, _0x1b077a = _0x263d9e(0x354)[_0x263d9e(0x1c4)]('|');
    let _0x126a3f = 0x0;
    while (!![]) {
        switch (_0x1b077a[_0x126a3f++]) {
        case '0':
            run ? (wdbSpeed['stop'](), wdbSpeed[_0x263d9e(0x3d1)](), wdbTimer[_0x263d9e(0x33c)](), wdbTimer[_0x263d9e(0x3d1)]()) : (wdbSpeed[_0x263d9e(0x33c)](), wdbTimer[_0x263d9e(0x33c)]());
            continue;
        case '1':
            toggleHistory(_0x263d9e(0x2b4));
            continue;
        case '2':
            _0x5290ac[_0x263d9e(0x1a5)](toggleLog, _0x5290ac[_0x263d9e(0x1c9)]);
            continue;
        case '3':
            toggleChart(_0x5290ac[_0x263d9e(0x415)]);
            continue;
        case '4':
            document[_0x263d9e(0x373)](_0x5290ac[_0x263d9e(0x2a0)])[_0x263d9e(0x2ea)] = _0x5290ac[_0x263d9e(0x2a8)];
            continue;
        case '5':
            _0x5290ac['eWfps'](resetstats);
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0xcea75f = _0x4f5336, _0x1d00d1 = {
            'mNYLY': function (_0x4539d7, _0x569cc4) {
                return _0x4539d7(_0x569cc4);
            },
            'mdrdm': _0xcea75f(0x255)
        };
    return _0x1d00d1[_0xcea75f(0x2f1)](toggleChart, _0x1d00d1[_0xcea75f(0x309)]);
}
function resethistory() {
    const _0x3b9550 = _0x4f5336, _0x506f71 = { 'EFMYi': _0x3b9550(0x2b4) };
    return toggleHistory(_0x506f71['EFMYi']);
}
function resetlog() {
    const _0x5b61ab = _0x4f5336, _0x49c039 = {
            'qellY': function (_0x14bda4, _0x1ffd9f) {
                return _0x14bda4(_0x1ffd9f);
            },
            'vyufZ': _0x5b61ab(0x2b4)
        };
    return _0x49c039[_0x5b61ab(0x1b8)](toggleLog, _0x49c039[_0x5b61ab(0x3df)]);
}
function resetstats() {
    const _0x2df282 = _0x4f5336, _0x177d81 = {
            'wAcIV': _0x2df282(0x215),
            'yeZFN': function (_0x5c93c5) {
                return _0x5c93c5();
            }
        }, _0xb4826e = _0x177d81[_0x2df282(0x24a)][_0x2df282(0x1c4)]('|');
    let _0x3789bc = 0x0;
    while (!![]) {
        switch (_0xb4826e[_0x3789bc++]) {
        case '0':
            return _0x177d81[_0x2df282(0x433)](updateStats);
        case '1':
            maxlosestreak = 0x0;
            continue;
        case '2':
            maxprofit = 0x0;
            continue;
        case '3':
            wins = 0x0;
            continue;
        case '4':
            currentstreak = 0x0;
            continue;
        case '5':
            maxwinstreak = 0x0;
            continue;
        case '6':
            percentProfit = 0x0;
            continue;
        case '7':
            startBalance = balance;
            continue;
        case '8':
            wagered = 0x0;
            continue;
        case '9':
            bets = 0x0;
            continue;
        case '10':
            maxLosseAmount = 0x0;
            continue;
        case '11':
            maxbalance = balance;
            continue;
        case '12':
            maxBetAmount = 0x0;
            continue;
        case '13':
            minbalance = balance;
            continue;
        case '14':
            losses = 0x0;
            continue;
        case '15':
            percentWagered = 0x0;
            continue;
        case '16':
            minprofit = 0x0;
            continue;
        case '17':
            profit = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x12926b) {
    return _0x12926b;
}
function ching() {
    const _0x6c0212 = _0x4f5336;
    return wdbSound[_0x6c0212(0x44b)]();
}
function sleep(_0x44ac55) {
    return new Promise(_0x446c93 => setTimeout(_0x446c93, _0x44ac55 * 0x3e8));
}
function initLua() {
    const _0x25ebc8 = _0x4f5336, _0x5c4cc0 = {
            'uRYnY': _0x25ebc8(0x387),
            'GMIVh': 'function\x20stop()\x0ajs.global:stop()\x0aend',
            'TuqCv': _0x25ebc8(0x193),
            'atzNr': _0x25ebc8(0x44e),
            'haKPl': 'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
            'UwUhC': _0x25ebc8(0x2d5),
            'XzvLh': _0x25ebc8(0x3e0),
            'wKVzK': _0x25ebc8(0x310),
            'IMpGv': _0x25ebc8(0x41b),
            'pxBSg': 'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
            'MAEyq': _0x25ebc8(0x449)
        };
    fengari[_0x25ebc8(0x325)](_0x5c4cc0['uRYnY'])(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x3e6)])(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x3c4)])(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x347)])(), fengari[_0x25ebc8(0x325)](_0x5c4cc0['haKPl'])(), fengari['load'](_0x25ebc8(0x257))(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x177)])(), fengari[_0x25ebc8(0x325)](_0x25ebc8(0x22d))(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x396)])(), fengari[_0x25ebc8(0x325)](_0x25ebc8(0x19f))(), fengari[_0x25ebc8(0x325)](_0x5c4cc0['wKVzK'])(), fengari[_0x25ebc8(0x325)](_0x5c4cc0[_0x25ebc8(0x2f2)])(), fengari[_0x25ebc8(0x325)]('function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend')(), fengari[_0x25ebc8(0x325)](_0x5c4cc0['pxBSg'])(), fengari['load'](_0x25ebc8(0x300))(), fengari[_0x25ebc8(0x325)](_0x25ebc8(0x20c))();
    const _0xcd7d6 = location[_0x25ebc8(0x3be)]['replace'](_0x5c4cc0[_0x25ebc8(0x270)], '');
    let _0xe9ca51 = _0xcd7d6[_0x25ebc8(0x21c)]('.');
    casino = _0xcd7d6['slice'](0x0, _0xe9ca51), fengari[_0x25ebc8(0x325)](_0x25ebc8(0x405) + casino + '\x22')();
}
async function updateLua() {
    const _0x158b46 = _0x4f5336, _0x2f82a9 = {
            'CtHZg': _0x158b46(0x26a),
            'LaUGu': _0x158b46(0x345),
            'lhMGD': function (_0x3779f1, _0x2e2825) {
                return _0x3779f1(_0x2e2825);
            },
            'gfemO': _0x158b46(0x1fb),
            'BiUZQ': 'return\x20scriptname',
            'tFdEH': _0x158b46(0x18f),
            'WNeTw': _0x158b46(0x21a)
        }, _0x176ce3 = _0x2f82a9[_0x158b46(0x394)][_0x158b46(0x1c4)]('|');
    let _0x3905b8 = 0x0;
    while (!![]) {
        switch (_0x176ce3[_0x3905b8++]) {
        case '0':
            fengari['load'](_0x158b46(0x306) + lastBet[_0x158b46(0x3fb)] + _0x158b46(0x1f6) + lastBet[_0x158b46(0x3fb)] + _0x158b46(0x1d1) + lastBet[_0x158b46(0x258)] + _0x158b46(0x418) + lastBet[_0x158b46(0x258)] + _0x158b46(0x2a2) + lastBet[_0x158b46(0x41e)] + _0x158b46(0x28b) + lastBet[_0x158b46(0x41e)] + ',\x0a\x20\x20\x20\x20\x20\x20profit=' + lastBet[_0x158b46(0x236)] + _0x158b46(0x289) + lastBet[_0x158b46(0x236)] + ',\x0a\x20\x20\x20\x20\x20\x20target=\x20' + lastBet['target'] + ',\x0a\x20\x20\x20\x20\x20\x20Target=\x20' + lastBet['target'] + _0x158b46(0x3c6) + lastBet['result'] + _0x158b46(0x1e0) + lastBet[_0x158b46(0x2cb)] + _0x158b46(0x2fb) + lastBet[_0x158b46(0x344)] + _0x158b46(0x3d2) + lastBet[_0x158b46(0x344)] + _0x158b46(0x378) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + _0x158b46(0x3f2))();
            continue;
        case '1':
            fengari[_0x158b46(0x325)](_0x2f82a9[_0x158b46(0x21e)])() && (currency = fengari[_0x158b46(0x325)]('return\x20currency')(), coin = _0x2f82a9[_0x158b46(0x1bb)](String, currency)[_0x158b46(0x410)]());
            continue;
        case '2':
            return _0x2f82a9[_0x158b46(0x327)];
        case '3':
            fengari[_0x158b46(0x325)](_0x158b46(0x2ff) + win + _0x158b46(0x25c) + bets + _0x158b46(0x210) + wins + '\x0a\x20\x20\x20\x20losses=' + losses + _0x158b46(0x287) + winstreak + '\x0a\x20\x20\x20\x20losestreak=' + losestreak + _0x158b46(0x20a) + currentstreak + '\x0a\x20\x20\x20\x20balance=' + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + _0x158b46(0x3c7) + maxbalance + '\x0a\x20\x20\x20\x20minprofit=' + minprofit + _0x158b46(0x2e1) + maxprofit + _0x158b46(0x22c) + chance + _0x158b46(0x228) + bethigh + _0x158b46(0x190) + nextbet + '\x0a\x20\x20\x20\x20previousbet=' + previousbet + '\x0a\x20\x20\x20\x20profit=' + profit + _0x158b46(0x1dc) + currentprofit + _0x158b46(0x24b) + partialprofit + _0x158b46(0x392) + wagered + _0x158b46(0x219))();
            continue;
        case '4':
            fengari[_0x158b46(0x325)](_0x2f82a9['BiUZQ'])() ? (scriptname = fengari[_0x158b46(0x325)]('return\x20scriptname')(), document['getElementById'](_0x158b46(0x18f))['innerText'] = 'Script\x20Name:\x20' + scriptname) : (scriptname = '', document[_0x158b46(0x373)](_0x2f82a9[_0x158b46(0x38e)])['innerText'] = '');
            continue;
        case '5':
            fengari['load'](_0x158b46(0x1e5))() && (plinkoRow = fengari[_0x158b46(0x325)]('return\x20plinkoRow')());
            continue;
        case '6':
            fengari['load'](_0x2f82a9[_0x158b46(0x1ea)])();
            continue;
        case '7':
            fengari[_0x158b46(0x325)](_0x158b46(0x3d9))() && (plinkoRisk = fengari[_0x158b46(0x325)](_0x158b46(0x3d9))());
            continue;
        }
        break;
    }
}
function randomString(_0x351dc9, _0x7cf910) {
    const _0x2f5463 = _0x4f5336, _0x444e90 = {
            'WFYIV': function (_0x217499, _0x11bf35) {
                return _0x217499 + _0x11bf35;
            },
            'YxhAI': function (_0x4d99c8, _0x2ea008) {
                return _0x4d99c8 + _0x2ea008;
            },
            'CbqNX': function (_0x4ee397, _0x1cfda7) {
                return _0x4ee397 === _0x1cfda7;
            },
            'SCSZT': _0x2f5463(0x30e),
            'mmdZn': function (_0x4292a8, _0x5eea75) {
                return _0x4292a8 + _0x5eea75;
            },
            'QMNAz': function (_0xba1e6e, _0x23d39e) {
                return _0xba1e6e === _0x23d39e;
            },
            'XLslH': function (_0x5e3b9f, _0x5d8e77) {
                return _0x5e3b9f + _0x5d8e77;
            },
            'qPmUq': function (_0x84fb34, _0x232bee) {
                return _0x84fb34 < _0x232bee;
            }
        }, _0x270706 = _0x2f5463(0x3ba), _0x498802 = _0x270706['toUpperCase'](), _0x29f735 = _0x2f5463(0x250), _0x3d2096 = _0x270706[_0x2f5463(0x2ba)](0x0, 0x6);
    let _0x124f91 = '', _0x1b775d = '';
    if (!_0x7cf910)
        _0x124f91 = _0x444e90[_0x2f5463(0x198)](_0x444e90[_0x2f5463(0x426)](_0x29f735, _0x270706), _0x498802);
    if (_0x444e90[_0x2f5463(0x33e)](_0x7cf910, _0x444e90['SCSZT']))
        _0x124f91 = _0x444e90[_0x2f5463(0x23c)](_0x270706, _0x498802);
    if (_0x444e90[_0x2f5463(0x33e)](_0x7cf910, _0x2f5463(0x416)))
        _0x124f91 = _0x29f735;
    if (_0x444e90['QMNAz'](_0x7cf910, 'hex'))
        _0x124f91 = _0x444e90[_0x2f5463(0x2b2)](_0x29f735, _0x3d2096);
    for (let _0x11f319 = 0x0; _0x444e90[_0x2f5463(0x2cc)](_0x11f319, _0x351dc9); _0x11f319++)
        _0x1b775d += _0x124f91[_0x2f5463(0x427)](Math[_0x2f5463(0x34d)](Math[_0x2f5463(0x3ff)]() * _0x124f91[_0x2f5463(0x431)]));
    return _0x1b775d;
}
function setCookie(_0x743ba6, _0x1635c9, _0x24e1fe) {
    const _0x332754 = _0x4f5336, _0x1b9cbe = {
            'QtWTV': function (_0x343678, _0x1bc42e) {
                return _0x343678 + _0x1bc42e;
            },
            'UwWUK': function (_0xea1b13, _0x200a4f) {
                return _0xea1b13 * _0x200a4f;
            },
            'DIjqm': function (_0x443f2e, _0x22b422) {
                return _0x443f2e * _0x22b422;
            },
            'SarbG': function (_0x3e2abe, _0x2e76a4) {
                return _0x3e2abe + _0x2e76a4;
            },
            'NsmJE': _0x332754(0x3b1),
            'qECjh': function (_0x2024fb, _0x15c578) {
                return _0x2024fb + _0x15c578;
            }
        }, _0xcad2fd = new Date();
    _0xcad2fd[_0x332754(0x348)](_0x1b9cbe[_0x332754(0x2d4)](_0xcad2fd[_0x332754(0x21f)](), _0x1b9cbe['UwWUK'](_0x1b9cbe[_0x332754(0x333)](_0x24e1fe, 0x18), 0x3c) * 0x3c * 0x3e8));
    let _0x5a9a05 = _0x1b9cbe[_0x332754(0x32a)](_0x1b9cbe['NsmJE'], _0xcad2fd[_0x332754(0x2f8)]());
    document[_0x332754(0x2c8)] = _0x1b9cbe[_0x332754(0x367)](_0x1b9cbe[_0x332754(0x367)](_0x743ba6 + '=' + _0x1635c9 + ';', _0x5a9a05), _0x332754(0x3b7));
}
function getCookie(_0x46b99e) {
    const _0x4882f1 = _0x4f5336, _0xa4c1c7 = {
            'grFsj': function (_0x199c79, _0x5a3c4e) {
                return _0x199c79 + _0x5a3c4e;
            },
            'CjrGD': function (_0x17f6d6, _0x3e8f9e) {
                return _0x17f6d6(_0x3e8f9e);
            },
            'Befdu': function (_0x487239, _0x36b7fc) {
                return _0x487239 < _0x36b7fc;
            },
            'jVCQZ': function (_0x4afebf, _0x2446fb) {
                return _0x4afebf === _0x2446fb;
            },
            'xeSsB': function (_0x5d2b53, _0x106e93) {
                return _0x5d2b53 === _0x106e93;
            }
        };
    _0x46b99e = _0xa4c1c7[_0x4882f1(0x403)](_0x46b99e, '=');
    let _0x30f077 = _0xa4c1c7['CjrGD'](decodeURIComponent, document[_0x4882f1(0x2c8)]), _0x125853 = _0x30f077[_0x4882f1(0x1c4)](';');
    for (let _0x3f6b95 = 0x0; _0xa4c1c7[_0x4882f1(0x28d)](_0x3f6b95, _0x125853[_0x4882f1(0x431)]); _0x3f6b95++) {
        let _0x449b65 = _0x125853[_0x3f6b95];
        while (_0xa4c1c7[_0x4882f1(0x201)](_0x449b65[_0x4882f1(0x427)](0x0), '\x20')) {
            _0x449b65 = _0x449b65['substring'](0x1);
        }
        if (_0xa4c1c7[_0x4882f1(0x2e0)](_0x449b65[_0x4882f1(0x21c)](_0x46b99e), 0x0))
            return _0x449b65[_0x4882f1(0x1b7)](_0x46b99e[_0x4882f1(0x431)], _0x449b65['length']);
    }
    return '';
}
function saveScript() {
    const _0xdb6973 = _0x4f5336, _0x455682 = {
            'ARJNM': _0xdb6973(0x370),
            'rEknn': _0xdb6973(0x36d),
            'FVMWo': function (_0x457831, _0x596846) {
                return _0x457831 + _0x596846;
            },
            'mvXjj': function (_0x35bb90, _0x25e646) {
                return _0x35bb90 + _0x25e646;
            },
            'kVDnh': _0xdb6973(0x437),
            'zCORz': _0xdb6973(0x2ef)
        };
    let _0xbac12b = null;
    mode === _0xdb6973(0x36d) ? _0xbac12b = luaEditor['getValue']() : _0xbac12b = jsEditor[_0xdb6973(0x375)]();
    let _0x248446 = document[_0xdb6973(0x202)]('a');
    _0x248446['href'] = window[_0xdb6973(0x2e5)][_0xdb6973(0x2d7)](new Blob([_0xbac12b], { 'type': _0x455682[_0xdb6973(0x331)] })), _0x248446[_0xdb6973(0x279)] = mode === _0x455682[_0xdb6973(0x22b)] ? _0x455682[_0xdb6973(0x17c)]('DiceScript', Date[_0xdb6973(0x39d)]()) + _0xdb6973(0x36f) : _0x455682[_0xdb6973(0x1c5)](_0x455682['kVDnh'], Date['now']()) + _0x455682[_0xdb6973(0x24d)], _0x248446['click']();
}
function getErrMsg(_0xde5ba1) {
    const _0xd40a3f = _0x4f5336, _0x32e1dc = _0xde5ba1[_0xd40a3f(0x1b5)] && _0xde5ba1[_0xd40a3f(0x1b5)][_0xd40a3f(0x320)] && _0xde5ba1['response']['data'][_0xd40a3f(0x1d4)] || _0xde5ba1['message'] || _0xde5ba1['toString']();
    return _0x32e1dc;
}

function _0x39dc() {
    const _0x2aa3e2 = [
        'ySMyP',
        'type=secret',
        'xlVDX',
        'balance-dogecoin',
        'push',
        'CfyBO',
        'sort',
        'msg',
        '77MYTOQD',
        'RUiqJ',
        '1|4|2|5|3|0',
        'balance-ether',
        'TJevs',
        'qVnSH',
        '2492sxQADk',
        'bcash',
        'CLDSa',
        '2161360oHHPSL',
        '259919cTuXyO',
        'DOGE',
        '525075Ezzyer',
        '333893UFdzzX',
        'njvgc',
        'AFPzI',
        'balance=',
        '27ksGtno',
        'mIQmv',
        'act',
        'YDHpK',
        'dWpfU',
        'load',
        'hex',
        'GIzsc',
        'WlbRD',
        'DuImN',
        'THZFh',
        'BTC',
        'lnhPP',
        'balance',
        'find',
        'split',
        'BCH',
        '22810EMgBWQ',
        'EPSILON',
        'token-balance',
        '&secret=0&bet=',
        '&act=play_dice&v=101',
        'coQKb',
        '6565gDJMeN',
        'coin',
        'amount',
        '12zvjzCQ',
        'high',
        'LTC',
        'session_token',
        'OpiQd',
        'bet\x20rate\x20limit\x20exceeded',
        'wSevw',
        'new_seed',
        '6142344Phjioh',
        'round',
        '.player-seed',
        'lQPBS',
        'game_result',
        'FcYKj',
        '/action.php',
        'balance-litecoin',
        'success',
        'MdUiy',
        'win',
        'pDQTn',
        'hOdSP',
        'minbalance=',
        'hJYak',
        'append',
        'LuOyh',
        'FMPjW',
        'RzmeQ',
        'zjqdC',
        'PKVXB',
        '/login.php',
        'HsKni',
        'OWTKN',
        'post',
        'data',
        'TOK',
        'vfsrd',
        'balance-bcash',
        'CAuJa',
        '&user_seed=',
        'ETH',
        'nFEps',
        'usmxJ',
        '198JuCiwq',
        'RWvFJ',
        'nFpFh',
        'replace',
        'wgTdd',
        '&target=',
        'fxuok',
        '&currency=',
        'fJiAA',
        'VpmUS',
        'tokens',
        '&token=',
        'roll',
        'oFfnD',
        'val',
        'SJpRo',
        'dogecoins'
    ];
    _0x39dc = function () {
        return _0x2aa3e2;
    };
    return _0x39dc();
}
(function (_0x343844, _0x3408ed) {
    const _0x1d30bd = _0x3243, _0x59bfe5 = _0x343844();
    while (!![]) {
        try {
            const _0x7a208b = -parseInt(_0x1d30bd(0x12d)) / 0x1 * (-parseInt(_0x1d30bd(0xe0)) / 0x2) + -parseInt(_0x1d30bd(0x12f)) / 0x3 + parseInt(_0x1d30bd(0x129)) / 0x4 * (-parseInt(_0x1d30bd(0xdd)) / 0x5) + parseInt(_0x1d30bd(0x10a)) / 0x6 * (parseInt(_0x1d30bd(0x130)) / 0x7) + -parseInt(_0x1d30bd(0x12c)) / 0x8 * (parseInt(_0x1d30bd(0x134)) / 0x9) + parseInt(_0x1d30bd(0xd7)) / 0xa * (-parseInt(_0x1d30bd(0x123)) / 0xb) + -parseInt(_0x1d30bd(0xe8)) / 0xc;
            if (_0x7a208b === _0x3408ed)
                break;
            else
                _0x59bfe5['push'](_0x59bfe5['shift']());
        } catch (_0x41919e) {
            _0x59bfe5['push'](_0x59bfe5['shift']());
        }
    }
}(_0x39dc, 0xc3daa), token = null, decimalTargetResult = 0x4);
async function beforeWork() {
}
async function getListCoin() {
    const _0x15d0f5 = _0x3243, _0x533abf = {
            'lQPBS': _0x15d0f5(0xd6),
            'wgTdd': _0x15d0f5(0xd1),
            'FMPjW': _0x15d0f5(0x107),
            'MdUiy': _0x15d0f5(0xe2),
            'SJpRo': _0x15d0f5(0x102)
        };
    return coins = [
        _0x533abf[_0x15d0f5(0xeb)],
        _0x533abf[_0x15d0f5(0x10e)],
        _0x15d0f5(0x12e),
        _0x533abf[_0x15d0f5(0xf9)],
        _0x533abf[_0x15d0f5(0xf1)],
        _0x533abf[_0x15d0f5(0x119)]
    ], coins = coins[_0x15d0f5(0x121)](), coin = coins[0x0], drawSelectCoin(), checkbalance();
}
async function checkbalance() {
    const _0x5b559a = _0x3243, _0x16c2a7 = {
            'OpiQd': _0x5b559a(0x11c),
            'OWTKN': _0x5b559a(0x125),
            'qVnSH': function (_0x5d32ef, _0x294f48) {
                return _0x5d32ef === _0x294f48;
            },
            'YDHpK': _0x5b559a(0xd9),
            'lnhPP': function (_0x1b36d1, _0x31fccb) {
                return _0x1b36d1(_0x31fccb);
            },
            'nFEps': _0x5b559a(0xd3),
            'LuOyh': _0x5b559a(0xd1),
            'RUiqJ': function (_0x1f73dd, _0x1a63de) {
                return _0x1f73dd === _0x1a63de;
            },
            'EyYId': _0x5b559a(0xef),
            'FcYKj': _0x5b559a(0xe2),
            'ySMyP': _0x5b559a(0x11e),
            'jXBmE': function (_0x3d2937, _0x4f90e9) {
                return _0x3d2937(_0x4f90e9);
            },
            'PKVXB': function (_0x529957, _0x34589d) {
                return _0x529957 === _0x34589d;
            },
            'HsKni': _0x5b559a(0x126),
            'THZFh': 'ETH',
            'usmxJ': _0x5b559a(0xd6),
            'xlVDX': 'bitcoins',
            'DuImN': 'ethers',
            'fxuok': 'litecoins',
            'GIzsc': _0x5b559a(0x12a),
            'nFpFh': _0x5b559a(0x11a),
            'vfsrd': _0x5b559a(0x114),
            'VpmUS': function (_0xb3a827, _0x208eda) {
                return _0xb3a827 + _0x208eda;
            },
            'hJYak': _0x5b559a(0x133),
            'CfyBO': _0x5b559a(0xf5),
            'sSghC': function (_0x2fcdb0, _0x2c743f) {
                return _0x2fcdb0 + _0x2c743f;
            },
            'wSevw': 'maxbalance=',
            'njvgc': function (_0x3be4ee) {
                return _0x3be4ee();
            }
        };
    let _0x4e985e = [], {data: _0x2cda15} = await axios[_0x5b559a(0x100)](_0x5b559a(0xfd), _0x16c2a7[_0x5b559a(0xe4)]);
    _0x2cda15 = _0x2cda15[_0x5b559a(0x101)], token = _0x2cda15[_0x5b559a(0xe3)];
    for (const _0x371bb2 in _0x2cda15) {
        const _0x546aeb = _0x16c2a7[_0x5b559a(0xff)][_0x5b559a(0xd5)]('|');
        let _0x2d4e1b = 0x0;
        while (!![]) {
            switch (_0x546aeb[_0x2d4e1b++]) {
            case '0':
                if (_0x16c2a7[_0x5b559a(0x128)](_0x371bb2, _0x16c2a7[_0x5b559a(0x137)]))
                    _0x4e985e[_0x5b559a(0x11f)]({
                        'coin': _0x5b559a(0x102),
                        'balance': _0x16c2a7[_0x5b559a(0xd2)](Number, _0x2cda15[_0x371bb2][_0x5b559a(0x10d)](',', ''))
                    });
                continue;
            case '1':
                if (_0x16c2a7[_0x5b559a(0x128)](_0x371bb2, _0x16c2a7[_0x5b559a(0x108)]))
                    _0x4e985e[_0x5b559a(0x11f)]({
                        'coin': _0x16c2a7[_0x5b559a(0xf8)],
                        'balance': _0x16c2a7[_0x5b559a(0xd2)](Number, _0x2cda15[_0x371bb2])
                    });
                continue;
            case '2':
                if (_0x16c2a7[_0x5b559a(0x124)](_0x371bb2, _0x16c2a7['EyYId']))
                    _0x4e985e['push']({
                        'coin': _0x16c2a7['FcYKj'],
                        'balance': _0x16c2a7['lnhPP'](Number, _0x2cda15[_0x371bb2])
                    });
                continue;
            case '3':
                if (_0x371bb2 === _0x16c2a7[_0x5b559a(0x11b)])
                    _0x4e985e[_0x5b559a(0x11f)]({
                        'coin': _0x5b559a(0x12e),
                        'balance': _0x16c2a7['jXBmE'](Number, _0x2cda15[_0x371bb2])
                    });
                continue;
            case '4':
                if (_0x16c2a7[_0x5b559a(0xfc)](_0x371bb2, _0x16c2a7[_0x5b559a(0xfe)]))
                    _0x4e985e[_0x5b559a(0x11f)]({
                        'coin': _0x16c2a7[_0x5b559a(0xd0)],
                        'balance': _0x16c2a7[_0x5b559a(0xd2)](Number, _0x2cda15[_0x371bb2])
                    });
                continue;
            case '5':
                if (_0x371bb2 === _0x5b559a(0x104))
                    _0x4e985e[_0x5b559a(0x11f)]({
                        'coin': _0x16c2a7['usmxJ'],
                        'balance': _0x16c2a7['lnhPP'](Number, _0x2cda15[_0x371bb2])
                    });
                continue;
            }
            break;
        }
    }
    const _0x1109c9 = _0x4e985e[_0x5b559a(0xd4)](_0x525193 => _0x525193[_0x5b559a(0xde)] === coin);
    balance = _0x1109c9['balance'];
    switch (coin) {
    case _0x16c2a7[_0x5b559a(0xf8)]:
        cname = _0x16c2a7[_0x5b559a(0x11d)];
        break;
    case _0x16c2a7['THZFh']:
        cname = _0x16c2a7[_0x5b559a(0xcf)];
        break;
    case _0x16c2a7[_0x5b559a(0xed)]:
        cname = _0x16c2a7[_0x5b559a(0x110)];
        break;
    case _0x16c2a7[_0x5b559a(0x109)]:
        cname = _0x16c2a7[_0x5b559a(0xcd)];
        break;
    case _0x5b559a(0x12e):
        cname = _0x16c2a7[_0x5b559a(0x10c)];
        break;
    case _0x5b559a(0x102):
        cname = _0x16c2a7[_0x5b559a(0x103)];
    }
    return fengari[_0x5b559a(0x139)](_0x16c2a7[_0x5b559a(0x113)](_0x16c2a7[_0x5b559a(0xf6)], balance))(), startBalance = balance, minbalance = balance, fengari[_0x5b559a(0x139)](_0x16c2a7[_0x5b559a(0x120)] + balance)(), maxbalance = balance, fengari['load'](_0x16c2a7['sSghC'](_0x16c2a7[_0x5b559a(0xe6)], balance))(), _0x16c2a7[_0x5b559a(0x131)](updateStats);
}
function _0x3243(_0x38bd10, _0x58b4ef) {
    const _0x39dc97 = _0x39dc();
    return _0x3243 = function (_0x3243da, _0x3cbc2f) {
        _0x3243da = _0x3243da - 0xcc;
        let _0x548563 = _0x39dc97[_0x3243da];
        return _0x548563;
    }, _0x3243(_0x38bd10, _0x58b4ef);
}
function resetseed() {
    const _0x43b8d2 = _0x3243, _0x330b4f = {
            'WlbRD': _0x43b8d2(0xe7),
            'MwKxn': function (_0x3f3553, _0x5a811e, _0x468aaa) {
                return _0x3f3553(_0x5a811e, _0x468aaa);
            },
            'mIQmv': 'change_seed',
            'zjqdC': _0x43b8d2(0xee),
            'CAuJa': function (_0x4b49c2, _0x5ea4a8) {
                return _0x4b49c2(_0x5ea4a8);
            },
            'gYnIW': function (_0x3c2434, _0x11eb16) {
                return _0x3c2434(_0x11eb16);
            }
        };
    try {
        const _0x140914 = new FormData();
        return _0x140914[_0x43b8d2(0xf7)](_0x330b4f[_0x43b8d2(0xce)], _0x330b4f['MwKxn'](randomString, 0xc, _0x43b8d2(0xcc))), _0x140914[_0x43b8d2(0xf7)](_0x43b8d2(0x136), _0x330b4f[_0x43b8d2(0x135)]), _0x140914[_0x43b8d2(0xf7)]('secret', 0x0), _0x140914['append']('token', token), axios[_0x43b8d2(0x100)](_0x330b4f[_0x43b8d2(0xfb)], _0x140914);
    } catch (_0x5e50d9) {
        return stop(), _0x330b4f[_0x43b8d2(0x105)](log, _0x330b4f['gYnIW'](getErrMsg, _0x5e50d9));
    }
}
async function sendBet() {
    const _0x56575f = _0x3243, _0xb4217e = {
            'TJevs': function (_0x27a792, _0x2228b5) {
                return _0x27a792 * _0x2228b5;
            },
            'hOdSP': function (_0xd6a8b5, _0xa10f51) {
                return _0xd6a8b5 + _0xa10f51;
            },
            'CLDSa': function (_0xd83897, _0x40a918) {
                return _0xd83897 - _0x40a918;
            },
            'fJiAA': 'low',
            'dWpfU': function (_0x39fb91, _0x3928aa) {
                return _0x39fb91(_0x3928aa);
            },
            'AFPzI': _0x56575f(0xea),
            'pDQTn': '/action.php',
            'oFfnD': function (_0x3366fc, _0x16f3ee) {
                return _0x3366fc === _0x16f3ee;
            },
            'aQHlx': _0x56575f(0xe5),
            'coQKb': function (_0x137a99, _0x204c8a, _0x769e74) {
                return _0x137a99(_0x204c8a, _0x769e74);
            }
        };
    try {
        chance = Math[_0x56575f(0xe9)](_0xb4217e['TJevs'](_0xb4217e[_0x56575f(0xf4)](chance, Number['EPSILON']), 0x2710)) / 0x2710, target = bethigh ? _0xb4217e[_0x56575f(0x12b)](99.9999, chance) : chance, target = Math[_0x56575f(0xe9)](_0xb4217e[_0x56575f(0x127)](target + Number[_0x56575f(0xd8)], 0x2710)) / 0x2710;
        const _0xd56d4 = 'side=' + (bethigh ? _0x56575f(0xe1) : _0xb4217e[_0x56575f(0x112)]) + _0x56575f(0x10f) + target + _0x56575f(0x115) + token + _0x56575f(0xda) + nextbet + _0x56575f(0x106) + _0xb4217e[_0x56575f(0x138)]($, _0xb4217e[_0x56575f(0x132)])[_0x56575f(0x118)]() + _0x56575f(0x111) + cname + _0x56575f(0xdb), {data: _0x9dc677} = await axios[_0x56575f(0x100)](_0xb4217e[_0x56575f(0xf3)], _0xd56d4);
        if (!_0x9dc677[_0x56575f(0xf0)]) {
            if (_0xb4217e[_0x56575f(0x117)](_0x9dc677[_0x56575f(0x122)], _0xb4217e['aQHlx']))
                return _0xb4217e[_0x56575f(0xdc)](setTimeout, sendBet, 0x3e8);
            stop(), _0xb4217e[_0x56575f(0x138)](log, _0x9dc677[_0x56575f(0x122)]);
        } else
            return _0xb4217e['dWpfU'](handleResult, _0x9dc677);
    } catch (_0x2cef6e) {
        if (run)
            return sendBet();
    }
}
async function handleResult(_0x243672) {
    const _0x2637ae = _0x3243, _0x112d93 = {
            'RWvFJ': '2|3|4|1|0',
            'nbRnB': function (_0x150a5e) {
                return _0x150a5e();
            },
            'MjCxR': function (_0xd28198, _0x45e93) {
                return _0xd28198(_0x45e93);
            },
            'ZuPuZ': function (_0x335f06, _0x2766ed) {
                return _0x335f06 - _0x2766ed;
            },
            'RzmeQ': function (_0x43f4cf) {
                return _0x43f4cf();
            }
        };
    try {
        const _0x32a9a8 = _0x112d93[_0x2637ae(0x10b)][_0x2637ae(0xd5)]('|');
        let _0x10829d = 0x0;
        while (!![]) {
            switch (_0x32a9a8[_0x10829d++]) {
            case '0':
                return _0x112d93['nbRnB'](handleStats);
            case '1':
                lastBet['id'] = _0x112d93['MjCxR'](String, _0x243672['game_id']);
                continue;
            case '2':
                currentprofit = _0x112d93['ZuPuZ'](_0x243672[_0x2637ae(0xec)][_0x2637ae(0xf2)], lastBet[_0x2637ae(0xdf)]);
                continue;
            case '3':
                lastBet[_0x2637ae(0x116)] = _0x243672[_0x2637ae(0xec)][_0x2637ae(0x116)];
                continue;
            case '4':
                result = _0x243672[_0x2637ae(0xec)][_0x2637ae(0x116)];
                continue;
            }
            break;
        }
    } catch (_0x26c90a) {
        return _0x112d93[_0x2637ae(0xfa)](stop), log(_0x112d93['MjCxR'](getErrMsg, _0x26c90a));
    }
}
