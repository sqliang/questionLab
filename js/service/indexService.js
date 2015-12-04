/**
 * Created by sqliang on 2015/11/2.
 */
indexApp.service("QuestionService", function ($http) {
    //提交
   this.submit = function (formData) {
       return $http.post("/api/submitQuestion",{question:formData});
   }
    //根据id获取试题信息
    this.getQuestion = function (id) {
        return $http.post("/api/getQuestion",{id:id});
    };

    //获取试题列表
    this.getQuestions = function (pageNo, pageSize) {
       /* return $http.post("/api/getQuestions",{pageNo:pageNo,pageSize:pageSize});*/
        return [{
            id:2,
            qtype:"选择题",
            name:"1我觉得世界上最好的是hello"
        },{
            id:3,
            qtype:"选择题",
            name:"2我觉得世界上最好的是hello"
        },{
            id:4,
            qtype:"选择题",
            name:"3我觉得世界上最好的是hello"
        },{
            id:5,
            qtype:"选择题",
            name:"4我觉得世界上最好的是hello"
        }];
    };
    //编辑
    this.update = function (formData) {
        return $http.post('/api/updateQuestion',{question:formData});
    };
    //删除
    this.remove = function (id) {
        return $http.post("/api/removeQuestion", {id:id});
    };
});
