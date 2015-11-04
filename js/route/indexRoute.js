/**
 * Created by sqliang on 2015/11/2.
 */
indexApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state("home", {
            url:"/home",
            templateUrl:"tpls/home.html"
        })
        .state("questionList",{
            url:"/questionList",
            templateUrl:"tpls/questionList.html",
            controller:"questionListCtrl"
        })
        .state("questionEdit",{
            url:"/questionEdit/id/:id", /***传入了id的值***/
            templateUrl:"tpls/questionEdit.html",
            controller:"questionCtrl"
        })
        .state("questionEdit.choice",{
            url:"/type/choice",
            views: {
                'editArea' : {
                    templateUrl:"tpls/choice.html"
                },
                'previewArea':{
                    templateUrl:"tpls/choiceView.html"
                }
             }
        })
        .state("questionEdit.block",{
            url:"type/block",
            views:{
                'editArea' : {
                    templateUrl:"tpls/block.html"
                },
                'previewArea' : {
                    templateUrl:"tpls/blockView.html"
                }
            }
        });
});