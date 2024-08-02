import React, { useState } from "react";
import "./App.css";
import upload from "./assets/img/upload.png";
import remove from "./assets/img/remove.png";

const App: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [droppedItem, setDroppedItem] = useState<number | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, item: number) => {
    setDroppedItem(item);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newFileNames = files.map(file => file.name);
    setFileNames(prevFileNames => [...prevFileNames, ...newFileNames]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDropOnRemove = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (droppedItem !== null) {
      setFileNames(fileNames.filter((_, index) => index !== droppedItem));
      setDroppedItem(null); // Сбрасываем значение после удаления
    }
  };

  function delFile(id: number) {
    setFileNames(fileNames.filter((_, index) => index !== id));
  }

  return (
    <div className="mainBlock">
      <div className="modal">
        <div 
          className="uploadWindow"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="block">
            <img src={upload} alt="upload icon" />
            <span className="dropText">Drag and drop files here</span>
          </div>
        </div>
        <div className="fileList">
          <ul>
            <h3>File list:</h3>
            <div className="scroll">
              {fileNames.map((name, index) => (
                <li 
                  draggable={true} 
                  onDragStart={(event) => handleDragStart(event, index)} 
                  key={index} 
                  onClick={() => delFile(index)}
                >
                  {name}
                </li>
              ))}
            </div>
          </ul>
          <div 
            className="remove" 
            onDrop={handleDropOnRemove} 
            onDragOver={handleDragOver}
          >
            <img src={remove} alt="remove icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
