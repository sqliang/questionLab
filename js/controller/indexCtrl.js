/**
 * Created by sqliang on 2015/11/2.
 */

var questionList = [{
    id:2,
    qtype:1,
    name:"1我觉得世界上最好的是hello"
},{
    id:3,
    qtype:2,
    name:"2我觉得世界上最好的是hello"
},{
    id:4,
    qtype:2,
    name:"3我觉得世界上最好的是hello"
},{
    id:5,
    qtype:1,
    name:"4我觉得世界上最好的是hello"
}];
indexApp.controller("questionListCtrl", function ($scope) {
    $scope.questionList = questionList;
    $scope.removeQuestion = function (id) {
        for(var i = 0; i < $scope.questionList.length; i++){
            var q = $scope.questionList;
            if(q.id = id){
                $scope.questionList.splice(i,1);
                questionList.splice(i,1);
                break;
            }
        }
    }
});

indexApp.controller("questionCtrl", function ($scope,$rootScope,$location,$filter) {
    var id = $rootScope.$state.params.id,
        type = $rootScope.$state.current.name.split(".")[1];//获取题型的名称
    console.log(type);

    var initData = function (type) {
       switch (type){
           case 'choice':
               $scope.formData.qtype = 1;
               $scope.formData.options = [{},{},{},{}];
               $scope.formData.answer = [];
               break;
           case 'block':
               $scope.formData.qtype = 2;
               $scope.formData.options = null;
               $scope.formData.answer = [];
               break;
       }
    };
    //监控填空题内容变化的函数
    var subscirbeCont = function (type) {
        if(type === 'block'){
            $scope.$watch('formData.content', function (newValue, oldValue) {
                newValue = newValue || "";
                oldValue = oldValue || "";
                var newBlocks = newValue.match(/\$\$/g) || [],
                    oldBlocks = oldValue.match(/\$\$/g) || [];
                if(newBlocks.length !== oldBlocks.length){
                    var answer = [];
                    for(var i = 0; i < newBlocks.length; i++){
                        var a = $scope.formData.answer[i] || (i+1);
                        answer.push(a);
                    }
                    $scope.formData.answer = answer;
                }
            });
        }
    };
    var getDataById = function (id) {
        var queObj = {};
        for(var question in questionList){
            if(question.id === id){
                queObj = question;
                break;
            }
        }
        return queObj;
    }

    if(id !== 0){
        var data = getDataById(id);
        $scope.formData = data;
        if($filter('qtypestr_en')(data) !== type){
            initData(type);
        }else{
            $scope.formData.answer = data.answer.split(",");
        }
    }else{
        //新建
        $scope.formData = {
            id:0,
            name:''
        };
        initData(type);
    }

    $scope.qtypes = [1,2];
    //监听题干内容
    subscirbeCont(type);

    //del选项
    $scope.removeOption = function (index) {
        $scope.formData.options.splice(index,1);
    }
    //add选项
    $scope.addOption = function () {
        $scope.formData.options.push({name:""});
    }
    //修改模板
    $scope.changeTpl = function () {
        var type = $filter('qtypestr_en')($scope.formData.qtype);
        $rootScope.$state.go('questionEdit.'+type,{type:type});//修改
    }


});
