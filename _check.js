
/* ============ DATA ============ */
const SAMPLE = {"name":"Lari sore \u2014 loop Teluk Pucung (contoh)","type":"Run","points":[[-6.215812,107.028452,10.2,0.0],[-6.215471,107.028587,9.9,13.2],[-6.2152,107.028695,10.2,24.0],[-6.214964,107.028808,10.3,33.4],[-6.214629,107.028968,10.3,46.7],[-6.214587,107.028988,9.9,48.4],[-6.214458,107.029044,10.2,53.3],[-6.214296,107.029114,9.7,59.8],[-6.214098,107.029201,9.9,67.4],[-6.213869,107.029329,9.6,76.9],[-6.213498,107.0295,9.8,91.7],[-6.213111,107.029608,9.3,106.0],[-6.21292,107.029767,9.2,114.6],[-6.212727,107.029793,9.4,124.5],[-6.212549,107.029892,9.3,131.9],[-6.212319,107.029906,9.6,140.1],[-6.211758,107.03016,9.4,161.8],[-6.211182,107.030325,9.7,183.7],[-6.210806,107.030412,9.6,198.0],[-6.210969,107.030584,9.8,209.9],[-6.210998,107.030614,10.0,211.4],[-6.211207,107.030834,9.6,222.5],[-6.211272,107.030902,9.6,226.0],[-6.211315,107.030948,10.2,228.4],[-6.211495,107.031259,9.6,242.2],[-6.212091,107.032236,11.0,285.4],[-6.212737,107.033324,12.0,330.6],[-6.213012,107.033771,11.9,349.9],[-6.213078,107.033877,12.8,354.3],[-6.213147,107.034018,13.0,359.9],[-6.213166,107.034056,12.7,361.4],[-6.213161,107.034097,12.9,363.4],[-6.213165,107.034158,13.0,365.7],[-6.213232,107.034146,12.4,369.1],[-6.21331,107.034108,12.8,372.3],[-6.213341,107.034086,12.9,373.6],[-6.213391,107.034041,13.2,376.0],[-6.21354,107.033979,13.3,381.8],[-6.213647,107.03391,13.4,386.2],[-6.213775,107.033841,13.3,391.3],[-6.213937,107.033773,13.7,397.5],[-6.214016,107.033723,13.5,400.7],[-6.214068,107.033692,13.6,402.8],[-6.214314,107.033533,13.2,413.0],[-6.214369,107.033495,13.0,415.3],[-6.214742,107.033231,13.3,430.9],[-6.214819,107.03318,13.5,433.9],[-6.214922,107.033141,13.3,437.6],[-6.214969,107.033124,14.0,439.3],[-6.215065,107.033099,13.7,442.6],[-6.215171,107.033084,13.8,446.3],[-6.215285,107.033078,13.8,450.2],[-6.215513,107.033047,13.9,457.9],[-6.215784,107.033013,13.6,467.3],[-6.215929,107.033004,13.1,472.3],[-6.216013,107.032995,13.9,475.2],[-6.216176,107.032976,13.8,480.7],[-6.216222,107.032954,13.5,482.4],[-6.216267,107.032966,13.5,484.6],[-6.216342,107.032955,13.6,487.1],[-6.216538,107.032932,12.9,493.9],[-6.216801,107.032904,13.4,502.8],[-6.217039,107.032882,12.8,511.0],[-6.217328,107.032864,12.4,521.0],[-6.217422,107.032858,12.5,524.3],[-6.217561,107.032846,12.9,529.0],[-6.217691,107.032842,12.3,533.5],[-6.217835,107.032851,12.7,538.6],[-6.217929,107.032883,12.9,542.1],[-6.218144,107.032977,12.2,550.7],[-6.218273,107.033029,12.0,555.6],[-6.218456,107.033107,11.9,562.8],[-6.218731,107.033226,11.8,573.6],[-6.218887,107.033291,11.8,579.8],[-6.219088,107.03338,11.4,588.2],[-6.21919,107.033442,11.4,592.8],[-6.21931,107.033508,10.7,598.0],[-6.219385,107.033542,10.7,601.3],[-6.219528,107.033607,10.7,607.5],[-6.219625,107.033648,11.1,611.8],[-6.219786,107.033704,10.5,618.8],[-6.219933,107.033693,10.7,624.9],[-6.219986,107.033692,10.1,627.1],[-6.220221,107.033606,10.0,637.7],[-6.220311,107.033572,10.1,641.8],[-6.220557,107.033482,10.4,653.0],[-6.220608,107.033485,10.4,655.1],[-6.220651,107.033487,10.3,657.0],[-6.220696,107.03348,9.9,659.0],[-6.220848,107.03344,10.1,665.8],[-6.221057,107.033377,10.0,675.2],[-6.221168,107.033352,9.9,680.1],[-6.221277,107.033331,9.5,685.0],[-6.221448,107.033298,10.3,693.0],[-6.221519,107.033287,9.6,696.3],[-6.221638,107.033271,10.3,701.9],[-6.221774,107.033249,10.2,708.1],[-6.221885,107.033233,9.3,713.2],[-6.221995,107.033221,9.7,718.6],[-6.222062,107.033214,10.1,721.9],[-6.222232,107.033188,10.2,730.3],[-6.222279,107.033179,9.7,732.6],[-6.222375,107.033155,9.5,737.4],[-6.22244,107.033142,9.5,740.5],[-6.22256,107.033145,10.2,780.6],[-6.222608,107.033146,9.5,796.6],[-6.222758,107.033154,9.9,846.7],[-6.222821,107.03316,9.5,867.8],[-6.223002,107.03317,9.9,928.3],[-6.223076,107.033166,10.3,953.0],[-6.223235,107.033134,9.5,1007.1],[-6.223371,107.03304,10.3,1015.4],[-6.223462,107.03295,10.0,1021.7],[-6.223639,107.032761,10.5,1034.5],[-6.223715,107.032638,10.3,1042.1],[-6.223821,107.032443,9.9,1052.8],[-6.223934,107.03222,10.7,1065.1],[-6.223995,107.032142,10.3,1069.9],[-6.224059,107.03209,9.9,1073.9],[-6.22419,107.03202,9.9,1081.5],[-6.224596,107.03182,10.6,1104.2],[-6.224659,107.031974,10.6,1116.0],[-6.224797,107.032306,10.5,1133.3],[-6.224828,107.032333,10.4,1135.4],[-6.224848,107.032359,10.6,1137.1],[-6.22491,107.032612,10.6,1149.9],[-6.224848,107.032359,11.2,1167.6],[-6.224828,107.032333,10.3,1169.2],[-6.224797,107.032306,11.1,1171.3],[-6.224659,107.031974,11.2,1188.8],[-6.224596,107.03182,10.5,1196.7],[-6.22419,107.03202,11.2,1226.4],[-6.224059,107.03209,11.0,1233.2],[-6.223995,107.032142,11.1,1237.1],[-6.223934,107.03222,10.5,1241.4],[-6.223821,107.032443,10.5,1252.4],[-6.223715,107.032638,10.4,1262.5],[-6.223639,107.032761,10.9,1269.0],[-6.223462,107.03295,10.4,1280.4],[-6.223371,107.03304,10.0,1286.0],[-6.223235,107.033134,10.0,1293.3],[-6.223076,107.033166,9.7,1300.1],[-6.223002,107.03317,9.4,1303.2],[-6.223036,107.033606,9.1,1329.0],[-6.22304,107.033724,9.7,1334.0],[-6.22303,107.034007,8.9,1346.3],[-6.223036,107.034215,9.4,1355.4],[-6.22302,107.034324,8.6,1360.1],[-6.222996,107.03453,8.4,1368.9],[-6.222978,107.03472,8.4,1376.7],[-6.222971,107.03487,7.9,1383.2],[-6.222974,107.03492,8.0,1385.4],[-6.222978,107.035019,8.5,1389.4],[-6.222998,107.035182,8.3,1396.3],[-6.223021,107.035621,7.7,1415.4],[-6.223053,107.036186,7.0,1439.4],[-6.223062,107.03644,7.0,1450.7],[-6.222882,107.036471,6.9,1461.7],[-6.222202,107.03661,5.9,1490.9],[-6.221901,107.036666,5.9,1504.1],[-6.22176,107.036657,5.1,1510.2],[-6.221682,107.036664,5.8,1513.7],[-6.221582,107.036664,5.4,1518.2],[-6.221512,107.036674,5.7,1521.4],[-6.221466,107.036687,5.6,1523.5],[-6.2214,107.036707,5.2,1526.5],[-6.221349,107.036733,4.9,1529.0],[-6.221383,107.036811,5.8,1534.3],[-6.221423,107.036963,4.9,1541.4],[-6.221462,107.037075,5.2,1546.5],[-6.221515,107.037378,5.0,1559.6],[-6.221543,107.037676,5.0,1572.5],[-6.221553,107.037793,5.4,1577.6],[-6.221523,107.038108,5.7,1591.2],[-6.221504,107.038354,5.0,1601.9],[-6.221451,107.038563,5.5,1611.5],[-6.221401,107.038656,5.1,1616.1],[-6.221319,107.038805,5.4,1623.6],[-6.221224,107.038915,5.3,1630.1],[-6.221169,107.039007,5.2,1634.9],[-6.220993,107.039175,5.3,1645.5],[-6.220924,107.03925,5.3,1649.9],[-6.220955,107.03929,6.1,1652.8],[-6.220971,107.039318,5.7,1654.1],[-6.221001,107.039368,5.4,1656.6],[-6.220637,107.039598,6.3,1680.7],[-6.220844,107.04002,6.7,1706.2],[-6.220764,107.040058,6.2,1711.0],[-6.220593,107.040136,6.0,1718.6],[-6.22056,107.04015,6.1,1720.0],[-6.220427,107.040174,6.0,1725.5],[-6.219527,107.040277,6.8,1760.0],[-6.219465,107.040303,6.5,1782.4],[-6.21945,107.04033,6.7,1792.6],[-6.219459,107.040385,6.7,1811.1],[-6.219499,107.040439,7.1,1833.4],[-6.219544,107.040454,7.4,1849.3],[-6.219499,107.040439,7.3,1865.1],[-6.219459,107.040385,7.0,1887.4],[-6.21945,107.04033,7.0,1889.5],[-6.219465,107.040303,7.1,1891.0],[-6.219527,107.040277,7.0,1894.3],[-6.220427,107.040174,7.1,1924.9],[-6.22056,107.04015,6.9,1929.5],[-6.220593,107.040136,7.1,1930.7],[-6.220764,107.040058,7.8,1937.2],[-6.220844,107.04002,6.9,1940.1],[-6.220637,107.039598,7.2,1961.8],[-6.221012,107.039387,7.2,1981.0],[-6.22105,107.039358,7.5,1982.5],[-6.221076,107.039338,6.8,1983.6],[-6.221177,107.039256,6.8,1987.8],[-6.221346,107.039073,6.7,1995.6],[-6.221502,107.038876,6.7,2003.6],[-6.221621,107.038637,6.6,2012.3],[-6.221719,107.038332,7.0,2022.8],[-6.221718,107.038241,6.8,2025.7],[-6.221715,107.037952,6.7,2034.8],[-6.221711,107.037684,5.7,2043.2],[-6.221695,107.037379,5.5,2053.3],[-6.221657,107.037179,6.1,2059.8],[-6.221621,107.037033,6.2,2064.5],[-6.221589,107.036927,5.7,2068.1],[-6.221561,107.036832,5.8,2071.4],[-6.221539,107.036763,5.1,2073.7],[-6.221512,107.036674,5.5,2076.9],[-6.221485,107.036553,6.0,2081.1],[-6.221458,107.036464,5.8,2084.1],[-6.22143,107.036394,5.8,2086.6],[-6.221393,107.03628,5.9,2126.3],[-6.221278,107.035995,5.1,2228.3],[-6.221129,107.035755,4.8,2322.2],[-6.221079,107.035701,4.9,2346.6],[-6.221046,107.035671,5.2,2361.5],[-6.220982,107.035617,5.4,2389.3],[-6.220953,107.0356,5.6,2400.5],[-6.220692,107.035451,5.4,2411.2],[-6.220579,107.035386,5.3,2415.9],[-6.220267,107.03528,5.4,2427.8],[-6.22013,107.035234,5.2,2433.1],[-6.220022,107.035197,5.3,2437.3],[-6.219941,107.03517,4.8,2440.5],[-6.219731,107.035158,5.6,2448.1],[-6.219568,107.035149,5.1,2454.2],[-6.219366,107.035138,5.9,2461.9],[-6.219084,107.035159,5.8,2472.6],[-6.219007,107.035161,5.5,2475.5],[-6.218993,107.035135,5.3,2477.1],[-6.218964,107.035102,5.5,2478.7],[-6.218929,107.035082,5.9,2480.2],[-6.218911,107.034903,6.1,2489.9],[-6.218847,107.034507,5.8,2505.5],[-6.21876,107.03399,6.2,2527.1],[-6.218732,107.033828,6.8,2533.7],[-6.218731,107.033739,7.0,2537.4],[-6.218745,107.033645,6.9,2541.3],[-6.218754,107.033607,6.7,2542.9],[-6.218782,107.033527,7.2,2546.4],[-6.218815,107.033454,6.7,2549.6],[-6.218887,107.033291,7.2,2556.7],[-6.218731,107.033226,7.5,2566.2],[-6.218456,107.033107,8.3,2578.6],[-6.218273,107.033029,8.2,2586.7],[-6.218144,107.032977,8.6,2592.3],[-6.217929,107.032883,8.5,2601.7],[-6.217835,107.032851,8.3,2605.9],[-6.217691,107.032842,8.5,2611.7],[-6.217561,107.032846,9.4,2617.2],[-6.217422,107.032858,9.2,2622.9],[-6.217328,107.032864,8.9,2626.7],[-6.217039,107.032882,8.9,2638.4],[-6.216801,107.032904,9.6,2648.1],[-6.216538,107.032932,10.0,2658.6],[-6.216342,107.032955,9.9,2666.3],[-6.216267,107.032966,9.8,2669.4],[-6.216222,107.032954,10.3,2671.2],[-6.216176,107.032976,10.5,2674.0],[-6.216013,107.032995,10.0,2680.6],[-6.215929,107.033004,9.8,2684.0],[-6.215784,107.033013,10.2,2689.8],[-6.215513,107.033047,10.4,2700.7],[-6.215285,107.033078,10.8,2709.8],[-6.215171,107.033084,10.3,2714.2],[-6.215065,107.033099,11.0,2718.4],[-6.214969,107.033124,11.0,2722.3],[-6.214922,107.033141,10.7,2724.2],[-6.214819,107.03318,10.5,2728.6],[-6.214742,107.033231,11.2,2732.3],[-6.214369,107.033495,10.6,2749.8],[-6.214314,107.033533,11.1,2752.4],[-6.214068,107.033692,10.5,2764.3],[-6.214016,107.033723,10.5,2766.8],[-6.213937,107.033773,11.1,2770.5],[-6.213775,107.033841,10.6,2777.8],[-6.213647,107.03391,11.2,2783.7],[-6.21354,107.033979,10.7,2789.0],[-6.213391,107.034041,10.4,2795.4],[-6.21334,107.034049,10.4,2797.4],[-6.213304,107.034061,10.6,2798.9],[-6.213202,107.034098,10.8,2803.4],[-6.213149,107.034113,11.1,2805.6],[-6.21309,107.034143,10.2,2808.3],[-6.212951,107.03417,10.4,2814.2],[-6.21276,107.034206,10.2,2822.0],[-6.212643,107.034222,10.9,2826.7],[-6.212395,107.034265,10.0,2837.4],[-6.212222,107.034308,9.8,2844.6],[-6.212094,107.034335,9.8,2850.2],[-6.211988,107.034361,10.1,2854.8],[-6.211885,107.034391,10.6,2859.2],[-6.211719,107.03445,10.5,2866.6],[-6.211652,107.034461,10.3,2869.6],[-6.211569,107.034486,10.5,2873.4],[-6.211488,107.034514,10.5,2877.1],[-6.211372,107.034553,9.8,2882.5],[-6.211258,107.034599,9.6,2888.1],[-6.21121,107.03464,10.4,2890.9],[-6.211072,107.034688,10.1,2897.3],[-6.211028,107.034705,9.4,2899.5],[-6.210823,107.03479,10.0,2909.5],[-6.210707,107.034835,9.7,2915.3],[-6.210639,107.034864,9.7,2918.8],[-6.210573,107.034889,9.6,2922.1],[-6.210366,107.034974,9.4,2932.4],[-6.2103,107.035,9.3,2935.8],[-6.210177,107.035047,9.5,2942.2],[-6.210137,107.035063,9.6,2944.2],[-6.210102,107.035073,10.2,2945.9],[-6.210035,107.035091,9.4,2949.1],[-6.209971,107.035117,10.2,2952.5],[-6.209798,107.035179,9.5,2961.6],[-6.209733,107.035202,9.6,2965.1],[-6.20967,107.035229,10.1,2968.4],[-6.209595,107.035258,10.1,2972.4],[-6.209676,107.035428,9.8,2985.8],[-6.209787,107.035694,9.5,3000.3],[-6.209935,107.036016,10.0,3017.7],[-6.209979,107.036129,10.0,3023.8],[-6.209935,107.036016,10.6,3032.6],[-6.209787,107.035694,10.0,3051.7],[-6.209676,107.035428,10.4,3066.2],[-6.209595,107.035258,11.1,3076.0],[-6.20967,107.035229,10.2,3081.8],[-6.209733,107.035202,10.7,3085.6],[-6.209798,107.035179,11.1,3089.4],[-6.209971,107.035117,11.2,3098.9],[-6.210035,107.035091,10.5,3102.6],[-6.210102,107.035073,10.6,3106.4],[-6.210137,107.035063,10.7,3108.3],[-6.210177,107.035047,11.5,3110.5],[-6.2103,107.035,11.0,3117.3],[-6.210366,107.034974,11.5,3121.2],[-6.210573,107.034889,11.9,3132.5],[-6.210639,107.034864,11.4,3136.4],[-6.210707,107.034835,11.4,3140.1],[-6.210823,107.03479,12.2,3146.6],[-6.211028,107.034705,12.0,3158.2],[-6.211072,107.034688,11.7,3160.7],[-6.21121,107.03464,12.3,3167.9],[-6.211258,107.034599,11.9,3171.2],[-6.211372,107.034553,12.0,3177.6],[-6.211488,107.034514,11.8,3183.8],[-6.211569,107.034486,12.7,3188.2],[-6.211652,107.034461,12.9,3192.7],[-6.211719,107.03445,12.7,3196.2],[-6.211885,107.034391,13.1,3205.2],[-6.211988,107.034361,12.3,3210.6],[-6.212094,107.034335,12.6,3216.0],[-6.212222,107.034308,12.9,3222.4],[-6.212395,107.034265,13.5,3230.7],[-6.212643,107.034222,13.6,3242.7],[-6.21276,107.034206,13.1,3248.2],[-6.212951,107.03417,13.1,3257.3],[-6.21309,107.034143,13.4,3263.8],[-6.213165,107.034158,13.5,3267.3],[-6.213232,107.034146,13.9,3270.5],[-6.213202,107.034098,13.2,3274.1],[-6.213147,107.034018,13.8,3278.3],[-6.213078,107.033877,13.8,3285.1],[-6.213012,107.033771,13.9,3290.6],[-6.212737,107.033324,14.0,3312.5],[-6.212091,107.032236,13.5,3359.7],[-6.211495,107.031259,12.5,3402.8],[-6.211315,107.030948,12.2,3415.6],[-6.211272,107.030902,12.2,3417.9],[-6.211207,107.030834,12.6,3421.3],[-6.210998,107.030614,11.6,3432.1],[-6.210969,107.030584,11.7,3433.6],[-6.210806,107.030412,12.0,3442.1],[-6.211182,107.030325,11.2,3461.2],[-6.211758,107.03016,10.4,3482.1],[-6.212319,107.029906,9.9,3504.6],[-6.212311,107.029844,10.4,3507.7],[-6.212305,107.029816,10.1,3508.7],[-6.21235,107.029805,10.8,3511.0],[-6.212397,107.02978,10.6,3512.9],[-6.212423,107.029731,10.7,3515.8],[-6.212446,107.029659,9.9,3518.6],[-6.21247,107.029571,9.7,3522.0],[-6.212539,107.029548,9.7,3525.7],[-6.212742,107.029458,9.9,3533.7],[-6.212571,107.028975,9.9,3560.3],[-6.212742,107.029458,9.5,3587.3],[-6.212992,107.029345,9.2,3601.9],[-6.213254,107.029234,9.3,3612.4],[-6.213503,107.029106,9.5,3622.7],[-6.213724,107.028989,9.6,3632.0],[-6.213978,107.028864,9.7,3642.8],[-6.214145,107.028781,9.8,3650.0],[-6.214229,107.02896,9.7,3660.5],[-6.214254,107.029024,9.2,3663.1],[-6.21427,107.029063,9.9,3664.7],[-6.214296,107.029114,9.4,3666.9],[-6.214458,107.029044,9.7,3676.2],[-6.214587,107.028988,9.5,3681.4],[-6.214629,107.028968,9.9,3683.1],[-6.214964,107.028808,9.5,3697.0],[-6.2152,107.028695,9.6,3706.9],[-6.215471,107.028587,9.7,3717.4],[-6.215812,107.028452,9.8,3731.1]]};

