import React from "react";
import "./BoardSettings.css"
class BoardSettings extends React.Component{
    state = {
        colors:
            {
                red: "D04848",
                orange: "F3B95F",
                yellow: "FDE767",
                blue: "6895D2",
                green: "0D9276",
                beige: "F9DBBB"
            },
        boardSettings:
            {
                columnAmount: "",
                rowAmount: ""
            }
    }

    setInputShadowBox=(elementId,color)=>{
        if (document.getElementById(elementId).style.boxShadow!=="0 0 15px #" + color){
            document.getElementById(elementId).style.boxShadow="0 0 15px #" + color;
        }
    }
    setCols = (input) => {
        let tempBoard = this.state.boardSettings;
        let inputValue = input.target.value
        if (inputValue===null || inputValue===""){
            this.setInputShadowBox("cols-input",this.state.colors.beige);
        } else if (inputValue>=4 && inputValue<=10){
            this.setInputShadowBox("cols-input",this.state.colors.green);
        } else {
            this.setInputShadowBox("cols-input", this.state.colors.red);
        }
        tempBoard.columnAmount = inputValue
        this.setState({
            boardSettings: tempBoard
        })
    }
    setRows = (input) => {
        let tempBoard = this.state.boardSettings;
        let inputValue = input.target.value
        if (inputValue===null || inputValue==="") {
            this.setInputShadowBox("rows-input",this.state.colors.beige);
        } else if (inputValue>=4 && inputValue<=10){
            this.setInputShadowBox("rows-input",this.state.colors.green);
        } else{
            this.setInputShadowBox("rows-input",this.state.colors.red);
        }
        tempBoard.rowAmount = inputValue
        this.setState({
            boardSettings: tempBoard
        });
    }
    nextButton=()=>{
        setTimeout(()=>{
            const button = document.getElementById("next-button")
            if (button!==null){
                if(button.disabled){
                    button.style.boxShadow = "0 0 15px #" + this.state.colors.red;
                    button.style.cursor = "default"
                } else{
                    button.style.boxShadow = "0 0 15px #" + this.state.colors.green;
                    button.style.cursor = "pointer"
                }
            }
        },1)
    }

    render() {
        return(
            <div id={"master-container"}>
                <h1>Board Settings</h1>
                {/*<p>Minimum: 4x4, Maximum: 10x10</p>*/}
                <h3>Columns:</h3>
                <input title={"Minimum: 4x4, Maximum: 10x10"}
                       id={"cols-input"}
                       value={this.state.boardSettings.columnAmount}
                       maxLength={2}
                       type={"number"}
                       onChange={this.setCols}/>
                <h3>Rows:</h3>
                <input title={"Minimum: 4x4, Maximum: 10x10"}
                       id={"rows-input"}
                       value={this.state.boardSettings.rowAmount}
                       maxLength={2}
                       type={"number"}
                       onChange={this.setRows}/>
                <br/>
                <br/>
                <button id={"next-button"}
                        disabled={
                            (this.state.boardSettings.columnAmount<4 ||
                                this.state.boardSettings.columnAmount>10) ||
                            (this.state.boardSettings.rowAmount<4 ||
                                this.state.boardSettings.rowAmount>10)
                        }
                        // onClick={}
                >
                    next
                    {this.nextButton()}
                </button>
                {/*<GameBoard2 board={this.state.boardSettings}/>*/}
                {/*<Chip chip={this.state.chipSettings}/>*/}
            </div>

        )
    }
}
export default BoardSettings