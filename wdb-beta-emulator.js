const _0x26fdad = _0x508e;
(function (_0xedc58b, _0x4f7cd6) {
    const _0x1ca971 = _0x508e, _0x4724fd = _0xedc58b();
    while (!![]) {
        try {
            const _0x138749 = parseInt(_0x1ca971(0x303)) / 0x1 + -parseInt(_0x1ca971(0x28f)) / 0x2 * (parseInt(_0x1ca971(0x32f)) / 0x3) + parseInt(_0x1ca971(0x411)) / 0x4 * (parseInt(_0x1ca971(0x37a)) / 0x5) + -parseInt(_0x1ca971(0x2c2)) / 0x6 * (parseInt(_0x1ca971(0x15f)) / 0x7) + parseInt(_0x1ca971(0x167)) / 0x8 + -parseInt(_0x1ca971(0x29c)) / 0x9 + -parseInt(_0x1ca971(0x3e6)) / 0xa * (-parseInt(_0x1ca971(0x253)) / 0xb);
            if (_0x138749 === _0x4f7cd6)
                break;
            else
                _0x4724fd['push'](_0x4724fd['shift']());
        } catch (_0x2a17d2) {
            _0x4724fd['push'](_0x4724fd['shift']());
        }
    }
}(_0x4425, 0xda6c1), darkMode = ![], mode = _0x26fdad(0x386), game = _0x26fdad(0x385), run = ![], win = ![], sOW = ![], startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = 'low', bethigh = !![], target = 0x0, result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSpeed = null, wdbTimer = null, wdbSound = new Object(new Audio(WDB_API + '/' + WDB_MODE + _0x26fdad(0x1e1))), wdbUI = '<style>\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20\x22Courier\x20New\x22,\x20monospace;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20padding:\x205px;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a#wdbHeader,\x0a#wdbFooter\x20{\x0a\x20\x20cursor:\x20move;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffc107;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-image:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-position:\x20right\x20center;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20|\x20' + CASINO_GAME + _0x26fdad(0x14a) + WDB_MODE + _0x26fdad(0x2df) + location['hostname'][_0x26fdad(0x274)](_0x26fdad(0x2ca), '') + _0x26fdad(0x1a1));
function changeMaxRows() {
    const _0x4d1001 = _0x26fdad, _0x43f487 = {
            'DdRvE': _0x4d1001(0x3d1),
            'dqoIj': function (_0x2dedf3) {
                return _0x2dedf3();
            },
            'mJfwF': function (_0x59b896) {
                return _0x59b896();
            }
        };
    maxRows = Number(document[_0x4d1001(0x2b8)](_0x43f487[_0x4d1001(0x152)])[_0x4d1001(0x1c8)]), _0x43f487[_0x4d1001(0x36a)](resetchart), _0x43f487[_0x4d1001(0x361)](resethistory), resetlog();
}
function toggleDarkMode() {
    const _0x33924b = _0x26fdad, _0x3d6bb1 = {
            'bqYwz': _0x33924b(0x28a),
            'cjRDM': _0x33924b(0x42a),
            'vkiTs': _0x33924b(0x328),
            'JZeeK': _0x33924b(0x21b),
            'HnAbJ': '#fff',
            'NBEkD': '#wdbWrapFunctions\x20pre',
            'CHqqK': _0x33924b(0x2e7),
            'yjkWO': _0x33924b(0x1d9),
            'ePCdL': '#000',
            'LRQoy': _0x33924b(0x2b0),
            'MGZEE': 'default',
            'NLLIp': 'theme',
            'NdDGb': _0x33924b(0x20e),
            'fAjNb': 'light',
            'nrOHN': function (_0x368a4e) {
                return _0x368a4e();
            }
        };
    darkMode = !darkMode;
    if (darkMode)
        document[_0x33924b(0x2b8)](_0x33924b(0x20e))[_0x33924b(0x3e7)][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x178)], document[_0x33924b(0x2b8)](_0x33924b(0x20e))[_0x33924b(0x3e7)]['color'] = '#fff', chart[_0x33924b(0x26b)][_0x33924b(0x321)] = _0x3d6bb1[_0x33924b(0x39e)], chart['render'](), luaEditor[_0x33924b(0x266)](_0x33924b(0x321), _0x3d6bb1[_0x33924b(0x376)]), jsEditor['setOption'](_0x33924b(0x321), _0x3d6bb1[_0x33924b(0x376)]), document['querySelector'](_0x3d6bb1[_0x33924b(0x1b0)])[_0x33924b(0x3e7)][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x178)], document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x1b0)])[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x3d6bb1[_0x33924b(0x36c)], document[_0x33924b(0x2bd)](_0x33924b(0x335))['style'][_0x33924b(0x3cd)] = _0x33924b(0x28a), document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x234)])[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x33924b(0x1ba), document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x2ee)])[_0x33924b(0x3e7)][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x178)], document['querySelector'](_0x3d6bb1[_0x33924b(0x2ee)])[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x3d6bb1[_0x33924b(0x36c)], document[_0x33924b(0x37d)](_0x33924b(0x2b0))['forEach'](_0x19cf56 => _0x19cf56[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x33924b(0x1ba));
    else {
        const _0x11a1a1 = _0x3d6bb1[_0x33924b(0x3cc)]['split']('|');
        let _0x22716a = 0x0;
        while (!![]) {
            switch (_0x11a1a1[_0x22716a++]) {
            case '0':
                document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x1b0)])[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x3d6bb1[_0x33924b(0x1f1)];
                continue;
            case '1':
                document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x234)])['style'][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x36c)];
                continue;
            case '2':
                document[_0x33924b(0x37d)](_0x3d6bb1[_0x33924b(0x19d)])[_0x33924b(0x42d)](_0x5af627 => _0x5af627['style']['color'] = '#000');
                continue;
            case '3':
                document[_0x33924b(0x2bd)](_0x3d6bb1['NBEkD'])[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x3d6bb1[_0x33924b(0x1f1)];
                continue;
            case '4':
                jsEditor[_0x33924b(0x266)](_0x33924b(0x321), _0x3d6bb1['MGZEE']);
                continue;
            case '5':
                luaEditor['setOption'](_0x3d6bb1[_0x33924b(0x220)], _0x3d6bb1[_0x33924b(0x36b)]);
                continue;
            case '6':
                document[_0x33924b(0x2b8)](_0x33924b(0x20e))[_0x33924b(0x3e7)][_0x33924b(0x3f1)] = _0x3d6bb1['ePCdL'];
                continue;
            case '7':
                document['getElementById'](_0x3d6bb1['NdDGb'])[_0x33924b(0x3e7)][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x36c)];
                continue;
            case '8':
                chart[_0x33924b(0x26b)]['theme'] = _0x3d6bb1[_0x33924b(0x2ae)];
                continue;
            case '9':
                chart[_0x33924b(0x1bf)]();
                continue;
            case '10':
                document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x2ee)])[_0x33924b(0x3e7)]['backgroundColor'] = _0x3d6bb1[_0x33924b(0x36c)];
                continue;
            case '11':
                document[_0x33924b(0x2bd)](_0x3d6bb1[_0x33924b(0x1b0)])[_0x33924b(0x3e7)][_0x33924b(0x3cd)] = _0x3d6bb1[_0x33924b(0x36c)];
                continue;
            case '12':
                document[_0x33924b(0x2bd)](_0x33924b(0x2e7))[_0x33924b(0x3e7)]['color'] = _0x33924b(0x1b8);
                continue;
            }
            break;
        }
    }
    _0x3d6bb1[_0x33924b(0x1f5)](updateStats);
}
function toggleMinimalBot(_0x43d3d8) {
    const _0x36817b = _0x26fdad, _0x2a21bc = {
            'OreYJ': function (_0x350b58, _0x40a1e9) {
                return _0x350b58 === _0x40a1e9;
            },
            'mLucl': _0x36817b(0x36e),
            'wosdJ': _0x36817b(0x2ed),
            'wGnSr': _0x36817b(0x20e),
            'eyUBS': '350px',
            'ezKpH': _0x36817b(0x3ae),
            'vRilH': _0x36817b(0x294),
            'gRvyO': _0x36817b(0x416),
            'YuwWB': '1|5|2|3|0|4',
            'oLtdC': _0x36817b(0x316),
            'AIslV': 'block',
            'TCUVI': _0x36817b(0x183),
            'HcOGO': 'wdbFooter'
        };
    if (_0x2a21bc[_0x36817b(0x2b3)](_0x43d3d8['innerText'], '▼'))
        document[_0x36817b(0x2b8)](_0x2a21bc[_0x36817b(0x312)])['style'][_0x36817b(0x309)] = _0x36817b(0x2ed), document[_0x36817b(0x2b8)](_0x36817b(0x264))['style'][_0x36817b(0x309)] = _0x2a21bc['wosdJ'], document[_0x36817b(0x2b8)](_0x2a21bc[_0x36817b(0x156)])[_0x36817b(0x3e7)]['width'] = _0x2a21bc[_0x36817b(0x37f)], document[_0x36817b(0x2b8)](_0x2a21bc[_0x36817b(0x156)])[_0x36817b(0x3e7)][_0x36817b(0x3a2)] = _0x2a21bc[_0x36817b(0x2e4)], document['getElementById'](_0x2a21bc[_0x36817b(0x156)])[_0x36817b(0x3e7)]['left'] = _0x2a21bc[_0x36817b(0x2a1)], document['getElementById'](_0x2a21bc['wGnSr'])[_0x36817b(0x3e7)][_0x36817b(0x3c3)] = _0x2a21bc[_0x36817b(0x39b)], _0x43d3d8[_0x36817b(0x284)] = '▲';
    else {
        const _0x20ceff = _0x2a21bc['YuwWB'][_0x36817b(0x354)]('|');
        let _0x1ec0c1 = 0x0;
        while (!![]) {
            switch (_0x20ceff[_0x1ec0c1++]) {
            case '0':
                document[_0x36817b(0x2b8)](_0x2a21bc['wGnSr'])['style'][_0x36817b(0x30f)] = _0x2a21bc[_0x36817b(0x262)];
                continue;
            case '1':
                document[_0x36817b(0x2b8)](_0x2a21bc['mLucl'])['style'][_0x36817b(0x309)] = _0x2a21bc[_0x36817b(0x347)];
                continue;
            case '2':
                document[_0x36817b(0x2b8)](_0x2a21bc['wGnSr'])[_0x36817b(0x3e7)][_0x36817b(0x1e3)] = _0x2a21bc['TCUVI'];
                continue;
            case '3':
                document[_0x36817b(0x2b8)](_0x2a21bc[_0x36817b(0x156)])[_0x36817b(0x3e7)][_0x36817b(0x3a2)] = _0x2a21bc[_0x36817b(0x262)];
                continue;
            case '4':
                _0x43d3d8[_0x36817b(0x284)] = '▼';
                continue;
            case '5':
                document[_0x36817b(0x2b8)](_0x2a21bc[_0x36817b(0x2ab)])[_0x36817b(0x3e7)]['display'] = _0x2a21bc[_0x36817b(0x347)];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x2ed675) {
    const _0x267725 = _0x26fdad, _0x46d01b = {
            'AoouD': function (_0x461d5b, _0x3294c6) {
                return _0x461d5b === _0x3294c6;
            },
            'pSRre': _0x267725(0x2ed),
            'VYZPO': _0x267725(0x23e),
            'HPGGE': _0x267725(0x244)
        };
    _0x46d01b[_0x267725(0x2b5)](_0x2ed675['innerText'], '▲') ? (document[_0x267725(0x2b8)](_0x267725(0x23e))[_0x267725(0x3e7)][_0x267725(0x309)] = _0x46d01b[_0x267725(0x182)], _0x2ed675[_0x267725(0x284)] = '▼') : (document['getElementById'](_0x46d01b[_0x267725(0x38b)])['style'][_0x267725(0x309)] = _0x46d01b[_0x267725(0x21a)], _0x2ed675[_0x267725(0x284)] = '▲');
}
function drawSelectCoin() {
    const _0x20d444 = _0x26fdad, _0x120650 = { 'JNkxJ': _0x20d444(0x307) };
    let _0x3b4eee = '';
    coins[_0x20d444(0x3f0)](_0x3b73a3 => {
        const _0x423938 = _0x20d444;
        _0x3b4eee += _0x423938(0x1c0) + _0x3b73a3 + '\x22>' + _0x3b73a3 + '</option>';
    }), document['getElementById'](_0x120650[_0x20d444(0x3f8)])[_0x20d444(0x38c)] = _0x3b4eee, currency = String(coin)['toLowerCase'](), fengari[_0x20d444(0x374)]('currency=\x22' + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x30a340 = _0x26fdad, _0x168d47 = {
            'EBUYW': '0|3|1|2|5|4',
            'dXfbF': _0x30a340(0x3e9),
            'fNiAn': function (_0x346360, _0x43115f) {
                return _0x346360 - _0x43115f;
            },
            'cGiNB': function (_0x4d1b56, _0xcc77e2) {
                return _0x4d1b56 - _0xcc77e2;
            },
            'UAvyv': function (_0x55758f, _0x3a4dcd) {
                return _0x55758f - _0x3a4dcd;
            },
            'jQUUI': function (_0x5d035c, _0x112e43) {
                return _0x5d035c + _0x112e43;
            },
            'tTCpi': function (_0x5b0038, _0x28d7e8) {
                return _0x5b0038 + _0x28d7e8;
            },
            'JUSxD': function (_0x2b6e13, _0x37cf47) {
                return _0x2b6e13 + _0x37cf47;
            },
            'ofafZ': _0x30a340(0x366),
            'TPyri': _0x30a340(0x173),
            'pUNgj': _0x30a340(0x20e),
            'sFVmc': _0x30a340(0x3ff),
            'lBNfM': _0x30a340(0x264),
            'xxfDK': 'wdbWrapLicenseBox',
            'OVtHl': _0x30a340(0x3f2),
            'IeZVV': 'wdbScriptBoxLUA',
            'zgFeQ': 'default',
            'cDMyk': _0x30a340(0x386),
            'ySeze': 'wdbScriptBoxJS',
            'AeOnB': _0x30a340(0x326),
            'rcsUY': _0x30a340(0x2aa),
            'lETwt': _0x30a340(0x337),
            'soiuL': _0x30a340(0x2ed),
            'FybRH': _0x30a340(0x322),
            'AlZiB': _0x30a340(0x2bf),
            'Sdjxh': _0x30a340(0x2bb),
            'xnneO': _0x30a340(0x30d),
            'wEhle': _0x30a340(0x1c3),
            'HzCdt': _0x30a340(0x3c5),
            'tttTp': _0x30a340(0x247),
            'UiMQt': function (_0x244316) {
                return _0x244316();
            }
        }, _0x34761a = document[_0x30a340(0x272)](_0x168d47['ofafZ']);
    _0x34761a['id'] = _0x168d47[_0x30a340(0x1ca)], _0x34761a[_0x30a340(0x38c)] = wdbUI, document[_0x30a340(0x223)][_0x30a340(0x29d)](_0x34761a);
    const _0x4dc269 = document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x3b4)]);
    let _0x4b1fdf = 0x0, _0x1225b5 = 0x0, _0x48fb5c = 0x0, _0x30ed6f = 0x0;
    document[_0x30a340(0x2b8)]('wdbHeader') ? document[_0x30a340(0x2b8)](_0x168d47['sFVmc'])[_0x30a340(0x224)] = _0x19f813 : _0x4dc269['onmousedown'] = _0x19f813, document[_0x30a340(0x2b8)](_0x168d47['lBNfM']) ? document[_0x30a340(0x2b8)](_0x30a340(0x264))[_0x30a340(0x224)] = _0x19f813 : _0x4dc269['onmousedown'] = _0x19f813;
    function _0x19f813(_0x19d778) {
        const _0x517342 = _0x30a340, _0x47d493 = _0x168d47['EBUYW'][_0x517342(0x354)]('|');
        let _0x187599 = 0x0;
        while (!![]) {
            switch (_0x47d493[_0x187599++]) {
            case '0':
                _0x19d778 = _0x19d778 || window['event'];
                continue;
            case '1':
                _0x48fb5c = _0x19d778[_0x517342(0x3c9)];
                continue;
            case '2':
                _0x30ed6f = _0x19d778['clientY'];
                continue;
            case '3':
                _0x19d778[_0x517342(0x2a0)]();
                continue;
            case '4':
                document['onmousemove'] = _0x225ffd;
                continue;
            case '5':
                document[_0x517342(0x362)] = _0x5cd8d7;
                continue;
            }
            break;
        }
    }
    function _0x225ffd(_0x7f82a) {
        const _0x1ce469 = _0x30a340, _0x16d92d = _0x168d47[_0x1ce469(0x2a2)][_0x1ce469(0x354)]('|');
        let _0x4aee36 = 0x0;
        while (!![]) {
            switch (_0x16d92d[_0x4aee36++]) {
            case '0':
                _0x7f82a[_0x1ce469(0x2a0)]();
                continue;
            case '1':
                _0x4dc269[_0x1ce469(0x3e7)]['left'] = _0x168d47['fNiAn'](_0x4dc269[_0x1ce469(0x14e)], _0x4b1fdf) + 'px';
                continue;
            case '2':
                _0x4b1fdf = _0x168d47['cGiNB'](_0x48fb5c, _0x7f82a[_0x1ce469(0x3c9)]);
                continue;
            case '3':
                _0x4dc269[_0x1ce469(0x3e7)][_0x1ce469(0x3a2)] = _0x168d47[_0x1ce469(0x219)](_0x4dc269[_0x1ce469(0x3bc)], _0x1225b5) + 'px';
                continue;
            case '4':
                _0x1225b5 = _0x168d47[_0x1ce469(0x184)](_0x30ed6f, _0x7f82a[_0x1ce469(0x1fc)]);
                continue;
            case '5':
                _0x30ed6f = _0x7f82a['clientY'];
                continue;
            case '6':
                _0x48fb5c = _0x7f82a[_0x1ce469(0x3c9)];
                continue;
            case '7':
                _0x7f82a = _0x7f82a || window[_0x1ce469(0x1eb)];
                continue;
            }
            break;
        }
    }
    function _0x5cd8d7() {
        const _0x4fe024 = _0x30a340;
        document[_0x4fe024(0x362)] = null, document[_0x4fe024(0x323)] = null;
    }
    if (document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x270)]))
        document[_0x30a340(0x2b8)]('wdbWrapLicenseBox')[_0x30a340(0x166)]();
    if (document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x1c7)]))
        document[_0x30a340(0x2b8)](_0x30a340(0x3f2))[_0x30a340(0x166)]();
    luaEditor = CodeMirror[_0x30a340(0x290)](document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x40c)]), {
        'theme': _0x168d47[_0x30a340(0x15b)],
        'mode': _0x168d47[_0x30a340(0x32d)],
        'lineNumbers': !![]
    }), luaEditor[_0x30a340(0x1c5)](), jsEditor = CodeMirror['fromTextArea'](document[_0x30a340(0x2b8)](_0x168d47['ySeze']), {
        'theme': _0x168d47[_0x30a340(0x15b)],
        'mode': _0x168d47[_0x30a340(0x389)],
        'lineNumbers': !![]
    }), jsEditor[_0x30a340(0x1c5)](), wdbSpeed = new MySpeed(), wdbTimer = new easytimer['Timer'](), wdbTimer['addEventListener'](_0x168d47[_0x30a340(0x423)], () => {
        const _0x61c0db = _0x30a340, _0x555e4f = _0x168d47[_0x61c0db(0x19f)](_0x168d47['tTCpi'](_0x168d47[_0x61c0db(0x19f)](_0x168d47[_0x61c0db(0x364)](wdbTimer[_0x61c0db(0x25b)]()[_0x61c0db(0x1a6)], ':'), wdbTimer[_0x61c0db(0x25b)]()[_0x61c0db(0x393)]), ':') + wdbTimer[_0x61c0db(0x25b)]()['minutes'] + ':', wdbTimer[_0x61c0db(0x25b)]()[_0x61c0db(0x20c)]);
        document[_0x61c0db(0x2b8)](_0x61c0db(0x40e))[_0x61c0db(0x284)] = _0x555e4f;
    }), document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x2d8)])[_0x30a340(0x3e7)][_0x30a340(0x309)] = _0x168d47[_0x30a340(0x24f)], document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x280)])[_0x30a340(0x3e7)][_0x30a340(0x309)] = _0x30a340(0x2ed), document[_0x30a340(0x2b8)](_0x168d47['AlZiB'])[_0x30a340(0x3e7)][_0x30a340(0x309)] = _0x168d47['soiuL'], document[_0x30a340(0x2b8)](_0x168d47['Sdjxh'])[_0x30a340(0x3e7)]['display'] = _0x168d47[_0x30a340(0x24f)], document[_0x30a340(0x2b8)](_0x168d47[_0x30a340(0x420)])['style']['display'] = _0x168d47[_0x30a340(0x24f)], document[_0x30a340(0x2b8)](_0x30a340(0x243))[_0x30a340(0x3e7)][_0x30a340(0x309)] = _0x168d47['soiuL'], document[_0x30a340(0x2b8)](_0x30a340(0x189))[_0x30a340(0x1ef)] = !![], luaFileSelector = document[_0x30a340(0x2b8)](_0x30a340(0x308)), luaFileSelector[_0x30a340(0x37c)](_0x168d47[_0x30a340(0x155)], function () {
        const _0x112f5b = _0x30a340;
        luaFileSelector[_0x112f5b(0x1c8)] = null;
    }), luaFileSelector[_0x30a340(0x37c)](_0x30a340(0x247), async _0x16fe7e => {
        const _0x42f1a7 = _0x30a340, _0x21c8a8 = await new Response(_0x16fe7e[_0x42f1a7(0x1e6)][_0x42f1a7(0x314)][0x0])[_0x42f1a7(0x29a)]();
        if (!_0x21c8a8)
            return;
        luaEditor[_0x42f1a7(0x265)](_0x21c8a8);
    }), jsFileSelector = document['getElementById'](_0x168d47[_0x30a340(0x3cf)]), jsFileSelector[_0x30a340(0x37c)](_0x30a340(0x1c3), function () {
        const _0xd3720 = _0x30a340;
        jsFileSelector[_0xd3720(0x1c8)] = null;
    }), jsFileSelector['addEventListener'](_0x168d47['tttTp'], async _0x44a208 => {
        const _0x17fb37 = _0x30a340, _0x216023 = await new Response(_0x44a208[_0x17fb37(0x1e6)][_0x17fb37(0x314)][0x0])['text']();
        if (!_0x216023)
            return;
        jsEditor['setValue'](_0x216023);
    }), _0x168d47['UiMQt'](drawChart);
}
async function wdbLoader(_0x10e28d, _0x1cf05e) {
    const _0x3f96a9 = _0x26fdad, _0x5d9989 = {
            'Biiwz': '10|14|0|12|8|15|11|9|2|7|1|5|13|6|4|3',
            'hOeFw': function (_0x553958, _0x17c0bb) {
                return _0x553958(_0x17c0bb);
            },
            'vxhBL': function (_0x44398d, _0x3f527f) {
                return _0x44398d(_0x3f527f);
            },
            'hoQsg': function (_0x332818, _0x2ded92) {
                return _0x332818 + _0x2ded92;
            },
            'ognkV': 'Connected',
            'UsmLl': function (_0x2cf049) {
                return _0x2cf049();
            },
            'dlcIb': function (_0x358df7) {
                return _0x358df7();
            },
            'mBaKc': function (_0xe4b9fa, _0x4312aa) {
                return _0xe4b9fa + _0x4312aa;
            },
            'htdFe': function (_0x12bf29, _0x53cba5) {
                return _0x12bf29 + _0x53cba5;
            },
            'JNuBu': _0x3f96a9(0x2b4),
            'MzEzF': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
            'jelDH': function (_0x5a15ba, _0x25fb93) {
                return _0x5a15ba + _0x25fb93;
            },
            'AFpYM': function (_0x922610, _0x505ac6) {
                return _0x922610(_0x505ac6);
            },
            'eiHsz': _0x3f96a9(0x237),
            'tvyRl': function (_0xcc0ed0, _0x2a58f1) {
                return _0xcc0ed0 + _0x2a58f1;
            },
            'AKZdL': function (_0x2928ab, _0x553ac4) {
                return _0x2928ab + _0x553ac4;
            },
            'euQLf': _0x3f96a9(0x2c9),
            'tnFdh': function (_0xc619c8, _0x399000) {
                return _0xc619c8(_0x399000);
            },
            'gqiIM': _0x3f96a9(0x1e7),
            'pstal': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js'
        }, _0x55de64 = _0x5d9989['Biiwz']['split']('|');
    let _0x35157d = 0x0;
    while (!![]) {
        switch (_0x55de64[_0x35157d++]) {
        case '0':
            await _0x5d9989[_0x3f96a9(0x17a)](_0x1cf05e, _0x3f96a9(0x300));
            continue;
        case '1':
            await _0x5d9989[_0x3f96a9(0x17a)](beforeWork, _0x10e28d);
            continue;
        case '2':
            await _0x5d9989['vxhBL'](_0x10e28d, _0x5d9989[_0x3f96a9(0x3fb)](WDB_API + '/', WDB_MODE) + '/lib/fengari.js');
            continue;
        case '3':
            return _0x3f96a9(0x14d);
        case '4':
            _0x5d9989[_0x3f96a9(0x28c)](log, _0x5d9989[_0x3f96a9(0x279)]);
            continue;
        case '5':
            await _0x5d9989[_0x3f96a9(0x181)](wdbCreateUI);
            continue;
        case '6':
            _0x5d9989[_0x3f96a9(0x371)](initLua);
            continue;
        case '7':
            await _0x5d9989['vxhBL'](_0x10e28d, _0x5d9989['mBaKc'](_0x5d9989[_0x3f96a9(0x41a)](_0x5d9989[_0x3f96a9(0x33e)](WDB_API, '/'), WDB_MODE), _0x5d9989[_0x3f96a9(0x428)]));
            continue;
        case '8':
            await _0x5d9989['vxhBL'](_0x10e28d, _0x5d9989[_0x3f96a9(0x206)]);
            continue;
        case '9':
            await _0x5d9989[_0x3f96a9(0x17a)](_0x10e28d, _0x5d9989[_0x3f96a9(0x19b)](WDB_API + '/' + WDB_MODE, _0x3f96a9(0x427)));
            continue;
        case '10':
            await _0x5d9989[_0x3f96a9(0x2dd)](_0x10e28d, _0x5d9989[_0x3f96a9(0x208)]);
            continue;
        case '11':
            await _0x5d9989[_0x3f96a9(0x2dd)](_0x10e28d, _0x5d9989[_0x3f96a9(0x180)](_0x5d9989[_0x3f96a9(0x2e2)](WDB_API + '/', WDB_MODE), _0x5d9989[_0x3f96a9(0x3e3)]));
            continue;
        case '12':
            await _0x5d9989[_0x3f96a9(0x38e)](_0x10e28d, _0x5d9989[_0x3f96a9(0x41c)]);
            continue;
        case '13':
            await _0x5d9989['dlcIb'](getListCoin);
            continue;
        case '14':
            await _0x1cf05e(_0x3f96a9(0x276));
            continue;
        case '15':
            await _0x10e28d(_0x5d9989[_0x3f96a9(0x34e)]);
            continue;
        }
        break;
    }
}
function toggleNav(_0x55b848) {
    const _0x4ca5a6 = _0x26fdad, _0x2ec3a0 = {
            'tMOpm': _0x4ca5a6(0x1d1),
            'EQugt': _0x4ca5a6(0x3e8),
            'StXjL': _0x4ca5a6(0x263),
            'fbWnF': _0x4ca5a6(0x2bb),
            'mKiEK': _0x4ca5a6(0x2ed),
            'wjAiX': _0x4ca5a6(0x2c5),
            'hyBhS': 'wdbShowMode',
            'kcZWE': _0x4ca5a6(0x243),
            'eTCRM': _0x4ca5a6(0x3cb),
            'NEHmM': function (_0x39000b, _0xdceb17) {
                return _0x39000b === _0xdceb17;
            },
            'DHXnm': _0x4ca5a6(0x2bf),
            'JGHBN': 'wdbShowTips',
            'VrWle': 'wdbShowVariables',
            'ghNcf': _0x4ca5a6(0x35e),
            'ajxHn': _0x4ca5a6(0x1df),
            'mEvmn': _0x4ca5a6(0x30d),
            'WaLaS': _0x4ca5a6(0x3f7),
            'lfRIt': _0x4ca5a6(0x2cd),
            'dPTqK': _0x4ca5a6(0x331),
            'PAEJp': _0x4ca5a6(0x319)
        };
    if (_0x55b848 === _0x4ca5a6(0x2f3)) {
        const _0x5a44f5 = _0x2ec3a0['tMOpm']['split']('|');
        let _0x3fdd18 = 0x0;
        while (!![]) {
            switch (_0x5a44f5[_0x3fdd18++]) {
            case '0':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x250)])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x215)];
                continue;
            case '1':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x1a4)])[_0x4ca5a6(0x3e7)]['display'] = _0x2ec3a0[_0x4ca5a6(0x333)];
                continue;
            case '2':
                document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x2bf))['style'][_0x4ca5a6(0x309)] = _0x4ca5a6(0x2ed);
                continue;
            case '3':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x3da)])[_0x4ca5a6(0x1ef)] = ![];
                continue;
            case '4':
                document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x381))[_0x4ca5a6(0x1ef)] = ![];
                continue;
            case '5':
                document[_0x4ca5a6(0x2b8)]('wdbWrapFunctions')[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x333)];
                continue;
            case '6':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x372)])[_0x4ca5a6(0x1ef)] = !![];
                continue;
            case '7':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x2c0)])['style']['display'] = _0x2ec3a0[_0x4ca5a6(0x333)];
                continue;
            case '8':
                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x2f1)])[_0x4ca5a6(0x1ef)] = ![];
                continue;
            case '9':
                document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x3d6))['disabled'] = ![];
                continue;
            }
            break;
        }
    } else {
        if (_0x2ec3a0[_0x4ca5a6(0x26c)](_0x55b848, _0x4ca5a6(0x25c))) {
            const _0x37b795 = '7|0|3|9|5|8|4|2|6|1'['split']('|');
            let _0x3db8cd = 0x0;
            while (!![]) {
                switch (_0x37b795[_0x3db8cd++]) {
                case '0':
                    document[_0x4ca5a6(0x2b8)](_0x2ec3a0['DHXnm'])[_0x4ca5a6(0x3e7)]['display'] = _0x2ec3a0[_0x4ca5a6(0x215)];
                    continue;
                case '1':
                    document[_0x4ca5a6(0x2b8)](_0x2ec3a0['JGHBN'])['disabled'] = ![];
                    continue;
                case '2':
                    document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x2d0)])['disabled'] = ![];
                    continue;
                case '3':
                    document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x2bb))[_0x4ca5a6(0x3e7)]['display'] = _0x2ec3a0[_0x4ca5a6(0x333)];
                    continue;
                case '4':
                    document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x3da)])['disabled'] = !![];
                    continue;
                case '5':
                    document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x243))['style']['display'] = _0x2ec3a0[_0x4ca5a6(0x333)];
                    continue;
                case '6':
                    document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x3cb))['disabled'] = ![];
                    continue;
                case '7':
                    document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x250)])[_0x4ca5a6(0x3e7)]['display'] = _0x2ec3a0[_0x4ca5a6(0x333)];
                    continue;
                case '8':
                    document['getElementById'](_0x4ca5a6(0x189))[_0x4ca5a6(0x1ef)] = ![];
                    continue;
                case '9':
                    document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x30d))[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x333)];
                    continue;
                }
                break;
            }
        } else {
            if (_0x2ec3a0[_0x4ca5a6(0x26c)](_0x55b848, _0x2ec3a0[_0x4ca5a6(0x209)])) {
                const _0x4067c4 = _0x2ec3a0[_0x4ca5a6(0x161)][_0x4ca5a6(0x354)]('|');
                let _0x267871 = 0x0;
                while (!![]) {
                    switch (_0x4067c4[_0x267871++]) {
                    case '0':
                        document['getElementById'](_0x2ec3a0[_0x4ca5a6(0x2d0)])[_0x4ca5a6(0x1ef)] = !![];
                        continue;
                    case '1':
                        document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x189))['disabled'] = ![];
                        continue;
                    case '2':
                        document['getElementById'](_0x2ec3a0['JGHBN'])[_0x4ca5a6(0x1ef)] = ![];
                        continue;
                    case '3':
                        document['getElementById'](_0x2ec3a0[_0x4ca5a6(0x2c0)])[_0x4ca5a6(0x3e7)]['display'] = _0x4ca5a6(0x2ed);
                        continue;
                    case '4':
                        document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x338)])['style'][_0x4ca5a6(0x309)] = _0x2ec3a0['mKiEK'];
                        continue;
                    case '5':
                        document['getElementById'](_0x4ca5a6(0x3cb))['disabled'] = ![];
                        continue;
                    case '6':
                        document[_0x4ca5a6(0x2b8)](_0x2ec3a0['EQugt'])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x4ca5a6(0x2ed);
                        continue;
                    case '7':
                        document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x2c5))[_0x4ca5a6(0x1ef)] = ![];
                        continue;
                    case '8':
                        document['getElementById']('wdbWrapVariables')['style'][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x215)];
                        continue;
                    case '9':
                        document['getElementById'](_0x2ec3a0['mEvmn'])[_0x4ca5a6(0x3e7)]['display'] = _0x4ca5a6(0x2ed);
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x2ec3a0[_0x4ca5a6(0x26c)](_0x55b848, _0x2ec3a0['WaLaS'])) {
                    const _0x3a941a = _0x2ec3a0[_0x4ca5a6(0x2bc)]['split']('|');
                    let _0x587b80 = 0x0;
                    while (!![]) {
                        switch (_0x3a941a[_0x587b80++]) {
                        case '0':
                            document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x381))[_0x4ca5a6(0x1ef)] = ![];
                            continue;
                        case '1':
                            document[_0x4ca5a6(0x2b8)](_0x2ec3a0['VrWle'])[_0x4ca5a6(0x1ef)] = ![];
                            continue;
                        case '2':
                            document['getElementById'](_0x4ca5a6(0x243))[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0['mKiEK'];
                            continue;
                        case '3':
                            document['getElementById'](_0x2ec3a0['EQugt'])[_0x4ca5a6(0x3e7)]['display'] = _0x4ca5a6(0x2ed);
                            continue;
                        case '4':
                            document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x283)])[_0x4ca5a6(0x3e7)]['display'] = _0x2ec3a0['StXjL'];
                            continue;
                        case '5':
                            document['getElementById'](_0x2ec3a0['DHXnm'])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0['mKiEK'];
                            continue;
                        case '6':
                            document[_0x4ca5a6(0x2b8)](_0x2ec3a0['wjAiX'])['disabled'] = ![];
                            continue;
                        case '7':
                            document['getElementById'](_0x2ec3a0['fbWnF'])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x4ca5a6(0x2ed);
                            continue;
                        case '8':
                            document[_0x4ca5a6(0x2b8)](_0x2ec3a0['hyBhS'])[_0x4ca5a6(0x1ef)] = ![];
                            continue;
                        case '9':
                            document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x3cb))[_0x4ca5a6(0x1ef)] = !![];
                            continue;
                        }
                        break;
                    }
                } else {
                    if (_0x2ec3a0[_0x4ca5a6(0x26c)](_0x55b848, _0x2ec3a0['dPTqK'])) {
                        const _0x35e1b4 = _0x2ec3a0[_0x4ca5a6(0x196)][_0x4ca5a6(0x354)]('|');
                        let _0x46cf01 = 0x0;
                        while (!![]) {
                            switch (_0x35e1b4[_0x46cf01++]) {
                            case '0':
                                document[_0x4ca5a6(0x2b8)]('wdbShowTips')[_0x4ca5a6(0x1ef)] = !![];
                                continue;
                            case '1':
                                document[_0x4ca5a6(0x2b8)](_0x2ec3a0['EQugt'])['style'][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x333)];
                                continue;
                            case '2':
                                document['getElementById'](_0x2ec3a0['hyBhS'])['disabled'] = ![];
                                continue;
                            case '3':
                                document[_0x4ca5a6(0x2b8)](_0x2ec3a0['mEvmn'])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x333)];
                                continue;
                            case '4':
                                document[_0x4ca5a6(0x2b8)](_0x2ec3a0['fbWnF'])[_0x4ca5a6(0x3e7)]['display'] = 'none';
                                continue;
                            case '5':
                                document[_0x4ca5a6(0x2b8)](_0x2ec3a0[_0x4ca5a6(0x2f1)])[_0x4ca5a6(0x1ef)] = ![];
                                continue;
                            case '6':
                                document['getElementById'](_0x4ca5a6(0x2c5))[_0x4ca5a6(0x1ef)] = ![];
                                continue;
                            case '7':
                                document[_0x4ca5a6(0x2b8)](_0x4ca5a6(0x2bf))[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x333)];
                                continue;
                            case '8':
                                document['getElementById'](_0x2ec3a0[_0x4ca5a6(0x2c0)])[_0x4ca5a6(0x3e7)][_0x4ca5a6(0x309)] = _0x2ec3a0[_0x4ca5a6(0x215)];
                                continue;
                            case '9':
                                document[_0x4ca5a6(0x2b8)](_0x2ec3a0['VrWle'])['disabled'] = ![];
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
function toggleShow(_0x32d7a3) {
    const _0x366973 = _0x26fdad, _0x108d95 = {
            'uGPym': function (_0x376e84, _0x296a31) {
                return _0x376e84 === _0x296a31;
            },
            'NtwNX': _0x366973(0x1a8),
            'WPvCw': _0x366973(0x422),
            'cwouO': function (_0x45d318, _0x5cbd6c) {
                return _0x45d318(_0x5cbd6c);
            },
            'ZMsmP': function (_0x504962, _0x2ff43a) {
                return _0x504962(_0x2ff43a);
            },
            'FgDTl': _0x366973(0x419),
            'GNtYf': _0x366973(0x171),
            'DfhEm': function (_0x3457bf, _0x594c26) {
                return _0x3457bf(_0x594c26);
            },
            'vyHNj': function (_0x576492, _0x2ab302) {
                return _0x576492(_0x2ab302);
            },
            'AnpPz': _0x366973(0x18f),
            'IpFxx': function (_0x4c264e, _0x39c6d3) {
                return _0x4c264e(_0x39c6d3);
            },
            'CiqxU': function (_0x3d7b07, _0x4e50c4) {
                return _0x3d7b07(_0x4e50c4);
            },
            'xwtsd': _0x366973(0x17b)
        };
    if (_0x108d95[_0x366973(0x25a)](_0x32d7a3, _0x108d95[_0x366973(0x3e5)]))
        document['getElementById'](_0x108d95[_0x366973(0x3ac)])[_0x366973(0x404)] ? _0x108d95[_0x366973(0x330)](selectFunction, _0x366973(0x23f)) : _0x108d95['ZMsmP'](selectFunction, _0x108d95[_0x366973(0x3bf)]);
    else {
        if (_0x108d95['uGPym'](_0x32d7a3, 'chart'))
            document['getElementById'](_0x108d95[_0x366973(0x1bc)])['checked'] ? _0x108d95[_0x366973(0x20a)](selectFunction, _0x366973(0x241)) : _0x108d95[_0x366973(0x225)](selectFunction, _0x366973(0x2e0));
        else
            _0x32d7a3 === 'history' && (document[_0x366973(0x2b8)](_0x108d95[_0x366973(0x1e2)])['checked'] ? _0x108d95['IpFxx'](selectFunction, 'showhistory') : _0x108d95[_0x366973(0x299)](selectFunction, _0x108d95[_0x366973(0x164)]));
    }
}
function toggleLive(_0x506200) {
    const _0x5f155a = _0x26fdad, _0x9f860b = {
            'ASqpQ': function (_0x56c47b, _0x31fb98) {
                return _0x56c47b === _0x31fb98;
            },
            'GEkjn': 'chart',
            'oJnGz': _0x5f155a(0x179),
            'jybjK': function (_0x4a3ddf, _0x400cd1) {
                return _0x4a3ddf(_0x400cd1);
            },
            'sJUpr': _0x5f155a(0x16e),
            'DDTCl': function (_0x4be932, _0x1fd518) {
                return _0x4be932(_0x1fd518);
            },
            'ERozs': _0x5f155a(0x2a6),
            'QsGus': 'wdbToggleLiveHistory',
            'YYzmb': 'starthistory',
            'fTtgN': _0x5f155a(0x3d5),
            'HqGbS': _0x5f155a(0x2a4),
            'eCLXh': function (_0x83b4d7, _0x57f757) {
                return _0x83b4d7(_0x57f757);
            },
            'DdGBt': _0x5f155a(0x29f),
            'pIsLO': _0x5f155a(0x2f2)
        };
    if (_0x9f860b[_0x5f155a(0x2a8)](_0x506200, _0x9f860b[_0x5f155a(0x370)]))
        document['getElementById'](_0x9f860b[_0x5f155a(0x292)])['checked'] ? _0x9f860b[_0x5f155a(0x387)](selectFunction, _0x9f860b[_0x5f155a(0x410)]) : _0x9f860b[_0x5f155a(0x1da)](selectFunction, _0x9f860b[_0x5f155a(0x217)]);
    else {
        if (_0x9f860b[_0x5f155a(0x2a8)](_0x506200, _0x5f155a(0x38d)))
            document[_0x5f155a(0x2b8)](_0x9f860b[_0x5f155a(0x17c)])[_0x5f155a(0x404)] ? _0x9f860b[_0x5f155a(0x1da)](selectFunction, _0x9f860b[_0x5f155a(0x42c)]) : selectFunction(_0x9f860b['fTtgN']);
        else
            _0x9f860b['ASqpQ'](_0x506200, _0x5f155a(0x25c)) && (document[_0x5f155a(0x2b8)](_0x9f860b[_0x5f155a(0x22a)])[_0x5f155a(0x404)] ? _0x9f860b[_0x5f155a(0x325)](selectFunction, _0x9f860b[_0x5f155a(0x174)]) : _0x9f860b['jybjK'](selectFunction, _0x9f860b['pIsLO']));
    }
}
function selectFunction(_0x5c0ba7) {
    const _0x11b7da = _0x26fdad, _0x278728 = {
            'biKWD': '2|10|14|5|12|3|11|0|8|7|17|9|16|15|4|6|1|13',
            'XzWUO': function (_0xc6276d, _0x5ded63) {
                return _0xc6276d === _0x5ded63;
            },
            'EDwCW': _0x11b7da(0x16e),
            'LpQyI': function (_0x40cb70, _0x2ead5d) {
                return _0x40cb70(_0x2ead5d);
            },
            'bHenQ': _0x11b7da(0x17b),
            'XzchF': _0x11b7da(0x29b),
            'RtAdb': function (_0x51c3dc, _0x42b507) {
                return _0x51c3dc === _0x42b507;
            },
            'ZnNrn': function (_0x30527c) {
                return _0x30527c();
            },
            'swOoh': function (_0x46f34a, _0xd04372) {
                return _0x46f34a === _0xd04372;
            },
            'sRLbv': _0x11b7da(0x293),
            'uzbVa': function (_0x4be29d, _0x3a3432) {
                return _0x4be29d(_0x3a3432);
            },
            'KjbSD': function (_0x46a3f7, _0x3a2539) {
                return _0x46a3f7 === _0x3a2539;
            },
            'eiGHe': _0x11b7da(0x241),
            'oAiHi': function (_0x521b28, _0x4aee3c) {
                return _0x521b28(_0x4aee3c);
            },
            'wKVsg': 'starthistory',
            'AHDbM': 'start',
            'jNpRq': 'stop',
            'onhQy': _0x11b7da(0x2ef),
            'hRSnJ': function (_0x1446ac) {
                return _0x1446ac();
            },
            'yuugl': function (_0x3e9bcb, _0x315517) {
                return _0x3e9bcb === _0x315517;
            },
            'WfQJt': _0x11b7da(0x273),
            'SmbqW': _0x11b7da(0x1ab),
            'yWpKo': function (_0x7e6733, _0x335acc) {
                return _0x7e6733 === _0x335acc;
            },
            'ziaMa': _0x11b7da(0x31f),
            'Dihxy': function (_0x4850b5, _0x56a0b5) {
                return _0x4850b5(_0x56a0b5);
            },
            'MBpyI': _0x11b7da(0x394),
            'SsSZR': function (_0x1e161e, _0x16da46) {
                return _0x1e161e === _0x16da46;
            },
            'xcVJV': function (_0x275146, _0x3364d8) {
                return _0x275146 === _0x3364d8;
            },
            'FKBeL': 'stoplog',
            'EfpKd': function (_0x214715, _0x5e13aa) {
                return _0x214715(_0x5e13aa);
            }
        }, _0x5da2e7 = _0x278728['biKWD']['split']('|');
    let _0x373769 = 0x0;
    while (!![]) {
        switch (_0x5da2e7[_0x373769++]) {
        case '0':
            if (_0x278728['XzWUO'](_0x5c0ba7, _0x278728[_0x11b7da(0x39a)]))
                _0x278728[_0x11b7da(0x18e)](toggleChart, _0x11b7da(0x175));
            continue;
        case '1':
            if (_0x278728[_0x11b7da(0x200)](_0x5c0ba7, _0x278728[_0x11b7da(0x1fe)]))
                _0x278728[_0x11b7da(0x18e)](toggleHistory, _0x278728['XzchF']);
            continue;
        case '2':
            if (_0x278728[_0x11b7da(0x380)](_0x5c0ba7, _0x11b7da(0x1a2)))
                _0x278728[_0x11b7da(0x3ce)](resetall);
            continue;
        case '3':
            if (_0x278728['swOoh'](_0x5c0ba7, _0x278728[_0x11b7da(0x39f)]))
                _0x278728[_0x11b7da(0x3ce)](resetseed);
            continue;
        case '4':
            if (_0x278728[_0x11b7da(0x200)](_0x5c0ba7, 'hidechart'))
                _0x278728[_0x11b7da(0x18e)](toggleChart, _0x278728[_0x11b7da(0x3e0)]);
            continue;
        case '5':
            if (_0x5c0ba7 === _0x11b7da(0x3a3))
                _0x278728[_0x11b7da(0x2e3)](toggleHistory, _0x11b7da(0x1ab));
            continue;
        case '6':
            if (_0x278728['KjbSD'](_0x5c0ba7, _0x278728[_0x11b7da(0x15a)]))
                _0x278728[_0x11b7da(0x429)](toggleChart, _0x11b7da(0x41f));
            continue;
        case '7':
            if (_0x5c0ba7 === _0x278728[_0x11b7da(0x363)])
                _0x278728[_0x11b7da(0x429)](toggleHistory, _0x278728[_0x11b7da(0x28e)]);
            continue;
        case '8':
            if (_0x5c0ba7 === 'stophistory')
                _0x278728[_0x11b7da(0x18e)](toggleHistory, _0x278728['jNpRq']);
            continue;
        case '9':
            if (_0x5c0ba7 === 'startlog')
                toggleLog(_0x278728[_0x11b7da(0x28e)]);
            continue;
        case '10':
            if (_0x278728[_0x11b7da(0x36f)](_0x5c0ba7, _0x278728['onhQy']))
                _0x278728[_0x11b7da(0x27a)](resetstats);
            continue;
        case '11':
            if (_0x5c0ba7 === 'stopchart')
                toggleChart(_0x278728[_0x11b7da(0x3af)]);
            continue;
        case '12':
            if (_0x278728[_0x11b7da(0x30c)](_0x5c0ba7, _0x278728[_0x11b7da(0x21e)]))
                _0x278728[_0x11b7da(0x2e3)](toggleLog, _0x278728[_0x11b7da(0x193)]);
            continue;
        case '13':
            if (_0x5c0ba7 === 'showhistory')
                toggleHistory('show');
            continue;
        case '14':
            if (_0x278728[_0x11b7da(0x23b)](_0x5c0ba7, _0x278728[_0x11b7da(0x32a)]))
                _0x278728[_0x11b7da(0x3f3)](toggleChart, _0x278728['MBpyI']);
            continue;
        case '15':
            if (_0x278728[_0x11b7da(0x34d)](_0x5c0ba7, _0x11b7da(0x23f)))
                toggleStats(_0x11b7da(0x41f));
            continue;
        case '16':
            if (_0x5c0ba7 === _0x11b7da(0x419))
                _0x278728['oAiHi'](toggleStats, _0x278728['XzchF']);
            continue;
        case '17':
            if (_0x278728['xcVJV'](_0x5c0ba7, _0x278728['FKBeL']))
                _0x278728[_0x11b7da(0x3d4)](toggleLog, _0x278728[_0x11b7da(0x3af)]);
            continue;
        }
        break;
    }
}
function toggleMode(_0x22c60c) {
    const _0x470361 = _0x26fdad, _0x3a2373 = {
            'ktDlY': function (_0x39336d, _0x25770d) {
                return _0x39336d === _0x25770d;
            },
            'OLXDL': _0x470361(0x263),
            'tNoSt': _0x470361(0x337),
            'FibAM': _0x470361(0x2ed),
            'vBgUv': 'wdbAdvancedMode',
            'CstFU': 'wdbLUAMode',
            'kjvbk': 'advanced'
        };
    mode = _0x22c60c;
    if (_0x3a2373[_0x470361(0x2c6)](_0x22c60c, 'lua'))
        document[_0x470361(0x2b8)](_0x470361(0x405))[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373['OLXDL'], document[_0x470361(0x2b8)](_0x3a2373[_0x470361(0x1d4)])['style'][_0x470361(0x309)] = _0x3a2373[_0x470361(0x1ea)], document[_0x470361(0x2b8)](_0x3a2373['vBgUv'])[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373[_0x470361(0x1ea)];
    else {
        if (_0x22c60c === 'js')
            document[_0x470361(0x2b8)](_0x3a2373['CstFU'])['style']['display'] = _0x3a2373[_0x470361(0x1ea)], document[_0x470361(0x2b8)](_0x3a2373[_0x470361(0x1d4)])[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373[_0x470361(0x14c)], document[_0x470361(0x2b8)](_0x3a2373['vBgUv'])[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373[_0x470361(0x1ea)];
        else
            _0x22c60c === _0x3a2373[_0x470361(0x40b)] && (document['getElementById'](_0x470361(0x405))[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373['FibAM'], document[_0x470361(0x2b8)](_0x3a2373[_0x470361(0x1d4)])['style'][_0x470361(0x309)] = _0x470361(0x2ed), document[_0x470361(0x2b8)](_0x3a2373[_0x470361(0x2c4)])[_0x470361(0x3e7)][_0x470361(0x309)] = _0x3a2373['OLXDL']);
    }
}
function toggleStats(_0x200cee) {
    const _0x70a2f4 = _0x26fdad, _0x5e6480 = {
            'slRtX': function (_0x1176d3, _0x5c2394) {
                return _0x1176d3 === _0x5c2394;
            },
            'ziCTh': _0x70a2f4(0x29b),
            'KAEUm': _0x70a2f4(0x3c4),
            'myfBs': _0x70a2f4(0x41f),
            'DuoRX': 'flex'
        };
    if (_0x5e6480[_0x70a2f4(0x1b5)](_0x200cee, _0x5e6480[_0x70a2f4(0x2f8)]))
        document[_0x70a2f4(0x2b8)](_0x5e6480['KAEUm'])['style'][_0x70a2f4(0x309)] = _0x70a2f4(0x2ed);
    else
        _0x5e6480[_0x70a2f4(0x1b5)](_0x200cee, _0x5e6480[_0x70a2f4(0x24e)]) && (document[_0x70a2f4(0x2b8)](_0x5e6480['KAEUm'])['style']['display'] = _0x5e6480['DuoRX']);
}
function toggleChart(_0x56c6b0) {
    const _0x3516fd = _0x26fdad, _0x2930d0 = {
            'Ztufv': function (_0x54057a, _0x165f1c) {
                return _0x54057a === _0x165f1c;
            },
            'ZKcwq': _0x3516fd(0x29b),
            'UracN': 'wdbChart',
            'WQvuy': 'none',
            'irSew': 'wdbWrapHistory',
            'LUBQq': _0x3516fd(0x37e),
            'aAoAR': function (_0x588cca, _0x1cf7a9) {
                return _0x588cca === _0x1cf7a9;
            },
            'AJoGg': _0x3516fd(0x41f),
            'uQYVy': _0x3516fd(0x263),
            'iEBIo': _0x3516fd(0x3d7),
            'USdlR': function (_0x5309d8, _0x52007d) {
                return _0x5309d8 === _0x52007d;
            },
            'ZJcHQ': 'stop',
            'YgTOc': 'start',
            'ylzhC': _0x3516fd(0x394),
            'WcHph': function (_0x32e553) {
                return _0x32e553();
            }
        };
    if (_0x2930d0[_0x3516fd(0x40a)](_0x56c6b0, _0x2930d0[_0x3516fd(0x1c1)]))
        document[_0x3516fd(0x2b8)](_0x2930d0['UracN'])[_0x3516fd(0x3e7)][_0x3516fd(0x309)] = _0x2930d0['WQvuy'], document[_0x3516fd(0x2b8)](_0x2930d0[_0x3516fd(0x34b)])[_0x3516fd(0x3e7)][_0x3516fd(0x425)] = _0x2930d0[_0x3516fd(0x1ee)];
    else {
        if (_0x2930d0['aAoAR'](_0x56c6b0, _0x2930d0['AJoGg']))
            document['getElementById']('wdbChart')['style'][_0x3516fd(0x309)] = _0x2930d0[_0x3516fd(0x2eb)], document[_0x3516fd(0x2b8)](_0x2930d0['irSew'])[_0x3516fd(0x3e7)][_0x3516fd(0x425)] = _0x2930d0[_0x3516fd(0x2a5)];
        else {
            if (_0x2930d0['USdlR'](_0x56c6b0, _0x2930d0[_0x3516fd(0x3bb)]))
                stopChart = !![];
            else {
                if (_0x56c6b0 === _0x2930d0['YgTOc'])
                    stopChart = ![];
                else
                    _0x2930d0[_0x3516fd(0x256)](_0x56c6b0, _0x2930d0[_0x3516fd(0x355)]) && (betsChart = 0x0, profitChart = 0x0, _0x2930d0[_0x3516fd(0x248)](drawChart));
            }
        }
    }
}
function toggleHistory(_0x57aaf6) {
    const _0x39a729 = _0x26fdad, _0x821b38 = {
            'iRgga': function (_0xa8e489, _0x5eae30) {
                return _0xa8e489 === _0x5eae30;
            },
            'NQrYn': 'hide',
            'RAKhO': _0x39a729(0x2ed),
            'NYSRK': _0x39a729(0x37e),
            'TulMf': _0x39a729(0x3bd),
            'Ebjrf': _0x39a729(0x2d4),
            'CfLvV': '190px',
            'WGjUH': _0x39a729(0x192),
            'YmGbB': function (_0x463a7e, _0x188d63) {
                return _0x463a7e === _0x188d63;
            },
            'VUQXQ': _0x39a729(0x175),
            'AFiJm': function (_0x39e1fd, _0x4b544d) {
                return _0x39e1fd === _0x4b544d;
            },
            'KXhOq': _0x39a729(0x22f)
        };
    if (_0x821b38[_0x39a729(0x3a0)](_0x57aaf6, _0x821b38[_0x39a729(0x1ce)]))
        document[_0x39a729(0x2b8)](_0x39a729(0x3bd))[_0x39a729(0x3e7)][_0x39a729(0x309)] = _0x821b38['RAKhO'], document['getElementById'](_0x39a729(0x2d4))[_0x39a729(0x3e7)][_0x39a729(0x425)] = _0x821b38[_0x39a729(0x16d)];
    else {
        if (_0x821b38[_0x39a729(0x3a0)](_0x57aaf6, _0x39a729(0x41f)))
            document[_0x39a729(0x2b8)](_0x821b38[_0x39a729(0x375)])['style'][_0x39a729(0x309)] = 'block', document[_0x39a729(0x2b8)](_0x821b38[_0x39a729(0x350)])[_0x39a729(0x3e7)]['height'] = _0x821b38[_0x39a729(0x30b)];
        else {
            if (_0x57aaf6 === _0x821b38['WGjUH'])
                stopHistory = !![];
            else {
                if (_0x821b38[_0x39a729(0x2b1)](_0x57aaf6, _0x821b38[_0x39a729(0x3f6)]))
                    stopHistory = ![];
                else
                    _0x821b38[_0x39a729(0x1ae)](_0x57aaf6, _0x39a729(0x1ab)) && (document[_0x39a729(0x2b8)](_0x821b38[_0x39a729(0x2d5)])['innerHTML'] = '');
            }
        }
    }
}
function toggleLog(_0x2cd541) {
    const _0x187719 = _0x26fdad, _0x236e9e = {
            'JAbuy': function (_0x58226a, _0x370ec7) {
                return _0x58226a === _0x370ec7;
            },
            'XMLBP': _0x187719(0x192),
            'EYPFB': _0x187719(0x175),
            'duRft': function (_0x25965e, _0x396813) {
                return _0x25965e === _0x396813;
            },
            'paJiB': _0x187719(0x1ab),
            'kLlky': _0x187719(0x31c)
        };
    if (_0x236e9e[_0x187719(0x295)](_0x2cd541, _0x236e9e['XMLBP']))
        stopLog = !![];
    else {
        if (_0x2cd541 === _0x236e9e[_0x187719(0x14b)])
            stopLog = ![];
        else
            _0x236e9e[_0x187719(0x31e)](_0x2cd541, _0x236e9e['paJiB']) && (document[_0x187719(0x2b8)](_0x236e9e['kLlky'])[_0x187719(0x38c)] = '');
    }
}
async function handleAdvanced() {
    const _0x10c0cd = _0x26fdad, _0x23c5dd = {
            'ieqoR': _0x10c0cd(0x3a5),
            'kddkV': _0x10c0cd(0x187),
            'sqQpA': function (_0x37ad0f, _0x3ebb8f) {
                return _0x37ad0f >= _0x3ebb8f;
            },
            'LOLJy': function (_0x1b5b00) {
                return _0x1b5b00();
            },
            'uRmnE': function (_0x2975ae, _0x3810b8) {
                return _0x2975ae(_0x3810b8);
            },
            'rMcqr': function (_0x2b0004, _0x39e060) {
                return _0x2b0004 + _0x39e060;
            },
            'arOCW': function (_0x3e91fa, _0x1c50c3) {
                return _0x3e91fa + _0x1c50c3;
            },
            'AAsRR': 'Stop\x20on\x20',
            'HjjcI': _0x10c0cd(0x3d9),
            'Tidwm': 'advancedChanceOnWinCheck',
            'yQFsz': function (_0x126957, _0x599160) {
                return _0x126957(_0x599160);
            },
            'vWBvj': _0x10c0cd(0x2f5),
            'gcSrC': function (_0x3499e1) {
                return _0x3499e1();
            },
            'qzZkg': _0x10c0cd(0x388),
            'OKmtZ': function (_0x56dc34, _0x1cf49c) {
                return _0x56dc34(_0x1cf49c);
            },
            'tdkzU': function (_0xf83c7, _0x359f89) {
                return _0xf83c7(_0x359f89);
            },
            'dLQYb': _0x10c0cd(0x2d7),
            'Mmkrc': _0x10c0cd(0x198),
            'kmwrX': 'advancedMultiOnLoseCheck',
            'mOEtz': _0x10c0cd(0x1de),
            'DTbYM': _0x10c0cd(0x413),
            'ROZNJ': function (_0xe42b34, _0x42e101) {
                return _0xe42b34(_0x42e101);
            },
            'kOzMZ': _0x10c0cd(0x1f3),
            'gclYz': function (_0x179433, _0x55ee74) {
                return _0x179433 >= _0x55ee74;
            },
            'fViIN': function (_0x25b4d2, _0x50bb43) {
                return _0x25b4d2 + _0x50bb43;
            },
            'KQPUg': _0x10c0cd(0x379),
            'lcubl': 'advancedChanceOnLose',
            'KSXin': function (_0x2afbfc, _0x362862) {
                return _0x2afbfc(_0x362862);
            },
            'lJVUI': _0x10c0cd(0x15d),
            'NCjUQ': function (_0x32ca6a, _0x1a9a25) {
                return _0x32ca6a % _0x1a9a25;
            },
            'ufoUH': _0x10c0cd(0x1c4),
            'aMGie': function (_0x44e9cb, _0x3a1a9a) {
                return _0x44e9cb > _0x3a1a9a;
            },
            'lmNFb': function (_0x3f0a7e, _0xf579bf) {
                return _0x3f0a7e >= _0xf579bf;
            },
            'coqof': function (_0x42853, _0x3cc86b) {
                return _0x42853 + _0x3cc86b;
            },
            'QfXyX': function (_0x5802f2, _0x2206cd) {
                return _0x5802f2 <= _0x2206cd;
            },
            'wHIyc': _0x10c0cd(0x3c6),
            'poGvO': _0x10c0cd(0x360),
            'WdPjV': 'advancedStopRollNumberCheck',
            'zHiCg': _0x10c0cd(0x356),
            'HGLTH': function (_0x5c4647, _0xb9c9ba) {
                return _0x5c4647(_0xb9c9ba);
            },
            'zZnKQ': _0x10c0cd(0x2db),
            'KomBC': function (_0xa1bcb3, _0x2a8cf4) {
                return _0xa1bcb3 >= _0x2a8cf4;
            },
            'lbnrX': _0x10c0cd(0x33a),
            'uZjXs': _0x10c0cd(0x22e),
            'GLJOk': 'stopOnProfitCheck',
            'tWiKd': _0x10c0cd(0x236),
            'WahVK': _0x10c0cd(0x2be),
            'tkMbU': 'advancedBetHighOnWin',
            'WlzKs': function (_0x799a7e, _0x3ed276) {
                return _0x799a7e === _0x3ed276;
            },
            'UUbAA': function (_0x218114, _0xeb5711) {
                return _0x218114 * _0xeb5711;
            },
            'lOGeN': function (_0x7165a3, _0xb227d3) {
                return _0x7165a3(_0xb227d3);
            },
            'ZRkew': function (_0x3a546e, _0x1389a8) {
                return _0x3a546e % _0x1389a8;
            },
            'Wkaqx': function (_0x55c6ec, _0x8d59a9) {
                return _0x55c6ec % _0x8d59a9;
            },
            'WRhlK': function (_0x46ab53, _0x41f7a9) {
                return _0x46ab53 === _0x41f7a9;
            },
            'LBsTw': function (_0x2dedd2, _0x16e9a4) {
                return _0x2dedd2 * _0x16e9a4;
            },
            'GCLSo': function (_0x92f19, _0x28edbc) {
                return _0x92f19 === _0x28edbc;
            },
            'lITHA': function (_0x27f6d3) {
                return _0x27f6d3();
            },
            'nQHrL': function (_0x5b7219, _0x26b7b7) {
                return _0x5b7219(_0x26b7b7);
            },
            'pRcjR': _0x10c0cd(0x3ba),
            'zsBTr': _0x10c0cd(0x341),
            'GylPm': function (_0xc35af3, _0x143cf8) {
                return _0xc35af3(_0x143cf8);
            },
            'KHUzJ': _0x10c0cd(0x20b),
            'ACGyE': _0x10c0cd(0x1d5),
            'QqwCP': _0x10c0cd(0x33f),
            'EFRog': function (_0x4cc055, _0x276fb1) {
                return _0x4cc055(_0x276fb1);
            },
            'JJYxv': _0x10c0cd(0x211),
            'rCtTL': _0x10c0cd(0x165),
            'jiDYK': _0x10c0cd(0x1b1)
        }, _0x1703be = '31|3|23|32|16|12|2|7|19|10|8|24|6|34|13|29|5|15|22|17|28|26|14|18|11|21|30|9|1|25|4|33|20|27|0'[_0x10c0cd(0x354)]('|');
    let _0x13b4b7 = 0x0;
    while (!![]) {
        switch (_0x1703be[_0x13b4b7++]) {
        case '0':
            return _0x23c5dd['ieqoR'];
        case '1':
            if (stopOnLoseCheck) {
                stopOnLose = Number(document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x1ac)])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd['sqQpA'](losestreak, stopOnLose))
                    _0x23c5dd[_0x10c0cd(0x3b5)](stop), _0x23c5dd[_0x10c0cd(0x3e4)](log, _0x23c5dd[_0x10c0cd(0x15c)](_0x23c5dd[_0x10c0cd(0x169)](_0x23c5dd[_0x10c0cd(0x426)], stopOnLose), _0x10c0cd(0x311)));
            }
            continue;
        case '2':
            chanceOnLoseBets = _0x23c5dd[_0x10c0cd(0x3e4)](Number, document['getElementById'](_0x23c5dd[_0x10c0cd(0x2f4)])[_0x10c0cd(0x1c8)]);
            continue;
        case '3':
            chanceOnWinCheck = document['getElementById'](_0x23c5dd[_0x10c0cd(0x34a)])[_0x10c0cd(0x404)];
            continue;
        case '4':
            if (stopOnProfitCheck) {
                stopOnProfit = _0x23c5dd[_0x10c0cd(0x3a6)](Number, document['getElementById'](_0x23c5dd['vWBvj'])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x2b9)](profit, stopOnProfit))
                    _0x23c5dd['gcSrC'](stop), log(_0x23c5dd[_0x10c0cd(0x15c)](_0x23c5dd['qzZkg'], stopOnProfit));
            }
            continue;
        case '5':
            if (betHighOnProfitCheck) {
                betHighOnProfit = _0x23c5dd[_0x10c0cd(0x3fe)](Number, document['getElementById']('advancedBetHighOnProfit')[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x2b9)](profit, betHighOnProfit))
                    bethigh = !bethigh;
            }
            continue;
        case '6':
            multiOnLoseBets = _0x23c5dd[_0x10c0cd(0x399)](Number, document['getElementById'](_0x23c5dd[_0x10c0cd(0x269)])['value']);
            continue;
        case '7':
            multiOnWinCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x22b)])[_0x10c0cd(0x404)];
            continue;
        case '8':
            multiOnLoseCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd['kmwrX'])[_0x10c0cd(0x404)];
            continue;
        case '9':
            stopOnLoseCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd['mOEtz'])[_0x10c0cd(0x404)];
            continue;
        case '10':
            multiOnWinBets = _0x23c5dd[_0x10c0cd(0x3a6)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd['DTbYM'])[_0x10c0cd(0x1c8)]);
            continue;
        case '11':
            if (stopOnBetsCheck) {
                stopOnBets = _0x23c5dd[_0x10c0cd(0x191)](Number, document['getElementById'](_0x23c5dd[_0x10c0cd(0x158)])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x1bb)](bets, stopOnBets))
                    stop(), log(_0x23c5dd[_0x10c0cd(0x1af)](_0x23c5dd[_0x10c0cd(0x1af)](_0x10c0cd(0x345), stopOnBets), _0x23c5dd['KQPUg']));
            }
            continue;
        case '12':
            chanceOnLoseCheck ? chanceOnLose = _0x23c5dd['OKmtZ'](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3fc)])[_0x10c0cd(0x1c8)]) : chanceOnLose = chance;
            continue;
        case '13':
            if (betHighOnBetCheck) {
                betHighOnBet = _0x23c5dd['KSXin'](Number, document['getElementById'](_0x23c5dd[_0x10c0cd(0x407)])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x1ff)](bets, betHighOnBet) === 0x0)
                    bethigh = !bethigh;
            }
            continue;
        case '14':
            if (stopStreakCheck) {
                stopStreak = _0x23c5dd[_0x10c0cd(0x191)](Number, document['getElementById'](_0x23c5dd['ufoUH'])['value']);
                if (_0x23c5dd['aMGie'](stopStreak, 0x0)) {
                    if (_0x23c5dd['lmNFb'](currentstreak, stopStreak))
                        _0x23c5dd['gcSrC'](stop), _0x23c5dd[_0x10c0cd(0x257)](log, _0x23c5dd[_0x10c0cd(0x1d7)](_0x10c0cd(0x3c6), stopStreak));
                } else {
                    if (_0x23c5dd[_0x10c0cd(0x194)](currentstreak, stopStreak))
                        _0x23c5dd[_0x10c0cd(0x201)](stop), log(_0x23c5dd[_0x10c0cd(0x2d2)] + stopStreak);
                }
            }
            continue;
        case '15':
            resetstatsOnProfitCheck = document[_0x10c0cd(0x2b8)]('resetstatsOnProfitCheck')[_0x10c0cd(0x404)];
            continue;
        case '16':
            chanceOnLoseCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3c7)])[_0x10c0cd(0x404)];
            continue;
        case '17':
            stopRollNumberCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd['WdPjV'])['checked'];
            continue;
        case '18':
            stopOnBetsCheck = document['getElementById'](_0x23c5dd[_0x10c0cd(0x40f)])['checked'];
            continue;
        case '19':
            multiOnWinCheck ? multiOnWin = _0x23c5dd['yQFsz'](Number, document[_0x10c0cd(0x2b8)](_0x10c0cd(0x38f))[_0x10c0cd(0x1c8)]) : multiOnWin = 0x1;
            continue;
        case '20':
            if (stopOnBalanceCheck) {
                stopOnBalance = _0x23c5dd[_0x10c0cd(0x2b2)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x153)])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x1bd)](balance, stopOnBalance))
                    stop(), _0x23c5dd[_0x10c0cd(0x2b2)](log, _0x10c0cd(0x177) + stopOnBalance);
            }
            continue;
        case '21':
            stopOnWinsCheck = document[_0x10c0cd(0x2b8)](_0x10c0cd(0x232))[_0x10c0cd(0x404)];
            continue;
        case '22':
            if (resetstatsOnProfitCheck) {
                resetstatsOnProfit = _0x23c5dd['uRmnE'](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3a1)])[_0x10c0cd(0x1c8)]);
                if (profit >= resetstatsOnProfit)
                    _0x23c5dd[_0x10c0cd(0x201)](resetstats);
            }
            continue;
        case '23':
            chanceOnWinCheck ? chanceOnWin = _0x23c5dd[_0x10c0cd(0x191)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x2b7)])[_0x10c0cd(0x1c8)]) : chanceOnWin = chance;
            continue;
        case '24':
            multiOnLoseCheck ? multiOnLose = _0x23c5dd[_0x10c0cd(0x3e4)](Number, document[_0x10c0cd(0x2b8)](_0x10c0cd(0x3be))[_0x10c0cd(0x1c8)]) : multiOnLose = 0x1;
            continue;
        case '25':
            stopOnProfitCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3d3)])['checked'];
            continue;
        case '26':
            stopStreakCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x301)])['checked'];
            continue;
        case '27':
            if (win) {
                betHighOnWinCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x271)])['checked'];
                if (betHighOnWinCheck) {
                    betHighOnWin = _0x23c5dd[_0x10c0cd(0x3a6)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3eb)])[_0x10c0cd(0x1c8)]);
                    if (_0x23c5dd[_0x10c0cd(0x2ba)](winstreak % betHighOnWin, 0x0))
                        bethigh = !bethigh;
                }
                if (_0x23c5dd['NCjUQ'](winstreak, chanceOnWinBets) === 0x0)
                    chance = chanceOnWin;
                if (multiOnWinCheck) {
                    if (_0x23c5dd['WlzKs'](_0x23c5dd[_0x10c0cd(0x1ff)](winstreak, multiOnWinBets), 0x0))
                        nextbet = _0x23c5dd['UUbAA'](previousbet, multiOnWin);
                } else
                    nextbet = basebet;
            } else {
                betHighOnLoseCheck = document[_0x10c0cd(0x2b8)](_0x10c0cd(0x1e0))[_0x10c0cd(0x404)];
                if (betHighOnLoseCheck) {
                    betHighOnLose = _0x23c5dd[_0x10c0cd(0x228)](Number, document[_0x10c0cd(0x2b8)](_0x10c0cd(0x1c6))[_0x10c0cd(0x1c8)]);
                    if (_0x23c5dd['ZRkew'](losestreak, betHighOnLose) === 0x0)
                        bethigh = !bethigh;
                }
                if (_0x23c5dd[_0x10c0cd(0x2ba)](_0x23c5dd[_0x10c0cd(0x1e5)](losestreak, chanceOnLoseBets), 0x0))
                    chance = chanceOnLose;
                if (multiOnLoseCheck) {
                    if (_0x23c5dd[_0x10c0cd(0x334)](losestreak % multiOnLoseBets, 0x0))
                        nextbet = _0x23c5dd['LBsTw'](previousbet, multiOnLose);
                } else
                    nextbet = basebet;
            }
            continue;
        case '28':
            if (stopRollNumberCheck) {
                stopRollNumber = _0x23c5dd[_0x10c0cd(0x3e4)](Number, document[_0x10c0cd(0x2b8)](_0x10c0cd(0x367))['value']);
                if (_0x23c5dd[_0x10c0cd(0x2a7)](lastBet[_0x10c0cd(0x41d)], stopRollNumber))
                    _0x23c5dd[_0x10c0cd(0x343)](stop), _0x23c5dd[_0x10c0cd(0x1db)](log, _0x23c5dd[_0x10c0cd(0x15c)](_0x23c5dd['pRcjR'], stopRollNumber));
            }
            continue;
        case '29':
            betHighOnProfitCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x398)])[_0x10c0cd(0x404)];
            continue;
        case '30':
            if (stopOnWinsCheck) {
                stopOnWins = _0x23c5dd[_0x10c0cd(0x212)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x1b2)])[_0x10c0cd(0x1c8)]);
                if (_0x23c5dd[_0x10c0cd(0x2b9)](winstreak, stopOnWins))
                    _0x23c5dd[_0x10c0cd(0x201)](stop), _0x23c5dd[_0x10c0cd(0x212)](log, _0x23c5dd['arOCW']('Stop\x20on\x20' + stopOnWins, _0x23c5dd[_0x10c0cd(0x254)]));
            }
            continue;
        case '31':
            chance = _0x23c5dd[_0x10c0cd(0x3a6)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x213)])[_0x10c0cd(0x1c8)]);
            continue;
        case '32':
            chanceOnWinBets = _0x23c5dd[_0x10c0cd(0x3a7)](Number, document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x207)])[_0x10c0cd(0x1c8)]);
            continue;
        case '33':
            stopOnBalanceCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x3dd)])[_0x10c0cd(0x404)];
            continue;
        case '34':
            betHighOnBetCheck = document[_0x10c0cd(0x2b8)](_0x23c5dd[_0x10c0cd(0x222)])[_0x10c0cd(0x404)];
            continue;
        }
        break;
    }
}
function changeCoin() {
    const _0x3948ef = _0x26fdad, _0x172b18 = {
            'JnBgq': _0x3948ef(0x307),
            'LYFSy': function (_0x4e9112, _0x4809ca) {
                return _0x4e9112(_0x4809ca);
            },
            'mXwyp': function (_0x543a06) {
                return _0x543a06();
            }
        };
    coin = document[_0x3948ef(0x2b8)](_0x172b18['JnBgq'])[_0x3948ef(0x1c8)], currency = _0x172b18[_0x3948ef(0x246)](String, coin)[_0x3948ef(0x15e)](), fengari[_0x3948ef(0x374)]('currency=\x22' + currency + '\x22')(), _0x172b18[_0x3948ef(0x25f)](checkbalance);
}
async function handleStats() {
    const _0x442ac4 = _0x26fdad, _0x551aef = {
            'hwNpJ': function (_0x13b054) {
                return _0x13b054();
            },
            'Lpktc': function (_0x33e4f6, _0x29a410) {
                return _0x33e4f6 === _0x29a410;
            },
            'YqoPe': function (_0x385821, _0xeb517f) {
                return _0x385821 === _0xeb517f;
            },
            'lvypZ': 'advanced',
            'ABAOZ': function (_0x1c5c93, _0x4ddfb1) {
                return _0x1c5c93 && _0x4ddfb1;
            },
            'ZKZfL': function (_0x47de83) {
                return _0x47de83();
            },
            'ONcjL': function (_0xc4c381, _0x4bd100) {
                return _0xc4c381(_0x4bd100);
            },
            'hdPFk': function (_0x380c0e, _0x2a00b8) {
                return _0x380c0e < _0x2a00b8;
            },
            'KzdSJ': function (_0x16f66, _0x59646a) {
                return _0x16f66 === _0x59646a;
            },
            'YygMk': _0x442ac4(0x202),
            'cFzkj': function (_0x3d4f7e, _0x438e20) {
                return _0x3d4f7e > _0x438e20;
            },
            'tdxiK': _0x442ac4(0x1ec),
            'hCwcZ': 'green',
            'wfkJw': '5|2|1|0|4|3',
            'Jjxer': function (_0x325019, _0x29d1a4) {
                return _0x325019 > _0x29d1a4;
            },
            'ofGBu': function (_0x75a9a0, _0x31c013) {
                return _0x75a9a0 - _0x31c013;
            },
            'BZWtg': function (_0x2f48d7, _0xb0d2a6) {
                return _0x2f48d7 < _0xb0d2a6;
            }
        };
    bets++, betsChart++, wdbSpeed[_0x442ac4(0x1d6)]++, lastBet['target'] = target, lastBet[_0x442ac4(0x20d)] = target, lastBet['result'] = result, lastBet['Result'] = result, lastBet['profit'] = currentprofit, lastBet['Profit'] = currentprofit, lastBet['Nonce'] = lastBet[_0x442ac4(0x25e)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, profitChart += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    if (game === _0x442ac4(0x385))
        bethigh ? lastBet[_0x442ac4(0x41d)] > lastBet['target'] ? win = !![] : win = ![] : _0x551aef[_0x442ac4(0x151)](lastBet['result'], lastBet[_0x442ac4(0x1e6)]) ? win = !![] : win = ![];
    else {
        if (_0x551aef[_0x442ac4(0x339)](game, _0x551aef[_0x442ac4(0x352)]))
            _0x551aef['cFzkj'](lastBet[_0x442ac4(0x2f6)], 0x0) ? win = !![] : win = ![];
        else
            lastBet['result'] >= lastBet['target'] ? win = !![] : win = ![];
    }
    if (win) {
        const _0x558a37 = _0x551aef[_0x442ac4(0x412)][_0x442ac4(0x354)]('|');
        let _0x5bdd91 = 0x0;
        while (!![]) {
            switch (_0x558a37[_0x5bdd91++]) {
            case '0':
                winstreak++;
                continue;
            case '1':
                losestreak = 0x0;
                continue;
            case '2':
                wins++;
                continue;
            case '3':
                color = _0x551aef[_0x442ac4(0x382)];
                continue;
            case '4':
                currentstreak = winstreak;
                continue;
            }
            break;
        }
    } else {
        const _0x5c263d = _0x551aef[_0x442ac4(0x373)][_0x442ac4(0x354)]('|');
        let _0xd2c2fb = 0x0;
        while (!![]) {
            switch (_0x5c263d[_0xd2c2fb++]) {
            case '0':
                winstreak = 0x0;
                continue;
            case '1':
                losestreak++;
                continue;
            case '2':
                losses++;
                continue;
            case '3':
                if (_0x551aef[_0x442ac4(0x1f2)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '4':
                currentstreak = _0x551aef[_0x442ac4(0x27f)](0x0, losestreak);
                continue;
            case '5':
                color = 'red';
                continue;
            }
            break;
        }
    }
    if (nextbet > maxBetAmount)
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (_0x551aef[_0x442ac4(0x1f2)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x551aef[_0x442ac4(0x151)](balance, minbalance))
        minbalance = balance;
    if (_0x551aef[_0x442ac4(0x1f2)](balance, maxbalance))
        maxbalance = balance;
    if (_0x551aef['BZWtg'](profit, minprofit))
        minprofit = profit;
    if (_0x551aef[_0x442ac4(0x1f2)](profit, maxprofit))
        maxprofit = profit;
    const _0x4d78b5 = await updateStats(), _0x4db098 = await _0x551aef[_0x442ac4(0x252)](updateChart), _0x44c242 = await _0x551aef[_0x442ac4(0x2f0)](updateHistory);
    Promise[_0x442ac4(0x317)]([
        _0x4d78b5,
        _0x4db098,
        _0x44c242
    ])[_0x442ac4(0x2fe)](async _0x56fac5 => {
        const _0x456b44 = _0x442ac4;
        try {
            if (mode === 'lua')
                await _0x551aef[_0x456b44(0x2f0)](updateLua);
            else {
                if (_0x551aef['Lpktc'](mode, 'js'))
                    await _0x551aef['hwNpJ'](dobet);
                else
                    _0x551aef['YqoPe'](mode, _0x551aef[_0x456b44(0x230)]) && await _0x551aef['hwNpJ'](handleAdvanced);
            }
            if (_0x551aef[_0x456b44(0x305)](win, sOW))
                return _0x551aef[_0x456b44(0x2f0)](stop);
            if (run)
                return _0x551aef[_0x456b44(0x2f0)](playBet);
        } catch (_0xac266c) {
            _0x551aef[_0x456b44(0x252)](stop), _0x551aef['ONcjL'](log, _0xac266c);
        }
    });
}
async function updateStats() {
    const _0xf2d22b = _0x26fdad, _0x4d7f96 = {
            'ofpCW': _0xf2d22b(0x3b8),
            'iMwhQ': _0xf2d22b(0x400),
            'LuqOh': _0xf2d22b(0x1d8),
            'HTYIJ': function (_0x1dbb8a, _0x46d179) {
                return _0x1dbb8a === _0x46d179;
            },
            'MdScN': function (_0x10fada, _0x3ff4f3) {
                return _0x10fada < _0x3ff4f3;
            },
            'UKJNS': function (_0x1fc5f1, _0x140f26) {
                return _0x1fc5f1 > _0x140f26;
            },
            'IabVJ': _0xf2d22b(0x282),
            'KStCi': _0xf2d22b(0x329),
            'XMzEJ': _0xf2d22b(0x1b6),
            'NfZtm': _0xf2d22b(0x1fa),
            'AmFoX': _0xf2d22b(0x21c),
            'LVriQ': _0xf2d22b(0x199),
            'gbDXT': _0xf2d22b(0x33b),
            'firTl': 'wdbLosses',
            'JEeKp': _0xf2d22b(0x186),
            'TXoES': 'wdbMinBalance',
            'wTEhA': _0xf2d22b(0x40d),
            'famNt': _0xf2d22b(0x251),
            'gPrDa': _0xf2d22b(0x214),
            'AmGTo': function (_0x14ca26, _0x35b4f0) {
                return _0x14ca26 / _0x35b4f0;
            },
            'aEbJA': function (_0x4bd765, _0x1b8c25) {
                return _0x4bd765 * _0x1b8c25;
            },
            'CtkjZ': function (_0x57c869, _0x26bb09) {
                return _0x57c869 + _0x26bb09;
            },
            'xQtjl': function (_0x5cc43c, _0x1f7893) {
                return _0x5cc43c === _0x1f7893;
            },
            'pZAEl': function (_0x454360, _0xeb816) {
                return _0x454360(_0xeb816);
            },
            'tOEFp': _0xf2d22b(0x2de),
            'iheCp': function (_0x5d0a39, _0x19d1aa) {
                return _0x5d0a39 * _0x19d1aa;
            },
            'ukYQi': function (_0xb8b1b1, _0x19cbfc) {
                return _0xb8b1b1 / _0x19cbfc;
            },
            'JrWJs': function (_0xf53750, _0x3c08c9) {
                return _0xf53750 * _0x3c08c9;
            },
            'QydzB': function (_0x6589d9, _0x1a8a16) {
                return _0x6589d9 === _0x1a8a16;
            },
            'Tbjej': _0xf2d22b(0x24a),
            'IwfYH': 'wdbWrapPercentProfit',
            'ckwdB': _0xf2d22b(0x26d),
            'nemcy': 'updateStats\x20ok'
        }, _0x4e34d0 = profit === 0x0 ? darkMode ? _0x4d7f96['ofpCW'] : _0xf2d22b(0x282) : profit < 0x0 ? _0x4d7f96[_0xf2d22b(0x2ce)] : _0x4d7f96[_0xf2d22b(0x2d6)], _0x4a3de6 = _0x4d7f96[_0xf2d22b(0x401)](currentstreak, 0x0) ? darkMode ? _0x4d7f96[_0xf2d22b(0x33c)] : _0xf2d22b(0x282) : _0x4d7f96[_0xf2d22b(0x1f9)](currentstreak, 0x0) ? _0x4d7f96[_0xf2d22b(0x2ce)] : _0x4d7f96[_0xf2d22b(0x2d6)], _0x477c0d = maxwinstreak > 0x0 ? _0x4d7f96[_0xf2d22b(0x2d6)] : _0xf2d22b(0x282);
    document[_0xf2d22b(0x2b8)](_0xf2d22b(0x324))[_0xf2d22b(0x3e7)][_0xf2d22b(0x3f1)] = _0x477c0d;
    const _0x22e026 = _0x4d7f96[_0xf2d22b(0x26a)](maxlosestreak, 0x0) ? _0x4d7f96['iMwhQ'] : _0x4d7f96[_0xf2d22b(0x1cd)];
    document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x159)])[_0xf2d22b(0x3e7)][_0xf2d22b(0x3f1)] = _0x22e026, document[_0xf2d22b(0x2b8)](_0x4d7f96['XMzEJ'])[_0xf2d22b(0x284)] = wagered[_0xf2d22b(0x285)](decimalAmountView), document[_0xf2d22b(0x2b8)](_0xf2d22b(0x1b3))[_0xf2d22b(0x284)] = balance['toFixed'](decimalAmountView), document[_0xf2d22b(0x2b8)](_0xf2d22b(0x1fa))[_0xf2d22b(0x3e7)][_0xf2d22b(0x3f1)] = _0x4e34d0, document['getElementById'](_0x4d7f96[_0xf2d22b(0x255)])[_0xf2d22b(0x284)] = profit[_0xf2d22b(0x285)](decimalAmountView), document[_0xf2d22b(0x2b8)](_0xf2d22b(0x289))[_0xf2d22b(0x284)] = maxBetAmount[_0xf2d22b(0x285)](decimalAmountView), document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x392)])[_0xf2d22b(0x284)] = maxLosseAmount['toFixed'](decimalAmountView), document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x3f9)])[_0xf2d22b(0x284)] = bets, document[_0xf2d22b(0x2b8)](_0x4d7f96['gbDXT'])[_0xf2d22b(0x284)] = wins, document['getElementById'](_0x4d7f96[_0xf2d22b(0x27e)])[_0xf2d22b(0x284)] = losses, document['getElementById'](_0x4d7f96[_0xf2d22b(0x267)])[_0xf2d22b(0x3e7)]['color'] = _0x4a3de6, document[_0xf2d22b(0x2b8)](_0x4d7f96['JEeKp'])['innerText'] = currentstreak, document[_0xf2d22b(0x2b8)](_0xf2d22b(0x324))[_0xf2d22b(0x284)] = maxwinstreak, document['getElementById'](_0x4d7f96['KStCi'])[_0xf2d22b(0x284)] = maxlosestreak, document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x16f)])['innerText'] = minbalance['toFixed'](decimalAmountView), document['getElementById'](_0x4d7f96[_0xf2d22b(0x1e4)])[_0xf2d22b(0x284)] = maxbalance['toFixed'](decimalAmountView), document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x242)])['innerText'] = minprofit[_0xf2d22b(0x285)](decimalAmountView), document['getElementById'](_0x4d7f96[_0xf2d22b(0x42e)])[_0xf2d22b(0x284)] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x4d7f96[_0xf2d22b(0x190)](wagered, startBalance), percentWagered = _0x4d7f96['AmGTo'](Math[_0xf2d22b(0x2fa)](_0x4d7f96[_0xf2d22b(0x18c)](_0x4d7f96[_0xf2d22b(0x227)](percentWagered, Number[_0xf2d22b(0x2e6)]), 0x64)), 0x64);
    if (_0x4d7f96[_0xf2d22b(0x18d)](_0x4d7f96[_0xf2d22b(0x418)](String, percentWagered), _0x4d7f96['tOEFp']) || _0x4d7f96['HTYIJ'](_0x4d7f96['pZAEl'](String, percentWagered), 'NaN'))
        percentWagered = 0x0;
    document[_0xf2d22b(0x2b8)](_0xf2d22b(0x3b2))[_0xf2d22b(0x284)] = percentWagered, percentProfit = _0x4d7f96[_0xf2d22b(0x1e9)](_0x4d7f96[_0xf2d22b(0x3b3)](profit, startBalance), 0x64), percentProfit = _0x4d7f96[_0xf2d22b(0x3b3)](Math[_0xf2d22b(0x2fa)](_0x4d7f96['JrWJs'](percentProfit + Number[_0xf2d22b(0x2e6)], 0x64)), 0x64);
    if (_0x4d7f96['xQtjl'](String(percentProfit), _0x4d7f96[_0xf2d22b(0x29e)]) || _0x4d7f96['QydzB'](_0x4d7f96[_0xf2d22b(0x418)](String, percentProfit), _0x4d7f96[_0xf2d22b(0x3b7)]))
        percentProfit = 0x0;
    return document[_0xf2d22b(0x2b8)](_0x4d7f96[_0xf2d22b(0x41b)])['style'][_0xf2d22b(0x3f1)] = _0x4e34d0, document['getElementById'](_0x4d7f96[_0xf2d22b(0x188)])[_0xf2d22b(0x284)] = percentProfit, _0x4d7f96[_0xf2d22b(0x3d2)];
}
function drawChart() {
    const _0x57561b = _0x26fdad, _0x24b832 = {
            'zcaxS': _0x57561b(0x42a),
            'qvBAs': _0x57561b(0x3b0),
            'HjDCI': _0x57561b(0x168)
        };
    dps = [{
            'x': betsChart,
            'y': profitChart
        }], chart = new CanvasJS[(_0x57561b(0x1f6))](_0x57561b(0x2d4), {
        'theme': darkMode ? _0x24b832['zcaxS'] : _0x24b832[_0x57561b(0x306)],
        'axisY': { 'includeZero': ![] },
        'data': [{
                'type': _0x24b832[_0x57561b(0x32e)],
                'markerSize': 0x0,
                'dataPoints': dps
            }]
    }), chart['render']();
}
async function updateChart() {
    const _0xb23d3e = _0x26fdad, _0x493ad0 = {
            'pvCUm': function (_0x37e19e, _0x5c4afd) {
                return _0x37e19e > _0x5c4afd;
            },
            'GNakJ': function (_0x29450b, _0x22426f) {
                return _0x29450b - _0x22426f;
            },
            'WYWhe': _0xb23d3e(0x3b9)
        };
    if (!stopChart) {
        dps[_0xb23d3e(0x287)]({
            'x': betsChart,
            'y': profitChart,
            'color': color
        });
        if (_0x493ad0[_0xb23d3e(0x2e8)](dps['length'], maxRows))
            dps[_0xb23d3e(0x22d)]();
        if (dps[dps['length'] - 0x2])
            dps[_0x493ad0[_0xb23d3e(0x35c)](dps['length'], 0x2)][_0xb23d3e(0x1b7)] = color;
        chart[_0xb23d3e(0x1bf)]();
    }
    return _0x493ad0[_0xb23d3e(0x368)];
}
async function updateHistory() {
    const _0x263299 = _0x26fdad, _0xb60e7 = {
            'TeZXs': _0x263299(0x385),
            'kKiQf': function (_0x3d3b95, _0x2e2734) {
                return _0x3d3b95 + _0x2e2734;
            },
            'LWuwC': _0x263299(0x14a),
            'ryxxu': function (_0x137ee7, _0x12803e) {
                return _0x137ee7(_0x12803e);
            },
            'oPRyw': function (_0x53ae2c, _0xefe890) {
                return _0x53ae2c === _0xefe890;
            },
            'hfwYT': function (_0x4e9540, _0x1de5f4) {
                return _0x4e9540(_0x1de5f4);
            },
            'qSFBP': 'plinko',
            'ArnoQ': _0x263299(0x23c),
            'UpkZo': '#ffc0cb',
            'IlkMa': _0x263299(0x22f),
            'LuCYE': _0x263299(0x157)
        };
    if (!stopHistory) {
        const _0xab5e4b = game === _0xb60e7[_0x263299(0x344)] ? bethigh ? '>' : '<' : '>', _0x1918dd = bethigh ? '<input\x20id=\x22bethigh' + bets + '\x22\x20type=\x22checkbox\x22\x20checked\x20/>' : _0x263299(0x2c1) + bets + _0x263299(0x1d2), _0x164601 = '' + (havePlinkoRows ? _0xb60e7['kKiQf'](plinkoRow, _0xb60e7[_0x263299(0x35a)]) : '') + plinkoRisk, _0x3c0121 = _0x263299(0x231) + bets + _0x263299(0x1fd) + _0xb60e7[_0x263299(0x35b)](Number, lastBet['amount'])['toFixed'](decimalAmountView) + _0x263299(0x1fd) + _0x1918dd + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0xb60e7[_0x263299(0x353)](game, _0x263299(0x202)) ? _0x164601 : _0xb60e7[_0x263299(0x35b)](Number, lastBet[_0x263299(0x2b6)])[_0x263299(0x285)](decimalChanceView)) + _0x263299(0x1fd) + _0xb60e7[_0x263299(0x21f)](Number, lastBet['roll'])['toFixed'](decimalChanceView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0xb60e7[_0x263299(0x35b)](Number, lastBet['profit'])[_0x263299(0x285)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0xb60e7['oPRyw'](game, _0xb60e7[_0x263299(0x1aa)]) ? _0x164601 : _0xab5e4b + Number(target)[_0x263299(0x285)](decimalTargetResult)) + _0x263299(0x1fd) + Number(result)[_0x263299(0x285)](decimalTargetResult) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet[_0x263299(0x25e)] + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet['id'] + _0x263299(0x3fa), _0x45274a = document['createElement']('tr');
        if (win)
            _0x45274a[_0x263299(0x3e7)]['backgroundColor'] = _0xb60e7[_0x263299(0x3f5)];
        else
            _0x45274a[_0x263299(0x3e7)][_0x263299(0x3cd)] = _0xb60e7[_0x263299(0x351)];
        _0x45274a[_0x263299(0x38c)] = _0x3c0121, document[_0x263299(0x2b8)](_0xb60e7[_0x263299(0x240)])[_0x263299(0x2d1)](_0x45274a, document['getElementById'](_0xb60e7['IlkMa'])[_0x263299(0x1e8)][0x0]);
        const _0x3593e6 = document[_0x263299(0x2bd)](_0x263299(0x2d9))[_0x263299(0x218)];
        if (_0x3593e6[_0x263299(0x2a9)] > maxRows)
            document[_0x263299(0x2bd)](_0x263299(0x2d9))[_0x263299(0x1a7)][_0x263299(0x166)]();
    }
    return _0xb60e7['LuCYE'];
}
function log(_0x305129) {
    const _0x3d0c6f = _0x26fdad, _0x553257 = {
            'MCOUS': _0x3d0c6f(0x31c),
            'cdGVx': function (_0x42de54, _0x566517) {
                return _0x42de54 > _0x566517;
            }
        }, _0x25d6a9 = document[_0x3d0c6f(0x2b8)](_0x553257['MCOUS']), _0x27997a = document[_0x3d0c6f(0x272)]('li');
    _0x27997a[_0x3d0c6f(0x284)] = '' + _0x305129, document[_0x3d0c6f(0x2b8)](_0x553257[_0x3d0c6f(0x281)])['insertBefore'](_0x27997a, _0x25d6a9[_0x3d0c6f(0x1e8)][0x0]);
    const _0x394873 = _0x25d6a9[_0x3d0c6f(0x340)]('li');
    if (_0x553257['cdGVx'](_0x394873[_0x3d0c6f(0x2a9)], maxRows))
        document['getElementById'](_0x3d0c6f(0x31c))[_0x3d0c6f(0x27c)](_0x25d6a9[_0x3d0c6f(0x1a7)]);
}
function _0x4425() {
    const _0x679c43 = [
        'numeric',
        'wdbShowFunctions',
        'yjkWO',
        'backgroundColor',
        'ZnNrn',
        'HzCdt',
        'SNmxB',
        'wdbMaxRows',
        'nemcy',
        'GLJOk',
        'EfpKd',
        'stophistory',
        'wdbShowVariables',
        '190px',
        'download',
        'advancedChanceOnLoseBets',
        'wjAiX',
        'Chance',
        '#wdbOpenScript',
        'rCtTL',
        'pXokQ',
        'return\x20nextbet',
        'XzchF',
        '$1=$1/$2\x20',
        'data',
        'euQLf',
        'uRmnE',
        'NtwNX',
        '23710sgYbyV',
        'style',
        'wdbWrapMode',
        '7|0|2|4|6|5|3|1',
        'DPQGQ',
        'tkMbU',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        '\x20to\x20win',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        '\x0a\x20\x20',
        'map',
        'color',
        'wdbWrapInitializing',
        'Dihxy',
        'toUpperCase',
        'ArnoQ',
        'VUQXQ',
        'functions',
        'JNkxJ',
        'LVriQ',
        '</td>',
        'hoQsg',
        'lcubl',
        'hOFdH',
        'OKmtZ',
        'wdbHeader',
        'red',
        'HTYIJ',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'URwGO',
        'checked',
        'wdbLUAMode',
        '2|3|6|7|4|5|0|1',
        'lJVUI',
        'hJUVq',
        'expires=',
        'Ztufv',
        'kjvbk',
        'IeZVV',
        'wdbMaxBalance',
        'wdbTime',
        'zHiCg',
        'sJUpr',
        '5348clQZuW',
        'tdxiK',
        'advancedMultiOnWinBets',
        'XQoJY',
        '$1=$1-$2\x20',
        'fixed',
        '7|10|5|0|4|3|9|11|8|2|1|6',
        'pZAEl',
        'hidestats',
        'mBaKc',
        'IwfYH',
        'gqiIM',
        'result',
        'return\x20currency',
        'show',
        'xnneO',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'wdbToggleShowStats',
        'rcsUY',
        'slice',
        'height',
        'AAsRR',
        '/lib/easytimer.js',
        'JNuBu',
        'oAiHi',
        'dark1',
        '.lua',
        'YYzmb',
        'forEach',
        'gPrDa',
        'return\x20bethigh',
        '\x20|\x20',
        'EYPFB',
        'OLXDL',
        'wdbLoader\x20ok',
        'offsetLeft',
        'YnZsU',
        'zTbjf',
        'hdPFk',
        'DdRvE',
        'zZnKQ',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'wEhle',
        'wGnSr',
        'updateHistory\x20ok',
        'kOzMZ',
        'KStCi',
        'eiGHe',
        'zgFeQ',
        'rMcqr',
        'advancedBetHighOnBet',
        'toLowerCase',
        '353983GNlDre',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=\x20',
        'ajxHn',
        '$1=$1+$2\x20',
        'href',
        'xwtsd',
        'stopOnBalanceCheck',
        'remove',
        '4230464mXTDza',
        'line',
        'arOCW',
        'JVAOQ',
        'Rdpos',
        'xIGVA',
        'NYSRK',
        'startchart',
        'TXoES',
        'high',
        'wdbToggleShowChart',
        'bfjyN',
        'wdbWrap',
        'DdGBt',
        'start',
        'SSgSy',
        'Stop\x20on\x20balance\x20',
        'bqYwz',
        'wdbToggleLiveChart',
        'hOeFw',
        'hidehistory',
        'QsGus',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'sPSZx',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'tvyRl',
        'UsmLl',
        'pSRre',
        '1000px',
        'cGiNB',
        'WNjSN',
        'wdbCurrentStreak',
        'advancedStopOnLose',
        'ckwdB',
        'wdbShowMode',
        'createObjectURL',
        'xIOvw',
        'aEbJA',
        'xQtjl',
        'LpQyI',
        'wdbToggleShowHistory',
        'AmGTo',
        'ROZNJ',
        'stop',
        'SmbqW',
        'QfXyX',
        'cBlqc',
        'PAEJp',
        'drKVF',
        'advancedMultiOnWinCheck',
        'wdbBets',
        'DgelJ',
        'jelDH',
        'QOyah',
        'LRQoy',
        'KhYCr',
        'jQUUI',
        'dtHvq',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Speed:\x20<span\x20id=\x22wdbSpeed\x22>0</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'resetall',
        '\x0a\x20\x20\x20\x20nextbet=',
        'fbWnF',
        'appendChild',
        'days',
        'lastChild',
        'stats',
        'gmoZx',
        'qSFBP',
        'clear',
        'kddkV',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'AFiJm',
        'fViIN',
        'JZeeK',
        'advancedBetHighOnBetCheck',
        'KHUzJ',
        'wdbBalance',
        '\x0a\x20\x20\x20\x20bets=',
        'slRtX',
        'wdbWagered',
        'lineColor',
        '#000',
        'return\x20plinkoRow',
        '#fff',
        'gclYz',
        'GNtYf',
        'KomBC',
        'RHrdz',
        'render',
        '<option\x20value=\x22',
        'ZKcwq',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'click',
        'advancedStopAfterStreak',
        'save',
        'advancedBetHighOnLose',
        'OVtHl',
        'value',
        'zmtKW',
        'TPyri',
        'hqVqF',
        'iXHbZ',
        'IabVJ',
        'NQrYn',
        '#wdbSaveScriptButton',
        'qECKh',
        '0|2|1|5|7|6|3|9|8|4',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'indexOf',
        'tNoSt',
        '\x20win',
        'bets',
        'coqof',
        'green',
        '7|6|8|9|5|4|11|0|1|3|10|12|2',
        'DDTCl',
        'nQHrL',
        '\x0a\x20\x20\x20\x20bethigh=',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'advancedStopOnLoseCheck',
        '6|4|8|9|3|1|7|0|5|2',
        'advancedBetHighOnLoseCheck',
        '/media/ching.mp3',
        'AnpPz',
        'width',
        'wTEhA',
        'Wkaqx',
        'target',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'children',
        'iheCp',
        'FibAM',
        'event',
        '3|2|0|1|4',
        '\x0a\x20\x20\x20\x20minprofit=',
        'LUBQq',
        'disabled',
        'amount',
        'ePCdL',
        'Jjxer',
        'advancedStopOnBets',
        'vteus',
        'nrOHN',
        'Chart',
        'MShgV',
        'iocJa',
        'MdScN',
        'wdbProfit',
        'casino=\x22',
        'clientY',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'bHenQ',
        'NCjUQ',
        'XzWUO',
        'gcSrC',
        'plinko',
        'wnrnX',
        'alphabet',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'MzEzF',
        'JJYxv',
        'eiHsz',
        'ghNcf',
        'DfhEm',
        'advancedStopOnWins',
        'seconds',
        'Target',
        'wdb',
        'ayOyC',
        '\x0a\x20\x20\x20\x20balance=',
        'advancedChanceOnWinBets',
        'GylPm',
        'QqwCP',
        'wdbMaxProfit',
        'StXjL',
        'Jqfrg',
        'ERozs',
        'rows',
        'UAvyv',
        'HPGGE',
        '#wdbWrapVariables\x20pre',
        'wdbHighLose',
        'random',
        'WfQJt',
        'hfwYT',
        'NLLIp',
        '\x0a\x20\x20\x20\x20chance=',
        'jiDYK',
        'body',
        'onmousedown',
        'vyHNj',
        'QCYXe',
        'CtkjZ',
        'lOGeN',
        '\x0a\x20\x20\x20\x20win=',
        'HqGbS',
        'Mmkrc',
        'dkkYB',
        'shift',
        'advancedChanceOnWin',
        'wdbHistory',
        'lvypZ',
        '<td>',
        'advancedStopOnWinsCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=\x20',
        'NBEkD',
        'getValue',
        'advancedStopAfterStreakCheck',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'yWpKo',
        '#91f190',
        'text/plain;\x20charset=utf-8',
        'wdbWrapControl',
        'showstats',
        'IlkMa',
        'showchart',
        'famNt',
        'wdbWrapTips',
        'flex',
        ';path=/',
        'LYFSy',
        'change',
        'WcHph',
        'scriptName',
        'NaN',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'message',
        'xfpIl',
        'myfBs',
        'soiuL',
        'EQugt',
        'wdbMinProfit',
        'ZKZfL',
        '6028wQEMuV',
        'ACGyE',
        'NfZtm',
        'aAoAR',
        'KSXin',
        '\x0a\x20\x20\x20\x20wins=',
        'iaAzq',
        'uGPym',
        'getTimeValues',
        'log',
        'tkUws',
        'nonce',
        'mXwyp',
        'QdiWx',
        'drLwB',
        'oLtdC',
        'block',
        'wdbFooter',
        'setValue',
        'setOption',
        'JEeKp',
        'URL',
        'dLQYb',
        'UKJNS',
        'options',
        'NEHmM',
        'wdbPercentProfit',
        'jIkGE',
        'VzNwz',
        'xxfDK',
        'WahVK',
        'createElement',
        'resetlog',
        'replace',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'jhrcG',
        'VbUHm',
        'ognkV',
        'hRSnJ',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'removeChild',
        '8|10|9|1|2|5|6|4|7|3|0',
        'firTl',
        'ofGBu',
        'FybRH',
        'MCOUS',
        'black',
        'mEvmn',
        'innerText',
        'toFixed',
        'substring',
        'push',
        'PWkto',
        'wdbHighBet',
        '#2a2a2a',
        'YNtMB',
        'vxhBL',
        'QvxEH',
        'AHDbM',
        '6PbgwoF',
        'fromTextArea',
        'KOHnZ',
        'oJnGz',
        'resetseed',
        '0vh',
        'JAbuy',
        'lXWXk',
        'Dounf',
        '#advancedBetHigh',
        'CiqxU',
        'text',
        'hide',
        '13399488DicaPB',
        'prepend',
        'tOEFp',
        'startlog',
        'preventDefault',
        'vRilH',
        'dXfbF',
        'DYZxI',
        'wdbToggleLiveLog',
        'iEBIo',
        'stopchart',
        'GCLSo',
        'ASqpQ',
        'length',
        'secondsUpdated',
        'HcOGO',
        'VuRsa',
        'low',
        'fAjNb',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'YmGbB',
        'HGLTH',
        'OreYJ',
        '/lib/ms.js',
        'AoouD',
        'chance',
        'uZjXs',
        'getElementById',
        'sqQpA',
        'WlzKs',
        'wdbWrapVariables',
        'lfRIt',
        'querySelector',
        'advancedBetHighOnWinCheck',
        'wdbWrapLog',
        'kcZWE',
        '<input\x20id=\x22bethigh',
        '42hKcUNN',
        'getTime',
        'vBgUv',
        'wdbShowLog',
        'ktDlY',
        'floor',
        '\x20at\x20',
        '/lib/chart.js',
        'www.',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'zRuyd',
        '3|5|7|4|2|8|6|1|9|0',
        'iMwhQ',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'VrWle',
        'insertBefore',
        'wHIyc',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'wdbChart',
        'KXhOq',
        'LuqOh',
        'advancedMultiOnLoseBets',
        'lETwt',
        '#wdbHistory',
        'Xywty',
        'stopOnBalance',
        ',\x0a\x20\x20\x20\x20\x20\x20target=\x20',
        'AFpYM',
        'Infinity',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a--\x20log(casino)\x0a--\x20plinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a--\x20plinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a//\x20log(casino)\x0a//\x20plinkoRow=8\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a//\x20plinkoRisk=\x27low\x27\x20//\x20low,\x20medium,\x20high,\x20extreme;\x20depend\x20dice\x20site\x20and\x20only\x20for\x20plinko\x20game\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>chance\x20:\x20%\x20win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20:\x20Plinko\x20rows,\x20only\x20for\x20plinko\x20game,\x20some\x20site\x20not\x20have\x0aplinkoRisk\x20:\x20risk\x20level\x20for\x20plinko\x20game\x20(low,\x20medium,\x20high)\x0abethigh\x20:\x20Bet\x20side\x20in\x20next\x20game\x20(true\x20is\x20over/above,\x20false\x20is\x20under/below)\x0anextbet\x20:\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20:\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20:\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20:\x20%\x20roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20:\x20Target\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.result\x20:\x20Result\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.profit,\x20currentprofit\x20:\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20:\x20Current\x20seed\x20nonce\x0alastBet.id\x20:\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20:\x20Currency\x20to\x20play\x20(some\x20site\x20not\x20work)\x0abalance\x20:\x20Current\x20balance\x0aminbalance\x20:\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20:\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20:\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20:\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20:\x20Session\x20profit\x0awagered\x20:\x20Session\x20wagered\x0awin\x20:\x20State\x20in\x20previous\x20game\x20(true\x20is\x20win,\x20false\x20is\x20lose)\x0abets\x20:\x20Bet\x20count\x0awins\x20:\x20Win\x20count\x0awinstreak\x20\x20:\x20Winning\x20streak\x0alosses\x20:\x20Lose\x20count\x0alosestreak\x20:\x20Losing\x20streak\x0acurrentstreak\x20:\x20Current\x20streak\x20(smaller\x200\x20is\x20losing\x20streak\x20and\x20vice\x20versa)\x0apartialprofit\x20:\x20Partial\x20profit\x20(same\x20in\x20other\x20dicebot)\x0ascriptname\x20:\x20Name\x20of\x20script\x20u\x20use\x0acasino\x20:\x20Name\x20of\x20casino\x20(example:\x20500.casino\x20=\x20500;\x20bch.games\x20=\x20bch)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a<pre>dobet()\x20:\x20Main\x20function\x20for\x20betting\x0astop()\x20:\x20Stop\x20betting\x0aresume()\x20:\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20:\x20Reset\x20fairness\x0aresetstats()\x20:\x20Reset\x20statistics\x0aresetchart()\x20:\x20Reset\x20chart\x0aresethistory()\x20:\x20Reset\x20history\x0aresetlog()\x20:\x20Reset\x20log\x0aresetall()\x20:\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20:\x20Check\x20actual\x20balance\x0aching()\x20:\x20Alert\x20with\x20sound\x0alog(message)\x20:\x20Write\x20a\x20message\x20in\x20Log\x20area\x0asleep(sec)\x20:\x20Pause\x20betting\x20system\x20with\x20sec\x0aresetpartialprofit()\x20:\x20Reset\x20partialprofit</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Click\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aHold\x20top\x20or\x20bottom\x20area\x20to\x20move\x20the\x20bot\x20around</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20bot.mhqb365.com\x20|\x20',
        'hidechart',
        'XNvhL',
        'AKZdL',
        'uzbVa',
        'ezKpH',
        'nTtvI',
        'EPSILON',
        '#wdbWrapTips\x20pre',
        'pvCUm',
        'return\x20chance',
        'ZmQND',
        'uQYVy',
        'ktsvT',
        'none',
        'CHqqK',
        'resetstats',
        'hwNpJ',
        'eTCRM',
        'stoplog',
        'mode',
        'HjjcI',
        'stopOnProfit',
        'profit',
        'sNGRT',
        'ziCTh',
        'WsJcj',
        'round',
        'tMGwc',
        'foBwF',
        'return\x20plinkoRisk',
        'then',
        'AnwLH',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'tWiKd',
        'wdbStopOnWinButton',
        '1688127dMlXhy',
        'qKjcO',
        'ABAOZ',
        'qvBAs',
        'wdbMenuCoin',
        'wdbOpenLUAScript',
        'display',
        'isfFM',
        'CfLvV',
        'yuugl',
        'wdbWrapFunctions',
        'charAt',
        'left',
        'DiceScript',
        '\x20lose',
        'mLucl',
        'dobet()',
        'files',
        'QqLpr',
        '5px',
        'all',
        'pause',
        '1|7|4|3|8|2|6|9|5|0',
        'EERYi',
        'KjkCh',
        'wdbLog',
        'toString',
        'duRft',
        'resetchart',
        'YHCAm',
        'theme',
        'wdbAdvancedMode',
        'onmousemove',
        'wdbHighWinStreak',
        'eCLXh',
        'javascript',
        'YTBMU',
        'darcula',
        'wdbHighLoseStreak',
        'ziaMa',
        'juXzc',
        'UnNbH',
        'cDMyk',
        'HjDCI',
        '1261428CXpGrU',
        'cwouO',
        'tips',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'mKiEK',
        'WRhlK',
        '#wdbWrapFunctions\x20pre',
        'XDuTv',
        'wdbJSMode',
        'DHXnm',
        'KzdSJ',
        'resetstatsOnProfit',
        'wdbWins',
        'ofpCW',
        'FJajm',
        'htdFe',
        'advancedChance',
        'getElementsByTagName',
        'advancedBetHighOnProfitCheck',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'lITHA',
        'TeZXs',
        'Stop\x20on\x20',
        '0:0:0:0',
        'AIslV',
        'XWvGb',
        'Betting\x20',
        'Tidwm',
        'irSew',
        'updateLua\x20done',
        'SsSZR',
        'pstal',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'Ebjrf',
        'UpkZo',
        'YygMk',
        'oPRyw',
        'split',
        'ylzhC',
        'advancedStopOnBetsCheck',
        'cvtiw',
        'response',
        'NoFJC',
        'LWuwC',
        'ryxxu',
        'GNakJ',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'variables',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'advancedChanceOnLoseCheck',
        'mJfwF',
        'onmouseup',
        'wKVsg',
        'JUSxD',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'div',
        'advancedStopRollNumber',
        'WYWhe',
        'wdbResumeButton',
        'dqoIj',
        'MGZEE',
        'HnAbJ',
        'advancedBaseBet',
        'wdbMain',
        'swOoh',
        'GEkjn',
        'dlcIb',
        'hyBhS',
        'wfkJw',
        'load',
        'TulMf',
        'vkiTs',
        'uYyXB',
        'QLbed',
        '\x20bet',
        '1805KELDeI',
        'ImcCH',
        'addEventListener',
        'querySelectorAll',
        '380px',
        'eyUBS',
        'RtAdb',
        'wdbShowTips',
        'hCwcZ',
        'nsekh',
        'Dahtt',
        'dice',
        'lua',
        'jybjK',
        'Stop\x20on\x20profit\x20',
        'AeOnB',
        'NJYyv',
        'VYZPO',
        'innerHTML',
        'history',
        'tnFdh',
        'advancedMultiOnWin',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'foiys',
        'AmFoX',
        'hours',
        'reset',
        'iKuNc',
        'nXptq',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'zsBTr',
        'tdkzU',
        'EDwCW',
        'gRvyO',
        '\x0a\x20\x20\x20\x20profit=',
        'hex',
        'cjRDM',
        'sRLbv',
        'iRgga',
        'lbnrX',
        'top',
        'resethistory',
        'return\x20scriptname',
        'handleAdvanced\x20ok',
        'yQFsz',
        'EFRog',
        '$1=$1*$2\x20',
        '\x0a\x20\x20\x20\x20losses=',
        'vtQkP',
        'DxKAw',
        'WPvCw',
        'vRQkX',
        '95vh',
        'jNpRq',
        'light1',
        '\x0a\x20\x20\x20\x20losestreak=',
        'wdbPercentWagered',
        'ukYQi',
        'pUNgj',
        'LOLJy',
        'wdbMenuMode',
        'Tbjej',
        'white',
        'updateChart\x20ok',
        'Stop\x20on\x20roll\x20number\x20',
        'ZJcHQ',
        'offsetTop',
        'wdbWrapHistory',
        'advancedMultiOnLose',
        'FgDTl',
        'head',
        'IpMit',
        'roll',
        'position',
        'wdbStats',
        'wdbOpenJSScript',
        'Stop\x20on\x20current\x20streak\x20',
        'poGvO',
        'advanced',
        'clientX'
    ];
    _0x4425 = function () {
        return _0x679c43;
    };
    return _0x4425();
}
async function start() {
    const _0xf3afcf = _0x26fdad, _0x478381 = {
            'eSoAh': _0xf3afcf(0x40e),
            'EKyQE': '0:0:0:0',
            'Rdpos': _0xf3afcf(0x307),
            'ktsvT': 'wdbStartButton',
            'AnwLH': _0xf3afcf(0x1cf),
            'dtHvq': function (_0x4a887e, _0x412abc) {
                return _0x4a887e === _0x412abc;
            },
            'zTbjf': _0xf3afcf(0x386),
            'QOyah': 'not\x20',
            'nsekh': _0xf3afcf(0x162),
            'jhrcG': _0xf3afcf(0x415),
            'ohqUD': _0xf3afcf(0x3a8),
            'NoFJC': _0xf3afcf(0x3e1),
            'isfFM': function (_0x3f41e7, _0x578e3f) {
                return _0x3f41e7 === _0x578e3f;
            },
            'MoIql': function (_0x4bc3d5, _0x510593) {
                return _0x4bc3d5 !== _0x510593;
            },
            'VuRsa': 'wdbRunningScript',
            'ImcCH': 'script',
            'zRuyd': function (_0x2973d0, _0x3bf7b0) {
                return _0x2973d0(_0x3bf7b0);
            },
            'pXokQ': _0xf3afcf(0x36d),
            'hJUVq': function (_0x40d17f, _0x38d81f) {
                return _0x40d17f(_0x38d81f);
            },
            'PQMJH': 'advancedChance',
            'sNGRT': _0xf3afcf(0x298),
            'QCYXe': function (_0x138c8e) {
                return _0x138c8e();
            },
            'KOHnZ': function (_0x72433f, _0x4587e6) {
                return _0x72433f(_0x4587e6);
            }
        };
    try {
        if (!run) {
            document[_0xf3afcf(0x2b8)](_0x478381['eSoAh'])['innerText'] = _0x478381['EKyQE'], document[_0xf3afcf(0x2b8)](_0x478381[_0xf3afcf(0x16b)])[_0xf3afcf(0x1ef)] = !![], document[_0xf3afcf(0x2b8)](_0xf3afcf(0x3b6))[_0xf3afcf(0x1ef)] = !![], document[_0xf3afcf(0x2b8)](_0x478381[_0xf3afcf(0x2ec)])['disabled'] = !![], document['getElementById'](_0xf3afcf(0x369))[_0xf3afcf(0x1ef)] = !![], document[_0xf3afcf(0x37d)](_0x478381[_0xf3afcf(0x2ff)])[_0xf3afcf(0x42d)](_0x419082 => _0x419082[_0xf3afcf(0x1ef)] = !![]), document['querySelectorAll']('#wdbOpenScript')[_0xf3afcf(0x42d)](_0x43e6e7 => _0x43e6e7['disabled'] = !![]), run = !![], sOW = ![], wdbTimer[_0xf3afcf(0x192)](), wdbTimer[_0xf3afcf(0x175)](), wdbSpeed[_0xf3afcf(0x192)](), wdbSpeed[_0xf3afcf(0x175)]();
            if (_0x478381[_0xf3afcf(0x1a0)](mode, _0x478381[_0xf3afcf(0x150)]))
                diceScript = luaEditor[_0xf3afcf(0x235)](), diceScript = diceScript[_0xf3afcf(0x274)](/!=/g, '~=')[_0xf3afcf(0x274)](/!/g, _0x478381[_0xf3afcf(0x19c)])['replace'](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x478381[_0xf3afcf(0x383)])[_0xf3afcf(0x274)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x478381[_0xf3afcf(0x277)])['replace'](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x478381['ohqUD'])[_0xf3afcf(0x274)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x478381[_0xf3afcf(0x359)]), fengari[_0xf3afcf(0x374)](diceScript)();
            else {
                if (_0x478381[_0xf3afcf(0x30a)](mode, 'js')) {
                    if (_0x478381['MoIql'](document[_0xf3afcf(0x2b8)](_0x478381[_0xf3afcf(0x2ac)]), null))
                        document[_0xf3afcf(0x2b8)](_0x478381[_0xf3afcf(0x2ac)])[_0xf3afcf(0x166)]();
                    diceScript = jsEditor[_0xf3afcf(0x235)]();
                    let _0x161eac = document['createElement'](_0x478381[_0xf3afcf(0x37b)]);
                    _0x161eac['id'] = _0x478381[_0xf3afcf(0x2ac)], _0x161eac[_0xf3afcf(0x38c)] = diceScript, document[_0xf3afcf(0x3c0)][_0xf3afcf(0x1a5)](_0x161eac);
                } else
                    _0x478381[_0xf3afcf(0x30a)](mode, _0xf3afcf(0x3c8)) && (basebet = _0x478381[_0xf3afcf(0x2cc)](Number, document[_0xf3afcf(0x2b8)](_0x478381[_0xf3afcf(0x3de)])['value']), nextbet = basebet, chance = _0x478381[_0xf3afcf(0x408)](Number, document['getElementById'](_0x478381['PQMJH'])[_0xf3afcf(0x1c8)]), bethigh = document[_0xf3afcf(0x2bd)](_0x478381[_0xf3afcf(0x2f7)])[_0xf3afcf(0x404)]);
            }
            if (run)
                return _0x478381['QCYXe'](playBet);
        }
    } catch (_0x4a0d58) {
        _0x478381[_0xf3afcf(0x226)](stop), _0x478381[_0xf3afcf(0x291)](log, _0x4a0d58);
    }
}
function stop() {
    const _0x5b507f = _0x26fdad, _0x2e75bc = {
            'iXHbZ': _0x5b507f(0x27d),
            'DxKAw': _0x5b507f(0x302),
            'lXWXk': 'wdbMenuCoin',
            'iocJa': _0x5b507f(0x3dc),
            'JMYKH': _0x5b507f(0x369),
            'drKVF': 'wdbStartButton',
            'uYyXB': _0x5b507f(0x1cf)
        };
    if (run) {
        const _0x452b4b = _0x2e75bc[_0x5b507f(0x1cc)][_0x5b507f(0x354)]('|');
        let _0x162440 = 0x0;
        while (!![]) {
            switch (_0x452b4b[_0x162440++]) {
            case '0':
                document['getElementById'](_0x2e75bc[_0x5b507f(0x3ab)])[_0x5b507f(0x1ef)] = ![];
                continue;
            case '1':
                wdbTimer['pause']();
                continue;
            case '2':
                document[_0x5b507f(0x2b8)](_0x2e75bc[_0x5b507f(0x296)])['disabled'] = ![];
                continue;
            case '3':
                document[_0x5b507f(0x37d)](_0x2e75bc[_0x5b507f(0x1f8)])[_0x5b507f(0x42d)](_0x207b55 => _0x207b55['disabled'] = ![]);
                continue;
            case '4':
                document[_0x5b507f(0x2b8)](_0x2e75bc['JMYKH'])[_0x5b507f(0x1ef)] = ![];
                continue;
            case '5':
                document['getElementById'](_0x5b507f(0x3b6))[_0x5b507f(0x1ef)] = ![];
                continue;
            case '6':
                document['getElementById'](_0x2e75bc[_0x5b507f(0x197)])[_0x5b507f(0x1ef)] = ![];
                continue;
            case '7':
                document[_0x5b507f(0x37d)](_0x2e75bc[_0x5b507f(0x377)])[_0x5b507f(0x42d)](_0x5b3078 => _0x5b3078[_0x5b507f(0x1ef)] = ![]);
                continue;
            case '8':
                run = ![];
                continue;
            case '9':
                wdbSpeed[_0x5b507f(0x318)]();
                continue;
            case '10':
                sOW = ![];
                continue;
            }
            break;
        }
    }
}
async function resume(_0x129281) {
    const _0x406dc5 = _0x26fdad, _0x2dd7d5 = {
            'kczMk': _0x406dc5(0x417),
            'YHCAm': _0x406dc5(0x369),
            'DPQGQ': _0x406dc5(0x1cf),
            'WsJcj': 'wdbStartButton',
            'StmtE': _0x406dc5(0x35d),
            'cvtiw': 'wdbMenuMode'
        };
    if (!run) {
        const _0x14fef7 = _0x2dd7d5['kczMk'][_0x406dc5(0x354)]('|');
        let _0x29dc54 = 0x0;
        while (!![]) {
            switch (_0x14fef7[_0x29dc54++]) {
            case '0':
                document[_0x406dc5(0x2b8)](_0x2dd7d5[_0x406dc5(0x320)])['disabled'] = !![];
                continue;
            case '1':
                wdbTimer[_0x406dc5(0x175)]();
                continue;
            case '2':
                wdbSpeed[_0x406dc5(0x175)]();
                continue;
            case '3':
                document[_0x406dc5(0x37d)](_0x406dc5(0x3dc))[_0x406dc5(0x42d)](_0x7eb349 => _0x7eb349[_0x406dc5(0x1ef)] = !![]);
                continue;
            case '4':
                document[_0x406dc5(0x37d)](_0x2dd7d5[_0x406dc5(0x3ea)])['forEach'](_0x296a2e => _0x296a2e[_0x406dc5(0x1ef)] = !![]);
                continue;
            case '5':
                document[_0x406dc5(0x2b8)](_0x2dd7d5[_0x406dc5(0x2f9)])[_0x406dc5(0x1ef)] = !![];
                continue;
            case '6':
                return playBet();
            case '7':
                document[_0x406dc5(0x2b8)](_0x406dc5(0x307))['disabled'] = !![];
                continue;
            case '8':
                sOW = ![];
                continue;
            case '9':
                !_0x129281 && (log(_0x2dd7d5['StmtE']), await new Promise(_0x235bb8 => setTimeout(_0x235bb8, 0x1388)));
                continue;
            case '10':
                document['getElementById'](_0x2dd7d5[_0x406dc5(0x357)])['disabled'] = !![];
                continue;
            case '11':
                run = !![];
                continue;
            }
            break;
        }
    }
}
function stopOnWin() {
    const _0x52d84f = _0x26fdad, _0x13410d = { 'GQpMq': _0x52d84f(0x302) };
    sOW = !![];
    if (run)
        document[_0x52d84f(0x2b8)](_0x13410d['GQpMq'])[_0x52d84f(0x1ef)] = !![];
}
function _0x508e(_0x516fee, _0x4f62d9) {
    const _0x44253f = _0x4425();
    return _0x508e = function (_0x508ec0, _0x39c428) {
        _0x508ec0 = _0x508ec0 - 0x14a;
        let _0x4c9df2 = _0x44253f[_0x508ec0];
        return _0x4c9df2;
    }, _0x508e(_0x516fee, _0x4f62d9);
}
async function playBet() {
    const _0x5001ce = _0x26fdad, _0xada569 = {
            'zmtKW': _0x5001ce(0x386),
            'xfpIl': _0x5001ce(0x3df),
            'QvxEH': _0x5001ce(0x42f),
            'DgelJ': function (_0x221f9e, _0x2f440a) {
                return _0x221f9e(_0x2f440a);
            },
            'qECKh': function (_0x22272c, _0x363cb4) {
                return _0x22272c(_0x363cb4);
            },
            'IpMit': function (_0x42c618, _0x3ca6d4) {
                return _0x42c618 === _0x3ca6d4;
            },
            'Dahtt': _0x5001ce(0x202),
            'QLbed': function (_0x5ef193, _0x46aa09) {
                return _0x5ef193 + _0x46aa09;
            },
            'XDuTv': _0x5001ce(0x14a),
            'SSgSy': function (_0x30f65c, _0x128b39) {
                return _0x30f65c === _0x128b39;
            },
            'nTtvI': 'dice',
            'sPSZx': _0x5001ce(0x170),
            'tXiHO': function (_0x29928f) {
                return _0x29928f();
            },
            'URwGO': function (_0x42b03c) {
                return _0x42b03c();
            }
        };
    try {
        mode === _0xada569[_0x5001ce(0x1c9)] && (nextbet = fengari[_0x5001ce(0x374)](_0xada569[_0x5001ce(0x24d)])(), chance = fengari[_0x5001ce(0x374)](_0x5001ce(0x2e9))(), bethigh = fengari[_0x5001ce(0x374)](_0xada569[_0x5001ce(0x28d)])());
        nextbet = _0xada569[_0x5001ce(0x19a)](Number, nextbet), chance = _0xada569[_0x5001ce(0x1d0)](Number, chance), previousbet = nextbet, lastBet['amount'] = nextbet, lastBet['Amount'] = nextbet, lastBet[_0x5001ce(0x2b6)] = chance, lastBet[_0x5001ce(0x3db)] = chance;
        if (!stopLog) {
            if (_0xada569[_0x5001ce(0x3c1)](game, _0xada569[_0x5001ce(0x384)])) {
                const _0x2378aa = '' + (havePlinkoRows ? _0xada569[_0x5001ce(0x378)](plinkoRow, _0xada569[_0x5001ce(0x336)]) : '') + plinkoRisk, _0x201092 = _0x5001ce(0x349) + _0xada569[_0x5001ce(0x1d0)](Number, lastBet[_0x5001ce(0x1f0)])['toFixed'](decimalAmountView) + _0x5001ce(0x2c8) + _0x2378aa + _0x5001ce(0x3ed);
                _0xada569[_0x5001ce(0x19a)](log, _0x201092);
            } else {
                const _0x19cee2 = _0xada569[_0x5001ce(0x176)](game, _0xada569[_0x5001ce(0x2e5)]) ? bethigh ? _0xada569[_0x5001ce(0x17e)] : _0x5001ce(0x2ad) : _0xada569[_0x5001ce(0x17e)], _0x1f5d81 = _0x5001ce(0x349) + _0xada569[_0x5001ce(0x1d0)](Number, lastBet[_0x5001ce(0x1f0)])[_0x5001ce(0x285)](decimalAmountView) + _0x5001ce(0x2c8) + _0xada569['DgelJ'](Number, lastBet[_0x5001ce(0x2b6)])[_0x5001ce(0x285)](decimalChanceView) + '%\x20chance\x20to\x20win,\x20' + _0x19cee2;
                _0xada569['qECKh'](log, _0x1f5d81);
            }
        }
        if (run)
            return _0xada569['tXiHO'](sendBet);
    } catch (_0x5d9515) {
        _0xada569[_0x5001ce(0x403)](stop), log(_0x5d9515);
    }
}
function resetall() {
    const _0x58004a = _0x26fdad, _0x5e2fa7 = {
            'hOFdH': 'wdbTime',
            'Jqfrg': _0x58004a(0x346),
            'qKjcO': function (_0x2d319d) {
                return _0x2d319d();
            },
            'Xywty': function (_0x5354e0, _0x1af6b4) {
                return _0x5354e0(_0x1af6b4);
            },
            'RSeMt': _0x58004a(0x1ab)
        };
    document[_0x58004a(0x2b8)](_0x5e2fa7[_0x58004a(0x3fd)])[_0x58004a(0x284)] = _0x5e2fa7[_0x58004a(0x216)], run ? (wdbSpeed[_0x58004a(0x192)](), wdbSpeed[_0x58004a(0x175)](), wdbTimer[_0x58004a(0x192)](), wdbTimer[_0x58004a(0x175)]()) : (wdbSpeed[_0x58004a(0x192)](), wdbTimer['stop']()), _0x5e2fa7[_0x58004a(0x304)](resetstats), _0x5e2fa7['Xywty'](toggleChart, _0x58004a(0x394)), _0x5e2fa7['Xywty'](toggleHistory, _0x5e2fa7['RSeMt']), _0x5e2fa7[_0x58004a(0x2da)](toggleLog, _0x58004a(0x1ab));
}
function resetchart() {
    const _0x170ddb = _0x26fdad, _0x1a0320 = {
            'tkUws': function (_0x2b66d2, _0x24c646) {
                return _0x2b66d2(_0x24c646);
            },
            'xIOvw': _0x170ddb(0x394)
        };
    return _0x1a0320[_0x170ddb(0x25d)](toggleChart, _0x1a0320[_0x170ddb(0x18b)]);
}
function resethistory() {
    const _0x693516 = _0x26fdad, _0x527a99 = {
            'foBwF': function (_0x38b496, _0x32bc0a) {
                return _0x38b496(_0x32bc0a);
            },
            'JVAOQ': _0x693516(0x1ab)
        };
    return _0x527a99[_0x693516(0x2fc)](toggleHistory, _0x527a99[_0x693516(0x16a)]);
}
function resetlog() {
    const _0x4c5bd9 = _0x26fdad, _0x30312c = {
            'QqLpr': function (_0xd3b486, _0x4dd253) {
                return _0xd3b486(_0x4dd253);
            },
            'vtQkP': _0x4c5bd9(0x1ab)
        };
    return _0x30312c[_0x4c5bd9(0x315)](toggleLog, _0x30312c[_0x4c5bd9(0x3aa)]);
}
function resetstats() {
    const _0x391da3 = _0x26fdad, _0xf97905 = {
            'otaxC': '12|6|14|9|15|3|0|10|5|7|13|4|8|11|2|16|17|1',
            'YTBMU': function (_0xdd380f) {
                return _0xdd380f();
            }
        }, _0x5911ae = _0xf97905['otaxC'][_0x391da3(0x354)]('|');
    let _0x911af1 = 0x0;
    while (!![]) {
        switch (_0x5911ae[_0x911af1++]) {
        case '0':
            maxLosseAmount = 0x0;
            continue;
        case '1':
            return _0xf97905[_0x391da3(0x327)](updateStats);
        case '2':
            wins = 0x0;
            continue;
        case '3':
            maxBetAmount = 0x0;
            continue;
        case '4':
            minprofit = 0x0;
            continue;
        case '5':
            maxlosestreak = 0x0;
            continue;
        case '6':
            wagered = 0x0;
            continue;
        case '7':
            minbalance = balance;
            continue;
        case '8':
            maxprofit = 0x0;
            continue;
        case '9':
            profit = 0x0;
            continue;
        case '10':
            maxwinstreak = 0x0;
            continue;
        case '11':
            bets = 0x0;
            continue;
        case '12':
            startBalance = balance;
            continue;
        case '13':
            maxbalance = balance;
            continue;
        case '14':
            percentWagered = 0x0;
            continue;
        case '15':
            percentProfit = 0x0;
            continue;
        case '16':
            losses = 0x0;
            continue;
        case '17':
            currentstreak = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x2ed410) {
    return _0x2ed410;
}
function ching() {
    return wdbSound['play']();
}
function sleep(_0x1f749a) {
    return new Promise(_0x3b6c15 => setTimeout(_0x3b6c15, _0x1f749a * 0x3e8));
}
function initLua() {
    const _0x1f4266 = _0x26fdad, _0x5095bc = {
            'drLwB': _0x1f4266(0x34f),
            'VbUHm': 'function\x20checkbalance()\x0a\x20js.global:checkbalance()\x0a\x20end',
            'hqVqF': _0x1f4266(0x1ad),
            'IKDBy': _0x1f4266(0x3ee),
            'KjkCh': 'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
            'xIGVA': 'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
            'iaAzq': _0x1f4266(0x275),
            'jIkGE': _0x1f4266(0x2cf),
            'VzNwz': _0x1f4266(0x27b),
            'WNjSN': _0x1f4266(0x342),
            'wnrnX': _0x1f4266(0x397),
            'TQrFB': _0x1f4266(0x332),
            'QdiWx': _0x1f4266(0x2ca)
        };
    fengari[_0x1f4266(0x374)](_0x5095bc[_0x1f4266(0x261)])(), fengari[_0x1f4266(0x374)](_0x1f4266(0x24b))(), fengari[_0x1f4266(0x374)](_0x1f4266(0x390))(), fengari[_0x1f4266(0x374)](_0x5095bc[_0x1f4266(0x278)])(), fengari['load'](_0x5095bc[_0x1f4266(0x1cb)])(), fengari[_0x1f4266(0x374)](_0x5095bc['IKDBy'])(), fengari['load'](_0x5095bc[_0x1f4266(0x31b)])(), fengari['load'](_0x5095bc[_0x1f4266(0x16c)])(), fengari[_0x1f4266(0x374)](_0x5095bc[_0x1f4266(0x259)])(), fengari[_0x1f4266(0x374)](_0x5095bc[_0x1f4266(0x26e)])(), fengari['load'](_0x5095bc[_0x1f4266(0x26f)])(), fengari['load'](_0x5095bc[_0x1f4266(0x185)])(), fengari[_0x1f4266(0x374)](_0x5095bc[_0x1f4266(0x203)])(), fengari['load'](_0x5095bc['TQrFB'])(), fengari['load'](_0x1f4266(0x17d))(), fengari[_0x1f4266(0x374)](_0x1f4266(0x3ec))();
    const _0x2dba78 = location['hostname'][_0x1f4266(0x274)](_0x5095bc[_0x1f4266(0x260)], '');
    let _0x29dc2f = _0x2dba78[_0x1f4266(0x1d3)]('.');
    casino = _0x2dba78[_0x1f4266(0x424)](0x0, _0x29dc2f), fengari[_0x1f4266(0x374)](_0x1f4266(0x1fb) + casino + '\x22')();
}
async function updateLua() {
    const _0x35583f = _0x26fdad, _0x5d16ad = {
            'ayOyC': _0x35583f(0x1b9),
            'tMGwc': _0x35583f(0x34c),
            'cBlqc': _0x35583f(0x3a4),
            'gmoZx': 'scriptName',
            'SNmxB': _0x35583f(0x2fd),
            'RnbpL': _0x35583f(0x313),
            'RHrdz': _0x35583f(0x41e)
        }, _0x4a17ad = _0x35583f(0x406)['split']('|');
    let _0x3449fe = 0x0;
    while (!![]) {
        switch (_0x4a17ad[_0x3449fe++]) {
        case '0':
            fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x20f)])() && (plinkoRow = fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x20f)])());
            continue;
        case '1':
            return _0x5d16ad[_0x35583f(0x2fb)];
        case '2':
            fengari[_0x35583f(0x374)](_0x35583f(0x229) + win + _0x35583f(0x1b4) + bets + _0x35583f(0x258) + wins + _0x35583f(0x3a9) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + _0x35583f(0x3b1) + losestreak + _0x35583f(0x2cb) + currentstreak + _0x35583f(0x210) + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + _0x35583f(0x23a) + maxbalance + _0x35583f(0x1ed) + minprofit + _0x35583f(0x154) + maxprofit + _0x35583f(0x221) + chance + _0x35583f(0x1dc) + bethigh + _0x35583f(0x1a3) + nextbet + '\x0a\x20\x20\x20\x20previousbet=' + previousbet + _0x35583f(0x39c) + profit + _0x35583f(0x2d3) + currentprofit + _0x35583f(0x35f) + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + _0x35583f(0x3ef))();
            continue;
        case '3':
            fengari['load'](_0x35583f(0x2af) + lastBet[_0x35583f(0x1f0)] + _0x35583f(0x1dd) + lastBet[_0x35583f(0x1f0)] + _0x35583f(0x233) + lastBet[_0x35583f(0x2b6)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=\x20' + lastBet[_0x35583f(0x2b6)] + _0x35583f(0x402) + lastBet[_0x35583f(0x3c2)] + _0x35583f(0x1c2) + lastBet[_0x35583f(0x3c2)] + _0x35583f(0x17f) + lastBet['profit'] + _0x35583f(0x205) + lastBet[_0x35583f(0x2f6)] + _0x35583f(0x2dc) + lastBet[_0x35583f(0x1e6)] + _0x35583f(0x160) + lastBet[_0x35583f(0x1e6)] + ',\x0a\x20\x20\x20\x20\x20\x20result=' + lastBet[_0x35583f(0x41d)] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet[_0x35583f(0x41d)] + _0x35583f(0x421) + lastBet[_0x35583f(0x25e)] + _0x35583f(0x239) + lastBet[_0x35583f(0x25e)] + _0x35583f(0x365) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + _0x35583f(0x238))();
            continue;
        case '4':
            fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x195)])() ? (scriptname = fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x195)])(), document[_0x35583f(0x2b8)](_0x35583f(0x249))[_0x35583f(0x284)] = 'Script\x20Name:\x20' + scriptname) : (scriptname = '', document['getElementById'](_0x5d16ad[_0x35583f(0x1a9)])[_0x35583f(0x284)] = '');
            continue;
        case '5':
            fengari[_0x35583f(0x374)]('return\x20plinkoRisk')() && (plinkoRisk = fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x3d0)])());
            continue;
        case '6':
            fengari[_0x35583f(0x374)](_0x5d16ad['RnbpL'])();
            continue;
        case '7':
            fengari[_0x35583f(0x374)](_0x5d16ad[_0x35583f(0x1be)])() && (currency = fengari['load'](_0x35583f(0x41e))(), coin = String(currency)[_0x35583f(0x3f4)]());
            continue;
        }
        break;
    }
}
function randomString(_0x571910, _0xc67456) {
    const _0x5c332b = _0x26fdad, _0x4eb800 = {
            'vteus': 'abcdefghijklmnopqrstuvwxyz',
            'HAyPA': '0123456789',
            'DYZxI': function (_0x3d189e, _0x481815) {
                return _0x3d189e + _0x481815;
            },
            'juXzc': function (_0x5f0694, _0x3a7821) {
                return _0x5f0694 === _0x3a7821;
            },
            'ZmQND': _0x5c332b(0x204),
            'YnZsU': _0x5c332b(0x39d),
            'XQoJY': function (_0x4ed4a6, _0x3427a0) {
                return _0x4ed4a6 < _0x3427a0;
            },
            'UnNbH': function (_0xbe3260, _0x1a7d27) {
                return _0xbe3260 * _0x1a7d27;
            }
        }, _0x119ff9 = _0x4eb800[_0x5c332b(0x1f4)], _0x2edd4f = _0x119ff9['toUpperCase'](), _0x143120 = _0x4eb800['HAyPA'], _0xb8256e = _0x119ff9['slice'](0x0, 0x6);
    let _0xd017bd = '', _0x815e3d = '';
    if (!_0xc67456)
        _0xd017bd = _0x4eb800[_0x5c332b(0x2a3)](_0x4eb800[_0x5c332b(0x2a3)](_0x143120, _0x119ff9), _0x2edd4f);
    if (_0x4eb800[_0x5c332b(0x32b)](_0xc67456, _0x4eb800[_0x5c332b(0x2ea)]))
        _0xd017bd = _0x4eb800[_0x5c332b(0x2a3)](_0x119ff9, _0x2edd4f);
    if (_0xc67456 === _0x5c332b(0x3ca))
        _0xd017bd = _0x143120;
    if (_0xc67456 === _0x4eb800[_0x5c332b(0x14f)])
        _0xd017bd = _0x4eb800['DYZxI'](_0x143120, _0xb8256e);
    for (let _0x547996 = 0x0; _0x4eb800[_0x5c332b(0x414)](_0x547996, _0x571910); _0x547996++)
        _0x815e3d += _0xd017bd[_0x5c332b(0x30e)](Math[_0x5c332b(0x2c7)](_0x4eb800[_0x5c332b(0x32c)](Math[_0x5c332b(0x21d)](), _0xd017bd[_0x5c332b(0x2a9)])));
    return _0x815e3d;
}
function setCookie(_0x5d5b7c, _0x5943cb, _0x394af0) {
    const _0x42f049 = _0x26fdad, _0x345ddf = {
            'YNtMB': function (_0x104c0f, _0x3be1b2) {
                return _0x104c0f + _0x3be1b2;
            },
            'FJajm': function (_0x23bf73, _0x3cf051) {
                return _0x23bf73 * _0x3cf051;
            },
            'PWkto': function (_0xddc5ca, _0x327612) {
                return _0xddc5ca * _0x327612;
            },
            'XNvhL': function (_0x41ba61, _0x1bf07e) {
                return _0x41ba61 * _0x1bf07e;
            },
            'bfjyN': _0x42f049(0x409),
            'iKuNc': function (_0x4f1980, _0xa25b09) {
                return _0x4f1980 + _0xa25b09;
            },
            'dkkYB': function (_0x2e4a38, _0x26e143) {
                return _0x2e4a38 + _0x26e143;
            }
        }, _0x175a1f = new Date();
    _0x175a1f['setTime'](_0x345ddf[_0x42f049(0x28b)](_0x175a1f[_0x42f049(0x2c3)](), _0x345ddf[_0x42f049(0x33d)](_0x345ddf[_0x42f049(0x288)](_0x345ddf[_0x42f049(0x2e1)](_0x345ddf[_0x42f049(0x33d)](_0x394af0, 0x18), 0x3c), 0x3c), 0x3e8)));
    let _0xa73d02 = _0x345ddf[_0x42f049(0x172)] + _0x175a1f['toUTCString']();
    document['cookie'] = _0x345ddf['YNtMB'](_0x345ddf[_0x42f049(0x395)](_0x345ddf[_0x42f049(0x28b)](_0x345ddf[_0x42f049(0x22c)](_0x5d5b7c, '=') + _0x5943cb, ';'), _0xa73d02), _0x42f049(0x245));
}
function getCookie(_0x41139f) {
    const _0x2a2c1c = _0x26fdad, _0x34c92f = {
            'NJYyv': function (_0x4b26cb, _0x595975) {
                return _0x4b26cb + _0x595975;
            },
            'rRPdj': function (_0xed623f, _0x1e5a91) {
                return _0xed623f(_0x1e5a91);
            },
            'foiys': function (_0x553afd, _0x537f4e) {
                return _0x553afd < _0x537f4e;
            },
            'KhYCr': function (_0x38eedd, _0x21c391) {
                return _0x38eedd === _0x21c391;
            },
            'nXptq': function (_0x222a50, _0x462697) {
                return _0x222a50 === _0x462697;
            }
        };
    _0x41139f = _0x34c92f[_0x2a2c1c(0x38a)](_0x41139f, '=');
    let _0x27b921 = _0x34c92f['rRPdj'](decodeURIComponent, document['cookie']), _0x55bc0d = _0x27b921[_0x2a2c1c(0x354)](';');
    for (let _0xa8f39f = 0x0; _0x34c92f[_0x2a2c1c(0x391)](_0xa8f39f, _0x55bc0d[_0x2a2c1c(0x2a9)]); _0xa8f39f++) {
        let _0x29a908 = _0x55bc0d[_0xa8f39f];
        while (_0x34c92f[_0x2a2c1c(0x19e)](_0x29a908[_0x2a2c1c(0x30e)](0x0), '\x20')) {
            _0x29a908 = _0x29a908[_0x2a2c1c(0x286)](0x1);
        }
        if (_0x34c92f[_0x2a2c1c(0x396)](_0x29a908[_0x2a2c1c(0x1d3)](_0x41139f), 0x0))
            return _0x29a908[_0x2a2c1c(0x286)](_0x41139f[_0x2a2c1c(0x2a9)], _0x29a908[_0x2a2c1c(0x2a9)]);
    }
    return '';
}
function saveScript() {
    const _0x34397b = _0x26fdad, _0x48c59e = {
            'MShgV': _0x34397b(0x386),
            'XWvGb': _0x34397b(0x23d),
            'Dounf': function (_0x37803c, _0x211578) {
                return _0x37803c + _0x211578;
            },
            'XzzxF': _0x34397b(0x42b),
            'EERYi': _0x34397b(0x310),
            'vRQkX': '.js'
        };
    let _0x430e84 = null;
    mode === _0x48c59e[_0x34397b(0x1f7)] ? _0x430e84 = luaEditor[_0x34397b(0x235)]() : _0x430e84 = jsEditor[_0x34397b(0x235)]();
    let _0x5c9d22 = document[_0x34397b(0x272)]('a');
    _0x5c9d22[_0x34397b(0x163)] = window[_0x34397b(0x268)][_0x34397b(0x18a)](new Blob([_0x430e84], { 'type': _0x48c59e[_0x34397b(0x348)] })), _0x5c9d22[_0x34397b(0x3d8)] = mode === _0x48c59e[_0x34397b(0x1f7)] ? _0x48c59e[_0x34397b(0x297)](_0x48c59e['Dounf']('DiceScript', Date['now']()), _0x48c59e['XzzxF']) : _0x48c59e[_0x34397b(0x297)](_0x48c59e[_0x34397b(0x31a)], Date['now']()) + _0x48c59e[_0x34397b(0x3ad)], _0x5c9d22[_0x34397b(0x1c3)]();
}
function getErrMsg(_0x1ecf35) {
    const _0x4727b9 = _0x26fdad, _0x397105 = _0x1ecf35[_0x4727b9(0x358)] && _0x1ecf35['response']['data'] && _0x1ecf35[_0x4727b9(0x358)][_0x4727b9(0x3e2)][_0x4727b9(0x24c)] || _0x1ecf35[_0x4727b9(0x24c)] || _0x1ecf35[_0x4727b9(0x31d)]();
    return _0x397105;
}