/* ============ PETA ============ */
const base = {
  "Gelap (CARTO)": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors &copy; CARTO'}),
  "Terang (CARTO)": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors &copy; CARTO'}),
  "OpenStreetMap": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}),
  "CyclOSM (sepeda)": L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors, CyclOSM'}),
  "Topografi": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{maxZoom:17,attribution:'&copy; OpenStreetMap contributors, SRTM | &copy; OpenTopoMap'}),
  "Satelit (Esri)": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'})
};
const map = L.map('map',{zoomControl:true,preferCanvas:true,worldCopyJump:true}).setView([-6.2161,107.0283],14);
base["Gelap (CARTO)"].addTo(map);
L.control.layers(base,null,{position:'topright'}).addTo(map);
const renderer = L.canvas({padding:0.35});
const layerTrack = L.layerGroup().addTo(map);
const markerStart = L.circleMarker([0,0],{radius:6,color:'#0b0f14',weight:2,fillColor:'#2fd3a5',fillOpacity:1});
const markerEnd   = L.circleMarker([0,0],{radius:6,color:'#0b0f14',weight:2,fillColor:'#ef4444',fillOpacity:1});
let markerNow = null;

/* ============ PERHITUNGAN (haversine) ============ */
const R = 6371000;
function hav(a,b){
  const la1=a[0]*Math.PI/180, la2=b[0]*Math.PI/180;
  const dla=(b[0]-a[0])*Math.PI/180, dlo=(b[1]-a[1])*Math.PI/180;
  const h=Math.sin(dla/2)*Math.sin(dla/2)+Math.cos(la1)*Math.cos(la2)*Math.sin(dlo/2)*Math.sin(dlo/2);
  return 2*R*Math.asin(Math.min(1,Math.sqrt(h)));
}
const PALETTE=['#3b82f6','#22d3ee','#22c55e','#eab308','#f97316','#ef4444'];
function speedColor(kmh){
  const stops=[0,4.5,7.5,10.5,13.5,17];
  let i=0; while(i<stops.length-1 && kmh>stops[i+1]) i++;
  return PALETTE[Math.min(i,PALETTE.length-1)];
}
function fmtDur(s){
  s=Math.max(0,Math.round(s));
  const h=Math.floor(s/3600), m=Math.floor(s%3600/60), ss=s%60;
  return (h?h+':':'')+String(m).padStart(h?2:1,'0')+':'+String(ss).padStart(2,'0');
}
function fmtPace(secPerKm){
  if(!isFinite(secPerKm)||secPerKm<=0) return '–';
  const m=Math.floor(secPerKm/60), s=Math.round(secPerKm%60);
  return m+':'+String(s).padStart(2,'0')+' /km';
}

