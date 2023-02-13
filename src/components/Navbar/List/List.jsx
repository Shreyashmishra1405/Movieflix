import React from "react";
import "./list.scss";
import { useRef, useState } from "react";
import ListItem from "./ListItem";
const List = ({data ,title}) => {
  const listref = useRef();

  const [Scroll,setScroll] = useState(false);  
  const [isScrolled, setisScrolled] = useState(0);

  const handle = (dir) => {
    setScroll(true);
    let dist = listref.current.getBoundingClientRect().x - 20;
    if (dir === "left" && isScrolled >= 0) {
      setisScrolled(isScrolled - 1);
      listref.current.style.transform = `translateX(${200 + dist}px)`;
    }
    if (dir === "right" && isScrolled < 10) {
      setisScrolled(isScrolled + 1);
      listref.current.style.transform = `translateX(${-200 + dist}px)`;
    }
  };

  
  return (
    <div className="List">
      <span className="title">{title}</span>
      <div className="wrapper">
        <span className="slider left" onClick={() => handle("left")} style={{display:!Scroll && "none"}}>
          <i className="fa-solid fa-chevron-left fa-2x"></i>
        </span>
        <div className="container" ref={listref}>
            {
              data.results.map((data1 ,ind)=>(
                <ListItem  data={data1} key={ind}/>
              ))
            }

        </div>
        <span className="slider right" onClick={() => handle("right")}>
          <i className="fa-solid fa-chevron-right fa-2x"></i>
        </span>
      </div>
    </div>
  );
};

export default List;
