J$.iids = {"8":[10,5,10,20],"9":[2,10,2,17],"10":[10,5,10,20],"16":[11,5,11,19],"17":[2,18,2,22],"18":[11,5,11,19],"24":[12,5,12,20],"25":[2,10,2,23],"26":[12,5,12,20],"32":[17,5,17,11],"33":[2,10,2,23],"40":[20,5,20,10],"41":[2,10,2,23],"49":[5,14,5,16],"57":[5,24,5,32],"65":[5,34,5,38],"73":[5,14,5,39],"75":[5,14,5,23],"81":[5,14,5,39],"89":[5,14,5,39],"97":[6,13,6,15],"105":[6,23,6,30],"113":[6,32,6,36],"121":[6,13,6,37],"123":[6,13,6,22],"129":[6,13,6,37],"137":[6,13,6,37],"145":[7,14,7,16],"153":[7,24,7,32],"161":[7,34,7,38],"169":[7,14,7,39],"171":[7,14,7,23],"177":[7,14,7,39],"185":[7,14,7,39],"193":[10,5,10,11],"201":[10,15,10,20],"209":[11,5,11,10],"217":[11,14,11,19],"225":[12,5,12,11],"233":[12,15,12,20],"241":[15,9,15,13],"249":[15,9,15,13],"257":[15,1,15,14],"265":[16,10,16,14],"273":[16,10,16,14],"281":[16,1,16,15],"289":[17,5,17,11],"297":[18,11,18,16],"305":[18,11,18,16],"313":[18,3,18,17],"321":[20,5,20,10],"329":[21,12,21,17],"337":[21,12,21,17],"345":[21,3,21,18],"353":[1,1,23,20],"361":[1,1,23,20],"369":[1,1,23,20],"377":[1,1,23,20],"385":[1,1,23,20],"393":[10,1,10,24],"401":[11,1,11,23],"409":[12,1,12,24],"417":[17,1,19,2],"425":[20,1,22,2],"433":[1,1,23,20],"441":[1,1,23,20],"nBranches":10,"originalCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest_bool.js","instrumentedCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest_bool_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\nvar S$ = require('S$');\n\n/* SYMBOLIC VARS */\nvar ucon_x = S$.symbol('ucon_x', true);\nvar con_y = S$.symbol('con_y', true);\nvar ucon_z = S$.symbol('ucon_z', true);\n\n/* NECESSARY CONRETE TESTS */\nif (ucon_x == false) {}\nif (con_y == false) {}\nif (ucon_z == false) {}\n\n/* MAIN JS PROGRAM */\ncon_y = true\nucon_z = true\nif (ucon_x){\n  con_y = false\n}\nif (con_y){\n  ucon_z = false\n}\n/// END OF FILE ///\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(353, '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest_bool_jalangi_.js', '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest_bool.js');
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'ucon_x', ucon_x, 0);
            J$.N(377, 'con_y', con_y, 0);
            J$.N(385, 'ucon_z', ucon_z, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var ucon_x = J$.X1(89, J$.W(81, 'ucon_x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'ucon_x', 21, false), J$.T(65, true, 23, false)), ucon_x, 3));
            var con_y = J$.X1(137, J$.W(129, 'con_y', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'con_y', 21, false), J$.T(113, true, 23, false)), con_y, 3));
            var ucon_z = J$.X1(185, J$.W(177, 'ucon_z', J$.M(169, J$.R(145, 'S$', S$, 1), 'symbol', 0)(J$.T(153, 'ucon_z', 21, false), J$.T(161, true, 23, false)), ucon_z, 3));
            if (J$.X1(393, J$.C(8, J$.B(10, '==', J$.R(193, 'ucon_x', ucon_x, 1), J$.T(201, false, 23, false), 0)))) {
            }
            if (J$.X1(401, J$.C(16, J$.B(18, '==', J$.R(209, 'con_y', con_y, 1), J$.T(217, false, 23, false), 0)))) {
            }
            if (J$.X1(409, J$.C(24, J$.B(26, '==', J$.R(225, 'ucon_z', ucon_z, 1), J$.T(233, false, 23, false), 0)))) {
            }
            J$.X1(257, con_y = J$.W(249, 'con_y', J$.T(241, true, 23, false), con_y, 2));
            J$.X1(281, ucon_z = J$.W(273, 'ucon_z', J$.T(265, true, 23, false), ucon_z, 2));
            if (J$.X1(417, J$.C(32, J$.R(289, 'ucon_x', ucon_x, 1)))) {
                J$.X1(313, con_y = J$.W(305, 'con_y', J$.T(297, false, 23, false), con_y, 2));
            }
            if (J$.X1(425, J$.C(40, J$.R(321, 'con_y', con_y, 1)))) {
                J$.X1(345, ucon_z = J$.W(337, 'ucon_z', J$.T(329, false, 23, false), ucon_z, 2));
            }
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
