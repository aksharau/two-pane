import "./LeftMenu.css";

const LeftMenu = (props) => {
  function sumitMenuClick(event) {
    props.onMenuSelect(event.currentTarget.firstChild.data);
  }
  return (
    <div id="left" class="column">
      <div class="dropdown">
        <button class="dropbtn">Nodes</button>
        <div class="dropdown-content">
          <a href="#" onClick={sumitMenuClick}>
            Link 1
          </a>
          <a href="#" onClick={sumitMenuClick}>
            Link 2
          </a>
          <a href="#" onClick={sumitMenuClick}>
            Link 3
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Services</button>
        <div class="dropdown-content">
          <a href="#" onClick={sumitMenuClick}>
            Link a
          </a>
          <a href="#" onClick={sumitMenuClick}>
            Link b
          </a>
          <a href="# onClick={sumitMenuClick}">Link c</a>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
