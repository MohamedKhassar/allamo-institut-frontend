import React from 'react'

const SetTitle = ({title}) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

export default SetTitle