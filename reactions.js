//Define the chemistry
var ochem = new chemie();

//Mechanisms
var Ae = new mechanism('Ae', 'Elektrofiele Additie', '#0ff');
var An = new mechanism('An','Nucleofiele Additie', '#99f');
var EAS = new mechanism('EAS','Elektrofiele Aromatische Substitutie','#f66');
var Sn = new mechanism('Sn','Nucleofiele Substitutie', '#ff6');
var E = new mechanism('E','Eliminatie', '#6f6');
var R = new mechanism('R','Radicaal', '#a6a');
var normal = new mechanism('normal','niet-organische', '#888');

var mechanisms = [Ae, An, EAS, Sn, E, R, normal];

//Classes
var alkaan = ochem.addOClass('alkaan','R');
var alkeen = ochem.addOClass('alkeen','R=R\'');
var alkyn = ochem.addOClass('alkyn','R=-R\'');
var aromaat = ochem.addOClass('aromaat','Ar');

var halogenide = ochem.addOClass('halogenide','R-X');
var ether = ochem.addOClass('ether','R-O-R\'');
var epoxide = ochem.addOClass('epoxide','R-O-R');
var nitro = ochem.addOClass('nitro','NO2');
var thioether = ochem.addOClass('thioether','R-S-\'');
var carbonzuur = ochem.addOClass('carbonzuur','R-COOH');
var sulfonzuur = ochem.addOClass('sulfonzuur','R-SO2OH');
var ester = ochem.addOClass('ester','R-C00-R\'');
var zuurchloride = ochem.addOClass('zuurchloride','R-C=O-Cl');
var amide = ochem.addOClass('amide','R-C=O-NR\'R"');
var nitril = ochem.addOClass('nitril','R-C=-N');
var aldehyde = ochem.addOClass('aldehyde','R-CH=O');
var keton = ochem.addOClass('keton','R-CR\'=O');
var alcohol = ochem.addOClass('alcohol','R-OH');
var thiol = ochem.addOClass('thiol','R-SH');
var amine = ochem.addOClass('amine','R-NR\'R"');

var Grignard = ochem.addOClass('Grignard','R-MgX');
var organoCadmium = ochem.addOClass('organoCadmium','R2-Cd');
var imine = ochem.addOClass('imine','R=NR\'');
var acetaal = ochem.addOClass('acetaal','RR\'OR"OR\'"');
var hydroxynitril = ochem.addOClass('hydroxynitril','RR\'OHCN');
var hydroxycarbonzuur = ochem.addOClass('hydroxycarbonzuur','RR\'OHCOOH');
var oxim = ochem.addOClass('oxim','R=ONOH');
var diazoniumzout = ochem.addOClass('diazoniumzout','Ar-N2');

//Reactions
ochem.addReaction(alkeen, halogenide, Ae, 46, "HX",'zuur','');
ochem.addReaction(alkeen, alcohol, Ae, 46, 'H2O evenwicht zie p88', 'zuur', 'water');
ochem.addReaction(alkyn, halogenide, Ae, 46, 'HX, (onverzadigde halogenide)', 'zuur', '');
ochem.addReaction(alkyn, keton, Ae, 46, 'H2O,tautomerisatie', 'zuur', '');
ochem.addReaction(alkeen, halogenide, Ae, 47, 'X2, => dihalogeenverbinding of alpha-halogeenalcohol (in water)', '', '');
ochem.addReaction(alkeen, alcohol, Ae, 47, 'X2, => alpha-halogeenalcohol (in water)', '', '');
ochem.addReaction(alcohol, epoxide, Sn, 49, 'alpha-halogeenalcohol => -X', 'Base', '');

ochem.addReaction(aldehyde, alcohol, An, 52, 'Grignard, opwerking met zuur', '', '');
ochem.addReaction(keton, alcohol, An, 52, 'Grignard, opwerking met zuur', '', '');
ochem.addReaction(halogenide, Grignard, normal, 52, 'Mg', '', '');
ochem.addReaction(zuurchloride, keton, Sn, 53, 'Grignard, -MgXCl, ==> tertiare alcohol', '', '');
ochem.addReaction(ester, keton, Sn, 53, 'Grignard, -ROMgX ==> tertiare alcohol', '', '');
ochem.addReaction(Grignard, organoCadmium, normal, 53, '+CdCl2 - MgX2 - MgCl2', '', '');
ochem.addReaction(zuurchloride, keton, Sn, 53, 'loopt niet door naar alcohol', '', '');
ochem.addReaction(keton, alcohol, An, 54, '1) NaBH4 of LiAlH4 2) H3O+', '', '');
ochem.addReaction(ester, alcohol, An, 54, '1) LiAlH4 (geen NaBH4) 2) H3O+, loopt ook via Sn', '', '');
ochem.addReaction(keton, imine, An, 55, 'NH2R (niet te zuur)', 'zuur', 'water');
ochem.addReaction(keton, oxim, An, 55, 'NH2OH (niet te zuur)', 'zuur', 'water');
ochem.addReaction(alkeen, thiol, An, 55, 'Michael-additie', '', '');
ochem.addReaction(keton, alcohol, An, 56, 'dubbele binding nabij, organometaalverbinding, H20, H+, deels terug naar keton', '', '');
ochem.addReaction(nitril, amine, An, 57, '1) LiAlH4 2) H30+', '', '');
ochem.addReaction(nitril, imine, An, 57, 'DIBAL, imine <-> keton, evenwicht via water', 'zuur', '');
ochem.addReaction(Grignard, carbonzuur, An, 58, '1) C02 2) H30+', '', '');
ochem.addReaction(Grignard, aldehyde, An, 59, '1) dimethylformamide:H-C=ON(CH3)2 2) H30+', '', '');
ochem.addReaction(imine, amine, An, 59, '1) NaBH4 2) H30+ of H2/Pd', '', '');
ochem.addReaction(keton, acetaal, An, 60, 'R"OH', 'zuur', 'H20');
ochem.addReaction(keton, hydroxynitril, An, 61, 'HCN, gepaste pH', '', '');
ochem.addReaction(hydroxynitril, hydroxycarbonzuur, An, 61, 'hydrolyse', '', '');
ochem.addReaction(keton, oxim, An, 61, 'Beckmanomlegging om NH te verplaatsen', '', '');

