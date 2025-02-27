function addTask()
{
    var todoInput = document.querySelector("#td-ip").value


    if(todoInput=="")
    {
        document.getElementById("error-txt").innerText="Please add a task!"
    }else{
        document.getElementById("error-txt").innerText=" "
        var ipt=document.getElementById("td-ip") //imported the input text to make it empty after each entry, check last line for code

        var unOrderedList = document.getElementById("task-list")

        var listItem = document.createElement("li")
        var lp = document.createElement("div")
        lp.innerText=todoInput
        lp.className="list-para"
        lp.id="list-para-id"
        listItem.appendChild(lp)
        // listItem.append(todoInput)
        unOrderedList.appendChild(listItem) //li is child of ul so use 'appendChild()'
        
        const btnContainer = document.createElement("div")
        listItem.appendChild(btnContainer)
        btnContainer.className="btn-div"
        
        const deleteBtn = document.createElement("button")
        btnContainer.appendChild(deleteBtn)
        deleteBtn.className="btn btn-danger"
        deleteBtn.innerText="Delete"
        // deleteBtn.style.backgroundColor="#FF4273"
        deleteBtn.onclick=() => unOrderedList.removeChild(listItem) //removeChild shd be used 
        
        
        const completeBtn = document.createElement("button")
        btnContainer.appendChild(completeBtn)
        completeBtn.className="btn btn-outline-primary"
        // completeBtn.className="btn btn-primary"
        completeBtn.innerText="Completed"
        completeBtn.onclick = () => lp.classList.toggle('completed')

        ipt.value="" //reset the input to empty after each click

        
        

    }
    
}



    