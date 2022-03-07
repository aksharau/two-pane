import './LeftMenu.css';

const LeftMenu = () =>  {
    return (
		<div id="left" class="column">
            <div class="dropdown">
  <button class="dropbtn">Nodes</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Services</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
			</div>
        
	

    );
};

export default LeftMenu;