ochem.addReaction(nitril, carbonzuur, An, 57, '(mechanisme niet kennen)', '', '');

ochem.addReaction(aromaat, halogenide, EAS, 64, 'aromaat-halegonide', 'FeX3 of BrX3 "of e-rijke aromaat"', '');
ochem.addReaction(aromaat, nitro, EAS, 64, 'HNO3', 'nitreerzuur: HNO3 en H2SO4', '');
ochem.addReaction(aromaat, sulfonzuur, EAS, 65, 'H2SO4', '', '');
ochem.addReaction(aromaat, aromaat, EAS, 65, '+halogenide => alkylering: alkylaromaat, Friedel-Crafts-reactie', 'AlX3', 'HCl');
ochem.addReaction(aromaat, aromaat, EAS, 65, '+zuurchloride => acylering: aromatische keton, Friedel-Crafts-reactie', 'AlCl3', '');
ochem.addReaction(nitro, amine, EAS, 72, 'H2 (nitrobenzeen -> benzeenamine)', '?', '');
ochem.addReaction(amine, diazoniumzout, EAS, 73, 'NaNO2, HCl, 0°C', '', '');
ochem.addReaction(diazoniumzout, alcohol, EAS, 73, 'H20, verwarming', '', '');
ochem.addReaction(diazoniumzout, halogenide, EAS, 73, '+NaX (X=Cl,Br,I)', 'CuX (behalve voor I)', '');
ochem.addReaction(diazoniumzout, nitril, EAS, 73, '+NaCn (=>ArCN)', 'CuCN', '');
ochem.addReaction(diazoniumzout, halogenide, EAS, 73, '+NaBF4 => X=F', '', '');
ochem.addReaction(diazoniumzout, aromaat, EAS, 73, '+H3PO2', '', '');

ochem.addReaction(halogenide, alcohol, Sn, 80, 'alifatische en aromatische', '', '');
ochem.addReaction(halogenide, ester, Sn, 80, 'alifatische en aromatische', '', '');
ochem.addReaction(halogenide, thiol, Sn, 80, 'alifatische en aromatische', '', '');
ochem.addReaction(halogenide, thioether, Sn, 80, 'alifatische en aromatische', '','');
ochem.addReaction(halogenide, amine, Sn, 80, 'alifatische en aromatische', '', '');
ochem.addReaction(halogenide, nitril, Sn, 80, 'enkel alifatische', '', '');
ochem.addReaction(halogenide, alkaan, Sn, 80, '+Grignard, enkel alifatische', '', '');
ochem.addReaction(alcohol, halogenide, Sn, 80, 'alcohol eerst protoneren', 'H+', '');
ochem.addReaction(epoxide, alcohol, Sn, 81, '1)RMgX 2)H30+, "2-alcohol"', '', '');
ochem.addReaction(epoxide, amine, Sn, 81, '+RNH2->2-gefunctionaliseerde alcohol', '', '');
ochem.addReaction(epoxide, ether, Sn, 81, '1)RO- 2)H30+ ->2-gefunctionaliseerde alcohol', '', '');
ochem.addReaction(epoxide, thioether, Sn, 81, '1)RS- 2)H30+ ->2-gefunctionaliseerde alcohol', '', '');
ochem.addReaction(zuurchloride, carbonzuur, Sn, 81, '+ROH', '', '');
ochem.addReaction(zuurchloride, amide, Sn, 81, '+RR\'NH', '', '');
ochem.addReaction(carbonzuur, ester, Sn, 83, '+alcohol', 'zuur', 'water');

ochem.addReaction(halogenide, ether, Sn, 86, '+ROH', '', '');
ochem.addReaction(halogenide, ether, Sn, 86, '+RO- (ook alkeen gevormd <-> +ROH)', '', '');
ochem.addReaction(halogenide, alkeen, E, 86, '+RO- (ook ether gevormd <-> +ROH)', '', '');
ochem.addReaction(alcohol, alkeen, E, 87, 'E1cb-eliminatie', '', '');
ochem.addReaction(alcohol, alkeen, E, 88, 'E1 of E2, evenwicht van p. 46', 'zuur', 'water');
ochem.addReaction(keton, alkeen, E, 88, 'zelfcondensatie, E1cb', 'base', '');

ochem.addReaction(alkaan, halogenide, R, 91, 'radicalisering, soms met radicaalinitiator', '', '');