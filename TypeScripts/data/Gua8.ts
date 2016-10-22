// 八卦
class Gua8 {
    static QIAN = 0;
    static KUN = 1;
    static GEN = 2;
    static KAN = 3;
    static ZHEN = 4;
    static DUI = 5;
    static LI = 6;
    static XUN = 7;
    
    static zh = function(gua) {
        let d = ['乾', '坤', '艮', '坎', '震', '兑', '离', '巽'];
        return d[gua];
    };
    
    static yinYang = function(gua) {
        let d = [
            
        ];
        return d[gua];
    };
}