/* ============ STATE ============ */
let state = null;

function build(act){
  // act.points: [lat, lon, ele, t]
  const pts = act.points;
  const n = pts.length;
  const cum=[0], spd=[];
  for(let i=1;i<n;i++){
    const d=hav(pts[i-1],pts[i]);
    cum.push(cum[i-1]+d);
    const dt=Math.max(1e-3, pts[i][3]-pts[i-1][3]);
    spd.push(d/dt*3.6);
  }
  spd.push(spd.length?spd[spd.length-1]:0);
  // haluskan kecepatan (rata-rata 5 titik)
  const smooth=spd.map((_,i)=>{
    let s=0,c=0; for(let k=Math.max(0,i-2);k<=Math.min(spd.length-1,i+2);k++){s+=spd[k];c++;}
    return s/c;
  });
  const total=cum[n-1];
  const dur=Math.max(0, pts[n-1][3]-pts[0][3]);
  let up=0, dn=0;
  for(let i=1;i<n;i++){
    const dz=pts[i][2]-pts[i-1][2];
    if(dz>0) up+=dz; else dn-=dz;
  }
  const maxSpd=smooth.reduce((a,b)=>a>b?a:b,0);
  // split per km
  const splits=[];
  let km=1, tPrev=0, dPrev=0, upPrev=0;
  for(let i=1;i<n;i++){
    while(cum[i]>=km*1000 && km<=Math.ceil(total/1000)){
      const frac=(km*1000-cum[i-1])/Math.max(1e-6,cum[i]-cum[i-1]);
      const tAt=pts[i-1][3]+(pts[i][3]-pts[i-1][3])*frac;
      const upAt=upPrev+(pts[i][2]-pts[i-1][2])*frac;
      splits.push({km:km, sec:tAt-tPrev, up:Math.max(0,upAt-upPrev)});
      tPrev=tAt; upPrev=upAt; km++;
    }
  }
  if(cum[n-1]> (splits.length)*1000+5){
    splits.push({km:splits.length+1, sec:pts[n-1][3]-tPrev, up:Math.max(0,up-upPrev), partial:true});
  }
  state = {act, pts, cum, spd:smooth, total, dur, up, dn, maxSpd, splits, maxZoom:null};
  drawTrack();
  renderStats();
  renderSplits();
  drawChart();
}

