import React from 'react'
import { useCanvas } from './components/CanvasHook'

// class CanvasContainer extends React.Component(){
const CanvasContainer = () => {

    // render(){

        const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

        const handleCanvasMove=(e)=>{
          // on each mouse move get current mouse location 
          const currentCoord = { x: e.clientX, y: e.clientY };
          // add the newest mouse location to an array in state 
          setCoordinates([...coordinates, currentCoord]);
        };
      
        const handleClearCanvas=(e)=>{
          setCoordinates([]);
        };

        return(
            <div>
            {/* <CanvasHook/> */}
                <div>
                    <canvas 
                        className="App-canvas"
                        ref={canvasRef}
                        width={canvasWidth}
                        height={canvasHeight}
                        onMouseMove={handleCanvasMove} />

                    <div className="button" >
                        <button onClick={handleClearCanvas} > CLEAR </button>
                    </div>
                </div>
            </div>
        )
    // }
}

export default CanvasContainer