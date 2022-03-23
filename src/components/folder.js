import React, { useState } from 'react';
// import folderDetails from '../data/folder-details';

const Folder = ({ folderDetails }) => {
  const { name: folderName, items = [], isFolder } = folderDetails;
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div onClick={() => setExpand(!expand)}>{folderName}</div>
      {expand &&
        items?.length > 0 &&
        items.map((folder) => (
          <div key={folder.name} style={{ paddingLeft: '20px' }}>
            <Folder folderDetails={folder}></Folder>
          </div>
        ))}
    </>
  );
};

export default Folder;