function drawTrack(){
  layerTrack.clearLayers();
  const pts=state.pts;
  for(let i=1;i<pts.length;i++){
    const v=state.spd[i];
    if(state.cum[i]-state.cum[i-1]<0.5) continue;
    L.polyline([[pts[i-1][0],pts[i-1][1]],[pts[i][0],pts[i][1]]],
      {color:speedColor(v),weight:5,opacity:.95,lineCap:'round',renderer:renderer}).addTo(layerTrack);
  }
  // garis bayangan biar kontras di semua basemap
  L.polyline(pts.map(p=>[p[0],p[1]]),{color:'#000',weight:9,opacity:.28,renderer:renderer}).addTo(layerTrack);
  const first=pts[0], last=pts[pts.length-1];
  markerStart.setLatLng([first[0],first[1]]).addTo(layerTrack).bindTooltip('Start');
  markerEnd.setLatLng([last[0],last[1]]).addTo(layerTrack).bindTooltip('Finish');
  if(markerNow) map.removeLayer(markerNow);
  markerNow=null;
  fitTrack();
}
function fitTrack(){
  const pts=state.pts;
  const b=L.latLngBounds(pts.map(p=>[p[0],p[1]]));
  map.fitBounds(b,{padding:[28,28]});
}
function renderStats(){
  document.getElementById('sDist').textContent=(state.total/1000).toFixed(2)+' km';
  document.getElementById('sTime').textContent=fmtDur(state.dur);
  document.getElementById('sPace').textContent=fmtPace(state.dur/60/(state.total/1000));
  document.getElementById('sMax').textContent=state.maxSpd.toFixed(1)+' km/j';
  document.getElementById('sUp').textContent=state.up>2? Math.round(state.up)+' m' : 'datar (±'+Math.round(state.up)+' m)';
  document.getElementById('sPts').textContent=state.pts.length;
  document.getElementById('actName').firstChild.textContent=state.act.name||'Aktivitas';
  document.getElementById('chipInfo').textContent=state.pts.length+' titik GPS · '+(state.total/1000).toFixed(2)+' km · '+fmtDur(state.dur);
}
function renderSplits(){
  const tb=document.getElementById('splitBody');
  if(!state.splits.length){ tb.innerHTML='<tr><td colspan="3">track terlalu pendek untuk dipecah per km</td></tr>'; return; }
  tb.innerHTML=state.splits.map(s=>{
    const pace=s.sec/((s.partial? (state.total-(s.km-1)*1000):1000)/1000);
    return '<tr><td>'+s.km+(s.partial?' <span style="color:#9aa8ba">(sisa)</span>':'')+'</td><td>'+fmtPace(pace)+'</td><td>'+
      (s.up>0.5? '+'+Math.round(s.up)+' m' : '–')+'</td></tr>';
  }).join('');
}

