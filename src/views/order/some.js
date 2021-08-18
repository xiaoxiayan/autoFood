  
export  function Person(params){
        this.name = params.name
        this.age = params.age
    }
export   function CreateName(name){
         this.wholeName = name 
         this.firstName = name.split(' ')[0]
         this.secondName  = name.split(' ')[1]
        }
export   function CreateWork(work){
          switch (work) {
            case 'bli':
                this.name = '壁垒';
                this.description = '二次元'
                break;
            case 'bddi':
                this.name = '摸鱼';
                this.description = '划水';
                break
            default:
                this.name = work;
                this.description = '无'
                break;
        }
    }
    CreateWork.prototype.changeWork = function(work){
            this.name = work
    }
    CreateWork.prototype.changeDes = function(des){
        this.description = des
    }




