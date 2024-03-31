//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete 번튼을 누르면 할일 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1.check 버튼을 클릭하는 순간 true, false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false 이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴


let userInput=document.getElementById("user-input");
let insertButton=document.getElementById("insert-button");
let taskList=[];

insertButton.addEventListener("click",insert);

function randomID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  

function insert(){
    let task={
        id:randomID(),
        taskContent: userInput.value,
        isComplete:false
    };
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML='';
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete==true){
            resultHTML+=` <div class="task" id="task">
            <div class="task-done">${taskList[i].taskContent}</div>
        <div>
            <button onClick="check('${taskList[i].id}')">Check</button>
            <button onClick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
        </div>`
        } else{
            resultHTML+=` <div class="task" id="task">
            <div>${taskList[i].taskContent}</div>
        <div>
            <button onClick="check('${taskList[i].id}')">Check</button>
            <button onClick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
        </div>`
        }        
    }

    document.getElementById("task-list").innerHTML=resultHTML;
}

function check(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id==id){
            taskList[i].isComplete=!taskList[i].isComplete;
            break;
        }
    }
    render();
}

function deleteTask(id){   
	taskList.forEach((item, index)=> {
		if(item.id === id) {
            taskList.splice(index, 1);
		}
	});
    
    render();
}