/* ============ GRAFIK ============ */
function drawChart(){
  const cv=document.getElementById('chart');
  const dpr=window.devicePixelRatio||1;
  const w=cv.clientWidth, h=cv.clientHeight;
  cv.width=w*dpr; cv.height=h*dpr;
  const g=cv.getContext('2d'); g.setTransform(dpr,0,0,dpr,0,0);
  g.clearRect(0,0,w,h);
  const pad={l:38,r:12,t:12,b:22};
  const iw=w-pad.l-pad.r, ih=h-pad.t-pad.b;
  const kmax=state.total/1000;
  const vmax=Math.max(6, Math.ceil(state.maxSpd/2)*2);
  g.strokeStyle='#243040'; g.fillStyle='#9aa8ba'; g.font='10px Inter,Arial'; g.lineWidth=1;
  for(let v=0;v<=vmax;v+=vmax/4){
    const y=pad.t+ih-(v/vmax)*ih;
    g.beginPath(); g.moveTo(pad.l,y); g.lineTo(pad.l+iw,y); g.stroke();
    g.fillText(String(Math.round(v)),6,y+3);
  }
  const step=Math.max(1,Math.ceil(kmax/8));
  for(let k=0;k<=kmax;k+=step){
    const x=pad.l+(k/kmax)*iw;
    g.beginPath(); g.moveTo(x,pad.t); g.lineTo(x,pad.t+ih); g.strokeStyle='#1b2532'; g.stroke();
    g.fillStyle='#9aa8ba'; g.fillText(k+'k',x-6,h-7);
  }
  // area + garis kecepatan
  g.beginPath();
  for(let i=0;i<state.pts.length;i++){
    const x=pad.l+(state.cum[i]/Math.max(1,state.total))*iw;
    const y=pad.t+ih-(Math.min(state.spd[i],vmax)/vmax)*ih;
    i?g.lineTo(x,y):g.moveTo(x,y);
  }
  g.strokeStyle='#2fd3a5'; g.lineWidth=2; g.stroke();
  g.lineTo(pad.l+iw,pad.t+ih); g.lineTo(pad.l,pad.t+ih); g.closePath();
  const grad=g.createLinearGradient(0,pad.t,0,pad.t+ih);
  grad.addColorStop(0,'rgba(47,211,165,.35)'); grad.addColorStop(1,'rgba(47,211,165,0)');
  g.fillStyle=grad; g.fill();
  g.fillStyle='#9aa8ba'; g.font='10px Inter,Arial';
  g.fillText('km/j',6,pad.t+8);
  // penanda posisi replay
  if(state.playDist>0){
    const x=pad.l+(Math.min(state.playDist,state.total)/Math.max(1,state.total))*iw;
    g.strokeStyle='#ff5a3c'; g.lineWidth=1.5; g.beginPath();
    g.moveTo(x,pad.t); g.lineTo(x,pad.t+ih); g.stroke();
  }
}
window.addEventListener('resize',()=>{ if(state) drawChart(); });

