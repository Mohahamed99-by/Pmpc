const ComponentC = ({etud}) => {
  return (
    <div>
      <h1>Component C</h1>
     <ul>
        <li>{etud.name}</li>
        <li>{etud.age}</li>
        <li>{etud.email}</li>
        <li>{etud.address}</li>
     </ul>

    </div>
  );
}

export default ComponentC;