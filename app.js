const Grocery = () => (
  <div>
    <h2>My Dinner List</h2>
    <GroceryList groceryItems={['Cucumbers', 'Kale']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

const GroceryList = (props) => {
  return ( <ul>
   {props.groceryItems.map((item, index) =>
        <GroceryListItem itemitem = {item} key ={index} />
      )}

  </ul>)
};


class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      done: false,
      hover : false
    };
  }

  onListItemClick() {
     this.setState({
       done: !this.state.done
     });
   }

   onListItemMouse() {
      this.setState({
        hover: !this.state.hover
      });
    }

  render(){
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : "normal"
    };
    return (
      <li style={style} onClick ={this.onListItemClick.bind(this)} onMouseEnter = {this.onListItemMouse.bind(this)} onMouseLeave = {this.onListItemMouse.bind(this)}>{this.props.itemitem}</li>
    );
  }
}



ReactDOM.render(<Grocery />, document.getElementById("app"));