/* ============ REPLAY ============ */
let playing=false, rafId=null, lastTs=0, mult=8;
function progressTo(dist){
  const pts=state.pts, cum=state.cum;
  let lo=0, hi=cum.length-1;
  while(lo<hi-1){ const mid=(lo+hi)>>1; if(cum[mid]<dist) lo=mid; else hi=mid; }
  const seg=Math.max(1e-6,cum[hi]-cum[lo]);
  const f=Math.min(1,Math.max(0,(dist-cum[lo])/seg));
  const lat=pts[lo][0]+(pts[hi][0]-pts[lo][0])*f;
  const lon=pts[lo][1]+(pts[hi][1]-pts[lo][1])*f;
  const t =pts[lo][3]+(pts[hi][3]-pts[lo][3])*f;
  return {lat,lon,t,v:state.spd[hi]};
}
function showNow(){
  const p=progressTo(state.playDist);
  if(!markerNow){
    markerNow=L.circleMarker([p.lat,p.lon],{radius:7,color:'#fff',weight:3,fillColor:'#ff5a3c',fillOpacity:1}).addTo(map);
  } else markerNow.setLatLng([p.lat,p.lon]);
  const passed=p.t-state.pts[0][3];
  document.getElementById('chipInfo').textContent=
    (state.playDist/1000).toFixed(2)+' / '+(state.total/1000).toFixed(2)+' km · '+fmtDur(passed)+
    ' · pace '+fmtPace(passed/60/Math.max(0.001,state.playDist/1000))+' · '+p.v.toFixed(1)+' km/j';
  drawChart();
}
function tick(ts){
  if(!playing) return;
  if(!lastTs) lastTs=ts;
  const dt=(ts-lastTs)/1000; lastTs=ts;
  state.playDist += dt*mult*4;   // ±4 m per detik pada 1x, 8x = 32 m/s
  if(state.playDist>=state.total){ state.playDist=state.total; playing=false; document.getElementById('btnPlay').innerHTML='&#9654; Replay'; showNow(); return; }
  showNow();
  rafId=requestAnimationFrame(tick);
}
document.getElementById('btnPlay').addEventListener('click',function(){
  if(!state) return;
  if(playing){ playing=false; lastTs=0; cancelAnimationFrame(rafId); this.innerHTML='&#9654; Replay'; return; }
  if(state.playDist>=state.total) state.playDist=0;
  playing=true; lastTs=0; this.innerHTML='&#10073;&#10073; Pause';
  rafId=requestAnimationFrame(tick);
});
document.getElementById('btnReset').addEventListener('click',()=>{
  if(!state) return;
  playing=false; cancelAnimationFrame(rafId); lastTs=0;
  document.getElementById('btnPlay').innerHTML='&#9654; Replay';
  state.playDist=0;
  if(markerNow){ map.removeLayer(markerNow); markerNow=null; }
  if(markerNow) map.removeLayer(markerNow);
  renderStats(); drawChart();
});
document.getElementById('btnSpeed').addEventListener('click',function(){
  mult = mult===8?2:(mult===2?16:(mult===16?8:8));
  this.textContent='Kecepatan '+mult+'×';
});
document.getElementById('btnFit').addEventListener('click',()=>{ if(state) fitTrack(); });

