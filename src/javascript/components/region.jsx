import React;

const region_width = 100;
const region_height = 200;
const region_margin = 20;

class Region extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event){
        console.log(`Clicking Box ${this.props.id}`);
    }
    
    getRegionStyles(){
        let defaultStyle = this.regionDefaultStyle();
        return (this.props.alternateColor ? Object.assign({}, defaultStyle, this.colorChangedStyle()) : defaultStyle);
    }
    
    regionDefaultStyle(){
        return {
            height: region_height,
            width: region_width,
            backgroundColor: 'dddddd',
            transition: '2.5s',
            left: 100,
            margin: 10,
            display: 'inline-block'
        }
    }
    
    colorChangedStyle(){
        return {
            backgroundColor: '000000',
            marginLeft: this.props.xpos
        }
    }
    
    render(){
        return(
            <div onClick={this.handleClick} style={this.getRegionStyles()}></div>
        )
    }
}
