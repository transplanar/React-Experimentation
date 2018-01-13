import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thing: 'state info',
            styles: {
               color: 'red',
               borderColor: 'black',
               borderWidth: 0.5,
               transition: '10.5s',
            },
            colorChange: false,
            regionInstances: 4
        };
     
        this.toggleColor = this.toggleColor.bind(this);
    }
           
    toggleColor(event){
        this.setState({
            colorChange: !this.state.colorChange
        });
    }
        
    assignRegionPosition(index){
        return region_margin;
    }
            
   render() {
       let index = 0;
       var regions = [];
       let count = this.state.regionInstances;

       while(count--){
            regions.push(
                <Region 
                    key={index}
                    id={index}
                    alternateColor={this.state.colorChange}
                    xpos={this.assignRegionPosition(index)}
                />
           )
           
           index++;
       }
       
       regions.push(
           <TinyRegion
                id='tiny'
                key='tiny'
                alternateColor={this.state.colorChange}
                xpos={this.assignRegionPosition(index)}
           />
        );
       
       return (
           <div>
                <h1 style={this.state.styles}>Rendering Component</h1>
                <Item styles={this.state.styles}/>
                Rendering regions:
                <div>{regions}</div>
                <button onClick={this.toggleColor}>Test Button</button>
           </div>
       )
   }
}

ReactDOM.render(
    <App thing="stuff" />, document.getElementById('app')
);