function _0x4f16() {
    const _0x4e9ad8 = [
        'WDB',
        '415046xjzvKV',
        '0|6|1|2|7|4|5|3',
        '37956bnkbhL',
        '2lVgtSj',
        'clientSeed',
        'DsOsV',
        'updateStatic',
        'rsgPj',
        '1694898vWmFTh',
        'DrFNH',
        '113780zYydUz',
        'getDiceResult',
        'ditFi',
        'AsGjc',
        '483iJrHqa',
        'DFuZU',
        'RkHAp',
        'serverSeed',
        '16108xqrtop',
        '6359072rmCHeO',
        'OQpNM',
        'gSZfk',
        '1|4|3|0|2',
        'getBalance',
        'dbsRJ',
        'maxbalance=',
        'NeBzO',
        'minbalance=',
        'load',
        'profit',
        'under',
        'split',
        '1569525rHQoWq',
        'UPkCg',
        '1|2|3|4|0',
        'OzKMR',
        'ntmGk',
        'wJsOc',
        'resultNumber',
        'gUbVA',
        'balance=',
        'round',
        'roll',
        'vYPCT',
        'over',
        'WKtTB',
        'XCnZQ',
        '246gCblgw',
        'jlQPx',
        'maNQk',
        'nonce',
        'DYmga'
    ];
    _0x4f16 = function () {
        return _0x4e9ad8;
    };
    return _0x4f16();
}
(function (_0x3feaf5, _0x31ebe8) {
    const _0x2a6c5d = _0x4971, _0x2d25a5 = _0x3feaf5();
    while (!![]) {
        try {
            const _0x492a0b = parseInt(_0x2a6c5d(0x1d9)) / 0x1 * (parseInt(_0x2a6c5d(0x1d6)) / 0x2) + parseInt(_0x2a6c5d(0x1d0)) / 0x3 * (parseInt(_0x2a6c5d(0x1e8)) / 0x4) + parseInt(_0x2a6c5d(0x1f6)) / 0x5 + -parseInt(_0x2a6c5d(0x1d8)) / 0x6 * (-parseInt(_0x2a6c5d(0x1e4)) / 0x7) + -parseInt(_0x2a6c5d(0x1e9)) / 0x8 + -parseInt(_0x2a6c5d(0x1de)) / 0x9 + -parseInt(_0x2a6c5d(0x1e0)) / 0xa;
            if (_0x492a0b === _0x31ebe8)
                break;
            else
                _0x2d25a5['push'](_0x2d25a5['shift']());
        } catch (_0x5b4d0e) {
            _0x2d25a5['push'](_0x2d25a5['shift']());
        }
    }
}(_0x4f16, 0x7a553), decimalAmountView = emulator['decimal'], decimalTargetResult = 0x0);
async function beforeWork() {
}
function _0x4971(_0x33e6ea, _0x37134d) {
    const _0x4f167b = _0x4f16();
    return _0x4971 = function (_0x497133, _0x13c36e) {
        _0x497133 = _0x497133 - 0x1ce;
        let _0x9e2e14 = _0x4f167b[_0x497133];
        return _0x9e2e14;
    }, _0x4971(_0x33e6ea, _0x37134d);
}
async function getListCoin() {
    const _0x3af2c7 = _0x4971, _0x5c5a81 = {
            'RgQdS': _0x3af2c7(0x1f8),
            'dbsRJ': function (_0x3ba958) {
                return _0x3ba958();
            },
            'OzKMR': _0x3af2c7(0x1d5),
            'FCGFc': function (_0x57e609) {
                return _0x57e609();
            },
            'pAwht': function (_0x31bca4, _0x54d11a) {
                return _0x31bca4(_0x54d11a);
            },
            'AsGjc': function (_0x4cdb2c, _0x8a3a24) {
                return _0x4cdb2c(_0x8a3a24);
            }
        };
    try {
        const _0x2dc958 = _0x5c5a81['RgQdS'][_0x3af2c7(0x1f5)]('|');
        let _0x362424 = 0x0;
        while (!![]) {
            switch (_0x2dc958[_0x362424++]) {
            case '0':
                return _0x5c5a81[_0x3af2c7(0x1ee)](checkbalance);
            case '1':
                coins = [_0x5c5a81[_0x3af2c7(0x1f9)]];
                continue;
            case '2':
                coins = coins['sort']();
                continue;
            case '3':
                coin = coins[0x0];
                continue;
            case '4':
                _0x5c5a81['FCGFc'](drawSelectCoin);
                continue;
            }
            break;
        }
    } catch (_0xf7d683) {
        return stop(), _0x5c5a81['pAwht'](log, _0x5c5a81[_0x3af2c7(0x1e3)](getErrMsg, _0xf7d683));
    }
}
async function checkbalance() {
    const _0x5d5d62 = _0x4971, _0x3ae425 = {
            'UPkCg': _0x5d5d62(0x1d7),
            'ditFi': function (_0xff7835) {
                return _0xff7835();
            },
            'jlQPx': function (_0x2e375d, _0x428763) {
                return _0x2e375d + _0x428763;
            },
            'NeBzO': _0x5d5d62(0x1ef),
            'DFuZU': function (_0x15ac90, _0x2d7f59) {
                return _0x15ac90 + _0x2d7f59;
            },
            'DYmga': _0x5d5d62(0x1fe),
            'WKtTB': _0x5d5d62(0x1f1),
            'gSZfk': function (_0x2cce34) {
                return _0x2cce34();
            },
            'gUbVA': function (_0x44acad, _0x48feba) {
                return _0x44acad(_0x48feba);
            }
        };
    try {
        const _0x1aa490 = _0x3ae425[_0x5d5d62(0x1f7)][_0x5d5d62(0x1f5)]('|');
        let _0x2968de = 0x0;
        while (!![]) {
            switch (_0x1aa490[_0x2968de++]) {
            case '0':
                balance = emulator[_0x5d5d62(0x1ed)]();
                continue;
            case '1':
                startBalance = balance;
                continue;
            case '2':
                minbalance = balance;
                continue;
            case '3':
                return _0x3ae425[_0x5d5d62(0x1e2)](updateStats);
            case '4':
                maxbalance = balance;
                continue;
            case '5':
                fengari['load'](_0x3ae425[_0x5d5d62(0x1d1)](_0x3ae425[_0x5d5d62(0x1f0)], balance))();
                continue;
            case '6':
                fengari[_0x5d5d62(0x1f2)](_0x3ae425[_0x5d5d62(0x1e5)](_0x3ae425[_0x5d5d62(0x1d4)], balance))();
                continue;
            case '7':
                fengari[_0x5d5d62(0x1f2)](_0x3ae425[_0x5d5d62(0x1e5)](_0x3ae425[_0x5d5d62(0x1ce)], balance))();
                continue;
            }
            break;
        }
    } catch (_0x54f753) {
        return _0x3ae425[_0x5d5d62(0x1eb)](stop), log(_0x3ae425[_0x5d5d62(0x1fd)](getErrMsg, _0x54f753));
    }
}
async function resetseed() {
    const _0x5cbe41 = _0x4971, _0x5f72d = {
            'XCnZQ': function (_0x245cc0, _0x4536cb) {
                return _0x245cc0(_0x4536cb);
            },
            'yhQjE': function (_0x29f65a, _0x300ba7) {
                return _0x29f65a(_0x300ba7);
            }
        };
    try {
        return emulator[_0x5cbe41(0x1da)] = randomString(0xc), emulator[_0x5cbe41(0x1e7)] = _0x5f72d[_0x5cbe41(0x1cf)](randomString, 0x20), emulator[_0x5cbe41(0x1dc)]();
    } catch (_0xd03c9a) {
        return stop(), log(_0x5f72d['yhQjE'](getErrMsg, _0xd03c9a));
    }
}
async function sendBet() {
    const _0x3ee60d = _0x4971, _0x1a0fa2 = {
            'DrFNH': function (_0x297a3e, _0x2b09c8) {
                return _0x297a3e / _0x2b09c8;
            },
            'rsgPj': function (_0x17fad6, _0x133db6) {
                return _0x17fad6 * _0x133db6;
            },
            'qzSaa': function (_0x15fe8f, _0x5d366a) {
                return _0x15fe8f + _0x5d366a;
            },
            'maNQk': function (_0x3c0511, _0x214c99) {
                return _0x3c0511 - _0x214c99;
            },
            'ntmGk': function (_0x3c6b56, _0x162741) {
                return _0x3c6b56 * _0x162741;
            },
            'OQpNM': _0x3ee60d(0x202),
            'nEEGR': function (_0x2307ba, _0x575db7) {
                return _0x2307ba(_0x575db7);
            },
            'wJsOc': function (_0x56f2d4) {
                return _0x56f2d4();
            },
            'DsOsV': function (_0x40a792, _0x509e59) {
                return _0x40a792(_0x509e59);
            }
        };
    try {
        chance = _0x1a0fa2[_0x3ee60d(0x1df)](Math[_0x3ee60d(0x1ff)](_0x1a0fa2[_0x3ee60d(0x1dd)](_0x1a0fa2['qzSaa'](chance, Number['EPSILON']), 0x64)), 0x64), target = bethigh ? _0x1a0fa2[_0x3ee60d(0x1d2)](0x270f, _0x1a0fa2[_0x3ee60d(0x1fa)](chance, 0x64)) : _0x1a0fa2[_0x3ee60d(0x1dd)](chance, 0x64);
        const _0x2b1ee4 = bethigh ? _0x1a0fa2[_0x3ee60d(0x1ea)] : _0x3ee60d(0x1f4), _0x254d33 = await emulator[_0x3ee60d(0x1e1)](nextbet, target, _0x2b1ee4);
        return _0x1a0fa2['nEEGR'](handleResult, _0x254d33);
    } catch (_0x399175) {
        return _0x1a0fa2[_0x3ee60d(0x1fb)](stop), _0x1a0fa2[_0x3ee60d(0x1db)](log, _0x1a0fa2[_0x3ee60d(0x1db)](getErrMsg, _0x399175));
    }
}
async function handleResult(_0x573709) {
    const _0x511c99 = _0x4971, _0x4c92f2 = {
            'RkHAp': _0x511c99(0x1ec),
            'vYPCT': function (_0x252579, _0x221f1c, _0x21b5d4) {
                return _0x252579(_0x221f1c, _0x21b5d4);
            },
            'YxiGx': function (_0x5eb8d9) {
                return _0x5eb8d9();
            }
        };
    try {
        const _0x667a81 = _0x4c92f2[_0x511c99(0x1e6)][_0x511c99(0x1f5)]('|');
        let _0xd8ff1e = 0x0;
        while (!![]) {
            switch (_0x667a81[_0xd8ff1e++]) {
            case '0':
                lastBet[_0x511c99(0x1d3)] = _0x573709[_0x511c99(0x1d3)];
                continue;
            case '1':
                currentprofit = _0x573709[_0x511c99(0x1f3)];
                continue;
            case '2':
                return _0x4c92f2[_0x511c99(0x201)](setTimeout, handleStats, 0x64);
            case '3':
                result = _0x573709[_0x511c99(0x1fc)];
                continue;
            case '4':
                lastBet[_0x511c99(0x200)] = _0x573709[_0x511c99(0x1fc)] / 0x64;
                continue;
            }
            break;
        }
    } catch (_0x3140f2) {
        return _0x4c92f2['YxiGx'](stop), log(getErrMsg(_0x3140f2));
    }
}
