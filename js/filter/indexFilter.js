/**
 * Created by sqliang on 2015/11/5.
 */
indexApp.filter("qtypestr", function () {
    return function (type) {
        switch (type){
            case 1 :
                return '选择';
                break;
            case 2:
                return '填空';
                break;
        }
    }
})
    .filter("qtypestr_en", function () {
    return function (type) {
        switch (type){
            case 1:
                return 'choice';
            break;
            case 2:
                return 'block';
            break;
        }
    }
})
