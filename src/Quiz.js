import React, { Component } from "react";
import './Quiz.css'
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state={
        Questions:[
            
               {
                id:1,
                question:'What is the correct way to write a C program?',
                options:[ 'Start with function main()',
                     'Start with int main()',
                     'Start with program start()',
                     'Start with begin'
                    ],
                Ca:"Start with int main()",
              
            },  
                {id:2,
                question:'Which symbol is used for comments in C?',
                options:['//',"#","/* */ "," Both A and C"],
                Ca:"//",
                
             },
                {id:3,
                question:'Which data type is used to store whole numbers?',
                options:['float','char','int','double' ],
                Ca:"int",
               
            },
                {id:4,
                question:'Which of the following is used to get user input in C?',
                options:['printf()',"scanf()",,"gets() "," none"],
                Ca:"printf()",
                
            },
                {id:5,
                question:'Which of the following is not a loop?',
                options:['while',"do while","for","switch"],
                Ca:"switch",
                
            }
        ],
        UserAns:{}
        
//        Answer:[
// {
// id:1,
// checked:10,
// },
// {
//     id:2,
//     checked:10,
// },
// {
//     id:3,
//     checked:10,
// },
// {
//     id:4,
//     checked:10,
// },
// {
//     id:5,
//     checked:10,
// }
//        ] 
    }}
   HandleOptionChange=(e)=>{
   
    this.setState({
        UserAns:{...this.state.UserAns,[e.target.id]:e.target.value}
    })
       
    }
  HandleSubmit=()=>{
    let score=0;
    this.state.Questions.forEach((val1)=>
    {
        if(val1.Ca==this.state.UserAns[val1.id])
            {
                score++
            }
            else if(this.state.UserAns[val1.id]=='null')
            {
              alert('Options not selected')
            }
    });
    alert(`Your score is , ${score}`)
    console.log(score)
   
  
  }
  
  render() {
   

    return (
      <div className="quiz-container">
        
        {this.state.Questions.map((val4) => (
            <>
            <h2> {val4.id}</h2> 
             <h3>  { val4.question}</h3>  
             {val4.options.map((val2)=>(
                <>
                <input type='radio' value={val2} id={val4.id} onChange={this.HandleOptionChange}/>
                {val2}<br></br>
                </>
             ))}
                 
             </>

              ))}
<center>
        <button className="submit-button" onClick={this.HandleSubmit}>Submit</button>
        </center>
               
      </div>
    
      
    );
  }

}
export default Quiz;