/* ============ UPLOAD GPX/TCX ============ */
function parseTrackFile(name, text){
  const doc=new DOMParser().parseFromString(text,'application/xml');
  if(doc.getElementsByTagName('parsererror').length) return null;
  let nodes=[...doc.getElementsByTagNameNS('*','trkpt')];
  if(!nodes.length) nodes=[...doc.getElementsByTagName('trkpt')];
  if(!nodes.length) nodes=[...doc.getElementsByTagNameNS('*','Trackpoint')];
  if(!nodes.length) nodes=[...doc.getElementsByTagName('Trackpoint')];
  if(!nodes.length) return null;
  const pts=[];
  nodes.forEach(nd=>{
    const lat=parseFloat(nd.getAttribute('lat')||nd.getElementsByTagName('LatitudeDegrees')[0]?.textContent);
    const lon=parseFloat(nd.getAttribute('lon')||nd.getElementsByTagName('LongitudeDegrees')[0]?.textContent);
    if(!isFinite(lat)||!isFinite(lon)) return;
    const eleEl=nd.getElementsByTagName('ele')[0]||nd.getElementsByTagName('AltitudeMeters')[0];
    const tEl=nd.getElementsByTagName('time')[0]||nd.getElementsByTagName('Time')[0];
    pts.push([lat,lon, eleEl?parseFloat(eleEl.textContent)||0:0, tEl?Date.parse(tEl.textContent)/1000:NaN]);
  });
  if(pts.length<2) return null;
  let hasTime = pts.every(p=>isFinite(p[3]));
  if(hasTime){
    const t0=pts[0][3];
    pts.forEach(p=>p[3]=p[3]-t0);
  } else {
    let t=0;
    for(let i=0;i<pts.length;i++){
      if(i) t+=hav(pts[i-1],pts[i])/(6000/3600);
      pts[i][3]=t;
    }
    hasTime=false;
  }
  if(!pts.some(p=>p[2]>0)) pts.forEach(p=>p[2]=0);
  return {name:name.replace(/\.(gpx|tcx)$/i,''), type:hasTime?'Track GPS':'Track GPS (waktu disimulasikan)', points:pts};
}
function loadFile(f){
  const rd=new FileReader();
  rd.onload=()=>{
    const act=parseTrackFile(f.name, rd.result);
    if(!act){ document.getElementById('chipInfo').textContent='File tidak dikenali — perlu .gpx atau .tcx'; return; }
    // seragamkan medan waktu
    let t0c=0, t=0, out=[];
    for(let i=0;i<act.points.length;i++){
      const p=act.points[i];
      if(i===0){ t0c=p[3]; t=0; }
      else { t = (p[3]-t0c) || (t+hav(act.points[i-1],p)/(6000/3600)); }
      out.push([p[0],p[1],p[2],t]);
    }
    act.points=out;
    playing=false; cancelAnimationFrame(rafId); lastTs=0;
    document.getElementById('btnPlay').innerHTML='&#9654; Replay';
    if(markerNow){ map.removeLayer(markerNow); markerNow=null; }
    act.playDist=0;
    build(act); state.playDist=0;
    document.getElementById('chipInfo').textContent='dimuat: '+act.name+' · '+state.pts.length+' titik';
    document.getElementById('actMeta').textContent=act.type+' · '+f.name;
  };
  rd.readAsText(f);
}
const drop=document.getElementById('drop'), fileIn=document.getElementById('file');
drop.addEventListener('click',()=>fileIn.click());
fileIn.addEventListener('change',e=>{ if(e.target.files[0]) loadFile(e.target.files[0]); });
['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('hot');}));
['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('hot');}));
drop.addEventListener('drop',e=>{ const f=e.dataTransfer.files[0]; if(f) loadFile(f); });
window.addEventListener('dragover',e=>e.preventDefault());
window.addEventListener('drop',e=>e.preventDefault());

/* ============ JALANKAN ============ */
build(SAMPLE);
state.playDist=0;
setTimeout(()=>{ map.invalidateSize(); fitTrack(); drawChart(); },250);
