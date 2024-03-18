export default function TextField({children,inputName,inputLabel}){
    return ( <>
      <label >{inputLabel}</label>
      <input name={inputName} type="text" />
      <div>{children}</div>
      </>);
}